import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import velanData from '../../data/velanCatalogoBilingue.json';

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
    { 
      id: 'todos', 
      nombre: language === 'es' ? 'Todos' : 'All', 
      nombreCorto: language === 'es' ? 'Todos' : 'All', 
      cantidad: contarPorCategoria('todos') 
    },
    { 
      id: 'esclusas-globo-retencion', 
      nombre: language === 'es' ? 'Esclusas / Globo / Retención' : 'Gate / Globe / Check', 
      nombreCorto: language === 'es' ? 'Globo' : 'Globe', 
      cantidad: contarPorCategoria('esclusas-globo-retencion') 
    },
    { 
      id: 'esfericas-mariposas-diafragma', 
      nombre: language === 'es' ? 'Esféricas / Mariposas / Diafragma' : 'Spherical / Butterfly / Diaphragm', 
      nombreCorto: language === 'es' ? 'Esféricas' : 'Spherical', 
      cantidad: contarPorCategoria('esfericas-mariposas-diafragma') 
    },
    { 
      id: 'especiales', 
      nombre: language === 'es' ? 'Servicios Especiales' : 'Special Services', 
      nombreCorto: language === 'es' ? 'Especiales' : 'Special', 
      cantidad: contarPorCategoria('especiales') 
    },
    { 
      id: 'seguridad', 
      nombre: language === 'es' ? 'Seguridad y Automatización' : 'Safety & Automation', 
      nombreCorto: language === 'es' ? 'Seguridad' : 'Safety', 
      cantidad: contarPorCategoria('seguridad') 
    }
  ];

  // Función para determinar el tipo de válvula y su prioridad
  const getTipoPrioridad = (valvula) => {
    const nombre = valvula.nombre.toLowerCase();
    const normas = valvula.normas?.join(' ').toLowerCase() || '';
    const productLine = valvula.product_line.toLowerCase();
    
    // 1. ESCLUSAS (Gate) - prioridad por tipo
    if (nombre.includes('gate') || nombre.includes('compuerta')) {
      if (nombre.includes('api 600')) return { tipo: 1, subtipo: 1 }; // API 600
      if (nombre.includes('cryogenic') || nombre.includes('criogénic')) return { tipo: 1, subtipo: 2 }; // Criogénicas
      if (productLine.includes('cast steel')) return { tipo: 1, subtipo: 3 }; // Cast steel comunes
      if (productLine.includes('small forged')) return { tipo: 1, subtipo: 4 }; // Small forged
      if (productLine.includes('large forged')) return { tipo: 1, subtipo: 5 }; // Large forged
      if (productLine.includes('corrosion resistant') || nombre.includes('api 603')) return { tipo: 1, subtipo: 6 }; // API 603
      return { tipo: 1, subtipo: 7 }; // Otras esclusas
    }
    
    // 2. GLOBO (Globe) - prioridad por tipo
    if (nombre.includes('globe') || nombre.includes('globo')) {
      if (nombre.includes('api 623')) return { tipo: 2, subtipo: 1 }; // API 623
      if (nombre.includes('cryogenic') || nombre.includes('criogénic')) return { tipo: 2, subtipo: 2 }; // Criogénicas
      if (productLine.includes('cast steel')) return { tipo: 2, subtipo: 3 }; // Cast steel comunes
      if (productLine.includes('small forged')) return { tipo: 2, subtipo: 4 }; // Small forged
      if (productLine.includes('corrosion resistant')) return { tipo: 2, subtipo: 5 }; // Resistentes a corrosión
      return { tipo: 2, subtipo: 6 }; // Otros globos
    }
    
    // 3. RETENCIÓN (Check) - prioridad por tipo
    if (nombre.includes('check') || nombre.includes('retención')) {
      if (productLine.includes('dual plate')) return { tipo: 3, subtipo: 1 }; // Dual plate
      if (productLine.includes('pilot-operated')) return { tipo: 3, subtipo: 2 }; // Pilot operated
      if (productLine.includes('cast steel')) return { tipo: 3, subtipo: 3 }; // Cast steel
      if (productLine.includes('small forged')) return { tipo: 3, subtipo: 4 }; // Small forged
      return { tipo: 3, subtipo: 5 }; // Otras retención
    }
    
    // 4. ESFÉRICAS (Ball/Spherical) - prioridad por tipo
    if (nombre.includes('ball') || nombre.includes('esférica') || nombre.includes('bola')) {
      if (nombre.includes('cryogenic') || nombre.includes('criogénic')) return { tipo: 4, subtipo: 1 }; // Criogénicas
      if (productLine.includes('metal-seated') || productLine.includes('metal seated')) return { tipo: 4, subtipo: 2 }; // Metal seated
      if (productLine.includes('severe service')) return { tipo: 4, subtipo: 3 }; // Severe service
      if (productLine.includes('resilient-seated') || productLine.includes('resilient seated')) return { tipo: 4, subtipo: 4 }; // Resilient seated
      return { tipo: 4, subtipo: 5 }; // Otras esféricas
    }
    
    // 5. MARIPOSA (Butterfly)
    if (nombre.includes('butterfly') || nombre.includes('mariposa')) {
      if (productLine.includes('triple offset')) return { tipo: 5, subtipo: 1 }; // Triple offset
      return { tipo: 5, subtipo: 2 }; // Otras mariposas
    }
    
    // 6. PRESSURE SEAL
    if (productLine.includes('pressure seal')) {
      return { tipo: 6, subtipo: 1 };
    }
    
    // 7. ESPECIALES - API 6A/6D, HF Alkylation, etc
    if (productLine.includes('api 6a')) return { tipo: 7, subtipo: 1 };
    if (productLine.includes('hydrofluoric') || nombre.includes('api 602')) return { tipo: 7, subtipo: 2 };
    if (productLine.includes('digital')) return { tipo: 7, subtipo: 3 };
    
    // 999. Sin clasificar
    return { tipo: 999, subtipo: 999 };
  };

  // Filtrado y ordenamiento combinado
  const valvulasFiltradas = valvulas
    .filter(v => {
      const matchCategoria = categoriaActiva === 'todos' || v.categoria === categoriaActiva;
      const matchProductLine = productLineActiva === 'todos' || v.product_line === productLineActiva;
      const matchBusqueda = busqueda === '' || 
        v.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        v.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        v.normas?.some(n => n.toLowerCase().includes(busqueda.toLowerCase())) ||
        v.aplicaciones?.some(a => a.toLowerCase().includes(busqueda.toLowerCase()));
      return matchCategoria && matchProductLine && matchBusqueda;
    })
    .sort((a, b) => {
      // Ordenar según tipo y subtipo
      const prioridadA = getTipoPrioridad(a);
      const prioridadB = getTipoPrioridad(b);
      
      // Primero por tipo, luego por subtipo
      if (prioridadA.tipo !== prioridadB.tipo) {
        return prioridadA.tipo - prioridadB.tipo;
      }
      return prioridadA.subtipo - prioridadB.subtipo;
    });

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about/velan.jpg" 
            alt={language === 'es' ? 'Válvulas Industriales' : 'Industrial Valves'} 
            className="w-full h-full object-cover" 
            style={{ filter: 'blur(3px)' }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-12 lg:py-16 xl:py-20">
          
          {/* Badge */}
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-2 sm:px-4 md:px-6 py-0.5 sm:py-2 md:py-2.5">
              <div className="w-1 sm:w-2 h-1 sm:h-2 bg-corporate-red rounded-full mr-1.5 sm:mr-3 animate-pulse"></div>
              <span className="text-white/90 text-[8px] sm:text-xs md:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            {language === 'es' ? (
              <>
                VÁLVULAS{' '}
                <span className="text-corporate-red">VELAN</span>
              </>
            ) : (
              <>
                VELAN{' '}
                <span className="text-corporate-red">VALVES</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Válvulas industriales de alto rendimiento: API 600, 602, 603, esféricas, mariposa, seguridad y servicios especiales para aplicaciones críticas.'
              : 'High-performance industrial valves: API 600, 602, 603, spherical, butterfly, safety and special services for critical applications.'}
          </p>

          {/* CTA */}
          <a 
            href="#catalogo" 
            className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {language === 'es' ? 'Ver catálogo' : 'View catalog'}
          </a>
        </div>

        {/* Deslizar */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-medium mb-1 sm:mb-2 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
            <svg className="w-3 h-5 sm:w-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Navegación */}
      <section className="py-4 sm:py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <Link 
              to="/divisiones"
              className="hover:text-corporate-red transition-colors flex-shrink-0"
            >
              {language === 'es' ? 'Divisiones' : 'Divisions'}
            </Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              to="/services/ingenieria-materiales"
              className="hover:text-corporate-red transition-colors flex-shrink-0"
            >
              {language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}
            </Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Válvulas Industriales' : 'Industrial Valves'}</span>
          </div>
        </div>
      </section>

      {/* Sección informativa (antes del catálogo) */}
      <section id="scroll-content" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
              <span className="text-gray-700 text-[11px] sm:text-xs font-semibold tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Representación Exclusiva' : 'Exclusive Representation'}
              </span>
            </div>

            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-2 sm:mb-4 leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? (
                <>
                  Válvulas
                  <span className="block font-semibold text-corporate-red mt-0.5 sm:mt-1">Velan</span>
                </>
              ) : (
                <>
                  Industrial
                  <span className="block font-semibold text-corporate-red mt-0.5 sm:mt-1">Velan Valves</span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
            {/* Texto */}
            <div>
              <div className="space-y-5 sm:space-y-8">
                <div>
                  <h3
                    className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {language === 'es' ? 'Representantes Autorizados' : 'Authorized Representatives'}
                  </h3>
                  <p
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}
                  >
                    {language === 'es'
                      ? 'Como representantes exclusivos de Velan en Argentina desde diciembre de 2000, ofrecemos válvulas industriales certificadas para procesos críticos: compuerta, globo, retención, esféricas, mariposa, seguridad y servicios especiales.'
                      : 'As the exclusive Velan representative in Argentina since December 2000, we provide certified industrial valves for critical processes: gate, globe, check, ball, butterfly, safety and special services.'}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {language === 'es' ? 'Confiabilidad en Condiciones Severas' : 'Reliability in Severe Service'}
                  </h3>
                  <p
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}
                  >
                    {language === 'es'
                      ? 'Equipos diseñados para altas presiones y temperaturas, corrosión, criogenia y aplicaciones severas, con cumplimiento API/ASME y trazabilidad técnica.'
                      : 'Designed for high pressure/temperature, corrosion, cryogenic and severe service applications, with API/ASME compliance and technical traceability.'}
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
                  <h3
                    className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {language === 'es' ? 'Soporte Técnico Especializado' : 'Specialized Technical Support'}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      language === 'es' ? 'Selección de válvula y materiales' : 'Valve and materials selection',
                      language === 'es' ? 'Análisis de aplicación y condiciones de proceso' : 'Application and process conditions analysis',
                      language === 'es' ? 'Provisión de repuestos y actuadores' : 'Spare parts and actuators supply',
                      language === 'es' ? 'Asistencia para especificaciones API/ASME' : 'Assistance with API/ASME specs',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span
                          className="text-xs sm:text-sm lg:text-base text-gray-700"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="flex flex-col gap-5 sm:gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/about/velan.jpg"
                  alt={language === 'es' ? 'Válvulas Velan Industriales' : 'Velan Industrial Valves'}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-corporate-red rounded-lg p-4 sm:p-6 lg:p-8 text-white border border-red-600">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-1 sm:mb-2">
                    {Math.max(0, productLines.length - 1)}
                  </div>
                  <p className="text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'LÍNEAS DE PRODUCTO' : 'PRODUCT LINES'}
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 sm:p-6 lg:p-8 text-white border border-gray-700">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-1 sm:mb-2">{valvulas.length}</div>
                  <p className="text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'MODELOS EN CATÁLOGO' : 'CATALOG MODELS'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Válvulas */}
      <section id="catalogo" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Catálogo de' : 'Valve'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Válvulas' : 'Catalog'}</span>
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' 
                ? 'Válvulas industriales certificadas para aplicaciones críticas. Cumplimiento API 600, 602, 603 y normativas internacionales.'
                : 'Certified industrial valves for critical applications. API 600, 602, 603 compliance and international standards.'}
            </p>

            {/* Barra de búsqueda */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder={language === 'es' ? 'Buscar válvulas...' : 'Search valves...'}
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-corporate-red focus:ring-2 focus:ring-corporate-red/20 focus:outline-none transition-all text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {busqueda && (
                  <button 
                    onClick={() => setBusqueda('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Botones de Filtro por Categoría */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-xs sm:text-sm font-medium transition-all duration-300 ${
                    categoriaActiva === cat.id
                      ? 'bg-corporate-red text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-corporate-red/50 hover:text-corporate-red'
                  }`}
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {cat.nombreCorto} ({cat.cantidad})
                </button>
              ))}
            </div>
          </div>
          
          {/* Grid de válvulas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
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
      <section className="py-10 sm:py-14 lg:py-20 xl:py-24" style={{background: 'linear-gradient(135deg, #E00000 0%, #C80000 100%)'}}>
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
              {language === 'es' ? 'Asesoramiento técnico en' : 'Technical advice on'} <strong className="text-white font-semibold">{language === 'es' ? 'válvulas API, esféricas, mariposa y seguridad' : 'API, spherical, butterfly and safety valves'}</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 lg:gap-5 justify-center items-center px-2">
              <Link 
                to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Solicitud de cotización: Válvulas industriales certificadas' : 'Quote request: Certified industrial valves')}#formulario`}
                className="btn-primary-light w-full sm:w-auto px-5 sm:px-6 lg:px-10 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm md:text-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
              </Link>
              
              <Link 
                to="/services/ingenieria-materiales"
                className="btn-secondary-invert w-full sm:w-auto px-5 sm:px-6 lg:px-10 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm md:text-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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