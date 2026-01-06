import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const RevestimientoIndustrial = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviciosProximamente = language === 'es' ? [
    {
      titulo: "Preparación de Superficie por Granallado",
      descripcion: "Limpieza y preparación de superficies metálicas mediante granallado para óptima adherencia de recubrimientos.",
      icon: "🔧",
      caracteristicas: [
        "Granallado Sa 2.5 / Sa 3",
        "Perfilado de superficie controlado",
        "Limpieza de óxido y contaminantes",
        "Preparación según NACE/SSPC"
      ]
    },
    {
      titulo: "Aplicación de Revestimientos Epóxicos",
      descripcion: "Sistemas de protección anticorrosiva de alta performance para ambientes industriales agresivos.",
      icon: "🎨",
      caracteristicas: [
        "Epóxicos libres de solventes",
        "Sistemas multicapa",
        "Resistencia química superior",
        "Larga vida útil"
      ]
    },
    {
      titulo: "Control de Calidad y Certificación",
      descripcion: "Inspección completa de procesos y certificación de trabajos según estándares internacionales.",
      icon: "📊",
      caracteristicas: [
        "Medición de perfil de anclaje",
        "Control de espesores de película",
        "Pruebas de adherencia",
        "Certificaciones NACE/SSPC"
      ]
    },
    {
      titulo: "Inspección de Recubrimientos",
      descripcion: "Evaluación integral de sistemas de protección existentes y nuevos aplicados.",
      icon: "🔍",
      caracteristicas: [
        "Detección de porosidad",
        "Medición de rugosidad",
        "Ensayos de continuidad",
        "Evaluación de vida útil"
      ]
    }
  ] : [
    {
      titulo: "Surface Preparation by Shot Blasting",
      descripcion: "Cleaning and preparation of metal surfaces through shot blasting for optimal coating adhesion.",
      icon: "🔧",
      caracteristicas: [
        "Shot blasting Sa 2.5 / Sa 3",
        "Controlled surface profiling",
        "Rust and contaminant cleaning",
        "NACE/SSPC preparation standards"
      ]
    },
    {
      titulo: "Epoxy Coating Application",
      descripcion: "High-performance anticorrosive protection systems for aggressive industrial environments.",
      icon: "🎨",
      caracteristicas: [
        "Solvent-free epoxies",
        "Multi-layer systems",
        "Superior chemical resistance",
        "Long service life"
      ]
    },
    {
      titulo: "Quality Control and Certification",
      descripcion: "Complete process inspection and work certification according to international standards.",
      icon: "📊",
      caracteristicas: [
        "Anchor profile measurement",
        "Film thickness control",
        "Adhesion testing",
        "NACE/SSPC certifications"
      ]
    },
    {
      titulo: "Coating Inspection",
      descripcion: "Comprehensive evaluation of existing and newly applied protection systems.",
      icon: "🔍",
      caracteristicas: [
        "Porosity detection",
        "Roughness measurement",
        "Continuity testing",
        "Service life evaluation"
      ]
    }
  ];

  const aplicacionesFuturas = language === 'es' ? [
    "Tanques de almacenamiento",
    "Estructuras metálicas industriales",
    "Equipos de proceso",
    "Tuberías y ductos",
    "Instalaciones offshore",
    "Plantas de tratamiento",
    "Refinerías y petroquímica",
    "Industria alimentaria"
  ] : [
    "Storage tanks",
    "Industrial metal structures",
    "Process equipment",
    "Pipes and ducts",
    "Offshore installations",
    "Treatment plants",
    "Refineries and petrochemical",
    "Food industry"
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="absolute inset-0 z-0 opacity-[0.06]">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
            alt={language === 'es' ? 'Revestimiento Industrial' : 'Industrial Coating'}
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(100%) contrast(1.2)',
              mixBlendMode: 'overlay'
            }}
          />
        </div>

        <div className="absolute inset-0 z-10" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(196,53,56,0.05) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
        }}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          
          {/* Badge de estado */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-400 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Próximamente 2026' : 'Coming Soon 2026'}
              </span>
            </div>
          </div>

          {/* Títulos */}
          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent to-red-500 mr-2 sm:mr-4"></div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #7B0000 50%, #6B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
                {language === 'es' ? 'REVESTIMIENTO' : 'INDUSTRIAL'}
              </h1>
              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-red-500 to-transparent ml-2 sm:ml-4"></div>
            </div>
            <p className="text-lg sm:text-base sm:text-lg md:text-xl text-white/60 font-light">{language === 'es' ? 'Industrial' : 'Coating'}</p>
          </div>

          {/* Descripción */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 lg:mb-16 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>Nueva división de <strong className="text-white/90">revestimientos industriales anticorrosivos</strong>. Granallado, aplicación de pinturas y control de calidad según estándares NACE/SSPC para protección de equipos y estructuras.</>
              : <>New division for <strong className="text-white/90">industrial anticorrosive coatings</strong>. Shot blasting, paint application and quality control according to NACE/SSPC standards for equipment and structure protection.</>}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 animate-fade-in-up-delay-3 px-4">
            <a 
              href="#informacion"
              className="w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Conocer más' : 'Learn More'}
            </a>
            <Link 
              to="/services"
              className="w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/20"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver Otros Servicios' : 'View Other Services'}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-[10px] sm:text-xs font-medium mb-2 tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
            <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Navegación */}
      <section className="py-4 sm:py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <Link to="/services" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Servicios' : 'Services'}</Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Revestimiento Industrial' : 'Industrial Coating'}</span>
            <span className="ml-2 text-[10px] sm:text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">{language === 'es' ? 'Próximamente' : 'Coming Soon'}</span>
          </div>
        </div>
      </section>

      {/* Mensaje Institucional - Diseño Moderno */}
      <section id="informacion" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-red/10 to-red-600/5 rounded-3xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 to-transparent rounded-3xl transform rotate-3"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 h-full flex flex-col justify-center">
                  <div className="text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-corporate-red to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 transform rotate-3">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                    </div>
                    
                    {/* Info pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      <div className="bg-gray-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">NACE</span>
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">SSPC</span>
                      </div>
                      <div className="bg-red-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-corporate-red">{language === 'es' ? 'Anticorrosivo' : 'Anticorrosive'}</span>
                      </div>
                    </div>
                    
                    {/* Status */}
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-4 border border-red-100">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{language === 'es' ? 'En planificación' : 'In planning'}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{language === 'es' ? 'Lanzamiento previsto 2026' : 'Expected launch 2026'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-6 shadow-lg shadow-red-500/25">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                {language === 'es' ? 'Nueva División 2026' : 'New Division 2026'}
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Protección <span className="text-corporate-red">Anticorrosiva</span></>
                  : <><span className="text-corporate-red">Anticorrosive</span> Protection</>}
              </h2>
              
              <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Servicios integrales de revestimiento industrial incluyendo granallado, aplicación de pinturas y control de calidad según estándares NACE/SSPC para protección de equipos y estructuras.'
                  : 'Comprehensive industrial coating services including shot blasting, paint application and quality control according to NACE/SSPC standards for equipment and structure protection.'}</p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { es: 'Granallado Profesional', en: 'Professional Shot Blasting', icon: '⚙️' },
                  { es: 'Pinturas Industriales', en: 'Industrial Coatings', icon: '🎨' },
                  { es: 'Control NACE/SSPC', en: 'NACE/SSPC Control', icon: '📋' },
                  { es: 'Equipos Certificados', en: 'Certified Equipment', icon: '✅' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="text-base sm:text-lg md:text-xl">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{language === 'es' ? item.es : item.en}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{language === 'es' ? 'Lanzamiento 2026' : 'Launch 2026'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Previstos */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es'
                ? <>Servicios <span className="font-semibold text-corporate-red">Previstos</span></>
                : <><span className="font-semibold text-corporate-red">Planned</span> Services</>}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Protección anticorrosiva integral para la industria con tecnología de vanguardia.'
                : 'Comprehensive anticorrosive protection for industry with cutting-edge technology.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {serviciosProximamente.map((servicio, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-xl sm:text-2xl lg:text-3xl">
                  {servicio.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {servicio.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {servicio.descripcion}
                </p>
                <div className="space-y-2">
                  {servicio.caracteristicas.slice(0, 3).map((caracteristica, idx) => (
                    <div key={idx} className="flex items-center text-[10px] sm:text-xs text-gray-600">
                      <svg className="w-3 h-3 text-corporate-red mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {caracteristica}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones Futuras */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Aplicaciones' : 'Industrial'}</span> {language === 'es' ? 'Industriales' : 'Applications'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Sectores donde aplicaremos nuestros servicios de revestimiento industrial especializado.'
                : 'Sectors where we will apply our specialized industrial coating services.'}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {aplicacionesFuturas.map((aplicacion, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-xs sm:text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {aplicacion}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="relative py-24 bg-gradient-to-r from-corporate-red to-corporate-red/80 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {language === 'es' ? '¿Interesado en Nuestros' : 'Interested in Our'} <span className="font-semibold text-white">{language === 'es' ? 'Servicios Futuros?' : 'Future Services?'}</span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-10" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
            {language === 'es' 
              ? 'Manténgase informado sobre el lanzamiento de nuestra nueva división de revestimiento industrial en 2026.'
              : 'Stay informed about the launch of our new industrial coating division in 2026.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-corporate-red font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '200px' }}
            >
              {language === 'es' ? 'Consultar Disponibilidad' : 'Inquire About Availability'}
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-corporate-red transition-colors duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '200px' }}
            >
              {language === 'es' ? 'Ver Servicios Actuales' : 'View Current Services'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RevestimientoIndustrial;
