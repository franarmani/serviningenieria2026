import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const CalibrationInSitu = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderMainContent = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" alt="Industrial Background" className="w-full h-full object-cover" style={{filter: 'grayscale(30%) contrast(1.1)'}} />
        </div>

        <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'}}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          
          {/* Etiqueta superior */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'SISTEMA PREVENTEST' : 'PREVENTEST SYSTEM'}</span>
            </div>
          </div>

          {/* Títulos */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 200, letterSpacing: '0.01em', lineHeight: '0.9'}}>{language === 'es' ? 'MANTENIMIENTOS' : 'MAINTENANCE'}</h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-corporate-red mr-4"></div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, rgb(255, 0, 0) 0%, rgb(255, 51, 51) 50%, rgb(255, 102, 102) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '0.9'}}>
                IN-SITU
              </h2>

              <div className="h-px w-16 bg-gradient-to-r from-corporate-red to-transparent ml-4"></div>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300, letterSpacing: '0.01em'}}>
            {language === 'es' ? 'Sistema holandés de calibración sin desmontaje, con trazabilidad completa y certificaciones internacionales para máxima eficiencia operativa.' : 'Dutch calibration system without disassembly, with complete traceability and international certifications for maximum operational efficiency.'}
          </p>

          {/* Botones */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 animate-fade-in-up-delay-3">
            <Link className="btn-primary" to="/contact" style={{width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Solicitar Servicio' : 'Request Service'}</Link>

            <a href="#scroll-content" className="btn-secondary" style={{width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Ver Sistema' : 'View System'}</a>
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

      {/* Grid de Servicios Internos */}
      <section id="scroll-content" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Sistema' : 'System'} <span className="font-semibold text-corporate-red">Preventest</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'es' ? 'Tecnología avanzada para calibración sin desmontaje ni paro de planta' : 'Advanced technology for calibration without disassembly or plant shutdown'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-corporate-red/10 to-corporate-red/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Sistema Preventest' : 'Preventest System'}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' ? 'Tecnología holandesa para determinar presión de SET sin desmontaje, certificado ASME y aprobación ATEX.' : 'Dutch technology to determine SET pressure without disassembly, ASME certified and ATEX approved.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Ensayo de Válvulas en Línea' : 'In-Line Valve Testing'}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' ? 'Ensayos bajo condiciones de servicio, sin paro de planta, maximizando rentabilidad operativa.' : 'Testing under service conditions, without plant shutdown, maximizing operational profitability.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Registros y Reportes Digitales' : 'Digital Records and Reports'}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' ? 'Documentación digital completa con trazabilidad internacional y certificaciones ASME.' : 'Complete digital documentation with international traceability and ASME certifications.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen">
      {renderMainContent()}
    </div>
  );
};

export default CalibrationInSitu;