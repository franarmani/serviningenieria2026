import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import velanData from '../../data/velanCatalogoCompleto.json';

const ValvulasIndustriales = () => {
  const { language, t, getLocalizedField } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [productLineActiva, setProductLineActiva] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  // Cargar válvulas desde JSON de Velan
  const valvulas = velanData.valvulas || [];

  // Calcular cantidades dinámicamente
  const contarPorCategoria = (catId) => {
    if (catId === 'todos') return valvulas.length;
    return valvulas.filter(v => v.categoria === catId).length;
  };

  // Obtener Product Lines únicos
  const productLines = ['todos', ...new Set(valvulas.map(v => v.product_line))];

  // Categorías reales según catálogo oficial SERVIN
  const categorias = [
    { id: 'todos', nombre: 'Todos', nombreCorto: 'Todos', cantidad: contarPorCategoria('todos') },
    { id: 'esclusas-globo-retencion', nombre: 'Esclusas / Globo / Retención', nombreCorto: 'Esclusas', cantidad: contarPorCategoria('esclusas-globo-retencion') },
    { id: 'esfericas-mariposas-diafragma', nombre: 'Esféricas / Mariposas / Diafragma', nombreCorto: 'Esféricas', cantidad: contarPorCategoria('esfericas-mariposas-diafragma') },
    { id: 'especiales', nombre: 'Servicios Especiales', nombreCorto: 'Especiales', cantidad: contarPorCategoria('especiales') },
    { id: 'seguridad', nombre: 'Seguridad y Automatización', nombreCorto: 'Seguridad', cantidad: contarPorCategoria('seguridad') }
  ];

  // Filtrado combinado
  const valvulasFiltradas = valvulas.filter(v => {
    const matchCategoria = categoriaActiva === 'todos' || v.categoria === categoriaActiva;
    const matchProductLine = productLineActiva === 'todos' || v.product_line === productLineActiva;
    const matchBusqueda = busqueda === '' || 
      v.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      v.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      v.normas?.some(n => n.toLowerCase().includes(busqueda.toLowerCase())) ||
      v.aplicaciones?.some(a => a.toLowerCase().includes(busqueda.toLowerCase()));
    return matchCategoria && matchProductLine && matchBusqueda;
  });

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(26, 26, 26) 25%, rgb(42, 42, 42) 75%, rgb(15, 15, 15) 100%)'}}>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img src="https://www.dombor.com/wp-content/uploads/2023/06/image.png" alt="Industrial Background" className="w-full h-full object-cover" style={{filter: 'grayscale(100%) contrast(1.2)', mixBlendMode: 'overlay'}} />
        </div>
        <div className="absolute inset-0 z-10" style={{background: 'radial-gradient(rgba(139, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)'}}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">
          <div className="mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 lg:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3" style={{backgroundColor: '#8B0000'}}></div>
              <span className="text-white/80 text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                {language === 'es' ? 'Catálogo Oficial SERVIN' : 'SERVIN Official Catalog'}
              </span>
            </div>
          </div>

          <div className="mb-4 sm:mb-6 lg:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-2 sm:mb-3 lg:mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 200, letterSpacing: '0.01em', lineHeight: '1.1'}}>
              {language === 'es' ? 'VÁLVULAS' : 'INDUSTRIAL'}
            </h1>
            
            <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <div className="h-px w-6 sm:w-8 lg:w-16 mr-2 sm:mr-3 lg:mr-4" style={{background: 'linear-gradient(to right, transparent, #8B0000)'}}></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-4xl sm:text-5xl lg:text-6xl font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '1.1'}}>
                {language === 'es' ? 'INDUSTRIALES' : 'VALVES'}
              </h2>
              <div className="h-px w-6 sm:w-8 lg:w-16 ml-2 sm:ml-3 lg:ml-4" style={{background: 'linear-gradient(to right, #8B0000, transparent)'}}></div>
            </div>
          </div>

          <p className="text-xs sm:text-sm lg:text-sm sm:text-base xl:text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 lg:mb-16 max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2 px-2" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300, letterSpacing: '0.01em'}}>
            {language === 'es' 
              ? 'Válvulas API 600, 602, 603, esféricas, mariposa, seguridad y servicios especiales.'
              : 'API 600, 602, 603 valves, ball valves, butterfly, safety and special services.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-6 animate-fade-in-up-delay-3 px-2">
            <Link className="btn-primary w-full sm:w-48 lg:w-64 h-10 sm:h-11 lg:h-14 text-xs sm:text-sm lg:text-sm sm:text-base" to="/contact" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
            </Link>
            <a href="#catalogo" className="btn-secondary w-full sm:w-48 lg:w-64 h-10 sm:h-11 lg:h-14 text-xs sm:text-sm lg:text-sm sm:text-base" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Ver Catálogo' : 'View Catalog'}</a>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 hidden sm:block">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[10px] sm:text-[10px] sm:text-xs font-medium mb-1.5 sm:mb-2 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
            <svg className="w-3 h-5 sm:w-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Navegación */}
      <section className="py-3 sm:py-4 lg:py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link to="/services" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Servicios' : 'Services'}</Link>
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 mx-1 sm:mx-1.5 lg:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/services/ingenieria-materiales" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Materiales' : 'Materials'}</Link>
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 mx-1 sm:mx-1.5 lg:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium flex-shrink-0" style={{color: '#8B0000'}}>{language === 'es' ? 'Válvulas' : 'Valves'}</span>
          </div>
        </div>
      </section>

      {/* Filtros por Categoría - Diseño Premium */}
      <section id="catalogo" className="py-6 sm:py-8 lg:py-12 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          
          {/* Header de filtros */}
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[10px] sm:text-xs font-medium tracking-wider uppercase mb-3 sm:mb-4">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {language === 'es' ? 'Explorar Catálogo' : 'Explore Catalog'}
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Encuentra la' : 'Find the'} <span className="font-bold" style={{ color: '#8B0000' }}>{language === 'es' ? 'válvula ideal' : 'ideal valve'}</span>
            </h2>
          </div>

          {/* Contenedor principal de filtros */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden">
            
            {/* Barra de búsqueda premium */}
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-white/5 rounded-xl sm:rounded-2xl blur-xl"></div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={language === 'es' ? 'Buscar válvulas...' : 'Search valves...'}
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full px-3 sm:px-4 lg:px-5 py-3 sm:py-3.5 lg:py-4 pl-10 sm:pl-12 lg:pl-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-white/50 focus:bg-white/15 focus:border-white/40 focus:ring-2 focus:ring-corporate-red/50 focus:outline-none transition-all text-xs sm:text-sm lg:text-sm sm:text-base"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  />
                  <div className="absolute left-2.5 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-corporate-red/80 rounded-md sm:rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  {busqueda && (
                    <button 
                      onClick={() => setBusqueda('')}
                      className="absolute right-2.5 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white/10 hover:bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center transition-colors"
                    >
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                {busqueda && (
                  <div className="mt-1.5 sm:mt-2 text-center text-white/60 text-[10px] sm:text-[10px] sm:text-xs">
                    {language === 'es' ? 'Resultados:' : 'Results:'} "<span className="text-white font-medium">{busqueda}</span>"
                  </div>
                )}
              </div>
            </div>

            {/* Sección de filtros */}
            <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-5 lg:space-y-6">
              
              {/* Línea de Producto - Dropdown estilizado */}
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gray-100 rounded-md sm:rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Línea de Producto' : 'Product Line'}
                  </h3>
                  {productLineActiva !== 'todos' && (
                    <button 
                      onClick={() => setProductLineActiva('todos')}
                      className="ml-auto text-[10px] sm:text-[10px] sm:text-xs text-corporate-red hover:text-corporate-red/80 font-medium flex items-center gap-0.5 sm:gap-1"
                    >
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {language === 'es' ? 'Limpiar' : 'Clear'}
                    </button>
                  )}
                </div>
                
                {/* Grid de líneas de producto */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 sm:gap-2">
                  {productLines.map((pl) => (
                    <button
                      key={pl}
                      onClick={() => setProductLineActiva(pl)}
                      className={`group relative px-2 sm:px-2.5 lg:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-[10px] sm:text-xs font-medium transition-all duration-300 text-left overflow-hidden ${
                        productLineActiva === pl
                          ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 transition-colors ${
                          productLineActiva === pl ? 'bg-corporate-red' : 'bg-gray-300 group-hover:bg-gray-400'
                        }`}></div>
                        <span className="truncate text-[10px] sm:text-[10px] sm:text-xs">{pl === 'todos' ? (language === 'es' ? 'Todas' : 'All') : pl}</span>
                      </div>
                      {productLineActiva === pl && (
                        <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 absolute top-0.5 right-0.5 sm:top-1 sm:right-1 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 sm:px-4 text-[10px] sm:text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">{language === 'es' ? 'Tipo' : 'Type'}</span>
                </div>
              </div>

              {/* Categorías - Cards visuales */}
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-corporate-red/10 rounded-md sm:rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Categoría' : 'Category'}
                  </h3>
                </div>

                {/* Mobile: Grid de cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:hidden">
                  {categorias.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategoriaActiva(cat.id)}
                      className={`relative p-3 rounded-lg transition-all duration-300 text-left ${
                        categoriaActiva === cat.id
                          ? 'bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white shadow-lg shadow-corporate-red/20'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold leading-tight">{cat.nombreCorto}</span>
                        <span className={`text-base sm:text-lg md:text-xl font-bold mt-0.5 ${categoriaActiva === cat.id ? 'text-white' : 'text-corporate-red'}`}>
                          {cat.cantidad}
                        </span>
                        <span className={`text-[9px] ${categoriaActiva === cat.id ? 'text-white/70' : 'text-gray-500'}`}>
                          {language === 'es' ? 'productos' : 'products'}
                        </span>
                      </div>
                      {categoriaActiva === cat.id && (
                        <div className="absolute top-1.5 right-1.5">
                          <svg className="w-3 h-3 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Desktop: Cards horizontales premium */}
                <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {categorias.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategoriaActiva(cat.id)}
                      className={`group relative p-4 rounded-xl transition-all duration-300 text-left overflow-hidden ${
                        categoriaActiva === cat.id
                          ? 'bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white shadow-lg shadow-corporate-red/25 scale-[1.02]'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {/* Background decoration */}
                      <div className={`absolute -right-4 -bottom-4 w-20 h-20 rounded-full transition-all duration-300 ${
                        categoriaActiva === cat.id ? 'bg-white/10' : 'bg-gray-200/50 group-hover:bg-gray-300/50'
                      }`}></div>
                      
                      <div className="relative flex flex-col">
                        <span className={`text-xl sm:text-2xl lg:text-3xl font-bold ${categoriaActiva === cat.id ? 'text-white' : 'text-corporate-red'}`}>
                          {cat.cantidad}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold mt-1 leading-tight">{cat.nombreCorto}</span>
                        <span className={`text-[10px] mt-0.5 ${categoriaActiva === cat.id ? 'text-white/60' : 'text-gray-500'}`}>
                          {cat.id === 'todos' ? 'total' : (language === 'es' ? 'productos' : 'products')}
                        </span>
                      </div>
                      
                      {categoriaActiva === cat.id && (
                        <div className="absolute top-3 right-3">
                          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer con resumen de filtros activos */}
            <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>
                  <strong className="text-gray-900">{valvulasFiltradas.length}</strong> {language === 'es' ? 'productos' : 'products'}
                </span>
              </div>
              
              {(categoriaActiva !== 'todos' || productLineActiva !== 'todos' || busqueda) && (
                <button 
                  onClick={() => {
                    setCategoriaActiva('todos');
                    setProductLineActiva('todos');
                    setBusqueda('');
                  }}
                  className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-md sm:rounded-lg text-[10px] sm:text-[10px] sm:text-xs font-medium text-gray-600 hover:text-corporate-red hover:border-corporate-red/30 transition-colors"
                >
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {language === 'es' ? 'Limpiar' : 'Clear'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Válvulas */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 lg:mb-10">
            <h2 className="text-base sm:text-lg lg:text-2xl xl:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-2 sm:mb-3 lg:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {categoriaActiva === 'todos' ? (language === 'es' ? 'Catálogo ' : 'Complete ') : ''}<span className="font-semibold text-corporate-red">{categoriaActiva === 'todos' ? (language === 'es' ? 'Completo' : 'Catalog') : categorias.find(c => c.id === categoriaActiva)?.nombre}</span>
            </h2>
            <p className="text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {valvulasFiltradas.length} {language === 'es' ? 'productos con certificación' : 'certified products'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {valvulasFiltradas.map((valvula) => (
              <Link 
                key={valvula.id}
                to={`/materiales/valvulas/${valvula.id}`}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Imagen del producto */}
                <div className="aspect-square overflow-hidden relative bg-gray-50">
                  <img 
                    src={valvula.imagen}
                    alt={valvula.nombre}
                    className="w-full h-full object-contain p-1.5 sm:p-2 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x200?text=Velan';
                    }}
                  />
                  {/* Badge de Product Line */}
                  <div className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5">
                    <span className="inline-flex items-center bg-black/70 backdrop-blur-sm text-white text-[8px] sm:text-[9px] font-medium px-1 sm:px-1.5 py-0.5 rounded-full truncate max-w-[70px] sm:max-w-[90px]">
                      {valvula.product_line?.split(' ')[0] || 'Velan'}
                    </span>
                  </div>
                  {/* Badge certificado */}
                  <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5">
                    <span className="inline-flex items-center bg-green-500/90 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-medium px-1 sm:px-1.5 py-0.5 rounded-full">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="hidden sm:inline">Cert.</span>
                    </span>
                  </div>
                  {/* Overlay on hover - solo en desktop */}
                  <div className="absolute inset-0 bg-corporate-red/0 group-hover:bg-corporate-red/10 transition-colors hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/90 text-corporate-red text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {language === 'es' ? 'Ver detalles' : 'View details'}
                    </span>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="p-1.5 sm:p-2 lg:p-2.5">
                  <h4 className="text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-bold text-gray-900 mb-1 group-hover:text-corporate-red transition-colors line-clamp-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' && valvula.nombre_es ? valvula.nombre_es : valvula.nombre}
                  </h4>

                  {/* Normas */}
                  <div className="mb-1 sm:mb-1.5">
                    <div className="flex flex-wrap gap-0.5">
                      {valvula.normas?.slice(0, 2).map((norma, idx) => (
                        <span 
                          key={idx}
                          className="inline-block bg-gray-100 text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded text-gray-600"
                        >
                          {norma}
                        </span>
                      ))}
                      {valvula.normas?.length > 2 && (
                        <span className="inline-block bg-gray-100 text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded text-gray-500">
                          +{valvula.normas.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Aplicaciones - ocultas en móvil pequeño */}
                  <div className="hidden sm:flex flex-wrap gap-0.5">
                    {(language === 'es' && valvula.aplicaciones_es ? valvula.aplicaciones_es : valvula.aplicaciones)?.slice(0, 2).map((app, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-corporate-red/10 text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded text-corporate-red"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {valvulasFiltradas.length === 0 && (
            <div className="text-center py-8 sm:py-10 lg:py-12">
              <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto text-gray-300 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm sm:text-base lg:text-sm sm:text-base md:text-lg font-semibold text-gray-600 mb-1.5 sm:mb-2">
                {language === 'es' ? 'No se encontraron válvulas' : 'No valves found'}
              </h3>
              <p className="text-xs sm:text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 px-4">{language === 'es' ? 'Intenta con otros filtros' : 'Try other filters'}</p>
              <button 
                onClick={() => { setCategoriaActiva('todos'); setProductLineActiva('todos'); setBusqueda(''); }}
                className="text-xs sm:text-xs sm:text-sm text-corporate-red font-medium hover:underline"
              >
                {language === 'es' ? 'Limpiar filtros' : 'Clear filters'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 lg:py-20 xl:py-24" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3"></div>
              <span className="text-white/90 text-[10px] sm:text-[10px] sm:text-xs lg:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Catálogo SERVIN' : 'SERVIN Catalog'}</span>
            </div>
            
            <h2 className="text-lg sm:text-xl lg:text-3xl xl:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? '¿Necesita válvulas certificadas' : 'Need certified valves'}<span className="block font-bold mt-1 sm:mt-2">{language === 'es' ? 'para su proyecto?' : 'for your project?'}</span>
            </h2>
            
            <p className="text-xs sm:text-sm lg:text-sm sm:text-base xl:text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Asesoramiento técnico en' : 'Technical advice on'} <strong className="text-white font-semibold">{language === 'es' ? 'válvulas API, esféricas, mariposa y seguridad' : 'API, ball, butterfly and safety valves'}</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 lg:gap-5 justify-center items-center px-2">
              <Link 
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 lg:px-10 py-3 sm:py-3.5 lg:py-4 bg-white text-xs sm:text-sm lg:text-sm sm:text-base md:text-lg font-bold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
              </Link>
              
              <Link 
                to="/services/ingenieria-materiales"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 lg:px-10 py-3 sm:py-3.5 lg:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm lg:text-sm sm:text-base md:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
                {language === 'es' ? 'Ver Materiales' : 'View Materials'}
              </Link>
            </div>
            
            <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-xs sm:max-w-lg lg:max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">
                <div className="text-white font-bold text-xs sm:text-sm lg:text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                <div className="text-white/70 text-[8px] sm:text-[10px] lg:text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia' : 'Experience'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">
                <div className="text-white font-bold text-xs sm:text-sm lg:text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>✓ API/ASME</div>
                <div className="text-white/70 text-[8px] sm:text-[10px] lg:text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Certificación' : 'Certification'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">
                <div className="text-white font-bold text-xs sm:text-sm lg:text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte' : 'Technical'}</div>
                <div className="text-white/70 text-[8px] sm:text-[10px] lg:text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Técnico' : 'Support'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValvulasIndustriales;