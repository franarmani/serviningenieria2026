import React, { useState } from 'react';

function ContactForm({ language = 'es', initialSubject = '' }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const translations = {
    es: {
      nameLabel: 'Nombre y Apellido',
      namePlaceholder: 'Ej: Juan Pérez',
      companyLabel: 'Empresa / Representa a',
      companyPlaceholder: 'Ej: SERVIN / Represento a...',
      emailLabel: 'Email',
      emailPlaceholder: 'Ej: nombre@empresa.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Ej: Cotización / Consulta técnica',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Escriba su mensaje...',
      attachmentLabel: 'Adjuntar Archivo (opcional)',
      attachmentHint: 'PDF, Word, Excel, Imágenes - Máx. 25 MB',
      noFileSelected: 'Sin archivos seleccionados',
      chooseFile: 'Elegir archivo',
      sendBtn: 'Enviar Consulta',
      sendingBtn: 'Enviando...',
      successTitle: '✅ ¡Consulta Enviada!',
      successMessage: 'Hemos recibido tu mensaje correctamente. Nuestro equipo se pondrá en contacto contigo a la brevedad.',
      errorTitle: '❌ Error al Enviar',
      errorMessage: 'Hubo un problema al enviar tu consulta. Por favor, intenta nuevamente o contáctanos directamente a ventasbbca@serviningenieria.com.ar',
      closeBtn: 'Cerrar'
    },
    en: {
      nameLabel: 'Name & Surname',
      namePlaceholder: 'E.g.: John Smith',
      companyLabel: 'Company / Representing',
      companyPlaceholder: 'E.g.: Your company / Representing...',
      emailLabel: 'Email',
      emailPlaceholder: 'E.g.: name@company.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'E.g.: Quotation / Technical inquiry',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message...',
      attachmentLabel: 'Attach File (optional)',
      attachmentHint: 'PDF, Word, Excel, Images - Max. 25 MB',
      noFileSelected: 'No file selected',
      chooseFile: 'Choose file',
      sendBtn: 'Send Inquiry',
      sendingBtn: 'Sending...',
      successTitle: '✅ Inquiry Sent!',
      successMessage: 'We have received your message successfully. Our team will get in touch with you shortly.',
      errorTitle: '❌ Sending Error',
      errorMessage: 'There was a problem sending your inquiry. Please try again or contact us directly at ventasbbca@serviningenieria.com.ar',
      closeBtn: 'Close'
    }
  };

  const txt = translations[language];

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tamaño (25 MB)
      if (file.size > 25 * 1024 * 1024) {
        alert(language === 'es' ? 'El archivo supera el límite de 25 MB' : 'File exceeds 25 MB limit');
        e.target.value = '';
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const form = e.target;
    const formData = new FormData(form);

    // Si no hay archivo adjunto, eliminar el campo del FormData
    if (!selectedFile) {
      formData.delete('attachment');
    }

    console.log('📤 Sending form data:', {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      hasAttachment: formData.has('attachment')
    });

    try {
      // ===== BACKEND VERCEL =====
      const response = await fetch('https://servin-mail-api.vercel.app/api/send-mail', {
        method: 'POST',
        body: formData, // Envía FormData directamente (multipart/form-data)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('❌ Backend error:', errorData);
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const result = await response.json();
      
      if (result.success) {
        setShowSuccess(true);
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* CAMPOS PRINCIPALES */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    {txt.nameLabel} <span className="text-corporate-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={txt.namePlaceholder}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-corporate-red focus:outline-none focus:ring-1 focus:ring-corporate-red transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    {txt.companyLabel} <span className="text-corporate-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder={txt.companyPlaceholder}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-corporate-red focus:outline-none focus:ring-1 focus:ring-corporate-red transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    {txt.emailLabel} <span className="text-corporate-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={txt.emailPlaceholder}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-corporate-red focus:outline-none focus:ring-1 focus:ring-corporate-red transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    {txt.subjectLabel} <span className="text-corporate-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder={txt.subjectPlaceholder}
                    defaultValue={initialSubject}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-corporate-red focus:outline-none focus:ring-1 focus:ring-corporate-red transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* MENSAJE */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  {txt.messageLabel} <span className="text-corporate-red">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder={txt.messagePlaceholder}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-corporate-red focus:outline-none focus:ring-1 focus:ring-corporate-red transition-all text-sm sm:text-base resize-vertical"
                />
              </div>

              {/* ARCHIVO ADJUNTO */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  {txt.attachmentLabel}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="attachment"
                    id="fileInput"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif"
                    className="hidden"
                  />
                  <label 
                    htmlFor="fileInput"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 hover:border-corporate-red focus-within:border-corporate-red focus-within:ring-1 focus-within:ring-corporate-red transition-all text-sm sm:text-base cursor-pointer flex items-center justify-between bg-white"
                  >
                    <span className={selectedFile ? "text-gray-900" : "text-gray-400"}>
                      {selectedFile ? selectedFile.name : txt.noFileSelected}
                    </span>
                    <span className="ml-4 px-4 py-2 rounded-lg bg-corporate-red text-white text-sm font-semibold hover:bg-red-700 transition-colors">
                      {txt.chooseFile}
                    </span>
                  </label>
                  <p className="mt-1.5 text-xs text-gray-500">
                    {txt.attachmentHint}
                  </p>
                  {selectedFile && (
                    <p className="mt-2 text-sm text-corporate-red font-medium">
                      📎 {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>
              </div>

              {/* BOTÓN */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-corporate-red text-white font-semibold rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-corporate-red focus:ring-offset-2 text-sm sm:text-base"
              >
                {isSubmitting ? txt.sendingBtn : txt.sendBtn}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* MODAL DE ÉXITO */}
      {showSuccess && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setShowSuccess(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-scale-in transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icono de éxito */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {txt.successTitle}
            </h2>

            {/* Mensaje */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {txt.successMessage}
            </p>

            {/* Botón */}
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full px-6 py-3 bg-corporate-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-corporate-red focus:ring-offset-2"
            >
              {txt.closeBtn}
            </button>
          </div>
        </div>
      )}

      {/* MODAL DE ERROR */}
      {showError && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setShowError(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-scale-in transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icono de error */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {txt.errorTitle}
            </h2>

            {/* Mensaje */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {txt.errorMessage}
            </p>

            {/* Botón */}
            <button
              onClick={() => setShowError(false)}
              className="w-full px-6 py-3 bg-corporate-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-corporate-red focus:ring-offset-2"
            >
              {txt.closeBtn}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
