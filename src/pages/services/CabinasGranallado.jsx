import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const CabinasGranallado = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const aplicacionesPrevistas = language === 'es' ? [
    {
      titulo: "Preparación de Válvulas",
      descripcion: "Preparación de válvulas y componentes industriales previo a reparación o revestimiento.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      titulo: "Recuperación de Piezas",
      descripcion: "Recuperación de piezas industriales mediante limpieza y preparación superficial.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    },
    {
      titulo: "Tratamiento Previo",
      descripcion: "Tratamiento previo a soldadura o revestimiento para óptima adherencia de materiales.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
        </svg>
      )
    },
    {
      titulo: "Limpieza Industrial",
      descripcion: "Limpieza industrial controlada en cabinas cerradas para manejo responsable de materiales.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      )
    }
  ] : [
    {
      titulo: "Valve Preparation",
      descripcion: "Preparation of valves and industrial components prior to repair or coating.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      titulo: "Parts Recovery",
      descripcion: "Recovery of industrial parts through cleaning and surface preparation.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    },
    {
      titulo: "Pre-Treatment",
      descripcion: "Pre-treatment for welding or coating for optimal material adhesion.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
        </svg>
      )
    },
    {
      titulo: "Industrial Cleaning",
      descripcion: "Controlled industrial cleaning in enclosed booths for responsible material handling.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
            alt="Cabinas de Granallado Industrial"
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(30%) contrast(1.1)'
            }}
          />
        </div>

        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
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
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '1.1'
            }}>
              {language === 'es' ? 'CABINAS DE' : 'SHOT BLASTING'}
            </h1>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent to-red-500 mr-2 sm:mr-4"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #7B0000 50%, #6B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
                {language === 'es' ? 'GRANALLADO' : 'BOOTHS'}
              </h2>
              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-red-500 to-transparent ml-2 sm:ml-4"></div>
            </div>
            <p className="text-lg sm:text-base sm:text-lg md:text-xl text-white/60 font-light">{language === 'es' ? 'Preparación de superficies industriales' : 'Industrial Surface Preparation'}</p>
          </div>

          {/* Descripción */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 lg:mb-16 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>SERVIN Ingeniería incorporará <strong className="text-white/90">cabinas de granallado industrial</strong> para la preparación controlada de superficies metálicas, orientadas a trabajos de mantenimiento, recuperación y tratamiento superficial como parte de proyectos de mantenimiento y reparación.</>
              : <>SERVIN Engineering will incorporate <strong className="text-white/90">industrial shot blasting booths</strong> for controlled metal surface preparation, aimed at maintenance, recovery and surface treatment work as part of maintenance and repair projects.</>}
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
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Cabinas de Granallado' : 'Shot Blasting Booths'}</span>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </div>
                    
                    {/* Info pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      <div className="bg-gray-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">SA 2.5</span>
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">SSPC-SP10</span>
                      </div>
                      <div className="bg-red-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-corporate-red">ISO 8501</span>
                      </div>
                    </div>
                    
                    {/* Status */}
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-4 border border-red-100">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{language === 'es' ? 'En desarrollo' : 'In development'}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{language === 'es' ? 'Próxima puesta en marcha' : 'Upcoming launch'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-6 shadow-lg shadow-red-500/25">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                {language === 'es' ? 'En Desarrollo' : 'In Development'}
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Preparación de <span className="text-corporate-red">Superficies</span></>
                  : <>Surface <span className="text-corporate-red">Preparation</span></>}
              </h2>
              
              <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Capacidad de limpieza, preparación y acondicionamiento de piezas y componentes industriales mediante granallado, integrando procesos de mantenimiento y reparación.'
                  : 'Cleaning, preparation and conditioning capability for industrial parts and components through shot blasting, integrating maintenance and repair processes.'}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { es: 'Granallado Industrial', en: 'Industrial Shot Blasting', icon: '⚙️' },
                  { es: 'Limpieza Profunda', en: 'Deep Cleaning', icon: '✨' },
                  { es: 'Normas SSPC/NACE', en: 'SSPC/NACE Standards', icon: '📋' },
                  { es: 'Piezas Grandes', en: 'Large Components', icon: '🔩' }
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
                  <span className="font-semibold text-gray-900">{language === 'es' ? 'Próxima Puesta en Marcha' : 'Upcoming Launch'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones Previstas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es'
                ? <>Aplicaciones <span className="font-semibold text-corporate-red">Previstas</span></>
                : <><span className="font-semibold text-corporate-red">Planned</span> Applications</>}
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Servicios de preparación de superficies para componentes y equipos industriales.'
                : 'Surface preparation services for industrial components and equipment.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {aplicacionesPrevistas.map((item, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  {item.icono}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {item.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ background: '#8B0000' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {language === 'es'
              ? <>¿Interesado en conocer más sobre esta <span className="font-semibold">nueva capacidad?</span></>
              : <>Interested in learning more about this <span className="font-semibold">new capability?</span></>}
          </h2>
          <p className="text-sm sm:text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {language === 'es'
              ? 'Estamos desarrollando esta capacidad como parte de nuestra evolución industrial. Contactanos para recibir información sobre el proyecto.'
              : 'We are developing this capability as part of our industrial evolution. Contact us to receive information about the project.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg text-sm sm:text-sm sm:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Solicitar Información' : 'Request Information'}
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-red-600 transition-colors duration-300 text-sm sm:text-sm sm:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver Servicios Activos' : 'View Active Services'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CabinasGranallado;
