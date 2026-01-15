import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import RichContentRenderer from '../components/ui/RichContentRenderer';
import { useLanguage } from '../context/LanguageContext';
import { useNews } from '../context/NewsContext';

const NewsDetail = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const { getNewsItem } = useNews();

  // Helper functions for bilingual content
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

  const getContent = (news) => {
    if (language === 'en' && news.content_en) {
      return news.content_en;
    }
    return news.content;
  };

  const getLocation = (news) => {
    if (!news) return '';
    if (language === 'en' && news.location_en) return news.location_en;
    return news.location || news.ubicacion || '';
  };

  useEffect(() => {
    const loadNews = async () => {
      const item = await getNewsItem(id);
      if (item && item.status === 'published') {
        setNewsItem(item);
      } else {
        navigate('/news');
      }
    };
    loadNews();
  }, [id, navigate, getNewsItem]);

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
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', options);
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
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pb-10 pt-28 sm:pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/50 mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <Link to="/" className="hover:text-white transition-colors">{language === 'es' ? 'Inicio' : 'Home'}</Link>
            <span>/</span>
            <Link to="/novedades" className="hover:text-white transition-colors">{language === 'es' ? 'Novedades' : 'News'}</Link>
          </div>

          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
            <span className="bg-corporate-red text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {newsItem.category}
            </span>
            <span className="text-white/50 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {formatDate(newsItem.date)}
            </span>

            {getLocation(newsItem) && (
              <span className="text-white/50 text-xs sm:text-sm inline-flex items-center gap-1.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {getLocation(newsItem)}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] max-w-4xl" style={{ 
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
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Summary */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-10 md:mb-12 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {getSummary(newsItem)}
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-corporate-red mb-12"></div>

          {/* Content */}
          <div className="prose prose-base sm:prose-lg lg:prose-xl prose-gray max-w-none prose-headings:text-xl sm:prose-headings:text-2xl lg:prose-headings:text-3xl prose-p:leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Conectemos su proyecto' : "Let's connect your project"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {language === 'es' ? (
                <>¿Tiene un proyecto <span className="text-corporate-red">industrial</span>?</>
              ) : (
                <>Have an <span className="text-corporate-red">industrial</span> project?</>
              )}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300'
            }}>
              {language === 'es' 
                ? 'Nuestro equipo de especialistas está listo para brindarle soluciones técnicas adaptadas a sus necesidades industriales.'
                : 'Our team of specialists is ready to provide you with technical solutions tailored to your industrial needs.'}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={`/contact?subject=${encodeURIComponent(
                  language === 'es'
                    ? `Consulta sobre novedad: ${getTitle(newsItem)}`
                    : `Inquiry about news: ${getTitle(newsItem)}`
                )}#formulario`}
                className="btn-primary"
              >
                {language === 'es' ? 'Solicitar Consulta' : 'Request Consultation'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/divisiones" 
                className="btn-secondary-invert"
              >
                {language === 'es' ? 'Explorar Divisiones' : 'Explore Divisions'}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-red mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>+30</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-white/60 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Años de experiencia' : 'Years of experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-red mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>+500</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-white/60 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Proyectos completados' : 'Completed projects'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-red mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>24/7</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-white/60 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Soporte técnico' : 'Technical support'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
