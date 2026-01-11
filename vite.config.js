import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmail } from './server/contactEmail.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'contact-api-dev',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res, next) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: 'Method Not Allowed' }))
            return
          }

          try {
            const body = await readJsonBody(req)

            const name = String(body.name || '').trim()
            const company = String(body.company || '').trim()
            const email = String(body.email || '').trim()
            const subject = String(body.subject || '').trim()
            const message = String(body.message || '').trim()
            const language = String(body.language || 'es')

            if (!name || !company || !email || !subject || !message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: 'Missing required fields' }))
              return
            }

            if (!/^\S+@\S+\.\S+$/.test(email)) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: 'Invalid email' }))
              return
            }

            await sendContactEmail({ name, company, email, subject, message, language })

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch (error) {
            console.error('[vite contact api] Error:', error)
            res.statusCode = error?.code === 'MISSING_EMAIL_ENV' ? 501 : 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: 'Email service not configured' }))
          }
        })
      }
    }
  ],
})

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch (e) {
        reject(e)
      }
    })
    req.on('error', reject)
  })
}