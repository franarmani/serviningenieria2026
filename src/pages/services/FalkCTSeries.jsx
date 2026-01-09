import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const FalkCTSeries = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://es.rexnord.com/Rexnord/media/Gear/Right%20Angle%20Gear%20Drives/CT-Series/rightFalkCT-hotspots.jpg?lang=es-mx&ext=.jpg" 
            alt={language === 'es' ? 'Reductores Falk CT-Series' : 'Falk CT-Series Gearboxes'}
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
                {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
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
                REDUCTORES{' '}
                <span className="text-corporate-red">FALK CT-SERIES</span>
              </>
            ) : (
              <>
                <span className="text-corporate-red">FALK CT-SERIES</span>{' '}
                GEARBOXES
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Reductores especializados para torres de enfriamiento y transmisión pesada. Ingeniería de aplicación y soporte técnico especializado.'
              : 'Specialized gear drives for cooling towers and heavy transmission. Application engineering and specialized technical support.'}
          </p>

          {/* CTA */}
          <a 
            href="#lineas-productos" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver catálogo' : 'View catalog'}
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

        {/* Navegación - Breadcrumb */}
        <section className="py-3 sm:py-4 lg:py-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs lg:text-sm text-gray-600 overflow-x-auto">
              <Link to="/services" className="hover:text-corporate-red transition-colors whitespace-nowrap flex-shrink-0">
                {language === 'es' ? 'Servicios' : 'Services'}
              </Link>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/services/ingenieria-materiales" className="hover:text-corporate-red transition-colors whitespace-nowrap flex-shrink-0">
                {language === 'es' ? 'Materiales' : 'Materials'}
              </Link>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-corporate-red font-medium whitespace-nowrap flex-shrink-0">{language === 'es' ? 'Falk CT' : 'Falk CT'}</span>
            </nav>
          </div>
        </section>

        {/* Caja de engranajes de la serie Falk CT - Layout con imagen a la derecha */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Layout de 2 columnas: Texto izquierda + Imagen derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              
              {/* Columna Izquierda - Contenido */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center bg-corporate-red/10 backdrop-blur-sm border border-corporate-red/20 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-6">
                  <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
                  <span className="text-corporate-red text-xs sm:text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? '100+ Años de Experiencia' : '100+ Years of Experience'}
                  </span>
                </div>
                
                {/* Título */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? (
                    <>
                      Caja de engranajes para torres de enfriamiento{' '}
                      <span className="text-corporate-red">de la serie Falk CT</span>
                    </>
                  ) : (
                    <>
                      Gearbox for cooling towers{' '}
                      <span className="text-corporate-red">Falk CT Series</span>
                    </>
                  )}
                </h2>
                
                {/* Descripción */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Con más de 100 años de experiencia confiable en engranajes, la resistencia y valor superiores de la marca Falk se extiende hasta la creciente cartera de productos y servicios de torres de enfriamiento de Rexnord. Las transmisiones por engranaje Falk CT-Series, ofrecidas por los mismos fabricantes de acoplamientos compuestos Addax, están específicamente diseñadas para los rigores duros de las aplicaciones de sistemas de torres de enfriamiento y transmisiones verticales.'
                    : 'With over 100 years of reliable gear experience, Falk brand\'s superior strength and value extends to Rexnord\'s growing cooling tower product and service portfolio. Falk CT-Series gear drives, offered by the same manufacturers of Addax composite couplings, are specifically designed for the harsh rigors of cooling tower systems and vertical drive applications.'}
                </p>

                {/* Estadísticas en 2x2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-corporate-red mb-1">100+</div>
                    <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Años de experiencia' : 'Years of experience'}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-corporate-red mb-1">SF 2.0</div>
                    <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Factor de servicio' : 'Service factor'}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-corporate-red mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Operación continua' : 'Continuous operation'}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-corporate-red mb-1">100K+</div>
                    <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Horas vida útil' : 'Hours service life'}</div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha - Imagen */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
                  <img 
                    src="https://es.rexnord.com/Rexnord/media/Gear/Right%20Angle%20Gear%20Drives/CT-Series/rightFalkCT-hotspots.jpg?lang=es-mx&ext=.jpg"
                    alt={language === 'es' ? 'Caja de engranajes Falk CT-Series para torres de enfriamiento' : 'Falk CT-Series gearbox for cooling towers'}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Badge sobre la imagen */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-corporate-red text-white px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-xs font-semibold">FALK CT-SERIES</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Sección de Beneficios - Versión Compacta */}
            <div className="mb-10">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? '¿Qué puede hacer la caja de engranajes de la serie CT para su aplicación?' : 'What can the CT Series gearbox do for your application?'}
                </h3>
                <p className="text-sm sm:text-base text-corporate-red font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Beneficios de usar las transmisiones por engranaje de la serie CT'
                    : 'Benefits of using CT Series gear drives'}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* Operación confiable - Compacta */}
                <div className="group relative bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-corporate-red/30">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-corporate-red rounded-l-xl"></div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-corporate-red to-red-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Operación confiable' : 'Reliable operation'}
                      </h4>
                      <div className="w-10 sm:w-12 h-0.5 bg-corporate-red rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-base text-gray-600 leading-relaxed pl-13 sm:pl-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Todas las unidades se prueban para detectar fugas y ruido/vibración excesiva antes de enviarse, proporcionando un desempeño óptimo desde el primer día.'
                      : 'All units are tested for leaks and excessive noise/vibration before shipment, providing optimal performance from day one.'}
                  </p>
                </div>

                {/* Vida útil prolongada - Compacta */}
                <div className="group relative bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-corporate-red/30">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-corporate-red rounded-l-xl"></div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-corporate-red to-red-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Vida útil prolongada del sistema' : 'Extended system life'}
                      </h4>
                      <div className="w-10 sm:w-12 h-0.5 bg-corporate-red rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-base text-gray-600 leading-relaxed pl-13 sm:pl-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Los engranajes cónicos en espiral y helicoidales diseñados para una operación de baja vibración reducen la tensión general en componentes críticos del sistema, prolongando la vida útil operativa del sistema de la torre de enfriamiento.'
                      : 'Spiral bevel and helical gears designed for low vibration operation reduce overall stress on critical system components, extending the operating life of the cooling tower system.'}
                  </p>
                </div>

                {/* Apoyo inigualable - Compacta */}
                <div className="group relative bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-corporate-red/30">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-corporate-red rounded-l-xl"></div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-corporate-red to-red-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Apoyo inigualable' : 'Unmatched support'}
                      </h4>
                      <div className="w-10 sm:w-12 h-0.5 bg-corporate-red rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-base text-gray-600 leading-relaxed pl-13 sm:pl-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Falk mantiene la huella más grande de cualquier fabricante de engranajes en EE.UU. y proporciona una red global extensa que ofrece mantenimiento y reparaciones en el sitio, así como reconstrucciones y soluciones de almacenamiento.'
                      : 'Falk maintains the largest footprint of any gear manufacturer in the U.S. and provides an extensive global network offering on-site maintenance and repairs, as well as rebuilds and storage solutions.'}
                  </p>
                </div>

                {/* Soluciones en paquetes - Compacta */}
                <div className="group relative bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-corporate-red/30">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-corporate-red rounded-l-xl"></div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-corporate-red to-red-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Soluciones en paquetes' : 'Package solutions'}
                      </h4>
                      <div className="w-10 sm:w-12 h-0.5 bg-corporate-red rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-base text-gray-600 leading-relaxed pl-13 sm:pl-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Con una amplia oferta de productos y servicios para torres de enfriamiento, incluidos los acoplamientos compuestos Addax y los servicios industriales Rexnord (RIS), Rexnord proporciona una solución total para la transmisión de potencia en torres de enfriamiento.'
                      : 'With a wide range of cooling tower products and services, including Addax composite couplings and Rexnord Industrial Services (RIS), Rexnord provides a total solution for cooling tower power transmission.'}
                  </p>
                </div>

              </div>
            </div>

            {/* CTA Premium - Nueva transmisión Falk CTA */}
            <div className="relative overflow-hidden bg-gradient-to-br from-corporate-red via-red-800 to-red-900 rounded-3xl p-8 sm:p-10 lg:p-14 text-center shadow-2xl">
              {/* Decoración de fondo */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-5 py-2.5 mb-6">
                  <div className="w-2.5 h-2.5 bg-white rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white text-sm font-bold tracking-widest uppercase">NUEVA GENERACIÓN</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'La NUEVA transmisión por engranaje de ángulo recto Falk CTA' : 'The NEW Falk CTA right angle gear drive'}
                </h3>
                
                <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {language === 'es' 
                    ? 'Fácil reemplazo de cajas de engranajes de OEM alternativas para aplicaciones de transmisiones verticales y de enfriamiento'
                    : 'Easy replacement of alternative OEM gearboxes for vertical drive and cooling applications'}
                </p>
                
                <a 
                  href="#scroll-content" 
                  className="inline-flex items-center gap-3 bg-white text-corporate-red px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <span>{language === 'es' ? 'Explorar detalles técnicos' : 'Explore technical details'}</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* REPRESENTACIÓN AUTORIZADA FALK */}
        <section id="scroll-content" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Representación Autorizada – SERVIN' : 'Authorized Representation – SERVIN'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Reductores ' : 'Falk '}
                <span className="font-semibold text-corporate-red">{language === 'es' ? 'Falk CT-Series' : 'CT-Series Reducers'}</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Como canal autorizado Falk / Rexnord, ofrecemos la línea completa de reductores CT-Series, reconocidos mundialmente por su robustez, confiabilidad y bajo requerimiento de mantenimiento en aplicaciones de torre de enfriamiento.'
                  : 'As an authorized Falk / Rexnord channel, we offer the complete line of CT-Series reducers, globally recognized for their robustness, reliability and low maintenance requirements in cooling tower applications.'}
              </p>
            </div>

            {/* Main Content - Two Column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
              {/* Left Column */}
              <div>
                <div className="space-y-5 sm:space-y-8">
                  {/* Intro block */}
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">{language === 'es' ? 'Diseño y Confiabilidad' : 'Design and Reliability'}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {language === 'es'
                        ? 'Los CT-Series están diseñados específicamente para:'
                        : 'The CT-Series are specifically designed for:'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{language === 'es' ? 'Transmisión vertical' : 'Vertical transmission'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{language === 'es' ? 'Operación continua 24/7' : 'Continuous 24/7 operation'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700">{language === 'es' ? 'Ambientes húmedos, corrosivos y de alta exigencia mecánica' : 'Humid, corrosive and high mechanical demand environments'}</span>
                      </li>
                    </ul>
                  </div>

                  {/* First Block */}
                  <div>
                    <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{language === 'es' ? 'Diseño Específico' : 'Specific Design'}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {language === 'es'
                        ? 'Diseñados específicamente para transmisión vertical en torres de enfriamiento, con factor de servicio 2.0 y vida útil superior a 100.000 horas de operación continua.'
                        : 'Specifically designed for vertical transmission in cooling towers, with service factor 2.0 and service life exceeding 100,000 hours of continuous operation.'}
                    </p>
                  </div>

                  {/* Second Block */}
                  <div>
                    <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{language === 'es' ? 'Cumplimiento Normativo' : 'Standards Compliance'}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {language === 'es'
                        ? 'Conformes a normas AGMA para engranajes industriales y certificación CTI (Cooling Technology Institute) para aplicaciones en torres de enfriamiento.'
                        : 'Compliant with AGMA standards for industrial gears and CTI (Cooling Technology Institute) certification for cooling tower applications.'}
                    </p>
                  </div>

                  {/* Services Block */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">{language === 'es' ? 'Provisión Oficial' : 'Official Supply'}</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700">{language === 'es' ? 'Equipos originales Falk' : 'Original Falk equipment'}</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700">{language === 'es' ? 'Trazabilidad completa' : 'Full traceability'}</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700">{language === 'es' ? 'Repuestos oficiales' : 'Official spare parts'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Image & Specs */}
              <div className="flex flex-col gap-5 sm:gap-8">
                {/* Image */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://es.rexnord.com/Rexnord/media/Gear/Right%20Angle%20Gear%20Drives/CT-Series/rightFalkCT-hotspots.jpg?lang=es-mx&ext=.jpg"
                    alt="Reductores Falk CT-Series"
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                </div>

                {/* Technical Specs */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-4">{language === 'es' ? 'Rangos de Operación' : 'Operating Ranges'}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Potencia' : 'Power'}</span>
                      <span className="text-sm sm:text-base font-semibold text-corporate-red">25-400 HP</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Relaciones' : 'Ratios'}</span>
                      <span className="text-sm sm:text-base font-semibold text-corporate-red">8:1 - 16:1</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-xs sm:text-sm text-gray-600">Service Factor</span>
                      <span className="text-sm sm:text-base font-semibold text-corporate-red">2.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Vida útil' : 'Service life'}</span>
                      <span className="text-sm sm:text-base font-semibold text-corporate-red">≥100.000 hs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características Técnicas */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diseño de Ingeniería' : 'Engineering Design'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Características Técnicas' : 'Technical'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Principales' : 'Features'}</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Diseño específico para transmisión vertical con configuración eje vertical / ángulo recto, cumpliendo normas AGMA y CTI.'
                  : 'Specific design for vertical transmission with vertical shaft / right angle configuration, complying with AGMA and CTI standards.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              
              {/* Características Clave - Solo 4 bullets principales */}
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Operación y Confiabilidad' : 'Operation & Reliability'}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {(language === 'es' ? [
                    "Factor de servicio estándar SF 2.0",
                    "Vida útil ≥ 100.000 horas",
                    "Baja vibración y alta estabilidad mecánica",
                    "Operación continua en ambientes severos"
                  ] : [
                    "Standard service factor SF 2.0",
                    "Service life ≥ 100,000 hours",
                    "Low vibration and high mechanical stability",
                    "Continuous operation in severe environments"
                  ]).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2.5 sm:space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#8B0000'}}>
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen técnica */}
              <div>
                <div className="relative pb-6 pr-6 sm:pb-0 sm:pr-0">
                  <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://spxcooling.com/wp-content/uploads/Marley-Double-Reduction-Geareducer.jpg"
                      alt="Reductor Falk CT-Series para transmisión vertical en torres de enfriamiento"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-gray-900/20"></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'}}>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Especificaciones Técnicas */}
        <section id="especificaciones" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Rangos de Operación' : 'Operating Ranges'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Rangos Técnicos' : 'Technical'} <span className="font-semibold text-corporate-red">Falk CT-Series</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Las especificaciones pueden variar según modelo y configuración. Nuestro equipo técnico asesora en cada caso.'
                  : 'Specifications may vary by model and configuration. Our technical team advises on each case.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              
              {/* Tabla de Especificaciones */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="px-6 sm:px-8 py-4 sm:py-6" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'}}>
                  <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Rangos de Operación' : 'Operating Ranges'}
                  </h3>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Potencia:' : 'Power:'}</span>
                      <span className="font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>25 HP - 400 HP</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Relaciones:' : 'Ratios:'}</span>
                      <span className="font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>8:1 a 16:1</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Service Factor:</span>
                      <span className="font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? '2.0 estándar' : '2.0 standard'}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Configuración:' : 'Configuration:'}</span>
                      <span className="font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? 'Eje vertical / ángulo recto' : 'Vertical shaft / right angle'}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Vida útil:' : 'Service life:'}</span>
                      <span className="font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? '≥ 100.000 horas' : '≥ 100,000 hours'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Normas y Certificaciones */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="px-6 sm:px-8 py-4 sm:py-6" style={{background: 'linear-gradient(135deg, #2e2c3a 0%, #1e1c2a 100%)'}}>
                  <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Normas y Certificaciones' : 'Standards & Certifications'}
                  </h3>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>AGMA</h4>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed ml-5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Cumplimiento con normas AGMA para diseño de engranajes industriales' : 'Compliance with AGMA standards for industrial gear design'}
                      </p>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>CTI</h4>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed ml-5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Certificación Cooling Tower Institute para aplicaciones específicas' : 'Cooling Tower Institute certification for specific applications'}
                      </p>
                    </div>

                    <div className="group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>ISO 12944-5 C5-M</h4>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed ml-5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Pintura grado marino para ambientes corrosivos severos' : 'Marine grade coating for severe corrosive environments'}
                      </p>
                    </div>

                    <div className="group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '100+ Años Falk' : '100+ Years Falk'}</h4>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed ml-5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Más de un siglo de experiencia en transmisión industrial' : 'Over a century of experience in industrial transmission'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sistema de Lubricación */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Sistema de Lubricación' : 'Lubrication System'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Lubricación por Salpique' : 'Splash'} <span className="font-semibold text-corporate-red">Oil Slinger</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Sistema de lubricación Oil Slinger sin bomba. Menor mantenimiento, mayor confiabilidad y distribución uniforme del lubricante en todas las condiciones operativas.'
                  : 'Pumpless Oil Slinger lubrication system. Lower maintenance, higher reliability and uniform lubricant distribution in all operating conditions.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border" style={{borderColor: 'rgba(139, 0, 0, 0.1)'}}>
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#8B0000'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Sistema Oil Slinger (sin bomba)' : 'Oil Slinger System (pumpless)'}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {language === 'es' ? 'Menor Mantenimiento' : 'Lower Maintenance'}
                        </h4>
                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {language === 'es' 
                            ? 'Sin componentes de bombeo que requieran mantenimiento o reemplazo, reduciendo significativamente los costos operativos.'
                            : 'No pumping components requiring maintenance or replacement, significantly reducing operating costs.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {language === 'es' ? 'Alta Confiabilidad Operativa' : 'High Operational Reliability'}
                        </h4>
                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {language === 'es' 
                            ? 'Sistema de lubricación por salpique controlado que garantiza distribución uniforme del lubricante en todas las condiciones operativas.'
                            : 'Controlled splash lubrication system ensuring uniform lubricant distribution in all operating conditions.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {language === 'es' ? 'Ideal para Operación Continua 24/7' : 'Ideal for 24/7 Continuous Operation'}
                        </h4>
                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {language === 'es' 
                            ? 'Diseñado específicamente para torres de enfriamiento que requieren operación continua sin interrupciones.'
                            : 'Specifically designed for cooling towers requiring continuous uninterrupted operation.'}
                        </p>
                      </div>
                    </div>

                  </div>
                  
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative pb-6 pr-6 sm:pb-0 sm:pr-0">
                  <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://houstonpumpandgear.com/wp-content/uploads/2025/06/IMG_2193-1.jpg"
                      alt="Sistema de lubricación Oil Slinger en reductor industrial"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-gray-900/30"></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'}}>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Solución Integral para Torres de Enfriamiento */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Paquete Completo' : 'Complete Package'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Solución Integral de' : 'Integral'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Transmisión' : 'Transmission Solution'}</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'SERVIN ofrece una solución completa para torres de enfriamiento: reductores, acoplamientos y frenos integrados.'
                  : 'SERVIN offers a complete solution for cooling towers: gearboxes, couplings and integrated brakes.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              
              {/* Falk CT-Series Gearbox */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-5 sm:p-6 lg:p-8 text-center sm:col-span-2 lg:col-span-1" style={{'--hover-border': 'rgba(139, 0, 0, 0.3)'}}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Reductores Falk CT-Series' : 'Falk CT-Series Gearboxes'}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diseño específico para torres' : 'Specific design for towers'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>25 – 400 HP · SF 2.0</span>
                  </div>
                </div>
              </div>

              {/* Addax Composite Couplings */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-5 sm:p-6 lg:p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform" style={{backgroundColor: '#2e2c3a'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Acoplamientos Addax (Fibra de Carbono)' : 'Addax Couplings (Carbon Fiber)'}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Hasta 1/5 del peso del acero inoxidable' : 'Up to 1/5 the weight of stainless steel'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Total resistencia a corrosión' : 'Total corrosion resistance'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Mantenimiento mínimo' : 'Minimum maintenance'}</span>
                  </div>
                </div>
              </div>

              {/* Addax Cooling Tower Brake */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-5 sm:p-6 lg:p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Addax Cooling Tower Brake
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Seguridad durante mantenimiento' : 'Safety during maintenance'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Bloqueo de ventiladores sin riesgo' : 'Risk-free fan locking'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Accionamiento remoto' : 'Remote actuation'}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-12">
              <Link 
                to="/services/acoplamiento/composite-disc"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)' }}
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {language === 'es' ? 'Ver Acoplamientos Addax' : 'View Addax Couplings'}
              </Link>
            </div>
          </div>
        </section>

        {/* Ingeniería de Aplicación SERVIN - Bloque clave */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería SERVIN' : 'SERVIN Engineering'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Ingeniería de' : 'Application'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Aplicación' : 'Engineering'}</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'No solo proveemos equipos. Aseguramos que el reductor seleccionado funcione correctamente durante toda su vida útil.'
                  : 'We don\'t just supply equipment. We ensure the selected reducer operates correctly throughout its entire service life.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-5 sm:p-6">
                <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Análisis de Potencia' : 'Power Analysis'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === 'es'
                    ? 'Verificación de potencia real requerida según carga del ventilador y condiciones operativas.'
                    : 'Verification of actual required power based on fan load and operating conditions.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-5 sm:p-6">
                <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Verificación de Cargas' : 'Load Verification'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === 'es'
                    ? 'Análisis de cargas axiales y radiales para garantizar vida útil del reductor.'
                    : 'Analysis of axial and radial loads to ensure reducer service life.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-5 sm:p-6">
                <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Selección de Relación' : 'Ratio Selection'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === 'es'
                    ? 'Selección de relación óptima según velocidad del ventilador y régimen del motor.'
                    : 'Optimal ratio selection based on fan speed and motor regime.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-5 sm:p-6">
                <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Compatibilidad Sistema' : 'System Compatibility'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === 'es'
                    ? 'Verificación de compatibilidad mecánica entre ventilador, reductor, acoplamiento y motor.'
                    : 'Mechanical compatibility verification between fan, reducer, coupling and motor.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-5 sm:p-6">
                <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Recomendaciones Montaje' : 'Mounting Recommendations'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === 'es'
                    ? 'Especificaciones de montaje, alineación y fijación según configuración de torre.'
                    : 'Mounting, alignment and fixing specifications according to tower configuration.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-5 sm:p-6">
                <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Lubricación' : 'Lubrication'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === 'es'
                    ? 'Especificación de lubricante, volumen y frecuencia según condiciones de operación.'
                    : 'Lubricant specification, volume and frequency according to operating conditions.'}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Servicios Asociados */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Servicios Asociados' : 'Associated Services'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Servicios' : 'Associated'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Complementarios' : 'Services'}</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Soporte integral desde la selección hasta el mantenimiento en servicio'
                  : 'Comprehensive support from selection to in-service maintenance'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              {[
                { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", titleEs: "Selección técnica y provisión", titleEn: "Technical selection & supply" },
                { icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", titleEs: "Asistencia en puesta en marcha", titleEn: "Commissioning assistance" },
                { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", titleEs: "Diagnóstico e inspección", titleEn: "Diagnosis & inspection" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", titleEs: "Reemplazo de reductores", titleEn: "Gearbox replacement" },
                { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", titleEs: "Soporte post-venta y repuestos", titleEn: "After-sales support & parts" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-corporate-red/30 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-corporate-red rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentación y Normativas */}
        <section id="documentacion" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-corporate-red mb-3 sm:mb-4 block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Documentación Oficial' : 'Official Documentation'}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Normativas y' : 'Standards &'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Estándares' : 'Documentation'}</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Cumplimiento de normativas internacionales y trazabilidad completa de provisión.'
                  : 'Compliance with international standards and complete supply traceability.'}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              
              <div className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-3 sm:p-5 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 mb-1 sm:mb-2 transition-colors leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Cumplimiento AGMA' : 'AGMA Compliance'}</h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed hidden sm:block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diseño conforme a estándares AGMA para transmisiones industriales' : 'Design compliant with AGMA standards for industrial transmissions'}</p>
              </div>

              <div className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-3 sm:p-5 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 mb-1 sm:mb-2 transition-colors leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diseño CTI' : 'CTI Design'}</h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed hidden sm:block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Conforme a CTI (Cooling Technology Institute) para torres de enfriamiento' : 'Compliant with CTI (Cooling Technology Institute) for cooling towers'}</p>
              </div>

              <div className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-3 sm:p-5 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 mb-1 sm:mb-2 transition-colors leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Especificaciones Rexnord' : 'Rexnord Specifications'}</h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed hidden sm:block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Especificaciones técnicas oficiales Rexnord Falk para torres de enfriamiento' : 'Official Rexnord Falk technical specifications for cooling towers'}</p>
              </div>

              <div className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-3 sm:p-5 lg:p-6 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Manuales y Fichas' : 'Manuals & Datasheets'}</h3>
                <p className="text-gray-600 text-xs sm:text-xs sm:text-sm leading-relaxed hidden sm:block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Manuales de instalación, operación y fichas técnicas oficiales' : 'Official installation, operation manuals and technical datasheets'}</p>
              </div>

            </div>

           
          </div>
        </section>

        {/* CTA Final */}
        {/* CTA Final */}
        <section className="py-10 sm:py-14 lg:py-20" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                <span className="text-white/90 text-[10px] sm:text-xs lg:text-sm font-medium tracking-wide uppercase">{language === 'es' ? 'Ingeniería de Aplicación' : 'Application Engineering'}</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight">
                {language === 'es' 
                  ? <>¿Necesita seleccionar o reemplazar <span className="block font-bold mt-1 sm:mt-2">un reductor de torre de enfriamiento?</span></>
                  : <>Need to select or replace <span className="block font-bold mt-1 sm:mt-2">a cooling tower gearbox?</span></>}
              </h2>
              
              <p className="text-xs sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                {language === 'es' 
                  ? 'Nuestro equipo técnico puede asistirlo en la selección, provisión y soporte de reductores Falk CT-Series para su aplicación específica.'
                  : 'Our technical team can assist you in the selection, supply and support of Falk CT-Series reducers for your specific application.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link 
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-white text-xs sm:text-sm lg:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  style={{ color: '#8B0000' }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'es' ? 'Cotización Técnica' : 'Technical Quote'}
                </Link>
                
                <Link 
                  to="/services/ingenieria-materiales"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm lg:text-base font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  {language === 'es' ? 'Materiales' : 'Materials'}
                </Link>
              </div>
              
              <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-base mb-0.5">SF 2.0</div>
                  <div className="text-white/70 text-[9px] sm:text-[10px] lg:text-xs leading-tight">{language === 'es' ? 'Servicio' : 'Service Factor'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-base mb-0.5">{language === 'es' ? 'AGMA/CTI' : 'AGMA/CTI'}</div>
                  <div className="text-white/70 text-[9px] sm:text-[10px] lg:text-xs leading-tight">{language === 'es' ? 'Certificado' : 'Certified'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-base mb-0.5">100K+</div>
                  <div className="text-white/70 text-[9px] sm:text-[10px] lg:text-xs leading-tight">{language === 'es' ? 'hs vida útil' : 'hrs life'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default FalkCTSeries;