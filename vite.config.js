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
          // CORS headers
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
          
          if (req.method === 'OPTIONS') {
            res.statusCode = 200
            res.end()
            return
          }

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

            // En desarrollo, solo logear el email (no enviar realmente)
            console.log('\n═══════════════════════════════════════════════════════════')
            console.log('📧 EMAIL MOCK (DESARROLLO) - No se envía realmente')
            console.log('═══════════════════════════════════════════════════════════')
            console.log('De:', process.env.CONTACT_FROM || 'serviningenieriaweb@gmail.com')
            console.log('Para:', process.env.CONTACT_TO || 'ventasbbca@serviningenieria.com.ar')
            console.log('Asunto:', `[SERVIN] ${subject}`)
            console.log('───────────────────────────────────────────────────────────')
            console.log('Datos del formulario:')
            console.log('Nombre:', name)
            console.log('Empresa:', company)
            console.log('Email de contacto:', email)
            console.log('Mensaje:', message)
            console.log('Idioma:', language)
            console.log('═══════════════════════════════════════════════════════════\n')

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true, message: 'Email logged to console (development mode)' }))
          } catch (error) {
            console.error('[vite contact api] Error:', error)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: 'Server error' }))
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