import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useNews } from '../context/NewsContext';

const Novedades = () => {
  const { language, t } = useLanguage();
  const { news, loading, loadPublishedNews } = useNews();
  const [novedades, setNovedades] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    loadNews();
  }, []);

  const loadNews = async () => {
    const data = await loadPublishedNews();
    setNovedades(data);
  };

  const getTitle = (news) => {
    if (language === 'en' && news.title_en) {
      return news.title_en;
    }
    return news.title;
  };

  const getSummary = (news) => {
    if (language === 'en' && news.summary_en) {
      return news.summary_en;
    }
    return news.summary;
  };

  const getLocation = (news) => {
    if (!news) return '';
    if (language === 'en' && news.location_en) return news.location_en;
    return news.location || news.ubicacion || '';
  };

  const featuredNews = novedades ? novedades.filter(novedad => novedad.featured) : [];
  const regularNews = novedades ? novedades.filter(novedad => !novedad.featured) : [];
  const recentNews = regularNews.slice(0, 6);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', options);
  };

  return (
    <div className="min-h-screen bg-[#fefefe]">
      
      {/* HERO SECTION - Estilo Contact */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <img 
            src="/galeriahome/13.jpg"
            alt="SERVIN INGENIERÍA Novedades"
            className="w-full h-full object-cover" 
            style={{ filter: 'none' }}
            loading="eager"
            fetchpriority="high"
          />
        </div>

        {/* Dark Overlay (lighter to reveal image) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/35 via-black/45 to-black/60"></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-12 lg:py-16 xl:py-20">
          {/* Badge */}
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-2 sm:px-4 md:px-6 py-0.5 sm:py-2 md:py-2.5">
              <div className="w-1 sm:w-2 h-1 sm:h-2 bg-corporate-red rounded-full mr-1.5 sm:mr-3 animate-pulse"></div>
              <span className="text-white/90 text-[8px] sm:text-xs md:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Novedades' : 'News'}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {language === 'es' ? 'ACTUALIDAD' : 'CURRENT'}{' '}
            <span className="text-corporate-red">{language === 'es' ? 'TÉCNICA' : 'UPDATES'}</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Proyectos, logros y últimas actualizaciones de SERVIN INGENIERÍA S.A.' 
              : 'Projects, achievements and latest updates from SERVIN INGENIERÍA S.A.'}
          </p>
        </div>

        {/* Scroll Indicator (match About/Home style) */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
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

      {/* NOTICIA PRINCIPAL (HERO EDITORIAL) */}
      {!loading && featuredNews.length > 0 && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <Link to={`/novedades/${featuredNews[0].id}`} className="block group">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Imagen Principal */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f5f5] rounded-lg">
                    <img 
                      src={featuredNews[0].image} 
                      alt={getTitle(featuredNews[0])}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-corporate-red text-white px-4 py-2 text-xs font-bold uppercase tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        {featuredNews[0].category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenido Principal */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  {/* Fecha */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#999] mb-4 uppercase tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(featuredNews[0].date)}</span>

                    {getLocation(featuredNews[0]) && (
                      <>
                        <span className="text-[#bbb]">•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {getLocation(featuredNews[0])}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Título */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-[1.05] mb-8 group-hover:text-corporate-red transition-colors" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.03em'}}>
                    {getTitle(featuredNews[0])}
                  </h2>

                  {/* Resumen */}
                  <p className="text-base sm:text-lg lg:text-xl text-[#444] leading-[1.7] mb-10" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', letterSpacing: '0.005em'}}>
                    {getSummary(featuredNews[0])}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-3 text-base font-bold text-corporate-red group-hover:gap-4 transition-all uppercase tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.1em'}}>
                    <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* NOTICIAS SECUNDARIAS - Grid Editorial */}
      <section className="bg-[#fefefe] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Separador con título de sección */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
            <div className="h-px bg-[#ddd] flex-1"></div>
            <h3 className="text-sm sm:text-base font-black uppercase tracking-[0.15em] text-[#555] whitespace-nowrap px-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              {language === 'es' ? 'Actualidad Industrial' : 'Latest Updates'}
            </h3>
            <div className="h-px bg-[#ddd] flex-1"></div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white border border-[#e5e5e5] overflow-hidden">
                  <div className="aspect-[16/9] bg-gray-200 animate-pulse border-b border-[#e5e5e5]"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-6 w-28 bg-gray-200 animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-100 animate-pulse"></div>
                    </div>
                    <div className="h-7 w-3/4 bg-gray-200 animate-pulse mb-4"></div>
                    <div className="space-y-2 mb-5">
                      <div className="h-4 w-full bg-gray-100 animate-pulse"></div>
                      <div className="h-4 w-11/12 bg-gray-100 animate-pulse"></div>
                      <div className="h-4 w-10/12 bg-gray-100 animate-pulse"></div>
                    </div>
                    <div className="h-5 w-24 bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : recentNews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {recentNews.map((news, index) => (
                <Link 
                  key={news.id} 
                  to={`/novedades/${news.id}`}
                  className="group bg-white border border-[#e5e5e5] hover:border-corporate-red transition-all duration-300"
                >
                  {/* Imagen */}
                  <div className="aspect-[16/9] overflow-hidden bg-[#f5f5f5] border-b border-[#e5e5e5]">
                    <img 
                      src={news.image} 
                      alt={getTitle(news)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    {/* Categoría */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                      <span className="inline-block bg-corporate-red text-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.1em]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        {news.category}
                      </span>
                      <span className="text-xs text-[#888] font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        {formatDate(news.date)}
                      </span>

                      {getLocation(news) && (
                        <span className="text-xs text-[#888] font-medium inline-flex items-center gap-1.5" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {getLocation(news)}
                        </span>
                      )}
                    </div>

                    {/* Título */}
                    <h4 className="text-xl sm:text-2xl font-extrabold text-[#1a1a1a] leading-[1.2] mb-4 group-hover:text-corporate-red transition-colors line-clamp-2" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>
                      {getTitle(news)}
                    </h4>

                    {/* Resumen */}
                    <p className="text-sm sm:text-base text-[#555] leading-[1.6] line-clamp-3 mb-5" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', letterSpacing: '0.005em'}}>
                      {getSummary(news)}
                    </p>

                    {/* Leer más */}
                    <div className="flex items-center gap-2 text-sm font-bold text-corporate-red uppercase tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                      <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-[#ccc] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-[#999]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                {language === 'es' ? 'No hay publicaciones disponibles' : 'No posts available'}
              </p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Novedades;
