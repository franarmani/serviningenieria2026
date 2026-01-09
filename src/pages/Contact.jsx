import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ============================================
  // TRADUCCIONES
  // ============================================
  const t = useMemo(() => ({
    es: {
      // Hero
      badge: 'Contáctenos',
      heroTitle: 'CONECTEMOS',
      heroHighlight: 'SU PROYECTO',
      heroSubtitle: 'Más de 46 años respaldando a la industria argentina. Nuestro equipo de ingenieros está listo para atender su consulta.',
      // Form
      formTitle: 'Envíenos su Consulta',
      formSubtitle: 'Complete el formulario y nuestro equipo técnico-comercial le responderá dentro de las próximas 24 horas hábiles.',
      // Fields
      nameLabel: 'Nombre y Apellido',
      namePlaceholder: 'Ej: Juan Pérez',
      companyLabel: 'Empresa / Representa a',
      companyPlaceholder: 'Ej: SERVIN / Represento a ...',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Ej: Cotización / Consulta técnica',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Escriba su mensaje...',
      // Buttons
      sendBtn: 'Enviar',
      sendingBtn: 'Enviando...',
      // Validation
      required: 'Campo requerido',
      invalidEmail: 'Email inválido',
      // Success
      successTitle: '¡Consulta Enviada!',
      successMsg: 'Nuestro equipo se comunicará con usted dentro de las próximas 24 horas hábiles.',
      sendAnother: 'Enviar otra consulta',
      // Offices
      officesTitle: 'Nuestras Oficinas',
      officesSubtitle: 'Presencia estratégica en las principales regiones industriales de Argentina',
      headquarters: 'Casa Matriz',
      branch: 'Sucursal',
      viewMap: 'Ver en Mapa',
      callNow: 'Llamar',
      sendEmail: 'Enviar Email',
      schedule: 'Horario',
      weekdays: 'Lun a Vie',
      // CTA
      ctaWhatsapp: 'WhatsApp'
    },
    en: {
      // Hero
      badge: 'Contact Us',
      heroTitle: 'LET\'S CONNECT',
      heroHighlight: 'YOUR PROJECT',
      heroSubtitle: 'Over 46 years supporting Argentine industry. Our team of engineers is ready to assist with your inquiry.',
      // Form
      formTitle: 'Send Us Your Inquiry',
      formSubtitle: 'Fill out the form and our technical-commercial team will respond within the next 24 business hours.',
      // Fields
      nameLabel: 'Name & Surname',
      namePlaceholder: 'E.g.: John Smith',
      companyLabel: 'Company / Representing',
      companyPlaceholder: 'E.g.: Your company / Representing ...',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'E.g.: Quotation / Technical inquiry',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message...',
      // Buttons
      sendBtn: 'Send',
      sendingBtn: 'Sending...',
      // Validation
      required: 'Required field',
      invalidEmail: 'Invalid email',
      // Success
      successTitle: 'Inquiry Sent!',
      successMsg: 'Our team will contact you within the next 24 business hours.',
      sendAnother: 'Send another inquiry',
      // Offices
      officesTitle: 'Our Offices',
      officesSubtitle: 'Strategic presence in Argentina\'s main industrial regions',
      headquarters: 'Headquarters',
      branch: 'Branch',
      viewMap: 'View on Map',
      callNow: 'Call',
      sendEmail: 'Send Email',
      schedule: 'Hours',
      weekdays: 'Mon to Fri',
      // CTA
      ctaWhatsapp: 'WhatsApp'
    }
  }), []);

  const txt = t[language];

  // ============================================
  // OFICINAS
  // ============================================
  const offices = [
    {
      name: 'Bahía Blanca',
      type: txt.headquarters,
      address: 'Av. Colón 2110/16',
      city: 'B8000FNK, Bahía Blanca',
      province: 'Buenos Aires',
      phone: '+54 291 456-9600',
      email: 'servinbbca@serviningenieria.com.ar',
      hours: '8:00 - 17:00',
      mapUrl: 'https://maps.google.com/?q=Av+Colon+2110+Bahia+Blanca+Argentina',
      isMain: true,
      whatsapp: '+5492914569600'
    },
    {
      name: 'Neuquén',
      type: txt.branch,
      address: 'Félix San Martín 128',
      city: 'Q8300, Neuquén',
      province: 'Neuquén',
      phone: '+54 299 447-3200',
      email: 'servinqn@serviningenieria.com.ar',
      hours: '8:00 - 17:00',
      mapUrl: 'https://maps.google.com/?q=Felix+San+Martin+128+Neuquen+Argentina',
      isMain: false,
      whatsapp: '+5492994473200'
    },
    {
      name: 'Buenos Aires',
      type: txt.branch,
      address: 'Avda. Rivadavia 1611',
      city: 'C1033AAG, CABA',
      province: 'Buenos Aires',
      phone: '+54 11 4381-9480',
      email: 'servinbue@serviningenieria.com.ar',
      hours: '9:00 - 18:00',
      mapUrl: 'https://maps.google.com/?q=Rivadavia+1611+Buenos+Aires+Argentina',
      isMain: false,
      whatsapp: '+5491143819480'
    }
  ];

  // ============================================
  // ESTADO
  // ============================================
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = txt.required;
    if (!formData.company.trim()) newErrors.company = txt.required;
    if (!formData.subject.trim()) newErrors.subject = txt.required;
    if (!formData.message.trim()) newErrors.message = txt.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', company: '', subject: '', message: '' });
    setSubmitSuccess(false);
    setErrors({});
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="min-h-screen bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION - Estilo Laboratorio Móvil */}
      {/* ============================================ */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/galeriahome/1.jpg"
            alt="SERVIN INGENIERÍA Contact"
            className="w-full h-full object-cover" 
            style={{ filter: 'blur(3px)' }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-12 lg:py-16 xl:py-20">
          {/* Badge */}
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-2 sm:px-4 md:px-6 py-0.5 sm:py-2 md:py-2.5">
              <div className="w-1 sm:w-2 h-1 sm:h-2 bg-corporate-red rounded-full mr-1.5 sm:mr-3 animate-pulse"></div>
              <span className="text-white/90 text-[8px] sm:text-xs md:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {txt.badge}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {txt.heroTitle}{' '}
            <span className="text-corporate-red">{txt.heroHighlight}</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {txt.heroSubtitle}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-medium mb-1 sm:mb-2 tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Deslizar' : 'Scroll'}
            </span>
            <svg className="w-3 h-5 sm:w-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FORMULARIO PRINCIPAL */}
      {/* ============================================ */}
      <section id="formulario" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center bg-corporate-red/10 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-corporate-red text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {txt.formTitle}
              </span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {txt.formSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Formulario - 2 columnas en desktop */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                {/* Form Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {submitSuccess ? (
                    /* Success State */
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">{txt.successTitle}</h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">{txt.successMsg}</p>
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center px-6 py-3 bg-corporate-red hover:bg-red-700 text-white font-semibold rounded-xl transition-all"
                      >
                        {txt.sendAnother}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>

                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                              {txt.nameLabel} <span className="text-corporate-red">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder={txt.namePlaceholder}
                              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all outline-none shadow-none appearance-none text-sm sm:text-base ${
                                errors.name
                                  ? 'border-red-500 bg-red-50'
                                  : 'border-gray-200 focus:border-corporate-red'
                              }`}
                            />
                            {errors.name && <p className="mt-1 text-[10px] sm:text-xs text-red-500">{errors.name}</p>}
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                              {txt.companyLabel} <span className="text-corporate-red">*</span>
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder={txt.companyPlaceholder}
                              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all outline-none shadow-none appearance-none text-sm sm:text-base ${
                                errors.company
                                  ? 'border-red-500 bg-red-50'
                                  : 'border-gray-200 focus:border-corporate-red'
                              }`}
                            />
                            {errors.company && <p className="mt-1 text-[10px] sm:text-xs text-red-500">{errors.company}</p>}
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                              {txt.subjectLabel} <span className="text-corporate-red">*</span>
                            </label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder={txt.subjectPlaceholder}
                              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all outline-none shadow-none appearance-none text-sm sm:text-base ${
                                errors.subject
                                  ? 'border-red-500 bg-red-50'
                                  : 'border-gray-200 focus:border-corporate-red'
                              }`}
                            />
                            {errors.subject && <p className="mt-1 text-[10px] sm:text-xs text-red-500">{errors.subject}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                            {txt.messageLabel} <span className="text-corporate-red">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={txt.messagePlaceholder}
                            rows={6}
                            className={`w-full px-3 sm:px-4 py-3 rounded-xl border transition-all outline-none shadow-none appearance-none resize-none text-sm sm:text-base ${
                              errors.message
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200 focus:border-corporate-red'
                            }`}
                          />
                          {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message}</p>}
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center space-x-2 text-sm sm:text-base ${
                              isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-corporate-red hover:bg-red-700 shadow-lg hover:shadow-xl'
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>{txt.sendingBtn}</span>
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span>{txt.sendBtn}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Oficinas */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-4 hidden lg:block">
                  {txt.officesTitle}
                </h3>
                
                {/* Office Cards */}
                {offices.map((office, i) => (
                  <div 
                    key={i}
                    className={`bg-white rounded-xl border-2 p-4 transition-all duration-300 cursor-pointer ${
                      activeOffice === i 
                        ? 'border-corporate-red shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setActiveOffice(i)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">{office.name}</h4>
                          {office.isMain && (
                            <span className="text-[10px] bg-corporate-red/10 text-corporate-red px-1.5 py-0.5 rounded-full font-medium">
                              {office.type}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500">{office.address}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{office.city}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                        activeOffice === i ? 'bg-corporate-red text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-500 mb-3">
                      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{txt.weekdays} {office.hours}</span>
                    </div>

                    {activeOffice === i && (
                      <div className="flex gap-2 pt-3 border-t border-gray-100">
                        <a 
                          href={`tel:${office.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center px-2 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium rounded-lg transition-all"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                          {txt.callNow}
                        </a>
                        <a 
                          href={office.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center px-2 py-2 bg-corporate-red hover:bg-red-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-all"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                          </svg>
                          {txt.viewMap}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

   

    </div>
  );
};

export default Contact;
