import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Maintenance = () => {
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
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Industrial Background" className="w-full h-full object-cover" style={{filter: 'grayscale(30%) contrast(1.1)'}} />
        </div>

        <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'}}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          
          {/* Etiqueta superior */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'TALLER CERTIFICADO OPDS' : 'OPDS CERTIFIED WORKSHOP'}</span>
            </div>
          </div>

          {/* Títulos */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 200, letterSpacing: '0.01em', lineHeight: '0.9'}}>{language === 'es' ? 'TALLER' : 'WORKSHOP'}</h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-corporate-red mr-4"></div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, rgb(255, 0, 0) 0%, rgb(255, 51, 51) 50%, rgb(255, 102, 102) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '0.9'}}>
                {language === 'es' ? 'MANTENIMIENTO' : 'MAINTENANCE'}
              </h2>

              <div className="h-px w-16 bg-gradient-to-r from-corporate-red to-transparent ml-4"></div>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300, letterSpacing: '0.01em'}}>
            {language === 'es' ? 'Taller certificado OPDS con banco Ventil, servicios integrales de reparación, calibración, postventa y documentación técnica completa.' : 'OPDS certified workshop with Ventil test bench, comprehensive repair, calibration, after-sales services and complete technical documentation.'}
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

      {/* Separador sutil */}
      <div className="relative h-px">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Descripción Principal */}
      <section id="scroll-content" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <span className="font-semibold text-corporate-red">{language === 'es' ? 'Expertise Técnico' : 'Technical Expertise'}</span> {language === 'es' ? 'Certificado' : 'Certified'}
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{language === 'es' ? <>Nuestro taller cuenta con <strong>certificación OPDS</strong> y equipamiento especializado, incluyendo banco de pruebas Ventil para garantizar la máxima precisión en cada calibración.</> : <>Our workshop has <strong>OPDS certification</strong> and specialized equipment, including Ventil test bench to guarantee maximum precision in every calibration.</>}</p>
                <p>{language === 'es' ? <>Desarrollamos servicios integrales que abarcan desde el diagnóstico inicial hasta la documentación técnica final, asegurando <strong>trazabilidad completa</strong> en cada proceso.</> : <>We develop comprehensive services ranging from initial diagnosis to final technical documentation, ensuring <strong>complete traceability</strong> in every process.</>}</p>
                <p>{language === 'es' ? 'Nuestro equipo técnico especializado maneja válvulas de seguridad, alivio y control de todas las marcas y aplicaciones industriales.' : 'Our specialized technical team handles safety, relief and control valves from all brands and industrial applications.'}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-2">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Precisión en calibraciones' : 'Calibration accuracy'}</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-2">24h</div>
                <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Tiempo promedio de servicio' : 'Average service time'}</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Trazabilidad documentada' : 'Documented traceability'}</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">{language === 'es' ? 'Años de experiencia' : 'Years of experience'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador sutil */}
      <div className="relative h-px">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Grid de Servicios Internos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Servicios' : 'Services'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Especializados' : 'Specialized'}</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'es' ? 'Acceda a nuestros servicios técnicos organizados por especialidad' : 'Access our technical services organized by specialty'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Taller de Reparación y Calibración */}
            <div 
              className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => setActiveSection('taller')}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-corporate-red/10 to-corporate-red/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Taller de Reparación y Calibración' : 'Repair and Calibration Workshop'}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es' ? 'Servicios completos de taller con banco Ventil certificado, reparación integral, calibración de precisión y documentación técnica trazable.' : 'Complete workshop services with certified Ventil test bench, comprehensive repair, precision calibration and traceable technical documentation.'}
                </p>
              </div>
              
              <div className="flex items-center text-corporate-red font-medium">
                <span>{language === 'es' ? 'Ver detalles' : 'View details'}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Informe de Calibración Online */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Informes de Calibración Online' : 'Online Calibration Reports'}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'es' ? 'Acceda a sus certificados de calibración digitales, consulte historiales técnicos y descargue reportes con trazabilidad completa.' : 'Access your digital calibration certificates, consult technical histories and download reports with complete traceability.'}
                </p>
              </div>
              
              <Link
                to="/login-informes"
                className="btn-primary w-full"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Acceder al Portal' : 'Access Portal'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderTallerContent = () => (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <button 
              onClick={() => setActiveSection('main')}
              className="hover:text-corporate-red transition-colors"
            >
              {language === 'es' ? 'Mantenimiento y Calibración' : 'Maintenance and Calibration'}
            </button>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-corporate-red font-medium">{language === 'es' ? 'Taller de Reparación y Calibración' : 'Repair and Calibration Workshop'}</span>
          </div>
        </div>
      </div>

      {/* Contenido del Taller */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Taller de' : 'Repair and'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Reparación y Calibración' : 'Calibration Workshop'}</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
              {language === 'es' ? 'Instalaciones certificadas OPDS equipadas con banco de pruebas Ventil de última generación, garantizando precisión y trazabilidad en cada proceso de calibración y reparación.' : 'OPDS certified facilities equipped with state-of-the-art Ventil test bench, guaranteeing precision and traceability in every calibration and repair process.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Servicios Principales */}
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6">{language === 'es' ? 'Servicios Técnicos' : 'Technical Services'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">{language === 'es' ? 'Calibración de Válvulas' : 'Valve Calibration'}</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                    <li>• {language === 'es' ? 'Válvulas de seguridad' : 'Safety valves'}</li>
                    <li>• {language === 'es' ? 'Válvulas de alivio' : 'Relief valves'}</li>
                    <li>• {language === 'es' ? 'Válvulas de control' : 'Control valves'}</li>
                    <li>• {language === 'es' ? 'Certificación con trazabilidad' : 'Certification with traceability'}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">{language === 'es' ? 'Reparación Integral' : 'Comprehensive Repair'}</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                    <li>• {language === 'es' ? 'Diagnóstico completo' : 'Complete diagnosis'}</li>
                    <li>• {language === 'es' ? 'Recambio de componentes' : 'Component replacement'}</li>
                    <li>• {language === 'es' ? 'Ajuste y puesta a punto' : 'Adjustment and tuning'}</li>
                    <li>• {language === 'es' ? 'Pruebas finales' : 'Final testing'}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">{language === 'es' ? 'Servicios Postventa' : 'After-Sales Services'}</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                    <li>• {language === 'es' ? 'Asesoramiento técnico' : 'Technical advice'}</li>
                    <li>• {language === 'es' ? 'Repuestos originales' : 'Original spare parts'}</li>
                    <li>• {language === 'es' ? 'Soporte de instalación' : 'Installation support'}</li>
                    <li>• {language === 'es' ? 'Mantenimiento programado' : 'Scheduled maintenance'}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">{language === 'es' ? 'Documentación' : 'Documentation'}</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                    <li>• {language === 'es' ? 'Certificados de calibración' : 'Calibration certificates'}</li>
                    <li>• {language === 'es' ? 'Informes técnicos detallados' : 'Detailed technical reports'}</li>
                    <li>• {language === 'es' ? 'Historiales de servicio' : 'Service histories'}</li>
                    <li>• {language === 'es' ? 'Trazabilidad completa' : 'Complete traceability'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Equipamiento */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6">{language === 'es' ? 'Equipamiento' : 'Equipment'}</h3>
              <div className="bg-gradient-to-br from-corporate-red/5 to-corporate-red/10 p-6 rounded-xl">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-corporate-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{language === 'es' ? 'Banco Ventil' : 'Ventil Test Bench'}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    {language === 'es' ? 'Equipamiento de precisión para calibración certificada con trazabilidad completa.' : 'Precision equipment for certified calibration with complete traceability.'}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{language === 'es' ? 'Certificación OPDS' : 'OPDS Certification'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{language === 'es' ? 'Precisión ±1%' : 'Accuracy ±1%'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{language === 'es' ? 'Trazabilidad INTI' : 'INTI Traceability'}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{language === 'es' ? 'Rango 0.1-300 bar' : 'Range 0.1-300 bar'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volver */}
          <div className="text-center">
            <button
              onClick={() => setActiveSection('main')}
              className="btn-secondary"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? '← Volver a Servicios' : '← Back to Services'}
            </button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen">
      {activeSection === 'main' && renderMainContent()}
      {activeSection === 'taller' && renderTallerContent()}
    </div>
  );
};

export default Maintenance;
