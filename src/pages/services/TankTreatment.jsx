import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const TankTreatment = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviciosRevestimiento = language === 'es' ? [
    {
      titulo: "Preparación de Superficie mediante Granallado",
      descripcion: "Limpieza y acondicionamiento de superficies metálicas según especificación técnica, con control de perfil de anclaje para sistemas anticorrosivos.",
      imagen: "https://www.groupebellemare.com/wp-content/uploads/2021/08/Sablage.jpg"
    },
    {
      titulo: "Aplicación de Revestimientos Epóxicos",
      descripcion: "Revestimientos internos y externos de tanques para protección anticorrosiva en servicio industrial, bajo procedimientos técnicos controlados.",
      imagen: "https://www.cstindustries.com/wp-content/uploads/2017/01/optibond3-min.png"
    }
  ] : [
    {
      titulo: "Surface Preparation through Shot Blasting",
      descripcion: "Cleaning and conditioning of metal surfaces according to technical specifications, with anchor profile control for anti-corrosive systems.",
      imagen: "https://www.groupebellemare.com/wp-content/uploads/2021/08/Sablage.jpg"
    },
    {
      titulo: "Epoxy Coating Application",
      descripcion: "Internal and external tank coatings for anti-corrosive protection in industrial service, under controlled technical procedures.",
      imagen: "https://www.cstindustries.com/wp-content/uploads/2017/01/optibond3-min.png"
    }
  ];

  const alcanceTecnico = language === 'es' ? [
    "Limpieza y acondicionamiento según especificación",
    "Control de perfil de anclaje",
    "Preparación para sistemas anticorrosivos",
    "Revestimientos internos y externos de tanques",
    "Protección anticorrosiva para servicio industrial",
    "Aplicación bajo procedimientos técnicos controlados"
  ] : [
    "Cleaning and conditioning per specification",
    "Anchor profile control",
    "Preparation for anti-corrosive systems",
    "Internal and external tank coatings",
    "Anti-corrosive protection for industrial service",
    "Application under controlled technical procedures"
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://energy-steel.com/wp-content/uploads/2025/03/Coatings-and-Linings-2-1030x758.jpg" 
            alt="Tratamiento Industrial de Tanques"
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
                {language === 'es' ? 'Coming Soon · Lanzamiento previsto 2026' : 'Coming Soon · Expected Launch 2026'}
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
                REVESTIMIENTO{' '}
                <span className="text-corporate-red">INDUSTRIAL</span>
              </>
            ) : (
              <>
                <span className="text-corporate-red">INDUSTRIAL</span>{' '}
                COATING
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'SERVIN INGENIERÍA S.A. se encuentra desarrollando la División de Revestimiento Industrial, orientada a la preparación de superficies y aplicación de sistemas anticorrosivos para tanques y equipos industriales.'
              : 'SERVIN INGENIERÍA S.A. is developing the Industrial Coating Division, focused on surface preparation and application of anti-corrosive systems for tanks and industrial equipment.'}
          </p>
        </div>

      </section>

      {/* Coming Soon Section */}
      {/* Coming Soon Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-block border-l-4 border-corporate-red bg-white px-8 py-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-widest" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Lanzamiento Previsto' : 'Expected Launch'}
              </span>
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em'
          }}>
            COMING <span className="font-bold text-corporate-red">SOON</span>
          </h2>

          <div className="inline-block bg-corporate-red text-white px-6 py-2 mb-12">
            <span className="text-2xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>2026</span>
          </div>

          {/* Description */}
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'La División de Revestimiento Industrial se encuentra actualmente en etapa de implementación. Pronto complementaremos nuestros servicios de inspección con capacidades de preparación de superficie y aplicación de recubrimientos anticorrosivos.'
              : 'The Industrial Coating Division is currently in the implementation stage. We will soon complement our inspection services with surface preparation and anti-corrosive coating application capabilities.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-block px-10 py-4 bg-corporate-red text-white text-sm font-bold uppercase tracking-wider hover:bg-[#6B0000] transition-colors"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Contacto' : 'Contact'}
            </Link>
            
            <Link 
              to="/services"
              className="inline-block px-10 py-4 border-2 border-gray-300 text-gray-900 text-sm font-bold uppercase tracking-wider hover:border-gray-400 hover:bg-gray-100 transition-colors"
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

export default TankTreatment;
