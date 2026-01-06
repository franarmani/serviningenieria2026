import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getNewsById } from '../utils/newsManager';
import RichContentRenderer from '../components/ui/RichContentRenderer';
import { useLanguage } from '../context/LanguageContext';

const NewsDetail = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);

  // Helper functions for bilingual content
  const getTitle = (news) => {
    if (language === 'en' && news.titleEn) {
      return news.titleEn;
    }
    return news.title;
  };

  const getSummary = (news) => {
    if (language === 'en' && news.summaryEn) {
      return news.summaryEn;
    }
    return news.summary;
  };

  const getContent = (news) => {
    if (language === 'en' && news.contentEn) {
      return news.contentEn;
    }
    return news.content;
  };

  useEffect(() => {
    const item = getNewsById(id);
    if (item && item.status === 'published') {
      setNewsItem(item);
    } else {
      navigate('/news');
    }
  }, [id, navigate]);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">📰</div>
          <p className="text-corporate-gray-600">{language === 'es' ? 'Cargando...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', options);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero */}
      <section className="relative min-h-[50vh] bg-[#0a0a0a] overflow-hidden flex items-end">
        {/* Background Image */}
        {newsItem.image && (
          <>
            <img 
              src={newsItem.image} 
              alt={getTitle(newsItem)}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              style={{ filter: 'grayscale(40%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </>
        )}
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pb-12 pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/50 mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <Link to="/" className="hover:text-white transition-colors">{language === 'es' ? 'Inicio' : 'Home'}</Link>
            <span>/</span>
            <Link to="/novedades" className="hover:text-white transition-colors">{language === 'es' ? 'Novedades' : 'News'}</Link>
          </div>

          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-corporate-red text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {newsItem.category}
            </span>
            <span className="text-white/50 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {formatDate(newsItem.date)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] max-w-4xl" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            {getTitle(newsItem)}
          </h1>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Summary */}
          <p className="text-xl lg:text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {getSummary(newsItem)}
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-corporate-red mb-12"></div>

          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <RichContentRenderer content={getContent(newsItem)} />
          </div>

          {/* Back Link */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <Link 
              to="/novedades"
              className="inline-flex items-center text-gray-500 hover:text-corporate-red font-medium text-xs sm:text-sm transition-colors"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {language === 'es' ? 'Volver a Novedades' : 'Back to News'}
            </Link>
          </div>
        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-20 lg:py-28 bg-corporate-red">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Content */}
            <div className="lg:max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-white"></div>
                <span className="text-white/60 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Contáctenos' : 'Contact Us'}
                </span>
              </div>
              <h3 className="text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? '¿Tiene un proyecto en mente?' : 'Have a project in mind?'}
              </h3>
              <p className="text-white/70 text-sm sm:text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Nuestros especialistas están listos para asesorarlo.'
                  : 'Our specialists are ready to assist you.'}
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-6 py-3.5 bg-white text-corporate-red font-semibold rounded-lg hover:bg-gray-100 transition-all"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Solicitar Consulta' : 'Request Consultation'}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-white font-medium rounded-lg border border-white/30 hover:border-white hover:bg-white/10 transition-all"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Ver Servicios' : 'View Services'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
