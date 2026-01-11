import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Divisiones activas (5)
  const activeDivisions = [
    {
      id: 'ingenieria-materiales',
      title: language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering',
      subtitle: language === 'es' ? 'Suministro integral con soporte de aplicación' : 'Comprehensive supply with application support',
      description: language === 'es' ? 'Acoplamientos, componentes, válvulas y materiales industriales certificados.' : 'Couplings, components, valves and certified industrial materials.',
      path: '/services/ingenieria-materiales',
      capabilities: language === 'es' ? ['Acoplamientos Rexnord', 'Componentes certificados', 'Stock permanente'] : ['Rexnord Couplings', 'Certified components', 'Permanent stock']
    },
    {
      id: 'planta-mantenimiento',
      title: language === 'es' ? 'Planta de Mantenimiento Industrial' : 'Industrial Maintenance Plant',
      subtitle: language === 'es' ? 'Infraestructura propia de 2,639 m²' : 'Own infrastructure of 2,639 m²',
      description: language === 'es' ? 'Recuperación, reparación y certificación de válvulas con banco Ventil.' : 'Recovery, repair and certification of valves with Ventil bench.',
      path: '/services/planta',
      capabilities: language === 'es' ? ['Banco Ventil certificado', 'Trazabilidad completa', 'Certificación OPDS'] : ['Certified Ventil bench', 'Complete traceability', 'OPDS Certification']
    },
    {
      id: 'laboratorio-movil',
      title: language === 'es' ? 'Mantenimientos In Situ – Laboratorio Móvil' : 'On-Site Maintenance – Mobile Laboratory',
      subtitle: language === 'es' ? 'Unidad técnica móvil' : 'Mobile technical unit',
      description: language === 'es' ? 'Calibración, medición y ensayos en campo de válvulas de seguridad, control e instrumentación.' : 'Field calibration, measurement and testing of safety, control and instrumentation valves.',
      path: '/services/laboratorio-movil',
      capabilities: language === 'es' ? ['Asistencia técnica en sitio', 'Válvulas de seguridad', 'Válvulas de control'] : ['On-site technical assistance', 'Safety valves', 'Control valves']
    },
    {
      id: 'preventest',
      title: language === 'es' ? 'Mantenimientos In Situ – PREVENTEST' : 'On-Site Maintenance – PREVENTEST',
      subtitle: language === 'es' ? 'Tecnología holandesa exclusiva' : 'Exclusive Dutch technology',
      description: language === 'es' ? 'Calibración de válvulas de seguridad en línea, sin parar planta.' : 'In-line safety valve calibration, without plant shutdown.',
      path: '/services/in-situ',
      capabilities: language === 'es' ? ['Sin desmontaje', 'Sin parar planta', 'Certificación ASME'] : ['No disassembly', 'No plant shutdown', 'ASME Certification']
    },
    {
      id: 'inspeccion-tanques',
      title: language === 'es' ? 'Inspección de Tanques API & END' : 'API Tank Inspection & NDT',
      subtitle: language === 'es' ? 'Auditorías certificadas y END avanzados' : 'Certified audits and advanced NDT',
      description: language === 'es' ? 'Inspección técnica de tanques con auditorías certificadas y Ensayos No Destructivos.' : 'Technical tank inspection with certified audits and Non-Destructive Testing.',
      path: '/services/inspecciones',
      capabilities: language === 'es' ? ['Auditorías Res. 785/05 y 277/25', 'MFL, LFET, UT, PAUT', 'Acceso por cuerda IRATA'] : ['Res. 785/05 & 277/25 Audits', 'MFL, LFET, UT, PAUT', 'IRATA rope access']
    }
  ];

  // Divisiones en desarrollo (3)
  const upcomingDivisions = [
    {
      id: 'revestimiento-industrial',
      title: language === 'es' ? 'Revestimiento Industrial' : 'Industrial Coating',
      description: language === 'es' ? 'Protección anticorrosiva y recuperación de superficies en tanques y equipos industriales.' : 'Anti-corrosive protection and surface recovery in tanks and industrial equipment.',
      path: '/services/tratamiento-tanques',
      capabilities: language === 'es' ? ['Preparación por granallado', 'Revestimientos epóxicos', 'Integración con inspecciones'] : ['Shot blasting preparation', 'Epoxy coatings', 'Integration with inspections']
    },
    {
      id: 'cabinas-granallado',
      title: language === 'es' ? 'Cabinas de Granallado' : 'Shot Blasting Booths',
      description: language === 'es' ? 'Granallado industrial para preparación de superficies metálicas.' : 'Industrial shot blasting for metal surface preparation.',
      path: '/services/cabinas-granallado',
      capabilities: language === 'es' ? ['Granallado industrial', 'Perfil de anclaje', 'Cabinas cerradas'] : ['Industrial shot blasting', 'Anchor profile', 'Enclosed booths']
    },
    {
      id: 'prefabricados',
      title: language === 'es' ? 'Prefabricados' : 'Prefabrication',
      description: language === 'es' ? 'Servicios integrales de prefabricado de cañerías y estructuras metálicas, fabricados en taller y listos para instalación en obra.' : 'Comprehensive prefabrication services for piping and metal structures, manufactured in-shop and ready for on-site installation.',
      path: '/services/prefabricados',
      capabilities: language === 'es' ? ['Ingeniería de detalle', 'Fabricación en taller', 'Montaje industrial'] : ['Detail engineering', 'Workshop fabrication', 'Industrial assembly']
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Estilo Planta de Mantenimiento */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about/servin.png" 
            alt="Servin Ingeniería Servicios"
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
                {language === 'es' ? '8 Divisiones Especializadas' : '8 Specialized Divisions'}
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
                NUESTRAS <span className="text-corporate-red">DIVISIONES</span>
              </>
            ) : (
              <>
                OUR <span className="text-corporate-red">DIVISIONS</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Soluciones integrales de ingeniería industrial con infraestructura propia de 2.600 m² y certificaciones internacionales.'
              : 'Comprehensive industrial engineering solutions with our own 2,600 m² infrastructure and international certifications.'}
          </p>

          {/* CTA */}
          <a 
            href="#divisiones" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver divisiones' : 'View divisions'}
          </a>
        </div>

        {/* Deslizar */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-medium mb-1 sm:mb-2 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
            <svg className="w-3 h-5 sm:w-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Divisions Section - Compact Grid */}
      <section id="divisiones" className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-corporate-red text-[10px] sm:text-xs font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Divisiones Operativas' : 'Operational Divisions'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              {language === 'es' 
                ? <>Nuestras <span className="font-bold text-corporate-red">8 Divisiones</span></>
                : <>Our <span className="font-bold text-corporate-red">8 Divisions</span></>}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Infraestructura propia y certificaciones internacionales.' : 'Own infrastructure and international certifications.'}
            </p>
          </div>

          {/* Grid 3 columnas - Cards más altas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            
            {/* 5 Divisiones Activas */}
            {activeDivisions.map((division, index) => (
              <Link 
                key={index}
                to={division.path} 
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-corporate-red hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col"
              >
                <div className="h-1 w-full bg-corporate-red"></div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-corporate-red bg-red-50 px-2 py-0.5 rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-corporate-red group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-corporate-red transition-colors mb-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {division.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed mb-3 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {division.description}
                  </p>
                  
                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {division.capabilities.slice(0, 2).map((cap, idx) => (
                      <span key={idx} className="text-[9px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {cap}
                      </span>
                    ))}
                    {division.capabilities.length > 2 && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-gray-50 text-gray-400 rounded">+{division.capabilities.length - 2}</span>
                    )}
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100 mt-auto">
                    <span className="text-[10px] sm:text-xs font-semibold text-corporate-red group-hover:text-red-700 transition-colors">
                      {language === 'es' ? 'Ver División →' : 'View Division →'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* 2 Divisiones Próximamente */}
            {upcomingDivisions.map((division, index) => (
              <Link 
                key={`upcoming-${index}`}
                to={division.path} 
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl border border-dashed border-gray-300 hover:border-gray-500 hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col"
              >
                <div className="h-1 w-full bg-gray-400"></div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold text-white bg-gray-600 px-2 py-0.5 rounded inline-flex items-center">
                      <svg className="w-2.5 h-2.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {language === 'es' ? 'Próximamente 2026' : 'Coming Soon 2026'}
                    </span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-700 group-hover:text-gray-900 transition-colors mb-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {division.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed mb-3 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {division.description}
                  </p>
                  
                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {division.capabilities.slice(0, 2).map((cap, idx) => (
                      <span key={idx} className="text-[9px] px-1.5 py-0.5 bg-gray-200 text-gray-500 rounded font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {cap}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200 mt-auto">
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">
                      {language === 'es' ? 'Conocer más →' : 'Learn more →'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section - Solid Red Corporate */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" 
          style={{
            background: 'linear-gradient(135deg, #B00000 0%, #9A0000 100%)'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Contacto' : 'Contact'}</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>¿Necesita una <span className="font-semibold">solución técnica industrial</span>?</>
                  : <>Need an <span className="font-semibold">industrial technical solution</span>?</>}
              </h3>
              
              <p className="text-sm sm:text-base text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                {language === 'es'
                  ? <>Nuestro equipo evalúa su requerimiento y le propone la solución más adecuada en <strong className="text-white font-normal">mantenimiento, inspección o suministro industrial</strong>, conforme a normas y certificaciones vigentes.</>
                  : <>Our team evaluates your requirements and proposes the most suitable solution in <strong className="text-white font-normal">maintenance, inspection or industrial supply</strong>, in accordance with current standards and certifications.</>}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link 
                  to={`/contact?subject=${encodeURIComponent(
                    language === 'es'
                      ? 'Necesito una solución técnica industrial'
                      : 'I need an industrial technical solution'
                  )}#formulario`}
                  className="btn-primary-light px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '220px' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'es' ? 'Solicitar Cotización Técnica' : 'Request Technical Quote'}
                </Link>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default Services;