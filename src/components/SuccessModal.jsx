import React from 'react';

function SuccessModal({ onClose, language = 'es' }) {
  const messages = {
    es: {
      title: '✅ Consulta Enviada',
      message: 'Hemos recibido tu mensaje correctamente. Nuestro equipo se pondrá en contacto a la brevedad.',
      button: 'Cerrar'
    },
    en: {
      title: '✅ Inquiry Sent',
      message: 'We have received your message successfully. Our team will get in touch shortly.',
      button: 'Close'
    }
  };

  const txt = messages[language];

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center animate-scale-in transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icono de éxito */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {txt.title}
        </h2>

        {/* Mensaje */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {txt.message}
        </p>

        {/* Botón */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-corporate-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-corporate-red focus:ring-offset-2"
        >
          {txt.button}
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
