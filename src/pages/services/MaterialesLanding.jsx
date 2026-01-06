import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const MaterialesLanding = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop" 
            alt={language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'} 
            className="w-full h-full object-cover" 
            style={{
              filter: 'grayscale(30%) contrast(1.1)'
            }}
          />
        </div>

        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
        }}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16 xl:py-20">
          
          {/* Corporate badge */}
          <div className="mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 lg:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-white/90 text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'DIVISIÓN INGENIERÍA DE MATERIALES' : 'MATERIALS ENGINEERING DIVISION'}
              </span>
            </div>
          </div>

          {/* Executive title */}
          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6 px-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '1.1'
            }}>
              {language === 'es' ? 'INGENIERÍA DE' : 'MATERIALS'}
            </h1>
            <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-1 sm:mr-2 lg:mr-4"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-bold px-1 sm:px-2" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #A00000 50%, #8B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
                {language === 'es' ? 'MATERIALES' : 'ENGINEERING'}
              </h2>
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-1 sm:ml-2 lg:ml-4"></div>
            </div>
          </div>

          {/* Professional subtitle */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 lg:mb-16 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>Suministro integral de <span className="font-semibold">materiales industriales</span> y representaciones técnicas especializadas para la industria argentina.</>
              : <>Comprehensive supply of <span className="font-semibold">industrial materials</span> and specialized technical representations for Argentine industry.</>}
          </p>

          {/* Executive actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-3 px-4 sm:px-0">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 border border-red-900/20 text-center" 
              style={{ 
                minWidth: '200px', 
                fontFamily: 'Inter, system-ui, sans-serif',
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
              }}
            >
              {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
            </Link>

            <a 
              href="#categorias-materiales" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/25 hover:border-white/40 text-center"
              style={{ minWidth: '200px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver Catálogo de Productos' : 'View Product Catalog'}
            </a>
          </div>
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

      {/* Separador sutil */}
      <div className="relative h-px">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Categories Section */}
      <section id="categorias-materiales" className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 shadow-sm">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Líneas de Productos' : 'Product Lines'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3 sm:mb-4 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Categorías' : 'Specialized'}</span> {language === 'es' ? 'Especializadas' : 'Categories'}
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Líneas principales que cubren todas las necesidades de materiales industriales con stock permanente y entrega rápida.'
                : 'Main product lines covering all industrial material needs with permanent stock and fast delivery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Acoplamientos Rexnord */}
            <div className="group h-full">
              <Link 
                to="/materiales/acoplamientos" 
                className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://www.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/omega-hotspots.jpg?ext=.jpg" 
                    alt={language === 'es' ? 'Acoplamientos Rexnord' : 'Rexnord Couplings'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Acoplamientos Rexnord' : 'Rexnord Couplings'}
                  </h3>
                  <p className="text-xs sm:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Representación oficial Rexnord: Omega, Viva, Addax, Thomas y Euroflex para aplicaciones industriales críticas.'
                      : 'Official Rexnord representation: Omega, Viva, Addax, Thomas and Euroflex for critical industrial applications.'}
                  </p>
                  
                  <div className="flex items-center text-corporate-red font-semibold text-xs sm:text-xs sm:text-sm group-hover:translate-x-2 transition-transform duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <span>{language === 'es' ? 'Ver Todo' : 'View All'}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Reductores Falk CT-Series */}
            <div className="group h-full">
              <Link 
                to="/services/falk-ct-series" 
                className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://www.rexnord.com/Rexnord/media/Gear/Right%20Angle%20Gear%20Drives/CT-Series/rightFalkCT-hotspots.jpg?ext=.jpg" 
                    alt={language === 'es' ? 'Reductores Falk CT-Series para Torres de Enfriamiento' : 'Falk CT-Series Gear Drives for Cooling Towers'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Reductores Falk CT-Series' : 'Falk CT-Series Gear Drives'}
                  </h3>
                  <p className="text-xs sm:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Reductores especializados para torres de enfriamiento y transmisión pesada con acoplamientos Addax.'
                      : 'Specialized gear drives for cooling towers and heavy transmission with Addax couplings.'}
                  </p>
                  
                  <div className="flex items-center text-corporate-red font-semibold text-xs sm:text-xs sm:text-sm group-hover:translate-x-2 transition-transform duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <span>{language === 'es' ? 'Ver Todo' : 'View All'}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

          

            <div className="group h-full">
              <Link 
                to="/materiales/accesorios-caneria" 
                className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://francovigh.com/resources/original/productos_principales_home/1_welding_neck.png" 
                    alt={language === 'es' ? 'Accesorios para Cañerías' : 'Pipe Fittings'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Accesorios para Cañerías' : 'Pipe Fittings'}
                  </h3>
                  <p className="text-xs sm:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Codos, tees, reducciones, caps, uniones y accesorios forjados certificados ASME.'
                      : 'Elbows, tees, reducers, caps, unions and ASME certified forged fittings.'}
                  </p>
                  
                  <div className="flex items-center text-corporate-red font-semibold text-xs sm:text-xs sm:text-sm group-hover:translate-x-2 transition-transform duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <span>{language === 'es' ? 'Ver Todo' : 'View All'}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Válvulas Industriales - Nueva Card */}
            <div className="group h-full">
              <Link 
                to="/materiales/valvulas" 
                className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://velan.com/wp-content/uploads/2024/09/API-623-cast-steel-globe-edited-1.png" 
                    alt={language === 'es' ? 'Válvulas Industriales' : 'Industrial Valves'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Válvulas Industriales' : 'Industrial Valves'}
                  </h3>
                  <p className="text-xs sm:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Válvulas de compuerta, globo, retención, mariposa, bola y especiales para proceso industrial.'
                      : 'Gate, globe, check, butterfly, ball and special valves for industrial process.'}
                  </p>
                  
                  <div className="flex items-center text-corporate-red font-semibold text-xs sm:text-xs sm:text-sm group-hover:translate-x-2 transition-transform duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <span>{language === 'es' ? 'Ver Todo' : 'View All'}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ventajas Competitivas' : 'Competitive Advantages'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? '¿Por Qué Elegir' : 'Why Choose'} <span className="font-semibold text-corporate-red">SERVIN</span>?
            </h2>
            <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Cuatro décadas de liderazgo en el suministro de materiales industriales para empresas argentinas.'
                : 'Four decades of leadership in industrial materials supply for Argentine companies.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate-red/20 text-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-corporate-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '46 Años de Experiencia' : '46 Years of Experience'}</h3>
              <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Conocimiento profundo del mercado industrial argentino y proveedores internacionales.' : 'Deep knowledge of the Argentine industrial market and international suppliers.'}</p>
            </div>

            <div className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate-red/20 text-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-corporate-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Certificación y Trazabilidad' : 'Certification & Traceability'}</h3>
              <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Materiales certificados, documentación completa y cumplimiento de normas internacionales.' : 'Certified materials, complete documentation and international standards compliance.'}</p>
            </div>

            <div className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate-red/20 text-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-corporate-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Entrega Rápida' : 'Fast Delivery'}</h3>
              <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Stock disponible y logística optimizada a nivel nacional.' : 'Available stock and optimized nationwide logistics.'}</p>
            </div>

            <div className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate-red/20 text-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-corporate-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</h3>
              <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Asesoramiento especializado con ingenieros dedicados.' : 'Specialized consulting with dedicated engineers.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>¿Necesita materiales industriales <span className="block font-bold mt-2">certificados para su proceso?</span></>
                : <>Need certified industrial materials <span className="block font-bold mt-2">for your process?</span></>}
            </h2>
            
            <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>Nuestro equipo lo asesora en la selección de <strong className="text-white font-semibold">acoplamientos, válvulas, bridas y materiales especiales</strong>, con stock disponible y soporte técnico.</>
                : <>Our team advises you on the selection of <strong className="text-white font-semibold">couplings, valves, flanges and special materials</strong>, with available stock and technical support.</>}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
              <Link 
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white text-base sm:text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'es' ? 'Solicitar Cotización Técnica' : 'Request Technical Quote'}
              </Link>
              
              <Link 
                to="/services"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base sm:text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {language === 'es' ? 'Ver Todos los Servicios' : 'View All Services'}
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia industrial' : 'Industrial experience'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>✓ Stock</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Disponible' : 'Available'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería + Provisión' : 'Engineering + Supply'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MaterialesLanding;