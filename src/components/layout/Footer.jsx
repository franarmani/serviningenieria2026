import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y descripción */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-3 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              SERVIN INGENIERÍA
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {t('footerDesc')}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {t('footerDesc2')}
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {t('divisiones')}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services/planta-mantenimiento" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {t('plantaMantenimiento')}
                </Link>
              </li>
              <li>
                <Link to="/services/mantenimientos-in-situ" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es' ? 'Mantenimientos In Situ' : 'On-Site Maintenance'}
                </Link>
              </li>
              <li>
                <Link to="/services/inspeccion-tanques-api" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {t('inspeccionTanques')}
                </Link>
              </li>
              <li>
                <Link to="/services/ingenieria-materiales" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {t('ingenieriaMateriales')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {t('enlaces')}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {t('acercaNosotros')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {t('servicios')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {t('contacto')}
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="text-gray-300 hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              © {new Date().getFullYear()} SERVIN INGENIERÍA S.A. {t('derechosReservados')}.
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs mt-2 md:mt-0" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {t('slogan')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
