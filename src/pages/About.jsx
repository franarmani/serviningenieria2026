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
      
      {/* Hero Section - Diseño ejecutivo premium igual a Services */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Subtle industrial image overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="Industrial Background"
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(100%) contrast(1.2)',
              mixBlendMode: 'overlay'
            }}
          />
        </div>
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 z-10" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.03) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          {/* Corporate badge */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? '46 Años de Excelencia Industrial' : '46 Years of Industrial Excellence'}
              </span>
            </div>
          </div>
          
          {/* Executive title */}
          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '0.9'
            }}>
              {language === 'es' ? 'NUESTRA' : 'OUR'}
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
                {language === 'es' ? 'HISTORIA' : 'HISTORY'}
              </h2>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-2 sm:ml-4"></div>
            </div>
          </div>
          
          {/* Professional subtitle - Simplificado */}
          <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/80 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>Más de 46 años brindando <strong className="text-white font-normal">soluciones industriales certificadas</strong> para la industria pesada argentina.</>
              : <>Over 46 years providing <strong className="text-white font-normal">certified industrial solutions</strong> for Argentina's heavy industry.</>}
          </p>
          
          {/* CTA único y potente */}
          <div className="animate-fade-in-up-delay-3 px-4">
            <a 
              href="#pilares" 
              className="btn-primary w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-sm sm:text-base inline-flex items-center justify-center"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver más' : 'See more'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator - EXACTAMENTE el mismo del Home */}
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

      {/* About Section - Pilares de Autoridad */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white" id="about">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header simplificado */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
             <div id="pilares">
            <h2 className="text-xs sm:text-sm leading-tight tracking-wide mb-3 text-corporate-red font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="inline-block w-3 h-3 bg-corporate-red mr-2 rounded-full"></span>{language === 'es' ? 'DESDE 1979' : 'SINCE 1979'}
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl leading-tight tracking-wide mb-3 sm:mb-4 text-gray-900 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'LÍDERES EN INGENIERÍA INDUSTRIAL' : 'LEADERS IN INDUSTRIAL ENGINEERING'}
            </h3>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' ? 'Ingeniería aplicada, experiencia comprobada e infraestructura propia.' : 'Applied engineering, proven experience and own infrastructure.'}
            </p>
          </div>
          </div>

          {/* Pilares de Autoridad - Grid de 4 iconos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-corporate-red/5 transition-colors duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-corporate-red/10 rounded-xl flex items-center justify-center group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería Certificada' : 'Certified Engineering'}</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">ISO 9001 · API 653</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-corporate-red/5 transition-colors duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-corporate-red/10 rounded-xl flex items-center justify-center group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Infraestructura Propia' : 'Own Infrastructure'}</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">{language === 'es' ? '+2.600 m² operativos' : '+2,600 m² operational'}</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-corporate-red/5 transition-colors duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-corporate-red/10 rounded-xl flex items-center justify-center group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia Multisectorial' : 'Multi-sector Experience'}</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">{language === 'es' ? '+400 empresas atendidas' : '+400 companies served'}</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-corporate-red/5 transition-colors duration-300 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-corporate-red/10 rounded-xl flex items-center justify-center group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Especializado' : 'Specialized Support'}</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">{language === 'es' ? 'Equipo técnico 24/7' : '24/7 technical team'}</p>
            </div>
          </div>

          {/* Divisiones Técnicas Section - Las 7 divisiones de SERVIN */}
          <div id="divisiones">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h4 className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl font-light text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Nuestras Divisiones Técnicas' : 'Our Technical Divisions'}
              </h4>
              <p className="text-xs sm:text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Infraestructura técnica diseñada para respaldar nuestras <strong className="text-gray-900 font-medium">siete divisiones de servicio</strong>, permitiendo brindar servicios certificados de mantenimiento, inspección, calibración y provisión de materiales industriales.</>
                  : <>Technical infrastructure designed to support our <strong className="text-gray-900 font-medium">seven service divisions</strong>, enabling certified maintenance, inspection, calibration and industrial materials supply services.</>}
              </p>
            </div>

            {/* Grid de las 7 divisiones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              
              {/* División 1 - Planta de Mantenimiento */}
              <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-corporate-red/10 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Planta de Mantenimiento Industrial' : 'Industrial Maintenance Plant'}
                    </h5>
                    <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? <>Infraestructura de más de <strong className="font-medium">800 m²</strong>, equipada con bancos VENTIL certificados, tornos, lapeadoras, cabinas y equipamiento integral para la recuperación y calibración de válvulas industriales y de seguridad.</>
                        : <>Infrastructure of over <strong className="font-medium">800 m²</strong>, equipped with certified VENTIL benches, lathes, lapping machines, booths and comprehensive equipment for the recovery and calibration of industrial and safety valves.</>}
                    </p>
                    <Link to="/services/planta-mantenimiento" className="inline-flex items-center text-[10px] sm:text-xs text-corporate-red hover:text-corporate-red/80 font-medium transition-colors">
                      {language === 'es' ? 'Ver división' : 'View division'}
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* División 2 - Mantenimientos In Situ PREVENTEST */}
              <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-corporate-red/10 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Mantenimientos In Situ – PREVENTEST' : 'In-Situ Maintenance – PREVENTEST'}
                    </h5>
                    <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? <>Aplicación de tecnología <strong className="font-medium">PREVENTEST</strong> para calibración de válvulas de seguridad sin desmontaje y sin detener procesos, bajo procedimientos certificados.</>
                        : <>Application of <strong className="font-medium">PREVENTEST</strong> technology for safety valve calibration without disassembly and without stopping processes, under certified procedures.</>}
                    </p>
                    <Link to="/services/mantenimientos-in-situ" className="inline-flex items-center text-[10px] sm:text-xs text-corporate-red hover:text-corporate-red/80 font-medium transition-colors">
                      {language === 'es' ? 'Ver división' : 'View division'}
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* División 3 - Laboratorio Móvil */}
              <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-corporate-red/10 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Mantenimientos In Situ – Laboratorio Móvil' : 'In-Situ Maintenance – Mobile Laboratory'}
                    </h5>
                    <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? 'Unidad autónoma para mantenimientos in situ, equipada con banco VENTIL, compresores y transmisores de presión, que permite intervenir válvulas directamente en planta.'
                        : 'Autonomous unit for in-situ maintenance, equipped with VENTIL bench, compressors and pressure transmitters, allowing valve intervention directly at the plant.'}
                    </p>
                    <Link to="/services/laboratorio-movil" className="inline-flex items-center text-[10px] sm:text-xs text-corporate-red hover:text-corporate-red/80 font-medium transition-colors">
                      {language === 'es' ? 'Ver división' : 'View division'}
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* División 4 - Inspección de Tanques API & END */}
              <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-corporate-red/10 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Inspección de Tanques API & END' : 'API Tank Inspection & NDT'}
                    </h5>
                    <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? <>Servicios de inspección de tanques y equipos mediante tecnologías <strong className="font-medium">MFL, LFET, Ultrasonido (UT/PAUT), Líquidos Penetrantes</strong>, y auditorías conforme a API 653 y resoluciones vigentes.</>
                        : <>Tank and equipment inspection services using <strong className="font-medium">MFL, LFET, Ultrasound (UT/PAUT), Penetrant Testing</strong> technologies, and audits according to API 653 and current regulations.</>}
                    </p>
                    <Link to="/services/inspeccion-tanques-api" className="inline-flex items-center text-[10px] sm:text-xs text-corporate-red hover:text-corporate-red/80 font-medium transition-colors">
                      {language === 'es' ? 'Ver división' : 'View division'}
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* División 5 - Ingeniería de Materiales */}
              <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-corporate-red/10 p-2 sm:p-2.5 rounded-lg group-hover:bg-corporate-red/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
                    </h5>
                    <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? <>Suministro y soporte técnico en <strong className="font-medium">acoplamientos industriales, reductores, válvulas y componentes certificados</strong>, actuando como nexo técnico entre el cliente y los fabricantes representados.</>
                        : <>Supply and technical support in <strong className="font-medium">industrial couplings, reducers, valves and certified components</strong>, acting as a technical link between the client and the represented manufacturers.</>}
                    </p>
                    <Link to="/services/ingenieria-materiales" className="inline-flex items-center text-[10px] sm:text-xs text-corporate-red hover:text-corporate-red/80 font-medium transition-colors">
                      {language === 'es' ? 'Ver división' : 'View division'}
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Divisiones 6 y 7 - Próximamente */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gray-300/50 p-2 sm:p-2.5 rounded-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h5 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-700 mr-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                      </h5>
                      <span className="text-[10px] sm:text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">2026</span>
                    </div>
                    <p className="text-xs sm:text-xs sm:text-sm text-gray-500 leading-relaxed mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Actualmente en desarrollo nuevas capacidades industriales:' : 'Currently developing new industrial capabilities:'}
                    </p>
                    <ul className="space-y-1.5">
                      <li className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <strong className="font-medium">{language === 'es' ? 'Revestimiento de Tanques' : 'Tank Coating'}</strong>
                        <span className="text-[10px] sm:text-xs text-gray-500 ml-2">{language === 'es' ? '· División en desarrollo' : '· Division in development'}</span>
                      </li>
                      <li className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <strong className="font-medium">{language === 'es' ? 'Cabinas de Granallado' : 'Shot Blasting Booths'}</strong>
                        <span className="text-[10px] sm:text-xs text-gray-500 ml-2">{language === 'es' ? '· Disponible 2026' : '· Available 2026'}</span>
                      </li>
                      <li className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <strong className="font-medium">{language === 'es' ? 'Prefabricados' : 'Prefabricated'}</strong>
                        <span className="text-[10px] sm:text-xs text-gray-500 ml-2">{language === 'es' ? '· Piping y estructuras metálicas' : '· Piping and metal structures'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Tradición Familiar - Estilo ejecutivo premium */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div className="animate-fade-in-up-delay-1 order-2 lg:order-1">
                <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
                  <span className="text-corporate-accent text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Empresa Familiar' : 'Family Business'}
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-5 lg:mb-6 leading-tight animate-fade-in-up-delay-2" style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: '200'
                }}>
                  {language === 'es' ? 'TRADICIÓN FAMILIAR' : 'FAMILY TRADITION'}
                </h2>
                
                <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-7 lg:mb-8 animate-fade-in-up-delay-3" style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: '300'
                }}>
                  {language === 'es'
                    ? <><strong className="text-gray-900 font-normal">SERVIN INGENIERÍA S.A.</strong> mantiene su esencia como empresa familiar, donde los valores de <strong className="text-gray-900 font-normal">confianza, compromiso y excelencia</strong> se transmiten generacionalmente. Esta característica nos permite conservar una atención personalizada y relaciones comerciales duraderas, combinando la solidez institucional con la calidez humana que distingue nuestro servicio.</>
                    : <><strong className="text-gray-900 font-normal">SERVIN INGENIERÍA S.A.</strong> maintains its essence as a family business, where the values of <strong className="text-gray-900 font-normal">trust, commitment and excellence</strong> are transmitted generationally. This characteristic allows us to maintain personalized attention and lasting business relationships, combining institutional strength with the human warmth that distinguishes our service.</>}
                </p>
                
                
              </div>
              
              <div className="flex items-center justify-center animate-fade-in-up-delay-1 order-1 lg:order-2">
                <div className="relative group w-full">
                  <div className="w-full h-64 sm:h-72 lg:h-80 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
                    <img 
                      src="/familia.png" 
                      alt="Familia Dagnino - Tradición familiar en SERVIN INGENIERÍA"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section simplificada */}
      <section id="historia" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        {/* Sophisticated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.8'%3E%3Cpath d='M60 60c16.569 0 30-13.431 30-30S76.569 0 60 0 30 13.431 30 30s13.431 30 30 30zm0-5c13.807 0 25-11.193 25-25S73.807 5 60 5 35 16.193 35 30s11.193 25 25 25z'/%3E%3Cpath d='M30 90c16.569 0 30-13.431 30-30S46.569 30 30 30 0 43.431 0 60s13.431 30 30 30zm0-5c13.807 0 25-11.193 25-25S43.807 35 30 35 5 46.193 5 60s11.193 25 25 25z'/%3E%3Cpath d='M90 90c16.569 0 30-13.431 30-30S106.569 30 90 30s-30 13.431-30 30 13.431 30 30 30zm0-5c13.807 0 25-11.193 25-25S103.807 35 90 35s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive header */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 text-[10px] sm:text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'NUESTRA HISTORIA' : 'OUR HISTORY'}
              </span>
            </div>
            
            <div className="max-w-4xl mx-auto animate-fade-in-up-delay-2">
              <p className="text-xs sm:text-sm lg:text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300'
              }}>
                {language === 'es'
                  ? <>Fundada en <strong className="text-gray-900 font-normal">1979</strong> en Bahía Blanca por el <strong className="text-gray-900 font-normal">Ing. Norberto Dagnino</strong>, SERVIN INGENIERÍA S.A. se consolidó como un referente nacional en ingeniería industrial aplicada. A lo largo de más de <strong className="text-gray-900 font-normal">cuatro décadas</strong>, la empresa evolucionó manteniendo sus valores fundamentales: <strong className="text-gray-900 font-normal">calidad, confiabilidad y compromiso operativo</strong>.</>
                  : <>Founded in <strong className="text-gray-900 font-normal">1979</strong> in Bahía Blanca by <strong className="text-gray-900 font-normal">Eng. Norberto Dagnino</strong>, SERVIN INGENIERÍA S.A. established itself as a national reference in applied industrial engineering. Throughout more than <strong className="text-gray-900 font-normal">four decades</strong>, the company evolved while maintaining its fundamental values: <strong className="text-gray-900 font-normal">quality, reliability and operational commitment</strong>.</>}
              </p>
            </div>
          </div>

          {/* Fundador Section - Executive style simplificado */}
          <div className="mb-12 sm:mb-14 lg:mb-16 animate-fade-in-up-delay-3">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-sm border border-gray-200/50 max-w-4xl mx-auto hover:shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-center">
                <div className="md:col-span-1">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/norberto.png" 
                      alt="Ing. Norberto Dagnino"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <h4 className="text-sm sm:text-sm sm:text-base font-medium text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Ing. Norberto Dagnino
                    </h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-3 font-medium">{language === 'es' ? 'Fundador y Director Ejecutivo' : 'Founder and Executive Director'}</p>
                  <p className="text-gray-600 text-xs sm:text-xs sm:text-sm leading-relaxed" style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '300'
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
      </section>

      {/* Timeline Section - Compacta y Continua */}
      <section className="relative py-10 sm:py-12 lg:py-16 bg-gray-50">
        {/* Separador visual superior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header compacto */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? '46 Años de Evolución' : '46 Years of Evolution'}
            </h2>
            <div className="w-12 h-0.5 bg-corporate-red mx-auto"></div>
          </div>

          {/* Timeline compacta */}
          <div className="relative">
            {/* Línea vertical central - sutil, acompaña */}
            <div className="absolute left-5 sm:left-1/2 top-2 bottom-2 w-[2px] bg-gray-300 transform sm:-translate-x-1/2"></div>
            
            <div className="space-y-3 sm:space-y-4">
              {timelineEvents.map((event, index) => {
                const isLast = index === timelineEvents.length - 1;
                return (
                <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Punto de conexión - pequeño y limpio */}
                  <div className={`absolute left-5 sm:left-1/2 w-2.5 h-2.5 rounded-full transform -translate-x-1/2 mt-4 z-10 ${isLast ? 'bg-corporate-red ring-4 ring-corporate-red/20' : 'bg-gray-400 border-2 border-white'}`}></div>
                  
                  {/* Card compacta - más cerca de la línea */}
                  <div className={`ml-10 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'} sm:w-[47%]`}>
                    <div className={`bg-white rounded-lg px-3 py-2.5 shadow-sm border transition-all duration-200 group ${isLast ? 'border-corporate-red/30 shadow-md ring-1 ring-corporate-red/10' : 'border-gray-200 hover:shadow-md hover:border-gray-300'}`}>
                      {/* Badge año + título en línea */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-bold rounded ${isLast ? 'bg-corporate-red text-white' : 'bg-gray-700 text-white'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '40px' }}>
                          {event.year}
                        </span>
                        <h3 className={`text-xs sm:text-sm font-semibold transition-colors ${isLast ? 'text-corporate-red' : 'text-gray-900 group-hover:text-gray-700'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {event.title}
                        </h3>
                      </div>
                      
                      {/* Descripción breve */}
                      <p className="text-[11px] text-gray-600 leading-snug mb-1.5" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}>
                        {event.description}
                      </p>
                      
                      {/* Bullets compactos */}
                      <div className="flex flex-wrap gap-1">
                        {event.bullets.map((bullet, idx) => (
                          <span key={idx} className={`inline-flex items-center px-1.5 py-0.5 text-[9px] font-medium rounded ${isLast ? 'bg-corporate-red/10 text-corporate-red' : 'bg-gray-100 text-gray-600'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
        
        {/* Separador visual inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </section>

      {/* Misión y Visión - Simplificado y compacto */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Misión */}
            <div className="rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
              }}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'MISIÓN' : 'MISSION'}
                </h3>
                <div className="w-12 h-1 bg-white/60 mb-6"></div>
                <p className="text-white/95 text-base lg:text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es'
                    ? 'Brindar servicios especializados de ingeniería industrial con los más altos estándares de calidad, seguridad y eficiencia.'
                    : 'Provide specialized industrial engineering services with the highest standards of quality, safety and efficiency.'}
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-corporate-red rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'VISIÓN' : 'VISION'}
                </h3>
                <div className="w-12 h-1 bg-gray-300 mb-6"></div>
                <p className="text-gray-700 text-base lg:text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es'
                    ? 'Ser reconocidos como la empresa líder en ingeniería industrial especializada, manteniendo nuestros valores familiares.'
                    : 'Be recognized as the leading company in specialized industrial engineering, maintaining our family values.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Final - Estilo ejecutivo premium */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" 
          style={{
            background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '¿Listo para trabajar con nosotros?' : 'Ready to work with us?'}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? <>TRABAJEMOS <span className="font-semibold">JUNTOS</span></> : <>LET'S WORK <span className="font-semibold">TOGETHER</span></>}
              </h3>
              
              <p className="text-lg sm:text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? <>Más de cuatro décadas de experiencia nos respaldan. <strong>Contáctanos</strong> y descubre cómo podemos contribuir al éxito de tu proyecto.</>
                  : <>Over four decades of experience back us up. <strong>Contact us</strong> and discover how we can contribute to the success of your project.</>}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-corporate-red text-sm sm:text-sm sm:text-base font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '200px' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {language === 'es' ? 'Contacto' : 'Contact'}
                </Link>
                
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-sm sm:text-base font-medium rounded-xl hover:bg-white hover:text-corporate-red transition-colors duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '200px' }}
                >
                  {language === 'es' ? 'Ver Servicios' : 'View Services'}
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
