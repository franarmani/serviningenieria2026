import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const location = useLocation();
  
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
      heroTitle: 'Conectemos',
      heroHighlight: 'Su Proyecto',
      heroSubtitle: 'Más de 46 años respaldando a la industria argentina. Nuestro equipo de ingenieros está listo para atender su consulta.',
      // Stats
      stat1Value: '+46',
      stat1Label: 'Años de Experiencia',
      stat2Value: '+400',
      stat2Label: 'Clientes Activos',
      stat3Value: '24hs',
      stat3Label: 'Tiempo de Respuesta',
      stat4Value: '+3500',
      stat4Label: 'Válvulas Calibradas',
      // Form
      formTitle: 'Envíenos su Consulta',
      formSubtitle: 'Complete el formulario y nuestro equipo técnico-comercial le responderá dentro de las próximas 24 horas hábiles.',
      step1Title: 'Tipo de Consulta',
      step2Title: 'Sus Datos',
      step3Title: 'Mensaje',
      // Categories - 7 Divisiones + General
      catMateriales: 'Ingeniería de Materiales',
      catMatDesc: 'Acoplamientos, componentes, válvulas y materiales industriales',
      catPlanta: 'Planta de Mantenimiento Industrial',
      catPlantaDesc: 'Reparación y certificación de válvulas con banco Ventil',
      catLabMovil: 'Laboratorio Móvil',
      catLabMovilDesc: 'Calibración y ensayos en campo',
      catPreventest: 'PREVENTEST – Calibración In Situ',
      catPreventestDesc: 'Calibración de válvulas sin parar planta',
      catInspeccion: 'Inspección de Tanques API & END',
      catInspeccionDesc: 'Auditorías certificadas y ensayos no destructivos',
      catRevestimiento: 'Revestimiento Industrial',
      catRevestimientoDesc: 'Protección anticorrosiva y recuperación de superficies',
      catGranallado: 'Cabinas de Granallado',
      catGranalladoDesc: 'Preparación de superficies metálicas',
      catPrefabricados: 'Prefabricados',
      catPrefabricadosDesc: 'Piping y estructuras prefabricadas para proyectos industriales',
      catGeneral: 'Consulta General',
      catGenDesc: 'Información, empleo, otros',
      // Departments
      deptMateriales: 'Comercial de Materiales',
      deptPlanta: 'Planta de Mantenimiento',
      deptLabMovil: 'Laboratorio Móvil',
      deptPreventest: 'Servicios In Situ',
      deptInspeccion: 'Inspección Técnica',
      deptRevestimiento: 'Revestimiento Industrial',
      deptGranallado: 'Granallado Industrial',
      deptPrefabricados: 'Prefabricados y Montaje',
      deptGeneral: 'Administración General',
      derivedTo: 'Su consulta será derivada a:',
      // Fields
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Ej: Juan Pérez',
      companyLabel: 'Empresa',
      companyPlaceholder: 'Nombre de su empresa',
      emailLabel: 'Email Corporativo',
      emailPlaceholder: 'nombre@empresa.com',
      phoneLabel: 'Teléfono / WhatsApp',
      phonePlaceholder: '+54 11 1234-5678',
      positionLabel: 'Cargo (opcional)',
      positionPlaceholder: 'Ej: Jefe de Mantenimiento',
      messageLabel: 'Describa su consulta',
      messagePlaceholder: 'Cuéntenos sobre su proyecto o necesidad. Incluya detalles técnicos relevantes, plazos, ubicación del proyecto, etc.',
      // Buttons
      nextBtn: 'Continuar',
      backBtn: 'Atrás',
      sendBtn: 'Enviar Consulta',
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
      ctaTitle: '¿Prefiere contacto directo?',
      ctaDesc: 'Nuestro equipo comercial está disponible para atenderle por teléfono o WhatsApp.',
      ctaPhone: 'Llamar Ahora',
      ctaWhatsapp: 'WhatsApp'
    },
    en: {
      // Hero
      badge: 'Contact Us',
      heroTitle: 'Let\'s Connect',
      heroHighlight: 'Your Project',
      heroSubtitle: 'Over 46 years supporting Argentine industry. Our team of engineers is ready to assist with your inquiry.',
      // Stats
      stat1Value: '+46',
      stat1Label: 'Years of Experience',
      stat2Value: '+400',
      stat2Label: 'Active Clients',
      stat3Value: '24hrs',
      stat3Label: 'Response Time',
      stat4Value: '+3500',
      stat4Label: 'Valves Calibrated',
      // Form
      formTitle: 'Send Us Your Inquiry',
      formSubtitle: 'Fill out the form and our technical-commercial team will respond within the next 24 business hours.',
      step1Title: 'Inquiry Type',
      step2Title: 'Your Info',
      step3Title: 'Message',
      // Categories - 7 Divisions + General
      catMateriales: 'Materials Engineering',
      catMatDesc: 'Couplings, components, valves and industrial materials',
      catPlanta: 'Industrial Maintenance Plant',
      catPlantaDesc: 'Valve repair and certification with Ventil bench',
      catLabMovil: 'Mobile Laboratory',
      catLabMovilDesc: 'Field calibration and testing',
      catPreventest: 'PREVENTEST – On-Site Calibration',
      catPreventestDesc: 'Valve calibration without plant shutdown',
      catInspeccion: 'API Tank Inspection & NDT',
      catInspeccionDesc: 'Certified audits and non-destructive testing',
      catRevestimiento: 'Industrial Coating',
      catRevestimientoDesc: 'Anti-corrosive protection and surface recovery',
      catGranallado: 'Shot Blasting Booths',
      catGranalladoDesc: 'Metal surface preparation',
      catPrefabricados: 'Prefabrication',
      catPrefabricadosDesc: 'Prefabricated piping and structures for industrial projects',
      catGeneral: 'General Inquiry',
      catGenDesc: 'Information, careers, other',
      // Departments
      deptMateriales: 'Materials Sales',
      deptPlanta: 'Maintenance Plant',
      deptLabMovil: 'Mobile Laboratory',
      deptPreventest: 'On-Site Services',
      deptInspeccion: 'Technical Inspection',
      deptRevestimiento: 'Industrial Coating',
      deptGranallado: 'Industrial Shot Blasting',
      deptPrefabricados: 'Prefabrication & Assembly',
      deptGeneral: 'General Administration',
      derivedTo: 'Your inquiry will be routed to:',
      // Fields
      nameLabel: 'Full Name',
      namePlaceholder: 'E.g.: John Smith',
      companyLabel: 'Company',
      companyPlaceholder: 'Your company name',
      emailLabel: 'Corporate Email',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'Phone / WhatsApp',
      phonePlaceholder: '+1 123 456-7890',
      positionLabel: 'Position (optional)',
      positionPlaceholder: 'E.g.: Maintenance Manager',
      messageLabel: 'Describe your inquiry',
      messagePlaceholder: 'Tell us about your project or need. Include relevant technical details, deadlines, project location, etc.',
      // Buttons
      nextBtn: 'Continue',
      backBtn: 'Back',
      sendBtn: 'Send Inquiry',
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
      ctaTitle: 'Prefer direct contact?',
      ctaDesc: 'Our sales team is available to assist you by phone or WhatsApp.',
      ctaPhone: 'Call Now',
      ctaWhatsapp: 'WhatsApp'
    }
  }), []);

  const txt = t[language];

  // ============================================
  // CATEGORÍAS - 7 Divisiones + Consulta General
  // ============================================
  const categories = [
    { 
      id: 'materiales', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      name: txt.catMateriales, 
      desc: txt.catMatDesc, 
      dept: txt.deptMateriales
    },
    { 
      id: 'planta', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      name: txt.catPlanta, 
      desc: txt.catPlantaDesc, 
      dept: txt.deptPlanta
    },
    { 
      id: 'laboratorio', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      name: txt.catLabMovil, 
      desc: txt.catLabMovilDesc, 
      dept: txt.deptLabMovil
    },
    { 
      id: 'preventest', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      name: txt.catPreventest, 
      desc: txt.catPreventestDesc, 
      dept: txt.deptPreventest
    },
    { 
      id: 'inspeccion', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      name: txt.catInspeccion, 
      desc: txt.catInspeccionDesc, 
      dept: txt.deptInspeccion
    },
    { 
      id: 'revestimiento', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      name: txt.catRevestimiento, 
      desc: txt.catRevestimientoDesc, 
      dept: txt.deptRevestimiento
    },
    { 
      id: 'granallado', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      name: txt.catGranallado, 
      desc: txt.catGranalladoDesc, 
      dept: txt.deptGranallado
    },
    { 
      id: 'prefabricados', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      name: txt.catPrefabricados, 
      desc: txt.catPrefabricadosDesc, 
      dept: txt.deptPrefabricados
    },
    { 
      id: 'general', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      name: txt.catGeneral, 
      desc: txt.catGenDesc, 
      dept: txt.deptGeneral
    }
  ];

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
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  // Detectar categoría desde URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('categoria') || params.get('category');
    if (cat && categories.find(c => c.id === cat)) {
      setFormData(prev => ({ ...prev, category: cat }));
    }
  }, [location.search]);

  const selectedCategory = categories.find(c => c.id === formData.category);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const selectCategory = (id) => {
    setFormData(prev => ({ ...prev, category: id }));
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = txt.required;
    if (!formData.company.trim()) newErrors.company = txt.required;
    if (!formData.email.trim()) {
      newErrors.email = txt.required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = txt.invalidEmail;
    }
    if (!formData.phone.trim()) newErrors.phone = txt.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = txt.required;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && formData.category) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ category: '', name: '', company: '', email: '', phone: '', position: '', message: '' });
    setStep(1);
    setSubmitSuccess(false);
    setErrors({});
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="min-h-screen bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION - Professional Corporate */}
      {/* ============================================ */}
      <section className="relative h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="/galeriahome/1.png"
            alt="SERVIN INGENIERÍA Contact"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(30%)' }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
        }}></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          {/* Corporate badge */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {txt.badge}
              </span>
            </div>
          </div>
          
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '0.9'
            }}>
              {txt.heroTitle}
            </h1>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-2 sm:mr-4"></div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '0.9'
              }}>
                {txt.heroHighlight}
              </h2>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-2 sm:ml-4"></div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {txt.heroSubtitle}
          </p>
          
          {/* Stats Row - Solo 3 stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 max-w-3xl mx-auto">
            {[
              { value: txt.stat1Value, label: txt.stat1Label },
              { value: txt.stat2Value, label: txt.stat2Label },
              { value: txt.stat4Value, label: txt.stat4Label }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-xs sm:text-sm text-white/60" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button - Solo formulario */}
          <div className="flex items-center justify-center px-4">
            <a 
              href="#formulario" 
              className="btn-primary w-full sm:w-64 lg:w-72 h-12 sm:h-14 lg:h-16 text-sm sm:text-base lg:text-sm sm:text-base md:text-lg"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Enviar Consulta' : 'Send Inquiry'}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[10px] sm:text-xs font-medium mb-2 tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Deslizar' : 'Scroll'}
            </span>
            <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-sm sm:text-base">
              {txt.formSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Formulario - 2 columnas en desktop */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                
                {/* Progress Steps - Compact */}
                <div className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-900 to-gray-800">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                    {[
                      { num: 1, label: txt.step1Title },
                      { num: 2, label: txt.step2Title },
                      { num: 3, label: txt.step3Title }
                    ].map((s, i) => (
                      <React.Fragment key={s.num}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-xs sm:text-sm transition-all duration-300 ${
                            step > s.num 
                              ? 'bg-green-500 text-white' 
                              : step === s.num 
                                ? 'bg-corporate-red text-white ring-4 ring-corporate-red/30' 
                                : 'bg-gray-600 text-gray-400'
                          }`}>
                            {step > s.num ? (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : s.num}
                          </div>
                          <span className={`text-xs sm:text-xs sm:text-sm font-medium hidden sm:block ${
                            step >= s.num ? 'text-white' : 'text-gray-500'
                          }`}>{s.label}</span>
                        </div>
                        {i < 2 && (
                          <div className={`w-8 sm:w-12 lg:w-16 h-0.5 rounded transition-all duration-300 ${
                            step > s.num ? 'bg-green-500' : 'bg-gray-600'
                          }`}></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

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
                      {/* Step 1: Categoría */}
                      {step === 1 && (
                        <div className="space-y-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                            {categories.map((cat) => (
                              <button
                                key={cat.id}
                                type="button"
                                onClick={() => selectCategory(cat.id)}
                                className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-300 group ${
                                  formData.category === cat.id
                                    ? 'border-corporate-red bg-red-50 shadow-md'
                                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white'
                                }`}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                                    formData.category === cat.id 
                                      ? 'bg-corporate-red text-white' 
                                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                  }`}>
                                    {cat.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className={`font-semibold text-sm sm:text-sm sm:text-base leading-tight transition-colors ${
                                      formData.category === cat.id ? 'text-corporate-red' : 'text-gray-900'
                                    }`}>
                                      {cat.name}
                                    </h4>
                                    <p className="text-[10px] sm:text-xs text-gray-500 truncate mt-0.5">{cat.desc}</p>
                                  </div>
                                  {formData.category === cat.id && (
                                    <div className="w-5 h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* Derivation Notice */}
                          {selectedCategory && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-3">
                              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <p className="text-xs sm:text-sm text-green-800">
                                {txt.derivedTo} <strong>{selectedCategory.dept}</strong>
                              </p>
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={handleNext}
                            disabled={!formData.category}
                            className={`w-full py-3 sm:py-3.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-sm sm:text-base ${
                              formData.category 
                                ? 'bg-corporate-red hover:bg-red-700 shadow-lg hover:shadow-xl' 
                                : 'bg-gray-300 cursor-not-allowed'
                            }`}
                          >
                            <span>{txt.nextBtn}</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      )}

                      {/* Step 2: Datos */}
                      {step === 2 && (
                        <div className="space-y-6">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs sm:text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                                {txt.nameLabel} <span className="text-corporate-red">*</span>
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={txt.namePlaceholder}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 transition-all outline-none text-sm sm:text-sm sm:text-base ${
                                  errors.name 
                                    ? 'border-red-500 bg-red-50' 
                                    : 'border-gray-200 focus:border-corporate-red focus:ring-4 focus:ring-corporate-red/10'
                                }`}
                              />
                              {errors.name && <p className="mt-1 text-[10px] sm:text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div>
                              <label className="block text-xs sm:text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                                {txt.companyLabel} <span className="text-corporate-red">*</span>
                              </label>
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder={txt.companyPlaceholder}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 transition-all outline-none text-sm sm:text-sm sm:text-base ${
                                  errors.company 
                                    ? 'border-red-500 bg-red-50' 
                                    : 'border-gray-200 focus:border-corporate-red focus:ring-4 focus:ring-corporate-red/10'
                                }`}
                              />
                              {errors.company && <p className="mt-1 text-[10px] sm:text-xs text-red-500">{errors.company}</p>}
                            </div>
                            <div>
                              <label className="block text-xs sm:text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                                {txt.emailLabel} <span className="text-corporate-red">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={txt.emailPlaceholder}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 transition-all outline-none text-sm sm:text-sm sm:text-base ${
                                  errors.email 
                                    ? 'border-red-500 bg-red-50' 
                                    : 'border-gray-200 focus:border-corporate-red focus:ring-4 focus:ring-corporate-red/10'
                                }`}
                              />
                              {errors.email && <p className="mt-1 text-[10px] sm:text-xs text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                              <label className="block text-xs sm:text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                                {txt.phoneLabel} <span className="text-corporate-red">*</span>
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={txt.phonePlaceholder}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 transition-all outline-none text-sm sm:text-sm sm:text-base ${
                                  errors.phone 
                                    ? 'border-red-500 bg-red-50' 
                                    : 'border-gray-200 focus:border-corporate-red focus:ring-4 focus:ring-corporate-red/10'
                                }`}
                              />
                              {errors.phone && <p className="mt-1 text-[10px] sm:text-xs text-red-500">{errors.phone}</p>}
                            </div>
                            <div className="sm:col-span-2">
                              <label className="block text-xs sm:text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                                {txt.positionLabel}
                              </label>
                              <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder={txt.positionPlaceholder}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-corporate-red focus:ring-4 focus:ring-corporate-red/10 transition-all outline-none text-sm sm:text-sm sm:text-base"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="sm:flex-1 py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center space-x-2 text-sm sm:text-sm sm:text-base order-2 sm:order-1"
                            >
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                              </svg>
                              <span>{txt.backBtn}</span>
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="sm:flex-1 py-3 rounded-xl font-semibold text-white bg-corporate-red hover:bg-red-700 shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-sm sm:text-sm sm:text-base order-1 sm:order-2"
                            >
                              <span>{txt.nextBtn}</span>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Mensaje */}
                      {step === 3 && (
                        <div className="space-y-6">
                          {/* Summary */}
                          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-9 h-9 bg-corporate-red rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                {selectedCategory?.icon}
                              </div>
                              <div className="min-w-0">
                                <p className="font-semibold text-gray-900 text-xs sm:text-sm">{selectedCategory?.name}</p>
                                <p className="text-[10px] sm:text-xs text-gray-500 truncate">{formData.company} • {formData.email}</p>
                              </div>
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
                              rows={5}
                              className={`w-full px-3 sm:px-4 py-3 rounded-xl border-2 transition-all outline-none resize-none text-sm sm:text-sm sm:text-base ${
                                errors.message 
                                  ? 'border-red-500 bg-red-50' 
                                  : 'border-gray-200 focus:border-corporate-red focus:ring-4 focus:ring-corporate-red/10'
                              }`}
                            />
                            {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message}</p>}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="sm:flex-1 py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center space-x-2 text-sm sm:text-sm sm:text-base order-2 sm:order-1"
                            >
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                              </svg>
                              <span>{txt.backBtn}</span>
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`sm:flex-1 py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center space-x-2 text-sm sm:text-sm sm:text-base order-1 sm:order-2 ${
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
                      )}
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
                          <h4 className="font-bold text-gray-900 text-sm sm:text-sm sm:text-base">{office.name}</h4>
                          {office.isMain && (
                            <span className="text-[10px] bg-corporate-red/10 text-corporate-red px-1.5 py-0.5 rounded-full font-medium">
                              {office.type}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-xs sm:text-sm text-gray-500">{office.address}</p>
                        <p className="text-xs sm:text-xs sm:text-sm text-gray-500">{office.city}</p>
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
                          className="flex-1 inline-flex items-center justify-center px-2 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-xs sm:text-sm font-medium rounded-lg transition-all"
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
                          className="flex-1 inline-flex items-center justify-center px-2 py-2 bg-corporate-red hover:bg-red-700 text-white text-xs sm:text-xs sm:text-sm font-medium rounded-lg transition-all"
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

      {/* ============================================ */}
      {/* MAPA INTERACTIVO */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-corporate-red/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-corporate-red text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {language === 'es' ? 'Ubicaciones' : 'Locations'}
              </span>
            </div>
            <h2 className="text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {txt.officesTitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              {txt.officesSubtitle}
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Sidebar */}
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-4">
                  {language === 'es' ? 'Seleccionar Ubicación' : 'Select Location'}
                </h3>
                {offices.map((office, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveOffice(i)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeOffice === i
                        ? 'bg-corporate-red text-white'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold mb-1">{office.name}</div>
                        <div className={`text-xs sm:text-sm ${activeOffice === i ? 'text-red-100' : 'text-gray-400'}`}>
                          {office.phone}
                        </div>
                      </div>
                      {office.isMain && (
                        <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${
                          activeOffice === i ? 'bg-white/20' : 'bg-corporate-red/30 text-corporate-red'
                        }`}>★</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Map */}
              <div className="lg:col-span-2 h-[400px] lg:h-[500px]">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    activeOffice === 0 
                      ? 'Av. Colon 2110, Bahia Blanca, Buenos Aires, Argentina'
                      : activeOffice === 1
                      ? 'Felix San Martin 128, Neuquen, Argentina'
                      : 'Rivadavia 1611, Buenos Aires, Argentina'
                  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación ${offices[activeOffice].name}`}
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
