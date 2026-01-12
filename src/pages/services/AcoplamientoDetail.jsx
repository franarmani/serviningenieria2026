import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { useLanguage } from '../../context/LanguageContext';

const AcoplamientoDetail = () => {
  const { language } = useLanguage();
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Mapping for specification keys translation
  const specKeyTranslations = {
    potencia: language === 'es' ? 'Potencia' : 'Power',
    diametroEje: language === 'es' ? 'Diámetro de Eje' : 'Shaft Diameter',
    velocidad: language === 'es' ? 'Velocidad' : 'Speed',
    temperatura: language === 'es' ? 'Temperatura' : 'Temperature',
    desalineacionAngular: language === 'es' ? 'Desalineación Angular' : 'Angular Misalignment',
    desalineacionParalela: language === 'es' ? 'Desalineación Paralela' : 'Parallel Misalignment',
    desalineacionRadial: language === 'es' ? 'Desalineación Radial' : 'Radial Misalignment',
    torque: 'Torque',
    resistenciaQuimica: language === 'es' ? 'Resistencia Química' : 'Chemical Resistance',
    factorServicio: language === 'es' ? 'Factor de Servicio' : 'Service Factor',
    precision: language === 'es' ? 'Precisión' : 'Precision',
    inercia: language === 'es' ? 'Inercia' : 'Inertia',
    rigidezTorsional: language === 'es' ? 'Rigidez Torsional' : 'Torsional Rigidity',
    rigidez: language === 'es' ? 'Rigidez' : 'Rigidity',
    absorcionChoque: language === 'es' ? 'Absorción de Choque' : 'Shock Absorption',
    vidaUtil: language === 'es' ? 'Vida Útil' : 'Service Life',
    mantenimiento: language === 'es' ? 'Mantenimiento' : 'Maintenance',
    runout: 'Runout',
    resistenciaImpacto: language === 'es' ? 'Resistencia a Impacto' : 'Impact Resistance',
    compatibilidad: language === 'es' ? 'Compatibilidad' : 'Compatibility',
    stock: 'Stock',
    garantia: language === 'es' ? 'Garantía' : 'Warranty',
    calidad: language === 'es' ? 'Calidad' : 'Quality',
    disponibilidad: language === 'es' ? 'Disponibilidad' : 'Availability',
    soporte: language === 'es' ? 'Soporte' : 'Support'
  };

  const acoplamientosData = {
    'omega-elastomeric': {
      nombre: "Omega Elastomeric Couplings",
      tipo: language === 'es' ? "Acoplamientos Elastoméricos" : "Elastomeric Couplings",
      descripcion: language === 'es' 
        ? "Acoplamientos elastoméricos bipartidos diseñados para transmisión de potencia confiable en aplicaciones industriales generales. Permiten absorber vibraciones, compensar desalineaciones y realizar instalaciones rápidas sin desmontar equipos."
        : "Two-piece elastomeric couplings designed for reliable power transmission in general industrial applications. They absorb vibrations, compensate for misalignment and allow quick installation without dismounting equipment.",
      imagen: "/acoplamientos/omega-elastomeric.jpg",
      caracteristicas: language === 'es' 
        ? ["Alta absorción de vibraciones y choques", "Compensación de desalineaciones angular, paralela y axial", "Elemento flexible de uretano de larga duración", "Instalación sin desmontaje de equipos", "Bajo mantenimiento operativo", "Resistencia a ambientes industriales"]
        : ["High vibration and shock absorption", "Angular, parallel and axial misalignment compensation", "Long-lasting urethane flexible element", "Installation without dismounting equipment", "Low operational maintenance", "Resistance to industrial environments"],
      aplicaciones: language === 'es' 
        ? ["Bombas centrífugas y de proceso", "Ventiladores y extractores industriales", "Compresores de aire y gas", "Equipos auxiliares de plantas", "Maquinaria textil y alimentaria", "Sistemas de transporte y manejo"]
        : ["Centrifugal and process pumps", "Industrial fans and extractors", "Air and gas compressors", "Plant auxiliary equipment", "Textile and food machinery", "Material handling systems"],
      especificaciones: {
        potencia: "1 HP - 3,000 HP",
        diametroEje: "14 mm - 200 mm",
        velocidad: language === 'es' ? "Hasta 3,600 RPM" : "Up to 3,600 RPM",
        temperatura: "-40°C a +80°C",
        desalineacionAngular: language === 'es' ? "Hasta 1.5°" : "Up to 1.5°",
        desalineacionParalela: language === 'es' ? "Hasta 3 mm" : "Up to 3 mm"
      },
      ventajas: language === 'es' 
        ? "El elemento flexible de uretano de alta calidad absorbe eficientemente choques y vibraciones, extendiendo significativamente la vida útil de rodamientos y sellos en equipos conectados."
        : "The high-quality urethane flexible element efficiently absorbs shocks and vibrations, significantly extending bearing and seal life in connected equipment.",
      aplicacionDetalle: language === 'es' 
        ? "Especialmente recomendado para equipos con desalineaciones moderadas y aplicaciones donde se requiere arranque suave y operación silenciosa."
        : "Especially recommended for equipment with moderate misalignments and applications requiring soft start and quiet operation."
    },
    'viva-elastomeric': {
      nombre: "Viva Elastomeric Couplings",
      tipo: language === 'es' ? "Acoplamientos Elastoméricos Compactos" : "Compact Elastomeric Couplings", 
      descripcion: language === 'es' 
        ? "Acoplamientos elastoméricos compactos de alto torque, ideales para aplicaciones con restricciones dimensionales. Ofrecen excelente relación potencia/tamaño y mayor capacidad de transmisión en espacios reducidos."
        : "High-torque compact elastomeric couplings, ideal for applications with dimensional restrictions. They offer excellent power/size ratio and greater transmission capacity in tight spaces.",
      imagen: "/acoplamientos/viva-elastomeric.jpg",
      caracteristicas: language === 'es' 
        ? ["Diseño compacto optimizado", "Alto torque en espacios reducidos", "Resistencia química superior", "Construcción robusta y confiable", "Larga vida útil en servicio", "Fácil instalación y mantenimiento"]
        : ["Optimized compact design", "High torque in tight spaces", "Superior chemical resistance", "Robust and reliable construction", "Long service life", "Easy installation and maintenance"],
      aplicaciones: language === 'es' 
        ? ["Bombas sumergibles y de pozo profundo", "Motores en espacios confinados", "Equipos marinos y navales", "Aplicaciones químicas y petroquímicas", "Maquinaria de minería subterránea", "Sistemas hidráulicos móviles"]
        : ["Submersible and deep well pumps", "Motors in confined spaces", "Marine and naval equipment", "Chemical and petrochemical applications", "Underground mining machinery", "Mobile hydraulic systems"],
      especificaciones: {
        torque: "50 Nm - 8,000 Nm",
        diametroEje: "10 mm - 150 mm",
        velocidad: language === 'es' ? "Hasta 4,500 RPM" : "Up to 4,500 RPM",
        temperatura: "-20°C a +80°C",
        resistenciaQuimica: language === 'es' ? "Excelente" : "Excellent",
        factorServicio: language === 'es' ? "Hasta 2.0" : "Up to 2.0"
      },
      ventajas: language === 'es' 
        ? "Construcción robusta que resiste ambientes corrosivos y temperaturas extremas, ideal para aplicaciones en espacios confinados donde otros acoplamientos no pueden instalarse."
        : "Robust construction that withstands corrosive environments and extreme temperatures, ideal for confined space applications where other couplings cannot be installed.",
      aplicacionDetalle: language === 'es' 
        ? "Ideal para industria química, petroquímica y aplicaciones offshore donde el espacio es limitado y se requiere resistencia a ambientes agresivos."
        : "Ideal for chemical, petrochemical and offshore applications where space is limited and resistance to aggressive environments is required."
    },
    'disc-pack': {
      nombre: "Disc Pack Couplings",
      tipo: language === 'es' ? "Acoplamiento Flexible Metálico" : "Metal Flexible Coupling",
      descripcion: language === 'es' 
        ? "Acoplamientos flexibles metálicos sin mantenimiento para aplicaciones de alta precisión, velocidad y temperatura."
        : "Maintenance-free metallic flexible couplings for high precision, speed and temperature applications.",
      imagen: "/acoplamientos/composite-disc.jpg",
      caracteristicas: language === 'es' 
        ? ["Cero mantenimiento durante la vida útil", "Construcción totalmente metálica", "Alta precisión y repetibilidad", "Resistencia a temperaturas extremas", "Larga vida libre de fallas", "Respuesta dinámica excepcional"]
        : ["Zero maintenance throughout service life", "All-metal construction", "High precision and repeatability", "Extreme temperature resistance", "Long failure-free life", "Exceptional dynamic response"],
      aplicaciones: language === 'es' 
        ? ["Turbinas de gas y vapor", "Equipos de alta velocidad", "Aplicaciones aeroespaciales", "Máquinas herramienta CNC", "Equipos de instrumentación", "Sistemas de control de precisión"]
        : ["Gas and steam turbines", "High-speed equipment", "Aerospace applications", "CNC machine tools", "Instrumentation equipment", "Precision control systems"],
      especificaciones: {
        velocidad: language === 'es' ? "Hasta 100,000 RPM" : "Up to 100,000 RPM",
        torque: "0.5 Nm - 50,000 Nm",
        temperatura: "-200°C a +400°C",
        precision: "±0.0002 pulgadas TIR",
        inercia: language === 'es' ? "Muy baja" : "Very low",
        rigidezTorsional: language === 'es' ? "Muy alta" : "Very high"
      },
      ventajas: language === 'es' 
        ? "Sin elementos de desgaste, operación libre de mantenimiento y alta resistencia a temperaturas extremas. Ideal para aplicaciones críticas donde la confiabilidad es fundamental."
        : "No wear elements, maintenance-free operation and high resistance to extreme temperatures. Ideal for critical applications where reliability is essential.",
      aplicacionDetalle: language === 'es' 
        ? "Crítico en aplicaciones aeroespaciales, turbomaquinaria y equipos de alta velocidad donde la confiabilidad operacional es absolutamente fundamental."
        : "Critical in aerospace applications, turbomachinery and high-speed equipment where operational reliability is absolutely essential."
    },
    'flexible-disc': {
      nombre: "Flexible Disc Couplings",
      tipo: language === 'es' ? "Acoplamiento de Disco Flexible" : "Flexible Disc Coupling",
      descripcion: language === 'es' 
        ? "Acoplamientos de disco flexible de acero inoxidable para alta flexibilidad torsional y compensación multidireccional."
        : "Stainless steel flexible disc couplings for high torsional flexibility and multidirectional compensation.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Disc%20Couplings/Euroflex%20Disc%20Couplings/img_euroflexDiscCoupling_thumbnail.jpg?ext=.jpg",
      caracteristicas: language === 'es' 
        ? ["Flexibilidad torsional optimizada", "Compensación en múltiples planos", "Construcción en acero inoxidable", "Respuesta dinámica superior", "Baja inercia rotacional", "Alta resistencia a la fatiga"]
        : ["Optimized torsional flexibility", "Multi-plane compensation", "Stainless steel construction", "Superior dynamic response", "Low rotational inertia", "High fatigue resistance"],
      aplicaciones: language === 'es' 
        ? ["Máquinas herramienta de precisión", "Equipos médicos especializados", "Instrumentación de laboratorio", "Robótica industrial avanzada", "Sistemas servo de alta precisión", "Equipos de automatización"]
        : ["Precision machine tools", "Specialized medical equipment", "Laboratory instrumentation", "Advanced industrial robotics", "High-precision servo systems", "Automation equipment"],
      especificaciones: {
        desalineacionAngular: language === 'es' ? "Hasta 1.5°" : "Up to 1.5°",
        desalineacionRadial: language === 'es' ? "Hasta 5 mm" : "Up to 5 mm",
        torque: "1 Nm - 5,000 Nm",
        velocidad: language === 'es' ? "Hasta 15,000 RPM" : "Up to 15,000 RPM",
        inercia: language === 'es' ? "Muy baja" : "Very low",
        rigidez: language === 'es' ? "Variable por diseño" : "Variable by design"
      },
      ventajas: language === 'es' 
        ? "Baja inercia y alta respuesta dinámica, ideal para aplicaciones de servo control y posicionamiento preciso donde la exactitud es crítica."
        : "Low inertia and high dynamic response, ideal for servo control and precise positioning applications where accuracy is critical.",
      aplicacionDetalle: language === 'es' 
        ? "Esencial en máquinas CNC, equipos médicos de precisión y sistemas de control de movimiento donde se requiere máxima exactitud posicional."
        : "Essential in CNC machines, precision medical equipment and motion control systems requiring maximum positional accuracy."
    },
    'gear': {
      nombre: "Gear Couplings",
      tipo: language === 'es' ? "Acoplamiento Engranado" : "Gear Coupling",
      descripcion: language === 'es' 
        ? "Acoplamientos engranados para transmisión de alta potencia con excelente capacidad de compensación de desalineaciones."
        : "Gear couplings for high power transmission with excellent misalignment compensation capability.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Omega/img_omegaCoupling_thumbnail.png?ext=.png",
      caracteristicas: language === 'es' 
        ? ["Capacidad de alta potencia", "Excelente compensación de desalineaciones", "Diseño robusto para servicio pesado", "Múltiples configuraciones disponibles", "Larga vida en aplicaciones severas", "Mantenimiento programado predictivo"]
        : ["High power capacity", "Excellent misalignment compensation", "Robust design for heavy service", "Multiple configurations available", "Long life in severe applications", "Predictive scheduled maintenance"],
      aplicaciones: language === 'es' 
        ? ["Molinos de cemento y minerales", "Equipos de minería pesada", "Laminadores de acero", "Turbomaquinaria industrial", "Equipos de refinería", "Maquinaria de papel y pulpa"]
        : ["Cement and mineral mills", "Heavy mining equipment", "Steel rolling mills", "Industrial turbomachinery", "Refinery equipment", "Pulp and paper machinery"],
      especificaciones: {
        potencia: language === 'es' ? "Hasta 50,000 HP" : "Up to 50,000 HP",
        diametroEje: language === 'es' ? "Hasta 800 mm" : "Up to 800 mm",
        velocidad: language === 'es' ? "Hasta 6,000 RPM" : "Up to 6,000 RPM",
        temperatura: "-40°C a +200°C",
        desalineacionAngular: language === 'es' ? "Hasta 3°" : "Up to 3°",
        torque: language === 'es' ? "Hasta 2,000,000 Nm" : "Up to 2,000,000 Nm"
      },
      ventajas: language === 'es' 
        ? "Capacidad excepcional de compensar desalineaciones significativas mientras transmite altas cargas de torque en aplicaciones industriales severas."
        : "Exceptional capability to compensate for significant misalignments while transmitting high torque loads in severe industrial applications.",
      aplicacionDetalle: language === 'es' 
        ? "Fundamental en industria pesada donde se requiere transmisión de potencia extrema con tolerancia a desalineaciones operacionales significativas."
        : "Essential in heavy industry requiring extreme power transmission with tolerance for significant operational misalignments."
    },
    'grid': {
      nombre: "Grid Couplings",
      tipo: language === 'es' ? "Acoplamiento de Grilla Flexible" : "Flexible Grid Coupling",
      descripcion: language === 'es' 
        ? "Acoplamientos de grilla con elemento flexible de acero para amortiguación de choques y absorción de vibraciones torsionales."
        : "Grid couplings with steel flexible element for shock damping and torsional vibration absorption.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Elastomeric%20Couplings/Viva/img_vivaCoupling_thumbnail.png?ext=.png",
      caracteristicas: language === 'es' 
        ? ["Absorción superior de choques", "Amortiguación eficiente de vibraciones", "Elemento de grilla reemplazable", "Larga vida útil comprobada", "Mantenimiento sencillo y rápido", "Resistencia a cargas cíclicas"]
        : ["Superior shock absorption", "Efficient vibration damping", "Replaceable grid element", "Proven long service life", "Simple and quick maintenance", "Resistance to cyclic loads"],
      aplicaciones: language === 'es' 
        ? ["Trituradoras y molinos", "Equipos de impacto y martillo", "Maquinaria de construcción", "Equipos de minería superficial", "Prensas industriales", "Sistemas de manejo de materiales"]
        : ["Crushers and mills", "Impact and hammer equipment", "Construction machinery", "Surface mining equipment", "Industrial presses", "Material handling systems"],
      especificaciones: {
        potencia: "5 HP - 15,000 HP",
        absorcionChoque: language === 'es' ? "Hasta 200% nominal" : "Up to 200% nominal",
        velocidad: language === 'es' ? "Hasta 3,600 RPM" : "Up to 3,600 RPM",
        temperatura: "-40°C a +150°C",
        factorServicio: language === 'es' ? "Hasta 3.0" : "Up to 3.0",
        vidaUtil: language === 'es' ? "50,000+ horas" : "50,000+ hours"
      },
      ventajas: language === 'es' 
        ? "Elemento de grilla de acero templado que absorbe eficientemente cargas de choque y protege equipos conectados contra sobrecargas súbitas."
        : "Tempered steel grid element that efficiently absorbs shock loads and protects connected equipment from sudden overloads.",
      aplicacionDetalle: language === 'es' 
        ? "Crítico en aplicaciones con cargas cíclicas variables y equipos sujetos a impactos repetitivos donde la protección del sistema es esencial."
        : "Critical in applications with variable cyclic loads and equipment subject to repetitive impacts where system protection is essential."
    },
    'composite-disc': {
      nombre: "Addax Composite Disc Couplings",
      tipo: language === 'es' ? "Acoplamientos de Disco Compuesto" : "Composite Disc Couplings",
      descripcion: language === 'es' 
        ? "Acoplamientos de discos compuestos diseñados para aplicaciones críticas de alta exigencia. Proveen máxima flexibilidad angular y axial, transmisión precisa de torque y operación libre de mantenimiento."
        : "Composite disc couplings designed for high-demand critical applications. They provide maximum angular and axial flexibility, precise torque transmission and maintenance-free operation.",
      imagen: "/acoplamientos/composite-disc.jpg",
      caracteristicas: language === 'es' 
        ? ["Cero mantenimiento", "Máxima flexibilidad", "Resistencia a la fatiga", "Balanceado dinámico", "Construcción libre de lubricación", "Larga vida útil"]
        : ["Zero maintenance", "Maximum flexibility", "Fatigue resistance", "Dynamic balance", "Lubrication-free construction", "Long service life"],
      aplicaciones: language === 'es' 
        ? ["Turbinas", "Generadores", "Compresores centrífugos", "Equipos de alta velocidad", "Aplicaciones críticas", "Maquinaria de precisión"]
        : ["Turbines", "Generators", "Centrifugal compressors", "High-speed equipment", "Critical applications", "Precision machinery"],
      especificaciones: {
        velocidad: language === 'es' ? "Hasta 50,000 RPM" : "Up to 50,000 RPM",
        torque: "10 Nm - 100,000 Nm",
        temperatura: "-50°C a +200°C",
        desalineacionAngular: language === 'es' ? "Hasta 2°" : "Up to 2°",
        desalineacionParalela: language === 'es' ? "Hasta 6 mm" : "Up to 6 mm",
        mantenimiento: language === 'es' ? "Cero" : "Zero"
      },
      ventajas: language === 'es' 
        ? "Discos compuestos que eliminan completamente la necesidad de mantenimiento, ofreciendo máxima flexibilidad y resistencia a la fatiga en aplicaciones críticas."
        : "Composite discs that completely eliminate maintenance needs, offering maximum flexibility and fatigue resistance in critical applications.",
      aplicacionDetalle: language === 'es' 
        ? "Ideal para turbomaquinaria y aplicaciones críticas donde la confiabilidad operacional y el cero mantenimiento son fundamentales."
        : "Ideal for turbomachinery and critical applications where operational reliability and zero maintenance are essential."
    },
    'euroflex-disc': {
      nombre: "Euroflex Disc Couplings",
      tipo: language === 'es' ? "Acoplamientos de Disco Metálico" : "Metal Disc Couplings",
      descripcion: language === 'es' 
        ? "Acoplamientos de disco metálico de precisión europea, desarrollados para aplicaciones donde la rigidez torsional, el bajo runout y la confiabilidad mecánica son críticos para el proceso."
        : "European precision metal disc couplings, developed for applications where torsional rigidity, low runout and mechanical reliability are critical to the process.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Disc%20Couplings/Euroflex%20Disc%20Couplings/img_euroflexDiscCoupling_thumbnail.jpg?ext=.jpg",
      caracteristicas: language === 'es' 
        ? ["Precisión europea", "Bajo runout dinámico", "Alta rigidez torsional", "Construcción modular", "Múltiples discos metálicos", "Diseño balanceado"]
        : ["European precision", "Low dynamic runout", "High torsional rigidity", "Modular construction", "Multiple metal discs", "Balanced design"],
      aplicaciones: language === 'es' 
        ? ["Máquinas herramienta", "Equipos de precisión", "Laminadores", "Sistemas CNC", "Equipos de medición", "Maquinaria europea"]
        : ["Machine tools", "Precision equipment", "Rolling mills", "CNC systems", "Measuring equipment", "European machinery"],
      especificaciones: {
        precision: "±0.0001 pulgadas TIR",
        rigidezTorsional: language === 'es' ? "Muy alta" : "Very high",
        velocidad: language === 'es' ? "Hasta 20,000 RPM" : "Up to 20,000 RPM",
        torque: "5 Nm - 50,000 Nm",
        runout: language === 'es' ? "Mínimo" : "Minimum",
        temperatura: "-30°C a +150°C"
      },
      ventajas: language === 'es' 
        ? "Precisión europea excepcional con múltiples discos metálicos que garantizan alta rigidez torsional y mínimo runout para aplicaciones de máxima precisión."
        : "Exceptional European precision with multiple metal discs ensuring high torsional rigidity and minimum runout for maximum precision applications.",
      aplicacionDetalle: language === 'es' 
        ? "Especialmente diseñado para máquinas herramienta europeas y equipos de precisión donde el runout mínimo y la rigidez torsional son críticos."
        : "Specially designed for European machine tools and precision equipment where minimum runout and torsional rigidity are critical."
    },
    'thomas-xtsr': {
      nombre: "Thomas XTSR Couplings",
      tipo: language === 'es' ? "Acoplamientos para Servicio Pesado" : "Heavy Duty Couplings",
      descripcion: language === 'es' 
        ? "Acoplamientos industriales robustos para transmisiones pesadas y condiciones operativas severas. Diseñados para soportar cargas elevadas, impactos y ciclos exigentes con alta confiabilidad."
        : "Robust industrial couplings for heavy transmissions and severe operating conditions. Designed to withstand high loads, impacts and demanding cycles with high reliability.",
      imagen: "/acoplamientos/thomas-xtsr.jpg",
      caracteristicas: language === 'es' 
        ? ["Construcción robusta", "Servicio pesado", "Alta confiabilidad", "Resistencia a impactos", "Diseño para cargas extremas", "Larga vida útil"]
        : ["Robust construction", "Heavy duty service", "High reliability", "Impact resistance", "Design for extreme loads", "Long service life"],
      aplicaciones: language === 'es' 
        ? ["Molinos de bolas", "Trituradoras", "Equipos mineros", "Maquinaria pesada", "Industria cementera", "Aplicaciones severas"]
        : ["Ball mills", "Crushers", "Mining equipment", "Heavy machinery", "Cement industry", "Severe applications"],
      especificaciones: {
        potencia: language === 'es' ? "Hasta 20,000 HP" : "Up to 20,000 HP",
        torque: language === 'es' ? "Hasta 500,000 Nm" : "Up to 500,000 Nm",
        temperatura: "-40°C a +200°C",
        factorServicio: language === 'es' ? "Hasta 4.0" : "Up to 4.0",
        resistenciaImpacto: language === 'es' ? "Muy alta" : "Very high",
        velocidad: language === 'es' ? "Hasta 2,000 RPM" : "Up to 2,000 RPM"
      },
      ventajas: language === 'es' 
        ? "Construcción extremadamente robusta diseñada específicamente para resistir cargas de impacto y condiciones operativas severas en industria pesada."
        : "Extremely robust construction specifically designed to withstand impact loads and severe operating conditions in heavy industry.",
      aplicacionDetalle: language === 'es' 
        ? "Fundamental en industria minera, cementera y aplicaciones donde se requiere máxima resistencia a impactos y cargas extremas."
        : "Essential in mining, cement and applications requiring maximum impact resistance and extreme loads."
    },
    'parts-kits': {
      nombre: "Elastomeric Coupling Parts & Kits",
      tipo: language === 'es' ? "Repuestos y Kits de Mantenimiento" : "Spare Parts & Maintenance Kits",
      descripcion: language === 'es' 
        ? "Repuestos y kits originales Rexnord para mantenimiento, reparación y reposición de acoplamientos elastoméricos Omega, Viva y Wrapflex. Garantizan compatibilidad, confiabilidad y continuidad operativa."
        : "Original Rexnord spare parts and kits for maintenance, repair and replacement of Omega, Viva and Wrapflex elastomeric couplings. They guarantee compatibility, reliability and operational continuity.",
      imagen: "https://www.rexnord.com/Rexnord/media/Couplings/Coupling%20Parts%20and%20Kits/Elastomeric/Elastomeric.jpg?ext=.jpg",
      caracteristicas: language === 'es' 
        ? ["Repuestos originales", "Kits completos de mantenimiento", "Stock inmediato", "Garantía de calidad", "Compatibilidad garantizada", "Soporte técnico incluido"]
        : ["Original spare parts", "Complete maintenance kits", "Immediate stock", "Quality guarantee", "Guaranteed compatibility", "Technical support included"],
      aplicaciones: language === 'es' 
        ? ["Mantenimiento preventivo", "Reparaciones de emergencia", "Modernizaciones", "Reemplazo programado", "Stock de repuestos", "Servicios de planta"]
        : ["Preventive maintenance", "Emergency repairs", "Modernizations", "Scheduled replacement", "Spare parts stock", "Plant services"],
      especificaciones: {
        compatibilidad: language === 'es' ? "Todas las series Rexnord" : "All Rexnord series",
        stock: language === 'es' ? "Inmediato" : "Immediate",
        garantia: language === 'es' ? "12 meses" : "12 months",
        calidad: "Original Rexnord",
        disponibilidad: "24/7",
        soporte: language === 'es' ? "Técnico especializado" : "Specialized technical"
      },
      ventajas: language === 'es' 
        ? "Repuestos originales Rexnord que garantizan compatibilidad perfecta y máximo rendimiento, con stock inmediato y soporte técnico especializado."
        : "Original Rexnord spare parts guaranteeing perfect compatibility and maximum performance, with immediate stock and specialized technical support.",
      aplicacionDetalle: language === 'es' 
        ? "Esencial para programas de mantenimiento preventivo y reparaciones de emergencia, garantizando mínimo tiempo de parada de planta."
        : "Essential for preventive maintenance programs and emergency repairs, ensuring minimum plant downtime."
    }
  };

  const product = acoplamientosData[id];

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h1 className="text-2xl sm:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Producto' : 'Product'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'No Encontrado' : 'Not Found'}</span>
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'El producto solicitado no está disponible o el enlace es incorrecto.' : 'The requested product is not available or the link is incorrect.'}
              </p>
              <Link 
                to="/materiales/acoplamientos" 
                className="btn-primary"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {language === 'es' ? 'Volver al Catálogo' : 'Back to Catalog'}
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={product.imagen} 
              alt={product.nombre} 
              className="w-full h-full object-cover" 
              style={{filter: 'blur(3px)'}}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 z-10 bg-black/75"></div>

          {/* Content */}
          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-12 lg:py-16 xl:py-20">
            
            {/* Badge */}
            <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
              <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-2 sm:px-4 md:px-6 py-0.5 sm:py-2 md:py-2.5">
                <div className="w-1 sm:w-2 h-1 sm:h-2 bg-corporate-red rounded-full mr-1.5 sm:mr-3 animate-pulse"></div>
                <span className="text-white/90 text-[8px] sm:text-xs md:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Ingeniería de Materiales
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-10 animate-fade-in-up-delay-1 uppercase" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.03em'
            }}>
              {product.nombre.toUpperCase().split(' ').map((word, idx, arr) => (
                idx === arr.length - 1 ? (
                  <span key={idx} className="text-corporate-red">{word}</span>
                ) : (
                  <span key={idx}>{word} </span>
                )
              ))}
            </h1>

            {/* CTA */}
            <div className="animate-fade-in-up-delay-2">
              <Link 
                to={`/contact?subject=${encodeURIComponent(
                  language === 'es'
                    ? `Solicitud de cotización: ${product.nombre}`
                    : `Quote request: ${product.nombre}`
                )}#formulario`}
                className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red transition-colors duration-300"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                <span className="mr-2">{language === 'es' ? 'Solicitar cotización' : 'Request Quote'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </section>

        {/* Especificaciones Técnicas */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 mb-4">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-gray-600 text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Datos Técnicos' : 'Technical Data'}</span>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Especificaciones Técnicas' : 'Technical Specifications'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {product.descripcion}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Especificaciones */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Parámetros Técnicos' : 'Technical Parameters'}
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(product.especificaciones).map(([key, value], index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {specKeyTranslations[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-corporate-red" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ventajas */}
                <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {language === 'es' ? 'Ventajas Principales' : 'Key Advantages'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {product.ventajas}
                  </p>
                </div>
              </div>

              {/* Imagen del producto */}
              <div className="lg:col-span-1">
                <div className="sticky top-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={product.imagen}
                        alt={product.nombre}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {product.nombre}
                      </h4>
                      <span className="inline-block bg-corporate-red/10 text-corporate-red text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium">
                        {product.tipo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Características y Aplicaciones */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Características Técnicas */}
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-full px-3 py-1.5 mb-3">
                    <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                    <span className="text-red-700 text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Características' : 'Features'}</span>
                  </div>
                  <h2 className="text-lg sm:text-base sm:text-lg md:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Características Técnicas' : 'Technical Features'}
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {product.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors group">
                      <div className="flex-shrink-0 w-5 h-5 bg-corporate-red rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed group-hover:text-red-700 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {caracteristica}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aplicaciones Industriales */}
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-full px-3 py-1.5 mb-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                    <span className="text-red-700 text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Aplicaciones' : 'Applications'}</span>
                  </div>
                  <h2 className="text-lg sm:text-base sm:text-lg md:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Aplicaciones Industriales' : 'Industrial Applications'}
                  </h2>
                </div>
                
                <div className="space-y-2 mb-6">
                  {product.aplicaciones.map((aplicacion, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-gray-700 group-hover:text-red-700 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {aplicacion}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {language === 'es' ? 'Aplicación Recomendada' : 'Recommended Application'}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {product.aplicacionDetalle}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Soporte SERVIN */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 mb-3">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-gray-600 text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Valor Agregado' : 'Added Value'}</span>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Soporte SERVIN' : 'SERVIN Support'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Asesoramiento técnico especializado como representantes oficiales de Rexnord' : 'Specialized technical advice as official Rexnord representatives'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              
              <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-corporate-red/20 hover:shadow-sm transition-all">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-corporate-red rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Selección Técnica' : 'Technical Selection'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Asesoramiento para la correcta selección según parámetros operacionales' : 'Guidance for proper selection based on operational parameters'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-corporate-red/20 hover:shadow-sm transition-all">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-corporate-red rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Análisis de Aplicación' : 'Application Analysis'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Evaluación completa de condiciones operativas y ambientes de trabajo' : 'Comprehensive evaluation of operating conditions and work environments'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-corporate-red/20 hover:shadow-sm transition-all">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-corporate-red rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Repuestos y Servicio' : 'Spare Parts & Service'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {language === 'es' ? 'Provisión de repuestos originales y soporte técnico post-venta' : 'Supply of original spare parts and post-sale technical support'}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #E00000 0%, #C80000 50%, #B80000 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-7xl mx-auto">
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería de Aplicación' : 'Application Engineering'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>¿Necesita asesoramiento técnico <span className="block font-bold mt-2">en acoplamientos Rexnord?</span></>
                  : <>Need technical advice <span className="block font-bold mt-2">on Rexnord couplings?</span></>}
              </h2>
              
              <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? <>Como representantes oficiales de Rexnord, ofrecemos <strong className="text-white font-semibold">asesoramiento técnico especializado</strong> para cada aplicación.</>
                  : <>As official Rexnord representatives, we offer <strong className="text-white font-semibold">specialized technical advice</strong> for each application.</>}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
                <Link 
                  to={`/contact?subject=${encodeURIComponent(
                    language === 'es'
                      ? `Solicitud de cotización técnica: Acoplamientos Rexnord (${product.nombre})`
                      : `Technical quote request: Rexnord couplings (${product.nombre})`
                  )}#formulario`}
                  className="btn-primary-light w-full sm:w-auto px-8 sm:px-10 py-4 text-sm sm:text-base md:text-lg"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'es' ? 'Solicitar Cotización Técnica' : 'Request Technical Quote'}
                </Link>
                
                <Link 
                  to="/services/acoplamientos-rexnord"
                  className="btn-secondary-invert w-full sm:w-auto px-8 sm:px-10 py-4 text-sm sm:text-base md:text-lg"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  {language === 'es' ? 'Ver Catálogo Acoplamientos' : 'View Couplings Catalog'}
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
    </Layout>
  );
};

export default AcoplamientoDetail;