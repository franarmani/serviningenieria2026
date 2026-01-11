import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Equipamiento = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equipment = [
    {
      category: language === 'es' ? 'Banco de Pruebas Ventil' : 'Ventil Test Bench',
      description: language === 'es' ? 'Banco de pruebas hidráulicas para válvulas industriales' : 'Hydraulic test bench for industrial valves',
      specifications: language === 'es' ? [
        'Presión de trabajo: hasta 600 PSI',
        'Diámetros: 2" a 24"',
        'Capacidad: válvulas hasta 2000 lbs',
        'Automatización: sistema digital de control'
      ] : [
        'Working pressure: up to 600 PSI',
        'Diameters: 2" to 24"',
        'Capacity: valves up to 2000 lbs',
        'Automation: digital control system'
      ],
      capabilities: language === 'es' ? ['Pruebas hidrostáticas', 'Pruebas de estanqueidad', 'Verificación de torques'] : ['Hydrostatic tests', 'Leak tests', 'Torque verification'],
      software: language === 'es' ? 'Software de informes automáticos' : 'Automatic reporting software',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: language === 'es' ? 'Torno Industrial' : 'Industrial Lathe',
      description: language === 'es' ? 'Torno CNC para mecanizado de precisión' : 'CNC lathe for precision machining',
      specifications: language === 'es' ? [
        'Capacidad entre puntos: 2000mm',
        'Diámetro máximo: 800mm',
        'Precisión: ±0.01mm',
        'Control numérico: Fanuc'
      ] : [
        'Distance between centers: 2000mm',
        'Maximum diameter: 800mm',
        'Precision: ±0.01mm',
        'Numerical control: Fanuc'
      ],
      capabilities: language === 'es' ? ['Torneado de asientos de válvulas', 'Rectificado de vástagos', 'Fabricación de piezas especiales'] : ['Valve seat turning', 'Stem grinding', 'Special parts manufacturing'],
      software: language === 'es' ? 'CAD/CAM integrado' : 'Integrated CAD/CAM',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: language === 'es' ? 'Lapeadoras' : 'Lapping Machines',
      description: language === 'es' ? 'Máquinas de lapidado para acabado superficial' : 'Lapping machines for surface finishing',
      specifications: language === 'es' ? [
        'Rango de diámetros: 1" a 16"',
        'Acabado superficial: Ra 0.1μm',
        'Precisión dimensional: ±0.005mm',
        'Control automático de avance'
      ] : [
        'Diameter range: 1" to 16"',
        'Surface finish: Ra 0.1μm',
        'Dimensional precision: ±0.005mm',
        'Automatic feed control'
      ],
      capabilities: language === 'es' ? ['Lapidado de asientos', 'Acabado espejo', 'Corrección dimensional'] : ['Seat lapping', 'Mirror finish', 'Dimensional correction'],
      software: language === 'es' ? 'Sistema de control automático' : 'Automatic control system',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: language === 'es' ? 'Cabina de Pintura' : 'Paint Booth',
      description: language === 'es' ? 'Cabina de pintura industrial con filtración' : 'Industrial paint booth with filtration',
      specifications: language === 'es' ? [
        'Dimensiones: 6m x 4m x 3m',
        'Sistema de extracción: 15000 m³/h',
        'Filtración: doble etapa',
        'Iluminación: LED 2000 lux'
      ] : [
        'Dimensions: 6m x 4m x 3m',
        'Extraction system: 15000 m³/h',
        'Filtration: dual stage',
        'Lighting: LED 2000 lux'
      ],
      capabilities: language === 'es' ? ['Pintura electrostática', 'Acabados especiales', 'Secado controlado'] : ['Electrostatic painting', 'Special finishes', 'Controlled drying'],
      software: language === 'es' ? 'Control de temperatura y humedad' : 'Temperature and humidity control',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: language === 'es' ? 'Cabina de Granallado' : 'Shot Blasting Booth',
      description: language === 'es' ? 'Cabina de granallado para preparación superficial' : 'Shot blasting booth for surface preparation',
      specifications: language === 'es' ? [
        'Dimensiones: 4m x 3m x 2.5m',
        'Presión de trabajo: 8 bar',
        'Capacidad de granalla: 200kg',
        'Ciclón recuperador integrado'
      ] : [
        'Dimensions: 4m x 3m x 2.5m',
        'Working pressure: 8 bar',
        'Shot capacity: 200kg',
        'Integrated recovery cyclone'
      ],
      capabilities: language === 'es' ? ['Limpieza superficial', 'Preparación para pintura', 'Texturizado'] : ['Surface cleaning', 'Paint preparation', 'Texturing'],
      software: language === 'es' ? 'Control automático de presión' : 'Automatic pressure control',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: language === 'es' ? 'Soldadoras TIG/MIG' : 'TIG/MIG Welders',
      description: language === 'es' ? 'Equipos de soldadura para reparaciones especializadas' : 'Welding equipment for specialized repairs',
      specifications: language === 'es' ? [
        'Corriente: AC/DC hasta 400A',
        'Proceso: TIG, MIG, electrodo',
        'Control digital: pantalla LCD',
        'Protección IP23'
      ] : [
        'Current: AC/DC up to 400A',
        'Process: TIG, MIG, electrode',
        'Digital control: LCD display',
        'Protection: IP23'
      ],
      capabilities: language === 'es' ? ['Soldadura de aceros especiales', 'Reparación de válvulas', 'Recargue de asientos'] : ['Special steel welding', 'Valve repair', 'Seat hardfacing'],
      software: language === 'es' ? 'Programas predefinidos por material' : 'Predefined programs by material',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const mobileLab = {
    name: language === 'es' ? 'Laboratorio Móvil Preventest' : 'Preventest Mobile Laboratory',
    description: language === 'es' ? 'Unidad móvil equipada para ensayos no destructivos in situ' : 'Mobile unit equipped for on-site non-destructive testing',
    specifications: language === 'es' ? [
      'Vehículo: 4x4 todo terreno',
      'Autonomía: 8 horas continuas',
      'Equipamiento certificado',
      'Personal calificado Nivel II/III'
    ] : [
      'Vehicle: 4x4 all-terrain',
      'Autonomy: 8 continuous hours',
      'Certified equipment',
      'Qualified personnel Level II/III'
    ],
    equipment: language === 'es' ? [
      'Ultrasonido convencional y PAUT',
      'Líquidos penetrantes',
      'Partículas magnéticas',
      'Medición de espesores',
      'Flujo magnético (MFL)'
    ] : [
      'Conventional and PAUT ultrasound',
      'Liquid penetrant',
      'Magnetic particles',
      'Thickness measurement',
      'Magnetic flux leakage (MFL)'
    ],
    capabilities: language === 'es' ? [
      'Inspección de tanques API 653',
      'Ensayos según ASME Sec. V',
      'Detección de discontinuidades',
      'Informes digitales inmediatos'
    ] : [
      'API 653 tank inspection',
      'Testing per ASME Sec. V',
      'Discontinuity detection',
      'Immediate digital reports'
    ]
  };

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
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              alt={language === 'es' ? 'Equipamiento Industrial' : 'Industrial Equipment'}
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
              <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Tecnología de vanguardia
              </span>
            </div>
          </div>
          
          {/* Executive title */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl xl:text-5xl font-light text-white mb-4 sm:mb-6" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '0.9'
            }}>
              {language === 'es' ? 'NUESTRO' : 'OUR'}
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-corporate-red mr-4"></div>
              <h2 className="text-6xl sm:text-7xl lg:text-9xl xl:text-10xl font-bold" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #B00000 0%, #9A0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.02em'
              }}>
                {language === 'es' ? 'EQUIPAMIENTO' : 'EQUIPMENT'}
              </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-corporate-red ml-4"></div>
            </div>
          </div>
          
          {/* Corporate subtitle */}
          <p className="text-lg lg:text-base sm:text-lg md:text-xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>Maquinaria y <strong className="text-white font-normal">equipos de última generación</strong> que nos permiten ofrecer servicios de <strong className="text-white font-normal">mantenimiento industrial</strong> con los más altos estándares de calidad.</>
              : <>Machinery and <strong className="text-white font-normal">state-of-the-art equipment</strong> that allow us to provide <strong className="text-white font-normal">industrial maintenance</strong> services with the highest quality standards.</>}
          </p>
          
          {/* Executive actions */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 animate-fade-in-up-delay-3">
            <Link 
              to={`/contact?subject=${encodeURIComponent(
                language === 'es'
                  ? 'Consulta técnica: equipamiento industrial'
                  : 'Technical inquiry: industrial equipment'
              )}#formulario`}
              className="btn-primary"
              style={{ width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Solicitar Información' : 'Request Information'}
            </Link>
            
            <Link 
              to="/divisiones" 
              className="btn-secondary"
              style={{ width: '280px', height: '64px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver divisiones' : 'View divisions'}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Equipment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
              <span className="text-corporate-red">{language === 'es' ? 'Equipamiento' : 'Industrial'}</span> {language === 'es' ? 'Industrial' : 'Equipment'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-corporate-gray-700 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Contamos con maquinaria y equipos de última generación que nos permiten ofrecer servicios de mantenimiento y reparación con los más altos estándares de calidad.'
                : 'We have state-of-the-art machinery and equipment that allow us to provide maintenance and repair services with the highest quality standards.'}
            </p>
          </div>

          <div className="space-y-12">
            {equipment.map((item, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.category}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-dark mb-4">{item.category}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-corporate-gray-700 mb-6 leading-relaxed">{item.description}</p>
                  
                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-corporate-red mb-3">{language === 'es' ? 'Especificaciones Técnicas:' : 'Technical Specifications:'}</h4>
                    <ul className="space-y-2">
                      {item.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-corporate-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-corporate-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-corporate-red mb-3">{language === 'es' ? 'Capacidades:' : 'Capabilities:'}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.capabilities.map((capability, idx) => (
                        <span key={idx} className="bg-corporate-gray-100 text-corporate-dark px-3 py-1 rounded-full text-xs sm:text-sm">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Software */}
                  <div className="bg-corporate-red/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-corporate-red mb-2">{language === 'es' ? 'Sistema de Control:' : 'Control System:'}</h4>
                    <p className="text-corporate-gray-700">{item.software}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Laboratory Section */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
              <span className="text-corporate-red">{language === 'es' ? 'Laboratorio' : 'Mobile'}</span> {language === 'es' ? 'Móvil' : 'Laboratory'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-corporate-gray-700 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Servicios especializados de ensayos no destructivos directamente en las instalaciones del cliente.'
                : 'Specialized non-destructive testing services directly at client facilities.'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Image */}
              <div className="relative h-80 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                  alt={language === 'es' ? 'Laboratorio Móvil Preventest' : 'Preventest Mobile Laboratory'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-dark mb-4">{mobileLab.name}</h3>
                <p className="text-sm sm:text-base md:text-lg text-corporate-gray-700 mb-6 leading-relaxed">{mobileLab.description}</p>
                
                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-corporate-red mb-3">{language === 'es' ? 'Especificaciones:' : 'Specifications:'}</h4>
                  <ul className="space-y-2">
                    {mobileLab.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-corporate-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment */}
                <div className="mb-6">
                  <h4 className="font-semibold text-corporate-red mb-3">{language === 'es' ? 'Equipamiento:' : 'Equipment:'}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mobileLab.equipment.map((equipment, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-4 h-4 text-corporate-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm text-corporate-gray-700">{equipment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <h4 className="font-semibold text-corporate-red mb-3">{language === 'es' ? 'Servicios:' : 'Services:'}</h4>
                  <div className="space-y-2">
                    {mobileLab.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-4 h-4 text-corporate-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-corporate-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="section-padding bg-corporate-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              <span className="text-corporate-accent">{language === 'es' ? 'Estándares' : 'Standards'}</span> {language === 'es' ? 'y Certificaciones' : '& Certifications'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Todos nuestros equipos y procesos cumplen con los más estrictos estándares internacionales de calidad y seguridad.'
                : 'All our equipment and processes comply with the strictest international quality and safety standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">API</span>
              </div>
              <h3 className="font-display text-sm sm:text-base md:text-lg font-bold mb-2">API 653</h3>
              <p className="text-white/80 text-xs sm:text-sm">{language === 'es' ? 'Inspección de tanques' : 'Tank inspection'}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">ISO</span>
              </div>
              <h3 className="font-display text-sm sm:text-base md:text-lg font-bold mb-2">ISO 9001</h3>
              <p className="text-white/80 text-xs sm:text-sm">{language === 'es' ? 'Gestión de calidad' : 'Quality management'}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">ASME</span>
              </div>
              <h3 className="font-display text-sm sm:text-base md:text-lg font-bold mb-2">ASME Sec. V</h3>
              <p className="text-white/80 text-xs sm:text-sm">{language === 'es' ? 'Ensayos no destructivos' : 'Non-destructive testing'}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">OPDS</span>
              </div>
              <h3 className="font-display text-sm sm:text-base md:text-lg font-bold mb-2">OPDS N°24</h3>
              <p className="text-white/80 text-xs sm:text-sm">{language === 'es' ? 'Registro provincial' : 'Provincial registry'}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Equipamiento;
