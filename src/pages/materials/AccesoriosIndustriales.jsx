import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const AccesoriosIndustriales = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  // Categorías reales según portfolio SERVIN
  const categorias = [
    { id: 'todos', nombre: language === 'es' ? 'Todos' : 'All', cantidad: 21 },
    { id: 'bridas', nombre: language === 'es' ? 'Bridas' : 'Flanges', cantidad: 4 },
    { id: 'canerias', nombre: language === 'es' ? 'Cañerías de Acero' : 'Steel Pipes', cantidad: 5 },
    { id: 'accesorios', nombre: language === 'es' ? 'Accesorios Forjados y Biselados' : 'Forged & Beveled Fittings', cantidad: 5 },
    { id: 'juntas', nombre: language === 'es' ? 'Juntas Industriales' : 'Industrial Gaskets', cantidad: 4 },
    { id: 'esparragos', nombre: language === 'es' ? 'Espárragos' : 'Studs', cantidad: 3 }
  ];

  // Productos reales según portfolio SERVIN
  const productos = [
    // BRIDAS - Proveedor: FRANCOVIGH
    {
      id: 1,
      categoria: 'bridas',
      nombre: 'Bridas con Cuello para Soldar (WN)',
      proveedor: 'FRANCOVIGH',
      descripcion: 'Bridas Weld Neck para soldadura a tope en líneas de alta presión y temperatura.',
      normas: ['ASME B16.5', 'ANSI'],
      materiales: ['A105', 'A182 F304/F316'],
      aplicaciones: ['Vapor', 'Petróleo', 'Gas', 'Procesos industriales'],
      imagen: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      categoria: 'bridas',
      nombre: 'Bridas Deslizantes (Slip-On)',
      proveedor: 'FRANCOVIGH',
      descripcion: 'Bridas Slip-On para montaje rápido en sistemas de baja y media presión.',
      normas: ['ASME B16.5', 'ANSI'],
      materiales: ['A105', 'A182 F304/F316'],
      aplicaciones: ['Servicios industriales', 'Agua', 'Aire comprimido'],
      imagen: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      categoria: 'bridas',
      nombre: 'Bridas Roscadas y Lap Joint',
      proveedor: 'FRANCOVIGH',
      descripcion: 'Bridas roscadas NPT y Lap Joint para juntas con solapa.',
      normas: ['ASME B16.5', 'ANSI'],
      materiales: ['A105', 'A182 F304/F316'],
      aplicaciones: ['Mantenimiento', 'Sistemas desmontables'],
      imagen: 'https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      categoria: 'bridas',
      nombre: 'Bridas Ciegas',
      proveedor: 'FRANCOVIGH',
      descripcion: 'Bridas ciegas para cierre y bloqueo de líneas.',
      normas: ['ASME B16.5', 'ANSI'],
      materiales: ['A105', 'A182 F304/F316'],
      aplicaciones: ['Cierre de líneas', 'Bloqueo', 'Mantenimiento'],
      imagen: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop'
    },

    // CAÑERÍAS DE ACERO
    {
      id: 5,
      categoria: 'canerias',
      nombre: 'Tubos ASTM A53',
      proveedor: 'Fabricantes certificados',
      descripcion: 'Caños de acero al carbono para conducción general, con y sin costura.',
      normas: ['ASTM A53', 'Grado A y B'],
      materiales: ['Acero al carbono', 'ERW / Seamless'],
      aplicaciones: ['Vapor', 'Agua', 'Gas', 'Aire comprimido'],
      imagen: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      categoria: 'canerias',
      nombre: 'Tubos ASTM A106',
      proveedor: 'Fabricantes certificados',
      descripcion: 'Caños sin costura para servicio de alta temperatura.',
      normas: ['ASTM A106', 'Grado B'],
      materiales: ['Acero al carbono', 'Seamless'],
      aplicaciones: ['Alta temperatura', 'Vapor', 'Calderas', 'Refinerías'],
      imagen: 'https://images.unsplash.com/photo-1581092451866-a33e4b30a2e6?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 7,
      categoria: 'canerias',
      nombre: 'Tubos API 5L Gr. B',
      proveedor: 'Fabricantes certificados',
      descripcion: 'Cañerías para transporte de petróleo, gas y derivados.',
      normas: ['API 5L', 'Grado B', 'PSL1 / PSL2'],
      materiales: ['Acero al carbono', 'ERW / Seamless'],
      aplicaciones: ['Oil & Gas', 'Transporte hidrocarburos', 'Ductos'],
      imagen: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 8,
      categoria: 'canerias',
      nombre: 'Tubos con Costura ERW',
      proveedor: 'Fabricantes certificados',
      descripcion: 'Tubos soldados por resistencia eléctrica para servicios generales.',
      normas: ['ASTM A53', 'ERW'],
      materiales: ['Acero al carbono'],
      aplicaciones: ['Estructuras', 'Conducción', 'Servicios generales'],
      imagen: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 9,
      categoria: 'canerias',
      nombre: 'Tubos Sin Costura Seamless',
      proveedor: 'Fabricantes certificados',
      descripcion: 'Tubos sin soldadura para alta presión y temperatura crítica.',
      normas: ['ASTM A106', 'ASTM A53', 'Seamless'],
      materiales: ['Acero al carbono'],
      aplicaciones: ['Alta presión', 'Servicios críticos', 'Refinerías'],
      imagen: 'https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=800&auto=format&fit=crop'
    },

    // ACCESORIOS FORJADOS Y BISELADOS - Proveedores: CH Argentina, Cintolo Hnos.
    {
      id: 10,
      categoria: 'accesorios',
      nombre: 'Codos, Tees y Reducciones BW',
      proveedor: 'Ind. Metalúrgicas CH Argentina',
      descripcion: 'Accesorios biselados (Butt Weld) para soldadura a tope.',
      normas: ['ASME B16.9', 'ANSI'],
      materiales: ['A234 WPB', 'A403 WP304/316'],
      aplicaciones: ['Cambios dirección', 'Derivaciones', 'Transiciones'],
      imagen: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 11,
      categoria: 'accesorios',
      nombre: 'Casquetes y Caps',
      proveedor: 'Ind. Metalúrgicas CH Argentina',
      descripcion: 'Casquetes elipsoidales y caps para cierre de extremos.',
      normas: ['ASME B16.9', 'ANSI'],
      materiales: ['A234 WPB', 'A403 WP'],
      aplicaciones: ['Cierre líneas', 'Terminales', 'Recipientes'],
      imagen: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 12,
      categoria: 'accesorios',
      nombre: 'Cuplas y Media Cuplas SW/NPT',
      proveedor: 'Ind. Cintolo Hnos.',
      descripcion: 'Cuplas forjadas Socket Weld y roscadas NPT.',
      normas: ['ASME B16.11', 'Series 2000/3000/6000'],
      materiales: ['A105', 'A182 F304/F316'],
      aplicaciones: ['Conexiones', 'Instrumentación', 'Pequeños diámetros'],
      imagen: 'https://images.unsplash.com/photo-1581092451866-a33e4b30a2e6?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 13,
      categoria: 'accesorios',
      nombre: 'Threadolets y Sockolets',
      proveedor: 'Ind. Cintolo Hnos.',
      descripcion: 'Olets roscados (THRD) y Socket Weld (SW) para derivaciones.',
      normas: ['ASME B16.11', 'MSS SP-97'],
      materiales: ['A105', 'A182 F304/F316'],
      aplicaciones: ['Derivaciones', 'Instrumentación', 'Tomas'],
      imagen: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 14,
      categoria: 'accesorios',
      nombre: 'Weldolets BW',
      proveedor: 'Ind. Cintolo Hnos.',
      descripcion: 'Olets biselados para derivaciones soldadas a tope.',
      normas: ['ASME B16.11', 'MSS SP-97'],
      materiales: ['A105', 'A182 F304/F316'],
      aplicaciones: ['Derivaciones mayores', 'Líneas principales'],
      imagen: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop'
    },

    // JUNTAS INDUSTRIALES - Proveedor: KLINGER
    {
      id: 15,
      categoria: 'juntas',
      nombre: 'Juntas Planas Klingersil',
      proveedor: 'KLINGER',
      descripcion: 'Juntas planas de fibras comprimidas con caucho para servicios generales.',
      normas: ['DIN', 'ASME'],
      materiales: ['Klingersil C-4400', 'C-4430', 'C-4500'],
      aplicaciones: ['Vapor', 'Agua', 'Aceites', 'Químicos'],
      imagen: 'https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 16,
      categoria: 'juntas',
      nombre: 'Juntas Espiraladas',
      proveedor: 'KLINGER',
      descripcion: 'Juntas espirometálicas para alta presión y temperatura.',
      normas: ['ASME B16.20', 'API 601'],
      materiales: ['Acero inox + grafito', 'Acero inox + PTFE'],
      aplicaciones: ['Alta presión', 'Refinerías', 'Petroquímica'],
      imagen: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 17,
      categoria: 'juntas',
      nombre: 'Planchas en Hojas Klingersil',
      proveedor: 'KLINGER',
      descripcion: 'Planchas de 1,5 m × 2 m en espesores de 0,3 a 5,0 mm para corte a medida.',
      normas: ['DIN', 'Espesores 0,3 - 5,0 mm'],
      materiales: ['Klingersil', 'Fibras comprimidas'],
      aplicaciones: ['Corte a medida', 'Juntas especiales'],
      imagen: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 18,
      categoria: 'juntas',
      nombre: 'Juntas PTFE Sealex',
      proveedor: 'KLINGER',
      descripcion: 'Juntas de PTFE monofilamento para servicios químicos agresivos.',
      normas: ['FDA', 'DIN'],
      materiales: ['PTFE expandido', 'Sealex'],
      aplicaciones: ['Químicos agresivos', 'Farmacéutica', 'Alimenticia'],
      imagen: 'https://images.unsplash.com/photo-1581092451866-a33e4b30a2e6?q=80&w=800&auto=format&fit=crop'
    },

    // ESPÁRRAGOS - Proveedor: Industrias Delgado
    {
      id: 19,
      categoria: 'esparragos',
      nombre: 'Espárragos Comunes',
      proveedor: 'Industrias Delgado',
      descripcion: 'Espárragos de acero al carbono para uniones bridadas estándar.',
      normas: ['ASTM A193 Gr. B7', 'A194 2H'],
      materiales: ['Acero al carbono', 'Alta resistencia'],
      aplicaciones: ['Uniones bridadas', 'Servicios industriales'],
      imagen: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 20,
      categoria: 'esparragos',
      nombre: 'Espárragos Zincados',
      proveedor: 'Industrias Delgado',
      descripcion: 'Espárragos con recubrimiento de zinc para protección anticorrosiva.',
      normas: ['ASTM A193', 'Zincado electrolítico'],
      materiales: ['Acero zincado'],
      aplicaciones: ['Ambientes corrosivos leves', 'Exterior'],
      imagen: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 21,
      categoria: 'esparragos',
      nombre: 'Espárragos Cadmiados',
      proveedor: 'Industrias Delgado',
      descripcion: 'Espárragos con recubrimiento de cadmio para servicios severos.',
      normas: ['ASTM A193', 'Cadmiado'],
      materiales: ['Acero cadmiado'],
      aplicaciones: ['Oil & Gas', 'Servicios severos', 'Alta corrosión'],
      imagen: 'https://images.unsplash.com/photo-1565088299075-9dbb0b5e5b1e?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Background" 
            className="w-full h-full object-cover" 
            style={{filter: 'blur(3px)'}} 
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/75"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16 xl:py-20">
          {/* Badge */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-2.5">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                Ingeniería de Materiales
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 animate-fade-in-up-delay-1" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.03em'
          }}>
            ACCESORIOS PARA <span className="text-corporate-red">CAÑERÍAS</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300'
          }}>
            {language === 'es' 
              ? 'Bridas, cañerías, accesorios forjados, juntas y espárragos certificados ASME/ANSI con trazabilidad completa para la industria.'
              : 'Flanges, pipes, forged fittings, gaskets and ASME/ANSI certified studs with complete traceability for industry.'}
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up-delay-3">
            <a 
              href="#catalogo" 
              className="inline-flex items-center text-sm sm:text-base text-white hover:text-corporate-red transition-colors duration-300"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              <span className="mr-2">{language === 'es' ? 'Ver catálogo' : 'View Catalog'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-xs font-medium mb-2 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              {language === 'es' ? 'Deslizar' : 'Scroll'}
            </span>
            <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Navegación */}
      <section className="py-4 sm:py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs sm:text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <Link to="/divisiones" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Divisiones' : 'Divisions'}</Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/services/ingenieria-materiales" className="hover:text-corporate-red transition-colors flex-shrink-0">{language === 'es' ? 'Ingeniería de Materiales' : 'Materials Engineering'}</Link>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium flex-shrink-0 text-corporate-red">{language === 'es' ? 'Accesorios para Cañerías' : 'Pipe Accessories'}</span>
          </div>
        </div>
      </section>

      {/* Filtros por Categoría */}
      <section id="catalogo" className="py-8 sm:py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-xs sm:text-sm font-medium transition-all duration-300 ${
                  categoriaActiva === cat.id
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={categoriaActiva === cat.id ? { 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  background: 'linear-gradient(135deg, #E00000 0%, #C80000 100%)'
                } : { fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {cat.nombre} ({cat.cantidad})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de Productos */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {categoriaActiva === 'todos' ? (language === 'es' ? 'Catálogo Completo' : 'Complete Catalog') : categorias.find(c => c.id === categoriaActiva)?.nombre}
            </h2>
            <p className="text-xs sm:text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {productosFiltrados.length} {language === 'es' ? 'productos disponibles' : 'products available'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {productosFiltrados.map((producto) => (
              <div 
                key={producto.id} 
                className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Imagen */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] sm:text-[10px] sm:text-xs font-medium rounded-full text-white bg-corporate-red" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                      {categorias.find(c => c.id === producto.categoria)?.nombre}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-4 sm:p-5">
                  <div className="mb-3">
                    <span className="text-[9px] sm:text-[10px] md:text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {producto.proveedor}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-sm sm:text-base md:text-lg font-semibold text-gray-900 mt-1 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {producto.nombre}
                    </h3>
                  </div>
                  
                  <p className="text-[10px] sm:text-xs md:text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}>
                    {producto.descripcion}
                  </p>

                  {/* Normas */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {producto.normas.slice(0, 3).map((norma, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-0.5 text-[9px] sm:text-[10px] md:text-[10px] sm:text-xs rounded border font-medium bg-corporate-red/5 border-corporate-red/20 text-corporate-red"
                          style={{ 
                            fontFamily: 'Inter, system-ui, sans-serif'
                          }}
                        >
                          {norma}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Aplicaciones */}
                  <div className="flex flex-wrap gap-1">
                    {producto.aplicaciones.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="text-[9px] sm:text-[10px] text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {app}{idx < Math.min(producto.aplicaciones.length, 3) - 1 && ' · '}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <Link 
                    to={`/contact?subject=${encodeURIComponent(
                      language === 'es'
                        ? `Solicitud de cotización: ${producto.nombre}`
                        : `Quote request: ${producto.nombre}`
                    )}#formulario`}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-[10px] sm:text-xs md:text-xs sm:text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      background: 'linear-gradient(135deg, #E00000 0%, #C80000 100%)'
                    }}
                  >
                    {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proveedores */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Proveedores' : 'Certified'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Certificados' : 'Suppliers'}</span>
            </h2>
            <p className="text-xs sm:text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Trabajamos exclusivamente con fabricantes de primer nivel y trazabilidad garantizada'
                : 'We work exclusively with top-tier manufacturers and guaranteed traceability'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { nombre: 'FRANCOVIGH', tipo: language === 'es' ? 'Bridas' : 'Flanges' },
              { nombre: 'KLINGER', tipo: language === 'es' ? 'Juntas' : 'Gaskets' },
              { nombre: 'CH Argentina', tipo: language === 'es' ? 'Accesorios BW' : 'BW Fittings' },
              { nombre: 'Cintolo Hnos.', tipo: language === 'es' ? 'Accesorios Forjados' : 'Forged Fittings' },
              { nombre: 'Ind. Delgado', tipo: language === 'es' ? 'Espárragos' : 'Studs' }
            ].map((prov, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 sm:p-5 text-center border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-corporate-red/10">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-sm sm:text-base mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {prov.nombre}
                </h3>
                <p className="text-[10px] sm:text-[10px] sm:text-xs text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {prov.tipo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #E00000 0%, #C80000 50%, #B80000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Stock Disponible' : 'Stock Available'}</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>¿Necesita accesorios certificados <span className="block font-bold mt-2">para su proyecto?</span></>
                : <>Need certified accessories <span className="block font-bold mt-2">for your project?</span></>}
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>Nuestro equipo lo asesora en la selección técnica de <strong className="text-white font-semibold">bridas, cañerías, accesorios, juntas y espárragos</strong> con stock disponible.</>
                : <>Our team advises you on the technical selection of <strong className="text-white font-semibold">flanges, pipes, fittings, gaskets and studs</strong> with available stock.</>}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
              <Link 
                to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Solicitud de cotización técnica: accesorios industriales certificados' : 'Technical quote request: certified industrial fittings')}#formulario`}
                className="btn-primary-light w-full sm:w-auto px-8 sm:px-10 py-4 text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'es' ? 'Solicitar Cotización Técnica' : 'Request Technical Quote'}
              </Link>
              
              <Link 
                to="/services/ingenieria-materiales"
                className="btn-secondary-invert w-full sm:w-auto px-8 sm:px-10 py-4 text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
                {language === 'es' ? 'Ver Ingeniería de Materiales' : 'View Materials Engineering'}
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                <div className="text-white/70 text-[10px] sm:text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia industrial' : 'Industrial experience'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>✓ ASME / ANSI</div>
                <div className="text-white/70 text-[10px] sm:text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Certificación completa' : 'Full certification'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</div>
                <div className="text-white/70 text-[10px] sm:text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería + Provisión' : 'Engineering + Supply'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccesoriosIndustriales;