import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import velanData from '../../data/velanValvulas.json';

const ValvulaDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const valvula = velanData.valvulas?.find(v => v.id === parseInt(id));
  const relacionados = velanData.valvulas?.filter(v => v.product_line === valvula?.product_line && v.id !== valvula?.id).slice(0, 3);

  if (!valvula) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 mb-4">{language === 'es' ? 'Producto' : 'Product'} <span className="font-semibold" style={{ color: '#8B0000' }}>{language === 'es' ? 'No Encontrado' : 'Not Found'}</span></h1>
          <Link to="/materiales/valvulas" className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-xl" style={{ backgroundColor: '#8B0000' }}>
            {language === 'es' ? 'Volver al Catálogo' : 'Back to Catalog'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: '100px 100px'}}></div>

          <div className="absolute inset-0 z-0 opacity-[0.08]">
            <img src={valvula.imagen} alt={valvula.nombre} className="w-full h-full object-cover" style={{filter: 'grayscale(100%) contrast(1.2)', mixBlendMode: 'overlay'}} />
          </div>

          <div className="absolute inset-0 z-10" style={{background: 'radial-gradient(rgba(139, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)'}}></div>
          
          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#8B0000'}}></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{valvula.product_line}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              <span className="font-light text-white">{valvula.nombre.split(' ').slice(0, -1).join(' ')} </span>
              <span className="font-bold" style={{ background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {valvula.nombre.split(' ').slice(-1)}
              </span>
            </h1>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="py-3 bg-gray-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center text-[10px] sm:text-xs text-gray-500">
              <Link to="/" className="hover:text-gray-900">{language === 'es' ? 'Inicio' : 'Home'}</Link>
              <span className="mx-2">/</span>
              <Link to="/materiales/valvulas" className="hover:text-gray-900">{language === 'es' ? 'Válvulas' : 'Valves'}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 truncate max-w-[150px]">{valvula.nombre}</span>
            </nav>
          </div>
        </section>

        {/* Producto Principal */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Columna Izquierda - Imagen + Relacionados */}
              <div>
                {/* Imagen Principal */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
                  <img 
                    src={valvula.imagen}
                    alt={valvula.nombre}
                    className="w-full h-auto object-contain max-h-[280px] sm:max-h-[400px] mx-auto"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=VELAN'; }}
                  />
                </div>

                {/* Productos Relacionados */}
                {relacionados && relacionados.length > 0 && (
                  <div className="hidden sm:block">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Productos Relacionados' : 'Related Products'}
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {relacionados.map((rel) => (
                        <Link 
                          key={rel.id}
                          to={`/materiales/valvulas/${rel.id}`}
                          className="group bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors"
                        >
                          <div className="aspect-square mb-2">
                            <img 
                              src={rel.imagen}
                              alt={rel.nombre}
                              className="w-full h-full object-contain"
                              onError={(e) => { e.target.src = 'https://via.placeholder.com/100x100?text=V'; }}
                            />
                          </div>
                          <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2 group-hover:text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {rel.nombre}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Columna Derecha - Info */}
              <div>
                {/* Nombre y Descripción */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] sm:text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'rgba(139, 0, 0, 0.1)', color: '#8B0000' }}>
                      {valvula.product_line}
                    </span>
                    {valvula.normas && valvula.normas.length > 0 && (
                      <span className="text-[10px] sm:text-[10px] sm:text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                        {valvula.normas[0]}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {valvula.nombre}
                  </h2>
                  <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {valvula.descripcion}
                  </p>
                </div>

                {/* Especificaciones Grid Compacto */}
                {valvula.especificaciones && Object.keys(valvula.especificaciones).length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Especificaciones' : 'Specifications'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {Object.entries(valvula.especificaciones).slice(0, 6).map(([key, value], index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {key}
                          </div>
                          <div className="text-[10px] sm:text-xs font-medium text-gray-900 line-clamp-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Normas */}
                {valvula.normas && valvula.normas.length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Normas y Certificaciones' : 'Standards & Certifications'}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {valvula.normas.map((norma, idx) => (
                        <span key={idx} className="text-[10px] sm:text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-700 rounded-lg font-medium">
                          {norma}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link 
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-white text-sm sm:text-sm sm:text-base font-semibold rounded-xl transition-all hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: '#8B0000', fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Características y Aplicaciones */}
        {((valvula.caracteristicas && valvula.caracteristicas.length > 0) || (valvula.aplicaciones && valvula.aplicaciones.length > 0)) && (
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Características */}
                {valvula.caracteristicas && valvula.caracteristicas.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center" style={{ backgroundColor: '#8B0000' }}>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-base sm:text-lg md:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Características Técnicas' : 'Technical Features'}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {valvula.caracteristicas.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 0, 0, 0.1)' }}>
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#8B0000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-xs sm:text-xs sm:text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Aplicaciones */}
                {valvula.aplicaciones && valvula.aplicaciones.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center bg-gray-900">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-base sm:text-lg md:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Industrias y Aplicaciones' : 'Industries & Applications'}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {valvula.aplicaciones.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 bg-gray-900"></div>
                          <span className="text-xs sm:text-xs sm:text-sm text-gray-700 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="py-12 sm:py-16 lg:py-20" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? '¿Necesita asesoramiento' : 'Need technical'} <span className="font-bold">{language === 'es' ? 'técnico?' : 'advice?'}</span>
            </h2>
            
            <p className="text-white/80 text-sm sm:text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Representantes oficiales de Velan con más de 30 años de experiencia en soluciones industriales.' : 'Official Velan representatives with over 30 years of experience in industrial solutions.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-sm sm:text-sm sm:text-base font-bold rounded-xl transition-all hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}
              >
                {language === 'es' ? 'Solicitar Asesoramiento' : 'Request Consultation'}
              </Link>
              <Link 
                to="/materiales/valvulas"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/30 text-white text-sm sm:text-sm sm:text-base font-semibold rounded-xl hover:bg-white/20 transition-all"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Ver Catálogo' : 'View Catalog'}
              </Link>
            </div>
          </div>
        </section>

      </div>
  );
};

export default ValvulaDetail;
