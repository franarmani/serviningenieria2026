import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const ComponentesIndustriales = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [filtroActivo, setFiltroActivo] = useState('todos');

  // Hero Section first in return
  const renderHero = () => (
    <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/about/bridas-fojadas.jpg" 
          alt="Accesorios para Cañerías Industriales"
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
              {language === 'es' ? 'División Técnica' : 'Technical Division'}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 uppercase" style={{ 
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '-0.03em',
          lineHeight: '1.1'
        }}>
          {language === 'es' ? (
            <>
              Accesorios para{' '}
              <span className="text-corporate-red">Cañerías</span>
            </>
          ) : (
            <>
              Pipe{' '}
              <span className="text-corporate-red">Fittings</span>
            </>
          )}
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ 
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '300'
        }}>
          {language === 'es' 
            ? 'Distribución especializada de componentes industriales de marcas líderes: bridas, cañerías, válvulas y accesorios para la industria pesada.'
            : 'Specialized distribution of industrial components from leading brands: flanges, pipes, valves and fittings for heavy industry.'}
        </p>

        {/* CTA */}
        <a 
          href="#catalogo" 
          className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {language === 'es' ? 'Ver más' : 'Learn more'}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium mb-1 sm:mb-2 tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {language === 'es' ? 'Deslizar' : 'Scroll'}
          </span>
          <svg className="w-3 h-5 sm:w-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );

  // Todos los productos organizados por categoría - PROVEEDORES REALES SERVIN
  const catalogoCompleto = [
    {
      categoria: "Bridas",
      proveedor: "FRANCOVIGH",
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      productos: [
        {
          tipo: "Bridas con Cuello para Soldar (WN)",
          proveedor: "FRANCOVIGH",
          descripcion: "Bridas Weld Neck para soldadura a tope en líneas de alta presión y temperatura",
          imagen: "/ingenieriademateriales/valvulas/Bridas.png",
          especificaciones: ["ASME B16.5", "ANSI", "A105", "A182 F304/F316"],
          aplicaciones: ["Vapor", "Petróleo", "Gas", "Procesos industriales"]
        },
        {
          tipo: "Bridas Deslizantes (Slip-On)",
          proveedor: "FRANCOVIGH",
          descripcion: "Bridas Slip-On para montaje rápido en sistemas de baja y media presión",
          imagen: "https://francovigh.com/resources/original/productos_principales_home/2_Slip_On.png",
          especificaciones: ["ASME B16.5", "ANSI", "Clases 150# y 300#", "DN25 a DN600"],
          aplicaciones: ["Servicios industriales", "Agua", "Aire comprimido"]
        },
        {
          tipo: "Bridas Roscadas",
          proveedor: "FRANCOVIGH",
          descripcion: "Bridas roscadas NPT para conexiones sin soldadura",
          imagen: "https://francovigh.com/resources/original/productos_principales_home/3_Threaded.png",
          especificaciones: ["ASME B16.5", "ANSI", "NPT"],
          aplicaciones: ["Mantenimiento", "Sistemas sin soldadura"]
        },
        {
          tipo: "Bridas Lap Joint",
          proveedor: "FRANCOVIGH",
          descripcion: "Bridas Lap Joint para juntas con solapa y sistemas desmontables",
          imagen: "https://francovigh.com/resources/original/productos_principales_home/4_Lap_joint.png",
          especificaciones: ["ASME B16.5", "ANSI", "A105", "A182 F304/F316"],
          aplicaciones: ["Sistemas desmontables", "Mantenimiento", "Conexiones flexibles"]
        },
        {
          tipo: "Bridas Ciegas",
          proveedor: "FRANCOVIGH",
          descripcion: "Bridas ciegas para cierre y bloqueo de líneas",
          imagen: "https://francovigh.com/resources/original/productos_principales_home/6_Blind.png",
          especificaciones: ["ASME B16.5", "ANSI", "A105", "A182 F304/F316"],
          aplicaciones: ["Cierre de líneas", "Bloqueo", "Mantenimiento"]
        }
      ]
    },
    {
      categoria: "Cañerías de Acero",
      proveedor: "Fabricantes certificados",
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      productos: [
        {
          tipo: "Tubos ASTM A53",
          proveedor: "Fabricantes certificados",
          descripcion: "Caños de acero al carbono para conducción general, con y sin costura",
          imagen: "/ingenieriademateriales/valvulas/Tubos.png",
          especificaciones: ["ASTM A53", "Grado A y B", "ERW / Seamless"],
          aplicaciones: ["Vapor", "Agua", "Gas", "Aire comprimido"]
        },
        {
          tipo: "Tubos ASTM A106",
          proveedor: "Fabricantes certificados",
          descripcion: "Caños sin costura para servicio de alta temperatura",
          imagen: "https://www.baogangpipe.com/uploads/202228104/astm-a106-grade-b-pipe53138844341.jpg",
          especificaciones: ["ASTM A106", "Grado B", "Seamless"],
          aplicaciones: ["Alta temperatura", "Vapor", "Calderas", "Refinerías"]
        },
        {
          tipo: "Tubos API 5L Gr. B",
          proveedor: "Fabricantes certificados",
          descripcion: "Cañerías para transporte de petróleo, gas y derivados",
          imagen: "https://www.baogangpipe.com/uploads/202228104/api-5l-grade-b-carbon-steel-seamless-pipe54006587666.jpg",
          especificaciones: ["API 5L", "Grado B", "PSL1 / PSL2"],
          aplicaciones: ["Oil & Gas", "Transporte hidrocarburos", "Ductos"]
        },
        {
          tipo: "Tubos con Costura ERW",
          proveedor: "Fabricantes certificados",
          descripcion: "Tubos soldados por resistencia eléctrica para servicios generales",
          imagen: "https://acerosarequipa.com/sites/default/files/productos/2023-02/TUBOS_ERW.jpg",
          especificaciones: ["ASTM A53", "ERW", "Schedule 40/80"],
          aplicaciones: ["Estructuras", "Conducción", "Servicios generales"]
        },
        {
          tipo: "Tubos Sin Costura Seamless",
          proveedor: "Fabricantes certificados",
          descripcion: "Tubos sin soldadura para alta presión y temperatura crítica",
          imagen: "https://www.baogangpipe.com/uploads/202228104/astm-a312-tp310-stainless-steel-seamless19221086277.jpg",
          especificaciones: ["ASTM A106", "ASTM A53", "Seamless"],
          aplicaciones: ["Alta presión", "Servicios críticos", "Refinerías"]
        }
      ]
    },
    {
      categoria: "Accesorios Forjados y Biselados",
      proveedor: "CH Argentina / Cintolo Hnos.",
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      productos: [
        {
          tipo: "Codos, Tees y Reducciones BW",
          proveedor: "Ind. Metalúrgicas CH Argentina",
          descripcion: "Accesorios biselados (Butt Weld) para soldadura a tope",
          imagen: "/ingenieriademateriales/valvulas/Accesorios para Soldar.png",
          especificaciones: ["ASME B16.9", "ANSI", "A234 WPB", "A403 WP304/316"],
          aplicaciones: ["Cambios dirección", "Derivaciones", "Transiciones"]
        },
        {
          tipo: "Casquetes y Caps",
          proveedor: "Ind. Metalúrgicas CH Argentina",
          descripcion: "Casquetes elipsoidales y caps para cierre de extremos",
          imagen: "https://image.made-in-china.com/2f0j00PZAYizfMAWos/ANSI-B16-9-ASTM-A234-Wpb-Stainless-Steel-Pipe-Fitting-End-Cap.jpg",
          especificaciones: ["ASME B16.9", "ANSI", "A234 WPB", "A403 WP"],
          aplicaciones: ["Cierre líneas", "Terminales", "Recipientes"]
        },
        {
          tipo: "Cuplas y Media Cuplas SW/NPT",
          proveedor: "Ind. Cintolo Hnos.",
          descripcion: "Cuplas forjadas Socket Weld y roscadas NPT",
          imagen: "/ingenieriademateriales/valvulas/Accesorios Forjados.png",
          especificaciones: ["ASME B16.11", "Series 2000/3000/6000", "A105"],
          aplicaciones: ["Conexiones", "Instrumentación", "Pequeños diámetros"]
        },
        {
          tipo: "Threadolets y Sockolets",
          proveedor: "Ind. Cintolo Hnos.",
          descripcion: "Olets roscados (THRD) y Socket Weld (SW) para derivaciones",
          imagen: "https://ssmalloys.com/wp-content/uploads/2024/09/Weldolet-Sockolet-Threadolet.jpg",
          especificaciones: ["ASME B16.11", "MSS SP-97", "A105", "A182 F304/F316"],
          aplicaciones: ["Derivaciones", "Instrumentación", "Tomas"]
        },
        {
          tipo: "Weldolets BW",
          proveedor: "Ind. Cintolo Hnos.",
          descripcion: "Olets biselados para derivaciones soldadas a tope",
          imagen: "https://www.pgpconnect.com/media/catalog/product/f/t/ft-weldolet-ss.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=440&width=440&canvas=440:440&format=jpeg",
          especificaciones: ["ASME B16.11", "MSS SP-97", "A105", "A182"],
          aplicaciones: ["Derivaciones mayores", "Líneas principales"]
        }
      ]
    },
    {
      categoria: "Juntas Industriales",
      proveedor: "KLINGER",
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      productos: [
        {
          tipo: "Juntas Planas Klingersil",
          proveedor: "KLINGER",
          descripcion: "Juntas planas de fibras comprimidas con caucho para servicios generales",
          imagen: "/ingenieriademateriales/valvulas/Juntas Planas y Espiraladas.png",
          especificaciones: ["DIN", "ASME", "Klingersil C-4400/C-4430/C-4500"],
          aplicaciones: ["Vapor", "Agua", "Aceites", "Químicos"]
        },
        {
          tipo: "Juntas Espiraladas",
          proveedor: "KLINGER",
          descripcion: "Juntas espirometálicas para alta presión y temperatura",
          imagen: "https://www.promoteciberica.com/wp-content/uploads/2019/08/toricas-encapsuladas.png",
          especificaciones: ["ASME B16.20", "API 601", "Acero inox + grafito"],
          aplicaciones: ["Alta presión", "Refinerías", "Petroquímica"]
        },
        {
          tipo: "Planchas en Hojas Klingersil",
          proveedor: "KLINGER",
          descripcion: "Planchas de 1,5 m × 2 m en espesores de 0,3 a 5,0 mm para corte a medida",
          imagen: "https://casoni.com.ar/wp-content/uploads/2021/01/01-Klingersil-C_4408.jpg",
          especificaciones: ["DIN", "Espesores 0,3 - 5,0 mm", "Klingersil"],
          aplicaciones: ["Corte a medida", "Juntas especiales"]
        },
        {
          tipo: "Juntas PTFE Sealex",
          proveedor: "KLINGER",
          descripcion: "Juntas de PTFE monofilamento para servicios químicos agresivos",
          imagen: "https://klinger.ar/wp-content/uploads/2023/05/sealex.jpg",
          especificaciones: ["FDA", "DIN", "PTFE expandido", "Sealex"],
          aplicaciones: ["Químicos agresivos", "Farmacéutica", "Alimenticia"]
        }
      ]
    },
    {
      categoria: "Espárragos",
      proveedor: "Industrias Delgado",
      icono: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      productos: [
        {
          tipo: "Espárragos con Tuercas",
          proveedor: "Industrias Delgado",
          descripcion: "Espárragos de acero al carbono con tuercas pesadas para uniones bridadas",
          imagen: "/ingenieriademateriales/valvulas/Espárragos con Tuercas.png",
          especificaciones: ["ASTM A193 Gr. B7", "A194 2H", "Alta resistencia"],
          aplicaciones: ["Uniones bridadas", "Servicios industriales"]
        },
        {
          tipo: "Espárragos Zincados",
          proveedor: "Industrias Delgado",
          descripcion: "Espárragos con recubrimiento de zinc para protección anticorrosiva",
          imagen: "https://http2.mlstatic.com/D_Q_NP_2X_919243-MLA100191741689_122025-T.webp",
          especificaciones: ["ASTM A193", "Zincado electrolítico", "Acero zincado"],
          aplicaciones: ["Ambientes corrosivos leves", "Exterior"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {renderHero()}

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
            <span className="text-corporate-red font-medium flex-shrink-0">{language === 'es' ? 'Accesorios para Cañerías' : 'Pipe Fittings'}</span>
          </div>
        </div>
      </section>

      {/* Catálogo Completo de Productos */}
      <section id="categorias" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Catálogo de' : 'Product'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Productos' : 'Catalog'}</span>
            </h2>
            <p className="text-sm sm:text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
              {language === 'es' 
                ? 'Todos nuestros productos cuentan con certificación completa, trazabilidad por lote y cumplimiento de normativas ANSI, ASME, API y DIN.'
                : 'All our products have full certification, lot traceability and compliance with ANSI, ASME, API and DIN standards.'}
            </p>

            {/* Botones de Filtro */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <button
                onClick={() => setFiltroActivo('todos')}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filtroActivo === 'todos'
                    ? 'bg-corporate-red text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-corporate-red/50 hover:text-corporate-red'
                }`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Todos' : 'All'} ({catalogoCompleto.reduce((acc, cat) => acc + cat.productos.length, 0)})
              </button>
              {catalogoCompleto.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setFiltroActivo(cat.categoria)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-xs sm:text-sm font-medium transition-all duration-300 ${
                    filtroActivo === cat.categoria
                      ? 'bg-corporate-red text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-corporate-red/50 hover:text-corporate-red'
                  }`}
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {cat.categoria.split(' ')[0]} ({cat.productos.length})
                </button>
              ))}
            </div>
          </div>
          
          {/* Grid unificado de productos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {catalogoCompleto
              .filter(cat => filtroActivo === 'todos' || cat.categoria === filtroActivo)
              .flatMap(cat => cat.productos.map(prod => ({ ...prod, categoria: cat.categoria })))
              .map((producto, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-corporate-red/30 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Imagen del producto */}
                  <div className="aspect-square overflow-hidden relative bg-gray-50">
                    <img 
                      src={producto.imagen}
                      alt={producto.tipo}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge de categoría */}
                    <div className="absolute top-1.5 left-1.5">
                      <span className="inline-flex items-center bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                        {producto.categoria.split(' ')[0]}
                      </span>
                    </div>
                    {/* Badge certificado */}
                    <div className="absolute top-1.5 right-1.5">
                      <span className="inline-flex items-center bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                        <svg className="w-2.5 h-2.5 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {language === 'es' ? 'Cert.' : 'Cert.'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-2.5">
                    <h4 className="text-xs sm:text-xs sm:text-sm font-bold text-gray-900 mb-1 group-hover:text-corporate-red transition-colors line-clamp-2 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {producto.tipo}
                    </h4>

                    {/* Especificaciones */}
                    <div className="mb-1.5">
                      <div className="flex flex-wrap gap-0.5">
                        {producto.especificaciones.slice(0, 2).map((spec, specIndex) => (
                          <span 
                            key={specIndex}
                            className="inline-block bg-gray-100 text-[10px] px-1.5 py-0.5 rounded text-gray-600"
                          >
                            {spec}
                          </span>
                        ))}
                        {producto.especificaciones.length > 2 && (
                          <span className="inline-block bg-gray-100 text-[10px] px-1.5 py-0.5 rounded text-gray-500">
                            +{producto.especificaciones.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Aplicaciones */}
                    <div className="flex flex-wrap gap-0.5">
                      {producto.aplicaciones.slice(0, 2).map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="inline-block bg-corporate-red/10 text-[10px] px-1.5 py-0.5 rounded text-corporate-red"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Nota de certificación */}
          <div className="mt-8 sm:mt-12 bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-corporate-red/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Certificación y Trazabilidad Completa' : 'Full Certification and Traceability'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300' }}>
                  {language === 'es' 
                    ? 'Todos los materiales incluyen certificados de calidad 3.1, informes de ensayo y trazabilidad completa por lote. Cumplimiento de normativas ANSI, ASME, API y DIN según corresponda. Consulte disponibilidad de stock.'
                    : 'All materials include 3.1 quality certificates, test reports and full lot traceability. Compliance with ANSI, ASME, API and DIN standards as applicable. Check stock availability.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proveedores Certificados */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'Proveedores' : 'Certified'} <span className="font-semibold text-corporate-red">{language === 'es' ? 'Certificados' : 'Suppliers'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Trabajamos exclusivamente con fabricantes de primer nivel y trazabilidad garantizada'
                : 'We work exclusively with top-tier manufacturers and guaranteed traceability'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { nombre: 'FRANCOVIGH', tipo: 'Bridas' },
              { nombre: 'KLINGER', tipo: 'Juntas' },
              { nombre: 'CH Argentina', tipo: 'Accesorios BW' },
              { nombre: 'Cintolo Hnos.', tipo: 'Accesorios Forjados' },
              { nombre: 'Ind. Delgado', tipo: 'Espárragos' }
            ].map((prov, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 sm:p-5 text-center border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-sm sm:text-base mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {prov.nombre}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {prov.tipo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Diseño Premium */}
      <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #E00000 0%, #C80000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Stock Disponible' : 'Stock Available'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>¿Necesita accesorios industriales <span className="block font-bold mt-2">certificados para su proceso?</span></>
                : <>Need industrial components <span className="block font-bold mt-2">certified for your process?</span></>}
            </h2>
            
            <p className="text-base sm:text-lg lg:text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>Nuestro equipo lo asesora en la selección y provisión de <strong className="text-white font-semibold">accesorios de acero inoxidable</strong> con stock disponible.</>
                : <>Our team advises you on the selection and supply of <strong className="text-white font-semibold">stainless steel fittings</strong> with available stock.</>}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
              <Link 
                to={`/contact?subject=${encodeURIComponent(language === 'es' ? 'Solicitar cotización técnica: componentes y accesorios industriales' : 'Request technical quote: industrial components and fittings')}#formulario`}
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
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '+30 años' : '+30 years'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Experiencia industrial' : 'Industrial experience'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? '✓ Certificados' : '✓ Certificates'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Calidad 3.1' : 'Quality 3.1'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Soporte Técnico' : 'Technical Support'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Ingeniería + Provisión' : 'Engineering + Supply'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentesIndustriales;