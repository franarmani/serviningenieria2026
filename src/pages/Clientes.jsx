import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Clientes = () => {
  const { language, t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainClients = [
    {
      name: 'PROFERTIL',
      sector: language === 'es' ? 'Petroquímica' : 'Petrochemical',
      logo: '/images/clients/profertil.png',
      description: language === 'es' ? 'Complejo petroquímico de fertilizantes' : 'Petrochemical fertilizer complex',
      services: language === 'es' 
        ? ['Mantenimiento de válvulas', 'Inspección de tanques', 'Suministro de materiales']
        : ['Valve maintenance', 'Tank inspection', 'Material supply']
    },
    {
      name: 'DOW Chemical',
      sector: language === 'es' ? 'Química' : 'Chemical',
      logo: '/images/clients/dow.png',
      description: language === 'es' ? 'Multinacional química' : 'Chemical multinational',
      services: language === 'es'
        ? ['Servicios de ingeniería', 'Mantenimiento industrial', 'Válvulas especiales']
        : ['Engineering services', 'Industrial maintenance', 'Special valves']
    },
    {
      name: 'ESSO (ExxonMobil)',
      sector: language === 'es' ? 'Petróleo' : 'Oil',
      logo: '/images/clients/esso.png',
      description: language === 'es' ? 'Refinería de petróleo' : 'Oil refinery',
      services: language === 'es'
        ? ['Inspección API 653', 'Mantenimiento de válvulas', 'Ensayos no destructivos']
        : ['API 653 Inspection', 'Valve maintenance', 'Non-destructive testing']
    },
    {
      name: 'PETROBRAS',
      sector: language === 'es' ? 'Energía' : 'Energy',
      logo: '/images/clients/petrobras.png',
      description: language === 'es' ? 'Compañía integrada de energía' : 'Integrated energy company',
      services: language === 'es'
        ? ['Inspección de tanques', 'Mantenimiento predictivo', 'Servicios in situ']
        : ['Tank inspection', 'Predictive maintenance', 'On-site services']
    },
    {
      name: 'TGS',
      sector: language === 'es' ? 'Gas Natural' : 'Natural Gas',
      logo: '/images/clients/tgs.png',
      description: language === 'es' ? 'Transportadora de Gas del Sur' : 'Southern Gas Transporter',
      services: language === 'es'
        ? ['Válvulas de alta presión', 'Mantenimiento de gasoductos', 'Servicios especiales']
        : ['High pressure valves', 'Pipeline maintenance', 'Special services']
    },
    {
      name: 'MEGA',
      sector: language === 'es' ? 'Energía' : 'Energy',
      logo: '/images/clients/mega.png',
      description: language === 'es' ? 'Distribuidora de gas natural' : 'Natural gas distributor',
      services: language === 'es'
        ? ['Válvulas de distribución', 'Mantenimiento preventivo', 'Asesoramiento técnico']
        : ['Distribution valves', 'Preventive maintenance', 'Technical consulting']
    },
    {
      name: 'YPF',
      sector: language === 'es' ? 'Energía' : 'Energy',
      logo: '/images/clients/ypf.png',
      description: language === 'es' ? 'Petróleo y energía' : 'Oil and energy',
      services: language === 'es'
        ? ['Inspección de refinería', 'Mantenimiento de equipos', 'Suministro de válvulas']
        : ['Refinery inspection', 'Equipment maintenance', 'Valve supply']
    },
    {
      name: 'PAMPA ENERGÍA',
      sector: language === 'es' ? 'Energía' : 'Energy',
      logo: '/images/clients/pampa.png',
      description: language === 'es' ? 'Generación eléctrica' : 'Power generation',
      services: language === 'es'
        ? ['Mantenimiento de turbinas', 'Válvulas de vapor', 'Servicios especializados']
        : ['Turbine maintenance', 'Steam valves', 'Specialized services']
    },
    {
      name: 'SIDERRAR',
      sector: language === 'es' ? 'Siderurgia' : 'Steel',
      logo: '/images/clients/siderrar.png',
      description: language === 'es' ? 'Planta siderúrgica' : 'Steel plant',
      services: language === 'es'
        ? ['Válvulas alta temperatura', 'Mantenimiento industrial', 'Ingeniería de materiales']
        : ['High temperature valves', 'Industrial maintenance', 'Materials engineering']
    },
    {
      name: 'ALUAR',
      sector: language === 'es' ? 'Aluminio' : 'Aluminum',
      logo: '/images/clients/aluar.png',
      description: language === 'es' ? 'Fundición de aluminio' : 'Aluminum smelting',
      services: language === 'es'
        ? ['Válvulas criogénicas', 'Mantenimiento especializado', 'Inspecciones técnicas']
        : ['Cryogenic valves', 'Specialized maintenance', 'Technical inspections']
    }
  ];

  const sectors = [
    {
      name: t('petroleoGas'),
      count: '40%',
      description: t('refineriaExploracion'),
      icon: '⚡'
    },
    {
      name: t('petroquimica'),
      count: '25%',
      description: t('complejosQuimicos'),
      icon: '🏭'
    },
    {
      name: t('energia'),
      count: '20%',
      description: t('generacionElectrica'),
      icon: '💡'
    },
    {
      name: t('siderurgiaMineria'),
      count: '15%',
      description: language === 'es' ? 'Metalurgia y procesamiento mineral' : 'Metallurgy and mineral processing',
      icon: '🔧'
    }
  ];

  const testimonials = [
    {
      company: 'PROFERTIL',
      message: language === 'es' 
        ? 'SERVIN INGENIERÍA ha sido un socio estratégico fundamental en el mantenimiento de nuestras instalaciones. Su profesionalismo y calidad de servicio nos brindan la confianza necesaria para nuestras operaciones críticas.'
        : 'SERVIN INGENIERÍA has been a fundamental strategic partner in the maintenance of our facilities. Their professionalism and quality of service provide us with the confidence needed for our critical operations.',
      position: language === 'es' ? 'Gerente de Mantenimiento' : 'Maintenance Manager',
      name: 'Ing. Carlos Rodríguez'
    },
    {
      company: 'DOW Chemical',
      message: language === 'es'
        ? 'La experiencia y conocimiento técnico de SERVIN INGENIERÍA en válvulas industriales es excepcional. Sus servicios de mantenimiento han contribuido significativamente a la confiabilidad de nuestros procesos.'
        : 'SERVIN INGENIERÍA\'s experience and technical knowledge in industrial valves is exceptional. Their maintenance services have significantly contributed to the reliability of our processes.',
      position: language === 'es' ? 'Supervisor de Ingeniería' : 'Engineering Supervisor',
      name: 'Ing. María Fernández'
    },
    {
      company: 'TGS',
      message: language === 'es'
        ? 'Trabajamos con SERVIN INGENIERÍA desde hace más de 15 años. Su capacidad de respuesta y calidad técnica los posiciona como un proveedor de clase mundial.'
        : 'We have worked with SERVIN INGENIERÍA for over 15 years. Their responsiveness and technical quality position them as a world-class provider.',
      position: language === 'es' ? 'Jefe de Mantenimiento' : 'Maintenance Chief',
      name: 'Ing. Roberto Sánchez'
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-corporate-dark via-corporate-dark/95 to-corporate-red/20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Clientes SERVIN INGENIERÍA" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-dark/90 via-corporate-dark/85 to-corporate-red/30"></div>
        
        <div className="relative z-10 container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-4xl lg:text-6xl xl:text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              <span className="block text-white/95 font-semibold mb-2">{language === 'es' ? 'NUESTROS' : 'OUR'}</span>
              <span className="block font-extrabold text-corporate-accent">{language === 'es' ? 'CLIENTES' : 'CLIENTS'}</span>
            </h1>
            
            <p className="text-lg lg:text-base sm:text-lg md:text-xl text-white/85 mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Más de 400 empresas confían en nuestros servicios especializados. Trabajamos junto a las principales industrias del país.'
                : 'Over 400 companies trust our specialized services. We work alongside the country\'s leading industries.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Clients Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
              <span className="text-corporate-red">{language === 'es' ? 'Principales' : 'Main'}</span> {language === 'es' ? 'Clientes' : 'Clients'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-corporate-gray-700 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Empresas líderes en sus sectores que han elegido a SERVIN INGENIERÍA como su socio estratégico en servicios industriales.'
                : 'Industry-leading companies that have chosen SERVIN INGENIERÍA as their strategic partner in industrial services.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainClients.map((client, index) => (
              <div key={index} className="bg-white border border-corporate-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                {/* Client Logo/Name */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-corporate-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-sm sm:text-base md:text-lg font-bold text-corporate-red">{client.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-corporate-dark">{client.name}</h3>
                    <p className="text-corporate-gray-600 text-xs sm:text-sm">{client.sector}</p>
                  </div>
                </div>
                
                <p className="text-corporate-gray-700 mb-4 text-xs sm:text-sm leading-relaxed">{client.description}</p>
                
                {/* Services */}
                <div>
                  <h4 className="font-semibold text-corporate-red mb-2 text-xs sm:text-sm">{t('serviciosOfrecidos')}:</h4>
                  <div className="space-y-1">
                    {client.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></span>
                        <span className="text-corporate-gray-700 text-[10px] sm:text-xs">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Distribution */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
              <span className="text-corporate-red">{language === 'es' ? 'Distribución' : 'Distribution'}</span> {language === 'es' ? 'por Sectores' : 'by Sector'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-corporate-gray-700 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Nuestra cartera de clientes abarca los principales sectores industriales del país.'
                : 'Our client portfolio spans the country\'s main industrial sectors.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-4">{sector.icon}</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-corporate-red mb-2">{sector.count}</div>
                <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-corporate-dark mb-2">{sector.name}</h3>
                <p className="text-corporate-gray-700 text-xs sm:text-sm">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
              <span className="text-corporate-red">{language === 'es' ? 'Testimonios' : 'Client'}</span> {language === 'es' ? 'de Clientes' : 'Testimonials'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-corporate-gray-700 max-w-3xl mx-auto">
              {language === 'es'
                ? 'La confianza y satisfacción de nuestros clientes es nuestro mayor aval.'
                : 'The trust and satisfaction of our clients is our greatest endorsement.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-corporate-gray-50 rounded-lg p-8 shadow-lg">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-corporate-red mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-corporate-gray-700 leading-relaxed italic mb-6">
                    "{testimonial.message}"
                  </p>
                </div>
                
                <div className="border-t border-corporate-gray-200 pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-corporate-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{testimonial.name.split(' ')[1].charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-corporate-dark">{testimonial.name}</p>
                      <p className="text-corporate-gray-600 text-xs sm:text-sm">{testimonial.position}</p>
                      <p className="text-corporate-red text-xs sm:text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-corporate-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              <span className="text-corporate-accent">{language === 'es' ? 'Números' : 'Numbers'}</span> {language === 'es' ? 'que Hablan' : 'that Speak'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Nuestra trayectoria se refleja en cifras que demuestran la confianza y satisfacción de nuestros clientes.'
                : 'Our track record is reflected in figures that demonstrate the trust and satisfaction of our clients.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-3xl sm:text-4xl lg:text-5xl font-bold text-corporate-accent mb-2">400+</div>
              <div className="text-white/80 font-semibold">{language === 'es' ? 'Clientes Activos' : 'Active Clients'}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-3xl sm:text-4xl lg:text-5xl font-bold text-corporate-accent mb-2">1000+</div>
              <div className="text-white/80 font-semibold">{language === 'es' ? 'Tanques Inspeccionados' : 'Tanks Inspected'}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-3xl sm:text-4xl lg:text-5xl font-bold text-corporate-accent mb-2">46</div>
              <div className="text-white/80 font-semibold">{language === 'es' ? 'Años de Experiencia' : 'Years of Experience'}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-3xl sm:text-4xl lg:text-5xl font-bold text-corporate-accent mb-2">95%</div>
              <div className="text-white/80 font-semibold">{language === 'es' ? 'Satisfacción Cliente' : 'Client Satisfaction'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-corporate-red">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">
            {language === 'es' 
              ? '¿Su empresa necesita servicios industriales especializados?'
              : 'Does your company need specialized industrial services?'}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Únase a las más de 400 empresas que confían en SERVIN INGENIERÍA para sus necesidades de mantenimiento industrial.'
              : 'Join the more than 400 companies that trust SERVIN INGENIERÍA for their industrial maintenance needs.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-corporate-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
            </a>
            <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-corporate-red transition-colors">
              {language === 'es' ? 'Conocer Servicios' : 'View Services'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Clientes;
