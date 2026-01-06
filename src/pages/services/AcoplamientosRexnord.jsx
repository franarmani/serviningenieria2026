import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const AcoplamientosRexnord = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const acoplamientosRexnord = [
    {
      id: "omega-elastomeric",
      nombre: "Omega Elastomeric Couplings",
      tipo: language === 'es' ? "Elastomérico" : "Elastomeric",
      descripcion: language === 'es' 
        ? "Acoplamientos elastoméricos de alto rendimiento para aplicaciones industriales generales. Diseñados con elemento flexible bipartido que permite una instalación rápida sin desmontar equipos."
        : "High-performance elastomeric couplings for general industrial applications. Designed with a two-piece flexible element that allows quick installation without dismounting equipment.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/img_omegaCoupling_thumbnail.png?ext=.png",
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
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Viva/img_vivaCoupling_thumbnail.png?ext=.png",
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
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Disc%20Couplings/Composite%20Disc%20Couplings/img_compositeDiscCoupling_thumbnail.jpg?ext=.jpg",
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
      imagen: "https://www.rexnord.com/Rexnord/media/Rexnord/CAD/CAD%20Item%20Images/1088-XTSR71_andXTSR52.jpg?ext=.jpg",
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
    <div className="bg-white">
      {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: '100px 100px'}}></div>

          <div className="absolute inset-0 z-0 opacity-[0.08]">
            <img src="https://es.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/omega-hotspots.jpg?lang=es-mx&ext=.jpg" alt="Acoplamientos Industriales Rexnord" className="w-full h-full object-cover" style={{filter: 'grayscale(100%) contrast(1.2)', mixBlendMode: 'overlay'}} />
          </div>

          <div className="absolute inset-0 z-10" style={{background: 'radial-gradient(rgba(220, 38, 38, 0.03) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)'}}></div>

          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
            <div className="mb-6 sm:mb-8 animate-fade-in-up">
              <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-3" style={{backgroundColor: 'rgb(139, 0, 0)'}}></div>
                <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Representación Exclusiva Rexnord' : 'Exclusive Rexnord Representation'}</span>
              </div>
            </div>

            <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '200', letterSpacing: '0.01em', lineHeight: '1.1'}}>
                {language === 'es' ? 'ACOPLAMIENTOS' : 'COUPLINGS'}
              </h1>
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-2 sm:mr-4" style={{background: 'linear-gradient(to right, transparent, rgb(139, 0, 0))'}}></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-bold" style={{
                  fontFamily: 'Inter, system-ui, sans-serif', 
                  fontWeight: '800', 
                  background: 'linear-gradient(135deg, rgb(139, 0, 0) 0%, rgb(139, 0, 0) 50%, rgb(139, 0, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em', 
                  lineHeight: '1.1'
                }}>
                  REXNORD
                </h2>
                <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-2 sm:ml-4" style={{background: 'linear-gradient(to right, rgb(139, 0, 0), transparent)'}}></div>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300', letterSpacing: '0.01em'}}>
              {language === 'es' 
                ? <>Acoplamientos industriales <strong className="text-white font-normal">Rexnord de alta performance</strong> para <strong className="text-white font-normal">transmisión de potencia</strong> en <strong className="text-white font-normal">aplicaciones críticas</strong> con garantía internacional.</>
                : <>High-performance <strong className="text-white font-normal">Rexnord industrial couplings</strong> for <strong className="text-white font-normal">power transmission</strong> in <strong className="text-white font-normal">critical applications</strong> with international warranty.</>}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 animate-fade-in-up-delay-3 px-4">
              <Link 
                to="/contact" 
                className="btn-primary w-full sm:w-56 lg:w-64 h-11 sm:h-12 lg:h-14 text-sm sm:text-sm sm:text-base"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
              </Link>
            </div>
          </div>
        </section>

        {/* Navegación */}
        <section className="py-4 sm:py-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600">
              <Link to="/services" className="hover:text-corporate-red transition-colors">
                {language === 'es' ? 'Servicios' : 'Services'}
              </Link>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/services/ingenieria-materiales" className="hover:text-corporate-red transition-colors">
                {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
              </Link>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-corporate-red font-medium">{language === 'es' ? 'Acoplamientos Rexnord' : 'Rexnord Couplings'}</span>
            </div>
          </div>
        </section>

        {/* REPRESENTACIÓN EXCLUSIVA REXNORD */}
        <section id="scroll-content" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
              <div>
                <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
                  <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Representación Exclusiva' : 'Exclusive Representation'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <span className="font-semibold text-corporate-red">{language === 'es' ? 'Acoplamientos Rexnord' : 'Rexnord Couplings'}</span> {language === 'es' ? 'Originales' : 'Original'}
                </h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>{language === 'es' 
                    ? <>Como <strong>representantes exclusivos de Rexnord</strong>, SERVIN Ingeniería ofrece la línea completa de acoplamientos industriales para transmisión de potencia en aplicaciones críticas.</>
                    : <>As <strong>exclusive Rexnord representatives</strong>, SERVIN Engineering offers the complete line of industrial couplings for power transmission in critical applications.</>}</p>
                  <p>{language === 'es' 
                    ? <>Los acoplamientos Rexnord están diseñados para operar con <strong>máxima confiabilidad</strong> en condiciones severas, cubriendo un amplio rango de potencias según modelo y aplicación.</>
                    : <>Rexnord couplings are designed to operate with <strong>maximum reliability</strong> under severe conditions, covering a wide power range depending on model and application.</>}</p>
                  <p>{language === 'es' ? <>SERVIN Ingeniería brinda <strong>soporte técnico especializado</strong> en:</> : <>SERVIN Engineering provides <strong>specialized technical support</strong> in:</>}</p>
                  <ul className="list-disc list-inside text-sm sm:text-sm sm:text-base text-gray-600 ml-4">
                    <li>{language === 'es' ? 'selección de producto' : 'product selection'}</li>
                    <li>{language === 'es' ? 'análisis de aplicación' : 'application analysis'}</li>
                    <li>{language === 'es' ? 'provisión de repuestos originales' : 'original spare parts supply'}</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://es.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/omega-hotspots.jpg?lang=es-mx&ext=.jpg"
                  alt="Acoplamientos Rexnord Industriales"
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-xl border border-gray-200">
                    <div className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-1 sm:mb-2">6</div>
                    <div className="text-xs sm:text-xs sm:text-sm text-gray-600">{language === 'es' ? 'líneas de productos Rexnord' : 'Rexnord product lines'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-xl border border-gray-200">
                    <div className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-red mb-1 sm:mb-2">100%</div>
                    <div className="text-xs sm:text-xs sm:text-sm text-gray-600">{language === 'es' ? 'productos originales certificados' : 'certified original products'}</div>
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
                <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Catálogo Rexnord' : 'Rexnord Catalog'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Líneas de' : 'Product'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Productos' : 'Lines'}</span>
              </h3>
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Soluciones de acoplamientos industriales diseñadas para una transmisión de potencia confiable en equipos rotativos críticos.'
                    : 'Industrial coupling solutions designed for reliable power transmission in critical rotating equipment.'}
                </p>
                <p className="text-sm sm:text-sm sm:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                  
                  <h4 className="text-lg sm:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {acoplamiento.nombre}
                  </h4>
                  
                  <p className="text-sm sm:text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {acoplamiento.descripcion}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2 text-[10px] sm:text-xs uppercase tracking-wide">{language === 'es' ? 'Características clave' : 'Key Features'}</h5>
                    <ul className="space-y-1">
                      {acoplamiento.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600">
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
                      className="w-full py-2 px-4 bg-corporate-red text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md hover:shadow-lg text-center"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {language === 'es' ? 'Ver Detalle Técnico' : 'View Technical Details'}
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full py-2 px-4 border border-corporate-red text-corporate-red text-xs sm:text-sm font-medium rounded-lg hover:bg-corporate-red hover:text-white transition-colors duration-300 text-center"
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
                <span className="text-gray-700 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Sectores Atendidos' : 'Industries Served'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Aplicaciones' : 'Industrial'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Industriales' : 'Applications'}</span>
              </h3>
              <p className="text-base sm:text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                    <h4 className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                    <h4 className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                    <h4 className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                    <h4 className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                    <h4 className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                    <h4 className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                <p className="text-gray-700 text-base sm:text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? <>SERVIN Ingeniería acompaña a sus clientes en la <strong>selección técnica de acoplamientos</strong>, actuando como nexo entre la aplicación real y la solución Rexnord más adecuada.</>
                    : <>SERVIN Engineering accompanies its clients in the <strong>technical selection of couplings</strong>, acting as a link between the actual application and the most suitable Rexnord solution.</>}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO FINAL */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" 
          style={{
            background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
          }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-7xl mx-auto">
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería de Aplicación' : 'Application Engineering'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>¿Necesita asesoramiento especializado <span className="block font-bold mt-2">en acoplamientos industriales?</span></>
                  : <>Need specialized advice <span className="block font-bold mt-2">on industrial couplings?</span></>}
              </h2>
              
              <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Nuestro equipo lo asesora en la selección, provisión y soporte técnico de acoplamientos Rexnord.'
                  : 'Our team advises you on the selection, supply and technical support of Rexnord couplings.'}
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
                  to="/services/ingenieria-materiales"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base sm:text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  {language === 'es' ? 'Ver Ingeniería de Materiales' : 'View Materials Engineering'}
                </Link>
              </div>
              
              <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                  <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                  <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia en transmisión' : 'Transmission experience'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                  <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>✓ Rexnord</div>
                  <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Representante oficial' : 'Official representative'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                  <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</div>
                  <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería + Provisión' : 'Engineering + Supply'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default AcoplamientosRexnord;