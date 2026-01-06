import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedNews } from '../utils/newsManager';
import { useLanguage } from '../context/LanguageContext';

const News = () => {
  const { language, t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(language === 'es' ? 'Todos' : 'All');

  useEffect(() => {
    const allNews = getPublishedNews();
    setNews(allNews);
  }, []);

  const categories = language === 'es' 
    ? ['Todos', 'Proyectos', 'Mantenimiento', 'Inspección API', 'Obras Civiles', 'Certificaciones']
    : ['All', 'Projects', 'Maintenance', 'API Inspection', 'Civil Works', 'Certifications'];

  const filteredNews = (selectedCategory === 'Todos' || selectedCategory === 'All')
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', options);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-corporate-dark via-corporate-dark/95 to-corporate-red/20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" 
            alt="Novedades" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-dark/90 via-corporate-dark/85 to-corporate-red/30"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="relative z-10 container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 animate-fade-in">
              <span className="block text-white/95 font-semibold mb-2">{t('novedadesTitle')}</span>
              <span className="block font-extrabold text-corporate-accent">{t('novedadesSubtitle')}</span>
            </h1>
            
            <p className="text-base lg:text-sm sm:text-base md:text-lg text-white/85 mb-12 font-medium leading-relaxed max-w-3xl mx-auto animate-slide-up tracking-tight">
              {t('novedadesDesc')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-accent mb-2">{news.length}</div>
                <div className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">{t('publicaciones')}</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-accent mb-2">{categories.length - 1}</div>
                <div className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">{t('categorias')}</div>
              </div>
              <div className="text-center md:col-span-1 col-span-2">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-accent mb-2">2025</div>
                <div className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">{t('anoActivo')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white border-b border-corporate-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-display font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-corporate-red text-white shadow-lg scale-105'
                    : 'bg-corporate-gray-100 text-corporate-gray-600 hover:bg-corporate-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-custom">
          {filteredNews.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-6">📰</div>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-corporate-black mb-4">
                {language === 'es' ? 'No hay novedades disponibles' : 'No news available'}
              </h3>
              <p className="text-corporate-gray-600">
                {(selectedCategory === 'Todos' || selectedCategory === 'All')
                  ? (language === 'es' ? 'Pronto publicaremos nuevas novedades.' : 'We will soon publish new updates.')
                  : (language === 'es' 
                      ? `No hay novedades en la categoría "${selectedCategory}".`
                      : `No news in the "${selectedCategory}" category.`)}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <article 
                  key={item.id}
                  className="corporate-card group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Image */}
                  <div className="relative h-56 bg-corporate-gray-200 overflow-hidden">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-corporate-gray-300">
                        <svg className="w-20 h-20 text-corporate-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-corporate-red text-white text-[10px] sm:text-xs font-display font-semibold px-4 py-2 rounded-full shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center text-corporate-gray-500 text-xs sm:text-sm mb-3">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(item.date)}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-corporate-black mb-3 group-hover:text-corporate-red transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-corporate-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                      {item.summary}
                    </p>

                    {/* Read More */}
                    <Link 
                      to={`/news/${item.id}`}
                      className="inline-flex items-center text-corporate-red font-display font-semibold text-xs sm:text-sm hover:text-corporate-accent transition-colors duration-300 group"
                    >
                      {t('leerMas')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display heading-2 mb-6">
              {language === 'es' ? '¿Desea recibir nuestras novedades?' : 'Want to receive our news?'}
            </h2>
            <div className="divider mb-8"></div>
            <p className="text-corporate-large mb-10">
              {language === 'es' 
                ? 'Contáctenos para mantenerse informado sobre nuestros proyectos y servicios.'
                : 'Contact us to stay informed about our projects and services.'}
            </p>
            <Link to="/contact" className="btn-primary">
              {language === 'es' ? 'Contactar con Nosotros' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
