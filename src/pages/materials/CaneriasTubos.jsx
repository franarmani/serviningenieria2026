import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const CaneriasTubos = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const tiposCanerias = [
    {
      tipo: language === 'es' ? "Tubos Sin Costura" : "Seamless Tubes",
      descripcion: language === 'es' ? "Tubería seamless para alta presión y temperatura" : "Seamless piping for high pressure and temperature",
      imagen: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
      especificaciones: ["ASTM A106, A53", "Schedule 40, 80, 160", language === 'es' ? "Diámetros 1/8\" a 24\"" : "Diameters 1/8\" to 24\"", language === 'es' ? "Temperatura hasta 850°F" : "Temperature up to 850°F"],
      aplicaciones: language === 'es' ? ["Alta presión", "Vapor", "Petroquímica", "Oil & Gas"] : ["High pressure", "Steam", "Petrochemical", "Oil & Gas"]
    },
    {
      tipo: language === 'es' ? "Tubos Con Costura" : "Welded Tubes", 
      descripcion: language === 'es' ? "Tubería soldada para aplicaciones generales" : "Welded piping for general applications",
      imagen: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      especificaciones: ["ASTM A53, A135", "ERW y SAW", language === 'es' ? "Grandes diámetros" : "Large diameters", language === 'es' ? "Económicos" : "Cost-effective"],
      aplicaciones: language === 'es' ? ["Estructuras", "Servicios generales", "Agua", "HVAC"] : ["Structures", "General services", "Water", "HVAC"]
    },
    {
      tipo: language === 'es' ? "Tubos Aleados" : "Alloy Tubes",
      descripcion: language === 'es' ? "Aleaciones especiales para condiciones extremas" : "Special alloys for extreme conditions",
      imagen: "https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=800&auto=format&fit=crop",
      especificaciones: ["ASTM A335", "P5, P9, P11, P22", language === 'es' ? "Alta temperatura" : "High temperature", language === 'es' ? "Resistencia fluencia" : "Creep resistance"],
      aplicaciones: language === 'es' ? ["Centrales térmicas", "Plantas químicas", "Refinerías", "Petroquímica"] : ["Thermal power plants", "Chemical plants", "Refineries", "Petrochemical"]
    },
    {
      tipo: language === 'es' ? "Tubos Inoxidables" : "Stainless Steel Tubes",
      descripcion: language === 'es' ? "Acero inoxidable para resistencia a la corrosión" : "Stainless steel for corrosion resistance",
      imagen: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      especificaciones: ["ASTM A312", "304, 316, 321, 347", "Seamless y welded", language === 'es' ? "Acabados sanitarios" : "Sanitary finishes"],
      aplicaciones: language === 'es' ? ["Farmacéutica", "Alimentaria", "Química", "Offshore"] : ["Pharmaceutical", "Food industry", "Chemical", "Offshore"]
    },
    {
      tipo: language === 'es' ? "Tubos API" : "API Tubes",
      descripcion: language === 'es' ? "Especificaciones API para industria petrolera" : "API specifications for oil industry",
      imagen: "https://images.unsplash.com/photo-1581092451866-a33e4b30a2e6?q=80&w=800&auto=format&fit=crop",
      especificaciones: ["API 5L", "X42, X52, X60, X65", "PSL1 y PSL2", language === 'es' ? "Líneas de transmisión" : "Transmission lines"],
      aplicaciones: language === 'es' ? ["Oleoductos", "Gasoductos", "Offshore", "Downstream"] : ["Oil pipelines", "Gas pipelines", "Offshore", "Downstream"]
    },
    {
      tipo: language === 'es' ? "Tubos Especiales" : "Special Tubes",
      descripcion: language === 'es' ? "Tubería para aplicaciones específicas" : "Piping for specific applications",
      imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      especificaciones: ["Duplex", "Super duplex", "Hastelloy", "Inconel"],
      aplicaciones: language === 'es' ? ["Ambientes corrosivos", "Alta temperatura", "Offshore", "Nuclear"] : ["Corrosive environments", "High temperature", "Offshore", "Nuclear"]
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop" 
            alt={language === 'es' ? 'Accesorios para Cañerías' : 'Pipe Fittings'}
            className="w-full h-full object-cover" 
            style={{ filter: 'blur(3px)' }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16 xl:py-20">
          
          {/* Badge */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-2.5">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {language === 'es' ? (
              <>
                ACCESORIOS PARA{' '}
                <span className="text-corporate-red">CAÑERÍAS</span>
              </>
            ) : (
              <>
                PIPE{' '}
                <span className="text-corporate-red">FITTINGS</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Codos, Té, Bridas, Reducciones, Caps, Uniones, Caños y accesorios forjados certificados ASTM y ASME para instalaciones de proceso.'
              : 'Elbows, Tees, Flanges, Reducers, Caps, Unions, Pipes and ASTM and ASME certified forged fittings for process installations.'}
          </p>

          {/* CTA */}
          <a 
            href="#scroll-content" 
            className="inline-flex items-center text-sm sm:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver catálogo' : 'View catalog'}
          </a>
        </div>

        {/* Deslizar */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[10px] sm:text-xs font-medium mb-2 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
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
            <Link to="/services/ingenieria-materiales" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Ing. Materiales' : 'Materials Eng.'}</Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/services/componentes-industriales" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Componentes' : 'Components'}</Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Cañerías' : 'Pipes'}</span>
          </div>
        </div>
      </section>

      {/* Tipos de Cañerías */}
      <section id="scroll-content" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Tipos de' : 'Types of'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Cañerías y Tubos' : 'Pipes and Tubes'}</span>
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' ? 'Tubería de proceso certificada ASTM, API con trazabilidad completa y certificados de material.' : 'ASTM, API certified process piping with full traceability and material certificates.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {tiposCanerias.map((caneria, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-w-16 aspect-h-10 mb-4 sm:mb-6">
                  <img 
                    src={caneria.imagen}
                    alt={caneria.tipo}
                    className="w-full h-36 sm:h-40 lg:h-48 object-cover rounded-lg bg-gray-100"
                  />
                </div>
                <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {caneria.tipo}
                </h3>
                <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {caneria.descripcion}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-corporate-red mb-2">{language === 'es' ? 'Especificaciones:' : 'Specifications:'}</h4>
                    <ul className="space-y-1">
                      {caneria.especificaciones.map((spec, idx) => (
                        <li key={idx} className="flex items-center text-[10px] sm:text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-corporate-red mb-2">{language === 'es' ? 'Aplicaciones:' : 'Applications:'}</h4>
                    <ul className="space-y-1">
                      {caneria.aplicaciones.map((aplicacion, idx) => (
                        <li key={idx} className="flex items-center text-[10px] sm:text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          <span>{aplicacion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-corporate-red overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {language === 'es' ? '¿Necesitás' : 'Need'} <span className="font-semibold text-white">{language === 'es' ? 'tubería certificada?' : 'certified piping?'}</span>
          </h2>
          <p className="text-sm sm:text-sm sm:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 lg:mb-10 px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
            {language === 'es' ? 'Consultanos para selección técnica, disponibilidad de stock y cotización inmediata.' : 'Contact us for technical selection, stock availability and immediate quotation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-corporate-red font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-sm sm:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
            </Link>
            <Link 
              to="/services/componentes-industriales"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-corporate-red transition-colors duration-300 text-sm sm:text-sm sm:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Volver a Componentes' : 'Back to Components'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaneriasTubos;