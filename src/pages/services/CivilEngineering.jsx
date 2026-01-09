import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const CivilEngineering = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderHero = () => (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/about/servin.png" 
          alt="Ingeniería Civil"
          className="w-full h-full object-cover" 
          style={{ filter: 'blur(3px)' }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16 xl:py-20">
        
        {/* Badge */}
        <div className="mb-6 sm:mb-8 animate-fade-in-up">
          <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-2.5">
            <div className="w-2 h-2 bg-corporate-red rounded-full mr-3 animate-pulse"></div>
            <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' ? 'División Técnica' : 'Technical Division'}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8" style={{ 
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '-0.03em',
          lineHeight: '1.1'
        }}>
          {language === 'es' ? (
            <>
              Ingeniería{' '}
              <span className="text-corporate-red">Civil</span>
            </>
          ) : (
            <>
              Civil{' '}
              <span className="text-corporate-red">Engineering</span>
            </>
          )}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed" style={{ 
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '300'
        }}>
          {language === 'es' 
            ? 'Diseño avanzado de infraestructura con metodologías BIM, análisis FEM y tecnologías Smart City para proyectos de gran envergadura.'
            : 'Advanced infrastructure design with BIM methodologies, FEM analysis and Smart City technologies for large-scale projects.'}
        </p>

        {/* CTA */}
        <a 
          href="#capabilities" 
          className="inline-flex items-center text-sm sm:text-base text-white hover:text-corporate-red font-medium transition-colors"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {language === 'es' ? 'Ver más' : 'Learn more'}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-[10px] sm:text-xs font-medium mb-2 tracking-wider" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {language === 'es' ? 'Deslizar' : 'Scroll'}
          </span>
          <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
  
  const capabilities = [
    {
      title: language === 'es' ? 'Diseño Estructural Computacional' : 'Computational Structural Design',
      description: language === 'es' 
        ? 'Análisis avanzado con software especializado FEM, diseño sísmico y optimización estructural mediante metodologías de última generación.'
        : 'Advanced analysis with specialized FEM software, seismic design and structural optimization using state-of-the-art methodologies.',
      features: language === 'es' ? [
        'Análisis sísmico con espectros específicos',
        'Diseño de cimentaciones complejas',
        'Estructuras especiales y no convencionales',
        'Rehabilitación y refuerzo estructural',
        'Modelado BIM 3D coordinado',
        'Análisis no-lineal pushover'
      ] : [
        'Seismic analysis with specific spectra',
        'Complex foundation design',
        'Special and unconventional structures',
        'Structural rehabilitation and reinforcement',
        'Coordinated 3D BIM modeling',
        'Non-linear pushover analysis'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stats: language === 'es' ? '150+ Estructuras' : '150+ Structures'
    },
    {
      title: language === 'es' ? 'Infraestructura Vial Estratégica' : 'Strategic Road Infrastructure',
      description: language === 'es'
        ? 'Diseño geométrico optimizado, sistemas de pavimentación avanzada y tecnologías ITS para proyectos viales de gran envergadura.'
        : 'Optimized geometric design, advanced paving systems and ITS technologies for large-scale road projects.',
      features: language === 'es' ? [
        'Diseño geométrico 3D especializado',
        'Pavimentos de alto desempeño',
        'Infraestructura inteligente IoT',
        'Señalización y sistemas ITS',
        'Sistemas de drenaje integrados',
        'Gestión de tráfico centralizada'
      ] : [
        'Specialized 3D geometric design',
        'High-performance pavements',
        'IoT intelligent infrastructure',
        'Signage and ITS systems',
        'Integrated drainage systems',
        'Centralized traffic management'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: language === 'es' ? '200+ Km Desarrollados' : '200+ Km Developed'
    },
    {
      title: language === 'es' ? 'Sistemas Hidráulicos Especializados' : 'Specialized Hydraulic Systems',
      description: language === 'es'
        ? 'Ingeniería hidráulica avanzada con sistemas de automatización integral y gestión digital de recursos hídricos.'
        : 'Advanced hydraulic engineering with comprehensive automation systems and digital water resource management.',
      features: language === 'es' ? [
        'Plantas de tratamiento especializadas',
        'Sistemas de bombeo automatizados',
        'Drenaje urbano sostenible (SUDS)',
        'Control predictivo de inundaciones',
        'Sistemas de reutilización hídrica',
        'Telemetría y monitoreo SCADA'
      ] : [
        'Specialized treatment plants',
        'Automated pumping systems',
        'Sustainable urban drainage (SUDS)',
        'Predictive flood control',
        'Water reuse systems',
        'SCADA telemetry and monitoring'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h8a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4z" />
        </svg>
      ),
      stats: language === 'es' ? '100+ Sistemas' : '100+ Systems'
    },
    {
      title: language === 'es' ? 'Planificación Urbana Integral' : 'Comprehensive Urban Planning',
      description: language === 'es'
        ? 'Desarrollo urbano estratégico con tecnologías Smart City y metodologías de planificación basadas en análisis de datos.'
        : 'Strategic urban development with Smart City technologies and data-driven planning methodologies.',
      features: language === 'es' ? [
        'Planificación urbana con Big Data',
        'Infraestructura Smart City',
        'Espacios públicos funcionales',
        'Movilidad urbana sostenible',
        'Certificaciones ambientales',
        'Gestión integral de residuos'
      ] : [
        'Big Data urban planning',
        'Smart City infrastructure',
        'Functional public spaces',
        'Sustainable urban mobility',
        'Environmental certifications',
        'Comprehensive waste management'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z" />
        </svg>
      ),
      stats: language === 'es' ? '50+ Desarrollos' : '50+ Developments'
    }
  ];

  const projects = [
    {
      name: language === 'es' ? 'Torre Corporativa Ejecutiva Buenos Aires' : 'Buenos Aires Executive Corporate Tower',
      category: language === 'es' ? 'Edificación Comercial Compleja' : 'Complex Commercial Building',
      description: language === 'es'
        ? 'Rascacielos corporativo de 45 pisos con sistema estructural mixto avanzado, certificación LEED Platinum y tecnología de monitoreo estructural.'
        : '45-story corporate skyscraper with advanced mixed structural system, LEED Platinum certification and structural monitoring technology.',
      specs: language === 'es' 
        ? ['45 Pisos', '180m Altura Total', 'Sistema Mixto Acero-Concreto', 'LEED Platinum Certified']
        : ['45 Floors', '180m Total Height', 'Steel-Concrete Mixed System', 'LEED Platinum Certified'],
      year: '2023',
      category_icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
        </svg>
      )
    },
    {
      name: language === 'es' ? 'Puente Colgante Metropolitano Río de la Plata' : 'Río de la Plata Metropolitan Suspension Bridge',
      category: language === 'es' ? 'Infraestructura Vial Estratégica' : 'Strategic Road Infrastructure',
      description: language === 'es'
        ? 'Puente colgante de envergadura de 2.5 km con sistema de monitoreo estructural IoT en tiempo real y diseño sísmico avanzado.'
        : '2.5 km span suspension bridge with real-time IoT structural monitoring system and advanced seismic design.',
      specs: language === 'es'
        ? ['2.5 Km Longitud', 'Torres de 220m', 'Monitoreo IoT 24/7', 'Diseño Sísmico Avanzado']
        : ['2.5 Km Length', '220m Towers', 'IoT Monitoring 24/7', 'Advanced Seismic Design'],
      year: '2022',
      category_icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: language === 'es' ? 'Complejo de Tratamiento de Aguas Norte' : 'North Water Treatment Complex',
      category: language === 'es' ? 'Infraestructura Hidráulica Especializada' : 'Specialized Hydraulic Infrastructure',
      description: language === 'es'
        ? 'Planta de tratamiento de aguas residuales para 500,000 habitantes con automatización integral y sistemas de telemetría SCADA.'
        : 'Wastewater treatment plant for 500,000 inhabitants with comprehensive automation and SCADA telemetry systems.',
      specs: language === 'es'
        ? ['500,000 Habitantes', '2.5 MGD Capacidad', 'Automatización 100%', 'Telemetría SCADA']
        : ['500,000 Inhabitants', '2.5 MGD Capacity', '100% Automation', 'SCADA Telemetry'],
      year: '2023',
      category_icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" />
        </svg>
      )
    },
    {
      name: language === 'es' ? 'Distrito Tecnológico Inteligente Pilar' : 'Pilar Smart Technology District',
      category: language === 'es' ? 'Desarrollo Urbano Integral' : 'Comprehensive Urban Development',
      description: language === 'es'
        ? 'Parque tecnológico inteligente de 300 hectáreas con infraestructura digital completa, certificaciones ambientales y energía renovable.'
        : '300-hectare smart technology park with complete digital infrastructure, environmental certifications and renewable energy.',
      specs: language === 'es'
        ? ['300 Hectáreas', '15,000 Empleos Proyectados', 'Fibra Óptica 100%', 'Energía Renovable']
        : ['300 Hectares', '15,000 Projected Jobs', '100% Fiber Optic', 'Renewable Energy'],
      year: '2024',
      category_icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z" />
        </svg>
      )
    }
  ];

  const services = [
    {
      service: language === 'es' ? 'Estudios de Factibilidad' : 'Feasibility Studies',
      description: language === 'es'
        ? 'Análisis técnico-económico integral con modelado financiero avanzado'
        : 'Comprehensive technical-economic analysis with advanced financial modeling',
      deliverables: language === 'es' ? [
        'Estudio topográfico con drones',
        'Análisis geotécnico especializado',
        'Evaluación de impacto ambiental',
        'Modelado financiero con análisis de riesgo',
        'Cronograma maestro optimizado'
      ] : [
        'Drone topographic survey',
        'Specialized geotechnical analysis',
        'Environmental impact assessment',
        'Financial modeling with risk analysis',
        'Optimized master schedule'
      ]
    },
    {
      service: language === 'es' ? 'Ingeniería Conceptual y Básica' : 'Conceptual and Basic Engineering',
      description: language === 'es'
        ? 'Desarrollo de conceptos técnicos con metodología BIM y optimización paramétrica'
        : 'Development of technical concepts with BIM methodology and parametric optimization',
      deliverables: language === 'es' ? [
        'Memoria de cálculo especializada',
        'Planos BIM 3D coordinados',
        'Especificaciones técnicas detalladas',
        'Presupuesto paramétrico',
        'Análisis de constructabilidad'
      ] : [
        'Specialized calculation report',
        'Coordinated 3D BIM drawings',
        'Detailed technical specifications',
        'Parametric budget',
        'Constructability analysis'
      ]
    },
    {
      service: language === 'es' ? 'Ingeniería de Detalle y Construcción' : 'Detail and Construction Engineering',
      description: language === 'es'
        ? 'Documentación ejecutiva completa con realidad virtual y gemelo digital'
        : 'Complete executive documentation with virtual reality and digital twin',
      deliverables: language === 'es' ? [
        'Planos ejecutivos BIM 5D',
        'Especificaciones de construcción',
        'Lista de materiales automatizada',
        'Procedimientos de construcción',
        'Gemelo digital del proyecto'
      ] : [
        'BIM 5D executive drawings',
        'Construction specifications',
        'Automated bill of materials',
        'Construction procedures',
        'Project digital twin'
      ]
    },
    {
      service: language === 'es' ? 'Supervisión y Comisionado' : 'Supervision and Commissioning',
      description: language === 'es'
        ? 'Control de calidad avanzado con tecnología IoT e inspección con drones'
        : 'Advanced quality control with IoT technology and drone inspection',
      deliverables: language === 'es' ? [
        'Supervisión técnica especializada',
        'Control de calidad con IoT',
        'Inspecciones con drones',
        'Reportes digitales en tiempo real',
        'Comisionado y puesta en marcha'
      ] : [
        'Specialized technical supervision',
        'IoT quality control',
        'Drone inspections',
        'Real-time digital reports',
        'Commissioning and startup'
      ]
    }
  ];

  const technologies = [
    { 
      name: 'Autodesk Revit', 
      category: 'BIM Architecture', 
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      name: 'Bentley MicroStation', 
      category: 'CAD Professional', 
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      name: 'SAP2000 / ETABS', 
      category: language === 'es' ? 'Análisis Estructural' : 'Structural Analysis', 
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      name: 'AutoCAD Civil 3D', 
      category: language === 'es' ? 'Diseño Civil' : 'Civil Design', 
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    { 
      name: 'HEC-RAS', 
      category: language === 'es' ? 'Hidráulica Avanzada' : 'Advanced Hydraulics', 
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: 'Drone Surveying', 
      category: language === 'es' ? 'Topografía Digital' : 'Digital Surveying', 
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', category: 'Quality Management' },
    { name: 'BIM Level 3 Certified', category: 'Digital Construction' },
    { name: 'LEED AP Accredited', category: 'Sustainable Design' },
    { name: 'PMP Certified', category: 'Project Management' }
  ];

  return (
    <div className="min-h-screen">
      {renderHero()}

      {/* Scroll Indicator - Elegant */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white/40 text-[10px] sm:text-xs font-light tracking-widest uppercase mb-4">{language === 'es' ? 'Explorar' : 'Explore'}</span>
            <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Elegant Corner Accent */}
        <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-white/20"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-white/20"></div>
        
      </section>

      {/* Capabilities Section Premium */}
      <section id="capabilities" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display heading-2 mb-6 animate-fade-in">{language === 'es' ? 'Capacidades Técnicas Especializadas' : 'Specialized Technical Capabilities'}</h2>
            <div className="divider animate-slide-up"></div>
            <p className="text-corporate-large max-w-3xl mx-auto animate-slide-up">
              {language === 'es' 
                ? 'Cuatro áreas de especialización que definen nuestra excelencia en ingeniería civil y estructural con tecnología de vanguardia.'
                : 'Four areas of specialization that define our excellence in civil and structural engineering with cutting-edge technology.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="corporate-card group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-6 mb-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red group-hover:bg-corporate-red group-hover:text-white transition-all duration-300">
                    {capability.iconSvg}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-corporate-black group-hover:text-corporate-red transition-colors duration-300">
                        {capability.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-medium text-corporate-red bg-corporate-red/10 px-3 py-1 rounded-full">
                        {capability.stats}
                      </span>
                    </div>
                    <p className="text-corporate-gray-600 font-light leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <svg className="w-4 h-4 text-corporate-red mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-corporate-gray-600 text-xs sm:text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Premium */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display heading-2 mb-6 animate-fade-in">{language === 'es' ? 'Proyectos de Referencia' : 'Reference Projects'}</h2>
            <div className="divider animate-slide-up"></div>
            <p className="text-corporate-large max-w-3xl mx-auto animate-slide-up">
              {language === 'es'
                ? 'Casos de éxito que demuestran nuestra capacidad técnica y compromiso con la innovación en proyectos de ingeniería civil compleja.'
                : 'Success stories that demonstrate our technical capacity and commitment to innovation in complex civil engineering projects.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className="corporate-card group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red group-hover:bg-corporate-red group-hover:text-white transition-all duration-300">
                    {project.category_icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-corporate-black group-hover:text-corporate-red transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span className="text-xs sm:text-sm text-corporate-red font-medium">{project.year}</span>
                    </div>
                    <div className="text-corporate-red text-xs sm:text-sm font-medium mb-3">{project.category}</div>
                    <p className="text-corporate-gray-600 font-light leading-relaxed text-xs sm:text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {project.specs.map((spec, idx) => (
                    <div key={idx} className="bg-corporate-gray-50 p-3 rounded-lg text-center">
                      <span className="text-corporate-gray-600 text-xs sm:text-sm font-light">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Methodology Premium */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display heading-2 mb-6 animate-fade-in">{language === 'es' ? 'Metodología de Servicios' : 'Services Methodology'}</h2>
            <div className="divider animate-slide-up"></div>
            <p className="text-corporate-large max-w-3xl mx-auto animate-slide-up">
              {language === 'es'
                ? 'Proceso estructurado y sistemático que garantiza resultados excepcionales en cada fase del desarrollo de proyectos de ingeniería civil.'
                : 'Structured and systematic process that guarantees exceptional results in each phase of civil engineering project development.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={service.service}
                className="corporate-card animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="w-8 h-8 bg-corporate-red rounded-full text-white text-xs sm:text-sm font-bold flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-corporate-black">
                      {service.service}
                    </h3>
                  </div>
                  <p className="text-corporate-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-corporate-black mb-4 flex items-center">
                    <span className="w-2 h-2 bg-corporate-red rounded-full mr-3"></span>
                    {language === 'es' ? 'Entregables Especializados' : 'Specialized Deliverables'}
                  </h4>
                  <ul className="space-y-3">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg className="w-4 h-4 text-corporate-red mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-corporate-gray-600 text-xs sm:text-sm font-light">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section Premium */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display heading-2 mb-6 animate-fade-in">{language === 'es' ? 'Tecnologías Avanzadas' : 'Advanced Technologies'}</h2>
            <div className="divider animate-slide-up"></div>
            <p className="text-corporate-large max-w-3xl mx-auto animate-slide-up">
              {language === 'es'
                ? 'Software especializado y herramientas de vanguardia que potencian nuestra capacidad de diseño e innovación técnica.'
                : 'Specialized software and cutting-edge tools that enhance our design capacity and technical innovation.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="corporate-card text-center group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red group-hover:bg-corporate-red group-hover:text-white transition-all duration-300">
                  {tech.iconSvg}
                </div>
                <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-corporate-black mb-2 group-hover:text-corporate-red transition-colors duration-300">
                  {tech.name}
                </h3>
                <div className="text-corporate-red text-xs sm:text-sm font-medium">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Corporate Professional */}
      <section className="bg-corporate-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark via-corporate-dark/95 to-corporate-red/10"></div>
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-corporate-red/10 border border-corporate-red/20 rounded-full px-6 py-2 mb-8">
                <span className="w-2 h-2 bg-corporate-red rounded-full mr-3"></span>
                <span className="text-corporate-accent text-xs sm:text-sm font-medium uppercase tracking-wider">{language === 'es' ? 'Consultoría Especializada' : 'Specialized Consulting'}</span>
              </div>
              
              <h2 className="font-display text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                {language === 'es' ? 'Transformamos Conceptos en' : 'We Transform Concepts into'}
                <span className="block text-corporate-accent">
                  {language === 'es' ? 'Infraestructura de Excelencia' : 'Excellence Infrastructure'}
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Nuestro equipo de ingenieros civiles especialistas combina experiencia técnica avanzada con metodologías de vanguardia para desarrollar proyectos de infraestructura crítica.'
                  : 'Our team of specialist civil engineers combines advanced technical experience with cutting-edge methodologies to develop critical infrastructure projects.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link to="/contact" className="btn-primary bg-corporate-red text-white hover:bg-corporate-red/90 text-sm sm:text-base md:text-lg px-10 py-4">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'es' ? 'Solicitar Propuesta Técnica' : 'Request Technical Proposal'}
                </Link>
                <Link to="/services" className="btn-secondary border-white/20 text-white hover:bg-white/10 text-sm sm:text-base md:text-lg px-10 py-4">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {language === 'es' ? 'Explorar Servicios Integrales' : 'Explore Comprehensive Services'}
                </Link>
              </div>

              <div className="border-t border-white/10 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{language === 'es' ? 'Metodología Avanzada' : 'Advanced Methodology'}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{language === 'es' ? 'Procesos técnicos especializados' : 'Specialized technical processes'}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{language === 'es' ? 'Tecnología BIM 3D' : 'BIM 3D Technology'}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{language === 'es' ? 'Modelado digital integrado' : 'Integrated digital modeling'}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{language === 'es' ? 'Certificaciones' : 'Certifications'}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{language === 'es' ? 'Estándares globales de calidad' : 'Global quality standards'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CivilEngineering;
