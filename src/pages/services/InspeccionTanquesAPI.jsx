import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const InspeccionTanquesAPI = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const openModal = (grupo) => {
    setSelectedGroup(grupo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedGroup(null);
  };

  const auditoriasCertificadas = [
    {
      titulo: "Res. 785/05 y 277/25",
      descripcion: language === 'es' 
        ? "Auditorías técnicas para tanques de almacenamiento según normativa nacional vigente."
        : "Technical audits for storage tanks according to current national regulations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      titulo: "Res. 343 SMA/08",
      descripcion: language === 'es' 
        ? "Auditorías ambientales y de seguridad operativa para instalaciones industriales."
        : "Environmental and operational safety audits for industrial facilities.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      titulo: "API 650 / API 653",
      descripcion: language === 'es' 
        ? "Inspección en servicio, evaluación estructural, diseño y proyección de vida útil."
        : "In-service inspection, structural evaluation, design and useful life projection.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  // END agrupados por aplicación
  const ensayosGrouped = [
    {
      titulo: language === 'es' ? "Fondos de Tanques" : "Tank Floors",
      descripcion: language === 'es' 
        ? "Inspección sin necesidad de vaciado, ideal para tanques en operación."
        : "Inspection without emptying, ideal for tanks in operation.",
      imagen: "https://mfe-is.com/wp-content/uploads/2025/03/mfl-tank-floor-scanner-inspection.png",
      tecnicas: [
        {
          nombre: "MFL",
          detalle: language === 'es' 
            ? "Magnetic Flux Leakage - Detección de pérdidas de espesor mediante flujo magnético"
            : "Magnetic Flux Leakage - Thickness loss detection using magnetic flux"
        },
        {
          nombre: "LFET", 
          detalle: language === 'es' 
            ? "Low Frequency Electromagnetic - Detección de pérdida de masa por flujo electromagnético"
            : "Low Frequency Electromagnetic - Mass loss detection using electromagnetic flux"
        },
        {
          nombre: language === 'es' ? "MFL Serpentín" : "MFL Coil",
          detalle: language === 'es' 
            ? "MFL especializado para fondos con serpentín de calentamiento"
            : "Specialized MFL for floors with heating coils"
        }
      ],
      aplicaciones: language === 'es' 
        ? ["Detección de corrosión", "Mapeo de pérdida de espesor", "Fondos con serpentín", "Identificación de anomalías"]
        : ["Corrosion detection", "Thickness loss mapping", "Floors with coils", "Anomaly identification"],
      ventajas: language === 'es' 
        ? ["Sin limpieza previa", "Mapeo completo", "Inspección rápida", "Tanques en operación"]
        : ["No prior cleaning", "Complete mapping", "Fast inspection", "Tanks in operation"]
    },
    {
      titulo: language === 'es' ? "Paredes y Soldaduras" : "Walls and Welds",
      descripcion: language === 'es' 
        ? "Evaluación ultrasónica avanzada para estructuras verticales y uniones críticas."
        : "Advanced ultrasonic evaluation for vertical structures and critical joints.",
      imagen: "https://swtuv.com/wp-content/uploads/2018/12/Phased-Array-Ultrasonic-Testing-FIMG.jpg",
      tecnicas: [
        {
          nombre: "UT",
          detalle: language === 'es' 
            ? "Ultrasonido Convencional - Medición de espesores y detección de corrosión"
            : "Conventional Ultrasound - Thickness measurement and corrosion detection"
        },
        {
          nombre: "PAUT & TFM",
          detalle: language === 'es' 
            ? "Phased Array & Total Focusing Method - Inspección avanzada de soldaduras"
            : "Phased Array & Total Focusing Method - Advanced weld inspection"
        }
      ],
      aplicaciones: language === 'es' 
        ? ["Análisis de soldaduras", "Medición de espesores en servicio", "Detección de defectos internos"]
        : ["Weld analysis", "In-service thickness measurement", "Internal defect detection"],
      ventajas: language === 'es' 
        ? ["Alta precisión", "Imágenes detalladas", "Documentación completa", "Análisis en tiempo real"]
        : ["High precision", "Detailed images", "Complete documentation", "Real-time analysis"]
    },
    {
      titulo: language === 'es' ? "Inspecciones Superficiales" : "Surface Inspections",
      descripcion: language === 'es' 
        ? "Métodos de detección de discontinuidades visibles y verificación de hermeticidad."
        : "Methods for detecting visible discontinuities and leak-tightness verification.",
      imagen: "https://www.integratedtesting.com.au/assets/images/pages/Vacuum-Box-Testing.png",
      tecnicas: [
        {
          nombre: "LP",
          detalle: language === 'es' 
            ? "Líquidos Penetrantes - Detección de discontinuidades superficiales abiertas"
            : "Liquid Penetrant - Detection of open surface discontinuities"
        },
        {
          nombre: "PM",
          detalle: language === 'es' 
            ? "Partículas Magnéticas - Identificación de defectos subsuperficiales"
            : "Magnetic Particles - Subsurface defect identification"
        },
        {
          nombre: "Vacuum Box",
          detalle: language === 'es' 
            ? "Campana de Vacío - Verificación de hermeticidad en soldaduras de fondo y techo"
            : "Vacuum Box - Leak-tightness verification in floor and roof welds"
        }
      ],
      aplicaciones: language === 'es' 
        ? ["Verificación de hermeticidad", "Inspección de soldaduras de fondo", "Detección de fisuras superficiales"]
        : ["Leak-tightness verification", "Floor weld inspection", "Surface crack detection"],
      ventajas: language === 'es' 
        ? ["Económico", "Resultados inmediatos", "Fácil aplicación", "Detección directa"]
        : ["Economical", "Immediate results", "Easy application", "Direct detection"]
    }
  ];

  // Galería de imágenes END adicionales
  const imagenesEND = [
    {
      src: "https://aqcinspection.com/wp-content/uploads/2020/12/dye-penetrant-inspection.png",
      alt: language === 'es' ? "Líquidos Penetrantes - Dye Penetrant Inspection" : "Dye Penetrant Inspection",
      caption: language === 'es' ? "Líquidos Penetrantes" : "Liquid Penetrant"
    },
    {
      src: "https://wdbgroup.co.uk/wp-content/uploads/2023/01/Magnetic-Particle-Inspection-NDT-MPI-NDT-2-p936a5kvykf7203wpwwx4k96xpz90iwmy41qqpp8y0.jpg",
      alt: language === 'es' ? "Partículas Magnéticas - MPI NDT" : "Magnetic Particle Inspection - MPI NDT",
      caption: language === 'es' ? "Partículas Magnéticas" : "Magnetic Particles"
    },
    {
      src: "https://www.integratedtesting.com.au/assets/images/pages/Vacuum-Box-Testing.png",
      alt: language === 'es' ? "Vacuum Box Testing - Campana de Vacío" : "Vacuum Box Testing",
      caption: language === 'es' ? "Campana de Vacío" : "Vacuum Box"
    }
  ];

  // Servicios especializados
  const serviciosEspecializados = [
    {
      titulo: language === 'es' ? "Inspección de Recubrimientos" : "Coating Inspection",
      descripcion: language === 'es' 
        ? "Evaluación integral de sistemas de protección anticorrosiva: condiciones ambientales (temperatura, humedad, punto de rocío), perfil de anclaje y rugosidad, sales solubles, espesores de película húmeda (EPH) y seca (EPS), pruebas de adherencia y detección de porosidad."
        : "Comprehensive evaluation of anti-corrosive protection systems: environmental conditions (temperature, humidity, dew point), anchor profile and roughness, soluble salts, wet (WFT) and dry (DFT) film thickness, adhesion tests and porosity detection.",
      imagen: "https://aimcontrolgroup.com/vnt_upload/news/MARINE_SURVEY_SHIPPING_INSPECTION/154_Tank_coating_condition_inspection/Chemical_Tank_coating_condition_inspection_survey.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      titulo: language === 'es' ? "Acceso por Cuerda (IRATA)" : "Rope Access (IRATA)",
      descripcion: language === 'es' 
        ? "Acceso técnico por cuerda para inspecciones y ensayos en zonas de difícil acceso. Personal certificado IRATA I–III. Aplicable a todas las inspecciones: END, auditorías y recubrimientos en cualquier altura o configuración."
        : "Technical rope access for inspections and testing in hard-to-reach areas. IRATA I–III certified personnel. Applicable to all inspections: NDT, audits and coatings at any height or configuration.",
      imagen: "https://inservemechanical.com/wp-content/uploads/2020/08/Inspection-Rope-Access-NDE-Tank-scaled-1.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      titulo: language === 'es' ? "Informes y Certificaciones" : "Reports and Certifications",
      descripcion: language === 'es' 
        ? "Documentación completa con validez para auditorías: informes técnicos detallados, certificaciones oficiales, registro fotográfico exhaustivo, recomendaciones técnicas y trazabilidad digital según normativas API y resoluciones vigentes."
        : "Complete documentation valid for audits: detailed technical reports, official certifications, exhaustive photographic records, technical recommendations and digital traceability according to API standards and current regulations.",
      imagen: "https://www.indinspect.com/wp-content/uploads/blog-11.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="https://assets.inspectioneering.com/media/image/old/3c23103b117ab454126cde89f83747f2.png"
            alt="Inspección de Tanques API"
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
          
          <div className="mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 lg:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-white/90 text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'DIVISIÓN DE SERVICIOS' : 'SERVICES DIVISION'}
              </span>
            </div>
          </div>

          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6 px-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '1.1'
            }}>
              {language === 'es' ? 'INSPECCIÓN DE TANQUES' : 'TANK INSPECTION'}
            </h1>
            <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-1 sm:mr-2 lg:mr-4"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-bold px-1 sm:px-2" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
                API & END
              </h2>
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-1 sm:ml-2 lg:ml-4"></div>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 lg:mb-16 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>SERVIN Ingeniería brinda servicios de <span className="font-semibold">inspección técnica de tanques de almacenamiento y equipos industriales</span>, combinando auditorías certificadas y Ensayos No Destructivos (END) para la evaluación de integridad, seguridad y vida útil de activos críticos.</>
              : <>SERVIN Engineering provides <span className="font-semibold">technical inspection services for storage tanks and industrial equipment</span>, combining certified audits and Non-Destructive Testing (NDT) for integrity, safety and useful life evaluation of critical assets.</>}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-3 px-4 sm:px-0">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm sm:text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 border border-red-400/20 text-center" 
              style={{ minWidth: '200px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Solicitar Inspección' : 'Request Inspection'}
            </Link>

            <a 
              href="#capacidades-tecnicas" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/25 hover:border-white/40 text-center"
              style={{ minWidth: '200px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver Capacidades Técnicas' : 'View Technical Capabilities'}
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[10px] sm:text-xs font-medium mb-2 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
            <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>

      </section>

      {/* Auditorías Certificadas */}
      <section id="capacidades-tecnicas" className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 shadow-sm">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Certificaciones Oficiales' : 'Official Certifications'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3 sm:mb-4 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Auditorías Técnicas' : 'Technical Audits'}</span> {language === 'es' ? 'Certificadas' : 'Certified'}
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Cumplimiento normativo conforme a resoluciones vigentes y estándares API.' : 'Regulatory compliance according to current resolutions and API standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {auditoriasCertificadas.map((auditoria, index) => (
              <div key={index} className="group bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-corporate-red/20">
                <div className="text-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-corporate-red rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white group-hover:scale-105 transition-transform duration-300">
                    {auditoria.icon}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {auditoria.titulo}
                  </h3>
                  <p className="text-xs sm:text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {auditoria.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://inservemechanical.com/wp-content/uploads/2020/08/Inspection-Rope-Access-NDE-Tank-scaled-1.jpg"
              alt="Tanque industrial con inspectores en acceso por cuerda"
              className="w-full h-40 sm:h-48 lg:h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ensayos No Destructivos - Agrupados por Aplicación */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Tecnologías Avanzadas' : 'Advanced Technologies'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Ensayos' : 'Non-Destructive'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'No Destructivos' : 'Testing'}</span>
              <span className="block text-lg sm:text-base sm:text-lg md:text-xl text-gray-500 mt-2 font-normal">{language === 'es' ? '(END)' : '(NDT)'}</span>
            </h2>
            <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Técnicas especializadas agrupadas por área de aplicación para una evaluación integral.' : 'Specialized techniques grouped by application area for comprehensive evaluation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ensayosGrouped.map((grupo, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-corporate-red/20">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={grupo.imagen}
                    alt={grupo.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {grupo.titulo}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {grupo.descripcion}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-[10px] sm:text-xs uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Técnicas Incluidas' : 'Included Techniques'}</h4>
                    <div className="flex flex-wrap gap-2">
                      {grupo.tecnicas.map((tecnica, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 bg-corporate-red text-white text-[10px] sm:text-xs font-medium rounded-md" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {tecnica.nombre}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-[10px] sm:text-xs uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Aplicaciones Principales' : 'Main Applications'}</h4>
                    <div className="space-y-1">
                      {grupo.aplicaciones.slice(0, 2).map((app, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-corporate-red rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-[10px] sm:text-xs text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{app}</span>
                        </div>
                      ))}
                      {grupo.aplicaciones.length > 2 && (
                        <div className="text-[10px] sm:text-xs text-gray-500 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          +{grupo.aplicaciones.length - 2} {language === 'es' ? 'aplicaciones más' : 'more applications'}
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={() => openModal(grupo)}
                    className="w-full py-2 px-4 bg-corporate-red text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center group" 
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    <span>{language === 'es' ? 'Ver Características Completas' : 'View Full Details'}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalles */}
      {modalOpen && selectedGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-2 sm:p-4 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center py-4">
            <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-auto">
              <div className="relative">
                <div className="relative h-32 sm:h-48 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                  <img 
                    src={selectedGroup.imagen}
                    alt={selectedGroup.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {selectedGroup.titulo}
                    </h3>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {selectedGroup.descripcion}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-6 text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Técnicas Incluidas' : 'Included Techniques'}</h4>
                      <div className="space-y-4">
                        {selectedGroup.tecnicas.map((tecnica, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                            <div className="font-bold text-corporate-red text-sm sm:text-base md:text-lg mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {tecnica.nombre}
                            </div>
                            <div className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {tecnica.detalle}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Aplicaciones' : 'Applications'}</h4>
                        <div className="space-y-3">
                          {selectedGroup.aplicaciones.map((app, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ventajas Principales' : 'Main Advantages'}</h4>
                        <div className="space-y-3">
                          {selectedGroup.ventajas.map((ventaja, idx) => (
                            <div key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-corporate-red mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{ventaja}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 bg-corporate-red text-white font-bold rounded-xl hover:bg-red-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      onClick={closeModal}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {language === 'es' ? 'Solicitar Información Detallada' : 'Request Detailed Information'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Servicios Especializados */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Servicios Especializados' : 'Specialized Services'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Servicios Complementarios' : 'Complementary Services'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Certificados' : 'Certified'}</span>
            </h2>
            <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Soluciones complementarias realizadas por personal certificado y tecnología de vanguardia.' : 'Complementary solutions performed by certified personnel and cutting-edge technology.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviciosEspecializados.map((servicio, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate-red/20 flex flex-col h-full">
                {/* Imagen del servicio */}
                {servicio.imagen && (
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                )}
                <div className="p-6 sm:p-8 text-center flex-grow flex flex-col">
                  <div className="w-14 h-14 bg-corporate-red rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-105 transition-transform duration-300 -mt-12 relative z-10 shadow-lg border-4 border-white">
                    {servicio.icon}
                  </div>
                  <h3 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {servicio.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {servicio.descripcion}
                  </p>
                  
                  <Link 
                    to="/contact"
                    className="w-full py-3 px-6 bg-corporate-red text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-red-600 transition-colors duration-300 shadow-md hover:shadow-lg mt-auto inline-flex items-center justify-center"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {language === 'es' ? 'Solicitar Información' : 'Request Information'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normativas y Certificaciones */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Cumplimiento Técnico' : 'Technical Compliance'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Normativas y' : 'Regulations and'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Certificaciones' : 'Certifications'}</span>
            </h2>
            <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Cumplimiento total con estándares nacionales e internacionales que garantizan la integridad estructural, seguridad operativa y trazabilidad de cada inspección.'
                : 'Full compliance with national and international standards that guarantee structural integrity, operational safety and traceability of each inspection.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-corporate-red/20 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-corporate-red text-white px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm mr-4 flex-shrink-0" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  API 650
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Tanques Atmosféricos' : 'Atmospheric Tanks'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Estándar internacional para diseño y construcción de tanques de almacenamiento de acero.'
                      : 'International standard for design and construction of steel storage tanks.'}
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-corporate-red">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicación en SERVIN:' : 'Application at SERVIN:'}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' 
                        ? 'Evaluación estructural, geometría, espesores, corrosión y conformidad con especificaciones de fabricación.'
                        : 'Structural evaluation, geometry, thicknesses, corrosion and compliance with manufacturing specifications.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-corporate-red/20 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-corporate-red text-white px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm mr-4 flex-shrink-0" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  API 653
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Inspección en Servicio' : 'In-Service Inspection'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Norma para inspección, reparación, alteraciones y reconstrucción de tanques existentes.'
                      : 'Standard for inspection, repair, alterations and reconstruction of existing tanks.'}
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-corporate-red">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicación en SERVIN:' : 'Application at SERVIN:'}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' 
                        ? 'Cálculo de vida útil, planes de inspección, END avanzados y recomendaciones de reparación.'
                        : 'Useful life calculation, inspection plans, advanced NDT and repair recommendations.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-corporate-red/20 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-corporate-red text-white px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm mr-4 flex-shrink-0" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  785/05
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Auditorías Técnicas' : 'Technical Audits'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Requisitos obligatorios para auditorías técnicas de tanques en Argentina.'
                      : 'Mandatory requirements for technical tank audits in Argentina.'}
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-corporate-red">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicación en SERVIN:' : 'Application at SERVIN:'}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' 
                        ? 'Auditorías certificadas para cumplimiento legal de tanques atmosféricos.'
                        : 'Certified audits for legal compliance of atmospheric tanks.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-corporate-red/20 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-corporate-red text-white px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm mr-4 flex-shrink-0" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  ASME
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Estándares Internacionales' : 'International Standards'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Normas mecánicas para diseño y fabricación con reconocimiento mundial.'
                      : 'Mechanical standards for design and manufacturing with worldwide recognition.'}
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-corporate-red">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicación en SERVIN:' : 'Application at SERVIN:'}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' 
                        ? 'Ensayos, pruebas de presión, procedimientos y documentación técnica con validez internacional.'
                        : 'Testing, pressure tests, procedures and technical documentation with international validity.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://www.indinspect.com/wp-content/uploads/blog-11.jpg"
              alt="Certificaciones técnicas e inspección industrial"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Inspección Certificada</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              ¿Necesita una inspección API <span className="block font-bold mt-2">para sus tanques de almacenamiento?</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Más de <strong className="text-white font-semibold">1000 tanques inspeccionados</strong> avalan nuestra trayectoria. Nuestros especialistas están listos para asistirlo.
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
                Solicitar Cotización Técnica
              </Link>
              
              <Link 
                to="/services"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base sm:text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Ver Todos los Servicios
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>+1000</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Tanques inspeccionados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>API 653</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Certificación oficial</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Soporte Técnico</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Ingeniería + Inspección</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InspeccionTanquesAPI;