import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import VimeoPlayer from '../../components/VimeoPlayer';
import { useModalA11y } from '../../hooks/useModalA11y';

const PlantaMantenimiento = () => {
  const { language } = useLanguage();
  const [openModalId, setOpenModalId] = useState(null);
  const modalRef = useRef(null);

  const closeModal = () => setOpenModalId(null);
  const openModal = (id) => setOpenModalId(id);
  const isAnyModalOpen = openModalId !== null;

  useModalA11y({ isOpen: isAnyModalOpen, modalRef, onClose: closeModal });
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/plantamantenimiento/1.png" 
            alt={language === 'es' ? 'Planta de Mantenimiento Industrial SERVIN' : 'SERVIN Industrial Maintenance Plant'} 
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {language === 'es' ? (
              <>
                PLANTA DE{' '}
                <span className="text-corporate-red">MANTENIMIENTO</span>
              </>
            ) : (
              <>
                <span className="text-corporate-red">MAINTENANCE</span>{' '}
                PLANT
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Planta de más de 700 m² cubiertos en Bahía Blanca, especializada en reparación y calibración de válvulas industriales. Un servicio integral que permite minimizar tiempos y maximizar calidad de trabajo.'
              : 'Over 700 m² covered facility in Bahía Blanca, specialized in industrial valve repair and calibration. A comprehensive service that minimizes downtime and maximizes work quality.'}
          </p>

          
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
          {/* Ensayos en Planta - EVIDENCIA TÉCNICA */}
      <section id="ensayos-planta" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Texto descriptivo - Columna izquierda */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-gray-700 text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Ensayos en Planta' : 'In-Plant Testing'}
                </span>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'SERVIN INGENIERÍA S.A. cuenta con una planta de mantenimiento industrial situada en la ciudad de Bahía Blanca, especializada en la reparación de válvulas especiales y Calibración de válvulas de seguridad.'
                  : 'SERVIN INGENIERÍA S.A. has an industrial maintenance plant located in the city of Bahía Blanca, specialized in the repair of special valves and calibration of safety valves.'}
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'La planta de más de 700m² cubiertos se encuentra equipada con tornos, soldadoras GMAW, GTAW, SMAW, equipos de granallado, lapidadoras automáticas, bancos de pruebas computarizados, etc. permitiendo llevar a cabo la totalidad de los procesos de intervención en nuestras instalaciones.'
                  : 'The plant of more than 700m² covered is equipped with lathes, GMAW, GTAW, SMAW welding machines, shot blasting equipment, automatic lapping machines, computerized test benches, etc. allowing to carry out all the intervention processes in our facilities.'}
              </p>
              
              <div className="bg-corporate-red/5 border-l-4 border-corporate-red px-6 py-4 rounded-r-lg">
                <p className="text-sm sm:text-base text-gray-900 font-medium italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? '"Un servicio integral que permite minimizar tiempos y maximizar calidad de trabajo"'
                    : '"A comprehensive service that minimizes time and maximizes work quality"'}
                </p>
              </div>
            </div>

            {/* Imágenes - Columna derecha */}
            <div className="order-1 lg:order-2 space-y-3">
              {/* Imagen principal grande */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="/plantamantenimiento/banco.png"
                  alt={language === 'es' ? 'Planta de mantenimiento industrial - Vista general' : 'Industrial maintenance plant - General view'}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
              
              {/* Grid de imágenes pequeñas */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img 
                    src="/plantamantenimiento/1.png"
                    alt={language === 'es' ? 'Banco de ensayos - Detalle' : 'Test bench - Detail'}
                    className="w-full h-32 sm:h-36 object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img 
                    src="/plantamantenimiento/2.png"
                    alt={language === 'es' ? 'Equipos de control y medición' : 'Control and measurement equipment'}
                    className="w-full h-32 sm:h-36 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Servicios Especializados */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
              <span className="text-corporate-red text-[10px] sm:text-xs font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Capacidades Técnicas' : 'Technical Capabilities'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              {language === 'es' ? 'Servicios' : 'Specialized'} <span className="text-corporate-red">{language === 'es' ? 'Especializados' : 'Services'}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es'
                ? 'Recuperación, calibración y certificación de válvulas industriales críticas'
                : 'Recovery, calibration and certification of critical industrial valves'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Válvulas de Seguridad */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg hover:border-corporate-red/30 transition-all duration-500">
              <div className="absolute top-2 right-2 flex gap-1">
                <span className="px-1.5 py-0.5 bg-corporate-red/10 text-corporate-red text-[8px] font-bold rounded-full">API</span>
                <span className="px-1.5 py-0.5 bg-corporate-red/10 text-corporate-red text-[8px] font-bold rounded-full">ASME</span>
              </div>
              
              <div className="w-8 h-8 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-4 h-4 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Válvulas de Seguridad y Alivio' : 'Safety and Relief Valves'}
              </h3>
              
              <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                {language === 'es' 
                  ? 'Calibración, reparación y ensayo de válvulas de seguridad y alivio conforme a procedimientos alineados a API 526/527 y criterios ASME Sección VIII.'
                  : 'Calibration, repair and testing of safety and relief valves per procedures aligned with API 526/527 and ASME Section VIII criteria.'}
              </p>
            </div>

            {/* Válvulas de Control */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg hover:border-corporate-red/30 transition-all duration-500">
              <div className="w-8 h-8 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-4 h-4 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Válvulas de Control' : 'Control Valves'}
              </h3>
              
              <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                {language === 'es' 
                  ? 'Mantenimiento preventivo y correctivo de válvulas de control automáticas, incluidos actuadores neumáticos e hidráulicos.'
                  : 'Preventive and corrective maintenance of automatic control valves, including pneumatic and hydraulic actuators.'}
              </p>
            </div>

            {/* Válvulas de Proceso */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg hover:border-corporate-red/30 transition-all duration-500">
              <div className="absolute top-2 right-2">
                <span className="px-1.5 py-0.5 bg-corporate-red/10 text-corporate-red text-[8px] font-bold rounded-full">API 6D</span>
              </div>
              
              <div className="w-8 h-8 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-4 h-4 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Válvulas de Proceso' : 'Process Valves'}
              </h3>
              
              <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                {language === 'es' 
                  ? 'Reparación y prueba hidráulica de válvulas de compuerta, globo, bola y mariposa según API 6D y estándares de fabricante.'
                  : 'Repair and hydrostatic testing of gate, globe, ball and butterfly valves per API 6D and manufacturer standards.'}
              </p>
            </div>

            {/* Actuadores */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg hover:border-corporate-red/30 transition-all duration-500">
              <div className="w-8 h-8 bg-corporate-red/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-4 h-4 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Actuadores y Accesorios' : 'Actuators and Accessories'}
              </h3>
              
              <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                {language === 'es' 
                  ? 'Reparación completa de actuadores neumáticos e hidráulicos, posicionadores y sistemas de control asociados.'
                  : 'Complete repair of pneumatic and hydraulic actuators, positioners and associated control systems.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Información Técnica - Grid Compacto con Modales */}
      <section id="especificaciones" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 shadow-sm">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Información Técnica' : 'Technical Information'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3 sm:mb-4 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Planta' : 'Maintenance'}</span> {language === 'es' ? 'de Mantenimiento' : 'Plant'}
            </h2>
          </div>

          {/* Grid de 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1: Infraestructura */}
            <button
              onClick={() => openModal('infra')}
              className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-corporate-red/30 hover:shadow-xl transition-all text-left"
            >
              <div className="w-12 h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Infraestructura' : 'Infrastructure'}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Especificaciones técnicas y equipamiento' : 'Technical specifications and equipment'}
              </p>
              <div className="flex items-center text-corporate-red text-sm font-medium">
                <span>{language === 'es' ? 'Ver detalles' : 'View details'}</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Card 2: Capacidades */}
            <button
              onClick={() => openModal('capacidades')}
              className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-corporate-red/30 hover:shadow-xl transition-all text-left"
            >
              <div className="w-12 h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Capacidades' : 'Capabilities'}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? '8 servicios técnicos especializados' : '8 specialized technical services'}
              </p>
              <div className="flex items-center text-corporate-red text-sm font-medium">
                <span>{language === 'es' ? 'Ver detalles' : 'View details'}</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Card 3: Equipamiento */}
            <button
              onClick={() => openModal('equipment')}
              className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-corporate-red/30 hover:shadow-xl transition-all text-left"
            >
              <div className="w-12 h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Equipamiento' : 'Equipment'}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Maquinaria de precisión certificada' : 'Certified precision machinery'}
              </p>
              <div className="space-y-1 mb-4">
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-corporate-red rounded-full"></span>
                  {language === 'es' ? 'Torno paralelo' : 'Parallel lathe'}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-corporate-red rounded-full"></span>
                  {language === 'es' ? 'Lapeadora 20"' : '20" lapping machine'}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-corporate-red rounded-full"></span>
                  {language === 'es' ? 'Banco VENTIL' : 'VENTIL bench'}
                </div>
              </div>
              <div className="flex items-center text-corporate-red text-sm font-medium">
                <span>{language === 'es' ? 'Ver detalles' : 'View details'}</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Card 4: Proceso */}
            <button
              onClick={() => openModal('process')}
              className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-corporate-red/30 hover:shadow-xl transition-all text-left"
            >
              <div className="w-12 h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Proceso' : 'Process'}
              </h3>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Metodología técnica documentada en 4-8 etapas' : 'Documented technical methodology in 4-8 stages'}
              </p>
              <div className="flex gap-2 mb-4">
                {['01', '02', '03', '04'].map((num) => (
                  <div key={num} className="flex-1 text-center py-1 bg-gray-50 rounded text-xs font-bold text-corporate-red">
                    {num}
                  </div>
                ))}
              </div>
              <div className="flex items-center text-corporate-red text-sm font-medium">
                <span>{language === 'es' ? 'Ver detalles' : 'View details'}</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

          </div>

          {/* Ubicación - reducida */}
          <div className="mt-8 bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-corporate-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Bahía Blanca, Buenos Aires, Argentina</span>
          </div>
        </div>
      </section>

  

  

      {/* Documentación Técnica */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-8 sm:p-10 lg:p-14 shadow-2xl border border-white/5">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-2">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white/90 text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Documentación' : 'Documentation'}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                  {language === 'es' ? 'Trazabilidad y Certificaciones' : 'Traceability and Certifications'}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es' 
                    ? 'Cada trabajo incluye documentación técnica integral con trazabilidad completa y certificación conforme a normas aplicables.'
                    : 'Each job includes comprehensive technical documentation with complete traceability and certification per applicable standards.'}
                </p>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(language === 'es' ? [
                  { icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z', text: 'Informe dimensional' },
                  { icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z', text: 'Registro fotográfico completo' },
                  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', text: 'Certificados de prueba' },
                  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', text: 'Trazabilidad de materiales' },
                  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', text: 'Informe técnico final' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Certificación técnica conforme a normas y procedimientos aplicables' }
                ] : [
                  { icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z', text: 'Dimensional report' },
                  { icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z', text: 'Complete photo record' },
                  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', text: 'Test certificates' },
                  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', text: 'Material traceability' },
                  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', text: 'Final technical report' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Standards certification' }
                ]).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-5 h-5 text-corporate-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="text-sm text-white/90 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes de Referencia */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-white shadow-sm border border-gray-200 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Confianza Industrial' : 'Industrial Trust'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-bold text-corporate-red">{language === 'es' ? 'Experiencia' : 'Proven'}</span> {language === 'es' ? 'Comprobada' : 'Experience'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' 
                ? 'Trayectoria respaldada por plantas industriales líderes del país'
                : 'Track record backed by the country\'s leading industrial plants'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {[
              { name: 'Profertil', sector: language === 'es' ? 'Petroquímica' : 'Petrochemical' },
              { name: 'Unipar', sector: language === 'es' ? 'Industria Química' : 'Chemical Industry' },
              { name: 'Axion', sector: language === 'es' ? 'Refinería' : 'Refinery' },
              { name: 'Centrales Térmicas', sector: language === 'es' ? 'Energía' : 'Energy' }
            ].map((cliente, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-corporate-red/30 transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-3xl sm:text-4xl font-bold text-corporate-red mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {cliente.name.split(' ')[0]}
                  </div>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {cliente.sector}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-corporate-red mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm sm:text-base text-gray-700 font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Más de 46 años de trayectoria al servicio de la industria argentina'
                  : 'Over 46 years serving Argentine industry'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{background: 'linear-gradient(135deg, #E00000 0%, #C80000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Evaluación Técnica' : 'Technical Evaluation'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>¿Necesita evaluar válvulas industriales críticas <span className="block font-bold mt-2">en planta certificada?</span></>
                : <>Need to evaluate critical industrial valves <span className="block font-bold mt-2">in a certified plant?</span></>}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Solicite una evaluación técnica sin compromiso.'
                : 'Request a no-obligation technical evaluation.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
              <Link 
                to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Solicitar evaluación técnica: válvulas industriales en planta certificada' : 'Request technical evaluation: critical industrial valves (certified plant)')}#formulario`}
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#E00000' }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'es' ? 'Solicitar Evaluación Técnica' : 'Request Technical Evaluation'}
              </Link>
              
              <Link 
                to="/services"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Ver Todos los Servicios' : 'View All Services'}
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>700+ m²</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Taller especializado' : 'Specialized workshop'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>VENTIL</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Banco certificado' : 'Certified bench'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Trazabilidad' : 'Traceability'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Documental completa' : 'Complete documentation'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal: Infraestructura y Especificaciones */}
      {openModalId === 'infra' && (
        <div
          className="fixed inset-0 z-[50000] flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>

          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="planta-infra-modal-title"
            tabIndex={-1}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 flex-none bg-white">
              <h3
                id="planta-infra-modal-title"
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Especificaciones Técnicas' : 'Technical Specifications'}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-3 sm:p-4 overflow-y-auto flex-1">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-2.5 sm:p-3 border border-gray-200 hover:border-corporate-red/30 transition-all hover:shadow-md">
                  <div className="flex items-start justify-between mb-0.5">
                    <div className="text-corporate-red text-lg sm:text-xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>700+</div>
                    <svg className="w-3.5 h-3.5 text-corporate-red/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-gray-600 text-[10px] sm:text-xs font-medium">{language === 'es' ? 'Área cubierta de planta' : 'Covered plant area'}</div>
                  <div className="text-gray-500 text-[9px] mt-0.5">m² {language === 'es' ? 'cubiertos' : 'covered'}</div>
                </div>

                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-2.5 sm:p-3 border border-gray-200 hover:border-corporate-red/30 transition-all hover:shadow-md">
                  <div className="flex items-start justify-between mb-0.5">
                    <div className="text-corporate-red text-lg sm:text-xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>1/2"–24"</div>
                    <svg className="w-3.5 h-3.5 text-corporate-red/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 text-[10px] sm:text-xs font-medium">{language === 'es' ? 'Rango de diámetros' : 'Diameter range'}</div>
                  <div className="text-gray-500 text-[9px] mt-0.5">{language === 'es' ? 'Válvulas industriales' : 'Industrial valves'}</div>
                </div>

                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-2.5 sm:p-3 border border-gray-200 hover:border-corporate-red/30 transition-all hover:shadow-md">
                  <div className="flex items-start justify-between mb-0.5">
                    <div className="text-corporate-red text-lg sm:text-xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>650</div>
                    <svg className="w-4 h-4 text-corporate-red/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 text-[10px] sm:text-xs font-medium">{language === 'es' ? 'Presión hidráulica' : 'Hydraulic pressure'}</div>
                  <div className="text-gray-500 text-[9px] mt-0.5">kg/cm²</div>
                </div>

                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-2.5 sm:p-3 border border-gray-200 hover:border-corporate-red/30 transition-all hover:shadow-md">
                  <div className="flex items-start justify-between mb-0.5">
                    <div className="text-corporate-red text-lg sm:text-xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>200</div>
                    <svg className="w-4 h-4 text-corporate-red/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 text-[10px] sm:text-xs font-medium">{language === 'es' ? 'Presión neumática' : 'Pneumatic pressure'}</div>
                  <div className="text-gray-500 text-[9px] mt-0.5">kg/cm²</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-corporate-red/5 to-transparent border-l-2 border-corporate-red rounded-r-lg p-2 mb-2">
                <div className="text-[10px] sm:text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {language === 'es' ? 'Certificaciones y normativas' : 'Certifications and standards'}
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-white text-corporate-red text-[10px] font-semibold rounded border border-corporate-red/20 shadow-sm">API 598</span>
                  <span className="px-2 py-0.5 bg-white text-corporate-red text-[10px] font-semibold rounded border border-corporate-red/20 shadow-sm">API 6D</span>
                  <span className="px-2 py-0.5 bg-white text-corporate-red text-[10px] font-semibold rounded border border-corporate-red/20 shadow-sm">ASME B16.34</span>
                  <span className="px-2 py-0.5 bg-white text-corporate-red text-[10px] font-semibold rounded border border-corporate-red/20 shadow-sm">OPDS</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                <svg className="w-3.5 h-3.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Bahía Blanca, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Capacidades Técnicas */}
      {openModalId === 'capacidades' && (
        <div
          className="fixed inset-0 z-[50000] flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>

          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="planta-capacidades-modal-title"
            tabIndex={-1}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 flex-none bg-white">
              <h3
                id="planta-capacidades-modal-title"
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Capacidades Técnicas' : 'Technical Capabilities'}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-3 sm:p-4 overflow-y-auto flex-1">
              <div className="space-y-1.5">
                {(language === 'es' ? [
                  { title: 'Recuperación Integral', desc: 'Válvulas industriales de todo tipo y tamaño, desde 1/2" hasta 24"', badge: 'API 598', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
                  { title: 'Ensayos Hidráulicos', desc: 'Banco VENTIL certificado con registro digital hasta 650 kg/cm²', badge: '650 kg/cm²', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                  { title: 'Ensayos Neumáticos', desc: 'Presión de aire hasta 200 kg/cm² con documentación completa', badge: '200 kg/cm²', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                  { title: 'Calibración', desc: 'Válvulas de seguridad y alivio según normas API y ASME', badge: 'API / ASME', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
                  { title: 'Válvulas de Control', desc: 'Mantenimiento especializado y reparación de actuadores', badge: 'Actuadores', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                  { title: 'Lapeo de Asientos', desc: 'Lapeadora automática 20" y platos manuales de precisión', badge: '20"', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
                  { title: 'Mecanizado', desc: 'Torno paralelo industrial para recuperación dimensional', badge: 'CNC', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
                  { title: 'Alta Presión', desc: 'Booster y sistemas certificados hasta 650 kg/cm² hidráulico', badge: 'Certificado', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
                ] : [
                  { title: 'Full Recovery', desc: 'Industrial valves of all types and sizes, from 1/2" to 24"', badge: 'API 598', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
                  { title: 'Hydraulic Testing', desc: 'Certified VENTIL bench with digital recording up to 650 kg/cm²', badge: '650 kg/cm²', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                  { title: 'Pneumatic Testing', desc: 'Air pressure up to 200 kg/cm² with complete documentation', badge: '200 kg/cm²', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                  { title: 'Calibration', desc: 'Safety and relief valves according to API and ASME standards', badge: 'API / ASME', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
                  { title: 'Control Valves', desc: 'Specialized maintenance and actuator repair', badge: 'Actuators', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                  { title: 'Seat Lapping', desc: '20" automatic lapping machine and precision manual plates', badge: '20"', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
                  { title: 'Machining', desc: 'Industrial parallel lathe for dimensional recovery', badge: 'CNC', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
                  { title: 'High Pressure', desc: 'Booster and certified systems up to 650 kg/cm² hydraulic', badge: 'Certified', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
                ]).map((item, index) => (
                  <div key={index} className="group flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg border border-gray-200 hover:border-corporate-red/30 hover:shadow-md transition-all">
                    <div className="w-7 h-7 bg-corporate-red/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-corporate-red/20 transition-colors">
                      <svg className="w-3.5 h-3.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1.5 mb-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.title}</h4>
                        <span className="px-1.5 py-0.5 bg-corporate-red/10 text-corporate-red text-[9px] font-semibold rounded flex-shrink-0">{item.badge}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Equipamiento */}
      {openModalId === 'equipment' && (
        <div
          className="fixed inset-0 z-[50000] flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>

          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="planta-equipment-modal-title"
            tabIndex={-1}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 flex-none bg-white">
              <h3
                id="planta-equipment-modal-title"
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Equipamiento Industrial' : 'Industrial Equipment'}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-3 sm:p-4 overflow-y-auto flex-1">
              <div className="space-y-1.5">
                {(language === 'es' ? [
                  { title: 'Bancos de Prueba VENTIL', desc: 'Computarizados con plataformas, mordazas hasta 16" y contador láser', badge: 'VENTIL', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
                  { title: 'Tornos Paralelos', desc: 'Mecanizado de precisión para recuperación dimensional', badge: 'Mecanizado', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                  { title: 'Torno Vertical', desc: 'Mecanizado vertical para componentes especiales', badge: 'Vertical', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                  { title: 'Lapidadora Neumática 24"', desc: 'Para trabajos In Situ, capacidad hasta 24 pulgadas', badge: '24"', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
                  { title: 'Soldadoras Lincoln', desc: 'GMAW, GTAW y SMAW para diversos procesos de soldadura', badge: 'Lincoln', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { title: 'Cabinas de Granallado', desc: 'Limpieza y preparación de superficies metálicas', badge: 'Granallado', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                  { title: 'Prensas Hidráulicas 200TN', desc: 'Capacidad 200 toneladas para trabajos pesados', badge: '200 TN', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                  { title: 'Cabina de Lapidado', desc: 'Equipada con lapidadoras automáticas de 24 pulgadas', badge: 'Lapidado', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
                  { title: 'Puente Grúa 5TN', desc: 'Capacidad de elevación 5 toneladas', badge: '5 TN', icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
                  { title: 'Equipos de Corte Plasma', desc: 'Corte de precisión en diversos materiales', badge: 'Plasma', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { title: 'Agujereadoras de Columna', desc: 'Perforación precisa para componentes industriales', badge: 'Perforación', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' }
                ] : [
                  { title: 'VENTIL Test Benches', desc: 'Computerized with platforms, jaws up to 16" and laser counter', badge: 'VENTIL', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
                  { title: 'Parallel Lathes', desc: 'Precision machining for dimensional recovery', badge: 'Machining', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                  { title: 'Vertical Lathe', desc: 'Vertical machining for special components', badge: 'Vertical', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                  { title: 'Pneumatic Lapping Machine 24"', desc: 'For on-site work, capacity up to 24 inches', badge: '24"', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
                  { title: 'Lincoln Welders', desc: 'GMAW, GTAW and SMAW for various welding processes', badge: 'Lincoln', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { title: 'Shot Blasting Booths', desc: 'Cleaning and preparation of metal surfaces', badge: 'Blasting', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                  { title: 'Hydraulic Presses 200TN', desc: '200 ton capacity for heavy-duty work', badge: '200 TN', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                  { title: 'Lapping Booth', desc: 'Equipped with 24-inch automatic lapping machines', badge: 'Lapping', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
                  { title: 'Overhead Crane 5TN', desc: '5 ton lifting capacity', badge: '5 TN', icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
                  { title: 'Plasma Cutting Equipment', desc: 'Precision cutting in various materials', badge: 'Plasma', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { title: 'Column Drilling Machines', desc: 'Precise drilling for industrial components', badge: 'Drilling', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' }
                ]).map((item, index) => (
                  <div key={index} className="group flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg border border-gray-200 hover:border-corporate-red/30 hover:shadow-md transition-all">
                    <div className="w-7 h-7 bg-corporate-red/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-corporate-red/20 transition-colors">
                      <svg className="w-3.5 h-3.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1.5 mb-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.title}</h4>
                        <span className="px-1.5 py-0.5 bg-corporate-red/10 text-corporate-red text-[9px] font-semibold rounded flex-shrink-0">{item.badge}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Proceso */}
      {openModalId === 'process' && (
        <div
          className="fixed inset-0 z-[50000] flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>

          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="planta-process-modal-title"
            tabIndex={-1}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 flex-none bg-white">
              <h3
                id="planta-process-modal-title"
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Proceso de Mantenimiento' : 'Maintenance Process'}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-3 sm:p-4 overflow-y-auto flex-1">
              <div className="space-y-1.5">
                {(language === 'es' ? [
                  { num: '01', title: 'Diagnóstico e inspección dimensional completa', desc: 'Evaluación inicial del estado de la válvula', category: 'Inicial' },
                  { num: '02', title: 'Limpieza por granallado o ultrasonido', desc: 'Preparación de superficies para inspección', category: 'Limpieza' },
                  { num: '03', title: 'Mecanizado de asientos y superficies críticas', desc: 'Rectificado de precisión CNC', category: 'Mecanizado' },
                  { num: '04', title: 'Reconstrucción mediante soldadura certificada', desc: 'Procedimientos calificados WPS/PQR', category: 'Soldadura' },
                  { num: '05', title: 'Armado con torques especificados', desc: 'Secuencia controlada según fabricante', category: 'Armado' },
                  { num: '06', title: 'Pruebas hidráulicas, neumáticas o de calibración', desc: 'Ensayos según API 598 / API 6D', category: 'Ensayo' },
                  { num: '07', title: 'Registro fotográfico documental', desc: 'Trazabilidad visual completa', category: 'Documentación' },
                  { num: '08', title: 'Informe técnico y certificación final', desc: 'Documentación para auditoría', category: 'Final' }
                ] : [
                  { num: '01', title: 'Diagnosis and complete dimensional inspection', desc: 'Initial valve condition assessment', category: 'Initial' },
                  { num: '02', title: 'Shot blasting or ultrasonic cleaning', desc: 'Surface preparation for inspection', category: 'Cleaning' },
                  { num: '03', title: 'Machining of seats and critical surfaces', desc: 'CNC precision grinding', category: 'Machining' },
                  { num: '04', title: 'Reconstruction through certified welding', desc: 'Qualified WPS/PQR procedures', category: 'Welding' },
                  { num: '05', title: 'Assembly with specified torques', desc: 'Controlled sequence per manufacturer', category: 'Assembly' },
                  { num: '06', title: 'Hydraulic, pneumatic or calibration tests', desc: 'Testing per API 598 / API 6D', category: 'Testing' },
                  { num: '07', title: 'Documentary photographic record', desc: 'Complete visual traceability', category: 'Documentation' },
                  { num: '08', title: 'Technical report and final certification', desc: 'Audit-ready documentation', category: 'Final' }
                ]).map((step, index) => (
                  <div key={index} className="group flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg border border-gray-200 hover:border-corporate-red/30 hover:shadow-md transition-all">
                    <div className="w-8 h-8 bg-gradient-to-br from-corporate-red to-corporate-red/80 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white text-xs font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.num}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1.5 mb-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.title}</h4>
                        <span className="px-1.5 py-0.5 bg-gray-200 text-gray-700 text-[9px] font-semibold rounded flex-shrink-0">{step.category}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-2 sm:mt-3 bg-gradient-to-r from-corporate-red/5 to-transparent border-l-2 border-corporate-red rounded-r-lg p-2">
                <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Cada etapa está documentada con trazabilidad completa y emisión de certificaciones técnicas conforme a normativas API, criterios ASME y OPDS.'
                    : 'Each stage is documented with complete traceability and issuance of technical certifications compliant with API standards, ASME criteria and OPDS regulations.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PlantaMantenimiento;
