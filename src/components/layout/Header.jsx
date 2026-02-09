import React, { useState, useEffect, useRef } from 'react';
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
            name: 'Válvulas Industriales', 
            path: '/materiales/valvulas',
            description: 'Compuertas, globos, retenciones, mariposas'
          },
          { 
            name: 'Acoplamientos Rexnord', 
            path: '/materiales/acoplamientos',
            description: 'Omega, Viva, Addax, Thomas XTSR, Euroflex'
          },
          { 
            name: 'Reductores Falk CT-Series', 
            path: '/services/falk-ct-series',
            description: 'Torres de enfriamiento + Addax'
          },
          { 
            name: 'Accesorios para Cañerías', 
            path: '/materiales/accesorios-caneria',
            description: 'Codos, Te, Bridas, Reducciones, Caños'
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
        name: 'Revestimiento Industrial', 
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
  const bodyScrollRestoreRef = useRef(null);
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

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (!isMenuOpen) {
      if (bodyScrollRestoreRef.current) {
        bodyScrollRestoreRef.current();
        bodyScrollRestoreRef.current = null;
      }
      return;
    }

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    const restore = () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };

    bodyScrollRestoreRef.current = restore;
    return restore;
  }, [isMenuOpen]);

  // Cerrar menús al hacer click fuera (SOLO DESKTOP)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('header')) {
        setIsServicesOpen(false);
        setIsMaterialesOpen(false);
      }
    };

    // Solo aplicar en desktop
    if (window.innerWidth >= 1024) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, []);

  const mainMenuItems = [
    { name: t('inicio'), path: '/' },
    { name: t('empresa'), path: '/about' },
    { name: t('divisiones'), path: '/divisiones', hasDropdown: true },
    { name: t('novedades'), path: '/novedades' },
    {
      name: t('contacto'),
      path: '/contact',
      to: {
        pathname: '/contact',
        search: `?subject=${encodeURIComponent(language === 'es' ? 'Consulta general' : 'General inquiry')}`,
        hash: '#formulario'
      }
    }
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/divisiones') {
      return location.pathname === '/divisiones' || location.pathname.startsWith('/services/');
    }
    return location.pathname.startsWith(path);
  };

  // Componente para items del menú
  const MenuItem = ({ name, path, to, description, isComingSoon, hasSubmenu, onMouseEnter, children }) => (
    <div className="relative" onMouseEnter={onMouseEnter}>
      <Link
        to={to ?? path}
        className={`flex items-center justify-between px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 group`}
        style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '500' }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-corporate-red/70 rounded-full group-hover:bg-corporate-red-hover transition-colors duration-200"></div>
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
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#0a0a0a] border-b border-white/10 shadow-2xl">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          
          {/* Logo Corporativo */}
          <Link to="/" className="flex items-center relative z-[1001]">
            <img 
              src="/logocompleto.png" 
              alt="SERVIN INGENIERÍA S.A." 
              className="h-10 sm:h-12 w-auto"
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
                  <div className={`absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-corporate-red to-corporate-red-hover transition-all duration-300 ${
                    isActivePath(item.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`}></div>
                </Link>

                {/* Mega Menú Servicios - DISEÑO CORPORATIVO SOBRIO */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 z-[60]">
                    <div className="w-[680px] bg-[#0a0a0a] rounded-none border-t-2 border-corporate-red shadow-[0_20px_50px_-12px_rgba(0,0,0,0.9)]">
                      
                      {/* Header minimalista */}
                      <div className="px-8 py-6 border-b border-white/5">
                        <h3 className="text-white/90 font-light text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.2em' }}>
                          {t('servicios')}
                        </h3>
                      </div>

                      {/* Lista de servicios - diseño simple y directo */}
                      <div className="py-4">
                        
                        {/* Ingeniería de Materiales con submenú */}
                        <div 
                          className="relative group"
                          onMouseEnter={() => setIsMaterialesOpen(true)}
                          onMouseLeave={() => setIsMaterialesOpen(false)}
                        >
                          <Link
                            to="/services/ingenieria-materiales"
                            className="flex items-center justify-between px-8 py-4 text-white/80 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-corporate-red"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            <div>
                              <div className="text-sm font-medium tracking-wide">{t('ingenieriaMateriales')}</div>
                              <div className="text-xs text-white/40 mt-1 font-light">{language === 'es' ? 'Stock permanente y entrega rápida' : 'Permanent stock and fast delivery'}</div>
                            </div>
                            <svg className="w-5 h-5 text-white/70 group-hover:text-corporate-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>

                          {/* Submenú minimalista */}
                          {isMaterialesOpen && (
                            <div className="absolute left-full top-0 w-[380px] bg-[#0a0a0a] border-l border-white/5 shadow-[20px_0_50px_-12px_rgba(0,0,0,0.9)] z-[9999]">
                              
                              <div className="px-6 py-5 border-b border-white/5">
                                <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase font-light">
                                  {language === 'es' ? 'Categorías' : 'Categories'}
                                </p>
                              </div>

                              <div className="py-2">
                                <Link
                                  to="/materiales/valvulas"
                                  className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-white/20"
                                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                >
                                  <div className="text-sm font-normal">{language === 'es' ? 'Válvulas Velan' : 'Velan Valves'}</div>
                                  <div className="text-xs text-white/30 mt-1 font-light">{language === 'es' ? 'Esclusa, Globo, Retención, Mariposa, Bola' : 'Gate, Globe, Check, Butterfly, Ball'}</div>
                                </Link>

                                <Link
                                  to="/materiales/acoplamientos"
                                  className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-white/20"
                                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                >
                                  <div className="text-sm font-normal">{t('acoplamientosRexnord')}</div>
                                  <div className="text-xs text-white/30 mt-1 font-light">Omega, Viva, Addax, Thomas XTSR, Euroflex</div>
                                </Link>

                                <Link
                                  to="/services/falk-ct-series"
                                  className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-white/20"
                                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                >
                                  <div className="text-sm font-normal">{t('reductoresFalk')}</div>
                                  <div className="text-xs text-white/30 mt-1 font-light">CT-Series</div>
                                </Link>

                                <Link
                                  to="/materiales/accesorios-caneria"
                                  className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-white/20"
                                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                >
                                  <div className="text-sm font-normal">{t('accesoriosCaneria')}</div>
                                  <div className="text-xs text-white/30 mt-1 font-light">Codos, Te, Bridas, Reducciones, Caños</div>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Resto de servicios - lista simple */}
                        <Link
                          to="/services/planta"
                          className="flex items-center justify-between px-8 py-4 text-white/80 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-corporate-red"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          <div>
                            <div className="text-sm font-medium tracking-wide">{t('plantaMantenimiento')}</div>
                            <div className="text-xs text-white/40 mt-1 font-light">2,639 m² certificados OPDS</div>
                          </div>
                        </Link>

                        <Link
                          to="/services/laboratorio-movil"
                          className="flex items-center justify-between px-8 py-4 text-white/80 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-corporate-red"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          <div>
                            <div className="text-sm font-medium tracking-wide">{language === 'es' ? 'Laboratorio Móvil' : 'Mobile Laboratory'}</div>
                            <div className="text-xs text-white/40 mt-1 font-light">{language === 'es' ? 'Servicios técnicos en campo' : 'Field technical services'}</div>
                          </div>
                        </Link>

                        <Link
                          to="/services/in-situ"
                          className="flex items-center justify-between px-8 py-4 text-white/80 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-corporate-red"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          <div>
                            <div className="text-sm font-medium tracking-wide">{t('calibracionInSitu')}</div>
                            <div className="text-xs text-white/40 mt-1 font-light">Sistema PREVENTEST</div>
                          </div>
                        </Link>

                        <Link
                          to="/services/inspecciones"
                          className="flex items-center justify-between px-8 py-4 text-white/80 hover:text-white hover:bg-white/[0.02] transition-all duration-200 border-l-2 border-transparent hover:border-corporate-red"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          <div>
                            <div className="text-sm font-medium tracking-wide">{t('inspeccionTanques')}</div>
                            <div className="text-xs text-white/40 mt-1 font-light">API 653 & END</div>
                          </div>
                        </Link>

                        {/* Divisor sutil */}
                        <div className="my-2 mx-8">
                          <div className="h-px bg-white/5"></div>
                        </div>

                        {/* Servicios en desarrollo - minimalistas */}
                        <Link
                          to="/services/tratamiento-tanques"
                          className="flex items-center justify-between px-8 py-4 text-white/40 hover:text-white/60 hover:bg-white/[0.01] transition-all duration-200 border-l-2 border-transparent"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          <div>
                            <div className="text-sm font-medium tracking-wide">{t('revestimientoTanques')}</div>
                            <div className="text-xs text-white/20 mt-1 font-light">{language === 'es' ? 'En desarrollo' : 'In development'}</div>
                          </div>
                          <span className="text-[10px] text-white/30 tracking-wider">2026</span>
                        </Link>

                        <Link
                          to="/services/cabinas-granallado"
                          className="flex items-center justify-between px-8 py-4 text-white/40 hover:text-white/60 hover:bg-white/[0.01] transition-all duration-200 border-l-2 border-transparent"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          <div>
                            <div className="text-sm font-medium tracking-wide">{t('cabinasGranallado')}</div>
                            <div className="text-xs text-white/20 mt-1 font-light">{language === 'es' ? 'En desarrollo' : 'In development'}</div>
                          </div>
                          <span className="text-[10px] text-white/30 tracking-wider">2026</span>
                        </Link>

                        <Link
                          to="/services/prefabricados"
                          className="flex items-center justify-between px-8 py-4 text-white/40 hover:text-white/60 hover:bg-white/[0.01] transition-all duration-200 border-l-2 border-transparent"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          <div>
                            <div className="text-sm font-medium tracking-wide">{language === 'es' ? 'Prefabricados' : 'Prefabrication'}</div>
                            <div className="text-xs text-white/20 mt-1 font-light">{language === 'es' ? 'En desarrollo' : 'In development'}</div>
                          </div>
                          <span className="text-[10px] text-white/30 tracking-wider">2026</span>
                        </Link>
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
                        ? 'bg-corporate-red/20 text-white' 
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
                      <svg className="w-4 h-4 ml-auto text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                      language === 'en' 
                        ? 'bg-corporate-red/20 text-white' 
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
                      <svg className="w-4 h-4 ml-auto text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Botón CTA */}
            <a 
              href="https://fe-servin-production.up.railway.app/login"
              className="btn-primary"
            >
              {language === 'es' ? 'Login' : 'Login'}
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex flex-col items-center justify-center space-y-1 z-[2001]"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Menú Móvil - DESLIZA DESDE ARRIBA HACIA ABAJO */}
        {isMenuOpen && (
          <>
            {/* Overlay/Backdrop que ocupa toda la pantalla */}
            <div 
              className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-screen h-screen z-40 bg-black/80 backdrop-blur-sm lg:hidden animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            />

            {/* Contenido del menú - por encima del overlay */}
            <div 
              className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 lg:hidden flex flex-col bg-[#0a0a0a] overflow-y-auto pt-20"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsMenuOpen(false);
                }
              }}
              style={{ animation: 'slideDownMenu 0.4s cubic-bezier(0.32, 0.72, 0, 1)' }}
            >
              <style>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                @keyframes slideDownMenu {
                  from {
                    transform: translateY(-100vh);
                    opacity: 0;
                  }
                  to {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }
              `}</style>

              {/* Contenido del menú con scroll */}
              <div 
                className="flex-1 overflow-y-auto overscroll-contain px-6 py-6"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <nav className="space-y-3 w-full">
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
                          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/0 hover:bg-white/5 transition-all duration-200">
                            <Link
                              to={service.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex-1 text-sm text-white/80 hover:text-white"
                              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-white/50 mt-0.5">{service.description}</div>
                            </Link>
                            <button
                              type="button"
                              onClick={() => setIsMaterialesOpen(!isMaterialesOpen)}
                              className="p-2 text-white/70 hover:text-white"
                            >
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
                            </button>
                          </div>
                        ) : (
                          <Link
                            to={service.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{service.name}</span>
                              {service.isComingSoon && (
                                <span className="px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-corporate-red/20 text-corporate-red border border-corporate-red/30 rounded-full">
                                  {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                                </span>
                              )}
                            </div>
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
              <div className="pt-6 border-t border-white/10 mt-6">
                <div className="flex items-center justify-between px-4 py-2 mb-4">
                  <span className="text-sm text-white/60 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Idioma' : 'Language'}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage('es')}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        language === 'es'
                          ? 'bg-corporate-red/30 text-white border border-corporate-red/50'
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
                          ? 'bg-corporate-red/30 text-white border border-corporate-red/50'
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
              <div className="pt-4 border-t border-white/10 mt-6">
                <a 
                  href="https://fe-servin-production.up.railway.app/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full"
                >
                  {language === 'es' ? 'Login' : 'Login'}
                </a>
              </div>
              </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
