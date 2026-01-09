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
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.thefabricator.com/a/how-a-pipe-spool-fabricator-digitized-traceability-1663248507.jpg" 
            alt="Prefabricados de Cañerías"
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
                {language === 'es' ? 'División Técnica' : 'Technical Division'}
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
                Prefabricados de{' '}
                <span className="text-corporate-red">Cañerías</span>
              </>
            ) : (
              <>
                Piping{' '}
                <span className="text-corporate-red">Prefabrication</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Prefabricados de cañerías y estructuras metálicas, fabricados en taller con control de calidad y listos para montaje en obra.'
              : 'Piping and structural prefabrication, manufactured in-shop with quality control and ready for on-site assembly.'}
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-block border-l-4 border-corporate-red bg-white px-8 py-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-widest" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Próximamente' : 'Coming Soon'}
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

          {/* Description */}
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Los Prefabricados de Cañerías se encuentran actualmente en etapa de implementación. Esta capacidad complementará nuestros servicios con fabricación en taller de spools y estructuras metálicas.'
              : 'Piping Prefabrication is currently in the implementation stage. This capability will complement our services with in-shop fabrication of spools and metal structures.'}
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

export default PrefabricadosCanerias;
