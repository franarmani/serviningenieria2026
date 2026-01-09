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

  // Estado para controlar si está expandida la sección de metodología
  const [expandedMetodologia, setExpandedMetodologia] = useState(false);

  const ventajasPreventest = [
    {
      titulo: language === 'es' ? "Sin Interrumpir la Operación" : "Without Interrupting Operation",
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
      titulo: language === 'es' ? "Verificación de Presión de Apertura (SET)" : "Opening Pressure Verification (SET)",
      descripcion: language === 'es' ? "Determinación del punto de apertura (SET) de válvulas de seguridad directamente en línea, bajo condiciones reales de operación, sin desmontaje ni interrupción del proceso." : "Determination of safety valve opening point (SET) directly in-line, under real operating conditions, without disassembly or process interruption.",
      imagen: "/preventest/1.png",
      caracteristicas: language === 'es' ? [
        "Verificación del SET en servicio",
        "Ensayo en línea (ensayo en caliente)",
        "Aplicación de fuerza controlada sobre el vástago",
        "Evaluación funcional de la válvula instalada",
        "Registro digital de parámetros del ensayo",
        "Emisión de informe técnico documentado en sitio"
      ] : [
        "In-service SET verification",
        "In-line testing (hot testing)",
        "Controlled force application on stem",
        "Functional evaluation of installed valve",
        "Digital recording of test parameters",
        "Issue of documented technical report on-site"
      ],
      aplicaciones: language === 'es' ? ["Plantas petroquímicas", "Refinerías", "Centrales térmicas", "Proceso continuo", "Válvulas de seguridad", "Sistemas de alivio"] : ["Petrochemical plants", "Refineries", "Thermal power plants", "Continuous process", "Safety valves", "Relief systems"]
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
    "Certificados de verificación con trazabilidad"
  ];

  const equipamientoPreventest = [
    {
      nombre: "Sistema PREVENTEST",
      descripcion: "Tecnología holandesa de última generación para verificación sin desmontaje",
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
      descripcion: "Documentación digital completa del proceso de verificación",
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
    <>
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/preventest/2.png" 
            alt="PREVENTEST – In Situ"
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.02em',
            lineHeight: '1.15'
          }}>
            {language === 'es' ? (
              <>
                <span className="text-corporate-red">PREVENTEST</span> - {' '}
                In Situ
              </>
            ) : (
              <>
                <span className="text-corporate-red">PREVENTEST</span> - {' '}
                In Situ
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Tecnología de ensayo en línea para verificar y ajustar válvulas de seguridad sin desmontaje, en condiciones reales de operación, con procedimientos documentados y trazabilidad técnica completa.'
              : 'In-line testing technology to verify and adjust safety valves without disassembly, under real operating conditions, with documented procedures and complete technical traceability.'}
          </p>

          {/* CTA */}
          <a 
            href="#scroll-content" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver más' : 'Learn more'}
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

      {/* ¿Qué es PREVENTEST? */}
      <section id="scroll-content" className="py-12 lg:py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Texto */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-xs sm:text-sm font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Tecnología PREVENTEST' : 'PREVENTEST Technology'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-5 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <>Verificación y Medición <span className="font-bold text-corporate-red">sin desmontaje</span></>
                  : <>Verification and Measurement <span className="font-bold text-corporate-red">without disassembly</span></>}
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <p>
                  {language === 'es'
                    ? 'SERVIN INGENIERÍA S.A. cuenta con tecnología PREVENTEST, un sistema especializado para la verificación y ajuste del punto de apertura (SET) de válvulas de seguridad directamente en planta, sin necesidad de desmontaje.'
                    : 'SERVIN INGENIERÍA S.A. has PREVENTEST technology, a specialized system for verification and adjustment of safety valve opening point (SET) directly in plant, without the need for disassembly.'}
                </p>
                <p>
                  {language === 'es'
                    ? 'El método PREVENTEST permite realizar el ensayo en línea (ensayo en caliente), evaluando la válvula en su condición real de operación, minimizando intervenciones y evitando paradas de proceso.'
                    : 'The PREVENTEST method allows in-line testing (hot testing), evaluating the valve in its real operating condition, minimizing interventions and avoiding process shutdowns.'}
                </p>
                <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4 sm:p-5 border-l-4 border-corporate-red shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es'
                      ? 'PREVENTEST es una tecnología de verificación y ajuste en servicio. No reemplaza los ensayos en banco ni las reparaciones realizadas en planta o laboratorio.'
                      : 'PREVENTEST is an in-service verification and adjustment technology. It does not replace bench testing or repairs performed in plant or laboratory.'}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 sm:p-4 text-center border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>SET</div>
                  <p className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Medición Precisa' : 'Precise Measurement'}</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 sm:p-4 text-center border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold text-corporate-red mb-1 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'EN LÍNEA' : 'IN-LINE'}</div>
                  <p className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Sin Interrupciones' : 'No Interruptions'}</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 sm:p-4 text-center border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>ASME</div>
                  <p className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Normativa Vigente' : 'Current Standards'}</p>
                </div>
              </div>
            </div>

            {/* Imagen principal del equipo PREVENTEST */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/preventest/3.png" 
                  alt={language === 'es' ? 'Equipo PREVENTEST en operación' : 'PREVENTEST equipment in operation'}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Operadores Certificados' : 'Certified Operators'}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Ventil USA Training' : 'Ventil USA Training'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cómo funciona PREVENTEST - Estilo Laboratorio Móvil */}
      <section className="pt-12 pb-8 lg:pt-16 lg:pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Texto */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-corporate-red text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Metodología Técnica' : 'Technical Methodology'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                {language === 'es' 
                  ? <><span className="font-bold text-corporate-red">¿Cómo funciona</span> PREVENTEST?</>
                  : <><span className="font-bold text-corporate-red">How does</span> PREVENTEST work?</>}
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'El sistema PREVENTEST permite verificar y ajustar el punto de apertura (SET) de válvulas de seguridad directamente en línea, mediante instrumentación de alta precisión y procedimientos controlados.'
                  : 'The PREVENTEST system allows verification and adjustment of safety valve opening point (SET) directly in-line, using high-precision instrumentation and controlled procedures.'}
              </p>

              {/* Características principales en grid compacto */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Sin desmontaje' : 'No disassembly'}
                    </p>
                    <p className="text-[10px] text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Ensayo en caliente' : 'Hot testing'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Sin paradas' : 'No shutdowns'}
                    </p>
                    <p className="text-[10px] text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Operación continua' : 'Continuous operation'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Alta precisión' : 'High precision'}
                    </p>
                    <p className="text-[10px] text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Sensores certificados' : 'Certified sensors'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Trazabilidad' : 'Traceability'}
                    </p>
                    <p className="text-[10px] text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Informes digitales' : 'Digital reports'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge de certificación */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Certificación ASME/NBIC' : 'ASME/NBIC Certification'}
                    </p>
                    <p className="text-[10px] text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' 
                        ? 'Equipo aprobado según ASME Section I y VIII-1 y NBIC Part 4 con validez internacional.'
                        : 'Equipment approved per ASME Section I and VIII-1 and NBIC Part 4 with international validity.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón para abrir modal */}
              <button
                onClick={() => setExpandedMetodologia(true)}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-corporate-red hover:text-corporate-red/80 transition-colors"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <span>
                  {language === 'es' ? 'Ver información técnica detallada' : 'View detailed technical information'}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Imagen */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/preventest/1.png" 
                  alt={language === 'es' ? 'Sistema PREVENTEST en operación' : 'PREVENTEST system in operation'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de información técnica */}
      {expandedMetodologia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setExpandedMetodologia(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[75vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gradient-to-r from-corporate-red to-corporate-red/90 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Información Técnica Detallada' : 'Detailed Technical Information'}
                </h3>
                <p className="text-xs text-white/80 mt-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Metodología PREVENTEST' : 'PREVENTEST Methodology'}
                </p>
              </div>
              <button
                onClick={() => setExpandedMetodologia(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenido scrolleable del modal */}
            <div className="overflow-y-auto max-h-[calc(75vh-80px)] px-5 py-5">
              
              {/* Instrumentación */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-corporate-red"></div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Instrumentación utilizada' : 'Instrumentation used'}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-8 h-8 rounded-lg bg-corporate-red flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Sensor de desplazamiento' : 'Displacement sensor'}
                      </h4>
                      <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Controla el movimiento del vástago durante el ensayo.' : 'Controls stem movement during testing.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-8 h-8 rounded-lg bg-corporate-red flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Celda de carga' : 'Load cell'}
                      </h4>
                      <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Mide la fuerza aplicada para determinar con precisión el valor de SET.' : 'Measures applied force to precisely determine SET value.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-8 h-8 rounded-lg bg-corporate-red flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Sensor acústico' : 'Acoustic sensor'}
                      </h4>
                      <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Detecta el inicio de apertura de la válvula sin necesidad de descarga completa.' : 'Detects valve opening without requiring complete discharge.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ventajas */}
              <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-corporate-red flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Ventajas del método' : 'Method advantages'}
                  </h4>
                </div>
                <div className="space-y-3">
                  {[
                    { es: 'Los ensayos son realizados bajo las mismas condiciones de servicio', en: 'Tests performed under the same service conditions' },
                    { es: 'No requiere el paro de planta', en: 'No plant shutdown required' },
                    { es: 'No requiere desmontaje de la válvula', en: 'No valve disassembly required' },
                    { es: 'Disminuye la pérdida de productividad', en: 'Decreases productivity loss' },
                    { es: 'Maximiza rentabilidad', en: 'Maximizes profitability' }
                  ].map((ventaja, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? ventaja.es : ventaja.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Respaldo técnico */}
              <div className="p-5 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Respaldo técnico' : 'Technical support'}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? 'Todos los ensayos son realizados por personal calificado, siguiendo procedimientos técnicos definidos y con documentación trazable del proceso. PREVENTEST es un servicio complementario a los ensayos en banco y a las tareas de mantenimiento realizadas en planta.'
                        : 'All tests are performed by qualified personnel, following defined technical procedures with traceable process documentation. PREVENTEST is a complementary service to bench testing and plant maintenance tasks.'}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Nuestro Alcance - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
              <span className="text-[10px] sm:text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Alcance de Servicios' : 'Service Scope'}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {language === 'es' ? 'Nuestro Alcance' : 'Our Scope'}
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es'
                ? 'Servicios especializados para una amplia gama de válvulas industriales y sistemas de automatización.'
                : 'Specialized services for a wide range of industrial valves and automation systems.'}
            </p>
          </div>

          {/* Grid de categorías - Responsive */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Válvulas Industriales */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas Industriales' : 'Industrial Valves'}
                </h3>
              </div>
              
              <div className="space-y-2">
                {[
                  { es: 'Esclusa, Globo, Retención', en: 'Gate, Globe, Check' },
                  { es: 'Esféricas y Mariposa', en: 'Ball & Butterfly' },
                  { es: 'Diafragma y Tapón lubricado', en: 'Diaphragm & Lubricated Plug' }
                ].map((valve, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? valve.es : valve.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Válvulas Especiales */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas Especiales' : 'Special Valves'}
                </h3>
              </div>
              
              <div className="space-y-2">
                {[
                  { es: 'Pressure Seal', en: 'Pressure Seal' },
                  { es: 'Doble y Triple excentricidad', en: 'Double & Triple Offset' },
                  { es: 'API 6D / API 6A', en: 'API 6D / API 6A' },
                  { es: 'Válvulas de Coke', en: 'Coke Valves' }
                ].map((valve, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? valve.es : valve.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sistemas de Alivio */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Sistemas de Alivio' : 'Relief Systems'}
                </h3>
              </div>
              
              <div className="space-y-2">
                {[
                  { es: 'Válvulas de seguridad y alivio', en: 'Safety & Relief Valves' },
                  { es: 'Convencionales y Pilotadas', en: 'Conventional & Piloted' },
                  { es: 'Presión y Vacío', en: 'Pressure & Vacuum' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? item.es : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Automatización */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Automatización' : 'Automation'}
                </h3>
              </div>
              
              <div className="space-y-2">
                {[
                  { es: 'Válvulas Automatizadas', en: 'Automated Valves' },
                  { es: 'Actuadores', en: 'Actuators' },
                  { es: 'Válvulas de Control', en: 'Control Valves' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? item.es : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Certificación PREVENTEST - Diseño Mejorado */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-red-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Contenido de Texto */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Certificación Oficial' : 'Official Certification'}
                </span>
              </div>
              
              {/* Título */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '-0.02em'
              }}>
                {language === 'es' ? (
                  <>Operadores Certificados <span className="text-corporate-red">PREVENTEST</span></>
                ) : (
                  <><span className="text-corporate-red">PREVENTEST</span> Certified Operators</>
                )}
              </h2>
              
              {/* Descripción */}
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es'
                  ? 'Nuestro equipo técnico cuenta con certificación oficial de Ventil USA para la operación de equipos PREVENTEST LTC/Advanced, garantizando ensayos profesionales y resultados confiables.'
                  : 'Our technical team holds official Ventil USA certification for PREVENTEST LTC/Advanced equipment operation, ensuring professional testing and reliable results.'}
              </p>

              {/* Características de la Certificación */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-corporate-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Certificación Ventil USA' : 'Ventil USA Certification'}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? 'Entrenamiento especializado en equipos PREVENTEST LTC y Advanced'
                        : 'Specialized training on PREVENTEST LTC and Advanced equipment'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-corporate-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Operación Profesional' : 'Professional Operation'}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? 'Ensayos técnicos ejecutados bajo procedimientos certificados'
                        : 'Technical tests executed under certified procedures'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-corporate-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Resultados Confiables' : 'Reliable Results'}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es'
                        ? 'Informes técnicos con trazabilidad y respaldo documentado'
                        : 'Technical reports with traceability and documented support'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>✓</div>
                  <p className="text-xs text-gray-600 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Certificado' : 'Certified'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>LTC</div>
                  <p className="text-xs text-gray-600 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Tecnología' : 'Technology'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-corporate-red mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>USA</div>
                  <p className="text-xs text-gray-600 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Ventil' : 'Ventil'}
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen del Certificado */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Decoración de fondo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-corporate-red/10 to-red-500/5 rounded-3xl blur-2xl opacity-50"></div>
                
                {/* Contenedor del certificado */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
                  <img 
                    src="/preventest/certificado.png" 
                    alt={language === 'es' ? 'Certificado PREVENTEST - Operador Certificado' : 'PREVENTEST Certificate - Certified Operator'}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  
                  {/* Badge flotante */}
                  <div className="absolute -bottom-4 -right-4 bg-corporate-red text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-xs font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>VENTIL</div>
                      <div className="text-[10px] opacity-90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>USA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TRABAJOS REALIZADOS - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
              <span className="text-[10px] sm:text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Portfolio' : 'Portfolio'}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {language === 'es' ? 'TRABAJOS REALIZADOS' : 'COMPLETED WORKS'}
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es'
                ? 'Experiencia comprobada en mantenimiento y reparación de válvulas industriales de alta complejidad.'
                : 'Proven experience in maintenance and repair of high-complexity industrial valves.'}
            </p>
          </div>

          {/* Grid de trabajos - Responsive */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Trabajo 1 - Pressure Seal */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/1.png" 
                  alt="Pressure Seal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Pressure Seal
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de válvulas esclusas Pressure Seal.' 
                    : 'Pressure Seal gate valve maintenance.'}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Internos Stellite' : 'Stellite internals'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Empaquetadura y Junta grafito conformado' : 'Formed graphite packing and gasket'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 2 - Válvula para Coke */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/2.png" 
                  alt="Válvula para Coke"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvula para Coke' : 'Coke Valve'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de válvula Esférica 4 Vías 16" para servicio de Coke.' 
                    : '4-Way 16" Ball Valve maintenance for Coke service.'}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Asientos Metálicos' : 'Metal seats'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Fuelles y acometidas de vapor' : 'Bellows and steam connections'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 3 - Válvulas con Actuador Eléctrico */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/3.png" 
                  alt="Válvulas con Actuador Eléctrico"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas esclusas con Actuador Eléctrico' : 'Gate Valves with Electric Actuator'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de Válvulas esclusas con actuadores eléctricos.' 
                    : 'Gate valve maintenance with electric actuators.'}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Internos Stellite' : 'Stellite internals'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Empaquetadura Grafito Conformado' : 'Formed Graphite Packing'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 4 - Válvula Retención con Amortiguación */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/4.png" 
                  alt="Válvula Retención con Amortiguación"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvula Retención con Amortiguación' : 'Check Valve with Damping'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de válvulas retención y fabricación de sistema de amortiguación de Clapeta.' 
                    : 'Check valve maintenance and clapper damping system fabrication.'}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Actuador Hidráulico' : 'Hydraulic Actuator'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{language === 'es' ? 'Internos AISI 410' : 'AISI 410 internals'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 5 - Válvulas esclusas API 6D */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/5.png" 
                  alt="Válvulas esclusas API 6D"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas esclusas API 6D' : 'API 6D Gate Valves'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de válvulas esclusas con actuador hidráulico.' 
                    : 'Gate valve maintenance with hydraulic actuator.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Asiento metálico' : 'Metal seat'}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Cuchilla y guías con aporte de Electroless Nickel' : 'Knife and guides with Electroless Nickel coating'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 6 - Válvulas esclusas, globo y retención */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/6.png" 
                  alt="Válvulas esclusas, globo y retención"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas esclusas, globo y retención' : 'Gate, Globe and Check Valves'}
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de 100 válvulas esclusas, globo y retención de 2" a 12".' 
                    : 'Maintenance of 100 gate, globe and check valves from 2" to 12".'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Internos AISI 410 y Stellite' : 'AISI 410 and Stellite internals'}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Empaquetaduras de grafito conformado con inhibidor de corrosión' : 'Formed graphite packing with corrosion inhibitor'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 7 - Válvulas de Seguridad Tanque */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/7.png" 
                  alt="Válvulas de Seguridad Tanque"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas de Seguridad Tanque / Presión y Vacío' : 'Tank Safety Valves / Pressure and Vacuum'}
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento en planta de válvulas de seguridad de Tanque de Amoniaco.' 
                    : 'On-site maintenance of Ammonia Tank safety valves.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Reemplazo de sellos, diafragmas y mantenimiento de piloto' : 'Seal and diaphragm replacement and pilot maintenance'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 8 - Válvula de Seguridad 24" */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/8.png" 
                  alt="Válvula de Seguridad 24 pulgadas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvula de Seguridad Diámetro 24"' : '24" Diameter Safety Valve'}
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de Válvula de seguridad de presión negativa.' 
                    : 'Negative pressure safety valve maintenance.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Cierre Metal-Metal' : 'Metal-to-Metal seal'}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? '0 Burbujas' : '0 Bubbles'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 9 - Válvulas de Seguridad Pilotadas */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/preventest/trabajos/9.png" 
                  alt="Válvulas de Seguridad Pilotadas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Válvulas de Seguridad Pilotadas' : 'Pilot-Operated Safety Valves'}
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Mantenimiento de Válvulas de seguridad de alta presión pilotadas.' 
                    : 'High-pressure pilot-operated safety valve maintenance.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Asiento Metal-Metal' : 'Metal-to-Metal seat'}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {language === 'es' ? 'Presión de Prueba 296 Kg/cm²' : 'Test Pressure 296 Kg/cm²'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabajo 10 - Mantenimiento en planta 11 Válvulas */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
              <div className="p-6">
                {/* Grid de 3 imágenes - Responsive optimizado */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src="/preventest/trabajos/mantenimiento1.png" 
                      alt="Mantenimiento Pressure Seal - Imagen 1"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src="/preventest/trabajos/mantenimiento2.png" 
                      alt="Mantenimiento Pressure Seal - Imagen 2"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg col-span-2 md:col-span-1">
                    <img 
                      src="/preventest/trabajos/mantenimiento3.png" 
                      alt="Mantenimiento Pressure Seal - Imagen 3"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Mantenimiento en planta de 11 Válvulas Pressure Seal' : 'On-site maintenance of 11 Pressure Seal Valves'}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Válvulas esclusas Pressure Seal 8" Serie 1500 y 12" Serie 1500.' 
                      : '8" Series 1500 and 12" Series 1500 Pressure Seal gate valves.'}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Desarme de válvulas' : 'Valve disassembly'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Lapidado de asientos y cuñas' : 'Seat and wedge lapping'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Mecanizado de vástagos' : 'Stem machining'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Reemplazo de empaquetaduras' : 'Packing replacement'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Juntas de bonete pressure seal' : 'Pressure seal bonnet gaskets'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-corporate-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language === 'es' ? 'Reemplazo de cajas reductoras' : 'Gear box replacement'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Final - Estilo About */}
      <section className="py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
            <span className="text-white/90 text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Servicios In Situ' : 'On-Site Services'}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            {language === 'es' ? '¿Necesita mantenimiento especializado en su planta industrial?' : 'Need specialized maintenance at your industrial plant?'}
          </h2>
          
          <p className="text-sm sm:text-base text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
            {language === 'es' 
              ? <>Nuestros especialistas están preparados para implementar soluciones técnicas eficientes, incluyendo tecnología <strong className="text-white font-semibold">PREVENTEST</strong> para verificación de válvulas sin interrumpir la operación.</>
              : <>Our specialists are prepared to implement efficient technical solutions, including <strong className="text-white font-semibold">PREVENTEST</strong> technology for valve verification without interrupting operation.</>}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-3.5 bg-white text-sm sm:text-base font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {language === 'es' ? 'Solicitar Cotización Técnica' : 'Request Technical Quote'}
            </Link>
            
            <Link 
              to="/services"
              className="group inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {language === 'es' ? 'Ver Todos los Servicios' : 'View All Services'}
            </Link>
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center">
              <div className="text-white font-bold text-base sm:text-lg mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? '+46 años' : '+46 years'}
              </div>
              <div className="text-white/70 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Trayectoria industrial' : 'Industrial experience'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center">
              <div className="text-white font-bold text-base sm:text-lg mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                PREVENTEST
              </div>
              <div className="text-white/70 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Operación en línea' : 'In-line operation'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-center">
              <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Ingeniería + Servicio' : 'Engineering + Service'}
              </div>
              <div className="text-white/70 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Soporte técnico especializado' : 'Specialized technical support'}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default MantenimientosInSitu;
