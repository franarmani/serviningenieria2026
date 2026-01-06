import React, { createContext, useContext, useState, useEffect } from 'react';

// Traducciones del sitio
const translations = {
  es: {
    // Header
    inicio: 'Inicio',
    empresa: 'Empresa',
    servicios: 'Servicios',
    novedades: 'Novedades',
    contacto: 'Contacto',
    contactar: 'Contactar',
    
    // Servicios Menu
    ingenieriaMateriales: 'Ingeniería de Materiales',
    stockPermanente: 'Stock permanente y entrega rápida',
    acoplamientosRexnord: 'Acoplamientos Rexnord',
    acoplamientosDesc: 'Omega, Viva, Addax, Thomas y Euroflex',
    reductoresFalk: 'Reductores Falk CT-Series',
    reductoresDesc: 'Torres de enfriamiento + Addax',
    accesoriosCaneria: 'Accesorios para Cañerías',
    accesoriosDesc: 'Codos, tees, reducciones - ASME',
    valvulasIndustriales: 'Válvulas Industriales',
    valvulasDesc: 'Compuerta, globo, retención, mariposa',
    plantaMantenimiento: 'Planta de Mantenimiento Industrial',
    plantaDesc: 'Infraestructura especializada 2,639 m²',
    laboratorioMovil: 'Laboratorio Móvil',
    laboratorioDesc: 'Servicios técnicos en campo',
    calibracionInSitu: 'PREVENTEST – Calibración In Situ',
    calibracionDesc: 'Tecnología móvil de precisión',
    inspeccionTanques: 'Inspección de Tanques API & END',
    inspeccionDesc: 'Certificaciones internacionales',
    revestimientoTanques: 'Revestimiento de Tanques',
    revestimientoDesc: 'División en desarrollo',
    cabinasGranallado: 'Cabinas de Granallado',
    cabinasDesc: 'Disponible 2026',
    proximamente: 'Próximamente',
    
    // Home Page
    liderIngenieria: 'Líder en Ingeniería Industrial',
    soluciones: 'Soluciones técnicas especializadas respaldadas por',
    anosExperiencia: 'años de experiencia',
    certificaciones: 'certificaciones internacionales',
    tecnologiaVanguardia: 'y tecnología de vanguardia.',
    comenzarAhora: 'Comenzar Ahora',
    conocerMas: 'Conocer Más',
    holaSomos: 'HOLA! SOMOS',
    aboutDesc: 'es una empresa líder en servicios especializados para empresas. Con casi',
    decadasExperiencia: '5 décadas de experiencia',
    nosDestacamos: ', nos destacamos por nuestro compromiso con la',
    excelenciaSatisfaccion: 'excelencia y la satisfacción del cliente',
    dedicacion: '. Nuestra dedicación se refleja en un crecimiento constante y en el reconocimiento de más de',
    empresasConfian: '400 empresas que confían en nosotros',
    compromiso: '. En Servin Ingeniería, nos comprometemos a seguir aportando soluciones innovadoras y a mantenernos como referentes en el mercado.',
    anosExperienciaLabel: 'Años de Experiencia',
    divisionesServicios: 'Divisiones de Servicios',
    instalacionesPropias: 'm² de Instalaciones Propias',
    clientes: 'Clientes',
    nuestrasDivisiones: 'Nuestras Divisiones',
    serviciosIngenieria: 'Servicios de Ingeniería',
    especializados: 'Especializados',
    
    // About Page
    quienesSomos: 'Quiénes Somos',
    nuestraHistoria: 'Nuestra Historia',
    misionVision: 'Misión y Visión',
    excelenciaTecnica: 'Excelencia Técnica',
    excelenciaTecnicaDesc: 'Procesos certificados ISO, personal especializado y equipamiento de última generación para resultados superiores.',
    
    // Services Page
    sieteDivisiones: 'Siete Divisiones Especializadas',
    nuestrosServicios: 'NUESTROS SERVICIOS',
    serviciosDesc: '46 años de experiencia organizados en siete divisiones especializadas para cubrir todas las necesidades de mantenimiento, inspección y suministro industrial con los más altos estándares de calidad.',
    divisionesActivas: 'Divisiones Activas',
    divisionesDesarrollo: 'Divisiones en Desarrollo',
    
    // Contact Page
    contactenosTitle: 'Contáctenos',
    formularioContacto: 'Formulario de Contacto',
    nombre: 'Nombre',
    nombreCompleto: 'Nombre completo',
    empresaLabel: 'Empresa',
    nombreEmpresa: 'Nombre de la empresa',
    emailLabel: 'Email',
    emailPlaceholder: 'correo@empresa.com',
    telefonoLabel: 'Teléfono',
    telefonoPlaceholder: '+54 9 XXX XXX-XXXX',
    servicioInteres: 'Servicio de interés',
    seleccioneServicio: 'Seleccione un servicio',
    presupuesto: 'Presupuesto estimado',
    seleccioneRango: 'Seleccione un rango',
    mensaje: 'Mensaje',
    mensajePlaceholder: 'Describa brevemente su consulta o requerimiento...',
    enviarConsulta: 'Enviar Consulta',
    enviando: 'Enviando...',
    consultaRecibida: '¡Consulta recibida exitosamente! Nuestro equipo se contactará con usted dentro de 24 horas.',
    casaMatriz: 'Casa Matriz Bahía Blanca',
    sucursalNeuquen: 'Sucursal Neuquén',
    sucursalBuenosAires: 'Sucursal Buenos Aires',
    horario: 'Horario',
    zonaNorte: 'Zona Norte',
    zonaCentro: 'Zona Centro',
    zonaSur: 'Zona Sur',
    administracion: 'Administración',
    responsableRegional: 'Responsable Regional',
    consultasGenerales: 'Consultas Generales',
    consultasComerciales: 'Consultas Comerciales',
    propuestasTecnicas: 'Propuestas Técnicas',
    cotizacionesDetalladas: 'Cotizaciones Detalladas',
    emergenciasTecnicas: 'Emergencias Técnicas',
    horas: 'horas',
    inmediato: 'Inmediato 24/7',
    
    // Válvulas
    catalogoValvulas: 'Catálogo de Válvulas Industriales',
    filtrarCategoria: 'Filtrar por categoría',
    buscarValvula: 'Buscar válvula...',
    todasCategorias: 'Todas las categorías',
    verDetalles: 'Ver detalles',
    especificaciones: 'Especificaciones',
    caracteristicas: 'Características',
    aplicaciones: 'Aplicaciones',
    normas: 'Normas',
    documentos: 'Documentos',
    descargarCatalogo: 'Descargar catálogo',
    solicitarCotizacion: 'Solicitar cotización',
    
    // Footer
    derechosReservados: 'Todos los derechos reservados',
    divisiones: 'Divisiones',
    enlaces: 'Enlaces',
    acercaNosotros: 'Acerca de Nosotros',
    footerDesc: 'Más de 40 años ofreciendo soluciones técnicas especializadas para la industria pesada argentina.',
    footerDesc2: 'Divisiones técnicas especializadas en mantenimiento industrial, inspección API y provisión de materiales.',
    slogan: 'Una empresa de servicios al servicio de las empresas',
    
    // General
    verMas: 'Ver más',
    contactanos: 'Contáctanos',
    enviar: 'Enviar',
    cargando: 'Cargando...',
    verTodos: 'Ver todos los servicios',
    explorar: 'Explorar',
    
    // Clientes
    clientesTitle: 'Nuestros Clientes',
    clientesSubtitle: 'Empresas líderes que confían en nosotros',
    clientesDesc: 'Más de 400 empresas de diversos sectores industriales confían en Servin Ingeniería para sus necesidades de mantenimiento, inspección y suministro.',
    clientesPrincipales: 'Clientes Principales',
    distribucionSectorial: 'Distribución Sectorial',
    petroleoGas: 'Petróleo y Gas',
    petroquimica: 'Petroquímica',
    energia: 'Energía',
    siderurgiaMineria: 'Siderurgia y Minería',
    refineriaExploracion: 'Refinería, exploración y distribución',
    complejosQuimicos: 'Complejos petroquímicos y químicos',
    generacionElectrica: 'Generación y distribución eléctrica',
    plantasIndustriales: 'Plantas industriales y mineras',
    serviciosOfrecidos: 'Servicios ofrecidos',
    
    // Novedades
    novedadesTitle: 'Novedades',
    novedadesSubtitle: 'y Proyectos',
    novedadesDesc: 'Manténgase informado sobre nuestros últimos proyectos, avances técnicos y comunicaciones corporativas.',
    publicaciones: 'Publicaciones',
    categorias: 'Categorías',
    anoActivo: 'Año Activo',
    todos: 'Todos',
    proyectos: 'Proyectos',
    mantenimiento: 'Mantenimiento',
    inspeccionAPI: 'Inspección API',
    obrasCiviles: 'Obras Civiles',
    certificacionesLabel: 'Certificaciones',
    mantIndustrial: 'Mant. Industrial',
    mantInSitu: 'Mant. In Situ',
    empresaLabel2: 'Empresa',
    servinConstrucciones: 'Servin Construcciones',
    noPublicaciones: 'No hay publicaciones en esta categoría',
    leerMas: 'Leer más',
    destacado: 'Destacado',
    galeriaNoticias: 'Galería de Noticias',
  },
  en: {
    // Header
    inicio: 'Home',
    empresa: 'About',
    servicios: 'Services',
    novedades: 'News',
    contacto: 'Contact',
    contactar: 'Contact',
    
    // Services Menu
    ingenieriaMateriales: 'Materials Engineering',
    stockPermanente: 'Permanent stock and fast delivery',
    acoplamientosRexnord: 'Rexnord Couplings',
    acoplamientosDesc: 'Omega, Viva, Addax, Thomas and Euroflex',
    reductoresFalk: 'Falk CT-Series Reducers',
    reductoresDesc: 'Cooling towers + Addax',
    accesoriosCaneria: 'Pipe Fittings',
    accesoriosDesc: 'Elbows, tees, reducers - ASME',
    valvulasIndustriales: 'Industrial Valves',
    valvulasDesc: 'Gate, globe, check, butterfly',
    plantaMantenimiento: 'Industrial Maintenance Plant',
    plantaDesc: 'Specialized infrastructure 2,639 m²',
    laboratorioMovil: 'Mobile Laboratory',
    laboratorioDesc: 'Field technical services',
    calibracionInSitu: 'PREVENTEST – In-Situ Calibration',
    calibracionDesc: 'Precision mobile technology',
    inspeccionTanques: 'API Tank Inspection & NDT',
    inspeccionDesc: 'International certifications',
    revestimientoTanques: 'Tank Coating',
    revestimientoDesc: 'Division in development',
    cabinasGranallado: 'Shot Blasting Booths',
    cabinasDesc: 'Available 2026',
    proximamente: 'Coming Soon',
    
    // Home Page
    liderIngenieria: 'Leader in Industrial Engineering',
    soluciones: 'Specialized technical solutions backed by',
    anosExperiencia: 'years of experience',
    certificaciones: 'international certifications',
    tecnologiaVanguardia: 'and cutting-edge technology.',
    comenzarAhora: 'Get Started',
    conocerMas: 'Learn More',
    holaSomos: 'HELLO! WE ARE',
    aboutDesc: 'is a leading company in specialized services for businesses. With nearly',
    decadasExperiencia: '5 decades of experience',
    nosDestacamos: ', we stand out for our commitment to',
    excelenciaSatisfaccion: 'excellence and customer satisfaction',
    dedicacion: '. Our dedication is reflected in constant growth and recognition from more than',
    empresasConfian: '400 companies that trust us',
    compromiso: '. At Servin Ingeniería, we are committed to continuing to provide innovative solutions and remain as market leaders.',
    anosExperienciaLabel: 'Years of Experience',
    divisionesServicios: 'Service Divisions',
    instalacionesPropias: 'm² of Own Facilities',
    clientes: 'Clients',
    nuestrasDivisiones: 'Our Divisions',
    serviciosIngenieria: 'Engineering Services',
    especializados: 'Specialized',
    
    // About Page
    quienesSomos: 'About Us',
    nuestraHistoria: 'Our History',
    misionVision: 'Mission and Vision',
    excelenciaTecnica: 'Technical Excellence',
    excelenciaTecnicaDesc: 'ISO certified processes, specialized personnel and state-of-the-art equipment for superior results.',
    
    // Services Page
    sieteDivisiones: 'Seven Specialized Divisions',
    nuestrosServicios: 'OUR SERVICES',
    serviciosDesc: '46 years of experience organized into seven specialized divisions to cover all maintenance, inspection and industrial supply needs with the highest quality standards.',
    divisionesActivas: 'Active Divisions',
    divisionesDesarrollo: 'Divisions in Development',
    
    // Contact Page
    contactenosTitle: 'Contact Us',
    formularioContacto: 'Contact Form',
    nombre: 'Name',
    nombreCompleto: 'Full name',
    empresaLabel: 'Company',
    nombreEmpresa: 'Company name',
    emailLabel: 'Email',
    emailPlaceholder: 'email@company.com',
    telefonoLabel: 'Phone',
    telefonoPlaceholder: '+1 XXX XXX-XXXX',
    servicioInteres: 'Service of interest',
    seleccioneServicio: 'Select a service',
    presupuesto: 'Estimated budget',
    seleccioneRango: 'Select a range',
    mensaje: 'Message',
    mensajePlaceholder: 'Briefly describe your inquiry or requirement...',
    enviarConsulta: 'Send Inquiry',
    enviando: 'Sending...',
    consultaRecibida: 'Inquiry received successfully! Our team will contact you within 24 hours.',
    casaMatriz: 'Bahía Blanca Headquarters',
    sucursalNeuquen: 'Neuquén Branch',
    sucursalBuenosAires: 'Buenos Aires Branch',
    horario: 'Hours',
    zonaNorte: 'North Zone',
    zonaCentro: 'Central Zone',
    zonaSur: 'South Zone',
    administracion: 'Administration',
    responsableRegional: 'Regional Manager',
    consultasGenerales: 'General Inquiries',
    consultasComerciales: 'Commercial Inquiries',
    propuestasTecnicas: 'Technical Proposals',
    cotizacionesDetalladas: 'Detailed Quotes',
    emergenciasTecnicas: 'Technical Emergencies',
    horas: 'hours',
    inmediato: 'Immediate 24/7',
    
    // Valves
    catalogoValvulas: 'Industrial Valves Catalog',
    filtrarCategoria: 'Filter by category',
    buscarValvula: 'Search valve...',
    todasCategorias: 'All categories',
    verDetalles: 'View details',
    especificaciones: 'Specifications',
    caracteristicas: 'Features',
    aplicaciones: 'Applications',
    normas: 'Standards',
    documentos: 'Documents',
    descargarCatalogo: 'Download catalog',
    solicitarCotizacion: 'Request quote',
    
    // Footer
    derechosReservados: 'All rights reserved',
    divisiones: 'Divisions',
    enlaces: 'Links',
    acercaNosotros: 'About Us',
    footerDesc: 'Over 40 years providing specialized technical solutions for Argentine heavy industry.',
    footerDesc2: 'Technical divisions specialized in industrial maintenance, API inspection and materials supply.',
    slogan: 'A service company at the service of companies',
    
    // General
    verMas: 'See more',
    contactanos: 'Contact us',
    enviar: 'Send',
    cargando: 'Loading...',
    verTodos: 'View all services',
    explorar: 'Explore',
    
    // Clients
    clientesTitle: 'Our Clients',
    clientesSubtitle: 'Leading companies that trust us',
    clientesDesc: 'Over 400 companies from various industrial sectors trust Servin Ingeniería for their maintenance, inspection and supply needs.',
    clientesPrincipales: 'Main Clients',
    distribucionSectorial: 'Sector Distribution',
    petroleoGas: 'Oil and Gas',
    petroquimica: 'Petrochemical',
    energia: 'Energy',
    siderurgiaMineria: 'Steel and Mining',
    refineriaExploracion: 'Refinery, exploration and distribution',
    complejosQuimicos: 'Petrochemical and chemical complexes',
    generacionElectrica: 'Power generation and distribution',
    plantasIndustriales: 'Industrial and mining plants',
    serviciosOfrecidos: 'Services offered',
    
    // News
    novedadesTitle: 'News',
    novedadesSubtitle: 'and Projects',
    novedadesDesc: 'Stay informed about our latest projects, technical advances and corporate communications.',
    publicaciones: 'Publications',
    categorias: 'Categories',
    anoActivo: 'Active Year',
    todos: 'All',
    proyectos: 'Projects',
    mantenimiento: 'Maintenance',
    inspeccionAPI: 'API Inspection',
    obrasCiviles: 'Civil Works',
    certificacionesLabel: 'Certifications',
    mantIndustrial: 'Industrial Maint.',
    mantInSitu: 'On-Site Maint.',
    empresaLabel2: 'Company',
    servinConstrucciones: 'Servin Construction',
    noPublicaciones: 'No publications in this category',
    leerMas: 'Read more',
    destacado: 'Featured',
    galeriaNoticias: 'News Gallery',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Obtener idioma guardado o usar español por defecto
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('servin-language');
    return saved || 'es';
  });

  // Guardar idioma en localStorage
  useEffect(() => {
    localStorage.setItem('servin-language', language);
  }, [language]);

  // Función para obtener traducción
  const t = (key) => {
    return translations[language]?.[key] || translations['es'][key] || key;
  };

  // Función para cambiar idioma
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  // Función para obtener el campo correcto según idioma
  const getLocalizedField = (item, fieldName) => {
    if (language === 'es') {
      return item[`${fieldName}_es`] || item[fieldName] || '';
    }
    return item[fieldName] || '';
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    getLocalizedField,
    isSpanish: language === 'es',
    isEnglish: language === 'en',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
