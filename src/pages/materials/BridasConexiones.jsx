import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const BridasConexiones = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const tiposBridas = [
    {
      tipo: language === 'es' ? "Bridas ANSI B16.5" : "ANSI B16.5 Flanges",
      descripcion: language === 'es' ? "Estándar americano para conexiones bridadas de acero" : "American standard for steel flanged connections",
      imagen: "https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["Clases 150# a 2500#", "Materiales A105, A182", "Diámetros 1/2\" a 60\"", "Cara plana y RTJ"]
        : ["Classes 150# to 2500#", "Materials A105, A182", "Diameters 1/2\" to 60\"", "Flat face and RTJ"],
      aplicaciones: language === 'es' 
        ? ["Petroquímica", "Oil & Gas", "Refinación", "Procesos industriales"]
        : ["Petrochemical", "Oil & Gas", "Refining", "Industrial processes"]
    },
  
    {
      tipo: language === 'es' ? "Bridas RTJ" : "RTJ Flanges",
      descripcion: language === 'es' ? "Ring Type Joint para alta presión y temperatura" : "Ring Type Joint for high pressure and temperature",
      imagen: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["API 6A estándar", "Clases 2000# a 20000#", "Ring metálicos", "Sellado metal-metal"]
        : ["API 6A standard", "Classes 2000# to 20000#", "Metal rings", "Metal-to-metal sealing"],
      aplicaciones: language === 'es' 
        ? ["Oil & Gas offshore", "Equipos de alta presión", "Cabezales de pozo", "Aplicaciones críticas"]
        : ["Offshore Oil & Gas", "High pressure equipment", "Wellheads", "Critical applications"]
    },
    {
      tipo: language === 'es' ? "Bridas Slip-On" : "Slip-On Flanges",
      descripcion: language === 'es' ? "Conexión soldada para aplicaciones de baja presión" : "Welded connection for low pressure applications",
      imagen: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["Soldadura por filete", "Clases 150# y 300#", "Instalación económica", "DN25 a DN600"]
        : ["Fillet welding", "Classes 150# and 300#", "Economical installation", "DN25 to DN600"],
      aplicaciones: language === 'es' 
        ? ["Aplicaciones generales", "Baja presión", "Sistemas de agua", "Servicios auxiliares"]
        : ["General applications", "Low pressure", "Water systems", "Auxiliary services"]
    },
    {
      tipo: language === 'es' ? "Bridas Weld Neck" : "Weld Neck Flanges",
      descripcion: language === 'es' ? "Soldadura a tope para máxima resistencia" : "Butt welding for maximum strength",
      imagen: "https://images.unsplash.com/photo-1581092451866-a33e4b30a2e6?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["Soldadura a tope", "Todas las clases ANSI", "Máxima resistencia", "Smooth bore"]
        : ["Butt welding", "All ANSI classes", "Maximum strength", "Smooth bore"],
      aplicaciones: language === 'es' 
        ? ["Alta presión", "Servicios críticos", "Líneas principales", "Aplicaciones severas"]
        : ["High pressure", "Critical services", "Main lines", "Severe applications"]
    },
    {
      tipo: language === 'es' ? "Adaptadores Especiales" : "Special Adapters",
      descripcion: language === 'es' ? "Conexiones para equipos y transiciones especiales" : "Connections for equipment and special transitions",
      imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      especificaciones: language === 'es' 
        ? ["Diseños especiales", "Múltiples estándares", "Adaptaciones", "Fabricación especial"]
        : ["Special designs", "Multiple standards", "Adaptations", "Special fabrication"],
      aplicaciones: language === 'es' 
        ? ["Conexión equipos", "Transiciones", "Adaptaciones", "Proyectos especiales"]
        : ["Equipment connection", "Transitions", "Adaptations", "Special projects"]
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img src="https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=2070&auto=format&fit=crop" alt="Industrial Background" className="w-full h-full object-cover" style={{filter: 'grayscale(100%) contrast(1.2)', mixBlendMode: 'overlay'}} />
        </div>

        <div className="absolute inset-0 z-10" style={{background: 'radial-gradient(rgba(220, 38, 38, 0.03) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)'}}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'CONEXIONES INDUSTRIALES CERTIFICADAS' : 'CERTIFIED INDUSTRIAL CONNECTIONS'}</span>
            </div>
          </div>

          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 200, letterSpacing: '0.01em', lineHeight: '1.1'}}>{language === 'es' ? 'BRIDAS Y' : 'FLANGES &'}</h1>
            
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-2 sm:mr-4"></div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '1.1'}}>
                {language === 'es' ? 'CONEXIONES' : 'FITTINGS'}
              </h2>

              <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-2 sm:ml-4"></div>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 lg:mb-16 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300, letterSpacing: '0.01em'}}>
            {language === 'es' 
              ? 'Bridas y conexiones certificadas ANSI, ASME, API y DIN para instalaciones industriales y petroquímicas.'
              : 'ANSI, ASME, API and DIN certified flanges and fittings for industrial and petrochemical installations.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 animate-fade-in-up-delay-3 px-4">
            <Link className="btn-primary w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base" to="/contact" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}</Link>

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
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Bridas' : 'Flanges'}</span>
          </div>
        </div>
      </section>

      {/* Tipos de Bridas */}
      <section id="scroll-content" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Tipos de ' : 'Types of '}<span className="font-semibold text-corporate-red">{language === 'es' ? 'Bridas y Conexiones' : 'Flanges and Fittings'}</span>
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' 
                ? 'Bridas certificadas según normas internacionales ANSI, DIN, API con trazabilidad completa y certificados de material.'
                : 'Flanges certified according to international ANSI, DIN, API standards with full traceability and material certificates.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {tiposBridas.map((brida, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-w-16 aspect-h-10 mb-4 sm:mb-6">
                  <img 
                    src={brida.imagen}
                    alt={brida.tipo}
                    className="w-full h-36 sm:h-40 lg:h-48 object-cover rounded-lg bg-gray-100"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {brida.tipo}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {brida.descripcion}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-corporate-red mb-2">{language === 'es' ? 'Especificaciones:' : 'Specifications:'}</h4>
                    <ul className="space-y-1">
                      {brida.especificaciones.map((spec, idx) => (
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
                      {brida.aplicaciones.map((aplicacion, idx) => (
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
                  ? <>¿Necesitás <span className="font-semibold">bridas certificadas</span>?</>
                  : <>Need <span className="font-semibold">certified flanges</span>?</>}
              </h3>
              
              <p className="text-lg sm:text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Consultanos para <strong>selección técnica</strong>, disponibilidad de stock y cotización inmediata.</>
                  : <>Contact us for <strong>technical selection</strong>, stock availability and immediate quote.</>}
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
                  {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
                </Link>
                
                <Link 
                  to="/services/componentes-industriales"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-sm sm:text-base font-medium rounded-xl hover:bg-white hover:text-corporate-red transition-colors duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '200px' }}
                >
                  {language === 'es' ? 'Volver a Componentes' : 'Back to Components'}
                </Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default BridasConexiones;