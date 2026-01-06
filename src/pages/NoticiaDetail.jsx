import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NoticiaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Datos de noticias (debería coincidir con los de Novedades.jsx)
  const novedades = [
    {
      id: 1,
      title: 'Exitosa Calibración de Válvulas de Seguridad en Refinería YPF',
      excerpt: 'Completamos la calibración de más de 150 válvulas de seguridad en la planta de YPF La Plata, garantizando el cumplimiento de normativas ASME.',
      content: `
        <p>SERVIN INGENIERÍA ha completado exitosamente el proyecto de calibración de válvulas de seguridad en la refinería de YPF La Plata, uno de los trabajos más importantes del año para nuestra empresa.</p>
        
        <h3>Alcance del Proyecto</h3>
        <p>El proyecto abarcó la calibración de más de 150 válvulas de seguridad distribuidas en diferentes unidades de proceso de la refinería. Nuestro equipo técnico trabajó durante 6 semanas consecutivas para completar este importante proyecto.</p>
        
        <h3>Normativas Aplicadas</h3>
        <p>Todos los trabajos se realizaron siguiendo estrictamente las normativas ASME (American Society of Mechanical Engineers), garantizando los más altos estándares de seguridad y confiabilidad en la operación de la planta.</p>
        
        <h3>Impacto en la Seguridad</h3>
        <p>La correcta calibración de estas válvulas es crucial para la seguridad operativa de la refinería, ya que actúan como sistemas de protección ante sobrepresiones que podrían generar situaciones peligrosas.</p>
        
        <h3>Reconocimiento del Cliente</h3>
        <p>YPF destacó la calidad y profesionalismo de nuestro trabajo, confirmando que todos los procedimientos se realizaron según los más altos estándares de la industria.</p>
      `,
      category: 'proyectos',
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      featured: true,
      tags: ['YPF', 'Válvulas de Seguridad', 'ASME', 'Refinería']
    },
    {
      id: 2,
      title: 'Ampliación de Planta de Calibración',
      excerpt: 'Inauguramos una nueva línea de calibración para válvulas de gran diámetro, expandiendo nuestra capacidad hasta 30 pulgadas.',
      content: `
        <p>SERVIN INGENIERÍA anuncia la inauguración de una nueva línea de calibración especializada en válvulas de gran diámetro, marcando un hito importante en la expansión de nuestras capacidades técnicas.</p>
        
        <h3>Nueva Capacidad Técnica</h3>
        <p>La nueva línea nos permite calibrar válvulas de hasta 30 pulgadas de diámetro, ampliando significativamente nuestro rango de servicios y posicionándonos como líderes en el sector de válvulas industriales de gran tamaño.</p>
        
        <h3>Inversión en Tecnología</h3>
        <p>Esta expansión representa una inversión de más de $500,000 en equipamiento de última generación, incluyendo bancos de prueba hidráulicos y sistemas de medición de alta precisión.</p>
        
        <h3>Beneficios para Nuestros Clientes</h3>
        <p>Con esta nueva capacidad, podemos ofrecer servicios más completos a la industria petroquímica, refinería y generación de energía, reduciendo los tiempos de entrega y mejorando la eficiencia de servicio.</p>
        
        <h3>Certificaciones</h3>
        <p>La nueva línea cuenta con todas las certificaciones necesarias y cumple con los estándares internacionales más exigentes para la calibración de válvulas industriales.</p>
      `,
      category: 'empresa',
      date: '2024-10-31',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
      featured: true,
      tags: ['Expansión', 'Planta', 'Válvulas', 'Calibración']
    },
    {
      id: 3,
      title: 'Nuevas Certificaciones ISO 45001 Obtenidas',
      excerpt: 'SERVIN INGENIERÍA obtiene la certificación ISO 45001:2018 en Sistemas de Gestión de Seguridad y Salud en el Trabajo.',
      content: `
        <p>Nos complace anunciar que SERVIN INGENIERÍA ha obtenido la certificación ISO 45001:2018, reafirmando nuestro compromiso con la seguridad y salud en el trabajo.</p>
        
        <h3>Importancia de la Certificación</h3>
        <p>La norma ISO 45001 es el estándar internacional para sistemas de gestión de seguridad y salud en el trabajo. Esta certificación demuestra nuestro compromiso con proporcionar un entorno de trabajo seguro y saludable para todos nuestros empleados.</p>
        
        <h3>Proceso de Certificación</h3>
        <p>El proceso de certificación involucró una exhaustiva revisión de nuestros procedimientos de seguridad, capacitación del personal y implementación de mejores prácticas en gestión de riesgos laborales.</p>
        
        <h3>Beneficios Obtenidos</h3>
        <ul>
          <li>Reducción significativa de accidentes laborales</li>
          <li>Mejora en la cultura de seguridad organizacional</li>
          <li>Mayor confianza de nuestros clientes</li>
          <li>Cumplimiento con regulaciones internacionales</li>
        </ul>
        
        <h3>Compromiso Continuo</h3>
        <p>Esta certificación no es un punto de llegada, sino el comienzo de un compromiso continuo con la excelencia en seguridad y salud ocupacional.</p>
      `,
      category: 'certificaciones',
      date: '2024-10-19',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      featured: false,
      tags: ['ISO 45001', 'Certificación', 'Seguridad']
    },
    {
      id: 4,
      title: 'Incorporación de Tecnología PAUT en Inspecciones',
      excerpt: 'Sumamos equipos de ultrasonido con tecnología Phased Array (PAUT) para inspecciones más precisas y eficientes.',
      content: `
        <p>SERVIN INGENIERÍA incorpora tecnología de vanguardia con la adquisición de equipos de ultrasonido PAUT (Phased Array Ultrasonic Testing), revolucionando nuestros servicios de inspección no destructiva.</p>
        
        <div style="text-align: center; margin: 2rem 0;">
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Equipos PAUT de última generación" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
          <p style="font-size: 0.9rem; color: #666; font-style: italic; margin-top: 0.5rem;">Equipos PAUT de última generación incorporados a nuestra división de inspecciones</p>
        </div>
        
        <h3>¿Qué es la Tecnología PAUT?</h3>
        <p>PAUT es una técnica avanzada de ultrasonido que utiliza múltiples elementos para generar y dirigir haces ultrasónicos, permitiendo inspecciones más precisas y detalladas que los métodos convencionales.</p>
        
        <h3>Ventajas Tecnológicas</h3>
        <ul>
          <li>Mayor precisión en la detección de defectos</li>
          <li>Capacidad de inspección de geometrías complejas</li>
          <li>Reducción significativa en tiempos de inspección</li>
          <li>Documentación digital avanzada</li>
          <li>Análisis en tiempo real</li>
        </ul>
        
        <div style="text-align: center; margin: 2rem 0;">
          <img src="https://images.unsplash.com/photo-1581092332991-b3a2e9c8a995?q=80&w=2070&auto=format&fit=crop" alt="Técnico operando equipo PAUT" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
          <p style="font-size: 0.9rem; color: #666; font-style: italic; margin-top: 0.5rem;">Análisis en tiempo real mediante tecnología PAUT para detección precisa de defectos</p>
        </div>
        
        <h3>Aplicaciones</h3>
        <p>Esta tecnología será aplicada en la inspección de soldaduras, detección de grietas, medición de espesores y evaluación de la integridad estructural en equipos industriales críticos.</p>
        
        <div style="text-align: center; margin: 2rem 0;">
          <img src="https://images.unsplash.com/photo-1581092160327-57874b1b8b1d?q=80&w=2070&auto=format&fit=crop" alt="Inspección de soldaduras con PAUT" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
          <p style="font-size: 0.9rem; color: #666; font-style: italic; margin-top: 0.5rem;">Inspección detallada de soldaduras críticas utilizando tecnología Phased Array</p>
        </div>
        
        <h3>Capacitación del Personal</h3>
        <p>Nuestro equipo técnico ha completado la capacitación especializada en el uso de esta tecnología, obteniendo las certificaciones correspondientes para operar estos equipos de alta precisión.</p>
      `,
      category: 'tecnologia',
      date: '2024-10-14',
      image: 'https://images.unsplash.com/photo-1581092053997-7c75b6d6de72?q=80&w=2070&auto=format&fit=crop',
      featured: false,
      tags: ['PAUT', 'Ultrasonido', 'Tecnología', 'Inspecciones']
    },
    {
      id: 5,
      title: 'Inspección de Tanques en Terminal Dock Sud',
      excerpt: 'Finalizada exitosamente la inspección de 25 tanques de almacenamiento en Terminal Dock Sud según API 653.',
      content: `
        <p>SERVIN INGENIERÍA ha completado exitosamente la inspección de 25 tanques de almacenamiento en Terminal Dock Sud, uno de los terminales portuarios más importantes de Argentina.</p>
        
        <h3>Detalles del Proyecto</h3>
        <p>El proyecto abarcó la inspección completa de tanques de diferentes capacidades, desde 10,000 hasta 80,000 barriles, utilizando técnicas avanzadas de inspección no destructiva.</p>
        
        <h3>Normativa API 653</h3>
        <p>Todas las inspecciones se realizaron siguiendo estrictamente la norma API 653 (Tank Inspection, Repair, Alteration, and Reconstruction), el estándar internacional para inspección de tanques de almacenamiento.</p>
        
        <h3>Técnicas Utilizadas</h3>
        <ul>
          <li>Ultrasonido para medición de espesores</li>
          <li>Inspección visual detallada</li>
          <li>Partículas magnéticas en soldaduras</li>
          <li>Vacuum box testing en fondos</li>
          <li>Evaluación de sistemas de protección catódica</li>
        </ul>
        
        <h3>Resultados</h3>
        <p>Los resultados de las inspecciones permitieron al cliente planificar el mantenimiento preventivo y correctivo necesario, garantizando la operación segura y confiable de las instalaciones.</p>
        
        <h3>Impacto Operativo</h3>
        <p>Gracias a la eficiencia de nuestro trabajo, se minimizaron los tiempos de parada, permitiendo al terminal mantener sus operaciones con mínimas interrupciones.</p>
      `,
      category: 'proyectos',
      date: '2024-09-30',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop',
      featured: false,
      tags: ['API 653', 'Tanques', 'Dock Sud', 'Inspección']
    },
    {
      id: 6,
      title: 'Nuevo Laboratorio Móvil PREVENTEST',
      excerpt: 'Incorporamos un nuevo laboratorio móvil con equipamiento de última generación para servicios in situ en toda Argentina.',
      content: `
        <p>SERVIN INGENIERÍA presenta su nuevo laboratorio móvil PREVENTEST, equipado con tecnología de última generación para brindar servicios de análisis e inspección directamente en las instalaciones de nuestros clientes.</p>
        
        <h3>Capacidades del Laboratorio</h3>
        <p>El laboratorio móvil PREVENTEST cuenta con equipamiento para realizar análisis químicos, ensayos mecánicos y estudios metalúrgicos in situ, eliminando la necesidad de transportar muestras a laboratorios externos.</p>
        
        <h3>Equipamiento Incluido</h3>
        <ul>
          <li>Espectrómetro de emisión óptica portátil</li>
          <li>Durómetro portátil para medición de dureza</li>
          <li>Microscopio digital de alta resolución</li>
          <li>Equipo de análisis de vibraciones</li>
          <li>Sistema de análisis de aceites</li>
          <li>Kit completo de ensayos no destructivos</li>
        </ul>
        
        <h3>Cobertura Nacional</h3>
        <p>Este laboratorio móvil nos permite extender nuestros servicios a nivel nacional, llegando a ubicaciones remotas donde tradicionalmente era difícil acceder a servicios especializados de análisis e inspección.</p>
        
        <h3>Beneficios para el Cliente</h3>
        <ul>
          <li>Resultados inmediatos en sitio</li>
          <li>Reducción de tiempos de parada</li>
          <li>Mayor eficiencia operativa</li>
          <li>Costos optimizados</li>
        </ul>
        
        <h3>Certificaciones</h3>
        <p>Todo el equipamiento del laboratorio móvil cuenta con certificaciones internacionales y está operado por técnicos especializados con amplia experiencia en análisis industriales.</p>
      `,
      category: 'tecnologia',
      date: '2024-09-14',
      image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=2070&auto=format&fit=crop',
      featured: false,
      tags: ['Laboratorio Móvil', 'PREVENTEST', 'Equipamiento']
    }
  ];

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'proyectos':
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
          </svg>
        );
      case 'tecnologia':
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        );
      case 'certificaciones':
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'empresa':
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getCategoryName = (categoryId) => {
    const categories = {
      'proyectos': language === 'es' ? 'Proyectos Realizados' : 'Completed Projects',
      'tecnologia': language === 'es' ? 'Tecnología' : 'Technology',
      'certificaciones': language === 'es' ? 'Certificaciones' : 'Certifications',
      'empresa': language === 'es' ? 'Empresa' : 'Company'
    };
    return categories[categoryId] || categoryId;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', options);
  };

  useEffect(() => {
    const noticiaEncontrada = novedades.find(n => n.id === parseInt(id));
    if (noticiaEncontrada) {
      setNoticia(noticiaEncontrada);
    } else {
      navigate('/novedades');
    }
  }, [id, navigate]);

  if (!noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#8B0000] mx-auto mb-4"></div>
          <p className="text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Cargando...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={noticia.image} 
          alt={noticia.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <span className="bg-[#8B0000] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {getCategoryIcon(noticia.category)}
                {getCategoryName(noticia.category)}
              </span>
              <span className="text-white/80 ml-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {formatDate(noticia.date)}
              </span>
            </div>
            <h1 className="text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {noticia.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Excerpt */}
        <div className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 p-6 bg-gray-50 rounded-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
          {noticia.excerpt}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {noticia.tags.map((tag, index) => (
            <span key={index} className="bg-[#8B0000]/10 text-[#8B0000] px-4 py-2 rounded-full text-xs sm:text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          dangerouslySetInnerHTML={{ __html: noticia.content }}
        />

        {/* Back to news */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <Link 
            to="/novedades" 
            className="inline-flex items-center bg-[#8B0000] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#6B0000] transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {language === 'es' ? 'Volver a Novedades' : 'Back to News'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticiaDetail;