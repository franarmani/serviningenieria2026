import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import StaggerText from '../components/ui/StaggerText';
import { getPublishedNews } from '../services/newsService';
import { useModalA11y } from '../hooks/useModalA11y';

const Home = () => {
  const { language } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [publishedNews, setPublishedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [openStandard, setOpenStandard] = useState(null);
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const carouselRef = useRef(null);
  const galleryModalRef = useRef(null);

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryReduced.length) % galleryReduced.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryReduced.length);
  };

  useModalA11y({
    isOpen: isGalleryOpen,
    modalRef: galleryModalRef,
    onClose: closeGallery,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Cargar novedades publicadas
    loadNews();
    
    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 80);
    
    // Tiempo mínimo de loading para precargar recursos
    const minLoadTime = setTimeout(() => {
      setLoadingProgress(100);
    }, 800);
    
    // Ocultar loading después de completar
    const hideLoading = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 1000);

    // Prevenir scroll durante loading
    document.body.style.overflow = 'hidden';

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minLoadTime);
      clearTimeout(hideLoading);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const loadNews = async () => {
    try {
      const news = await getPublishedNews();
      // Filtrar solo noticias marcadas para mostrar en Home
      const homeNews = (news || []).filter(n => n.showOnHome === true);
      setPublishedNews(homeNews);
    } catch (error) {
      console.error('Error loading news:', error);
      setPublishedNews([]);
    }
  };

  // Función para extraer texto del contenido y truncarlo
  const extractTextPreview = (content, maxLength = 120) => {
    if (!content) return '';
    
    let text = '';
    
    // Si content es un array de bloques
    if (Array.isArray(content)) {
      for (const block of content) {
        if (block.type === 'text' && block.content) {
          text += block.content + ' ';
        }
      }
    } 
    // Si content es un string (formato legacy)
    else if (typeof content === 'string') {
      text = content;
    }
    
    // Limpiar texto (remover HTML si hay)
    text = text.replace(/<[^>]*>/g, '').trim();
    
    // Truncar si es necesario
    if (text.length > maxLength) {
      return text.substring(0, maxLength).trim() + '...';
    }
    
    return text;
  };

  // Función para navegar en el carrusel móvil
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth; // Scroll de 1 card completa
      const newPosition = carouselRef.current.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  // Calculo automatico de anos desde 1979
  // Se incrementa cada 1 de noviembre
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-11 (enero=0, noviembre=10)
  const foundingYear = 1979;
  const yearsInBusiness = currentMonth >= 10 ? currentYear - foundingYear : currentYear - foundingYear - 1;

  // Divisiones operativas (8 completas)
  const divisions = [
    {
      id: 'ingenieria-materiales',
      name: language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering',
      path: '/services/ingenieria-materiales',
      description: language === 'es' ? 'Stock permanente y entrega rápida' : 'Permanent stock and fast delivery'
    },
    {
      id: 'planta',
      name: language === 'es' ? 'Planta de Mantenimiento Industrial' : 'Industrial Maintenance Plant',
      path: '/services/planta',
      description: language === 'es' ? 'Infraestructura especializada 2,639 m²' : 'Specialized infrastructure 2,639 m²'
    },
    {
      id: 'laboratorio-movil',
      name: language === 'es' ? 'Laboratorio Móvil' : 'Mobile Laboratory',
      path: '/services/laboratorio-movil',
      description: language === 'es' ? 'Servicios técnicos en campo' : 'Field technical services'
    },
    {
      id: 'in-situ',
      name: 'PREVENTEST',
      path: '/services/in-situ',
      description: language === 'es' ? 'Calibración in situ de precisión' : 'Precision in-situ calibration'
    },
    {
      id: 'inspecciones',
      name: language === 'es' ? 'Inspección de Tanques API & END' : 'API Tank Inspection & NDT',
      path: '/services/inspecciones',
      description: language === 'es' ? 'Procedimientos API aplicados' : 'API procedures applied'
    },
    {
      id: 'tratamiento-tanques',
      name: language === 'es' ? 'Revestimiento Industrial' : 'Industrial Coating',
      path: '/services/tratamiento-tanques',
      description: language === 'es' ? 'División en desarrollo' : 'Division in development',
      isComingSoon: true
    },
    {
      id: 'cabinas-granallado',
      name: language === 'es' ? 'Cabinas de Granallado' : 'Blasting Booths',
      path: '/services/cabinas-granallado',
      description: language === 'es' ? 'Disponible 2026' : 'Available 2026',
      isComingSoon: true
    },
    {
      id: 'prefabricados',
      name: language === 'es' ? 'Prefabricados' : 'Prefabrication',
      path: '/services/prefabricados',
      description: language === 'es' ? 'Piping y estructuras - 2026' : 'Piping and structures - 2026',
      isComingSoon: true
    }
  ];

  // Capacidades técnicas (resumen, con links directos)
  const capabilities = [
    {
      id: 'api-650-653',
      label: language === 'es' ? 'API 650 / 653' : 'API 650 / 653',
      path: '/services/inspecciones'
    },
    {
      id: 'ndt',
      label: language === 'es' ? 'END (NDT)' : 'NDT',
      path: '/services/inspecciones'
    },
    {
      id: 'rope-access',
      label: language === 'es' ? 'Acceso por Cuerda' : 'Rope Access',
      path: '/services/inspecciones'
    },
    {
      id: 'in-situ',
      label: language === 'es' ? 'Calibración In Situ' : 'In-Situ Calibration',
      path: '/services/in-situ'
    },
    {
      id: 'mobile-lab',
      label: language === 'es' ? 'Laboratorio Móvil' : 'Mobile Lab',
      path: '/services/laboratorio-movil'
    },
    {
      id: 'plant',
      label: language === 'es' ? 'Planta de Mantenimiento' : 'Maintenance Plant',
      path: '/services/planta'
    },
    {
      id: 'materials',
      label: language === 'es' ? 'Stock y Suministros' : 'Stock & Supply',
      path: '/services/ingenieria-materiales'
    }
  ];

  // Galeria completa (8 imagenes con extensiones correctas)
  const galleryReduced = [
    '/galeriahome/1.jpg',
    '/galeriahome/2.jpg',
    '/galeriahome/3.jpg',
    '/galeriahome/4.jpg',
    '/galeriahome/5.jpg',
    '/galeriahome/6.jpg',
    '/galeriahome/7.jpg',
    '/galeriahome/8.jpg'
  ];

  // Estándares técnicos (texto único para desktop y acordeón mobile)
  const standards = [
    {
      id: 'iso',
      title: 'ISO 9001',
      subtitle: {
        es: 'Sistema de Gestión de Calidad',
        en: 'Quality Management System'
      },
      description: {
        es: 'Gestión de procesos documentados, trazabilidad operativa y mejora continua aplicada a servicios industriales críticos.',
        en: 'Documented process management, operational traceability and continuous improvement applied to critical industrial services.'
      },
      icon: (
        <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'api',
      title: 'API',
      subtitle: {
        es: 'Inspección y Mantenimiento Industrial',
        en: 'Industrial Inspection & Maintenance'
      },
      description: {
        es: 'Aplicación de estándares API en inspección de tanques, válvulas y equipos críticos, con procedimientos técnicos y documentación trazable.',
        en: 'Application of API standards in tank, valve and critical equipment inspection, with technical procedures and traceable documentation.'
      },
      icon: (
        <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      id: 'asme',
      title: 'ASME',
      subtitle: {
        es: 'Criterios de Ingeniería Mecánica',
        en: 'Mechanical Engineering Criteria'
      },
      description: {
        es: 'Criterios ASME aplicados en diseño, fabricación, mantenimiento, ensayos y evaluación de integridad mecánica de equipos industriales.',
        en: 'ASME criteria applied in design, manufacturing, maintenance, testing and mechanical integrity evaluation of industrial equipment.'
      },
      icon: (
        <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'opds',
      title: 'OPDS',
      subtitle: {
        es: 'Planta de Mantenimiento Certificada',
        en: 'Certified Maintenance Plant'
      },
      description: {
        es: 'Infraestructura de 2,639 m² certificada por el Organismo Provincial para el Desarrollo Sostenible.',
        en: '2,639 m² infrastructure certified by the Provincial Agency for Sustainable Development.'
      },
      icon: (
        <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
            }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(224, 0, 0, 0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 50%, rgba(224, 0, 0, 0.1) 0%, transparent 50%)`
              }}></div>
            </div>

            {/* Loading content */}
            <div className="relative z-10 text-center px-6">
              {/* Logo animado */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-3"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '200',
                    letterSpacing: '0.05em'
                  }}
                >
                  SERVIN
                </h1>
                <h2 
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #E00000 0%, #FF2D2D 50%, #E00000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em'
                  }}
                >
                  INGENIERÍA
                </h2>
              </motion.div>

              {/* Barra de progreso moderna */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-md mx-auto"
              >
                <div className="relative h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${loadingProgress}%`,
                      background: 'linear-gradient(90deg, #E00000 0%, #FF2D2D 50%, #E00000 100%)',
                      boxShadow: '0 0 20px rgba(255, 45, 45, 0.45)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Porcentaje */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 text-white/60 text-sm font-medium tracking-wider"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {Math.round(loadingProgress)}%
                </motion.div>
              </motion.div>

              {/* Texto de carga */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 text-white/40 text-xs uppercase tracking-widest"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Cargando...' : 'Loading...'}
              </motion.p>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-corporate-red/30"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-corporate-red/30"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-corporate-red/30"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-corporate-red/30"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
      
      {/* HERO — SERVIN INGENIERÍA S.A. */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        
        {/* Placeholder mientras carga el video */}
        <div className={`absolute inset-0 z-[5] transition-opacity duration-700 ease-out pointer-events-none ${heroVideoReady ? 'opacity-0' : 'opacity-80'}`}>
          <img
            src="https://serviningenieria.com.ar/galeriahome/4.jpg"
            alt={language === 'es' ? 'SERVIN Ingeniería - Banner' : 'SERVIN Engineering - Banner'}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Video background */}
        <div className="absolute inset-0 z-0 opacity-[0.15] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setHeroVideoReady(true)}
            title={language === 'es' ? 'SERVIN Ingeniería - Video institucional' : 'SERVIN Engineering - Corporate video'}
            style={{
              filter: 'grayscale(100%) contrast(1.2)',
              mixBlendMode: 'overlay',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover'
            }}
          >
            <source src="/servinhome.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.03) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
          
          {/* Corporate badge */}
          <div className="mb-4 sm:mb-6 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-white/80 text-[10px] sm:text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? `+${yearsInBusiness} Años de Excelencia Industrial` : `+${yearsInBusiness} Years of Industrial Excellence`}
              </span>
            </div>
          </div>
          
          {/* Executive title */}
          <div className="mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up-delay-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-2 sm:mb-3" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '0.9'
            }}>
              SERVIN
            </h1>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-2 sm:mr-4"></div>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #E00000 0%, #C80000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '0.9'
              }}>
                INGENIERÍA
              </h2>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-2 sm:ml-4"></div>
            </div>
          </div>
          
          {/* Professional subtitle */}
          <p className="text-xs sm:text-sm text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-4" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? 'Una empresa de servicios al servicio de las empresas.'
              : 'A service company at the service of companies.'}
          </p>
          
          {/* CTA buttons */}
          <div className="animate-fade-in-up-delay-3 px-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto">
              <Link 
                to="/divisiones" 
                className="btn-primary w-full sm:w-auto"
              >
                <span>{language === 'es' ? 'Ver divisiones' : 'View divisions'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link 
                to="/about" 
                className="btn-secondary-invert w-full sm:w-auto"
              >
                <span>{language === 'es' ? 'Conocer la empresa' : 'About the company'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          
        </div>
        
        {/* Scroll Indicator anchored to section edge */}
        <div className="absolute bottom-1 sm:bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 z-30">
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


      {/* SOMOS SERVIN INGENIERÍA — PRESENTACIÓN */}
      <section className="relative bg-white py-12 sm:py-14 lg:py-16 overflow-hidden">
        
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Lado izquierdo: Contenido */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
                <span className="text-[10px] font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Somos' : 'We are'}
                </span>
              </div>
              
              {/* Título */}
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
              >
                SERVIN
                <br />
                <span className="text-corporate-red">INGENIERÍA</span>
              </h2>
              
              {/* Descripción */}
              <div className="space-y-2">
                <p 
                  className="text-sm text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                >
                  {language === 'es'
                    ? 'Empresa líder en servicios especializados con casi 5 décadas de experiencia. Nos destacamos por nuestro compromiso con la excelencia.'
                    : 'Leading company in specialized services with nearly 5 decades of experience. We stand out for our commitment to excellence.'}
                </p>
                <p 
                  className="text-sm text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                >
                  {language === 'es'
                    ? 'Más de 400 empresas confían en nosotros. Nos comprometemos a mantener soluciones innovadoras y liderazgo en el mercado.'
                    : 'More than 400 companies trust us. We are committed to maintaining innovative solutions and market leadership.'}
                </p>
              </div>
            </div>
            
            {/* Lado derecho: Imagen */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/galeriahome/4.jpg"
                  alt="Servin Ingeniería Instalaciones"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
          </div>
          
        </div>
      </section>


      {/* RESUMEN — DIVISIONES + CAPACIDADES */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Divisiones */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center bg-corporate-red/10 border border-corporate-red/20 rounded-full px-4 py-2 mb-5">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
                <span className="text-corporate-red text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Estructura Operativa' : 'Operational Structure'}
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
              >
                {language === 'es' ? (
                  <>
                    Divisiones <span className="text-corporate-red">Operativas</span>
                  </>
                ) : (
                  <>
                    Operational <span className="text-corporate-red">Divisions</span>
                  </>
                )}
              </h2>

              <p
                className="text-sm text-gray-600 leading-relaxed max-w-md"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
              >
                {language === 'es'
                  ? 'Accedé a cada área técnica con información y alcance de servicio.'
                  : 'Access each technical area with scope and service information.'}
              </p>

              <div className="mt-6">
                <Link
                  to="/divisiones"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-corporate-red hover:text-corporate-red-hover underline underline-offset-4 decoration-corporate-red/30 hover:decoration-corporate-red/50 transition-colors"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {language === 'es' ? 'Ver todas las divisiones' : 'View all divisions'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {divisions.map((division) => {
                  const CardInner = (
                    <>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {division.name}
                        </h3>
                        {division.isComingSoon && (
                          <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold text-gray-600 bg-gray-100 border border-gray-200 px-2 py-1 rounded-full" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v5l3 3m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {language === 'es' ? '2026' : '2026'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {division.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-corporate-red">
                        <span>
                          {division.isComingSoon
                            ? (language === 'es' ? 'Detalle (próximamente)' : 'Details (coming soon)')
                            : (language === 'es' ? 'Ingresar' : 'Open')}
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </>
                  );

                  const baseClass = "bg-white border border-gray-200 rounded-xl p-4 hover:border-corporate-red hover:shadow-lg transition-all";
                  const disabledClass = "bg-gray-50 border border-gray-200 rounded-xl p-4 opacity-80";

                  if (division.isComingSoon) {
                    return (
                      <div key={division.id} className={disabledClass} aria-label={division.name}>
                        {CardInner}
                      </div>
                    );
                  }

                  return (
                    <Link key={division.id} to={division.path} className={baseClass}>
                      {CardInner}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Capacidades técnicas */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Capacidades técnicas' : 'Technical capabilities'}
                </h3>
                <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es'
                    ? 'Acceso rápido a los principales alcances y servicios.'
                    : 'Quick access to key scopes and services.'}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {capabilities.map((cap) => {
                const chipClass = cap.isComingSoon
                  ? 'bg-white/60 border border-gray-200 text-gray-500'
                  : 'bg-white border border-gray-200 text-gray-800 hover:border-corporate-red hover:text-corporate-red';

                const inner = (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {cap.label}
                    {cap.isComingSoon && (
                      <span className="text-[10px] font-semibold bg-gray-100 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">2026</span>
                    )}
                  </span>
                );

                return cap.isComingSoon ? (
                  <div key={cap.id} className={chipClass} aria-label={cap.label}>
                    {inner}
                  </div>
                ) : (
                  <Link key={cap.id} to={cap.path} className={chipClass}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* BLOQUE DE AUTORIDAD — NORMATIVAS Y ESTÁNDARES TÉCNICOS */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Encabezado */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-corporate-red/10 border border-corporate-red/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
                <span className="text-corporate-red text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Certificaciones' : 'Certifications'}
                </span>
              </div>
              
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
              >
                {language === 'es' ? (
                  <>
                    Normativas y <span className="text-corporate-red">Estándares Técnicos</span>
                  </>
                ) : (
                  <>
                    Technical <span className="text-corporate-red">Standards & Regulations</span>
                  </>
                )}
              </h2>
              
              <p 
                className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}
              >
                {language === 'es'
                  ? 'Cumplimiento normativo y aplicación de estándares reconocidos en cada proceso industrial.'
                  : 'Regulatory compliance and application of recognized standards in every industrial process.'}
              </p>
            </div>
            
            {/* Grid de Certificaciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              
              {/* ISO 9001 */}
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-corporate-red/20 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    IRAM-ISO 9001:2015
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Sistema de Gestión de Calidad' : 'Quality Management System'}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Sistema de gestión de calidad certificado bajo norma IRAM-ISO 9001:2015. Certificado N.° 9000-9001. Alcance: comercialización, inspecciones y mantenimiento.'
                    : 'Quality management system certified under IRAM-ISO 9001:2015. Certificate N.° 9000-9001. Scope: commercialization, inspections and maintenance.'}
                </p>
                <a 
                  href="https://drive.google.com/file/d/1xMXkUsMzNMcg4UWSXZM8D7-Jvwa-qp-i/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-corporate-red hover:text-corporate-red-hover font-semibold text-xs transition-colors"
                >
                  {language === 'es' ? 'Ver certificado' : 'View certificate'}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* IQNet */}
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-corporate-red/20 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    IQNet
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Red Internacional de Certificación' : 'International Certification Network'}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Red Internacional de Certificación reconocida por IRAM. Sistema de Gestión de la Calidad certificado con presencia en Bahía Blanca.'
                    : 'International Certification Network recognized by IRAM. Certified Quality Management System with presence in Bahía Blanca.'}
                </p>
                <a 
                  href="https://drive.google.com/file/d/1Nqk4EIJ0Yy4v13qxERVYKWFGJAK2zfsy/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-corporate-red hover:text-corporate-red-hover font-semibold text-xs transition-colors"
                >
                  {language === 'es' ? 'Ver certificado' : 'View certificate'}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* API */}
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-corporate-red/20 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    API
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Inspección y Mantenimiento Industrial' : 'Industrial Inspection & Maintenance'}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Aplicación de estándares API en inspección de tanques, válvulas y equipos críticos, mediante procedimientos técnicos y documentación trazable.'
                    : 'Application of API standards in tank, valve and critical equipment inspection, through technical procedures and traceable documentation.'}
                </p>
              </div>
              
              {/* OPDS */}
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-corporate-red/20 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    OPDS
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Planta de Mantenimiento Certificada' : 'Certified Maintenance Plant'}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Planta de mantenimiento industrial certificada por el Organismo Provincial para el Desarrollo Sostenible (OPDS).'
                    : 'Industrial maintenance plant certified by the Provincial Agency for Sustainable Development (OPDS).'}
                </p>
              </div>
              
            </div>
        </div>
      </section>


    {/* ACTUALIDAD INSTITUCIONAL — CARRUSEL DESLIZANTE */}
    {publishedNews.length > 0 && (
    <section className="py-12 sm:py-14 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          
          {/* Título */}
          <RevealOnScroll direction="up">
            <div className="mb-8">
              <h2 
                className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
              >
                {language === 'es' ? 'Novedades' : 'Latest News'}
              </h2>
              <p 
                className="text-sm text-gray-600 max-w-2xl"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
              >
                {language === 'es' 
                  ? 'Manténgase informado sobre nuestras últimas actualizaciones, desarrollos técnicos y logros empresariales.'
                  : 'Stay informed about our latest updates, technical developments and business achievements.'}
              </p>
            </div>
          </RevealOnScroll>

        </div>

        {/* Grid de Novedades Adaptativo */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Limitar a 5 noticias máximo */}
          {(() => {
            const displayNews = publishedNews.slice(0, 5);
            const newsCount = displayNews.length;

                // Si hay solo 1 noticia: Layout horizontal grande (desktop) / carrusel (mobile)
                if (newsCount === 1) {
                  const news = displayNews[0];
                  const textPreview = extractTextPreview(news.content, 200);
                  
                  return (
                    <>
                      {/* Desktop: Horizontal */}
                      <Link 
                        to={`/novedades/${news.id}`}
                        className="hidden lg:flex group bg-white border-2 border-gray-200 overflow-hidden hover:shadow-2xl hover:border-corporate-red transition-all duration-300 rounded-xl"
                      >
                        <div className="w-1/2 overflow-hidden bg-gray-100">
                          <img 
                            src={news.image || '/galeriahome/1.jpg'}
                            alt={language === 'es' ? news.title : news.titleEn}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[400px]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="w-1/2 p-10 flex flex-col justify-center">
                          <span 
                            className="inline-block text-xs font-bold text-corporate-red uppercase tracking-[0.15em] mb-4"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            {news.category}
                          </span>
                          <h3 
                            className="text-3xl font-black text-gray-900 mb-5 leading-tight group-hover:text-corporate-red transition-colors duration-300"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            {language === 'es' ? news.title : news.titleEn}
                          </h3>
                          <p 
                            className="text-base text-gray-600 mb-6 leading-relaxed"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                          >
                            {textPreview}
                          </p>
                          <span 
                            className="inline-flex items-center gap-3 text-sm text-corporate-red font-bold uppercase tracking-wider group-hover:gap-4 transition-all"
                          >
                            {language === 'es' ? 'Leer artículo completo' : 'Read full article'}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </Link>

                      {/* Mobile: Carrusel con flechas */}
                      <div className="lg:hidden">
                        <div ref={carouselRef} className="overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
                          <div className="flex gap-4 px-6 pb-2">
                            <Link 
                              to={`/novedades/${news.id}`}
                              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col rounded-lg flex-shrink-0 w-[calc(100vw-3rem)] snap-center"
                            >
                              <div className="h-40 overflow-hidden bg-gray-100 flex-shrink-0">
                                <img 
                                  src={news.image || '/galeriahome/1.jpg'}
                                  alt={language === 'es' ? news.title : news.titleEn}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              <div className="p-4 flex flex-col">
                                <span 
                                  className="inline-block text-[9px] font-bold text-corporate-red uppercase tracking-[0.15em] mb-2"
                                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                >
                                  {news.category}
                                </span>
                                <h3 
                                  className="text-base font-bold text-gray-900 mb-2 leading-tight group-hover:text-corporate-red transition-colors duration-300 line-clamp-2"
                                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                >
                                  {language === 'es' ? news.title : news.titleEn}
                                </h3>
                                <p 
                                  className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2"
                                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                                >
                                  {textPreview}
                                </p>
                                <span 
                                  className="text-xs text-corporate-red font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                                >
                                  {language === 'es' ? 'Leer más' : 'Read more'}
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Flechas de navegación debajo */}
                        <div className="flex justify-center gap-3 mt-4">
                          <button
                            onClick={() => scrollCarousel('prev')}
                            className="bg-gray-200 hover:bg-corporate-red text-gray-800 hover:text-white p-3 rounded-lg transition-all"
                            aria-label="Anterior"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => scrollCarousel('next')}
                            className="bg-gray-200 hover:bg-corporate-red text-gray-800 hover:text-white p-3 rounded-lg transition-all"
                            aria-label="Siguiente"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </>
                  );
                }

                // Si hay 2-5 noticias: Grid adaptativo (desktop) / carrusel (mobile)
                return (
                  <>
                    {/* Desktop: Grid adaptativo según cantidad */}
                    <div className={`hidden lg:grid gap-6 ${
                      newsCount === 2 ? 'grid-cols-2' :
                      newsCount === 3 ? 'grid-cols-3' :
                      newsCount === 4 ? 'grid-cols-2 xl:grid-cols-4' :
                      'grid-cols-3 xl:grid-cols-5'
                    }`}>
                      {displayNews.map((news) => {
                        const textPreview = extractTextPreview(news.content, 100);
                        
                        return (
                          <Link 
                            key={news.id}
                            to={`/novedades/${news.id}`}
                            className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:border-corporate-red transition-all duration-300 flex flex-col rounded-lg"
                          >
                            <div className="h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                              <img 
                                src={news.image || '/galeriahome/1.jpg'}
                                alt={language === 'es' ? news.title : news.titleEn}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                              <span 
                                className="inline-block text-[9px] font-bold text-corporate-red uppercase tracking-[0.15em] mb-3"
                                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                              >
                                {news.category}
                              </span>
                              <h3 
                                className="text-base font-bold text-gray-900 mb-3 leading-tight group-hover:text-corporate-red transition-colors duration-300 line-clamp-2"
                                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                              >
                                {language === 'es' ? news.title : news.titleEn}
                              </h3>
                              <p 
                                className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3"
                                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                              >
                                {textPreview}
                              </p>
                              <span 
                                className="text-xs text-corporate-red font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
                              >
                                {language === 'es' ? 'Leer más' : 'Read more'}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Mobile: Carrusel horizontal con flechas de navegación */}
                    <div className="lg:hidden">
                      <div ref={carouselRef} className="overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
                        <div className="flex gap-4 px-6 pb-2">
                          {displayNews.map((news) => {
                            const textPreview = extractTextPreview(news.content, 100);
                            
                            return (
                              <Link 
                                key={news.id}
                                to={`/novedades/${news.id}`}
                                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col rounded-lg flex-shrink-0 w-[calc(100vw-3rem)] snap-center"
                              >
                                <div className="h-40 overflow-hidden bg-gray-100 flex-shrink-0">
                                  <img 
                                    src={news.image || '/galeriahome/1.jpg'}
                                    alt={language === 'es' ? news.title : news.titleEn}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                      loading="lazy"
                                      decoding="async"
                                  />
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                  <span 
                                    className="inline-block text-[9px] font-bold text-corporate-red uppercase tracking-[0.15em] mb-2"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                  >
                                    {news.category}
                                  </span>
                                  <h3 
                                    className="text-base font-bold text-gray-900 mb-2 leading-tight group-hover:text-corporate-red transition-colors duration-300 line-clamp-2"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                  >
                                    {language === 'es' ? news.title : news.titleEn}
                                  </h3>
                                  <p 
                                    className="text-sm text-gray-600 mb-3 leading-relaxed flex-grow line-clamp-2"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                                  >
                                    {textPreview}
                                  </p>
                                  <span 
                                    className="text-xs text-corporate-red font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
                                  >
                                    {language === 'es' ? 'Leer más' : 'Read more'}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Flechas de navegación debajo */}
                      {displayNews.length > 1 && (
                        <div className="flex justify-center gap-3 mt-4">
                          <button
                            onClick={() => scrollCarousel('prev')}
                            className="bg-gray-200 hover:bg-corporate-red text-gray-800 hover:text-white p-3 rounded-lg transition-all"
                            aria-label="Anterior"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => scrollCarousel('next')}
                            className="bg-gray-200 hover:bg-corporate-red text-gray-800 hover:text-white p-3 rounded-lg transition-all"
                            aria-label="Siguiente"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                );
          })()}

          {/* CTA Ver todas las novedades */}
          <div className="mt-12 text-center">
            <Link 
              to="/novedades"
              className="inline-flex items-center gap-2 text-sm text-corporate-red font-semibold hover:gap-3 transition-all"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver todas las novedades' : 'View all news'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      )}


      {/* NUESTRO COMPROMISO — CENTRADO Y LIMPIO */}
      <section className="bg-gray-50 py-12 sm:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          
          {/* Badge sin logo */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Desde 1979' : 'Since 1979'}
              </span>
            </div>
          </div>
          
          {/* Título */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
          >
            {language === 'es' 
              ? 'Servicio al servicio de las empresas' 
              : 'A service company at the service of companies'}
          </h2>
          
          {/* Texto principal */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'SERVIN Ingeniería S.A. surge en 1979 como consecuencia del polo petroquímico que emergía en una ciudad netamente agrícola, ganadera y comercial, sin estructura de servicios para asistir a estas empresas.'
                : 'SERVIN Ingeniería S.A. was founded in 1979 in response to the emerging petrochemical hub in a city historically focused on agriculture, livestock and commerce, with limited service infrastructure to support these industries.'}
            </p>
            
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'Esta inquietud toma forma orientando su actividad al asesoramiento y provisión de materiales para la industria (principalmente válvulas, cañerías, accesorios para alta presión y acoplamientos para equipos rotantes), iniciando sus operaciones en un local de 30 m² rentado en Villarino 45, Bahía Blanca.'
                : 'That need shaped the company’s mission around industrial consulting and the supply of materials (mainly valves, piping, high-pressure fittings and couplings for rotating equipment), starting operations in a 30 m² rented facility at Villarino 45, Bahía Blanca.'}
            </p>

            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'Con el tiempo, la empresa amplía instalaciones y presencia regional: en 1984 abre sus propias instalaciones en Av. Colón 2110 (Bahía Blanca) y consolida el crecimiento con nuevas capacidades y unidades de negocio. En los últimos 20 años, la facturación se multiplicó por 30 y la infraestructura pasó de 30 m² a 2.639 m², con más de 400 empresas en cartera.'
                : 'Over time, the company expanded its facilities and regional presence: in 1984 it opened its own site at Av. Colón 2110 (Bahía Blanca) and later consolidated growth with new capabilities and business units. Over the last 20 years, revenue multiplied by 30 and infrastructure grew from 30 m² to 2,639 m², serving a portfolio of more than 400 companies.'}
            </p>

            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'Sostenemos una cultura de trabajo basada en la credibilidad, la vocación de servicio y el respeto por nuestros clientes y colaboradores.'
                : 'We uphold a work culture built on credibility, service vocation, and respect for our clients and collaborators.'}
            </p>
          </div>
          
          {/* Firma con logo al lado */}
          <div className="mt-8 pt-6 border-t border-gray-300 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
            <img 
              src="/norberto.png"
              alt="Norberto Dagnino"
              className="w-16 h-16 rounded-full object-cover border border-gray-200 bg-white flex-shrink-0"
              style={{ objectPosition: '50% 20%' }}
              loading="lazy"
              decoding="async"
            />
            <div className="text-center">
              <p 
                className="text-sm font-semibold text-gray-900 mb-0.5"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Ing. Norberto Dagnino' : 'Eng. Norberto Dagnino'}
              </p>
              <p 
                className="text-xs text-gray-500"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Presidente Servin Ingeniería S.A.' : 'President Servin Ingeniería S.A.'}
              </p>
            </div>
          </div>
          
        </div>
      </section>


      {/* INFRAESTRUCTURA Y OPERACIONES — GALERÍA PREMIUM IRREGULAR */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Encabezado con badge */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-4 py-1.5 mb-3">
              <span className="text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Instalaciones' : 'Facilities'}
              </span>
            </div>
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
            >
              {language === 'es' ? 'Infraestructura propia' : 'Own Infrastructure'}
            </h2>
            <p 
              className="text-sm text-gray-600 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es' 
                ? 'Instalaciones equipadas con tecnología de última generación para ensayos, mantenimiento y operaciones industriales de alta precisión.'
                : 'Facilities equipped with state-of-the-art technology for testing, maintenance and high-precision industrial operations.'}
            </p>
          </div>
          
          {/* Grid elegante - 8 imágenes en diseño balanceado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            
            {/* Primera fila: 2 imágenes grandes */}
            <motion.div
              className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[280px] md:h-[320px] lg:h-[400px]"
              onClick={() => openGallery(0)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={galleryReduced[0]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>

            <motion.div
              className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[280px] md:h-[320px] lg:h-[400px]"
              onClick={() => openGallery(1)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src={galleryReduced[1]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>

            {/* Segunda fila: 4 imágenes medianas */}
            <motion.div
              className="relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[240px] md:h-[260px]"
              onClick={() => openGallery(2)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={galleryReduced[2]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[240px] md:h-[260px]"
              onClick={() => openGallery(3)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src={galleryReduced[3]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[240px] md:h-[260px]"
              onClick={() => openGallery(4)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src={galleryReduced[4]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[240px] md:h-[260px]"
              onClick={() => openGallery(5)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img 
                src={galleryReduced[5]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>

            {/* Tercera fila: 2 imágenes anchas */}
            <motion.div
              className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[240px] md:h-[280px]"
              onClick={() => openGallery(6)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img 
                src={galleryReduced[6]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>

            <motion.div
              className="md:col-span-1 lg:col-span-2 relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer group h-[240px] md:h-[280px]"
              onClick={() => openGallery(7)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <img 
                src={galleryReduced[7]}
                alt="SERVIN Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>
            
          </div>
          
        </div>
      </section>


      {/* CTA FINAL — ELEGANTE Y PROFESIONAL */}
      <section className="relative bg-black py-12 sm:py-14 lg:py-16 overflow-hidden">
        
        {/* Líneas decorativas sutiles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Contenido */}
            <div className="text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center bg-corporate-red/10 border border-corporate-red rounded-full px-4 py-1.5 mb-4">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
                <span className="text-corporate-red text-[10px] sm:text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Consultoría Técnica' : 'Technical Consulting'}
                </span>
              </div>
              
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
              >
                {language === 'es' 
                  ? 'Soluciones industriales especializadas con respaldo técnico certificado' 
                  : 'Specialized industrial solutions with certified technical support'}
              </h2>
              
              <p 
                className="text-sm text-white/80 mb-6 leading-relaxed"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
              >
                {language === 'es'
                  ? 'Infraestructura propia de 2.639 m², procesos alineados a estándares internacionales y equipo técnico con más de 46 años de experiencia en industria pesada.'
                  : 'Own 2,639 m² infrastructure, processes aligned with international standards and technical team with over 46 years of experience in heavy industry.'}
              </p>
              
            </div>
            
            {/* CTA Card */}
            <div className="bg-white border border-white/20 p-5 sm:p-6 lg:p-8 rounded-lg">
              
              <h3 
                className="text-base sm:text-lg font-semibold text-black mb-4"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? '¿Necesita asistencia técnica?' : 'Need technical assistance?'}
              </h3>
              
              <p className="text-xs sm:text-sm text-black/70 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Nuestro equipo evalúa su requerimiento y propone soluciones adaptadas a sus operaciones críticas.'
                  : 'Our team evaluates your requirement and proposes solutions tailored to your critical operations.'}
              </p>
              
              <div className="space-y-2.5">
                <Link 
                  to={`/contact?subject=${encodeURIComponent(
                    language === 'es'
                      ? 'Solicito una consulta técnica'
                      : 'I request technical consultation'
                  )}#formulario`}
                  className="btn-primary w-full"
                >
                  {language === 'es' ? 'Solicitar consulta técnica' : 'Request technical consultation'}
                </Link>

                <Link 
                  to="/divisiones"
                  className="btn-secondary w-full"
                >
                  {language === 'es' ? 'Explorar capacidades técnicas' : 'Explore technical capabilities'}
                </Link>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </section>


      {/* MODAL GALERIA */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[50000] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeGallery}
          ></div>

          <div
            ref={galleryModalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            className="relative w-full max-w-5xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] bg-black/40 rounded-xl border border-white/10 overflow-hidden shadow-2xl"
          >
            <h2 id="gallery-title" className="sr-only">
              {language === 'es' ? 'Galería de imágenes' : 'Image gallery'}
            </h2>

            {/* Boton cerrar */}
            <button
              onClick={closeGallery}
              aria-label={language === 'es' ? 'Cerrar galería' : 'Close gallery'}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navegacion */}
            <button
              onClick={prevImage}
              aria-label={language === 'es' ? 'Imagen anterior' : 'Previous image'}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              aria-label={language === 'es' ? 'Imagen siguiente' : 'Next image'}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Imagen */}
            <div className="h-full w-full flex items-center justify-center p-3 sm:p-4">
              <img
                src={galleryReduced[currentImageIndex]}
                alt={`SERVIN ${currentImageIndex + 1}`}
                className="max-w-full max-h-[calc(100dvh-10rem)] sm:max-h-[calc(100dvh-12rem)] object-contain rounded-lg"
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:text-sm bg-black/40 border border-white/10 rounded-full px-3 py-1">
              {currentImageIndex + 1} / {galleryReduced.length}
            </div>
          </div>
        </div>
      )}

      </div>
    </>
  );
};

export default Home;
