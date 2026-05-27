import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const EsparragosBuloneria = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const tiposEsparragos = [
    {
      tipo: language === 'es' ? "Espárragos ASTM A193 B7" : "ASTM A193 B7 Studs",
      descripcion: language === 'es' ? "Acero aleado para alta temperatura y presión" : "Alloy steel for high temperature and pressure",
      imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["ASTM A193 Gr B7", "Templado y revenido", "Hasta 1000°F", "UNC y UNF"]
        : ["ASTM A193 Gr B7", "Quenched and tempered", "Up to 1000°F", "UNC and UNF"],
      aplicaciones: language === 'es' 
        ? ["Alta presión", "Centrales térmicas", "Petroquímica", "Bridas pesadas"]
        : ["High pressure", "Power plants", "Petrochemical", "Heavy flanges"]
    },
    {
      tipo: language === 'es' ? "Tuercas ASTM A194 2H" : "ASTM A194 2H Nuts",
      descripcion: language === 'es' ? "Tuercas hexagonales para acompañar espárragos B7" : "Heavy hex nuts to match B7 studs",
      imagen: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["ASTM A194 Gr 2H", "Heavy hex", "Templadas", "Zinc plateado"]
        : ["ASTM A194 Gr 2H", "Heavy hex", "Tempered", "Zinc plated"],
      aplicaciones: language === 'es' 
        ? ["Con espárragos B7", "Alta presión", "Servicios críticos", "Bridas ANSI"]
        : ["With B7 studs", "High pressure", "Critical services", "ANSI flanges"]
    },
    {
      tipo: language === 'es' ? "Arandelas Endurecidas" : "Hardened Washers",
      descripcion: language === 'es' ? "Arandelas planas endurecidas para distribución de carga" : "Hardened flat washers for load distribution",
      imagen: "https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["ASTM F436", "Endurecidas", "Zinc plateado", "Múltiples diámetros"]
        : ["ASTM F436", "Hardened", "Zinc plated", "Multiple diameters"],
      aplicaciones: language === 'es' 
        ? ["Distribución carga", "Bridas", "Estructuras", "Conexiones críticas"]
        : ["Load distribution", "Flanges", "Structures", "Critical connections"]
    },
    {
      tipo: language === 'es' ? "Bulonería Inoxidable" : "Stainless Steel Fasteners",
      descripcion: language === 'es' ? "Acero inoxidable para ambientes corrosivos" : "Stainless steel for corrosive environments",
      imagen: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["316, 316L", "A4-70, A4-80", "ASTM F593, F594", "Resistente corrosión"]
        : ["316, 316L", "A4-70, A4-80", "ASTM F593, F594", "Corrosion resistant"],
      aplicaciones: language === 'es' 
        ? ["Ambientes marinos", "Química", "Alimentaria", "Offshore"]
        : ["Marine environments", "Chemical", "Food industry", "Offshore"]
    },
    {
      tipo: language === 'es' ? "Tornillería Especial" : "Special Fasteners",
      descripcion: language === 'es' ? "Tornillos y pernos para aplicaciones específicas" : "Screws and bolts for specific applications",
      imagen: "https://images.unsplash.com/photo-1581092451866-a33e4b30a2e6?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["Socket head", "Hex cap screws", "Múltiples grados", "Coatings especiales"]
        : ["Socket head", "Hex cap screws", "Multiple grades", "Special coatings"],
      aplicaciones: language === 'es' 
        ? ["Equipos", "Máquinas", "Instrumentación", "Montaje industrial"]
        : ["Equipment", "Machinery", "Instrumentation", "Industrial assembly"]
    },
    {
      tipo: language === 'es' ? "Bulonería Aleada" : "Alloy Fasteners",
      descripcion: language === 'es' ? "Aleaciones especiales para condiciones extremas" : "Special alloys for extreme conditions",
      imagen: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["Inconel, Hastelloy", "Monel, Duplex", "Super duplex", "Alta temperatura"]
        : ["Inconel, Hastelloy", "Monel, Duplex", "Super duplex", "High temperature"],
      aplicaciones: language === 'es' 
        ? ["Condiciones extremas", "Nuclear", "Aerospace", "Aplicaciones críticas"]
        : ["Extreme conditions", "Nuclear", "Aerospace", "Critical applications"]
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" alt="Industrial Background" className="w-full h-full object-cover" style={{filter: 'grayscale(100%) contrast(1.2)', mixBlendMode: 'overlay'}} />
        </div>
        <div className="absolute inset-0 z-10" style={{background: 'radial-gradient(rgba(220, 38, 38, 0.03) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)'}}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'SUJECIÓN INDUSTRIAL CERTIFICADA' : 'CERTIFIED INDUSTRIAL FASTENING'}</span>
            </div>
          </div>

          <div className="mb-8 sm:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 200, letterSpacing: '0.01em', lineHeight: '0.9'}}>{language === 'es' ? 'ESPÁRRAGOS Y' : 'STUDS &'}</h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-corporate-red mr-4"></div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, rgb(255, 0, 0) 0%, rgb(255, 51, 51) 50%, rgb(255, 102, 102) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '0.9'}}>{language === 'es' ? 'BULONERÍA' : 'FASTENERS'}</h2>
              <div className="h-px w-16 bg-gradient-to-r from-corporate-red to-transparent ml-4"></div>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 lg:mb-16 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300, letterSpacing: '0.01em'}}>
            {language === 'es' ? 'Espárragos y bulonería certificados ASTM con trazabilidad completa para conexiones bridadas.' : 'ASTM certified studs and fasteners with full traceability for flanged connections.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 animate-fade-in-up-delay-3 px-4">
            <Link className="btn-primary w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base" to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Solicitud de cotización: espárragos y bulonería ASTM' : 'Quote request: ASTM certified studs and fasteners')}#formulario`} style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}</Link>
            <a href="#scroll-content" className="btn-secondary w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Ver Tipos' : 'View Types'}</a>
          </div>
        </div>

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
            <Link to="/divisiones" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Divisiones' : 'Divisions'}</Link>
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
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Espárragos' : 'Studs'}</span>
          </div>
        </div>
      </section>

      {/* Tipos de Espárragos */}
      <section id="scroll-content" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Tipos de ' : 'Types of '}<span className="font-semibold text-corporate-red">{language === 'es' ? 'Espárragos y Bulonería' : 'Studs & Fasteners'}</span>
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' ? 'Espárragos y bulonería certificados ASTM con trazabilidad completa.' : 'ASTM certified studs and fasteners with full traceability.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {tiposEsparragos.map((esparrago, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-w-16 aspect-h-10 mb-4 sm:mb-6">
                  <img 
                    src={esparrago.imagen}
                    alt={esparrago.tipo}
                    className="w-full h-36 sm:h-40 lg:h-48 object-cover rounded-lg bg-gray-100"
                  />
                </div>
                <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {esparrago.tipo}
                </h3>
                <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {esparrago.descripcion}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-corporate-red mb-2">{language === 'es' ? 'Especificaciones:' : 'Specifications:'}</h4>
                    <ul className="space-y-1">
                      {esparrago.especificaciones.map((spec, idx) => (
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
                      {esparrago.aplicaciones.map((aplicacion, idx) => (
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
            {language === 'es' ? '¿Necesitás ' : 'Need '}<span className="font-semibold text-white">{language === 'es' ? 'espárragos certificados?' : 'certified studs?'}</span>
          </h2>
          <p className="text-sm sm:text-sm sm:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 lg:mb-10 px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
            {language === 'es' ? 'Consultanos para selección técnica, disponibilidad de stock y cotización inmediata.' : 'Contact us for technical selection, stock availability and immediate quotation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Solicitud de cotización: espárragos certificados' : 'Quote request: certified studs')}#formulario`}
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

export default EsparragosBuloneria;