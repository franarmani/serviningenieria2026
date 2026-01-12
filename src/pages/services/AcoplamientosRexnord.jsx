import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const AcoplamientosRexnord = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const acoplamientosRexnord = [
    {
      id: "omega-elastomeric",
      nombre: "Omega Elastomeric Couplings",
      tipo: language === 'es' ? "Elastomérico" : "Elastomeric",
      descripcion: language === 'es' 
        ? "Acoplamientos elastoméricos de alto rendimiento para aplicaciones industriales generales. Diseñados con elemento flexible bipartido que permite una instalación rápida sin desmontar equipos."
        : "High-performance elastomeric couplings for general industrial applications. Designed with a two-piece flexible element that allows quick installation without dismounting equipment.",
      imagen: "/acoplamientos/omega-elastomeric.jpg",
      caracteristicas: language === 'es' 
        ? ["Alta absorción de vibraciones", "Compensación de desalineaciones", "Bajo mantenimiento", "Instalación sin desmontaje"]
        : ["High vibration absorption", "Misalignment compensation", "Low maintenance", "Installation without dismounting"],
      aplicaciones: language === 'es' 
        ? ["Bombas centrífugas", "Ventiladores industriales", "Compresores", "Equipos auxiliares"]
        : ["Centrifugal pumps", "Industrial fans", "Compressors", "Auxiliary equipment"],
      detallesTecnicos: {
        capacidades: language === 'es' 
          ? "Transmisión de potencia desde 1 HP hasta 3000 HP, con diámetros de eje desde 14mm hasta 200mm"
          : "Power transmission from 1 HP to 3000 HP, with shaft diameters from 14mm to 200mm",
        ventajas: language === 'es' 
          ? "Elemento flexible de uretano que absorbe choques y vibraciones, extendiendo la vida útil de rodamientos y sellos"
          : "Flexible urethane element that absorbs shocks and vibrations, extending bearing and seal life",
        aplicacionesDetalle: language === 'es' 
          ? "Especialmente recomendado para equipos con desalineaciones moderadas y aplicaciones donde se requiere arranque suave"
          : "Especially recommended for equipment with moderate misalignments and applications requiring soft start"
      }
    },
    {
      id: "viva-elastomeric",
      nombre: "Viva Elastomeric Couplings", 
      tipo: language === 'es' ? "Elastomérico compacto" : "Compact Elastomeric",
      descripcion: language === 'es' 
        ? "Acoplamientos elastoméricos compactos para espacios reducidos y aplicaciones con restricciones dimensionales. Excelente relación potencia/tamaño."
        : "Compact elastomeric couplings for tight spaces and applications with dimensional restrictions. Excellent power/size ratio.",
      imagen: "/acoplamientos/viva-elastomeric.jpg",
      caracteristicas: language === 'es' 
        ? ["Diseño compacto", "Alto torque en poco espacio", "Resistencia química", "Larga vida útil"]
        : ["Compact design", "High torque in small space", "Chemical resistance", "Long service life"],
      aplicaciones: language === 'es' 
        ? ["Bombas sumergibles", "Motores de espacios reducidos", "Equipos marinos", "Aplicaciones químicas"]
        : ["Submersible pumps", "Tight space motors", "Marine equipment", "Chemical applications"],
      detallesTecnicos: {
        capacidades: language === 'es' 
          ? "Torque nominal desde 50 hasta 8000 Nm, diseño optimizado para espacios confinados"
          : "Nominal torque from 50 to 8000 Nm, optimized design for confined spaces",
        ventajas: language === 'es' 
          ? "Construcción robusta que resiste ambientes corrosivos y temperaturas extremas hasta 80°C"
          : "Robust construction that withstands corrosive environments and extreme temperatures up to 80°C",
        aplicacionesDetalle: language === 'es' 
          ? "Ideal para industria química, petroquímica y aplicaciones offshore donde el espacio es limitado"
          : "Ideal for chemical, petrochemical and offshore applications where space is limited"
      }
    },
    {
      id: "composite-disc",
      nombre: "Addax / Composite Disc Couplings",
      tipo: language === 'es' ? "Disco compuesto" : "Composite Disc",
      descripcion: language === 'es' 
        ? "Tecnología avanzada de discos compuestos para máxima flexibilidad angular y axial. Diseño libre de mantenimiento para aplicaciones críticas."
        : "Advanced composite disc technology for maximum angular and axial flexibility. Maintenance-free design for critical applications.",
      imagen: "/acoplamientos/composite-disc.jpg",
      caracteristicas: language === 'es' 
        ? ["Cero mantenimiento", "Máxima flexibilidad", "Resistencia a la fatiga", "Balanceado dinámico"]
        : ["Zero maintenance", "Maximum flexibility", "Fatigue resistance", "Dynamic balance"],
      aplicaciones: language === 'es' 
        ? ["Turbinas", "Generadores", "Compresores centrífugos", "Equipos de alta velocidad"]
        : ["Turbines", "Generators", "Centrifugal compressors", "High-speed equipment"],
      detallesTecnicos: {
        capacidades: language === 'es' 
          ? "Velocidades hasta 30.000 RPM, compensación angular hasta 1.5° y desplazamiento axial hasta 25mm"
          : "Speeds up to 30,000 RPM, angular compensation up to 1.5° and axial displacement up to 25mm",
        ventajas: language === 'es' 
          ? "Discos de material compuesto que eliminan la corrosión y fatiga metálica tradicional"
          : "Composite material discs that eliminate traditional metal corrosion and fatigue",
        aplicacionesDetalle: language === 'es' 
          ? "Especialmente diseñado para turbomaquinaria y aplicaciones donde la precisión y confiabilidad son críticas"
          : "Specially designed for turbomachinery and applications where precision and reliability are critical"
      }
    },
    {
      id: "thomas-xtsr",
      nombre: "Thomas XTSR Couplings",
      tipo: language === 'es' ? "Disco rígido" : "Rigid Disc",
      descripcion: language === 'es' 
        ? "Acoplamientos especializados para transmisiones industriales pesadas. Construcción robusta para condiciones operativas severas y cargas extremas."
        : "Specialized couplings for heavy industrial transmissions. Robust construction for severe operating conditions and extreme loads.",
      imagen: "/acoplamientos/thomas-xtsr.jpg",
      caracteristicas: language === 'es' 
        ? ["Construcción robusta", "Servicio pesado", "Alta confiabilidad", "Resistencia a impactos"]
        : ["Robust construction", "Heavy duty service", "High reliability", "Impact resistance"],
      aplicaciones: language === 'es' 
        ? ["Molinos de bolas", "Trituradoras", "Equipos mineros", "Transmisiones industriales"]
        : ["Ball mills", "Crushers", "Mining equipment", "Industrial transmissions"],
      detallesTecnicos: {
        capacidades: language === 'es' 
          ? "Torque nominal desde 5.000 hasta 100.000 Nm, resistencia a choques y cargas pulsantes"
          : "Nominal torque from 5,000 to 100,000 Nm, resistance to shocks and pulsating loads",
        ventajas: language === 'es' 
          ? "Diseño de múltiples discos con tratamiento térmico especial que resiste condiciones extremas"
          : "Multiple disc design with special heat treatment that withstands extreme conditions",
        aplicacionesDetalle: language === 'es' 
          ? "Especialmente desarrollado para industria minera, cementera y aplicaciones con alta demanda mecánica"
          : "Specially developed for mining, cement and high mechanical demand applications"
      }
    },
    {
      id: "euroflex-disc",
      nombre: "Euroflex Disc Couplings",
      tipo: language === 'es' ? "Disco metálico" : "Metal Disc",
      descripcion: language === 'es' 
        ? "Acoplamientos de precisión europea para aplicaciones críticas. Diseño de múltiples discos metálicos que garantiza alta torsional rigidez y bajo runout."
        : "European precision couplings for critical applications. Multiple metal disc design ensuring high torsional rigidity and low runout.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Disc%20Couplings/Euroflex%20Disc%20Couplings/img_euroflexDiscCoupling_thumbnail.jpg?ext=.jpg",
      caracteristicas: language === 'es' 
        ? ["Precisión europea", "Bajo runout dinámico", "Alta rigidez torsional", "Construcción modular"]
        : ["European precision", "Low dynamic runout", "High torsional rigidity", "Modular construction"],
      aplicaciones: language === 'es' 
        ? ["Máquinas herramienta", "Equipos de precisión", "Laminadores", "Aplicaciones servo"]
        : ["Machine tools", "Precision equipment", "Rolling mills", "Servo applications"],
      detallesTecnicos: {
        capacidades: language === 'es' 
          ? "Torque desde 100 hasta 50.000 Nm con runout residual menor a 0.05mm"
          : "Torque from 100 to 50,000 Nm with residual runout less than 0.05mm",
        ventajas: language === 'es' 
          ? "Múltiples discos de acero inoxidable que proporcionan flexibilidad controlada y máxima rigidez"
          : "Multiple stainless steel discs providing controlled flexibility and maximum rigidity",
        aplicacionesDetalle: language === 'es' 
          ? "Ideal para aplicaciones que requieren alta precisión posicional y respuesta dinámica rápida"
          : "Ideal for applications requiring high positional precision and fast dynamic response"
      }
    },
    {
      id: "parts-kits",
      nombre: "Elastomeric Coupling Parts & Kits",
      tipo: language === 'es' ? "Repuestos y mantenimiento" : "Spare Parts & Maintenance",
      descripcion: language === 'es' 
        ? "Componentes originales Rexnord para mantenimiento y reposición de acoplamientos elastoméricos. Stock permanente de elementos críticos."
        : "Original Rexnord components for maintenance and replacement of elastomeric couplings. Permanent stock of critical elements.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Coupling%20Parts%20and%20Kits/Elastomeric/Elastomeric.jpg?ext=.jpg",
      caracteristicas: language === 'es' 
        ? ["Repuestos originales", "Kits completos de mantenimiento", "Stock inmediato", "Garantía de calidad"]
        : ["Original spare parts", "Complete maintenance kits", "Immediate stock", "Quality guarantee"],
      aplicaciones: language === 'es' 
        ? ["Mantenimiento preventivo", "Reparaciones de emergencia", "Modernizaciones", "Reemplazo planificado"]
        : ["Preventive maintenance", "Emergency repairs", "Modernizations", "Planned replacement"],
      detallesTecnicos: {
        capacidades: language === 'es' 
          ? "Elementos flexibles, hubs, tornillería y kits completos para toda la línea elastomérica"
          : "Flexible elements, hubs, hardware and complete kits for the entire elastomeric line",
        ventajas: language === 'es' 
          ? "Componentes manufacturados con las mismas especificaciones que el equipo original"
          : "Components manufactured with the same specifications as the original equipment",
        aplicacionesDetalle: language === 'es' 
          ? "Disponibilidad inmediata para minimizar tiempos de parada no planificados"
          : "Immediate availability to minimize unplanned downtime"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://es.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/omega-hotspots.jpg?lang=es-mx&ext=.jpg" 
            alt={language === 'es' ? 'Acoplamientos Rexnord' : 'Rexnord Couplings'}
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
                {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 uppercase" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {language === 'es' ? (
              <>
                ACOPLAMIENTOS{' '}
                <span className="text-corporate-red">REXNORD</span>
              </>
            ) : (
              <>
                REXNORD{' '}
                <span className="text-corporate-red">COUPLINGS</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Representación oficial Rexnord: Omega, Viva, Addax, Thomas XTSR, Euroflex para aplicaciones industriales críticas. Ingeniería de aplicación y soporte técnico especializado.'
              : 'Official Rexnord representation: Omega, Viva, Addax, Thomas XTSR, Euroflex for critical industrial applications. Application engineering and specialized technical support.'}
          </p>

          {/* CTA */}
          <a 
            href="#catalogo" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver catálogo' : 'View catalog'}
          </a>
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

      {/* Navegación - Breadcrumb */}
      <section className="py-3 sm:py-4 lg:py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs lg:text-sm text-gray-600 overflow-x-auto">
            <Link to="/divisiones" className="hover:text-corporate-red transition-colors whitespace-nowrap flex-shrink-0">
              {language === 'es' ? 'Divisiones' : 'Divisions'}
            </Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/services/ingenieria-materiales" className="hover:text-corporate-red transition-colors whitespace-nowrap flex-shrink-0">
              {language === 'es' ? 'Materiales' : 'Materials'}
            </Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-corporate-red font-medium whitespace-nowrap flex-shrink-0">{language === 'es' ? 'Rexnord' : 'Rexnord'}</span>
          </nav>
        </div>
      </section>

        {/* REPRESENTACIÓN EXCLUSIVA REXNORD */}
        <section id="scroll-content" className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-gray-700 text-[11px] sm:text-xs font-semibold tracking-wide uppercase">{language === 'es' ? 'Representación Exclusiva' : 'Exclusive Representation'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-2 sm:mb-4 leading-tight">
                {language === 'es' ? 'Acoplamientos' : 'Rexnord'}
                <span className="block font-semibold text-corporate-red mt-0.5 sm:mt-1">{language === 'es' ? 'Rexnord Originales' : 'Original Couplings'}</span>
              </h2>
            </div>

            {/* Main Content - Two Column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
              {/* Left Column */}
              <div>
                <div className="space-y-5 sm:space-y-8">
                  {/* First Block */}
                  <div>
                    <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{language === 'es' ? 'Representantes Autorizados' : 'Authorized Representatives'}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {language === 'es'
                        ? 'Como representantes exclusivos de Rexnord en la región, ofrecemos la línea completa de acoplamientos industriales para transmisión de potencia en aplicaciones críticas.'
                        : 'As exclusive Rexnord representatives in the region, we offer the complete line of industrial couplings for power transmission in critical applications.'}
                    </p>
                  </div>

                  {/* Second Block */}
                  <div>
                    <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{language === 'es' ? 'Máxima Confiabilidad' : 'Maximum Reliability'}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {language === 'es'
                        ? 'Los acoplamientos Rexnord están diseñados para operar con máxima confiabilidad en condiciones severas, cubriendo un amplio rango de potencias según modelo y aplicación.'
                        : 'Rexnord couplings are designed to operate with maximum reliability under severe conditions, covering a wide range of power capacities depending on model and application.'}
                    </p>
                  </div>

                  {/* Services Block */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">{language === 'es' ? 'Soporte Técnico Especializado' : 'Specialized Technical Support'}</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700">{language === 'es' ? 'Selección de producto' : 'Product selection'}</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700">{language === 'es' ? 'Análisis de aplicación' : 'Application analysis'}</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700">{language === 'es' ? 'Provisión de repuestos originales' : 'Original spare parts supply'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Image & Stats */}
              <div className="flex flex-col gap-5 sm:gap-8">
                {/* Image */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://es.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/omega-hotspots.jpg?lang=es-mx&ext=.jpg"
                    alt="Acoplamientos Rexnord Industriales"
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-corporate-red rounded-lg p-4 sm:p-6 lg:p-8 text-white border border-red-600">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-1 sm:mb-2">6</div>
                    <p className="text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide leading-tight">{language === 'es' ? 'LÍNEAS DE PRODUCTOS' : 'PRODUCT LINES'}</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 sm:p-6 lg:p-8 text-white border border-gray-700">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-1 sm:mb-2">100%</div>
                    <p className="text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide leading-tight">{language === 'es' ? 'ORIGINALES' : 'ORIGINAL'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO REXNORD */}
        <section id="productos-rexnord" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
                <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Catálogo Rexnord' : 'Rexnord Catalog'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-2xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Líneas de' : 'Product'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Productos' : 'Lines'}</span>
              </h3>
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Soluciones de acoplamientos industriales diseñadas para una transmisión de potencia confiable en equipos rotativos críticos.'
                    : 'Industrial coupling solutions designed for reliable power transmission in critical rotating equipment.'}
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Los acoplamientos Rexnord se destacan por alta durabilidad, compensación de desalineaciones, reducción de vibraciones y mayor vida útil de los equipos.'
                    : 'Rexnord couplings stand out for their high durability, misalignment compensation, vibration reduction and extended equipment life.'}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {acoplamientosRexnord.map((acoplamiento, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate-red/20 flex flex-col h-full">
                  <div className="aspect-w-16 aspect-h-12 mb-4 sm:mb-6">
                    <img 
                      src={acoplamiento.imagen}
                      alt={`Acoplamiento ${acoplamiento.nombre}`}
                      className="w-full h-32 sm:h-40 object-contain rounded-lg bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-block bg-corporate-red/10 text-corporate-red px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium mb-3">
                      {acoplamiento.tipo}
                    </span>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {acoplamiento.nombre}
                  </h4>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {acoplamiento.descripcion}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2 text-[10px] sm:text-xs uppercase tracking-wide">{language === 'es' ? 'Características clave' : 'Key Features'}</h5>
                    <ul className="space-y-1">
                      {acoplamiento.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2 flex-shrink-0"></div>
                          <span>{caracteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2 text-[10px] sm:text-xs uppercase tracking-wide">{language === 'es' ? 'Aplicaciones' : 'Applications'}</h5>
                    <div className="flex flex-wrap gap-1">
                      {acoplamiento.aplicaciones.slice(0, 3).map((aplicacion, idx) => (
                        <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-[10px] sm:text-xs">
                          {aplicacion}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      to={`/services/acoplamiento/${acoplamiento.id}`}
                      className="btn-primary w-full text-xs sm:text-sm"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {language === 'es' ? 'Ver Detalle Técnico' : 'View Technical Details'}
                    </Link>
                    <Link
                      to={`/contact?subject=${encodeURIComponent(
                        language === 'es'
                          ? `Solicitud de cotización: Acoplamiento Rexnord ${acoplamiento.nombre}`
                          : `Quote request: Rexnord coupling ${acoplamiento.nombre}`
                      )}#formulario`}
                      className="btn-outline-red w-full text-xs sm:text-sm"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APLICACIONES INDUSTRIALES */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
                <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Sectores Atendidos' : 'Industries Served'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-2xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Aplicaciones' : 'Industrial'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Industriales' : 'Applications'}</span>
              </h3>
              <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Los acoplamientos Rexnord provistos por SERVIN Ingeniería se aplican en <strong>equipos rotativos industriales</strong>, donde la confiabilidad mecánica y la correcta selección del componente son críticas para la operación.</>
                  : <>Rexnord couplings supplied by SERVIN Engineering are applied in <strong>industrial rotating equipment</strong>, where mechanical reliability and proper component selection are critical for operation.</>}
              </p>
            </div>
            
            {/* Sectores con galería de imágenes */}
            <div className="space-y-12 sm:space-y-16">
              
              {/* MINERÍA */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Minería' : 'Mining'}
                    </h4>
                    <p className="text-xs sm:text-sm text-corporate-red font-medium uppercase tracking-wide mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicaciones típicas' : 'Typical Applications'}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {(language === 'es' ? ["Molinos SAG y de bolas", "Chancadores", "Sistemas de transporte"] : ["SAG and Ball Mills", "Crushers", "Conveying Systems"]).map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-3 flex-shrink-0"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-corporate-red">
                      <p className="text-xs sm:text-sm text-gray-600 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <strong>{language === 'es' ? 'Nota técnica:' : 'Technical Note:'}</strong> {language === 'es' ? 'Equipos de gran porte con cargas elevadas y servicio continuo, donde la selección correcta del acoplamiento impacta directamente en la disponibilidad del sistema.' : 'Large equipment with high loads and continuous service, where correct coupling selection directly impacts system availability.'}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 gap-1">
                    <img src="https://www.e-mj.com/wp-content/uploads/2022/02/1-Horizontal-Mills.jpg" alt="Molino horizontal minería" className="w-full h-40 sm:h-48 object-cover col-span-2" />
                    <img src="https://cambelt.com/wp-content/uploads/2021/10/aoNMGaMs5jAfnvKrxBBlim7vV7RZQdxf1633019344.jpg" alt="Chancador minero" className="w-full h-32 sm:h-40 object-cover" />
                    <img src="https://www.machinerypartner.com/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyhrhi1m6%2Fproduction%2Fc2a81fe457602f7b3845117f1ebe457e6db4b292-1200x904.webp%3Frect%3D0%2C115%2C1200%2C675%26w%3D800%26h%3D450&w=3840" alt="Transporte minero" className="w-full h-32 sm:h-40 object-cover" />
                  </div>
                </div>
              </div>

              {/* PETRÓLEO & GAS */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 order-2 lg:order-1">
                    <img src="https://www.lcec.us/wp-content/uploads/2023/06/01-types-of-pumps-in-the-oil-and-gas-industry.jpg" alt="Bombas oil & gas" className="w-full h-40 sm:h-48 object-cover col-span-2" />
                    <img src="https://kimray.com/sites/default/files/uploads/learning-paths/oil-gas-equipment-101/15.14%20Vertical%20Separator.jpg" alt="Separador vertical" className="w-full h-32 sm:h-40 object-cover" />
                    <img src="https://www.whitacrerebar.com/wp-content/uploads/2017/10/MeteringStation-1024x545.jpg" alt='Skid de bombas industriales' className="w-full h-32 sm:h-40 object-cover" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-1 lg:order-2">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Petróleo & Gas' : 'Oil & Gas'}
                    </h4>
                    <p className="text-xs sm:text-sm text-corporate-red font-medium uppercase tracking-wide mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicaciones típicas' : 'Typical Applications'}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {(language === 'es' ? ["Bombas de proceso", "Compresores", "Instalaciones de refinería"] : ["Process Pumps", "Compressors", "Refinery Installations"]).map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-3 flex-shrink-0"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-corporate-red">
                      <p className="text-xs sm:text-sm text-gray-600 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <strong>{language === 'es' ? 'Nota técnica:' : 'Technical Note:'}</strong> {language === 'es' ? 'Ambientes exigentes y procesos críticos que requieren componentes confiables, con correcta compatibilidad mecánica y de materiales.' : 'Demanding environments and critical processes requiring reliable components with correct mechanical and material compatibility.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CEMENTERAS */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Cementeras' : 'Cement'}
                    </h4>
                    <p className="text-xs sm:text-sm text-corporate-red font-medium uppercase tracking-wide mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicaciones típicas' : 'Typical Applications'}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {(language === 'es' ? ["Hornos rotatorios", "Molinos", "Ventiladores ID / FD"] : ["Rotary Kilns", "Mills", "ID / FD Fans"]).map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-3 flex-shrink-0"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-corporate-red">
                      <p className="text-xs sm:text-sm text-gray-600 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <strong>{language === 'es' ? 'Nota técnica:' : 'Technical Note:'}</strong> {language === 'es' ? 'Procesos continuos con vibraciones, polvo y temperaturas elevadas, donde la transmisión de potencia debe ser robusta y estable.' : 'Continuous processes with vibrations, dust and high temperatures, where power transmission must be robust and stable.'}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KilnBZ.JPG/1200px-KilnBZ.JPG" alt="Horno rotatorio cemento" className="w-full h-40 sm:h-48 object-cover col-span-2" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/LDCementFM10MW.jpg" alt="Molino cemento" className="w-full h-32 sm:h-40 object-cover" />
                    <img src="https://techflow.net/admin/public/public/upload/media_images/IMG_20240315_174757-1729573295.jpg" alt="Ventilador industrial" className="w-full h-32 sm:h-40 object-cover" />
                  </div>
                </div>
              </div>

              {/* SIDERURGIA */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 order-2 lg:order-1">
                    <img src="https://americansteel.com/wp-content/uploads/2016/02/Rolling-Mill-1.jpg" alt="Laminador siderúrgico" className="w-full h-40 sm:h-48 object-cover col-span-2" />
                    <img src="https://www.dgcrane.com/wp-content/uploads/steel2.jpg" alt="Grúa siderurgia" className="w-full h-32 sm:h-40 object-cover" />
                    <img src="https://cdn.britannica.com/48/1548-004-13E12F99/slab-caster.jpg" alt="Colada continua" className="w-full h-32 sm:h-40 object-cover" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-1 lg:order-2">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Siderurgia' : 'Steel'}
                    </h4>
                    <p className="text-xs sm:text-sm text-corporate-red font-medium uppercase tracking-wide mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicaciones típicas' : 'Typical Applications'}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {(language === 'es' ? ["Laminadores", "Grúas industriales", "Sistemas de colada continua"] : ["Rolling Mills", "Industrial Cranes", "Continuous Casting Systems"]).map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-3 flex-shrink-0"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-corporate-red">
                      <p className="text-xs sm:text-sm text-gray-600 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <strong>{language === 'es' ? 'Nota técnica:' : 'Technical Note:'}</strong> {language === 'es' ? 'Aplicaciones de alta exigencia mecánica, donde la alineación y rigidez torsional del sistema son determinantes.' : 'High mechanical demand applications, where system alignment and torsional rigidity are critical.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PULPA & PAPEL */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Pulpa & Papel' : 'Pulp & Paper'}
                    </h4>
                    <p className="text-xs sm:text-sm text-corporate-red font-medium uppercase tracking-wide mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicaciones típicas' : 'Typical Applications'}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {(language === 'es' ? ["Digestores", "Refinadores", "Bombas de proceso"] : ["Digesters", "Refiners", "Process Pumps"]).map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-3 flex-shrink-0"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-corporate-red">
                      <p className="text-xs sm:text-sm text-gray-600 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <strong>{language === 'es' ? 'Nota técnica:' : 'Technical Note:'}</strong> {language === 'es' ? 'Entornos húmedos y corrosivos, donde la correcta selección de materiales y componentes reduce fallas y mantenimiento.' : 'Humid and corrosive environments, where correct material and component selection reduces failures and maintenance.'}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Rauman_sellutehdas.jpeg" alt="Planta pulpa papel" className="w-full h-40 sm:h-48 object-cover col-span-2" />
                    <img src="https://www.vectorsolutions.com/wp-content/uploads/2024/08/paper-machine-refining-full.jpg" alt="Refinador papel" className="w-full h-32 sm:h-40 object-cover" />
                    <img src="https://www.sulzer.com/-/media/images/applications/pulp-paper-and-board/chemicals-in-pulp-and-paper/ahlstar_end_suction_single_stage_process_pump_in_paper_mill.jpg" alt="Bomba proceso papel" className="w-full h-32 sm:h-40 object-cover" />
                  </div>
                </div>
              </div>

              {/* GENERACIÓN DE ENERGÍA */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 order-2 lg:order-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Tyssedal_Interior.JPG" alt="Sala turbinas" className="w-full h-40 sm:h-48 object-cover col-span-2" />
                    <img src="https://remsausainc.com/wp-content/uploads/AdobeStock_223494155.jpeg" alt="Generador eléctrico" className="w-full h-32 sm:h-40 object-cover" />
                    <img src="https://fansandblowers.com/uploads/_CGSmartImage/img-8604c14aabadfce19f88226d5f1cb70f" alt="Ventilador proceso" className="w-full h-32 sm:h-40 object-cover" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-1 lg:order-2">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Generación de Energía' : 'Power Generation'}
                    </h4>
                    <p className="text-xs sm:text-sm text-corporate-red font-medium uppercase tracking-wide mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Aplicaciones típicas' : 'Typical Applications'}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {(language === 'es' ? ["Turbinas", "Generadores", "Ventiladores de proceso"] : ["Turbines", "Generators", "Process Fans"]).map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-3 flex-shrink-0"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-corporate-red">
                      <p className="text-xs sm:text-sm text-gray-600 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <strong>{language === 'es' ? 'Nota técnica:' : 'Technical Note:'}</strong> {language === 'es' ? 'Equipos críticos que requieren transmisión de potencia confiable, balance dinámico adecuado y mínima tolerancia a fallas.' : 'Critical equipment requiring reliable power transmission, adequate dynamic balance and minimal failure tolerance.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Cierre */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? <>SERVIN Ingeniería acompaña a sus clientes en la <strong>selección técnica de acoplamientos</strong>, actuando como nexo entre la aplicación real y la solución Rexnord más adecuada.</>
                    : <>SERVIN Engineering accompanies its clients in the <strong>technical selection of couplings</strong>, acting as a link between the actual application and the most suitable Rexnord solution.</>}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO FINAL */}
        <section className="py-10 sm:py-14 lg:py-20 relative overflow-hidden" 
          style={{
            background: 'linear-gradient(135deg, #E00000 0%, #C80000 100%)'
          }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                <span className="text-white/90 text-[10px] sm:text-xs lg:text-sm font-medium tracking-wide uppercase">{language === 'es' ? 'Ingeniería de Aplicación' : 'Application Engineering'}</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight">
                {language === 'es' 
                  ? <>¿Necesita asesoramiento <span className="block font-bold mt-1 sm:mt-2">especializado?</span></>
                  : <>Need specialized <span className="block font-bold mt-1 sm:mt-2">advice?</span></>}
              </h2>
              
              <p className="text-xs sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                {language === 'es' 
                  ? 'Selección, provisión y soporte técnico de acoplamientos Rexnord.'
                  : 'Selection, supply and technical support for Rexnord couplings.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link 
                  to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Cotización técnica: Acoplamientos Rexnord' : 'Technical quote: Rexnord couplings')}#formulario`}
                  className="btn-primary-light w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 lg:py-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{language === 'es' ? 'Cotización técnica' : 'Technical quote'}</span>
                </Link>
                
                <Link 
                  to="/services/ingenieria-materiales"
                  className="btn-secondary-invert w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 lg:py-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  <span>{language === 'es' ? 'Materiales' : 'Materials'}</span>
                </Link>
              </div>
              
              <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-base mb-0.5">{language === 'es' ? '+30 años' : '+30 yrs'}</div>
                  <div className="text-white/70 text-[9px] sm:text-[10px] lg:text-xs leading-tight">{language === 'es' ? 'Experiencia' : 'Experience'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-base mb-0.5">✓ Rexnord</div>
                  <div className="text-white/70 text-[9px] sm:text-[10px] lg:text-xs leading-tight">{language === 'es' ? 'Oficial' : 'Official'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-base mb-0.5">{language === 'es' ? 'Soporte' : 'Support'}</div>
                  <div className="text-white/70 text-[9px] sm:text-[10px] lg:text-xs leading-tight">{language === 'es' ? 'Técnico' : '24/7'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default AcoplamientosRexnord;