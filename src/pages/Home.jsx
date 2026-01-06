import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { getPublishedNews } from '../utils/newsmanager';

const Home = () => {
  const { language } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [publishedNews, setPublishedNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Cargar novedades publicadas
    const news = getPublishedNews();
    setPublishedNews(news); // Cargar todas las novedades para el carrusel infinito
  }, []);

  // Calculo automatico de anos desde 1979
  const currentYear = new Date().getFullYear();
  const foundingYear = 1979;
  const yearsInBusiness = currentYear - foundingYear;

  // Funciones para el modal de galeria
  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 8);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 8) % 8);
  };

  // manejo de teclas para navegacion
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isGalleryOpen) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen]);

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
      name: language === 'es' ? 'Planta de mantenimiento Industrial' : 'Industrial maintenance Plant',
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
      description: language === 'es' ? 'Certificaciones internacionales' : 'International certifications'
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
    '/galeriahome/1.jpeg',
    '/galeriahome/2.jpg',
    '/galeriahome/3.jpeg',
    '/galeriahome/4.jpeg',
    '/galeriahome/5.jpeg',
    '/galeriahome/6.jpeg',
    '/galeriahome/7.png',
    '/galeriahome/8.png'
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <section className="relative h-screen flex itemás-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Subtle industrial image overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img 
            src="/hero-bg.jpg"
            alt="Industrial Background"
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(100%) contrast(1.2)',
              mixBlendmode: 'overlay'
            }}
          />
        </div>
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 z-10" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.03) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          
          {/* Corporate badge */}
          <motion.div 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex itemás-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? '+45 Años de Excelencia Industrial' : '+45 Years of Industrial Excellence'}
              </span>
            </div>
          </motion.div>
          
          {/* Executive title */}
          <motion.div 
            className="mb-6 sm:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-4 sm:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '0.9'
            }}>
              SERVIN
            </h1>
            <div className="flex itemás-center justify-center mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-2 sm:mr-4"></div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold" style={{ 
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
          </motion.div>
          
          {/* Professional subtitle */}
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-white/80 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}
          >
            {language === 'es' 
              ? 'Una empresa de servicios al servicio de las empresas.'
              : 'A service company at the service of companies.'}
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            className="px-4 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link 
              to="/services" 
              className="btn-primary w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base inline-flex itemás-center justify-center"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver servicios' : 'View services'}
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base inline-flex itemás-center justify-center font-semibold tracking-wide uppercase"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Conocer la empresa' : 'About the company'}
            </Link>
          </motion.div>
          
        </div>
        
      </section>

      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 itemás-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            
            {/* Lado izquierdo: Contenido */}
            <div>
              {/* Badge */}
              <div className="inline-flex itemás-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Somos' : 'We are'}
                </span>
              </div>
              
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
              >
                SERVIN
                <br />
                <span className="text-corporate-red">INGENIERÍA</span>
              </h2>
              
              <div className="space-y-4">
                <p 
                  className="text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                >
                  {language === 'es'
                    ? 'Servin Ingeniería S.A. es una empresa líder en servicios especializados para empresas. Con casi 5 décadas de experiencia, nos destacamos por nuestro compromiso con la excelencia y la satisfacción del cliente.'
                    : 'Servin Ingeniería S.A. is a leading company in specialized services for businesses. With nearly 5 decades of experience, we stand out for our commitment to excellence and customer satisfaction.'}
                </p>
                <p 
                  className="text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                >
                  {language === 'es'
                    ? 'Nuestra dedicación se refleja en un crecimiento constante y en el reconocimiento de más de 400 empresas que confían en nosotros. En Servin Ingeniería, nos comprometemos a seguir aportando soluciones innovadoras y a mantenernos como referentes en el mercado.'
                    : 'Our dedication is reflected in constant growth and the recognition of more than 400 companies that trust us. At Servin Ingeniería, we are committed to continuing to provide innovative solutions and remain leaders in the market.'}
                </p>
              </div>
            </div>
            
            {/* Lado derecho: Imagen */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/galeriahome/1.jpeg"
                  alt="Servin Ingeniería Instalaciones"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </motion.div>
          
        </div>
      </section>


      {/* ACTUALIDAD INSTITUCIONAL � CARRUSEL DESLIZANTE */}
      <section className="py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
              <h2 
                className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
              >
                {language === 'es' ? 'Novedades' : 'Latest News'}
              </h2>
              <p 
                className="text-base text-gray-600 max-w-2xl"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
              >
                {language === 'es' 
                  ? 'Manténgase informado sobre nuestras últimas actualizaciones, desarrollos técnicos y logros empresariales.'
                  : 'Stay informed about our latest updates, technical developments and business achievements.'}
              </p>
          </motion.div>

        </div>

        {/* Carrusel infinito deslizante */}
        {publishedNews.length > 0 ? (
          <div className="relative">
            
            {/* Contenedor con overflow hidden */}
            <div className="overflow-hidden">
              
              <motion.div 
                className="flex gap-4 sm:gap-6"
                animate={{
                  x: [0, -(publishedNews.length * 400)]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: publishedNews.length * 10,
                    ease: "linear"
                  }
                }}
              >
                {/* Duplicamos el array para loop infinito */}
                {[...publishedNews, ...publishedNews, ...publishedNews].map((news, index) => (
                  <Link 
                    key={`${news.id}-${index}`}
                    to={`/novedades/${news.id}`}
                    className="group flex-shrink-0 w-[320px] sm:w-[380px] md:w-[400px] h-[480px] bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    <div className="h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                      <img 
                        src={news.image || '/galeriahome/1.png'}
                        alt={language === 'es' ? news.title : news.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span 
                        className="inline-block text-[10px] font-bold text-corporate-red uppercase tracking-[0.15em] mb-3"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {news.category}
                      </span>
                      <h3 
                        className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-corporate-red transition-colors duration-300 line-clamp-2"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {language === 'es' ? news.title : news.titleEn}
                      </h3>
                      <p 
                        className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
                      >
                        {language === 'es' ? news.summary : news.summaryEn}
                      </p>
                      <span 
                        className="text-sm text-corporate-red font-semibold inline-flex itemás-center gap-2 group-hover:gap-3 transition-all mt-auto"
                      >
                        {language === 'es' ? 'Leer más' : 'Read more'}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Gradientes de fade en los bordes */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'No hay novedades publicadas en este momento.'
                : 'No news published at the moment.'}
            </p>
          </div>
        )}

        {/* CTA Ver todas las novedades */}
        {publishedNews.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 text-center">
            <Link 
              to="/novedades"
              className="inline-flex itemás-center gap-2 text-sm text-corporate-red font-semibold hover:gap-3 transition-all"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver todas las novedades' : 'View all news'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

      </section>

      <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
        
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent opacity-30"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
            
            {/* Encabezado */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
              >
                {language === 'es'
                  ? 'Certificaciones Internacionales'
                  : 'International Certifications'}
              </h2>
              <p 
                className="text-base text-gray-400 max-w-2xl mx-auto"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
              >
                {language === 'es'
                  ? 'Estándares globales aplicados a cada proceso de nuestra operación industrial.'
                  : 'Global standards applied to every process of our industrial operation.'}
              </p>
            </motion.div>
            
            {/* Certificaciones Grid */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-12 itemás-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              
              {/* ISO 9001 */}
              <motion.div 
                className="bg-white/5 border-2 border-white/10 p-6 rounded-lg hover:border-corporate-red hover:bg-white/10 transition-all duration-300 h-full flex flex-col itemás-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <div className="w-12 h-12 bg-corporate-red/20 rounded-full flex itemás-center justify-center mb-3">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  ISO 9001
                </span>
                <h3 className="text-sm font-semibold text-gray-300 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Sistema de Gestión de Calidad' : 'Quality Management System'}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Procesos documentados y auditados para garantizar calidad consistente en cada servicio.'
                    : 'Documented and audited processes to ensure consistent quality in every service.'}
                </p>
              </motion.div>
              
              {/* API */}
              <motion.div 
                className="bg-white/5 border-2 border-white/10 p-6 rounded-lg hover:border-corporate-red hover:bg-white/10 transition-all duration-300 h-full flex flex-col itemás-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <div className="w-12 h-12 bg-corporate-red/20 rounded-full flex itemás-center justify-center mb-3">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m9 5a2 2 0 002 2h2a2 2 0 002-2m9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  API
                </span>
                <h3 className="text-sm font-semibold text-gray-300 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Ensayos e Inspección Industrial' : 'Industrial Testing & Inspection'}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Métodos de inspección petrolera aplicados con trazabilidad técnica completa.'
                    : 'Petroleum inspection methods applied with complete technical traceability.'}
                </p>
              </motion.div>
              
              {/* ASmE */}
              <motion.div 
                className="bg-white/5 border-2 border-white/10 p-6 rounded-lg hover:border-corporate-red hover:bg-white/10 transition-all duration-300 h-full flex flex-col itemás-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <div className="w-12 h-12 bg-corporate-red/20 rounded-full flex itemás-center justify-center mb-3">
                  <svg className="w-6 h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                <span className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  ASmE
                </span>
                <h3 className="text-sm font-semibold text-gray-300 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Ingeniería Mecánica Aplicada' : 'Applied Mechanical Engineering'}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Criterios técnicos aplicados en diseño, fabricación y mantenimiento de equipos críticos.'
                    : 'Technical criteria applied in design, manufacturing and maintenance of critical equipment.'}
                </p>
              </motion.div>
              
            </motion.div>
            
        </div>
      </section>


      {/* NUESTRO COmPROmISO � CENTRADO Y LImPIO */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <motion.div 
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          
          {/* Badge sin logo */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex itemás-center bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}
              </span>
            </div>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
          >
            {language === 'es' 
              ? 'Casi 5 décadas de crecimiento sostenido' 
              : 'Almost 5 decades of sustained growth'}
          </h2>
          
          {/* Texto principal */}
          <div className="space-y-6 text-left max-w-3xl mx-auto">
            
            <p 
              className="text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'Servín Ingeniería ha experimentado un crecimiento notable en sus casi 5 décadas de historia. Nuestro crecimiento en facturación se ha multiplicado por 30 en los últimos 20 años, pasando de 30 m² de instalaciones alquiladas a una propiedad de 2639 m². Contamos con una cartera de 400 empresas, reflejando nuestra solidez en el mercado.'
                : 'Servín Ingeniería has experienced remarkable growth over its nearly 5 decades of history. Our revenue growth has multiplied by 30 in the last 20 years, going from 30 m² of rented facilities to a 2639 m² property. We have a portfolio of 400 companies, reflecting our market strength.'}
            </p>
            
            <p 
              className="text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'A pesar de los desafíos económicos, hemos mantenido nuestro compromiso con la excelencia y la integridad. Nuestros valores, como la credibilidad, la vocación de servicio y el respeto hacia nuestros clientes, nos han guiado en cada paso del camino.'
                : 'Despite economic challenges, we have maintained our commitment to excellence and integrity. Our values, such as credibility, service vocation, and respect for our clients, have guided us every step of the way.'}
            </p>
            
            <p 
              className="text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es'
                ? 'Estamos agradecidos por el apoyo de nuestros clientes, proveedores, personal y colaboradores, cuyo respaldo ha sido fundamental en nuestro éxito.'
                : 'We are grateful for the support of our clients, suppliers, staff and collaborators, whose backing has been fundamental to our success.'}
            </p>
          </div>
          
          {/* Firma con logo al lado */}
          <div className="mt-12 pt-8 border-t border-gray-300 max-w-md mx-auto flex flex-col sm:flex-row itemás-center justify-center gap-4">
            <img 
              src="/logo-s-white.jpg"
              alt="Servin Ingeniería"
              className="w-12 h-12 object-contain flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <p 
                className="text-base font-semibold text-gray-900 mb-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Ing. Norberto Dagnino' : 'Eng. Norberto Dagnino'}
              </p>
              <p 
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Presidente Servin Ingeniería S.A.' : 'President Servin Ingeniería S.A.'}
              </p>
            </div>
          </div>
          
        </motion.div>
      </section>


      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Encabezado con badge */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex itemás-center bg-corporate-red/5 border border-corporate-red/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-corporate-red uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Instalaciones' : 'Facilities'}
              </span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
            >
              {language === 'es' ? 'Infraestructura propia' : 'Own Infrastructure'}
            </h2>
            <p 
              className="text-base text-gray-600 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
            >
              {language === 'es' 
                ? 'Instalaciones equipadas con tecnología de última generación para ensayos, mantenimiento y operaciones industriales de alta precisión.'
                : 'Facilities equipped with state-of-the-art technology for testing, maintenance and high-precision industrial operations.'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            
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

      <section className="relative bg-black py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-corporate-red to-transparent"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 itemás-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            
            {/* Contenido */}
            <div className="text-left">
              
              {/* Badge */}
              <div className="inline-flex itemás-center bg-corporate-red/10 border border-corporate-red rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
                <span className="text-corporate-red text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Consultoría Técnica' : 'Technical Consulting'}
                </span>
              </div>
              
              <h2 
                className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}
              >
                {language === 'es' 
                  ? 'Soluciones industriales especializadas con respaldo técnico certificado' 
                  : 'Specialized industrial solutions with certified technical support'}
              </h2>
              
              <p 
                className="text-base text-white/80 mb-8 leading-relaxed"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}
              >
                {language === 'es'
                  ? 'Infraestructura propia de 2.639 m², procesos certificados ISO 9001 y equipo técnico con más de 45 años de experiencia en industria pesada.'
                  : 'Own 2,639 m² infrastructure, ISO 9001 certified processes and technical team with over 45 years of experience in heavy industry.'}
              </p>
              
            </div>
            
            {/* CTA Card */}
            <div className="bg-white border border-white/20 p-6 sm:p-8 lg:p-10 rounded-lg">
              
              <h3 
                className="text-lg sm:text-xl font-semibold text-black mb-6"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? '¿Necesita asistencia técnica?' : 'Need technical assistance?'}
              </h3>
              
              <p className="text-sm text-black/70 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Nuestro equipo evalúa su requerimiento y propone soluciones adaptadas a sus operaciones críticas.'
                  : 'Our team evaluates your requirement and proposes solutions tailored to your critical operations.'}
              </p>
              
              <div className="space-y-3">
                <Link 
                  to="/contact"
                  className="block text-center px-6 sm:px-8 py-3 sm:py-4 bg-corporate-red hover:bg-[#6B0000] text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {language === 'es' ? 'Solicitar consulta t�cnica' : 'Request technical consultation'}
                </Link>

                <Link 
                  to="/services"
                  className="block text-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-black text-sm sm:text-base font-medium border-2 border-black hover:bg-black hover:text-white rounded-lg transition-all duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {language === 'es' ? 'Explorar capacidades t�cnicas' : 'Explore technical capabilities'}
                </Link>
              </div>
              
            </div>
            
          </motion.div>
          
        </div>
      </section>

      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex itemás-center justify-center p-4">
          
          {/* Boton cerrar */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 w-12 h-12 flex itemás-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 18L18 6m6 6l12 12" />
            </svg>
          </button>
          
          {/* Navegacion */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex itemás-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex itemás-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5l7 7-7 7" />
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
  );
};

export default Home;
