import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const LaboratorioMovil = () => {
  const { language } = useLanguage();
  const [mostrarEquipamiento, setMostrarEquipamiento] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviciosLaboratorio = language === 'es' ? [
    {
      titulo: "Verificación y Calibración In Situ",
      descripcion: "Calibración y verificación funcional de válvulas de seguridad y control directamente en planta, sin desmontaje ni traslados.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Resortadas.png"
    },
    {
      titulo: "Diagnóstico de Campo",
      descripcion: "Evaluación integral del estado operativo de válvulas mediante equipos portátiles especializados y procedimientos técnicos documentados.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Control.png"
    },
    {
      titulo: "Ajuste y Verificación",
      descripcion: "Ajuste de set points, verificación de estanqueidad y control de performance funcional según especificaciones técnicas aplicables.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Pilotadas.png"
    },
    {
      titulo: "Documentación Técnica Inmediata",
      descripcion: "Emisión de certificados e informes técnicos con trazabilidad completa y registro documental en sitio.",
      imagen: "/ingenieriademateriales/valvulas/Pressure Seal (Forjadas y Fundidas).png"
    }
  ] : [
    {
      titulo: "On-Site Verification and Calibration",
      descripcion: "Calibration and functional verification of safety and control valves directly at plant, without disassembly or transfer.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Resortadas.png"
    },
    {
      titulo: "Field Diagnostics",
      descripcion: "Comprehensive evaluation of valve operational status using specialized portable equipment and documented technical procedures.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Control.png"
    },
    {
      titulo: "Adjustment and Verification",
      descripcion: "Set point adjustment, tightness verification and functional performance control per applicable technical specifications.",
      imagen: "/ingenieriademateriales/valvulas/Válvulas de Seguridad Pilotadas.png"
    },
    {
      titulo: "Immediate Technical Documentation",
      descripcion: "Issuance of certificates and technical reports with complete traceability and on-site documentary record.",
      imagen: "/ingenieriademateriales/valvulas/Pressure Seal (Forjadas y Fundidas).png"
    }
  ];

  const capacidadesMovil = language === 'es' ? [
    "Camión FORD 4000 4x4 para desplazamiento autónomo",
    "Hidro Grúa 7TN para movimiento de válvulas",
    "Compresor Alta Presión 200 kg/cm² + Baja Presión 7 kg/cm²",
    "Booster para pruebas hidráulicas hasta 550 kg/cm²",
    "Banco de Prueba VENTIL computarizado con mordazas hidráulicas y contador láser",
    "Lapidadora automática LAPMASTER 24\"",
    "Torno Paralelo para mecanizado en sitio",
    "Polipasto para movimiento de válvulas en trailer",
    "Computadora con software específico para informes técnicos online",
    "Herramientas Eléctricas y Neumáticas",
    "Rango de presiones: 1500 mmH2O hasta 500 kg/cm²"
  ] : [
    "FORD 4000 4x4 truck for autonomous displacement",
    "7TN Hydro Crane for valve handling",
    "High Pressure Compressor 200 kg/cm² + Low Pressure 7 kg/cm²",
    "Booster for hydraulic tests up to 550 kg/cm²",
    "VENTIL computerized Test Bench with hydraulic jaws and laser counter",
    "LAPMASTER 24\" automatic lapping machine",
    "Parallel Lathe for on-site machining",
    "Hoist for valve movement on trailer",
    "Computer with specific software for online technical reports",
    "Electric and Pneumatic Tools",
    "Pressure range: 1500 mmH2O up to 500 kg/cm²"
  ];

  
  const alcanceControl = language === 'es' ? [
    "Diagnóstico de posicionadores digitales",
    "Pruebas de carrera y respuesta",
    "Análisis de fricción y adherencia",
    "Verificación funcional de actuadores",
    "Configuración básica de parámetros de control (según alcance del equipo)"
  ] : [
    "Digital positioner diagnostics",
    "Stroke and response tests",
    "Friction and stiction analysis",
    "Functional actuator verification",
    "Basic control parameter configuration (per equipment scope)"
  ];

  const ventajasServicio = language === 'es' ? [
    {
      titulo: "Reducción de Paradas de planta",
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
      titulo: "Reduced Plant Downtime",
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
      
      {/* Hero Section */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/laboratoriomovil/1.jpg" 
            alt={language === 'es' ? 'Laboratorio Móvil Industrial' : 'Mobile Industrial Laboratory'}
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
                LABORATORIO{' '}
                <span className="text-corporate-red">MÓVIL</span>
              </>
            ) : (
              <>
                <span className="text-corporate-red">MOBILE</span>{' '}
                LABORATORY
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Unidad móvil totalmente equipada para reparación y calibración de válvulas en sitio. Autonomía completa con equipamiento de última generación y trazabilidad digital.'
              : 'Fully equipped mobile unit for valve repair and calibration at site. Complete autonomy with state-of-the-art equipment and digital traceability.'}
          </p>

          {/* CTA */}
          <a 
            href="#servicios" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver servicios' : 'View services'}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-medium mb-1 sm:mb-2 tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Deslizar' : 'Scroll'}
            </span>
            <svg className="w-3 h-5 sm:w-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Información del Laboratorio Móvil */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Texto */}
            <div className="order-2 lg:order-2">
              <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Laboratorio Móvil' : 'Mobile Laboratory'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <>Servicio <span className="font-bold text-corporate-red">en planta</span></>
                  : <><span className="font-bold text-corporate-red">On-site</span> service</>}
              </h2>
              
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <p>
                  {language === 'es'
                    ? 'Ante la necesidad de un servicio en planta, hemos desarrollado un Laboratorio Móvil totalmente equipado y autónomo para la reparación y calibración de válvulas en sitio.'
                    : 'Meeting the need for on-site service, we have developed a fully equipped and autonomous Mobile Laboratory for valve repair and calibration at site.'}
                </p>
                <p>
                  {language === 'es'
                    ? 'El equipamiento instalado en nuestro Laboratorio Móvil permite intervenir válvulas en un amplio rango de diámetros y presiones que comienzan desde el vacío hasta los 500 kg/cm².'
                    : 'The equipment installed in our Mobile Laboratory allows intervention on valves in a wide range of diameters and pressures ranging from vacuum to 500 kg/cm².'}
                </p>
                <p>
                  {language === 'es'
                    ? 'Todos los ensayos realizados a las válvulas son registrados y presentados gráficamente junto al informe técnico.'
                    : 'All tests performed on valves are recorded and presented graphically along with the technical report.'}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 text-center border border-red-100">
                  <div className="text-2xl font-bold text-corporate-red" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>1/8"-10"</div>
                  <p className="text-[10px] text-gray-600 mt-1 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Diámetros' : 'Diameters'}</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 text-center border border-red-100">
                  <div className="text-2xl font-bold text-corporate-red" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>500</div>
                  <p className="text-[10px] text-gray-600 mt-1 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>kg/cm²</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 text-center border border-red-100">
                  <div className="text-2xl font-bold text-corporate-red" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Aire/Agua</div>
                  <p className="text-[10px] text-gray-600 mt-1 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Fluidos' : 'Fluids'}</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 text-center border border-red-100">
                  <div className="text-2xl font-bold text-corporate-red" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>11</div>
                  <p className="text-[10px] text-gray-600 mt-1 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Equipos' : 'Equipment'}</p>
                </div>
              </div>

              {/* Equipamiento Técnico - Colapsable */}
              <div className="mt-6">
                <button
                  onClick={() => setMostrarEquipamiento(!mostrarEquipamiento)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-corporate-red"></div>
                    <p className="text-[10px] font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Ver equipamiento técnico' : 'View technical equipment'}
                    </p>
                  </div>
                  <svg 
                    className={`w-4 h-4 text-corporate-red transition-transform ${mostrarEquipamiento ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mostrarEquipamiento && (
                  <div className="grid sm:grid-cols-2 gap-2 mt-3 animate-fadeIn">
                    {capacidadesMovil.map((equipo, index) => (
                      <div key={index} className="flex items-start gap-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-200 hover:border-corporate-red/30 transition-colors">
                        <div className="w-6 h-6 rounded-lg bg-corporate-red flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[10px] font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <span className="text-[11px] text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{equipo}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Imagen principal del laboratorio */}
            <div className="relative order-1 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/laboratoriomovil/9.jpg" 
                  alt={language === 'es' ? 'Laboratorio Móvil SERVIN' : 'SERVIN Mobile Laboratory'}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-corporate-red rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Desde 1979' : 'Since 1979'}
                    </p>
                    <p className="text-[10px] text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Bahía Blanca, Buenos Aires' : 'Bahía Blanca, Buenos Aires'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes del Laboratorio Móvil */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 mb-3">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-gray-700 text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Galería' : 'Gallery'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <><span className="font-bold text-corporate-red">Equipamiento</span> y operación</>
                : <><span className="font-bold text-corporate-red">Equipment</span> and operation</>}
            </h2>
          </div>

          {/* Grid de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
              <div key={num} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={`/laboratoriomovil/${num}.jpg`}
                  alt={`${language === 'es' ? 'Laboratorio Móvil' : 'Mobile Laboratory'} ${num}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section - Fondo BLANCO */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Texto */}
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Servicios In Situ' : 'On-Site Services'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <>Verificación y <span className="font-bold text-corporate-red">calibración</span></>
                  : <>Verification and <span className="font-bold text-corporate-red">calibration</span></>}
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Proceso técnico estandarizado que minimiza tiempos de intervención y paradas de planta. Verificación, calibración y diagnóstico directamente en su instalación.'
                  : 'Standardized technical process that minimizes intervention times and plant shutdowns. Verification, calibration and diagnostics directly at your facility.'}
              </p>

              {/* Lista de servicios */}
              <div className="space-y-3">
                {serviciosLaboratorio.map((servicio, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-corporate-red/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-corporate-red flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {servicio.titulo}
                      </h3>
                      <p className="text-[10px] text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {servicio.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen */}
            <div className="relative order-2 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/laboratoriomovil/4.jpg" 
                  alt={language === 'es' ? 'Técnicos de SERVIN realizando calibración en sitio' : 'SERVIN technicians performing on-site calibration'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Válvulas de Control */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Texto */}
            <div className="order-2 lg:order-2">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas de Control' : 'Control Valves'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <>Diagnóstico y verificación <span className="font-bold text-corporate-red">en campo</span></>
                  : <>Diagnostics and verification <span className="font-bold text-corporate-red">in field</span></>}
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Diagnóstico avanzado de válvulas de control, posicionadores y actuadores directamente en la instalación del cliente.'
                  : 'Advanced diagnostics of control valves, positioners and actuators directly at customer facility.'}
              </p>

              {/* Herramientas */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <div className="w-1 h-1 rounded-full bg-corporate-red"></div>
                  <p className="text-[10px] font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Herramientas especializadas' : 'Specialized tools'}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Emerson AMS', 'HART 475', 'ValveLink'].map((tool, index) => (
                    <div key={index} className="px-4 py-2 bg-corporate-red/5 border border-corporate-red/20 rounded-lg hover:bg-corporate-red/10 transition-colors">
                      <span className="text-corporate-red font-bold text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alcance */}
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-lg bg-corporate-red flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Alcance del servicio' : 'Service scope'}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {alcanceControl.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 group">
                      <div className="w-5 h-5 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-corporate-red/20 transition-colors">
                        <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative order-1 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/laboratoriomovil/8.jpg" 
                  alt={language === 'es' ? 'Válvula de control en proceso de diagnóstico' : 'Control valve in diagnostic process'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios - Rediseñado */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Imagen */}
            <div className="relative order-2 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/laboratoriomovil/9.jpg" 
                  alt={language === 'es' ? 'Laboratorio Móvil SERVIN en operación' : 'SERVIN Mobile Laboratory in operation'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Beneficios' : 'Benefits'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <>Ventajas <span className="font-bold text-corporate-red">operativas</span></>
                  : <><span className="font-bold text-corporate-red">Operational</span> advantages</>}
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Optimización de recursos y reducción de tiempos muertos en su planta industrial con nuestro servicio de laboratorio móvil.'
                  : 'Resource optimization and downtime reduction in your industrial plant with our mobile laboratory service.'}
              </p>

              {/* Lista de beneficios */}
              <div className="space-y-3">
                {ventajasServicio.map((ventaja, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-corporate-red/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-corporate-red flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {ventaja.titulo}
                      </h3>
                      <p className="text-[10px] text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {ventaja.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
