import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedNews, initializeSampleData } from '../utils/newsManager';
import { useLanguage } from '../context/LanguageContext';

const Novedades = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [novedades, setNovedades] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    initializeSampleData();
    const news = getPublishedNews();
    setNovedades(news);
  }, []);

  // Helper function to get translated title
  const getTitle = (news) => {
    if (language === 'en' && news.titleEn) {
      return news.titleEn;
    }
    return news.title;
  };

  // Helper function to get translated summary
  const getSummary = (news) => {
    if (language === 'en' && news.summaryEn) {
      return news.summaryEn;
    }
    return news.summary;
  };

  const categories = [
    { id: 'todos', name: t('todos'), icon: 'grid' },
    { id: 'Mant. Industrial', name: t('mantIndustrial'), icon: 'cog' },
    { id: 'Mant. In Situ', name: t('mantInSitu'), icon: 'wrench' },
    { id: 'Inspección API', name: t('inspeccionAPI'), icon: 'chart' },
    { id: 'Ingeniería de Materiales', name: t('ingenieriaMateriales'), icon: 'cube' },
    { id: 'Servin Construcciones', name: t('servinConstrucciones'), icon: 'building' },
    { id: 'Certificaciones', name: t('certificacionesLabel'), icon: 'badge' },
    { id: 'Empresa', name: t('empresaLabel2'), icon: 'info' }
  ];

  const getCategoryIcon = (iconType, className = "w-4 h-4") => {
    const icons = {
      grid: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
      cog: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      wrench: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      chart: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      cube: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      building: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      badge: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      info: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    };
    return icons[iconType] || icons.grid;
  };

  const featuredNews = novedades ? novedades.filter(novedad => novedad.featured) : [];

  const filteredNovedades = selectedCategory === 'todos' 
    ? (novedades ? novedades.filter(novedad => !novedad.featured) : [])
    : (novedades ? novedades.filter(novedad => novedad.category === selectedCategory && !novedad.featured) : []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', options);
  };

  const getRelativeTime = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return language === 'es' ? 'Ayer' : 'Yesterday';
    if (diffDays < 7) return language === 'es' ? `Hace ${diffDays} días` : `${diffDays} days ago`;
    if (diffDays < 30) return language === 'es' ? `Hace ${Math.floor(diffDays / 7)} semanas` : `${Math.floor(diffDays / 7)} weeks ago`;
    return formatDate(dateString);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Minimal & Elegant */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.25]">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
            alt="News Background"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(50%) contrast(1.1)' }}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* Minimal Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-corporate-red"></div>
              <span className="text-white/60 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Novedades' : 'News'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {language === 'es' ? 'Centro de' : 'Corporate'}
              <br />
              <span className="text-corporate-red">
                {language === 'es' ? 'Noticias' : 'News Center'}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base lg:text-sm sm:text-base md:text-lg text-white/50 max-w-xl leading-relaxed" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '400'
            }}>
              {language === 'es' 
                ? 'Últimos proyectos, logros y desarrollos de SERVIN INGENIERÍA'
                : 'Latest projects, achievements and developments from SERVIN INGENIERÍA'}
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Category Filter - Clean & Minimal */}
      <section id="content" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative flex items-center gap-2 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'text-corporate-red'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <span>{category.name}</span>
                <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-corporate-red/10 text-corporate-red'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.id === 'todos' ? novedades?.length || 0 : novedades?.filter(n => n.category === category.id).length || 0}
                </span>
                {/* Active Indicator */}
                {selectedCategory === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-corporate-red"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && selectedCategory === 'todos' && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-corporate-red/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-corporate-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Destacados' : 'Featured'}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Noticias más relevantes' : 'Most relevant news'}
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredNews.map((news, index) => (
                <Link 
                  key={news.id} 
                  to={`/novedades/${news.id}`} 
                  className={`group relative overflow-hidden rounded-2xl ${index === 0 ? 'lg:col-span-2 h-[480px]' : 'h-[380px]'}`}
                >
                  <img 
                    src={news.image} 
                    alt={getTitle(news)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Category & Date */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="bg-corporate-red text-white px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                    <span className="bg-black/30 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-md text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {getRelativeTime(news.date)}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className={`font-semibold text-white mb-3 leading-tight ${index === 0 ? 'text-2xl lg:text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg md:text-xl'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {getTitle(news)}
                    </h3>
                    <p className={`text-white/70 leading-relaxed mb-5 line-clamp-2 ${index === 0 ? 'text-sm sm:text-base max-w-3xl' : 'text-xs sm:text-sm'}`} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}>
                      {getSummary(news)}
                    </p>
                    <span className="inline-flex items-center text-white text-xs sm:text-sm font-medium group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {t('leerMas')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {selectedCategory === 'todos' 
                ? (language === 'es' ? 'Todas las Noticias' : 'All News')
                : categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-gray-400 font-normal ml-2">({filteredNovedades.length})</span>
            </h2>
          </div>

          {/* Grid */}
          {filteredNovedades.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredNovedades.map((news) => (
                <Link key={news.id} to={`/novedades/${news.id}`}>
                  <article className="group h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5">
                      <img 
                        src={news.image} 
                        alt={getTitle(news)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-corporate-red text-white px-2.5 py-1 rounded text-[10px] sm:text-xs font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {categories.find(cat => cat.id === news.category)?.name}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      {/* Date */}
                      <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {formatDate(news.date)}
                      </span>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mt-2 mb-2 leading-snug group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {getTitle(news)}
                      </h3>
                      
                      {/* Summary */}
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {getSummary(news)}
                      </p>
                      
                      {/* Read More */}
                      <span className="inline-flex items-center text-corporate-red text-xs sm:text-sm font-medium group-hover:gap-2 transition-all" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {t('leerMas')}
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'No hay noticias en esta categoría' : 'No news in this category'}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Prueba seleccionando otra categoría' : 'Try selecting another category'}
              </p>
              <button 
                onClick={() => setSelectedCategory('todos')}
                className="inline-flex items-center gap-2 text-corporate-red font-medium text-xs sm:text-sm hover:gap-3 transition-all"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Ver todas las noticias' : 'View all news'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Novedades;
