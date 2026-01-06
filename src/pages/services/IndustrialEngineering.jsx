import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const IndustrialEngineering = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const capabilities = [
    {
      title: language === 'es' ? 'Optimización de Procesos Industriales' : 'Industrial Process Optimization',
      description: language === 'es' 
        ? 'Metodologías avanzadas de mejora continua y optimización de procesos industriales mediante análisis de datos y tecnologías Lean Six Sigma.'
        : 'Advanced continuous improvement methodologies and industrial process optimization through data analysis and Lean Six Sigma technologies.',
      features: language === 'es' ? [
        'Value Stream Mapping (VSM) especializado',
        'Análisis estadístico de capacidad',
        'Eliminación sistemática de desperdicios',
        'Implementación Lean Manufacturing',
        'Control estadístico de procesos (SPC)',
        'Metodologías Kaizen y 5S'
      ] : [
        'Specialized Value Stream Mapping (VSM)',
        'Statistical capacity analysis',
        'Systematic waste elimination',
        'Lean Manufacturing implementation',
        'Statistical Process Control (SPC)',
        'Kaizen and 5S methodologies'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: language === 'es' ? '200+ Procesos Optimizados' : '200+ Optimized Processes'
    },
    {
      title: language === 'es' ? 'Automatización Industrial Avanzada' : 'Advanced Industrial Automation',
      description: language === 'es'
        ? 'Diseño e implementación de sistemas de automatización integral con tecnologías Industry 4.0, IoT industrial y sistemas ciber-físicos.'
        : 'Design and implementation of comprehensive automation systems with Industry 4.0 technologies, industrial IoT and cyber-physical systems.',
      features: language === 'es' ? [
        'Sistemas PLC y SCADA avanzados',
        'Robótica industrial colaborativa',
        'Instrumentación y sensórica IoT',
        'Interfaces HMI especializadas',
        'Sistemas MES y ERP integrados',
        'Ciberseguridad industrial'
      ] : [
        'Advanced PLC and SCADA systems',
        'Collaborative industrial robotics',
        'IoT instrumentation and sensors',
        'Specialized HMI interfaces',
        'Integrated MES and ERP systems',
        'Industrial cybersecurity'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: language === 'es' ? '150+ Sistemas Automatizados' : '150+ Automated Systems'
    },
    {
      title: language === 'es' ? 'Ingeniería de Plantas Industriales' : 'Industrial Plant Engineering',
      description: language === 'es'
        ? 'Diseño integral de instalaciones industriales con metodologías BIM, análisis de flujo de materiales y optimización de layout productivo.'
        : 'Comprehensive industrial facility design with BIM methodologies, material flow analysis and production layout optimization.',
      features: language === 'es' ? [
        'Layout de plantas con simulación 3D',
        'Análisis de flujo de materiales',
        'Diseño de sistemas de handling',
        'Optimización de espacios productivos',
        'Sistemas de seguridad industrial',
        'Eficiencia energética industrial'
      ] : [
        'Plant layout with 3D simulation',
        'Material flow analysis',
        'Handling systems design',
        'Production space optimization',
        'Industrial safety systems',
        'Industrial energy efficiency'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stats: language === 'es' ? '80+ Plantas Diseñadas' : '80+ Plants Designed'
    },
    {
      title: language === 'es' ? 'Sistemas de Gestión de Calidad' : 'Quality Management Systems',
      description: language === 'es'
        ? 'Implementación de sistemas de gestión de calidad total con certificaciones y metodologías de control estadístico.'
        : 'Implementation of total quality management systems with certifications and statistical control methodologies.',
      features: language === 'es' ? [
        'Certificaciones ISO 9001/14001',
        'Sistemas de gestión integrados',
        'Control estadístico avanzado',
        'Auditorías internas especializadas',
        'Mejora continua sistemática',
        'Compliance regulatorio'
      ] : [
        'ISO 9001/14001 certifications',
        'Integrated management systems',
        'Advanced statistical control',
        'Specialized internal audits',
        'Systematic continuous improvement',
        'Regulatory compliance'
      ],
      iconSvg: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
        </svg>
      ),
      stats: language === 'es' ? '120+ Certificaciones' : '120+ Certifications'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with advanced gradient and texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-dark via-slate-900 to-corporate-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,53,56,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(196,53,56,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop" 
              alt={language === 'es' ? 'Ingeniería Industrial' : 'Industrial Engineering'} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/80 via-corporate-dark/40 to-corporate-dark/60"></div>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          {/* Corporate badge */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-corporate-red rounded-full mr-3"></div>
              <span className="text-white/80 text-xs sm:text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Optimización industrial' : 'Industrial Optimization'}
              </span>
            </div>
          </div>
          
          {/* Executive title */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '0.9'
            }}>
              {language === 'es' ? 'INGENIERÍA' : 'INDUSTRIAL'}
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-corporate-red mr-4"></div>
              <h2 className="text-6xl sm:text-7xl lg:text-9xl xl:text-10xl font-bold" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.02em'
              }}>
                {language === 'es' ? 'INDUSTRIAL' : 'ENGINEERING'}
              </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-corporate-red ml-4"></div>
            </div>
          </div>
          
          {/* Corporate subtitle */}
          <p className="text-base lg:text-sm sm:text-base md:text-lg text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' ? (
              <><strong className="text-white font-normal">Optimización de procesos industriales</strong>, automatización avanzada, ingeniería de plantas y <strong className="text-white font-normal">sistemas de gestión de calidad</strong> con metodologías Industry 4.0.</>
            ) : (
              <><strong className="text-white font-normal">Industrial process optimization</strong>, advanced automation, plant engineering and <strong className="text-white font-normal">quality management systems</strong> with Industry 4.0 methodologies.</>
            )}
          </p>
          
          {/* Executive actions */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 animate-fade-in-up-delay-3">
            <Link 
              to="/contact" 
              className="btn-primary"
              style={{ width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Consultoría Especializada' : 'Specialized Consulting'}
            </Link>
            
            <Link 
              to="/services" 
              className="btn-secondary"
              style={{ width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver Todos los Servicios' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section Premium */}
      <section id="capabilities" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display heading-2 mb-6 animate-fade-in">
              {language === 'es' ? 'Capacidades Técnicas Especializadas' : 'Specialized Technical Capabilities'}
            </h2>
            <div className="divider animate-slide-up"></div>
            <p className="text-corporate-large max-w-3xl mx-auto animate-slide-up">
              {language === 'es' 
                ? 'Cuatro pilares fundamentales de excelencia en ingeniería industrial que garantizan la transformación y optimización integral de sus operaciones productivas.'
                : 'Four fundamental pillars of industrial engineering excellence that guarantee comprehensive transformation and optimization of your production operations.'}
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
                <span className="text-corporate-accent text-xs sm:text-sm font-medium uppercase tracking-wider">
                  {language === 'es' ? 'Consultoría Especializada' : 'Specialized Consulting'}
                </span>
              </div>
              
              <h2 className="font-display text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                {language === 'es' ? 'Transformamos Operaciones en' : 'We Transform Operations into'}
                <span className="block text-corporate-accent">
                  {language === 'es' ? 'Ventajas Competitivas Sostenibles' : 'Sustainable Competitive Advantages'}
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                {language === 'es' 
                  ? 'Nuestro equipo de ingenieros industriales especialistas combina metodologías probadas con tecnologías de vanguardia para optimizar sus procesos y maximizar la eficiencia operacional.'
                  : 'Our team of specialized industrial engineers combines proven methodologies with cutting-edge technologies to optimize your processes and maximize operational efficiency.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link to="/contact" className="btn-primary bg-corporate-red text-white hover:bg-corporate-red/90 text-sm sm:text-base md:text-lg px-10 py-4">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'es' ? 'Solicitar Consultoría Estratégica' : 'Request Strategic Consulting'}
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {language === 'es' ? 'Metodologías Lean Six Sigma' : 'Lean Six Sigma Methodologies'}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm">
                      {language === 'es' ? 'Optimización sistemática de procesos' : 'Systematic process optimization'}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {language === 'es' ? 'Automatización Industry 4.0' : 'Industry 4.0 Automation'}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm">
                      {language === 'es' ? 'Tecnologías de vanguardia industrial' : 'Cutting-edge industrial technologies'}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-corporate-red/10 rounded-2xl flex items-center justify-center text-corporate-red mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {language === 'es' ? 'Certificaciones' : 'Certifications'}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm">
                      {language === 'es' ? 'Estándares globales de excelencia' : 'Global excellence standards'}
                    </p>
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

export default IndustrialEngineering;
