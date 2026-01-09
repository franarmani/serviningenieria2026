import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import VimeoPlayer from '../components/VimeoPlayer';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import StaggerText from '../components/ui/StaggerText';
import { getPublishedNews } from '../services/newsService';

const Home = () => {
  const { language } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [publishedNews, setPublishedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [openStandard, setOpenStandard] = useState(null);
  const carouselRef = useRef(null);

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
  const currentYear = new Date().getFullYear();
  const foundingYear = 1979;
  const yearsInBusiness = currentYear - foundingYear;

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
      name: language === 'es' ? 'Revestimiento de Tanques' : 'Tank Coating',
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
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 50%, rgba(139, 0, 0, 0.1) 0%, transparent 50%)`
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
                    background: 'linear-gradient(135deg, #8B0000 0%, #DC2626 50%, #8B0000 100%)',
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
                      background: 'linear-gradient(90deg, #8B0000 0%, #DC2626 50%, #8B0000 100%)',
                      boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)'
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
        
        {/* Video background */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <div className="absolute inset-0">
            <VimeoPlayer
              videoId="1152915143"
              hash="fef85752dc"
              title={language === 'es' ? 'SERVIN Ingeniería - Video institucional' : 'SERVIN Engineering - Corporate video'}
              videoStyle={{
                filter: 'grayscale(100%) contrast(1.2)',
                mixBlendMode: 'overlay'
              }}
              className="absolute inset-0"
            />
          </div>
        </div>
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 z-10" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.03) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
          
          {/* Corporate badge */}
          <div className="mb-4 sm:mb-6 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-white/80 text-[10px] sm:text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? '+45 Años de Excelencia Industrial' : '+45 Years of Industrial Excellence'}
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
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)',
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
                to="/services" 
                className="group relative w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-corporate-red to-red-700 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-white tracking-wide uppercase inline-flex items-center justify-center w-full sm:w-auto transition-all duration-300"
                     style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <span className="mr-2">{language === 'es' ? 'Ver servicios' : 'View services'}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link 
                to="/about" 
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center tracking-wide uppercase"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <span className="mr-2">{language === 'es' ? 'Conocer la empresa' : 'About the company'}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
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
                  src="/galeriahome/1.jpg"
                  alt="Servin Ingeniería Instalaciones"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
          
        </div>
      </section>


      {/* ACTUALIDAD INSTITUCIONAL — CARRUSEL DESLIZANTE */}
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
          {publishedNews.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'No hay novedades publicadas en este momento.'
                  : 'No news published at the moment.'}
              </p>
            </div>
          )}
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
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-corporate-red/20 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    ISO 9001
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Sistema de Gestión de Calidad' : 'Quality Management System'}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Sistema de gestión de calidad certificado bajo norma ISO 9001, aplicado a los procesos definidos en el alcance de certificación.'
                    : 'Quality management system certified under ISO 9001, applied to processes defined in the certification scope.'}
                </p>
              </div>
              
              {/* API */}
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-corporate-red/20 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
              
              {/* ASME */}
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-corporate-red/20 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    ASME
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Criterios de Ingeniería Mecánica' : 'Mechanical Engineering Criteria'}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Aplicación de criterios ASME como referencia técnica en procedimientos de mantenimiento, ensayos y evaluación mecánica de equipos industriales.'
                    : 'Application of ASME criteria as technical reference in maintenance procedures, testing and mechanical evaluation of industrial equipment.'}
                </p>
              </div>
              
              {/* OPDS */}
              <div className="group bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl hover:border-corporate-red hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-corporate-red/20 transition-colors">
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


      {/* NUESTRO COMPROMISO — CENTRADO Y LIMPIO */}
      <section className="bg-gray-50 py-12 sm:py-14 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          
          {/* Badge sin logo */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}
              </span>
            </div>
          </div>
          
          {/* Título */}
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
          >
            {language === 'es' 
              ? 'Casi 5 décadas de crecimiento sostenido' 
              : 'Almost 5 decades of sustained growth'}
          </h2>
          
          {/* Texto principal */}
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'Servín Ingeniería ha experimentado un crecimiento notable en sus casi 5 décadas de historia. Nuestro crecimiento en facturación se ha multiplicado por 30 en los últimos 20 años, pasando de 30 m² de instalaciones alquiladas a una propiedad de 2639 m². Contamos con una cartera de 400 empresas, reflejando nuestra solidez en el mercado.'
                : 'Servín Ingeniería has experienced remarkable growth over its nearly 5 decades of history. Our revenue growth has multiplied by 30 in the last 20 years, going from 30 m² of rented facilities to a 2639 m² property. We have a portfolio of 400 companies, reflecting our market strength.'}
            </p>
            
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'A pesar de los desafíos económicos, hemos mantenido nuestro compromiso con la excelencia y la integridad. Nuestros valores, como la credibilidad, la vocación de servicio y el respeto hacia nuestros clientes, nos han guiado en cada paso del camino.'
                : 'Despite economic challenges, we have maintained our commitment to excellence and integrity. Our values, such as credibility, service vocation, and respect for our clients, have guided us every step of the way.'}
            </p>
            
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'Estamos agradecidos por el apoyo de nuestros clientes, proveedores, personal y colaboradores, cuyo respaldo ha sido fundamental en nuestro éxito.'
                : 'We are grateful for the support of our clients, suppliers, staff and collaborators, whose backing has been fundamental to our success.'}
            </p>
          </div>
          
          {/* Firma con logo al lado */}
          <div className="mt-8 pt-6 border-t border-gray-300 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
            <img 
              src="/logo-s-white.jpg"
              alt="Servin Ingeniería"
              className="w-10 h-10 object-contain flex-shrink-0"
            />
            <div className="text-center sm:text-left">
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
                  ? 'Infraestructura propia de 2.639 m², procesos alineados a estándares internacionales y equipo técnico con más de 45 años de experiencia en industria pesada.'
                  : 'Own 2,639 m² infrastructure, processes aligned with international standards and technical team with over 45 years of experience in heavy industry.'}
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
                  to="/contact"
                  className="block text-center px-6 sm:px-8 py-2.5 sm:py-3 bg-corporate-red hover:bg-[#6B0000] text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {language === 'es' ? 'Solicitar consulta técnica' : 'Request technical consultation'}
                </Link>

                <Link 
                  to="/services"
                  className="block text-center px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-black text-xs sm:text-sm font-medium border-2 border-black hover:bg-black hover:text-white rounded-lg transition-all duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
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
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          
          {/* Boton cerrar */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Navegacion */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Imagen */}
          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={galleryReduced[currentImageIndex]}
              alt={`SERVIN ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {currentImageIndex + 1} / {galleryReduced.length}
          </div>
          
        </div>
      )}

      </div>
    </>
  );
};

export default Home;
