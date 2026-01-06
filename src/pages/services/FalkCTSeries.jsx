import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const FalkCTSeries = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: '100px 100px'}}></div>

          <div className="absolute inset-0 z-0 opacity-[0.35]">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" alt="Reductores Falk CT-Series para Torres de Enfriamiento" className="w-full h-full object-cover" style={{filter: 'grayscale(30%) contrast(1.1)'}} />
          </div>

          <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'}}></div>

          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
            
            <div className="mb-6 sm:mb-8 animate-fade-in-up">
              <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-3" style={{backgroundColor: 'rgb(139, 0, 0)'}}></div>
                <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Torres de Enfriamiento Industrial' : 'Industrial Cooling Towers'}</span>
              </div>
            </div>

            <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '200', letterSpacing: '0.01em', lineHeight: '1.1'}}>
                {language === 'es' ? 'REDUCTORES' : 'GEAR REDUCERS'}
              </h1>
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-2 sm:mr-4" style={{background: 'linear-gradient(to right, transparent, rgb(139, 0, 0))'}}></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-bold" style={{
                  fontFamily: 'Inter, system-ui, sans-serif', 
                  fontWeight: '800', 
                  background: 'linear-gradient(135deg, rgb(139, 0, 0) 0%, rgb(107, 0, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.1'
                }}>
                  FALK CT-SERIES
                </h2>
                <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-2 sm:ml-4" style={{background: 'linear-gradient(to right, rgb(139, 0, 0), transparent)'}}></div>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300', letterSpacing: '0.01em'}}>
              {language === 'es' 
                ? <span>Soluciones de transmisión para torres de enfriamiento con <strong className="text-white font-normal">ingeniería de aplicación</strong>, <strong className="text-white font-normal">provisión</strong> y <strong className="text-white font-normal">soporte técnico especializado</strong> de SERVIN Ingeniería.</span>
                : <span>Transmission solutions for cooling towers with <strong className="text-white font-normal">application engineering</strong>, <strong className="text-white font-normal">supply</strong> and <strong className="text-white font-normal">specialized technical support</strong> from SERVIN Ingeniería.</span>}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 animate-fade-in-up-delay-3 px-4">
              <Link 
                to="/contact" 
                className="btn-primary w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                {language === 'es' ? 'Asesoramiento Técnico' : 'Technical Consulting'}
              </Link>
            </div>
          </div>

        </section>

        {/* Navegación */}
        <section className="py-4 sm:py-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600">
              <Link to="/services" className="hover:text-corporate-red transition-colors">
                {language === 'es' ? 'Servicios' : 'Services'}
              </Link>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/services/ingenieria-materiales" className="hover:text-corporate-red transition-colors">
                {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
              </Link>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-corporate-red font-medium">{language === 'es' ? 'Reductores Falk CT-Series' : 'Falk CT-Series Gear Reducers'}</span>
            </div>
          </div>
        </section>

        {/* Aplicaciones Típicas */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6" style={{backgroundColor: 'rgba(139, 0, 0, 0.05)', borderColor: 'rgba(139, 0, 0, 0.2)'}}>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-2 sm:mr-3" style={{backgroundColor: '#8B0000'}}></div>
                <span className="text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? 'Aplicaciones' : 'Applications'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Aplicaciones típicas en <span className="font-semibold" style={{color: '#8B0000'}}>torres de enfriamiento</span></>
                  : <>Typical applications in <span className="font-semibold" style={{color: '#8B0000'}}>cooling towers</span></>}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", titleEs: "Torres de enfriamiento industriales", titleEn: "Industrial cooling towers" },
                { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", titleEs: "HVAC industrial", titleEn: "Industrial HVAC" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", titleEs: "Centrales térmicas", titleEn: "Thermal power plants" },
                { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z", titleEs: "Plantas de proceso", titleEn: "Process plants" },
                { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", titleEs: "Industria pesada", titleEn: "Heavy industry" }
              ].map((item, index) => (
                <div key={index} className="rounded-xl p-4 sm:p-5 border text-center transition-all hover:shadow-md" style={{backgroundColor: 'rgba(139, 0, 0, 0.02)', borderColor: 'rgba(139, 0, 0, 0.1)'}}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#8B0000'}}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Características Técnicas */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
                <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Características Técnicas' : 'Technical Features'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Diseño' : 'Specialized'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Especializado' : 'Design'}</span>
              </h2>
              <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Construidos con tecnología Falk de más de 100 años, cumpliendo normas AGMA y CTI para aplicaciones severas'
                  : 'Built with over 100 years of Falk technology, meeting AGMA and CTI standards for severe applications'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              
              {/* Características Clave - Solo 4 bullets principales */}
              <div>
                <h3 className="text-xl sm:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Características Clave' : 'Key Features'}
                </h3>
                <div className="space-y-4">
                  {(language === 'es' ? [
                    "Diseño específico para transmisión vertical",
                    "Operación continua en ambientes severos",
                    "Alta confiabilidad mecánica (vida útil ≥100.000 hs)",
                    "Integración con acoplamientos Addax"
                  ] : [
                    "Specific design for vertical transmission",
                    "Continuous operation in severe environments",
                    "High mechanical reliability (service life ≥100,000 hrs)",
                    "Integration with Addax couplings"
                  ]).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#8B0000'}}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
        <section id="especificaciones" className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6" style={{backgroundColor: 'rgba(139, 0, 0, 0.05)', borderColor: 'rgba(139, 0, 0, 0.2)'}}>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-2 sm:mr-3" style={{backgroundColor: '#8B0000'}}></div>
                <span className="text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? 'Rangos Técnicos' : 'Technical Ranges'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Especificaciones' : 'Specifications'} <span className="font-semibold" style={{color: '#8B0000'}}>Falk CT-Series</span>
              </h2>
              <p className="text-sm sm:text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed px-4 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Las especificaciones pueden variar según modelo y configuración. Nuestro equipo técnico lo asesora en la selección adecuada para cada aplicación.'
                  : 'Specifications may vary by model and configuration. Our technical team advises on the right selection for each application.'}
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6" style={{backgroundColor: 'rgba(139, 0, 0, 0.05)', borderColor: 'rgba(139, 0, 0, 0.2)'}}>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-2 sm:mr-3" style={{backgroundColor: '#8B0000'}}></div>
                <span className="text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? 'Sistema de Lubricación' : 'Lubrication System'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Lubricación' : 'Lubrication'} <span className="font-semibold" style={{color: '#8B0000'}}>Oil Slinger</span>
              </h2>
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
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6" style={{backgroundColor: 'rgba(139, 0, 0, 0.05)', borderColor: 'rgba(139, 0, 0, 0.2)'}}>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-2 sm:mr-3" style={{backgroundColor: '#8B0000'}}></div>
                <span className="text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? 'Solución Integral' : 'Integral Solution'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Solución Integral de' : 'Integral'} <span className="font-semibold" style={{color: '#8B0000'}}>{language === 'es' ? 'Transmisión' : 'Transmission Solution'}</span>
              </h2>
              <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Reductores, acoplamientos y frenos integrados para torres de enfriamiento.'
                  : 'Integrated gearboxes, couplings and brakes for cooling towers.'}
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
                  Falk CT-Series Gearbox
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Transmisión confiable' : 'Reliable transmission'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diseño específico para torres' : 'Specific design for towers'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>25-400 HP, SF 2.0</span>
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
                  Addax Composite Couplings
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '1/5 del peso del acero inoxidable' : '1/5 the weight of stainless steel'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Resistencia total a corrosión' : 'Total corrosion resistance'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Bajo mantenimiento' : 'Low maintenance'}</span>
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

        {/* Valor Agregado - Soporte Técnico SERVIN */}
        <section className="py-10 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
                <span className="text-corporate-red text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Valor Agregado' : 'Added Value'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-2 sm:mb-3 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Soporte Técnico' : 'Technical Support'} <span className="font-semibold text-corporate-red">SERVIN</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", titleEs: "Análisis de Aplicación", titleEn: "Application Analysis" },
                { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", titleEs: "Selección Técnica", titleEn: "Technical Selection" },
                { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", titleEs: "Provisión de Equipos", titleEn: "Equipment Supply" },
                { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z", titleEs: "Soporte Post-venta", titleEn: "After-sales Support" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-corporate-red rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-sm sm:text-base font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentación y Normativas */}
        <section id="documentacion" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6" style={{backgroundColor: 'rgba(139, 0, 0, 0.05)', borderColor: 'rgba(139, 0, 0, 0.2)'}}>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-2 sm:mr-3" style={{backgroundColor: '#8B0000'}}></div>
                <span className="text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}>{language === 'es' ? 'Documentación Técnica' : 'Technical Documentation'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Documentación y' : 'Documentation &'} <span className="font-semibold" style={{color: '#8B0000'}}>{language === 'es' ? 'Normativas' : 'Standards'}</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 sm:p-5 lg:p-6 text-center transform hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Cumplimiento AGMA' : 'AGMA Compliance'}</h3>
                <p className="text-gray-600 text-xs sm:text-xs sm:text-sm leading-relaxed hidden sm:block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diseño conforme a estándares AGMA para transmisiones industriales' : 'Design compliant with AGMA standards for industrial transmissions'}</p>
              </div>

              <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 sm:p-5 lg:p-6 text-center transform hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diseño CTI' : 'CTI Design'}</h3>
                <p className="text-gray-600 text-xs sm:text-xs sm:text-sm leading-relaxed hidden sm:block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Conforme a CTI (Cooling Technology Institute) para torres de enfriamiento' : 'Compliant with CTI (Cooling Technology Institute) for cooling towers'}</p>
              </div>

              <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 sm:p-5 lg:p-6 text-center transform hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Especificaciones Rexnord' : 'Rexnord Specifications'}</h3>
                <p className="text-gray-600 text-xs sm:text-xs sm:text-sm leading-relaxed hidden sm:block" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Especificaciones técnicas oficiales Rexnord Falk para torres de enfriamiento' : 'Official Rexnord Falk technical specifications for cooling towers'}</p>
              </div>

              <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 sm:p-5 lg:p-6 text-center transform hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform" style={{backgroundColor: '#8B0000'}}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-7xl mx-auto">
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería de Aplicación' : 'Application Engineering'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>¿Necesita una solución de transmisión confiable <span className="block font-bold mt-2">para su torre de enfriamiento?</span></>
                  : <>Need a reliable transmission solution <span className="block font-bold mt-2">for your cooling tower?</span></>}
              </h2>
              
              <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Nuestro equipo lo asesora en la selección, provisión y soporte técnico de reductores Falk CT-Series.'
                  : 'Our team advises you on selection, supply and technical support for Falk CT-Series gear reducers.'}
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
                  to="/services/ingenieria-materiales"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base sm:text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  {language === 'es' ? 'Ver Ingeniería de Materiales' : 'View Materials Engineering'}
                </Link>
              </div>
              
              <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                  <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                  <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia en transmisión' : 'Transmission experience'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                  <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>✓ Rexnord</div>
                  <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Representante oficial' : 'Official representative'}</div>
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

export default FalkCTSeries;