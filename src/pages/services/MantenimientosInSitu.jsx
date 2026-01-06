import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

// Estilos CSS para animaciones
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`;

// Inyectar estilos
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

const MantenimientosInSitu = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Estado para manejar la expansión de cada card en móvil
  const [expandedCards, setExpandedCards] = useState({});
  
  // Estado para manejar la expansión de características en ventajas PREVENTEST
  const [expandedVentajas, setExpandedVentajas] = useState({});

  const ventajasPreventest = [
    {
      titulo: language === 'es' ? "Sin Parar Planta" : "No Plant Shutdown",
      descripcion: language === 'es' ? "Diagnóstico completo de válvulas sin interrumpir la operación ni detener procesos productivos." : "Complete valve diagnostics without interrupting operation or stopping production processes.",
      icon: "🏭",
      detalles: language === 'es' ? [
        "Operación continua de planta",
        "Sin pérdidas de producción",
        "Mantenimiento predictivo",
        "Planificación optimizada"
      ] : [
        "Continuous plant operation",
        "No production losses",
        "Predictive maintenance",
        "Optimized planning"
      ]
    },
    {
      titulo: language === 'es' ? "Sin Desmontaje" : "No Disassembly",
      descripcion: language === 'es' ? "Ensayos directos en línea bajo condiciones reales de operación, manteniendo la integridad del sistema." : "Direct in-line testing under real operating conditions, maintaining system integrity.",
      icon: "🔧",
      detalles: language === 'es' ? [
        "Válvulas en línea",
        "Condiciones reales",
        "Integridad del sistema",
        "Sin manipulación"
      ] : [
        "In-line valves",
        "Real conditions",
        "System integrity",
        "No manipulation"
      ]
    },
    {
      titulo: language === 'es' ? "Automático y Seguro" : "Automatic & Safe",
      descripcion: language === 'es' ? "Procesos automatizados con sensores de alta precisión que garantizan la seguridad operacional." : "Automated processes with high-precision sensors that guarantee operational safety.",
      icon: "🛡️",
      detalles: language === 'es' ? [
        "Proceso automatizado",
        "Sensores de precisión",
        "Máxima seguridad",
        "Control remoto"
      ] : [
        "Automated process",
        "Precision sensors",
        "Maximum safety",
        "Remote control"
      ]
    },
    {
      titulo: language === 'es' ? "Registro Digital" : "Digital Recording",
      descripcion: language === 'es' ? "Documentación completa con gráficos, fotografías e informes técnicos trazables." : "Complete documentation with graphics, photographs and traceable technical reports.",
      icon: "📊",
      detalles: language === 'es' ? [
        "Informes digitales",
        "Gráficos de presión",
        "Fotografías documentales",
        "Trazabilidad completa"
      ] : [
        "Digital reports",
        "Pressure graphs",
        "Documentary photographs",
        "Complete traceability"
      ]
    },
    {
      titulo: language === 'es' ? "Certificación ASME" : "ASME Certification",
      descripcion: language === 'es' ? "Equipo aprobado según ASME Section I y VIII-1 y NBIC Part 4 con validez internacional." : "Equipment approved per ASME Section I and VIII-1 and NBIC Part 4 with international validity.",
      icon: "✅",
      detalles: language === 'es' ? [
        "Cumplimiento ASME",
        "Aprobación NBIC Part 4",
        "Validez internacional",
        "Certificación oficial"
      ] : [
        "ASME compliance",
        "NBIC Part 4 approval",
        "International validity",
        "Official certification"
      ]
    },
    {
      titulo: language === 'es' ? "Detección Precisa" : "Precise Detection",
      descripcion: language === 'es' ? "Sensores de fuerza, desplazamiento y acústicos detectan el punto exacto de apertura de válvulas." : "Force, displacement and acoustic sensors detect the exact valve opening point.",
      icon: "🎯",
      detalles: language === 'es' ? [
        "Sensores múltiples",
        "Punto exacto de apertura",
        "Medición precisa",
        "Detección acústica"
      ] : [
        "Multiple sensors",
        "Exact opening point",
        "Precise measurement",
        "Acoustic detection"
      ]
    }
  ];

  const serviciosInSitu = [
    {
      titulo: language === 'es' ? "Calibración PREVENTEST" : "PREVENTEST Calibration",
      descripcion: language === 'es' ? "Aplicación especializada del equipo PREVENTEST para calibración precisa de válvulas de seguridad en condiciones reales de operación." : "Specialized application of PREVENTEST equipment for precise safety valve calibration under real operating conditions.",
      imagen: "https://sc04.alicdn.com/kf/Hf5def47b5fb04e44a1e346cc5b5dc2a6g.jpg",
      caracteristicas: language === 'es' ? [
        "Uso directo del sistema PREVENTEST",
        "Calibración en línea especializada", 
        "Personal certificado en la tecnología",
        "Procedimientos estandarizados"
      ] : [
        "Direct use of PREVENTEST system",
        "Specialized in-line calibration", 
        "Technology-certified personnel",
        "Standardized procedures"
      ],
      aplicaciones: language === 'es' ? ["Refinerías", "Petroquímica", "Energía", "Química"] : ["Refineries", "Petrochemical", "Energy", "Chemical"]
    },
    {
      titulo: language === 'es' ? "Mantenimiento de Válvulas en Planta" : "In-Plant Valve Maintenance",
      descripcion: language === 'es' ? "Servicios de mantenimiento preventivo y correctivo especializado directamente en las instalaciones del cliente." : "Specialized preventive and corrective maintenance services directly at client facilities.",
      imagen: "https://thumbs.dreamstime.com/b/industrial-facility-technician-inspecting-maintaining-pipeline-system-integrity-technician-performing-routine-maintenance-408942924.jpg",
      caracteristicas: language === 'es' ? [
        "Mantenimiento preventivo programado",
        "Reparaciones correctivas urgentes",
        "Herramientas especializadas portátiles",
        "Equipo técnico especializado"
      ] : [
        "Scheduled preventive maintenance",
        "Urgent corrective repairs",
        "Portable specialized tools",
        "Specialized technical team"
      ],
      aplicaciones: language === 'es' ? ["Industrial", "Plantas de proceso", "Offshore", "Minería"] : ["Industrial", "Process Plants", "Offshore", "Mining"]
    },
    {
      titulo: language === 'es' ? "Medición de Presión SET" : "SET Pressure Measurement",
      descripcion: language === 'es' ? "Determinación precisa del punto de apertura de válvulas de seguridad críticas sin interrumpir procesos operativos." : "Precise determination of critical safety valve opening point without interrupting operational processes.",
      imagen: "https://assets.cms.ralstoninst.com/landing/2021-02-10-09_27_08-How-to-Perform-a-Pressure-Safety-Valve-Test-PSV-YouTube.jpg",
      caracteristicas: language === 'es' ? [
        "Medición de SET de alta precisión",
        "Verificación de sistemas críticos",
        "Calibración de instrumentos",
        "Validación de parámetros operativos"
      ] : [
        "High-precision SET measurement",
        "Critical systems verification",
        "Instrument calibration",
        "Operational parameters validation"
      ],
      aplicaciones: language === 'es' ? ["Válvulas de seguridad", "Sistemas críticos", "Alta presión", "Proceso continuo"] : ["Safety valves", "Critical systems", "High pressure", "Continuous process"]
    }
  ];

  const especificacionesTecnicas = [
    "Cumplimiento normativo ASME Section I y VIII-1",
    "Aprobación NBIC Part 4 para inspecciones certificadas", 
    "Sensores de fuerza, desplazamiento y acústicos integrados",
    "Detección automática del punto de apertura",
    "Registro digital completo con gráficos de presión",
    "Informes técnicos con fotografías documentales",
    "Ensayos bajo condiciones reales de operación",
    "Certificados de calibración con trazabilidad"
  ];

  const equipamientoPreventest = [
    {
      nombre: "Sistema PREVENTEST",
      descripcion: "Tecnología holandesa de última generación para calibración sin desmontaje",
      capacidades: [
        "Válvulas de 1/2\" a 12\"",
        "Presiones hasta 500 kg/cm²",
        "Detección automática",
        "Registro gráfico"
      ]
    },
    {
      nombre: "Sensores de Alta Precisión",
      descripcion: "Sensores de fuerza, desplazamiento y acústicos para medición precisa",
      capacidades: [
        "Sensores de fuerza",
        "Medición de desplazamiento",
        "Detección acústica",
        "Alta sensibilidad"
      ]
    },
    {
      nombre: "Sistema de Registro",
      descripcion: "Documentación digital completa del proceso de calibración",
      capacidades: [
        "Registro gráfico",
        "Fotografías",
        "Informes automáticos",
        "Base de datos"
      ]
    },
    {
      nombre: "Herramientas Especializadas",
      descripcion: "Adaptadores y conexiones certificadas para cada aplicación",
      capacidades: [
        "Adaptadores universales",
        "Conexiones certificadas", 
        "Herramientas especiales",
        "Accesorios seguros"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Más compacto */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop"
            alt="Mantenimientos In Situ PREVENTEST"
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(30%) contrast(1.1)'
            }}
          />
        </div>

        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
        }}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16 xl:py-20">
          
          {/* Corporate badge */}
          <div className="mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 lg:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-white/90 text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'DIVISIÓN DE SERVICIOS' : 'SERVICES DIVISION'}
              </span>
            </div>
          </div>

          {/* Executive title - Optimizado para móvil */}
          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-2 sm:mb-4 lg:mb-6 px-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '1.1'
            }}>
              {language === 'es' ? 'MANTENIMIENTOS' : 'ON-SITE'}
            </h1>
            <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-1 sm:mr-2 lg:mr-4"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-bold px-1" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #A00000 50%, #8B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
                {language === 'es' ? 'IN SITU' : 'MAINTENANCE'}
              </h2>
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-1 sm:ml-2 lg:ml-4"></div>
            </div>
          </div>

          {/* Professional subtitle - Optimizado para móvil */}
          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 lg:mb-16 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4 sm:px-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es'
              ? 'Tecnología PREVENTEST para calibración de válvulas sin desmontaje. Mantenimiento en planta sin interrumpir la operación.'
              : 'PREVENTEST technology for valve calibration without disassembly. In-plant maintenance without interrupting operation.'}
          </p>

          {/* Executive actions - Optimizado para móvil */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-3 px-4">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm sm:text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 border border-red-400/20 text-center" 
              style={{ minWidth: '200px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Solicitar Servicio' : 'Request Service'}
            </Link>

            <a 
              href="#scroll-content" 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/25 hover:border-white/40 text-center"
              style={{ minWidth: '200px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver Servicios' : 'View Services'}
            </a>
          </div>
        </div>

        {/* Deslizar - Más pequeño */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[9px] sm:text-[10px] sm:text-xs font-medium mb-1 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>

      </section>

      {/* ¿Qué es PREVENTEST? - Diseño profesional y refinado */}
      <section id="scroll-content" className="relative py-8 sm:py-10 lg:py-12 xl:py-14 bg-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header minimalista y profesional */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-red-50 text-red-600 text-[10px] sm:text-xs font-semibold rounded-md mb-4 sm:mb-6 tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Tecnología PREVENTEST' : 'PREVENTEST Technology'}
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 px-4" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {language === 'es' 
                ? <>Método de Calibración de válvulas de Seguridad <span className="font-semibold text-red-600">sin Desmontaje</span></>
                : <>Safety Valve Calibration Method <span className="font-semibold text-red-600">Without Disassembly</span></>}
            </h2>
            
            <div className="w-16 sm:w-20 h-px bg-red-600 mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif'
            }}>
              {language === 'es'
                ? 'Tecnología avanzada para calibración de válvulas de seguridad en condiciones reales de operación, manteniendo la continuidad de procesos industriales con certificación internacional.'
                : 'Advanced technology for safety valve calibration under real operating conditions, maintaining industrial process continuity with international certification.'}
            </p>
          </div>

        
        </div>
      </section>

      {/* Servicios In Situ - Diseño más compacto */}
      <section className="relative py-2 sm:py-12 lg:py-16 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #dc2626 25%, transparent 25%), linear-gradient(-45deg, #dc2626 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #dc2626 75%), linear-gradient(-45deg, transparent 75%, #dc2626 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         

          {/* Cards de servicios más compactas */}
          <div className="space-y-6 sm:space-y-8">
            {serviciosInSitu.map((servicio, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500 hover:border-red-200"
              >
                {/* Card Layout - Horizontal en desktop, vertical en móvil */}
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Imagen */}
                  <div className="relative lg:w-1/4 overflow-hidden">
                    <div className="aspect-[3/2] lg:aspect-square">
                      <img 
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Overlay para móvil solo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden"></div>
                    
                    {/* Título sobre la imagen en móvil */}
                    <div className="absolute bottom-3 left-3 lg:hidden">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-lg" style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        letterSpacing: '-0.01em'
                      }}>
                        {servicio.titulo}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-4 sm:p-6 lg:w-3/4">
                    
                    {/* Título para desktop */}
                    <h3 className="hidden lg:block text-xl lg:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3" style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      letterSpacing: '-0.01em'
                    }}>
                      {servicio.titulo}
                    </h3>

                    {/* Descripción */}
                    <p className="text-xs sm:text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed" style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                      {servicio.descripcion}
                    </p>

                    {/* Grid de características y aplicaciones - Más compacto */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      
                      {/* Características */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <svg className="w-4 h-4 text-corporate-red mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {language === 'es' ? 'Características' : 'Features'}
                        </h4>
                        
                        {/* Versión móvil con limitación */}
                        <div className="lg:hidden">
                          <div className="space-y-1">
                            {servicio.caracteristicas.slice(0, expandedCards[index] ? servicio.caracteristicas.length : 2).map((caracteristica, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-1 h-1 bg-corporate-red rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span className="text-[11px] text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                  {caracteristica}
                                </span>
                              </div>
                            ))}
                          </div>
                          {servicio.caracteristicas.length > 2 && (
                            <button
                              onClick={() => setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))}
                              className="mt-1 text-[10px] text-corporate-red font-medium hover:text-red-700 transition-colors duration-200 flex items-center"
                              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                            >
                              {expandedCards[index] ? (language === 'es' ? 'Ver menos' : 'See less') : (language === 'es' ? `Ver ${servicio.caracteristicas.length - 2} más` : `See ${servicio.caracteristicas.length - 2} more`)}
                              <svg 
                                className={`w-3 h-3 ml-1 transform transition-transform duration-200 ${expandedCards[index] ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Versión desktop completa */}
                        <div className="hidden lg:block">
                          <div className="space-y-1">
                            {servicio.caracteristicas.map((caracteristica, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-1 h-1 bg-corporate-red rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span className="text-[10px] sm:text-xs text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                  {caracteristica}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Aplicaciones */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <svg className="w-4 h-4 text-corporate-red mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z" clipRule="evenodd"/>
                          </svg>
                          {language === 'es' ? 'Sectores' : 'Sectors'}
                        </h4>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {servicio.aplicaciones.slice(0, 3).map((app, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] sm:text-[10px] sm:text-xs rounded-md hover:bg-corporate-red hover:text-white transition-colors duration-200"
                              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                            >
                              {app}
                            </span>
                          ))}
                          {servicio.aplicaciones.length > 3 && (
                            <span className="px-2 py-0.5 bg-gray-200 text-gray-500 text-[10px] sm:text-[10px] sm:text-xs rounded-md" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              +{servicio.aplicaciones.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link 
                        to="/contact"
                        className="inline-flex items-center text-corporate-red hover:text-red-700 font-semibold text-[10px] sm:text-xs transition-colors duration-200"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {language === 'es' ? 'Solicitar este servicio' : 'Request this service'}
                        <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-corporate-red/20 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Servicios In Situ' : 'On-Site Services'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? '¿Necesita mantenimiento especializado' : 'Need specialized maintenance'} <span className="block font-bold mt-2">{language === 'es' ? 'en su planta industrial?' : 'at your industrial plant?'}</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? <>Nuestros especialistas están listos para implementar la mejor solución, incluyendo tecnología <strong className="text-white font-semibold">PREVENTEST</strong> para calibración sin parar planta.</> : <>Our specialists are ready to implement the best solution, including <strong className="text-white font-semibold">PREVENTEST</strong> technology for calibration without plant shutdown.</>}
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
                to="/services"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base sm:text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {language === 'es' ? 'Ver Todos los Servicios' : 'View All Services'}
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia industrial' : 'Industrial experience'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>PREVENTEST</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Sin parar planta' : 'No plant shutdown'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería + Servicio' : 'Engineering + Service'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MantenimientosInSitu;
