// News Manager - Sistema de gestión de novedades usando localStorage

const NEWS_STORAGE_KEY = 'servin_news';
const AUTH_STORAGE_KEY = 'servin_admin_auth';
const NEWS_VERSION_KEY = 'servin_news_version';
const CURRENT_NEWS_VERSION = '2.0'; // Version with bilingual support

// Credenciales de administrador (en producción, usar backend seguro)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'servin2025' // Cambiar en producción
};

// ========== AUTENTICACIÓN ==========

export const loginAdmin = (username, password) => {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    const token = btoa(`${username}:${Date.now()}`);
    localStorage.setItem(AUTH_STORAGE_KEY, token);
    return { success: true, token };
  }
  return { success: false, error: 'Credenciales incorrectas' };
};

export const logoutAdmin = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

export const isAdminAuthenticated = () => {
  return !!localStorage.getItem(AUTH_STORAGE_KEY);
};

// ========== VERSION CHECK ==========

const checkAndMigrateNews = () => {
  const storedVersion = localStorage.getItem(NEWS_VERSION_KEY);
  if (storedVersion !== CURRENT_NEWS_VERSION) {
    // Clear old news data to allow reinitialization with bilingual content
    localStorage.removeItem(NEWS_STORAGE_KEY);
    localStorage.setItem(NEWS_VERSION_KEY, CURRENT_NEWS_VERSION);
    return true;
  }
  return false;
};

// ========== CRUD DE NOVEDADES ==========

const getAllNews = () => {
  const news = localStorage.getItem(NEWS_STORAGE_KEY);
  return news ? JSON.parse(news) : [];
};

const saveNews = (newsArray) => {
  localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(newsArray));
};

export const getPublishedNews = () => {
  return getAllNews()
    .filter(item => item.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getAllNewsAdmin = () => {
  return getAllNews().sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getNewsById = (id) => {
  const allNews = getAllNews();
  return allNews.find(item => item.id === id);
};

export const createNews = (newsData) => {
  const allNews = getAllNews();
  const newItem = {
    id: generateId(),
    ...newsData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  allNews.push(newItem);
  saveNews(allNews);
  return newItem;
};

export const updateNews = (id, newsData) => {
  const allNews = getAllNews();
  const index = allNews.findIndex(item => item.id === id);
  
  if (index !== -1) {
    allNews[index] = {
      ...allNews[index],
      ...newsData,
      updatedAt: new Date().toISOString()
    };
    saveNews(allNews);
    return allNews[index];
  }
  return null;
};

export const deleteNews = (id) => {
  const allNews = getAllNews();
  const filtered = allNews.filter(item => item.id !== id);
  saveNews(filtered);
  return true;
};

export const getNewsByCategory = (category) => {
  return getAllNews()
    .filter(item => item.category === category && item.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// ========== UTILIDADES ==========

const generateId = () => {
  return `news_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const categories = [
  'Proyectos',
  'Mantenimiento',
  'Inspección API',
  'Obras Civiles',
  'Certificaciones',
  'Capacitación',
  'Empresa'
];

// ========== DATOS DE EJEMPLO (Ejecutar una sola vez) ==========

export const initializeSampleData = () => {
  // Check and migrate to new bilingual version
  checkAndMigrateNews();
  
  const existing = getAllNews();
  if (existing.length === 0) {
    const sampleNews = [
      {
        id: generateId(),
        title: 'Inspección de Tanque de 10.000 m³ en Refinería',
        titleEn: '10,000 m³ Tank Inspection at Refinery',
        summary: 'Completamos exitosamente la inspección API 653 de un tanque de almacenamiento de crudo con tecnología LFET de última generación.',
        summaryEn: 'We successfully completed the API 653 inspection of a crude oil storage tank with state-of-the-art LFET technology.',
        content: `Nuestro equipo técnico finalizó la inspección integral de un tanque atmosférico de 10.000 m³ de capacidad en una de las principales refinerías del país.

Utilizando tecnología LFET (Low Frequency Electromagnetic Technique) con 32 sensores de alta precisión, pudimos realizar un mapeo completo del fondo del tanque sin necesidad de vaciado completo, reduciendo significativamente los tiempos de parada y costos operativos.

El informe técnico, elaborado según normativa API 653, identificó áreas críticas que requieren intervención, permitiendo al cliente planificar el mantenimiento preventivo de forma óptima.

Esta inspección se suma a las más de 1000 realizadas desde 1997, consolidando nuestra posición como líderes en inspección de tanques en Argentina.`,
        contentEn: `Our technical team completed the comprehensive inspection of a 10,000 m³ atmospheric tank at one of the country's main refineries.

Using LFET (Low Frequency Electromagnetic Technique) technology with 32 high-precision sensors, we were able to perform a complete mapping of the tank floor without the need for complete emptying, significantly reducing downtime and operating costs.

The technical report, prepared according to API 653 standards, identified critical areas requiring intervention, allowing the client to optimally plan preventive maintenance.

This inspection adds to the more than 1,000 performed since 1997, consolidating our position as leaders in tank inspection in Argentina.`,
        category: 'Inspección API',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop',
        date: '2025-11-20',
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: generateId(),
        title: 'Certificación IRAM ISO 9001:2015 Renovada',
        titleEn: 'IRAM ISO 9001:2015 Certification Renewed',
        summary: 'SERVIN INGENIERÍA renovó su certificación IRAM ISO 9001:2015 para todas sus divisiones operativas.',
        summaryEn: 'SERVIN INGENIERÍA renewed its IRAM ISO 9001:2015 certification for all its operational divisions.',
        content: `Con gran satisfacción, comunicamos la renovación de nuestra certificación IRAM ISO 9001:2015 otorgada por el Instituto Argentino de Normalización y Certificación.

Esta certificación abarca todas nuestras unidades de negocio:
- Ingeniería de Materiales
- Inspección de Tanques API
- Planta de Mantenimiento Industrial
- Mantenimientos In Situ

El proceso de auditoría evaluó nuestros procesos de gestión de calidad, control de documentación, satisfacción del cliente y mejora continua, obteniendo resultados sobresalientes en todas las áreas.

Esta renovación reafirma nuestro compromiso con la excelencia operativa y la satisfacción de nuestros más de 400 clientes activos.`,
        contentEn: `We are pleased to announce the renewal of our IRAM ISO 9001:2015 certification granted by the Argentine Institute of Standardization and Certification.

This certification covers all our business units:
- Materials Engineering
- API Tank Inspection
- Industrial Maintenance Plant
- On-Site Maintenance

The audit process evaluated our quality management processes, documentation control, customer satisfaction and continuous improvement, obtaining outstanding results in all areas.

This renewal reaffirms our commitment to operational excellence and the satisfaction of our more than 400 active clients.`,
        category: 'Certificaciones',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
        date: '2025-11-15',
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: generateId(),
        title: 'Nueva Planta de Granallado y Pintura',
        titleEn: 'New Shot Blasting and Painting Plant',
        summary: 'Inauguramos nuestra nueva planta de granallado y pintura industrial con tecnología de punta y certificación ambiental.',
        summaryEn: 'We inaugurate our new industrial shot blasting and painting plant with cutting-edge technology and environmental certification.',
        content: `SERVIN INGENIERÍA inaugura su nueva planta de tratamiento superficial y pintura industrial, ampliando significativamente nuestra capacidad operativa.

Características principales:
- Cabina de granallado automatizada según SSPC-SP10
- Sistema de recuperación y reciclaje de abrasivo
- Cabina de pintura con control de temperatura y humedad
- Certificación ambiental OPDS
- Capacidad para piezas de hasta 15 metros

Esta inversión nos permite ofrecer servicios integrales de preparación superficial y aplicación de recubrimientos industriales de alta performance, incluyendo sistemas epóxicos, poliuretánicos y zinc inorgánico.

La planta complementa nuestros servicios de reparación de válvulas y equipos industriales, ofreciendo soluciones completas llave en mano.`,
        contentEn: `SERVIN INGENIERÍA inaugurates its new surface treatment and industrial painting plant, significantly expanding our operational capacity.

Main features:
- Automated shot blasting booth according to SSPC-SP10
- Abrasive recovery and recycling system
- Paint booth with temperature and humidity control
- OPDS environmental certification
- Capacity for parts up to 15 meters

This investment allows us to offer comprehensive surface preparation services and high-performance industrial coatings application, including epoxy, polyurethane and inorganic zinc systems.

The plant complements our valve and industrial equipment repair services, offering complete turnkey solutions.`,
        category: 'Empresa',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
        date: '2025-11-10',
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: generateId(),
        title: 'Mantenimiento In Situ en Planta Petroquímica',
        titleEn: 'On-Site Maintenance at Petrochemical Plant',
        summary: 'Finalización exitosa de mantenimiento programado en planta petroquímica con cero incidentes de seguridad.',
        summaryEn: 'Successful completion of scheduled maintenance at petrochemical plant with zero safety incidents.',
        content: `Nuestro equipo de mantenimientos in situ completó con éxito la parada programada de una planta petroquímica, alcanzando todos los objetivos de seguridad, calidad y plazo.

Alcance de los trabajos:
- Calibración de 250 válvulas de seguridad y control
- Reparación de equipos rotativos
- Inspección de tanques de almacenamiento
- Pruebas hidrostáticas y funcionales

El proyecto se ejecutó con estrictos protocolos de seguridad, logrando 15.000 horas hombre sin incidentes, superando las expectativas del cliente.

Gracias a nuestra experiencia de 46 años y equipamiento móvil especializado, pudimos realizar todos los trabajos en sitio, minimizando los tiempos de logística y maximizando la disponibilidad de la planta.`,
        contentEn: `Our on-site maintenance team successfully completed the scheduled shutdown of a petrochemical plant, achieving all safety, quality and schedule objectives.

Scope of work:
- Calibration of 250 safety and control valves
- Repair of rotating equipment
- Storage tank inspection
- Hydrostatic and functional testing

The project was executed with strict safety protocols, achieving 15,000 man-hours without incidents, exceeding customer expectations.

Thanks to our 46 years of experience and specialized mobile equipment, we were able to perform all work on-site, minimizing logistics time and maximizing plant availability.`,
        category: 'Mant. In Situ',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
        date: '2025-11-05',
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
    
    saveNews(sampleNews);
    console.log('Datos de ejemplo inicializados');
  }
};
