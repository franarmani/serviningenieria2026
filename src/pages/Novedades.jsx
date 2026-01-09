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
      
      {/* MASTHEAD EDITORIAL - Estilo Diario con Identidad SERVIN */}
      <section className="relative bg-[#2e2c3a] border-b-4 border-corporate-red pt-24 overflow-hidden">
        {/* Imagen de fondo con blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{backgroundImage: 'url(/galeriahome/13.jpg)'}}
        ></div>
        {/* Overlay negro para contraste */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Header Editorial */}
          <div className="text-center mb-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.04em', lineHeight: '0.9'}}>
              {language === 'es' ? 'NOVEDADES' : 'NEWS'}
            </h1>
            <div className="w-32 h-1.5 bg-corporate-red mx-auto mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/95 font-light max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em'}}>
              {language === 'es' 
                ? 'Actualidad técnica, proyectos y logros de SERVIN INGENIERÍA S.A.' 
                : 'Technical updates, projects and achievements from SERVIN INGENIERÍA S.A.'}
            </p>
          </div>
        </div>
      </section>

      {/* NOTICIA PRINCIPAL (HERO EDITORIAL) */}
      {featuredNews.length > 0 && (
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
                  <div className="flex items-center gap-2 text-xs text-[#999] mb-4 uppercase tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(featuredNews[0].date)}</span>
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

          {recentNews.length > 0 ? (
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
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-block bg-corporate-red text-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.1em]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        {news.category}
                      </span>
                      <span className="text-xs text-[#888] font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                        {formatDate(news.date)}
                      </span>
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
