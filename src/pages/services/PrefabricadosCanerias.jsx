import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const PrefabricadosCanerias = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviciosPrevistos = language === 'es' ? [
    {
      titulo: "Ingeniería de Detalle",
      descripcion: "Desarrollo de planos de fabricación, isométricos de cañerías y especificaciones técnicas para prefabricados.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    },
    {
      titulo: "Fabricación en Taller",
      descripcion: "Prefabricación de spools de cañerías y estructuras metálicas en instalaciones propias con control de calidad.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      titulo: "Inspección y Certificación",
      descripcion: "Control de calidad, inspección dimensional y ensayos no destructivos sobre prefabricados antes de despacho.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      titulo: "Montaje Industrial",
      descripcion: "Instalación y ensamble de sistemas prefabricados en campo, incluyendo soldadura y puesta en servicio.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    }
  ] : [
    {
      titulo: "Detail Engineering",
      descripcion: "Development of fabrication drawings, piping isometrics and technical specifications for prefabrication.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    },
    {
      titulo: "Workshop Fabrication",
      descripcion: "Prefabrication of pipe spools and metal structures in our own facilities with quality control.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      titulo: "Inspection & Certification",
      descripcion: "Quality control, dimensional inspection and NDT on prefabricated components before dispatch.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      titulo: "Industrial Assembly",
      descripcion: "Installation and assembly of prefabricated systems in the field, including welding and commissioning.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Prefabricados Industriales"
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
                {language === 'es' ? 'PREFABRICADOS' : 'PREFABRICATION'}
              </h1>
              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-red-500 to-transparent ml-2 sm:ml-4"></div>
            </div>
            <p className="text-lg sm:text-base sm:text-lg md:text-xl text-white/60 font-light">{language === 'es' ? 'Cañerías y Estructuras Metálicas' : 'Piping and Metal Structures'}</p>
          </div>

          {/* Descripción */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 lg:mb-16 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>Nueva división de <strong className="text-white/90">prefabricados de cañerías y estructuras</strong>, fabricados en taller con control de calidad y listos para montaje en obra. Orientada a proyectos de gran escala en sectores de petróleo, gas, petroquímica y energía.</>
              : <>New division for <strong className="text-white/90">piping and structural prefabrication</strong>, manufactured in-shop with quality control and ready for on-site assembly. Focused on large-scale projects in oil, gas, petrochemical and energy sectors.</>}
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
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Prefabricados' : 'Prefabrication'}</span>
            <span className="ml-2 text-[10px] sm:text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">{language === 'es' ? 'Próximamente' : 'Coming Soon'}</span>
          </div>
        </div>
      </section>

      {/* Mensaje Institucional - Diseño Moderno */}
      <section id="informacion" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-6 shadow-lg shadow-red-500/25">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                {language === 'es' ? 'En Desarrollo' : 'In Development'}
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Fabricación de <span className="text-corporate-red">Calidad Industrial</span></>
                  : <><span className="text-corporate-red">Industrial Quality</span> Manufacturing</>}
              </h2>
              
              <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Servicios integrales de prefabricado de cañerías y estructuras metálicas, incluyendo ingeniería de detalle, fabricación en taller controlado, inspección y montaje en obra.'
                  : 'Comprehensive piping and metal structure prefabrication services, including detail engineering, controlled workshop fabrication, inspection and on-site assembly.'}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { es: 'Ingeniería de Detalle', en: 'Detail Engineering', icon: '📐' },
                  { es: 'Fabricación en Taller', en: 'Workshop Fabrication', icon: '🏭' },
                  { es: 'Control de Calidad', en: 'Quality Control', icon: '✅' },
                  { es: 'Montaje Industrial', en: 'Industrial Assembly', icon: '🔧' }
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
            
            {/* Visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-red/10 to-red-600/5 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 to-transparent rounded-3xl transform -rotate-3"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 h-full flex flex-col justify-center">
                  <div className="text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-corporate-red to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 transform -rotate-3">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                    
                    {/* Info pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      <div className="bg-gray-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">Spools</span>
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">{language === 'es' ? 'Estructuras' : 'Structures'}</span>
                      </div>
                      <div className="bg-red-100 px-4 py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-corporate-red">QA/QC</span>
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
          </div>
        </div>
      </section>

      {/* Servicios Previstos */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es'
                ? <>Servicios <span className="font-semibold text-corporate-red">Previstos</span></>
                : <><span className="font-semibold text-corporate-red">Planned</span> Services</>}
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Soluciones integrales de prefabricación para proyectos industriales de gran escala.'
                : 'Comprehensive prefabrication solutions for large-scale industrial projects.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {serviciosPrevistos.map((item, index) => (
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
              ? <>¿Interesado en conocer más sobre <span className="font-semibold">Prefabricados?</span></>
              : <>Interested in learning more about <span className="font-semibold">Prefabrication?</span></>}
          </h2>
          <p className="text-sm sm:text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {language === 'es'
              ? 'Estamos desarrollando esta capacidad como parte de nuestra expansión industrial. Contactanos para recibir información sobre el proyecto.'
              : 'We are developing this capability as part of our industrial expansion. Contact us to receive information about the project.'}
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

export default PrefabricadosCanerias;
