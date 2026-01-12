import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const MaterialesLanding = () => {
  const { language } = useLanguage();
  
  // Cálculo automático de años de experiencia desde 1979
  const yearsOfExperience = new Date().getFullYear() - 1979;
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen">
      
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about/servin.png" 
            alt={language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'} 
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 uppercase" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {language === 'es' ? (
              <>
                INGENIERÍA DE{' '}
                <span className="text-corporate-red">MATERIALES</span>
              </>
            ) : (
              <>
                MATERIALS{' '}
                <span className="text-corporate-red">ENGINEERING</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Suministro integral de materiales industriales certificados con disponibilidad inmediata y soporte técnico especializado para la industria pesada.'
              : 'Comprehensive supply of certified industrial materials with immediate availability and specialized technical support for heavy industry.'}
          </p>

          {/* CTA */}
          <a 
            href="#categorias-materiales" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver categorías' : 'View categories'}
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

      {/* Separador sutil */}
      <div className="relative h-px">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Categories Section */}
      <section id="categorias-materiales" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-white border border-red-100 rounded-full px-4 sm:px-5 py-2 mb-4 sm:mb-5 shadow-sm">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.1em' }}>{language === 'es' ? 'Catálogo Técnico' : 'Technical Catalog'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              <span className="font-bold text-corporate-red">{language === 'es' ? 'Categorías' : 'Specialized'}</span>{' '}
              <span className="font-light">{language === 'es' ? 'Especializadas' : 'Categories'}</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' 
                ? 'Representaciones internacionales líderes con inventario inmediato, soporte técnico especializado y entrega garantizada para la industria pesada.'
                : 'Leading international representations with immediate inventory, specialized technical support and guaranteed delivery for heavy industry.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {/* Válvulas Velan */}
            <div className="group h-full">
              <Link 
                to="/materiales/valvulas" 
                className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-corporate-red/30 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://velan.com/wp-content/uploads/2024/09/API-623-cast-steel-globe-edited-1.png" 
                    alt={language === 'es' ? 'Válvulas Velan' : 'Velan Valves'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-corporate-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'VELAN' : 'VELAN'}
                  </div>
                </div>
                
                <div className="p-5 sm:p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                    {language === 'es' ? 'Válvulas Velan' : 'Velan Valves'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                    {language === 'es' 
                      ? 'Representantes exclusivos de Velan en Argentina desde diciembre de 2000. Esclusa, Globo, Retención, Mariposa, Esférica y válvulas especiales para procesos industriales críticos.'
                      : 'Exclusive Velan representative in Argentina since December 2000. Gate, Globe, Check, Butterfly, ball and special valves for critical industrial processes.'}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-corporate-red font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <span>{language === 'es' ? 'Explorar Línea' : 'Explore Line'}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Acoplamientos Rexnord */}
            <div className="group h-full">
              <Link 
                to="/materiales/acoplamientos" 
                className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-corporate-red/30 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://www.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/omega-hotspots.jpg?ext=.jpg" 
                    alt={language === 'es' ? 'Acoplamientos Rexnord' : 'Rexnord Couplings'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-corporate-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'REXNORD' : 'REXNORD'}
                  </div>
                </div>
                
                <div className="p-5 sm:p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                    {language === 'es' ? 'Acoplamientos Rexnord' : 'Rexnord Couplings'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                    {language === 'es' 
                      ? 'Representación oficial Rexnord: Omega, Viva, Addax, Thomas XTSR, Euroflex para aplicaciones industriales críticas.'
                      : 'Official Rexnord representation: Omega, Viva, Addax, Thomas XTSR, Euroflex for critical industrial applications.'}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-corporate-red font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <span>{language === 'es' ? 'Explorar Línea' : 'Explore Line'}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Reductores Falk CT-Series */}
            <div className="group h-full">
              <Link 
                to="/services/falk-ct-series" 
                className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-corporate-red/30 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://www.rexnord.com/Rexnord/media/Gear/Right%20Angle%20Gear%20Drives/CT-Series/rightFalkCT-hotspots.jpg?ext=.jpg" 
                    alt={language === 'es' ? 'Reductores Falk CT-Series' : 'Falk CT-Series Gear Drives'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-corporate-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'FALK' : 'FALK'}
                  </div>
                </div>
                
                <div className="p-5 sm:p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                    {language === 'es' ? 'Reductores Falk CT-Series' : 'Falk CT-Series Gear Drives'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                    {language === 'es' 
                      ? 'Reductores especializados para torres de enfriamiento y transmisión pesada con acoplamientos Addax.'
                      : 'Specialized gear drives for cooling towers and heavy transmission with Addax couplings.'}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-corporate-red font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <span>{language === 'es' ? 'Explorar Línea' : 'Explore Line'}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Accesorios para Cañerías */}
            <div className="group h-full">
              <Link 
                to="/materiales/accesorios-caneria" 
                className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-corporate-red/30 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://francovigh.com/resources/original/productos_principales_home/1_welding_neck.png" 
                    alt={language === 'es' ? 'Accesorios para Cañerías' : 'Pipe Fittings'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-corporate-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'ASME' : 'ASME'}
                  </div>
                </div>
                
                <div className="p-5 sm:p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                    {language === 'es' ? 'Accesorios para Cañerías' : 'Pipe Fittings'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                    {language === 'es' 
                      ? 'Codos, Te, Bridas, Reducciones, Caps, Uniones, Caños y accesorios forjados.'
                      : 'Elbows, Tees, Flanges, Reducers, Caps, Unions, Pipes and forged fittings.'}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-corporate-red font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <span>{language === 'es' ? 'Explorar Línea' : 'Explore Line'}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ventajas Competitivas' : 'Competitive Advantages'}</span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 sm:mb-4 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? '¿Por Qué Elegir' : 'Why Choose'} <span className="font-semibold text-corporate-red">SERVIN</span>?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Cuatro décadas de liderazgo en el suministro de materiales industriales para empresas argentinas.'
                : 'Four decades of leadership in industrial materials supply for Argentine companies.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-corporate-red/20">
              <div className="flex gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? `${yearsOfExperience} Años de Experiencia` : `${yearsOfExperience} Years of Experience`}</h3>
                  <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Conocimiento profundo del mercado industrial argentino y proveedores internacionales.' : 'Deep knowledge of the Argentine industrial market and international suppliers.'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-corporate-red/20">
              <div className="flex gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Certificación y Trazabilidad' : 'Certification & Traceability'}</h3>
                  <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Materiales certificados, documentación completa y cumplimiento de normas internacionales.' : 'Certified materials, complete documentation and international standards compliance.'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-corporate-red/20">
              <div className="flex gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Entrega Rápida' : 'Fast Delivery'}</h3>
                  <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Stock disponible y logística optimizada a nivel nacional.' : 'Available stock and optimized nationwide logistics.'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-corporate-red/20">
              <div className="flex gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</h3>
                  <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Asesoramiento especializado con ingenieros dedicados.' : 'Specialized consulting with dedicated engineers.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14 lg:py-16" style={{background: 'linear-gradient(135deg, #E00000 0%, #C80000 50%, #B80000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2.5"></div>
              <span className="text-white/90 text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>¿Necesita materiales industriales <span className="block font-bold mt-1.5">certificados para su proceso?</span></>
                : <>Need certified industrial materials <span className="block font-bold mt-1.5">for your process?</span></>}
            </h2>
            
            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>Nuestro equipo lo asesora en la selección de <strong className="text-white font-semibold">acoplamientos, válvulas, bridas y materiales especiales</strong>, con stock disponible y soporte técnico.</>
                : <>Our team advises you on the selection of <strong className="text-white font-semibold">couplings, valves, flanges and special materials</strong>, with available stock and technical support.</>}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link 
                to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Solicitar cotización técnica: Ingeniería de Materiales' : 'Request a technical quote: Materials Engineering')}#formulario`}
                className="btn-primary-light w-full sm:w-auto px-6 sm:px-8 py-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{language === 'es' ? 'Solicitar cotización técnica' : 'Request a technical quote'}</span>
              </Link>
              
              <Link 
                to="/divisiones"
                className="btn-secondary-invert w-full sm:w-auto px-6 sm:px-8 py-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>{language === 'es' ? 'Ver divisiones' : 'View divisions'}</span>
              </Link>
            </div>
            
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-center">
                <div className="text-white font-bold text-xs sm:text-sm mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                <div className="text-white/70 text-[9px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia industrial' : 'Industrial experience'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-center">
                <div className="text-white font-bold text-xs sm:text-sm mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>✓ Stock</div>
                <div className="text-white/70 text-[9px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Disponible' : 'Available'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-center">
                <div className="text-white font-bold text-xs sm:text-sm mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</div>
                <div className="text-white/70 text-[9px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería + Provisión' : 'Engineering + Supply'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MaterialesLanding;