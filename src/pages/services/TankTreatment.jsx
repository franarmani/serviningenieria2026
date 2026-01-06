import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const TankTreatment = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Capacidades previstas - 2 grandes bloques
  const capacidadesPrevistas = [
    {
      titulo: language === 'es' ? "Preparación de Superficie mediante Granallado" : "Surface Preparation through Shot Blasting",
      descripcion: language === 'es' 
        ? "Limpieza y acondicionamiento de superficies metálicas según especificación técnica, con control de perfil de anclaje para sistemas anticorrosivos."
        : "Cleaning and conditioning of metal surfaces according to technical specifications, with anchor profile control for anti-corrosive systems.",
      imagen: "https://www.groupebellemare.com/wp-content/uploads/2021/08/Sablage.jpg",
      caracteristicas: language === 'es' ? [
        "Limpieza y acondicionamiento según especificación",
        "Control de perfil de anclaje",
        "Preparación para sistemas anticorrosivos"
      ] : [
        "Cleaning and conditioning per specification",
        "Anchor profile control",
        "Preparation for anti-corrosive systems"
      ]
    },
    {
      titulo: language === 'es' ? "Aplicación de Revestimientos Epóxicos" : "Epoxy Coating Application",
      descripcion: language === 'es'
        ? "Revestimientos internos y externos de tanques para protección anticorrosiva en servicio industrial, bajo procedimientos técnicos controlados."
        : "Internal and external tank coatings for anti-corrosive protection in industrial service, under controlled technical procedures.",
      imagen: "https://www.cstindustries.com/wp-content/uploads/2017/01/optibond3-min.png",
      caracteristicas: language === 'es' ? [
        "Revestimientos internos y externos de tanques",
        "Protección anticorrosiva para servicio industrial",
        "Aplicación bajo procedimientos técnicos controlados"
      ] : [
        "Internal and external tank coatings",
        "Anti-corrosive protection for industrial service",
        "Application under controlled technical procedures"
      ]
    }
  ];

  // Visión estratégica - Integración de servicios
  const visionEstrategica = [
    {
      titulo: language === 'es' ? "Inspección API & END" : "API & NDT Inspection",
      descripcion: language === 'es' 
        ? "Evaluación técnica integral mediante ensayos no destructivos y auditorías normativas."
        : "Comprehensive technical evaluation through non-destructive testing and regulatory audits.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      titulo: language === 'es' ? "Evaluación del Estado del Activo" : "Asset Condition Assessment",
      descripcion: language === 'es'
        ? "Diagnóstico técnico para determinar intervenciones de preparación y protección requeridas."
        : "Technical diagnosis to determine required preparation and protection interventions.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      titulo: language === 'es' ? "Preparación de Superficie" : "Surface Preparation",
      descripcion: language === 'es'
        ? "Granallado y acondicionamiento según especificaciones técnicas del proyecto."
        : "Shot blasting and conditioning according to project technical specifications.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      titulo: language === 'es' ? "Aplicación de Recubrimientos" : "Coating Application",
      descripcion: language === 'es'
        ? "Sistemas de protección anticorrosiva aplicados bajo procedimientos controlados."
        : "Anti-corrosive protection systems applied under controlled procedures.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      )
    },
    {
      titulo: language === 'es' ? "Seguimiento y Documentación" : "Tracking and Documentation",
      descripcion: language === 'es'
        ? "Control técnico y registros de trazabilidad durante todo el proceso."
        : "Technical control and traceability records throughout the entire process.",
      icono: (
        <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Nota institucional removida - se muestra en sección aparte

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="absolute inset-0 z-0 opacity-[0.10]">
          <img 
            src="https://www.alpinepainting.com/images/assets/_half/Tank-Sandblasting.jpg"
            alt="Granallado y Revestimiento de Tanques Industrial"
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
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '1.1'
            }}>
              {language === 'es' ? 'REVESTIMIENTO' : 'INDUSTRIAL'}
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
                {language === 'es' ? 'INDUSTRIAL' : 'COATING'}
              </h2>
              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-red-500 to-transparent ml-2 sm:ml-4"></div>
            </div>
            <p className="text-lg sm:text-base sm:text-lg md:text-xl text-white/60 font-light">{language === 'es' ? 'Tratamiento Integral de Tanques Industriales' : 'Comprehensive Industrial Tank Treatment'}</p>
          </div>

          {/* Descripción */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 lg:mb-16 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>SERVIN INGENIERÍA S.A. se encuentra desarrollando una nueva división orientada al <strong className="text-white/90">revestimiento y tratamiento integral de tanques industriales</strong>, como parte de su plan de expansión de capacidades técnicas.</>
              : <>SERVIN INGENIERÍA S.A. is developing a new division focused on <strong className="text-white/90">comprehensive industrial tank coating and treatment</strong>, as part of its technical capabilities expansion plan.</>}
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
            <span className="ml-2 text-[10px] sm:text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">{language === 'es' ? 'Próximamente 2026' : 'Coming Soon 2026'}</span>
          </div>
        </div>
      </section>

      {/* 2 Cards Principales - Capacidades Previstas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Capacidades' : 'Planned'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Previstas' : 'Capabilities'}</span>
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Esta unidad permitirá complementar nuestras inspecciones API y END con servicios de preparación de superficie y aplicación de recubrimientos.'
                : 'This unit will complement our API and NDT inspections with surface preparation and coating application services.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capacidadesPrevistas.map((servicio, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-corporate-red/30">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-red-500/90 text-white text-[10px] sm:text-xs font-semibold rounded-full mb-2">{language === 'es' ? 'Próximamente' : 'Coming Soon'}</span>
                    <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {servicio.titulo}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm sm:text-sm sm:text-base mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {servicio.descripcion}
                  </p>
                  <ul className="space-y-2">
                    {servicio.caracteristicas.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                        <svg className="w-4 h-4 text-corporate-red mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estado del Servicio */}
      <section id="informacion" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Estado del' : 'Service'} <span className="font-semibold text-amber-600">{language === 'es' ? 'Servicio' : 'Status'}</span>
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {language === 'es' ? 'División en etapa de implementación – Lanzamiento previsto 2026' : 'Division in implementation stage – Expected launch 2026'}
            </div>
            <p className="text-sm sm:text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>Actualmente, estos servicios <strong>no se encuentran operativos</strong>.<br />La información se presenta con fines institucionales y de planificación técnica.</>
                : <>Currently, these services are <strong>not operational</strong>.<br />The information is presented for institutional and technical planning purposes.</>}
            </p>
            <div className="bg-white/80 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-xs sm:text-xs sm:text-sm text-gray-600 italic leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Los servicios de revestimiento y tratamiento de tanques se incorporarán progresivamente conforme a la habilitación de instalaciones, equipamiento y certificaciones correspondientes.'
                  : 'Tank coating and treatment services will be progressively incorporated as facilities, equipment, and corresponding certifications are enabled.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visión Estratégica */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-4">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-blue-700 text-xs sm:text-xs sm:text-sm font-medium">{language === 'es' ? 'Visión Estratégica' : 'Strategic Vision'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Solución' : 'Comprehensive'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Integral' : 'Solution'}</span>
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'La futura División de Revestimiento Industrial permitirá a SERVIN ofrecer una solución integral, integrando todas las etapas del proceso.'
                : 'The future Industrial Coating Division will allow SERVIN to offer a comprehensive solution, integrating all stages of the process.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visionEstrategica.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-corporate-red text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 mt-2">
                  {item.icono}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" 
          style={{
            background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Contacto' : 'Contact'}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>¿Interesado en conocer más sobre <span className="font-semibold">nuestros servicios activos</span>?</>
                  : <>Interested in learning more about <span className="font-semibold">our active services</span>?</>}
              </h3>
              
              <p className="text-lg sm:text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? <>Mientras desarrollamos esta nueva capacidad, conozca nuestras divisiones operativas de <strong>Inspección de Tanques API</strong>, <strong>Laboratorio Móvil</strong> y <strong>Planta de Mantenimiento</strong>.</>
                  : <>While we develop this new capability, learn about our operational divisions: <strong>API Tank Inspection</strong>, <strong>Mobile Laboratory</strong>, and <strong>Maintenance Plant</strong>.</>}
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
                  {language === 'es' ? 'Solicitar Información' : 'Request Information'}
                </Link>
                
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-sm sm:text-base font-medium rounded-xl hover:bg-white hover:text-corporate-red transition-colors duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '200px' }}
                >
                  {language === 'es' ? 'Ver Servicios Activos' : 'View Active Services'}
                </Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default TankTreatment;
