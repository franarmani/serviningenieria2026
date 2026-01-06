import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

// Configuración modular del menú para facilitar mantenimiento
const menuConfig = {
  servicios: {
    items: [
      { 
        name: 'Ingeniería de Materiales', 
        path: '/services/ingenieria-materiales',
        description: 'Stock permanente y entrega rápida',
        hasSubmenu: true,
        submenu: [
          { 
            name: 'Acoplamientos Rexnord', 
            path: '/services/acoplamientos-rexnord',
            description: 'Omega, Viva, Addax, Thomas y Euroflex'
          },
          { 
            name: 'Reductores Falk CT-Series', 
            path: '/services/falk-ct-series',
            description: 'Torres de enfriamiento + Addax'
          },
          { 
            name: 'Accesorios para Cañerías', 
            path: '/materiales/accesorios-caneria',
            description: 'Codos, tees, reducciones - ASME'
          },
          { 
            name: 'Válvulas Industriales', 
            path: '/materiales/valvulas',
            description: 'Compuerta, globo, retención, mariposa'
          }
        ]
      },
      { 
        name: 'Planta de Mantenimiento Industrial', 
        path: '/services/planta',
        description: 'Infraestructura especializada 2,639 m²'
      },
      { 
        name: 'Laboratorio Móvil', 
        path: '/services/laboratorio-movil',
        description: 'Servicios técnicos en campo'
      },
      { 
        name: 'PREVENTEST – Calibración In Situ', 
        path: '/services/in-situ',
        description: 'Tecnología móvil de precisión'
      },
      { 
        name: 'Inspección de Tanques API & END', 
        path: '/services/inspecciones',
        description: 'Certificaciones internacionales'
      },
      { 
        name: 'Revestimiento de Tanques', 
        path: '/services/tratamiento-tanques',
        description: 'División en desarrollo',
        isComingSoon: true
      },
      { 
        name: 'Cabinas de Granallado', 
        path: '/services/cabinas-granallado',
        description: 'Disponible 2026',
        isComingSoon: true
      },
      { 
        name: 'Prefabricados', 
        path: '/services/prefabricados',
        description: 'Piping y estructuras - 2026',
        isComingSoon: true
      }
    ]
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMaterialesOpen, setIsMaterialesOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMaterialesOpen(false);
  }, [location]);

  // Cerrar menús al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('header')) {
        setIsServicesOpen(false);
        setIsMaterialesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const mainMenuItems = [
    { name: t('inicio'), path: '/' },
    { name: t('empresa'), path: '/about' },
    { name: t('servicios'), path: '/services', hasDropdown: true },
    { name: t('novedades'), path: '/novedades' },
    { name: t('contacto'), path: '/contact' }
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Componente para items del menú
  const MenuItem = ({ name, path, description, isComingSoon, hasSubmenu, onMouseEnter, children }) => (
    <div className="relative" onMouseEnter={onMouseEnter}>
      <Link
        to={path}
        className={`flex items-center justify-between px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 group`}
        style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-red-900/70 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
            <div>
              <div className="font-medium">{name}</div>
              {description && <div className="text-xs text-white/50 mt-0.5">{description}</div>}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {isComingSoon && (
            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full border border-amber-500/30 font-medium">
              {language === 'es' ? 'Próximamente' : 'Coming Soon'}
            </span>
          )}
          
          {hasSubmenu && !isComingSoon && (
            <svg 
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </Link>
      {children}
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          
          {/* Logo Corporativo */}
          <Link to="/" className="flex items-center group transition-all duration-300">
            <img 
              src="/logocompleto.png" 
              alt="SERVIN INGENIERÍA S.A." 
              className="h-12 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-2">
            {mainMenuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    setIsServicesOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) {
                    setIsServicesOpen(false);
                    setIsMaterialesOpen(false);
                  }
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => {
                    if (item.hasDropdown) {
                      setIsServicesOpen(false);
                      setIsMaterialesOpen(false);
                    }
                  }}
                  className={`relative px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 rounded-lg group ${
                    isActivePath(item.path)
                      ? 'text-white bg-white/10 border border-white/20' 
                      : 'text-white/90 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                  }`}
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '500',
                    letterSpacing: '0.025em'
                  }}
                >
                  {item.name}
                  
                  {item.hasDropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  
                  {/* Indicador de estado activo */}
                  <div className={`absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-red-900 to-red-800 transition-all duration-300 ${
                    isActivePath(item.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`}></div>
                </Link>

                {/* Mega Menú Servicios - CONTENEDOR ÚNICO */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-[60]">
                    <div className="w-[520px] bg-[#121212] backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 relative overflow-visible">
                      
                      {/* Header del menú */}
                      <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-red-900/10 to-transparent">
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {t('servicios')}
                        </h3>
                        <p className="text-white/60 text-xs mt-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {language === 'es' ? 'Soluciones especializadas certificadas' : 'Certified specialized solutions'}
                        </p>
                      </div>

                      {/* Contenedor principal con scroll */}
                      <div className="p-3 relative overflow-y-auto max-h-[calc(100vh-200px)]">
                        
                        {/* Items del menú */}
                        <div className="space-y-1">

                          {/* Ingeniería de Materiales CON SUBMENÚ INTEGRADO */}
                          <div 
                            className="relative"
                            onMouseEnter={() => setIsMaterialesOpen(true)}
                            onMouseLeave={() => setIsMaterialesOpen(false)}
                          >
                            <Link
                              to="/services/ingenieria-materiales"
                              className="dropdown-item flex items-center justify-between px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white rounded-lg transition-all duration-200 group"
                              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-red-900/70 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                                <div>
                                  <div className="font-medium">{t('ingenieriaMateriales')}</div>
                                  <div className="text-xs text-white/50 mt-0.5">{language === 'es' ? 'Materiales y componentes especializados' : 'Specialized materials and components'}</div>
                                </div>
                              </div>
                              <svg 
                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>

                            {/* SUBMENÚ PROFESIONAL */}
                            {isMaterialesOpen && (
                              <div className="absolute left-full top-0 ml-2 w-96 bg-[#121212] border border-white/10 rounded-xl shadow-2xl z-[9999] animate-fade-in">
                                
                                {/* Header del submenú */}
                                <div className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-red-900/10 to-transparent">
                                  <p className="text-red-800 text-xs font-semibold tracking-wider uppercase">
                                    {language === 'es' ? 'CATEGORÍAS ESPECIALIZADAS' : 'SPECIALIZED CATEGORIES'}
                                  </p>
                                  <p className="text-white/50 text-xs mt-1">
                                    {t('stockPermanente')}
                                  </p>
                                </div>

                                {/* Items del submenú */}
                                <div className="p-2 space-y-1">
                                  <Link
                                    to="/services/acoplamientos-rexnord"
                                    className="dropdown-item block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/5 group"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-1 h-1 bg-red-900/60 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                                      <div>
                                        <div className="font-medium text-white text-sm group-hover:text-red-800 transition-colors duration-200">
                                          {t('acoplamientosRexnord')}
                                        </div>
                                        <div className="text-xs text-white/50 mt-0.5">
                                          {t('acoplamientosDesc')}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>

                                  <Link
                                    to="/services/falk-ct-series"
                                    className="dropdown-item block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/5 group"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-1 h-1 bg-red-900/60 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                                      <div>
                                        <div className="font-medium text-white text-sm group-hover:text-red-800 transition-colors duration-200">
                                          {t('reductoresFalk')}
                                        </div>
                                        <div className="text-xs text-white/50 mt-0.5">
                                          {t('reductoresDesc')}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>

                                  <Link
                                    to="/materiales/accesorios-caneria"
                                    className="dropdown-item block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/5 group"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-1 h-1 bg-red-900/60 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                                      <div>
                                        <div className="font-medium text-white text-sm group-hover:text-red-800 transition-colors duration-200">
                                          {t('accesoriosCaneria')}
                                        </div>
                                        <div className="text-xs text-white/50 mt-0.5">
                                          {t('accesoriosDesc')}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>

                                  <Link
                                    to="/materiales/valvulas"
                                    className="dropdown-item block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/5 group"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-1 h-1 bg-red-900/60 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                                      <div>
                                        <div className="font-medium text-white text-sm group-hover:text-red-800 transition-colors duration-200">
                                          {t('valvulasIndustriales')}
                                        </div>
                                        <div className="text-xs text-white/50 mt-0.5">
                                          {t('valvulasDesc')}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <Link
                            to="/services/planta"
                            className="dropdown-item flex items-center px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white rounded-lg transition-all duration-200 group"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-red-900/70 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                              <div>
                                <div className="font-medium">{t('plantaMantenimiento')}</div>
                                <div className="text-xs text-white/50 mt-0.5">{t('plantaDesc')}</div>
                              </div>
                            </div>
                          </Link>

                          <Link
                            to="/services/laboratorio-movil"
                            className="dropdown-item flex items-center px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white rounded-lg transition-all duration-200 group"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-red-900/70 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                              <div>
                                <div className="font-medium">{language === 'es' ? 'Laboratorio Móvil' : 'Mobile Laboratory'}</div>
                                <div className="text-xs text-white/50 mt-0.5">{language === 'es' ? 'Servicios técnicos en campo' : 'Field technical services'}</div>
                              </div>
                            </div>
                          </Link>

                          <Link
                            to="/services/in-situ"
                            className="dropdown-item flex items-center px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white rounded-lg transition-all duration-200 group"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-red-900/70 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                              <div>
                                <div className="font-medium">{t('calibracionInSitu')}</div>
                                <div className="text-xs text-white/50 mt-0.5">{t('calibracionDesc')}</div>
                              </div>
                            </div>
                          </Link>

                          <Link
                            to="/services/inspecciones"
                            className="dropdown-item flex items-center px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white rounded-lg transition-all duration-200 group"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-red-900/70 rounded-full group-hover:bg-red-800 transition-colors duration-200"></div>
                              <div>
                                <div className="font-medium">{t('inspeccionTanques')}</div>
                                <div className="text-xs text-white/50 mt-0.5">{t('inspeccionDesc')}</div>
                              </div>
                            </div>
                          </Link>

                          <Link
                            to="/services/tratamiento-tanques"
                            className="dropdown-item flex items-center justify-between px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white/90 rounded-lg transition-all duration-200 group"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-amber-500/70 rounded-full group-hover:bg-amber-400 transition-colors duration-200"></div>
                              <div>
                                <div className="font-medium">{t('revestimientoTanques')}</div>
                                <div className="text-xs text-white/40 mt-0.5">{t('revestimientoDesc')}</div>
                              </div>
                            </div>
                            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full border border-amber-500/30 font-medium">
                              {t('proximamente')}
                            </span>
                          </Link>

                          <Link
                            to="/services/cabinas-granallado"
                            className="dropdown-item flex items-center justify-between px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white/90 rounded-lg transition-all duration-200 group"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-amber-500/70 rounded-full group-hover:bg-amber-400 transition-colors duration-200"></div>
                              <div>
                                <div className="font-medium">{t('cabinasGranallado')}</div>
                                <div className="text-xs text-white/40 mt-0.5">{t('cabinasDesc')}</div>
                              </div>
                            </div>
                            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full border border-amber-500/30 font-medium">
                              {t('proximamente')}
                            </span>
                          </Link>

                          <Link
                            to="/services/prefabricados"
                            className="dropdown-item flex items-center justify-between px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white/90 rounded-lg transition-all duration-200 group"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-amber-500/70 rounded-full group-hover:bg-amber-400 transition-colors duration-200"></div>
                              <div>
                                <div className="font-medium">{language === 'es' ? 'Prefabricados' : 'Prefabrication'}</div>
                                <div className="text-xs text-white/40 mt-0.5">{language === 'es' ? 'Piping y estructuras metálicas' : 'Piping and metal structures'}</div>
                              </div>
                            </div>
                            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full border border-amber-500/30 font-medium">
                              {t('proximamente')}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Acciones Desktop: Idioma + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Selector de Idioma */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                onBlur={() => setTimeout(() => setIsLangMenuOpen(false), 150)}
                className="flex items-center gap-1.5 px-2.5 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {/* Flag */}
                {language === 'es' ? (
                  <svg className="w-5 h-4 rounded-sm overflow-hidden" viewBox="0 0 640 480">
                    <rect width="640" height="160" fill="#74acdf"/>
                    <rect width="640" height="160" y="160" fill="#fff"/>
                    <rect width="640" height="160" y="320" fill="#74acdf"/>
                    <circle cx="320" cy="240" r="45" fill="#f6b40e"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-4 rounded-sm overflow-hidden" viewBox="0 0 640 480">
                    <rect width="640" height="480" fill="#bd3d44"/>
                    <rect y="37" width="640" height="37" fill="#fff"/>
                    <rect y="111" width="640" height="37" fill="#fff"/>
                    <rect y="185" width="640" height="37" fill="#fff"/>
                    <rect y="259" width="640" height="37" fill="#fff"/>
                    <rect y="333" width="640" height="37" fill="#fff"/>
                    <rect y="407" width="640" height="37" fill="#fff"/>
                    <rect width="256" height="259" fill="#192f5d"/>
                  </svg>
                )}
                <span className="text-xs font-medium uppercase">{language}</span>
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown de idiomas */}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-[#121212] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                  <button
                    onClick={() => { setLanguage('es'); setIsLangMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                      language === 'es' 
                        ? 'bg-red-900/20 text-white' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-4 rounded-sm overflow-hidden flex-shrink-0" viewBox="0 0 640 480">
                      <rect width="640" height="160" fill="#74acdf"/>
                      <rect width="640" height="160" y="160" fill="#fff"/>
                      <rect width="640" height="160" y="320" fill="#74acdf"/>
                      <circle cx="320" cy="240" r="45" fill="#f6b40e"/>
                    </svg>
                    <span className="font-medium">Español</span>
                    {language === 'es' && (
                      <svg className="w-4 h-4 ml-auto text-red-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                      language === 'en' 
                        ? 'bg-red-900/20 text-white' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-4 rounded-sm overflow-hidden flex-shrink-0" viewBox="0 0 640 480">
                      <rect width="640" height="480" fill="#bd3d44"/>
                      <rect y="37" width="640" height="37" fill="#fff"/>
                      <rect y="111" width="640" height="37" fill="#fff"/>
                      <rect y="185" width="640" height="37" fill="#fff"/>
                      <rect y="259" width="640" height="37" fill="#fff"/>
                      <rect y="333" width="640" height="37" fill="#fff"/>
                      <rect y="407" width="640" height="37" fill="#fff"/>
                      <rect width="256" height="259" fill="#192f5d"/>
                    </svg>
                    <span className="font-medium">English</span>
                    {language === 'en' && (
                      <svg className="w-4 h-4 ml-auto text-red-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Botón CTA */}
            <Link 
              to="/contact" 
              className="px-5 py-2 bg-gradient-to-r from-red-900 to-red-800 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-red-800 hover:to-red-700 hover:shadow-lg hover:shadow-red-900/25 hover:scale-105 border border-red-800/20"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.025em'
              }}
            >
              {language === 'es' ? 'Login' : 'Login'}
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex flex-col items-center justify-center space-y-1 transition-all duration-300 hover:bg-white/20 group"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Menú Móvil */}
        <div className={`lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10`}>
          <nav className="px-6 py-6 space-y-3">
            {mainMenuItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div
                    onClick={() => {
                      setIsServicesOpen(!isServicesOpen);
                      setIsMaterialesOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg cursor-pointer ${
                      isActivePath(item.path)
                        ? 'text-white bg-white/10 border border-white/20' 
                        : 'text-white/90 hover:text-white hover:bg-white/5'
                    }`}
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      letterSpacing: '0.025em'
                    }}
                  >
                    <span>{item.name}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${
                      isActivePath(item.path)
                        ? 'text-white bg-white/10 border border-white/20' 
                        : 'text-white/90 hover:text-white hover:bg-white/5'
                    }`}
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      letterSpacing: '0.025em'
                    }}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Submenú móvil para servicios */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {menuConfig.servicios.items.map((service, serviceIndex) => (
                      <div key={serviceIndex}>
                        {service.hasSubmenu ? (
                          <div
                            onClick={() => setIsMaterialesOpen(!isMaterialesOpen)}
                            className="flex items-center justify-between px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-white/50 mt-0.5">{service.description}</div>
                            </div>
                            <svg 
                              className={`w-3 h-3 transition-transform duration-200 ${
                                isMaterialesOpen ? 'rotate-180' : ''
                              }`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        ) : (
                          <Link
                            to={service.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-white/50 mt-0.5">{service.description}</div>
                          </Link>
                        )}
                        
                        {/* Submenú de Ingeniería de Materiales */}
                        {service.hasSubmenu && isMaterialesOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {service.submenu.map((subitem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subitem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                              >
                                <div className="font-medium">{subitem.name}</div>
                                <div className="text-[10px] text-white/40 mt-0.5">{subitem.description}</div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Selector de Idioma Móvil */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-white/60 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Idioma' : 'Language'}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      language === 'es'
                        ? 'bg-red-900/30 text-white border border-red-800/50'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <svg className="w-5 h-4 rounded-sm overflow-hidden" viewBox="0 0 640 480">
                      <rect width="640" height="160" fill="#74acdf"/>
                      <rect width="640" height="160" y="160" fill="#fff"/>
                      <rect width="640" height="160" y="320" fill="#74acdf"/>
                      <circle cx="320" cy="240" r="45" fill="#f6b40e"/>
                    </svg>
                    <span>ES</span>
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      language === 'en'
                        ? 'bg-red-900/30 text-white border border-red-800/50'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <svg className="w-5 h-4 rounded-sm overflow-hidden" viewBox="0 0 640 480">
                      <rect width="640" height="480" fill="#bd3d44"/>
                      <rect y="37" width="640" height="37" fill="#fff"/>
                      <rect y="111" width="640" height="37" fill="#fff"/>
                      <rect y="185" width="640" height="37" fill="#fff"/>
                      <rect y="259" width="640" height="37" fill="#fff"/>
                      <rect y="333" width="640" height="37" fill="#fff"/>
                      <rect y="407" width="640" height="37" fill="#fff"/>
                      <rect width="256" height="259" fill="#192f5d"/>
                    </svg>
                    <span>EN</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* CTA móvil */}
            <div className="pt-4 border-t border-white/10">
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-900 to-red-800 text-white text-sm font-semibold rounded-lg hover:from-red-800 hover:to-red-700"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Login' : 'Login'}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
