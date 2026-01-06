import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const AssemblyDisassembly = () => {
  const [activeSection, setActiveSection] = useState('main');
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderMainContent = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt={language === 'es' ? 'Fondo Industrial' : 'Industrial Background'} className="w-full h-full object-cover" style={{filter: 'grayscale(30%) contrast(1.1)'}} />
        </div>

        <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'}}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          
          {/* Etiqueta superior */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'SERVICIOS ESPECIALIZADOS' : 'SPECIALIZED SERVICES'}</span>
            </div>
          </div>

          {/* Títulos */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 200, letterSpacing: '0.01em', lineHeight: '0.9'}}>{language === 'es' ? 'MONTAJE Y' : 'ASSEMBLY &'}</h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-corporate-red mr-4"></div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, rgb(255, 0, 0) 0%, rgb(255, 51, 51) 50%, rgb(255, 102, 102) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '0.9'}}>
                {language === 'es' ? 'DESMONTAJE' : 'DISASSEMBLY'}
              </h2>

              <div className="h-px w-16 bg-gradient-to-r from-corporate-red to-transparent ml-4"></div>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300, letterSpacing: '0.01em'}}>
            {language === 'es' 
              ? 'Servicios especializados de desmontaje, montaje, reinstalación, ajuste y alineación de equipos industriales.'
              : 'Specialized services for disassembly, assembly, reinstallation, adjustment and alignment of industrial equipment.'}
          </p>

          {/* Botones */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 animate-fade-in-up-delay-3">
            <Link className="btn-primary" to="/contact" style={{width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Solicitar Servicio' : 'Request Service'}</Link>

            <a href="#scroll-content" className="btn-secondary" style={{width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Ver Servicios' : 'View Services'}</a>
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
              {language === 'es' ? 'Servicios de ' : 'Industrial '}<span className="font-semibold text-corporate-red">{language === 'es' ? 'Montaje Industrial' : 'Assembly Services'}</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Especialistas en montaje, desmontaje y puesta en marcha de equipos industriales'
                : 'Specialists in assembly, disassembly and commissioning of industrial equipment'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-corporate-red/10 to-corporate-red/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Desmontaje de Equipos' : 'Equipment Disassembly'}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'Desmontaje profesional de equipos industriales con documentación completa y preservación de componentes.'
                  : 'Professional disassembly of industrial equipment with complete documentation and component preservation.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Montaje y Reinstalación' : 'Assembly & Reinstallation'}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'Montaje especializado con técnicas avanzadas de posicionamiento y fijación según especificaciones técnicas.'
                  : 'Specialized assembly with advanced positioning and fastening techniques according to technical specifications.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Alineación y Puesta en Marcha' : 'Alignment & Commissioning'}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'Servicios de alineación de precisión y puesta en marcha con pruebas funcionales completas.'
                  : 'Precision alignment services and commissioning with complete functional testing.'}
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

export default AssemblyDisassembly;