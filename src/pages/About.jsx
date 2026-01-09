import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentYears, setCurrentYears] = useState(0);
  const [currentCompanies, setCurrentCompanies] = useState(0);
  const [currentArea, setCurrentArea] = useState(0);
  const [currentTanks, setCurrentTanks] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    // Llevar al top una sola vez
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []); // Sin dependencias para que solo se ejecute al montar

  useEffect(() => {
    // === MÉTRICAS (como ya tenías) ===
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startCountAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [isVisible]);

  // Datos de la línea de tiempo - 5 HITOS CLAVE (compactos)
  const timelineEvents = language === 'es' ? [
    {
      year: "1979",
      title: "Fundación",
      description: "Inicio en Bahía Blanca como empresa especializada en ingeniería industrial.",
      bullets: ["Bases técnicas", "Cultura de calidad", "Servicio industrial"]
    },
    {
      year: "1984",
      title: "Infraestructura",
      description: "Apertura de sede central en Av. Colón 2110/16.",
      bullets: ["Oficinas propias", "Depósito técnico", "Crecimiento sostenido"]
    },
    {
      year: "1997",
      title: "Inspecciones API",
      description: "División de inspección de tanques y END certificados.",
      bullets: ["API 653", "+1.000 tanques", "END avanzados"]
    },
    {
      year: "2010",
      title: "Planta Industrial",
      description: "Taller propio con equipamiento especializado certificado.",
      bullets: ["Banco VENTIL", "Cabinas granallado", "Procesos certificados"]
    },
    {
      year: "Hoy",
      title: "Liderazgo Técnico",
      description: "2.600 m², laboratorio móvil y 7 divisiones operativas.",
      bullets: ["PREVENTEST", "Flota propia", "Tecnología avanzada"]
    }
  ] : [
    {
      year: "1979",
      title: "Foundation",
      description: "Started in Bahía Blanca as a specialized industrial engineering company.",
      bullets: ["Technical foundations", "Quality culture", "Industrial service"]
    },
    {
      year: "1984",
      title: "Infrastructure",
      description: "Opening of headquarters at Av. Colón 2110/16.",
      bullets: ["Own offices", "Technical warehouse", "Sustained growth"]
    },
    {
      year: "1997",
      title: "API Inspections",
      description: "Tank inspection division and certified NDT.",
      bullets: ["API 653", "+1,000 tanks", "Advanced NDT"]
    },
    {
      year: "2010",
      title: "Industrial Plant",
      description: "Own workshop with certified specialized equipment.",
      bullets: ["VENTIL Bench", "Shot blasting booths", "Certified processes"]
    },
    {
      year: "Today",
      title: "Technical Leadership",
      description: "2,600 m², mobile laboratory and 7 operational divisions.",
      bullets: ["PREVENTEST", "Own fleet", "Advanced technology"]
    }
  ];

  const startCountAnimation = () => {
    const currentYear = new Date().getFullYear();
    const yearsExperience = currentYear - 1979;
    
    // Configuración de animaciones
    const animateCounter = (start, end, setter, duration = 2000) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        setter(currentValue);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    // Iniciar animaciones con diferentes duraciones para efecto escalonado
    setTimeout(() => animateCounter(0, yearsExperience, setCurrentYears, 2000), 500);
    setTimeout(() => animateCounter(0, 400, setCurrentCompanies, 2200), 700);
    setTimeout(() => animateCounter(0, 2639, setCurrentArea, 2500), 900);
    setTimeout(() => animateCounter(0, 1000, setCurrentTanks, 2300), 1100);
  };

  // Cálculo automático de años desde 1979
  const currentYear = new Date().getFullYear();
  const foundingYear = 1979;
  const yearsInBusiness = currentYear - foundingYear;

  // Métricas corporativas con valores animados
  const corporateMetrics = [
    { 
      number: currentYears, 
      displayNumber: `${currentYears}+`, 
      label: language === 'es' ? 'Años de Experiencia' : 'Years of Experience',
      targetValue: yearsInBusiness 
    },
    { 
      number: currentCompanies, 
      displayNumber: `${currentCompanies}+`, 
      label: language === 'es' ? 'Empresas Atendidas' : 'Companies Served',
      targetValue: 400 
    },
    { 
      number: currentArea, 
      displayNumber: currentArea.toLocaleString(), 
      label: language === 'es' ? 'm² de Instalaciones' : 'm² of Facilities',
      targetValue: 2639 
    },
    { 
      number: currentTanks, 
      displayNumber: `${currentTanks}+`, 
      label: language === 'es' ? 'Tanques Inspeccionados' : 'Tanks Inspected',
      targetValue: 1000 
    }
  ];

  // Pilares corporativos - estilo tarjetas del Home
  const corporatePillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'es' ? 'Excelencia Técnica' : 'Technical Excellence',
      description: language === 'es' ? 'Procesos certificados ISO, personal especializado y equipamiento de última generación para resultados superiores.' : 'ISO certified processes, specialized personnel and state-of-the-art equipment for superior results.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: language === 'es' ? 'Seguridad Primero' : 'Safety First',
      description: language === 'es' ? 'La seguridad operativa es nuestra prioridad absoluta en cada proyecto y procedimiento técnico especializado.' : 'Operational safety is our absolute priority in every project and specialized technical procedure.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: language === 'es' ? 'Responsabilidad y Ética' : 'Responsibility and Ethics',
      description: language === 'es' ? 'Actuamos con integridad, transparencia y responsabilidad en todas nuestras relaciones comerciales e institucionales.' : 'We act with integrity, transparency and responsibility in all our commercial and institutional relationships.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: language === 'es' ? 'Respeto por el Cliente' : 'Customer Respect',
      description: language === 'es' ? 'Construimos relaciones duraderas basadas en confianza, respeto mutuo y compromiso profesional continuo.' : 'We build lasting relationships based on trust, mutual respect and continuous professional commitment.'
    }
  ];

  return (
    <>
    <div className="min-h-screen">
      
      {/* Hero Section - Compacto y Profesional con imagen */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about/servin.png" 
            alt={language === 'es' ? 'SERVIN Ingeniería' : 'SERVIN Engineering'}
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
                {language === 'es' ? 'Nuestra Empresa' : 'Our Company'}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {language === 'es' ? (
              <>
                SERVIN{' '}
                <span className="text-corporate-red">INGENIERÍA</span>
              </>
            ) : (
              <>
                <span className="text-corporate-red">SERVIN</span>{' '}
                ENGINEERING
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Referentes en ingeniería industrial aplicada con infraestructura propia, equipos especializados y certificaciones internacionales.'
              : 'Leaders in applied industrial engineering with own infrastructure, specialized equipment and international certifications.'}
          </p>

          {/* CTA */}
          <a 
            href="#pilares" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Conocer más' : 'Learn more'}
          </a>
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

      {/* About Section - Pilares de Autoridad mejorado */}
      <section className="relative bg-gradient-to-b from-white to-gray-50/50 py-20 lg:py-24 overflow-hidden scroll-mt-20" id="about">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          
          <div id="pilares" className="text-center mb-16 scroll-mt-20">
            {/* Badge centrado */}
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Desde 1979' : 'Since 1979'}
              </span>
            </div>
            
            {/* Título centrado */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
            >
              {language === 'es' ? 'LÍDERES EN' : 'LEADERS IN'}
            </h2>
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-red mb-6"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
            >
              {language === 'es' ? 'INGENIERÍA INDUSTRIAL' : 'INDUSTRIAL ENGINEERING'}
            </h3>
            
            {/* Descripción centrada */}
            <div className="max-w-4xl mx-auto mb-12">
              <p 
                className="text-sm sm:text-base text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
              >
                {language === 'es' 
                  ? 'Fundada en 1979 en Bahía Blanca por el Ing. Norberto Dagnino, SERVIN INGENIERÍA S.A. se consolidó como un referente nacional en ingeniería industrial aplicada. A lo largo de más de cuatro décadas, la empresa evolucionó manteniendo sus valores fundamentales: calidad, confiabilidad y compromiso operativo.'
                  : 'Founded in 1979 in Bahía Blanca by Eng. Norberto Dagnino, SERVIN INGENIERÍA S.A. established itself as a national reference in applied industrial engineering. Throughout more than four decades, the company evolved while maintaining its fundamental values: quality, reliability and operational commitment.'}
              </p>
            </div>

            {/* Fundador Card - centrado y mejorado */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
                  {/* Imagen */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md ring-4 ring-corporate-red/10">
                      <img 
                        src="/norberto.png" 
                        alt="Ing. Norberto Dagnino"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Contenido - centrado en mobile */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Nombre */}
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Ing. Norberto Dagnino
                    </h4>
                    
                    {/* Cargo */}
                    <div className="inline-flex items-center bg-corporate-red/10 border border-corporate-red/20 rounded-full px-4 py-1.5 mb-4">
                      <span className="text-xs font-semibold text-corporate-red uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Fundador y Director Ejecutivo' : 'Founder & Executive Director'}
                      </span>
                    </div>
                    
                    {/* Descripción */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed" style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: '400'
                    }}>
                      {language === 'es'
                        ? 'Profesional con más de 45 años de trayectoria en la industria. Su visión técnica y ética de trabajo dieron origen a la cultura corporativa que distingue hoy a la compañía.'
                        : 'Professional with over 45 years of experience in the industry. His technical vision and work ethic gave rise to the corporate culture that distinguishes the company today.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pilares de Autoridad - Grid compacto 4 columnas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-corporate-red/5 transition-colors duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-corporate-red/10 rounded-lg flex items-center justify-center group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería Certificada' : 'Certified Engineering'}</h4>
              <p className="text-[9px] sm:text-[10px] text-gray-500">ISO 9001 · API 653</p>
            </div>
            
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-corporate-red/5 transition-colors duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-corporate-red/10 rounded-lg flex items-center justify-center group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Infraestructura Propia' : 'Own Infrastructure'}</h4>
              <p className="text-[9px] sm:text-[10px] text-gray-500">{language === 'es' ? '+2.600 m²' : '+2,600 m²'}</p>
            </div>
            
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-corporate-red/5 transition-colors duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-corporate-red/10 rounded-lg flex items-center justify-center group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia Multisectorial' : 'Multi-sector Experience'}</h4>
              <p className="text-[9px] sm:text-[10px] text-gray-500">{language === 'es' ? '+400 empresas' : '+400 companies'}</p>
            </div>
          </div>

        </div>
      </section>

      {/* DIVISIONES TÉCNICAS — FONDO NEGRO */}
      <section className="relative bg-black py-20 lg:py-28 overflow-hidden" id="divisiones">
        
        {/* Decoración: líneas rojas sutiles */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado */}
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-corporate-red/10 border border-corporate-red/30 rounded-full px-4 sm:px-5 py-2 mb-4 sm:mb-5">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
              <span className="text-corporate-red text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? '8 Divisiones Especializadas' : '8 Specialized Divisions'}
              </span>
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 lg:mb-6"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
            >
              {language === 'es' ? 'Divisiones Técnicas' : 'Technical Divisions'}
            </h2>
            <p 
              className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}
            >
              {language === 'es' 
                ? 'Infraestructura técnica diseñada para respaldar nuestras ocho divisiones de servicio, permitiendo brindar servicios certificados de mantenimiento, inspección, calibración y provisión de materiales industriales.'
                : 'Technical infrastructure designed to support our eight service divisions, enabling certified maintenance, inspection, calibration and industrial materials supply services.'}
            </p>
          </div>

          {/* Grid de las 8 divisiones - Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            
            {/* División 1 - Planta de Mantenimiento */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 lg:p-6 hover:border-corporate-red hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="bg-corporate-red/20 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/30 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Planta de Mantenimiento Industrial' : 'Industrial Maintenance Plant'}
                    </h5>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es'
                    ? 'Infraestructura de más de 800 m², equipada con bancos VENTIL certificados, tornos, lapeadoras, cabinas y equipamiento integral para la recuperación y calibración de válvulas industriales y de seguridad.'
                    : 'Infrastructure of over 800 m², equipped with certified VENTIL benches, lathes, lapping machines, booths and comprehensive equipment for the recovery and calibration of industrial and safety valves.'}
                </p>
                <Link to="/services/planta-mantenimiento" className="inline-flex items-center text-xs sm:text-sm text-corporate-red hover:text-white font-medium transition-colors mt-auto">
                  {language === 'es' ? 'Ver división' : 'View division'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* División 2 - Mantenimientos In Situ PREVENTEST */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 lg:p-6 hover:border-corporate-red hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="bg-corporate-red/20 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/30 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Mantenimientos In Situ – PREVENTEST' : 'In-Situ Maintenance – PREVENTEST'}
                    </h5>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es'
                    ? 'Aplicación de tecnología PREVENTEST para calibración de válvulas de seguridad sin desmontaje y sin detener procesos, bajo procedimientos certificados.'
                    : 'Application of PREVENTEST technology for safety valve calibration without disassembly and without stopping processes, under certified procedures.'}
                </p>
                <Link to="/services/mantenimientos-in-situ" className="inline-flex items-center text-xs sm:text-sm text-corporate-red hover:text-white font-medium transition-colors mt-auto">
                  {language === 'es' ? 'Ver división' : 'View division'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* División 3 - Laboratorio Móvil */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 lg:p-6 hover:border-corporate-red hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="bg-corporate-red/20 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/30 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Mantenimientos In Situ – Laboratorio Móvil' : 'In-Situ Maintenance – Mobile Laboratory'}
                    </h5>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es'
                    ? 'Unidad autónoma para mantenimientos in situ, equipada con banco VENTIL, compresores y transmisores de presión, que permite intervenir válvulas directamente en planta.'
                    : 'Autonomous unit for in-situ maintenance, equipped with VENTIL bench, compressors and pressure transmitters, allowing valve intervention directly at the plant.'}
                </p>
                <Link to="/services/laboratorio-movil" className="inline-flex items-center text-xs sm:text-sm text-corporate-red hover:text-white font-medium transition-colors mt-auto">
                  {language === 'es' ? 'Ver división' : 'View division'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* División 4 - Inspección de Tanques API & END */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 lg:p-6 hover:border-corporate-red hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="bg-corporate-red/20 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/30 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Inspección de Tanques API & END' : 'API Tank Inspection & NDT'}
                    </h5>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es'
                    ? 'Servicios de inspección de tanques y equipos mediante tecnologías MFL, LFET, Ultrasonido (UT/PAUT), Líquidos Penetrantes, y auditorías conforme a API 653 y resoluciones vigentes.'
                    : 'Tank and equipment inspection services using MFL, LFET, Ultrasound (UT/PAUT), Penetrant Testing technologies, and audits according to API 653 and current regulations.'}
                </p>
                <Link to="/services/inspeccion-tanques-api" className="inline-flex items-center text-xs sm:text-sm text-corporate-red hover:text-white font-medium transition-colors mt-auto">
                  {language === 'es' ? 'Ver división' : 'View division'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* División 5 - Ingeniería de Materiales */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 lg:p-6 hover:border-corporate-red hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="bg-corporate-red/20 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/30 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
                    </h5>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es'
                    ? 'Suministro y soporte técnico en acoplamientos industriales, reductores, válvulas y componentes certificados, actuando como nexo técnico entre el cliente y los fabricantes representados.'
                    : 'Supply and technical support in industrial couplings, reducers, valves and certified components, acting as a technical link between the client and the represented manufacturers.'}
                </p>
                <Link to="/services/ingenieria-materiales" className="inline-flex items-center text-xs sm:text-sm text-corporate-red hover:text-white font-medium transition-colors mt-auto">
                  {language === 'es' ? 'Ver división' : 'View division'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Divisiones 6 y 7 - Próximamente */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 sm:p-5 lg:p-6 md:col-span-2 xl:col-span-1">
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="bg-gray-500/20 p-2 sm:p-2.5 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                      <h5 className="text-sm sm:text-base font-semibold text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                      </h5>
                      <span className="text-[10px] sm:text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-medium">2026</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Actualmente en desarrollo nuevas capacidades industriales:' : 'Currently developing new industrial capabilities:'}
                </p>
                <ul className="space-y-2 flex-grow">
                  <li className="flex items-start text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <strong className="font-medium text-white">{language === 'es' ? 'Revestimiento de Tanques' : 'Tank Coating'}</strong>
                      <span className="text-[10px] sm:text-xs text-gray-400 ml-1.5">{language === 'es' ? '· División en desarrollo' : '· Division in development'}</span>
                    </div>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <strong className="font-medium text-white">{language === 'es' ? 'Cabinas de Granallado' : 'Shot Blasting Booths'}</strong>
                      <span className="text-[10px] sm:text-xs text-gray-400 ml-1.5">{language === 'es' ? '· Disponible 2026' : '· Available 2026'}</span>
                    </div>
                  </li>
                  <li className="flex items-start text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <strong className="font-medium text-white">{language === 'es' ? 'Prefabricados' : 'Prefabricated'}</strong>
                      <span className="text-[10px] sm:text-xs text-gray-400 ml-1.5">{language === 'es' ? '· Piping y estructuras metálicas' : '· Piping and metal structures'}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Accordion Mobile */}
          <div className="md:hidden space-y-3">
            {/* División 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-corporate-red/20 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h5 className="text-sm font-semibold text-white truncate" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Planta de Mantenimiento' : 'Maintenance Plant'}
                  </h5>
                </div>
                <svg className={`w-5 h-5 text-white transition-transform flex-shrink-0 ml-2 ${expandedCard === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${expandedCard === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Infraestructura de más de 800 m², equipada con bancos VENTIL certificados, tornos, lapeadoras, cabinas y equipamiento integral para la recuperación y calibración de válvulas industriales y de seguridad.'
                      : 'Infrastructure of over 800 m², equipped with certified VENTIL benches, lathes, lapping machines, booths and comprehensive equipment for the recovery and calibration of industrial and safety valves.'}
                  </p>
                  <Link to="/services/planta-mantenimiento" className="inline-flex items-center text-xs text-corporate-red hover:text-white font-medium transition-colors">
                    {language === 'es' ? 'Ver división' : 'View division'}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* División 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-corporate-red/20 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h5 className="text-sm font-semibold text-white truncate" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'PREVENTEST' : 'PREVENTEST'}
                  </h5>
                </div>
                <svg className={`w-5 h-5 text-white transition-transform flex-shrink-0 ml-2 ${expandedCard === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${expandedCard === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Aplicación de tecnología PREVENTEST para calibración de válvulas de seguridad sin desmontaje y sin detener procesos, bajo procedimientos certificados.'
                      : 'Application of PREVENTEST technology for safety valve calibration without disassembly and without stopping processes, under certified procedures.'}
                  </p>
                  <Link to="/services/mantenimientos-in-situ" className="inline-flex items-center text-xs text-corporate-red hover:text-white font-medium transition-colors">
                    {language === 'es' ? 'Ver división' : 'View division'}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* División 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-corporate-red/20 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h5 className="text-sm font-semibold text-white truncate" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Laboratorio Móvil' : 'Mobile Laboratory'}
                  </h5>
                </div>
                <svg className={`w-5 h-5 text-white transition-transform flex-shrink-0 ml-2 ${expandedCard === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${expandedCard === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Unidad autónoma para mantenimientos in situ, equipada con banco VENTIL, compresores y transmisores de presión, que permite intervenir válvulas directamente en planta.'
                      : 'Autonomous unit for in-situ maintenance, equipped with VENTIL bench, compressors and pressure transmitters, allowing valve intervention directly at the plant.'}
                  </p>
                  <Link to="/services/laboratorio-movil" className="inline-flex items-center text-xs text-corporate-red hover:text-white font-medium transition-colors">
                    {language === 'es' ? 'Ver división' : 'View division'}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* División 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-corporate-red/20 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="text-sm font-semibold text-white truncate" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Inspección API & END' : 'API Inspection & NDT'}
                  </h5>
                </div>
                <svg className={`w-5 h-5 text-white transition-transform flex-shrink-0 ml-2 ${expandedCard === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${expandedCard === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Servicios de inspección de tanques y equipos mediante tecnologías MFL, LFET, Ultrasonido (UT/PAUT), Líquidos Penetrantes, y auditorías conforme a API 653 y resoluciones vigentes.'
                      : 'Tank and equipment inspection services using MFL, LFET, Ultrasound (UT/PAUT), Penetrant Testing technologies, and audits according to API 653 and current regulations.'}
                  </p>
                  <Link to="/services/inspeccion-tanques-api" className="inline-flex items-center text-xs text-corporate-red hover:text-white font-medium transition-colors">
                    {language === 'es' ? 'Ver división' : 'View division'}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* División 5 */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCard(expandedCard === 5 ? null : 5)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-corporate-red/20 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h5 className="text-sm font-semibold text-white truncate" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
                  </h5>
                </div>
                <svg className={`w-5 h-5 text-white transition-transform flex-shrink-0 ml-2 ${expandedCard === 5 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${expandedCard === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Suministro y soporte técnico en acoplamientos industriales, reductores, válvulas y componentes certificados, actuando como nexo técnico entre el cliente y los fabricantes representados.'
                      : 'Supply and technical support in industrial couplings, reducers, valves and certified components, acting as a technical link between the client and the represented manufacturers.'}
                  </p>
                  <Link to="/services/ingenieria-materiales" className="inline-flex items-center text-xs text-corporate-red hover:text-white font-medium transition-colors">
                    {language === 'es' ? 'Ver división' : 'View division'}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Divisiones 6, 7 y 8 - Próximamente */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCard(expandedCard === 6 ? null : 6)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-gray-500/20 p-2 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <h5 className="text-sm font-semibold text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                    </h5>
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-medium">2026</span>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-white transition-transform flex-shrink-0 ml-2 ${expandedCard === 6 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${expandedCard === 6 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-4 pt-0">
                  <p className="text-xs text-gray-300 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Actualmente en desarrollo nuevas capacidades industriales:' : 'Currently developing new industrial capabilities:'}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <div>
                        <strong className="font-medium text-white">{language === 'es' ? 'Revestimiento de Tanques' : 'Tank Coating'}</strong>
                        <span className="text-[10px] text-gray-400 ml-1.5">{language === 'es' ? '· División en desarrollo' : '· Division in development'}</span>
                      </div>
                    </li>
                    <li className="flex items-start text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <div>
                        <strong className="font-medium text-white">{language === 'es' ? 'Cabinas de Granallado' : 'Shot Blasting Booths'}</strong>
                        <span className="text-[10px] text-gray-400 ml-1.5">{language === 'es' ? '· Disponible 2026' : '· Available 2026'}</span>
                      </div>
                    </li>
                    <li className="flex items-start text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <div>
                        <strong className="font-medium text-white">{language === 'es' ? 'Prefabricados' : 'Prefabricated'}</strong>
                        <span className="text-[10px] text-gray-400 ml-1.5">{language === 'es' ? '· Piping y estructuras metálicas' : '· Piping and metal structures'}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tradición Familiar - Diseño compacto */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center">
            
            {/* Columna de texto */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
                <span className="text-corporate-red text-[10px] sm:text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Empresa Familiar' : 'Family Business'}
                </span>
              </div>
              
              {/* Título */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '-0.02em'
              }}>
                {language === 'es' ? (
                  <>
                    <span className="text-gray-900">TRADICIÓN</span>
                    <br />
                    <span className="text-corporate-red">FAMILIAR</span>
                  </>
                ) : (
                  <>
                    <span className="text-gray-900">FAMILY</span>
                    <br />
                    <span className="text-corporate-red">TRADITION</span>
                  </>
                )}
              </h2>
              
              {/* Descripción */}
              <div className="space-y-3 mb-4 sm:mb-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: '400'
                }}>
                  {language === 'es'
                    ? (<span><strong className="text-gray-900 font-semibold">SERVIN INGENIERÍA S.A.</strong> mantiene su esencia como empresa familiar, donde los valores de <strong className="text-corporate-red font-semibold">confianza, compromiso y excelencia</strong> se transmiten generacionalmente.</span>)
                    : (<span><strong className="text-gray-900 font-semibold">SERVIN INGENIERÍA S.A.</strong> maintains its essence as a family business, where the values of <strong className="text-corporate-red font-semibold">trust, commitment and excellence</strong> are transmitted generationally.</span>)}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: '400'
                }}>
                  {language === 'es'
                    ? 'Esta característica nos permite conservar una atención personalizada y relaciones comerciales duraderas, combinando la solidez institucional con la calidez humana que distingue nuestro servicio.'
                    : 'This characteristic allows us to maintain personalized attention and lasting business relationships, combining institutional strength with the human warmth that distinguishes our service.'}
                </p>
              </div>

              {/* Stats o características */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-0.5 sm:mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    +45
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Años' : 'Years'}
                  </div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    2
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Generaciones' : 'Generations'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Familiar' : 'Family'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Columna de imagen */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                {/* Decoración de fondo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-corporate-red/10 to-corporate-red/5 rounded-2xl lg:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                
                {/* Imagen */}
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/familia.png" 
                    alt="Familia Dagnino - Tradición familiar en SERVIN INGENIERÍA"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay con info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6">
                    <p className="text-white text-sm sm:text-base font-medium mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Familia Dagnino' : 'Dagnino Family'}
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Tradición y compromiso desde 1979' : 'Tradition and commitment since 1979'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Historia Section - Timeline detallado */}
      <section id="historia" className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header centrado */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-4 py-1.5 mb-5">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Nuestra Trayectoria' : 'Our Journey'}
              </span>
            </div>
            
            {/* Título */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
            >
              {language === 'es' ? '+45 AÑOS DE' : '+45 YEARS OF'}
            </h2>
            <h3 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-corporate-red leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
            >
              {language === 'es' ? 'EVOLUCIÓN' : 'EVOLUTION'}
            </h3>
          </div>
          
          {/* Timeline detallado con hitos específicos */}
          <div className="relative max-w-5xl mx-auto">
            {/* Línea vertical */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-400"></div>
            
            <div className="space-y-12 sm:space-y-16">
              
              {/* 1979 - Fundación */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="absolute left-8 sm:left-1/2 w-4 h-4 bg-corporate-red rounded-full border-4 border-white shadow-md -ml-[7px] z-10"></div>
                <div className="ml-20 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                  <div className="inline-block bg-corporate-red text-white px-3 py-1 rounded-full text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    1979
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Fundación' : 'Foundation'}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Inicio en Bahía Blanca como empresa especializada en ingeniería industrial.'
                      : 'Start in Bahía Blanca as a company specialized in industrial engineering.'}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Bases técnicas' : 'Technical foundations'}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Cultura de calidad' : 'Quality culture'}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Servicio industrial' : 'Industrial service'}
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>

              {/* 1984 - Infraestructura */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="absolute left-8 sm:left-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-md -ml-[7px] z-10"></div>
                <div className="hidden sm:block sm:w-1/2"></div>
                <div className="ml-20 sm:ml-0 sm:w-1/2 sm:pl-12">
                  <div className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    1984
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Infraestructura' : 'Infrastructure'}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Apertura de sede central en Av. Colón 2110/16.'
                      : 'Opening of headquarters at Av. Colón 2110/16.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Oficinas propias' : 'Own offices'}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Depósito técnico' : 'Technical warehouse'}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Crecimiento sostenido' : 'Sustained growth'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 1997 - Inspecciones API */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="absolute left-8 sm:left-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-md -ml-[7px] z-10"></div>
                <div className="ml-20 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                  <div className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    1997
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Inspecciones API' : 'API Inspections'}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'División de inspección de tanques y END certificados.'
                      : 'Tank inspection and certified NDT division.'}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      API 653
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      +1.000 {language === 'es' ? 'tanques' : 'tanks'}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'END avanzados' : 'Advanced NDT'}
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>

              {/* 2010 - Planta Industrial */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="absolute left-8 sm:left-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-md -ml-[7px] z-10"></div>
                <div className="hidden sm:block sm:w-1/2"></div>
                <div className="ml-20 sm:ml-0 sm:w-1/2 sm:pl-12">
                  <div className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    2010
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Planta Industrial' : 'Industrial Plant'}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'Taller propio con equipamiento especializado certificado.'
                      : 'Own workshop with certified specialized equipment.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Banco VENTIL
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Cabinas granallado' : 'Blasting cabins'}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Procesos certificados' : 'Certified processes'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hoy - Liderazgo Técnico */}
              <div className="relative flex flex-col sm:flex-row sm:items-center">
                <div className="absolute left-8 sm:left-1/2 w-4 h-4 bg-corporate-red rounded-full border-4 border-white shadow-lg -ml-[7px] z-10 ring-4 ring-corporate-red/20"></div>
                <div className="ml-20 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                  <div className="inline-block bg-corporate-red text-white px-3 py-1 rounded-full text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'HOY' : 'TODAY'}
                  </div>
                  <h4 className="text-xl font-bold text-corporate-red mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Liderazgo Técnico' : 'Technical Leadership'}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? '2.600 m², laboratorio móvil y 7 divisiones operativas.'
                      : '2,600 m², mobile laboratory and 7 operational divisions.'}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="bg-corporate-red/10 text-corporate-red px-2 py-1 rounded text-xs font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      PREVENTEST
                    </span>
                    <span className="bg-corporate-red/10 text-corporate-red px-2 py-1 rounded text-xs font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Flota propia' : 'Own fleet'}
                    </span>
                    <span className="bg-corporate-red/10 text-corporate-red px-2 py-1 rounded text-xs font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Tecnología avanzada' : 'Advanced technology'}
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="relative py-12 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Misión */}
            <div className="rounded-xl p-6 lg:p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
              }}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'MISIÓN' : 'MISSION'}
                </h3>
                <div className="w-10 h-0.5 bg-white/60 mb-4"></div>
                <p className="text-white/95 text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es'
                    ? 'Brindar servicios especializados de ingeniería industrial con los más altos estándares de calidad, seguridad y eficiencia.'
                    : 'Provide specialized industrial engineering services with the highest standards of quality, safety and efficiency.'}
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-corporate-red rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'VISIÓN' : 'VISION'}
                </h3>
                <div className="w-10 h-0.5 bg-gray-300 mb-4"></div>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es'
                    ? 'Ser reconocidos como la empresa líder en ingeniería industrial especializada, manteniendo nuestros valores familiares.'
                    : 'Be recognized as the leading company in specialized industrial engineering, maintaining our family values.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Final - Estilo compacto */}
      <section className="py-12 sm:py-14 lg:py-16 relative overflow-hidden" 
          style={{
            background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          
          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge mejorado */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-white text-[10px] sm:text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Su Proyecto Nos Inspira' : 'Your Project Inspires Us'}
                </span>
              </div>
              
              {/* Título mejorado */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '-0.02em'
              }}>
                {language === 'es' 
                  ? <>TRANSFORMEMOS SUS <span className="text-white/80">DESAFÍOS</span><br />EN <span className="text-white/80">SOLUCIONES</span></> 
                  : <>LET'S TRANSFORM YOUR <span className="text-white/80">CHALLENGES</span><br />INTO <span className="text-white/80">SOLUTIONS</span></>}
              </h3>
              
              {/* Descripción mejorada */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300'
              }}>
                {language === 'es'
                  ? <>Más de <strong className="font-semibold text-white">45 años de experiencia</strong> en ingeniería industrial nos avalan. Cuéntenos su proyecto y descubra cómo nuestras soluciones pueden llevar su operación al <strong className="font-semibold text-white">siguiente nivel</strong>.</>
                  : <>More than <strong className="font-semibold text-white">45 years of experience</strong> in industrial engineering endorse us. Tell us about your project and discover how our solutions can take your operation to the <strong className="font-semibold text-white">next level</strong>.</>}
              </p>
              
              {/* Botones mejorados */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
                <Link 
                  to="/contact"
                  className="group relative w-full sm:w-auto overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-white transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-bold text-corporate-red tracking-wide uppercase inline-flex items-center justify-center w-full sm:w-auto transition-all duration-300 shadow-xl group-hover:shadow-2xl"
                       style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{language === 'es' ? 'Solicitar Consulta' : 'Request Consultation'}</span>
                  </div>
                </Link>
                
                <Link 
                  to="/services"
                  className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-semibold text-white border-2 border-white/70 hover:border-white hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 inline-flex items-center justify-center tracking-wide uppercase"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <span className="mr-2">{language === 'es' ? 'Nuestros Servicios' : 'Our Services'}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

    </div>
    </>
  );
};

export default About;
