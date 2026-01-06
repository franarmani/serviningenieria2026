import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const LaboratorioMovil = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviciosLaboratorio = language === 'es' ? [
    {
      titulo: "Calibración In Situ",
      descripcion: "Calibración precisa de instrumentos y válvulas directamente en su planta, sin necesidad de desmontaje ni traslados.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Resortadas.png"
    },
    {
      titulo: "Diagnóstico de Campo",
      descripcion: "Evaluación completa del estado de válvulas de seguridad y control mediante equipos portátiles especializados.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Control.png"
    },
    {
      titulo: "Ajuste y Verificación",
      descripcion: "Ajuste de set points, verificación de estanqueidad y performance funcional según especificaciones técnicas.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Pilotadas.png"
    },
    {
      titulo: "Certificación Inmediata",
      descripcion: "Emisión de certificados de calibración con trazabilidad y registro documental completo en sitio.",
      imagen: "/ingenieriademateriales/valvulas/Pressure Seal (Forjadas y Fundidas).png"
    }
  ] : [
    {
      titulo: "On-Site Calibration",
      descripcion: "Precise calibration of instruments and valves directly at your plant, without disassembly or transfers.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Resortadas.png"
    },
    {
      titulo: "Field Diagnostics",
      descripcion: "Complete evaluation of safety and control valve status using specialized portable equipment.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Control.png"
    },
    {
      titulo: "Adjustment and Verification",
      descripcion: "Set point adjustment, tightness verification and functional performance according to technical specifications.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Pilotadas.png"
    },
    {
      titulo: "Immediate Certification",
      descripcion: "Issuance of calibration certificates with traceability and complete documentary record on site.",
      imagen: "/ingenieriademateriales/valvulas/Pressure Seal (Forjadas y Fundidas).png"
    }
  ];

  const capacidadesMovil = language === 'es' ? [
    "Equipo técnico especializado en campo",
    "Instrumentación portátil de alta precisión",
    "Bancos de prueba móviles certificados",
    "Calibración hasta 700 bar (10.000 PSI)",
    "Registro digital de mediciones",
    "Software de diagnóstico avanzado",
    "Certificación según normas API/ASME",
    "Disponibilidad 24/7 para emergencias"
  ] : [
    "Specialized field technical team",
    "High precision portable instrumentation",
    "Certified mobile test benches",
    "Calibration up to 700 bar (10,000 PSI)",
    "Digital measurement recording",
    "Advanced diagnostic software",
    "API/ASME standards certification",
    "24/7 availability for emergencies"
  ];

  const alcanceSeguridad = language === 'es' ? [
    "Verificación de presión de apertura",
    "Ajuste de set point sin desmontaje",
    "Pruebas de estanqueidad in situ",
    "Registro digital de parámetros",
    "Certificación según normas API/ASME"
  ] : [
    "Opening pressure verification",
    "Set point adjustment without disassembly",
    "On-site tightness tests",
    "Digital parameter recording",
    "Certification per API/ASME standards"
  ];

  const alcanceControl = language === 'es' ? [
    "Diagnóstico de posicionadores digitales",
    "Calibración de lazos de control",
    "Pruebas de carrera y respuesta",
    "Análisis de fricción y adherencia",
    "Configuración de parámetros HART/FF"
  ] : [
    "Digital positioner diagnostics",
    "Control loop calibration",
    "Stroke and response tests",
    "Friction and stiction analysis",
    "HART/FF parameter configuration"
  ];

  const ventajasServicio = language === 'es' ? [
    {
      titulo: "Reducción de Paradas",
      descripcion: "Minimiza el tiempo de inactividad al realizar servicios sin desmontar equipos de la línea de proceso."
    },
    {
      titulo: "Ahorro de Costos",
      descripcion: "Elimina costos de transporte, desmontaje y logística asociados al mantenimiento tradicional."
    },
    {
      titulo: "Intervención Rápida",
      descripcion: "Respuesta inmediata ante emergencias con equipo técnico listo para desplazarse a su planta."
    },
    {
      titulo: "Trazabilidad Total",
      descripcion: "Documentación completa y certificados emitidos inmediatamente después del servicio."
    }
  ] : [
    {
      titulo: "Reduced Downtime",
      descripcion: "Minimizes downtime by performing services without removing equipment from the process line."
    },
    {
      titulo: "Cost Savings",
      descripcion: "Eliminates transport, disassembly and logistics costs associated with traditional maintenance."
    },
    {
      titulo: "Quick Intervention",
      descripcion: "Immediate response to emergencies with technical team ready to travel to your plant."
    },
    {
      titulo: "Total Traceability",
      descripcion: "Complete documentation and certificates issued immediately after service."
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Mismo estilo que Services.jsx */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="/galeriahome/1.png"
            alt="Laboratorio Móvil Industrial"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(30%)' }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          {/* Corporate badge */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Servicios In Situ' : 'On-Site Services'}
              </span>
            </div>
          </div>
          
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '0.9'
            }}>
              {language === 'es' ? 'LABORATORIO' : 'MOBILE'}
            </h1>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-2 sm:mr-4"></div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '0.9'
              }}>
                {language === 'es' ? 'MÓVIL' : 'LABORATORY'}
              </h2>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-2 sm:ml-4"></div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? <>Calibración y diagnóstico de <strong className="text-white font-normal">válvulas de seguridad y control</strong> directamente en su planta con <strong className="text-white font-normal">equipamiento portátil certificado</strong> y trazabilidad completa.</>
              : <>Calibration and diagnostics of <strong className="text-white font-normal">safety and control valves</strong> directly at your plant with <strong className="text-white font-normal">certified portable equipment</strong> and complete traceability.</>}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-4">
            <Link 
              to="/contact" 
              className="btn-primary w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Solicitar Servicio' : 'Request Service'}
            </Link>
            
            <a 
              href="#capacidades" 
              className="btn-secondary w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Conocer Más' : 'Learn More'}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[10px] sm:text-xs font-medium mb-2 tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Deslizar' : 'Scroll'}
            </span>
            <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Capacidades Section - Fondo BLANCO */}
      <section id="capacidades" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-corporate-red text-[10px] sm:text-xs font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Equipamiento Portátil' : 'Portable Equipment'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              {language === 'es' 
                ? <>Capacidades del <span className="font-bold text-corporate-red">Laboratorio Móvil</span></>
                : <><span className="font-bold text-corporate-red">Mobile Laboratory</span> Capabilities</>}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm lg:text-sm sm:text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Equipamiento de última generación para servicios de calibración y diagnóstico en campo.'
                : 'State-of-the-art equipment for field calibration and diagnostic services.'}
            </p>
          </div>

          {/* Stats destacados */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { value: '700', unit: 'bar', label: language === 'es' ? 'Capacidad máxima' : 'Max capacity' },
              { value: '24/7', unit: '', label: language === 'es' ? 'Disponibilidad' : 'Availability' },
              { value: 'API', unit: 'ASME', label: language === 'es' ? 'Certificaciones' : 'Certifications' },
              { value: '100%', unit: '', label: language === 'es' ? 'Trazabilidad' : 'Traceability' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{stat.value}</span>
                  {stat.unit && <span className="text-xs sm:text-sm font-medium text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{stat.unit}</span>}
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Grid de capacidades - 2 columnas con imagen */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Capacidades lado izquierdo */}
            <div className="lg:col-span-2 space-y-3">
              {capacidadesMovil.slice(0, 4).map((capacidad, index) => (
                <div key={index} className="group flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-corporate-red/30 hover:bg-red-50/30 transition-all duration-300">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: '#8B0000' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-xs sm:text-sm leading-snug text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {capacidad}
                  </p>
                </div>
              ))}
            </div>

            {/* Imagen central */}
            <div className="lg:col-span-1 hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-px h-full absolute left-1/2 top-0 bg-gradient-to-b from-transparent via-corporate-red/30 to-transparent"></div>
                <div className="relative w-20 h-20 rounded-full bg-corporate-red flex items-center justify-center shadow-lg shadow-corporate-red/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Capacidades lado derecho */}
            <div className="lg:col-span-2 space-y-3">
              {capacidadesMovil.slice(4).map((capacidad, index) => (
                <div key={index + 4} className="group flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-corporate-red/30 hover:bg-red-50/30 transition-all duration-300">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: '#8B0000' }}
                  >
                    {String(index + 5).padStart(2, '0')}
                  </div>
                  <p className="text-xs sm:text-sm leading-snug text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {capacidad}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen del laboratorio */}
          <div className="mt-12 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-corporate-red/10 to-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/galeriahome/2.png"
                alt={language === 'es' ? 'Laboratorio móvil de calibración' : 'Mobile calibration laboratory'}
                className="w-full h-48 sm:h-56 lg:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              {/* Badge sobre imagen */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-corporate-red flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Certificación API/ASME' : 'API/ASME Certification'}
                      </p>
                      <p className="text-gray-500 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Trazabilidad completa documentada' : 'Complete documented traceability'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section - Fondo GRIS CLARO */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-corporate-red text-[10px] sm:text-xs font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Nuestros Servicios' : 'Our Services'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              {language === 'es' 
                ? <>Servicios de <span className="font-bold text-corporate-red">Calibración In Situ</span></>
                : <><span className="font-bold text-corporate-red">On-Site Calibration</span> Services</>}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm lg:text-sm sm:text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Proceso estandarizado para calibración y diagnóstico de válvulas directamente en su planta.'
                : 'Standardized process for valve calibration and diagnostics directly at your plant.'}
            </p>
          </div>

          {/* Grid de servicios - 4 columnas en desktop */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviciosLaboratorio.map((servicio, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-corporate-red hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Imagen más pequeña */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  {/* Número badge */}
                  <div className="absolute top-3 left-3">
                    <span 
                      className="text-[10px] font-bold text-white px-2 py-1 rounded-md shadow-md" 
                      style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#8B0000' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Contenido más compacto */}
                <div className="p-4">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors duration-300 line-clamp-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {servicio.titulo}
                  </h3>
                  <p className="text-[10px] sm:text-xs leading-relaxed text-gray-600 line-clamp-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {servicio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Válvulas de Seguridad - Fondo BLANCO */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido */}
            <div>
              <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-[10px] sm:text-xs font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas de Seguridad' : 'Safety Valves'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <>Calibración in situ <span className="font-bold text-corporate-red">sin desmontaje</span></>
                  : <>On-site calibration <span className="font-bold text-corporate-red">without disassembly</span></>}
              </h2>
              
              <p className="text-gray-600 mb-8 text-sm lg:text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Verificación y calibración de válvulas de seguridad directamente en línea, minimizando paradas de planta y costos operativos.'
                  : 'Verification and calibration of safety valves directly in-line, minimizing plant shutdowns and operating costs.'}
              </p>

              {/* Lista de alcance */}
              <div className="space-y-4 mb-8">
                {alcanceSeguridad.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Normativa */}
              <div className="flex gap-3">
                <div className="px-5 py-3 bg-gray-100 border border-gray-200 rounded-xl">
                  <span className="text-gray-900 font-bold text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>API 527</span>
                </div>
                <div className="px-5 py-3 bg-gray-100 border border-gray-200 rounded-xl">
                  <span className="text-gray-900 font-bold text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>ASME</span>
                </div>
              </div>
            </div>

            {/* Imágenes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-56 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/ingenieriademateriales/valvulas/Válvulas de Seguridad Resortadas.png" 
                  alt={language === 'es' ? 'Válvulas de seguridad' : 'Safety valves'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/ingenieriademateriales/valvulas/Válvulas de Seguridad Pilotadas.png" 
                  alt={language === 'es' ? 'Válvulas pilotadas' : 'Pilot valves'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/ingenieriademateriales/valvulas/Pressure Seal (Forjadas y Fundidas).png" 
                  alt={language === 'es' ? 'Pressure Seal' : 'Pressure Seal'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Válvulas de Control - Fondo GRIS CLARO */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Imágenes - Primero en mobile, segundo en desktop */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="col-span-2 h-56 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/ingenieriademateriales/valvulas/Válvulas de Control.png" 
                  alt={language === 'es' ? 'Válvulas de control' : 'Control valves'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/ingenieriademateriales/valvulas/Válvulas Esféricas 3 Piezas – High Performance.png" 
                  alt={language === 'es' ? 'Válvulas esféricas' : 'Ball valves'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/ingenieriademateriales/valvulas/Válvulas Mariposas Triple Offset.png" 
                  alt={language === 'es' ? 'Válvulas mariposa' : 'Butterfly valves'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-[10px] sm:text-xs font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas de Control' : 'Control Valves'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <>Diagnóstico y calibración <span className="font-bold text-corporate-red">en campo</span></>
                  : <>Field diagnostics <span className="font-bold text-corporate-red">and calibration</span></>}
              </h2>
              
              <p className="text-gray-600 mb-8 text-sm lg:text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Servicios de diagnóstico avanzado para válvulas de control, posicionadores y actuadores directamente en su instalación.'
                  : 'Advanced diagnostic services for control valves, positioners and actuators directly at your facility.'}
              </p>

              {/* Lista de alcance */}
              <div className="space-y-4 mb-8">
                {alcanceControl.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Equipamiento */}
              <div className="flex flex-wrap gap-3">
                <div className="px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <span className="text-gray-900 font-bold text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Emerson AMS</span>
                </div>
                <div className="px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <span className="text-gray-900 font-bold text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>HART 475</span>
                </div>
                <div className="px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <span className="text-gray-900 font-bold text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>ValveLink</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Section - Fondo BLANCO */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-corporate-red text-[10px] sm:text-xs font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Beneficios' : 'Benefits'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              {language === 'es' 
                ? <>Ventajas del <span className="font-bold text-corporate-red">Servicio In Situ</span></>
                : <><span className="font-bold text-corporate-red">On-Site Service</span> Advantages</>}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm lg:text-sm sm:text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Múltiples beneficios operativos y económicos para su planta industrial.'
                : 'Multiple operational and economic benefits for your industrial plant.'}
            </p>
          </div>

          {/* Grid de ventajas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajasServicio.map((ventaja, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-corporate-red hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xs sm:text-sm font-bold mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#8B0000' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {ventaja.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {ventaja.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - ROJO CORPORATIVO (como Services.jsx) */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
              <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Contacto' : 'Contact'}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>¿Necesita <span className="font-semibold">servicios de laboratorio móvil</span>?</>
                : <>Need <span className="font-semibold">mobile laboratory services</span>?</>}
            </h3>
            
            <p className="text-sm sm:text-sm sm:text-base text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es'
                ? <>Contáctenos para coordinar una visita técnica y conocer cómo podemos optimizar sus <strong className="text-white font-normal">procesos de calibración y mantenimiento</strong> directamente en su planta.</>
                : <>Contact us to coordinate a technical visit and learn how we can optimize your <strong className="text-white font-normal">calibration and maintenance processes</strong> directly at your plant.</>}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-corporate-red text-sm sm:text-sm sm:text-base font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '220px' }}
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

    </div>
  );
};

export default LaboratorioMovil;
