import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const MobileLab = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderMainContent = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop"
            alt={language === 'es' ? 'Laboratorio Móvil' : 'Mobile Laboratory'}
            className="w-full h-full object-cover"
            style={{filter: 'grayscale(30%) contrast(1.1)'}}
          />
        </div>
        <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'}}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase">
                {language === 'es' ? 'División Técnica Especializada' : 'Specialized Technical Division'}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' ? 'LABORATORIO' : 'MOBILE'}
          </h1>
          <h2 className="text-4xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-bold mb-8" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #97050B 0%, #B8060D 50%, #D9070F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {language === 'es' ? 'MÓVIL' : 'LABORATORY'}
          </h2>
          
          <p className="text-lg lg:text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Laboratorio móvil totalmente equipado para servicios in situ con hidrogrúa 7TN y equipamiento de última generación.'
              : 'Fully equipped mobile laboratory for on-site services with 7TN hydraulic crane and state-of-the-art equipment.'}
          </p>
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
              {language === 'es' ? 'Laboratorio' : 'Mobile'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Móvil' : 'Laboratory'}</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Servicios técnicos especializados in situ con tecnología de vanguardia'
                : 'Specialized on-site technical services with cutting-edge technology'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-corporate-red/10 to-corporate-red/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-1M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
                {language === 'es' ? 'Equipamiento del Laboratorio' : 'Laboratory Equipment'}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'Laboratorio totalmente autónomo con banco VENTIL certificado, compresores de alta presión y booster de agua.'
                  : 'Fully autonomous laboratory with certified VENTIL bench, high-pressure compressors and water booster.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
                {language === 'es' ? 'Capacidades Técnicas' : 'Technical Capabilities'}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'Presiones desde -1500 mmH₂O hasta 650 kg/cm², diámetros 1/8" a 10" y fluidos especializados.'
                  : 'Pressures from -1500 mmH₂O to 650 kg/cm², diameters 1/8" to 10" and specialized fluids.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/60 hover:border-corporate-red/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
                {language === 'es' ? 'Servicios en Planta' : 'On-Site Services'}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'Movilidad con FORD 4000 4x4 e hidrogrúa 7TN para servicios in situ en condiciones exigentes.'
                  : 'Mobility with FORD 4000 4x4 and 7TN hydraulic crane for on-site services in demanding conditions.'}
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

export default MobileLab;