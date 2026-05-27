import { supabase, isSupabaseConfigured } from '../lib/supabase';

const ensureSupabase = () => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('[newsService] Supabase not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
    return false;
  }
  return true;
};

// ========== AUTENTICACIÓN ==========

export const loginAdmin = async (username, password) => {
  if (!ensureSupabase()) {
    return { success: false, error: 'Supabase no esta configurado' };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password
  });

  if (error) {
    return { success: false, error: 'Credenciales incorrectas' };
  }

  return { success: true, session: data.session };
};

export const logoutAdmin = async () => {
  if (supabase) {
    await supabase.auth.signOut();
  }
  return { success: true };
};

export const isAdminAuthenticated = async () => {
  if (!ensureSupabase()) return false;
  const { data } = await supabase.auth.getSession();
  return Boolean(data.session);
};

export const getCurrentUser = async () => {
  if (!ensureSupabase()) return null;
  const { data } = await supabase.auth.getUser();
  return data.user;
};

// ========== CRUD DE NOVEDADES ==========

export const getPublishedNews = async () => {
  if (!ensureSupabase()) return [];
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('status', 'published')
      .order('date', { ascending: false });

    if (error) throw error;
    
    // Parse JSON content fields for each news item
    return (data || []).map(item => {
      if (typeof item.content === 'string') {
        try {
          item.content = JSON.parse(item.content);
        } catch (e) {
          console.error('Error parsing content:', e);
        }
      }
      if (typeof item.content_en === 'string') {
        try {
          item.content_en = JSON.parse(item.content_en);
        } catch (e) {
          console.error('Error parsing content_en:', e);
        }
      }
      return item;
    });
  } catch (error) {
    console.error('Error fetching published news:', error);
    return [];
  }
};

export const getAllNewsAdmin = async () => {
  if (!ensureSupabase()) return [];
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;
    
    // Parse JSON content fields for each news item
    return (data || []).map(item => {
      if (typeof item.content === 'string') {
        try {
          item.content = JSON.parse(item.content);
        } catch (e) {
          console.error('Error parsing content:', e);
        }
      }
      if (typeof item.content_en === 'string') {
        try {
          item.content_en = JSON.parse(item.content_en);
        } catch (e) {
          console.error('Error parsing content_en:', e);
        }
      }
      return item;
    });
  } catch (error) {
    console.error('Error fetching all news:', error);
    return [];
  }
};

export const getNewsById = async (id) => {
  if (!ensureSupabase()) return null;
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    
    // Parse JSON content fields
    if (data && typeof data.content === 'string') {
      try {
        data.content = JSON.parse(data.content);
      } catch (e) {
        console.error('Error parsing content:', e);
      }
    }
    if (data && typeof data.content_en === 'string') {
      try {
        data.content_en = JSON.parse(data.content_en);
      } catch (e) {
        console.error('Error parsing content_en:', e);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching news by id:', error);
    return null;
  }
};

export const createNews = async (newsData) => {
  if (!ensureSupabase()) return null;
  try {
    const dataToInsert = {
      ...newsData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // Ensure content fields are stored as JSON strings
    if (typeof dataToInsert.content !== 'string') {
      dataToInsert.content = JSON.stringify(dataToInsert.content);
    }
    if (dataToInsert.content_en && typeof dataToInsert.content_en !== 'string') {
      dataToInsert.content_en = JSON.stringify(dataToInsert.content_en);
    }
    
    const { data, error } = await supabase
      .from('news')
      .insert([dataToInsert])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating news:', error);
    return null;
  }
};

export const updateNews = async (id, newsData) => {
  if (!ensureSupabase()) return null;
  try {
    const dataToUpdate = {
      ...newsData,
      updated_at: new Date().toISOString()
    };
    
    // Ensure content fields are stored as JSON strings
    if (typeof dataToUpdate.content !== 'string') {
      dataToUpdate.content = JSON.stringify(dataToUpdate.content);
    }
    if (dataToUpdate.content_en && typeof dataToUpdate.content_en !== 'string') {
      dataToUpdate.content_en = JSON.stringify(dataToUpdate.content_en);
    }
    
    const { data, error } = await supabase
      .from('news')
      .update(dataToUpdate)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating news:', error);
    return null;
  }
};

export const deleteNews = async (id) => {
  if (!ensureSupabase()) return false;
  try {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting news:', error);
    return false;
  }
};

export const getNewsByCategory = async (category) => {
  if (!ensureSupabase()) return [];
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('category', category)
      .eq('status', 'published')
      .order('date', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching news by category:', error);
    return [];
  }
};

// ========== UTILIDADES ==========

export const categories = [
  'Proyectos',
  'Mantenimiento',
  'Inspección API',
  'Obras Civiles',
  'Certificaciones',
  'Capacitación',
  'Empresa',
  // Divisiones / Unidades (para clasificar novedades por área)
  'Ingeniería de Materiales',
  'Planta de Mantenimiento Industrial',
  'Mantenimientos In Situ – Laboratorio Móvil',
  'Mantenimientos In Situ – PREVENTEST',
  'Inspección de Tanques API & END',
  'Revestimiento Industrial',
  'Prefabricados de Cañerías',
  'Cabinas de Granallado',
  'Ingeniería Industrial'
];

// ========== UPLOAD DE IMÁGENES ==========

export const uploadNewsImage = async (file) => {
  if (!ensureSupabase()) return null;
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `news/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

// ========== INICIALIZAR DATOS DE EJEMPLO ==========

export const initializeSampleData = async () => {
  if (!ensureSupabase()) return;
  try {
    // Check if there's already data
    const { data: existingNews } = await supabase
      .from('news')
      .select('id')
      .limit(1);

    if (existingNews && existingNews.length > 0) {
      console.log('Database already has news data');
      return;
    }

    const sampleNews = [
      {
        title: 'Inspección de Tanque de 10.000 m³ en Refinería',
        title_en: '10,000 m³ Tank Inspection at Refinery',
        summary: 'Completamos exitosamente la inspección API 653 de un tanque de almacenamiento de crudo con tecnología LFET de última generación.',
        summary_en: 'We successfully completed the API 653 inspection of a crude oil storage tank with state-of-the-art LFET technology.',
        content: `Nuestro equipo técnico finalizó la inspección integral de un tanque atmosférico de 10.000 m³ de capacidad en una de las principales refinerías del país.

Utilizando tecnología LFET (Low Frequency Electromagnetic Technique) con 32 sensores de alta precisión, pudimos realizar un mapeo completo del fondo del tanque sin necesidad de vaciado completo, reduciendo significativamente los tiempos de parada y costos operativos.

El informe técnico, elaborado según normativa API 653, identificó áreas críticas que requieren intervención, permitiendo al cliente planificar el mantenimiento preventivo de forma óptima.

Esta inspección se suma a las más de 1000 realizadas desde 1997, consolidando nuestra posición como líderes en inspección de tanques en Argentina.`,
        content_en: `Our technical team completed the comprehensive inspection of a 10,000 m³ atmospheric tank at one of the country's main refineries.

Using LFET (Low Frequency Electromagnetic Technique) technology with 32 high-precision sensors, we were able to perform a complete mapping of the tank floor without the need for complete emptying, significantly reducing downtime and operating costs.

The technical report, prepared according to API 653 standards, identified critical areas requiring intervention, allowing the client to optimally plan preventive maintenance.

This inspection adds to the more than 1,000 performed since 1997, consolidating our position as leaders in tank inspection in Argentina.`,
        category: 'Inspección API',
        location: 'Bahía Blanca, Argentina',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop',
        date: '2025-11-20',
        status: 'published',
        featured: true
      },
      {
        title: 'Certificación IRAM ISO 9001:2015 Renovada',
        title_en: 'IRAM ISO 9001:2015 Certification Renewed',
        summary: 'SERVIN INGENIERÍA renovó su certificación IRAM ISO 9001:2015 para todas sus divisiones operativas.',
        summary_en: 'SERVIN INGENIERÍA renewed its IRAM ISO 9001:2015 certification for all its operational divisions.',
        content: `Con gran satisfacción, comunicamos la renovación de nuestra certificación IRAM ISO 9001:2015 otorgada por el Instituto Argentino de Normalización y Certificación.

Esta certificación abarca todas nuestras unidades de negocio:
- Ingeniería de Materiales
- Inspección de Tanques API
- Planta de Mantenimiento Industrial
- Mantenimientos In Situ

El proceso de auditoría evaluó nuestros procesos de gestión de calidad, control de documentación, satisfacción del cliente y mejora continua, obteniendo resultados sobresalientes en todas las áreas.

Esta renovación reafirma nuestro compromiso con la excelencia operativa y la satisfacción de nuestros más de 400 clientes activos.`,
        content_en: `We are pleased to announce the renewal of our IRAM ISO 9001:2015 certification granted by the Argentine Institute of Standardization and Certification.

This certification covers all our business units:
- Materials Engineering
- API Tank Inspection
- Industrial Maintenance Plant
- On-Site Maintenance

The audit process evaluated our quality management processes, documentation control, customer satisfaction and continuous improvement, obtaining outstanding results in all areas.

This renewal reaffirms our commitment to operational excellence and the satisfaction of our more than 400 active clients.`,
        category: 'Certificaciones',
  location: 'Buenos Aires, Argentina',
        image: '/Novedades/iram-iso-9001.webp',
        date: '2025-11-15',
        status: 'published',
        featured: false
      },
      {
        title: 'Nueva Planta de Granallado y Pintura',
        title_en: 'New Shot Blasting and Painting Plant',
        summary: 'Inauguramos nuestra nueva planta de granallado y pintura industrial con tecnología de punta y certificación ambiental.',
        summary_en: 'We inaugurate our new industrial shot blasting and painting plant with cutting-edge technology and environmental certification.',
        content: `SERVIN INGENIERÍA inaugura su nueva planta de tratamiento superficial y pintura industrial, ampliando significativamente nuestra capacidad operativa.

Características principales:
- Cabina de granallado automatizada según SSPC-SP10
- Sistema de recuperación y reciclaje de abrasivo
- Cabina de pintura con control de temperatura y humedad
- Certificación ambiental OPDS
- Capacidad para piezas de hasta 15 metros

Esta inversión nos permite ofrecer servicios integrales de preparación superficial y aplicación de recubrimientos industriales de alta performance, incluyendo sistemas epóxicos, poliuretánicos y zinc inorgánico.

La planta complementa nuestros servicios de reparación de válvulas y equipos industriales, ofreciendo soluciones completas llave en mano.`,
        content_en: `SERVIN INGENIERÍA inaugurates its new surface treatment and industrial painting plant, significantly expanding our operational capacity.

Main features:
- Automated shot blasting booth according to SSPC-SP10
- Abrasive recovery and recycling system
- Paint booth with temperature and humidity control
- OPDS environmental certification
- Capacity for parts up to 15 meters

This investment allows us to offer comprehensive surface preparation services and high-performance industrial coatings application, including epoxy, polyurethane and inorganic zinc systems.

The plant complements our valve and industrial equipment repair services, offering complete turnkey solutions.`,
        category: 'Empresa',
  location: 'Buenos Aires, Argentina',
        image: '/Novedades/granallado%20y%20pintado.webp',
        date: '2025-11-10',
        status: 'published',
        featured: false
      },
      {
        title: 'Mantenimiento In Situ en Planta Petroquímica',
        title_en: 'On-Site Maintenance at Petrochemical Plant',
        summary: 'Finalización exitosa de mantenimiento programado en planta petroquímica con cero incidentes de seguridad.',
        summary_en: 'Successful completion of scheduled maintenance at petrochemical plant with zero safety incidents.',
        content: `Nuestro equipo de mantenimientos in situ completó con éxito la parada programada de una planta petroquímica, alcanzando todos los objetivos de seguridad, calidad y plazo.

Alcance de los trabajos:
- Calibración de 250 válvulas de seguridad y control
- Reparación de equipos rotativos
- Inspección de tanques de almacenamiento
- Pruebas hidrostáticas y funcionales

El proyecto se ejecutó con estrictos protocolos de seguridad, logrando 15.000 horas hombre sin incidentes, superando las expectativas del cliente.

Gracias a nuestra experiencia de 46 años y equipamiento móvil especializado, pudimos realizar todos los trabajos en sitio, minimizando los tiempos de logística y maximizando la disponibilidad de la planta.`,
        content_en: `Our on-site maintenance team successfully completed the scheduled shutdown of a petrochemical plant, achieving all safety, quality and schedule objectives.

Scope of work:
- Calibration of 250 safety and control valves
- Repair of rotating equipment
- Storage tank inspection
- Hydrostatic and functional testing

The project was executed with strict safety protocols, achieving 15,000 man-hours without incidents, exceeding customer expectations.

Thanks to our 46 years of experience and specialized mobile equipment, we were able to perform all work on-site, minimizing logistics time and maximizing plant availability.`,
        category: 'Mantenimiento',
  location: 'Bahía Blanca, Argentina',
        image: '/Novedades/Mantenimiento%20In%20Situ%20en%20Planta%20Petroquimica.webp',
        date: '2025-11-05',
        status: 'published',
        featured: false
      },
      {
        title: 'Complejo Prisma: desarrollo turistico con vista al Lago Nahuel Huapi',
        title_en: 'Complejo Prisma: tourism development overlooking Nahuel Huapi Lake',
        summary: 'SERVIN INGENIERIA suma a su trayectoria el desarrollo de Complejo Prisma, una propuesta de alojamiento en Bariloche con departamentos equipados, vistas panoramicas y servicios pensados para el confort de sus huespedes.',
        summary_en: 'SERVIN INGENIERIA adds Complejo Prisma to its track record, a lodging development in Bariloche with equipped apartments, panoramic views and services designed for guest comfort.',
        content: [
          {
            id: '1',
            type: 'text',
            content: `Complejo Prisma representa una nueva muestra de la capacidad de SERVIN INGENIERIA para participar en proyectos que combinan vision empresarial, desarrollo constructivo y valor para destinos turisticos de alto nivel.

Ubicado en San Carlos de Bariloche, sobre Av. Exequiel Bustillo 4000 y a 4 km del centro de la ciudad, el complejo se emplaza en un punto panoramico con vistas al Lago Nahuel Huapi y al entorno natural de la Patagonia.
`
          },
          {
            id: '2',
            type: 'image',
            src: '/Novedades/complejoprisma/exterior.webp',
            caption: 'Frente de Complejo Prisma en Bariloche',
            alignment: 'center'
          },
          {
            id: '3',
            type: 'image',
            src: '/Novedades/complejoprisma/1661212874.webp',
            caption: 'Vista aerea del complejo y su entorno patagonico',
            alignment: 'center'
          },
          {
            id: '4',
            type: 'text',
            content: 'La propuesta cuenta con departamentos pensados para parejas y familias, incluyendo unidades estandar y superiores con vista al lago. Segun la informacion institucional de Complejo Prisma, las unidades estan equipadas para 4 personas e incorporan cocina completa, smart TV, Wi-Fi, calefaccion por losa radiante, aire acondicionado, caja fuerte, servicio de limpieza, estacionamiento cubierto y lockers.'
          },
          {
            id: '5',
            type: 'image',
            src: '/Novedades/complejoprisma/1.webp',
            caption: 'Estar comedor con vista al Lago Nahuel Huapi',
            alignment: 'center'
          },
          {
            id: '6',
            type: 'image',
            src: '/Novedades/complejoprisma/Prisma-dpto-10-2-1.webp',
            caption: 'Departamento equipado con cocina integrada y area de estar',
            alignment: 'center'
          },
          {
            id: '7',
            type: 'image',
            src: '/Novedades/complejoprisma/3.webp',
            caption: 'Cocina completa equipada para estadias confortables',
            alignment: 'center'
          },
          {
            id: '8',
            type: 'text',
            content: 'Este proyecto refleja una mirada integral sobre la calidad, el confort y la experiencia del usuario final, trasladando criterios de planificacion, ejecucion y detalle a un desarrollo turistico ubicado en uno de los puntos mas reconocidos de la Patagonia argentina.'
          },
          {
            id: '9',
            type: 'image',
            src: '/Novedades/complejoprisma/4.webp',
            caption: 'Dormitorio con vista panoramica al lago',
            alignment: 'center'
          },
          {
            id: '10',
            type: 'image',
            src: '/Novedades/complejoprisma/672704849.webp',
            caption: 'Vista exterior del complejo en temporada invernal',
            alignment: 'center'
          },
          {
            id: '11',
            type: 'image',
            src: '/Novedades/complejoprisma/caption.webp',
            caption: 'Iluminacion nocturna de Complejo Prisma',
            alignment: 'center'
          }
        ],
        content_en: [
          {
            id: '1',
            type: 'text',
            content: `Complejo Prisma is another example of SERVIN INGENIERIA capability to take part in projects that combine business vision, construction development and value creation for high-profile tourism destinations.

Located in San Carlos de Bariloche at Av. Exequiel Bustillo 4000, 4 km from the city center, the complex is set in a panoramic location overlooking Nahuel Huapi Lake and the natural surroundings of Patagonia.
`
          },
          {
            id: '2',
            type: 'image',
            src: '/Novedades/complejoprisma/exterior.webp',
            caption: 'Complejo Prisma facade in Bariloche',
            alignment: 'center'
          },
          {
            id: '3',
            type: 'image',
            src: '/Novedades/complejoprisma/1661212874.webp',
            caption: 'Aerial view of the complex and its Patagonian surroundings',
            alignment: 'center'
          },
          {
            id: '4',
            type: 'text',
            content: 'The project offers apartments designed for couples and families, including standard and superior units with lake views. According to Complejo Prisma institutional information, the units are equipped for 4 guests and include a full kitchen, smart TV, Wi-Fi, radiant floor heating, air conditioning, safe box, cleaning service, covered parking and lockers.'
          },
          {
            id: '5',
            type: 'image',
            src: '/Novedades/complejoprisma/1.webp',
            caption: 'Living and dining area overlooking Nahuel Huapi Lake',
            alignment: 'center'
          },
          {
            id: '6',
            type: 'image',
            src: '/Novedades/complejoprisma/Prisma-dpto-10-2-1.webp',
            caption: 'Equipped apartment with integrated kitchen and living area',
            alignment: 'center'
          },
          {
            id: '7',
            type: 'image',
            src: '/Novedades/complejoprisma/3.webp',
            caption: 'Fully equipped kitchen for comfortable stays',
            alignment: 'center'
          },
          {
            id: '8',
            type: 'text',
            content: 'This project reflects an integrated approach to quality, comfort and end-user experience, bringing planning, execution and attention to detail into a tourism development located in one of the most recognized areas of Argentine Patagonia.'
          },
          {
            id: '9',
            type: 'image',
            src: '/Novedades/complejoprisma/4.webp',
            caption: 'Bedroom with panoramic lake view',
            alignment: 'center'
          },
          {
            id: '10',
            type: 'image',
            src: '/Novedades/complejoprisma/672704849.webp',
            caption: 'Exterior view of the complex during winter season',
            alignment: 'center'
          },
          {
            id: '11',
            type: 'image',
            src: '/Novedades/complejoprisma/caption.webp',
            caption: 'Night lighting at Complejo Prisma',
            alignment: 'center'
          }
        ],
        category: 'Obras Civiles',
        location: 'San Carlos de Bariloche, Rio Negro',
        image: '/Novedades/complejoprisma/exterior.webp',
        date: '2026-05-27',
        status: 'published',
        featured: true,
        showOnHome: true
      }
    ];

    const { error } = await supabase
      .from('news')
      .insert(sampleNews);

    if (error) throw error;
    console.log('Sample data initialized successfully');
  } catch (error) {
    console.error('Error initializing sample data:', error);
  }
};
