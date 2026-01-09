import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Section - Empresa y tagline */}
        <div className="mb-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              SERVIN <span className="text-corporate-red">INGENIERÍA</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-3 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' 
                ? 'Ingeniería industrial aplicada a procesos críticos.'
                : 'Industrial engineering applied to critical processes.'}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es'
                ? 'Más de 45 años brindando soluciones técnicas para la industria pesada argentina.'
                : 'Over 45 years providing technical solutions for Argentine heavy industry.'}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                © {new Date().getFullYear()} <span className="font-medium text-white">SERVIN INGENIERÍA S.A.</span>
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
              </p>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="text-left md:text-right">
                <p className="text-xs sm:text-sm text-gray-500 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es'
                    ? 'Una empresa de servicios al servicio de las empresas.'
                    : 'A service company at the service of companies.'}
                </p>
                {/* Admin Login Button (discreto) */}
                <Link
                  to="/admin/login"
                  className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 text-[10px] text-gray-700 hover:text-gray-500 opacity-50 hover:opacity-70 transition-colors"
                  aria-label="Admin"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-.257-.257A6 6 0 1118 8zm-1.5 0a4.5 4.5 0 11-9 0 4.5 0 019 0zm-4.5 2.121l-1.06-1.061a1.5 1.5 0 112.12-2.121l1.061 1.06-2.121 2.122z" clipRule="evenodd" />
                  </svg>
                  <span className="tracking-tight">Admin</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
