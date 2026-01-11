import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// ============================================
// CONFIGURACIÓN DEL NEWSLETTER
// ============================================
// Cuando migres a otro hosting, cambia estas opciones:
//
// OPCIÓN 1: Backend propio (PHP, Node, etc.)
// const NEWSLETTER_CONFIG = {
//   mode: 'api',
//   endpoint: 'https://tu-dominio.com/api/newsletter.php'
// };
//
// OPCIÓN 2: Mailchimp
// const NEWSLETTER_CONFIG = {
//   mode: 'mailchimp',
//   endpoint: 'https://tu-lista.us1.list-manage.com/subscribe/post?u=XXX&id=YYY'
// };
//
// OPCIÓN 3: Netlify Forms (actual)
const NEWSLETTER_CONFIG = {
  mode: 'netlify',
  endpoint: '/'
};
// ============================================

const NewsletterForm = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage(language === 'es' ? 'Por favor ingrese un email válido' : 'Please enter a valid email');
      return;
    }

    setStatus('loading');

    try {
      let response;

      if (NEWSLETTER_CONFIG.mode === 'netlify') {
        // Netlify Forms
        response = await fetch(NEWSLETTER_CONFIG.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'newsletter',
            'email': email
          }).toString()
        });
      } else if (NEWSLETTER_CONFIG.mode === 'api') {
        // Backend propio (PHP, Node, etc.)
        response = await fetch(NEWSLETTER_CONFIG.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
      } else if (NEWSLETTER_CONFIG.mode === 'mailchimp') {
        // Mailchimp (requiere proxy o configuración CORS)
        response = await fetch(NEWSLETTER_CONFIG.endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ EMAIL: email }).toString()
        });
      }

      // Para Mailchimp con no-cors, no podemos verificar la respuesta
      if (NEWSLETTER_CONFIG.mode === 'mailchimp' || response.ok) {
        setStatus('success');
        setMessage(language === 'es' 
          ? '¡Gracias! Te mantendremos informado.' 
          : 'Thank you! We\'ll keep you informed.');
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage(language === 'es' 
        ? 'Error al suscribirse. Intente nuevamente.' 
        : 'Subscription error. Please try again.');
    }
  };

  return (
    <>
      {/* Hidden form for Netlify detection (solo necesario en modo Netlify) */}
      {NEWSLETTER_CONFIG.mode === 'netlify' && (
        <form name="newsletter" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="email" name="email" />
        </form>
      )}

      {status === 'success' ? (
        <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 max-w-lg mx-auto">
          <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-white font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {message}
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input type="hidden" name="form-name" value="newsletter" />
          
          <div className="relative flex-1 w-full">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language === 'es' ? 'correo@empresa.com' : 'email@company.com'}
              className={`w-full pl-12 pr-6 py-3 rounded-lg border bg-white/95 text-gray-900 placeholder-gray-500 outline-none shadow-sm transition-colors focus:ring-2 focus:ring-white/50 focus:border-white/60 ${
                status === 'error' ? 'border-red-300' : 'border-white/30'
              }`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              disabled={status === 'loading'}
            />
          </div>
          
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary-light w-full sm:w-auto px-8 py-3 disabled:opacity-70 disabled:cursor-not-allowed" 
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
              </>
            ) : (
              <>
                <span>{language === 'es' ? 'Suscribirse' : 'Subscribe'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
      
      {status === 'error' && (
        <p className="text-red-300 text-sm mt-3 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          {message}
        </p>
      )}
    </>
  );
};

export default NewsletterForm;
