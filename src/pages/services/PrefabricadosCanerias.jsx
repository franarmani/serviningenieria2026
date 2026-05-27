import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  Flame,
  Gauge,
  Hammer,
  HardHat,
  Mail,
  Menu,
  Phone,
  Pipette,
  ShieldCheck,
  Truck,
  Wrench,
  X
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const navItems = [
  ['#alcance', 'Alcance'],
  ['#equipamiento', 'Equipamiento'],
  ['#trabajos', 'Trabajos'],
  ['#contacto', 'Contacto']
];

const services = [
  {
    title: 'Prefabricado y montaje de spool de caneria',
    text: 'Fabricacion y montaje de spool para lineas industriales, redes y sistemas de conduccion.',
    icon: Pipette
  },
  {
    title: 'Fabricacion y montaje de tuberias industriales',
    text: 'Desarrollo de tuberias para instalaciones industriales, sistemas auxiliares y procesos productivos.',
    icon: Factory
  },
  {
    title: 'Redes de incendio, drenajes y puentes de medicion',
    text: 'Ejecucion de redes y sistemas asociados a seguridad, medicion y operacion industrial.',
    icon: Gauge
  },
  {
    title: 'Fabricacion de estructuras metalicas y soporteria',
    text: 'Construccion de estructuras, bases, soportes y componentes metalicos a medida.',
    icon: Building2
  },
  {
    title: 'Montaje y desmontaje industrial',
    text: 'Intervencion, instalacion, retiro y reemplazo de componentes en planta o campo.',
    icon: Wrench
  },
  {
    title: 'Servicio de hidrogrua',
    text: 'Soporte para maniobras, izajes, movimientos y montaje de componentes industriales.',
    icon: Truck
  },
  {
    title: 'Arenado, granallado y pintura',
    text: 'Tratamiento superficial y terminacion de piezas, estructuras y componentes industriales.',
    icon: Flame
  },
  {
    title: 'Mecanizados',
    text: 'Trabajos de mecanizado para piezas, adaptaciones y componentes industriales.',
    icon: Hammer
  },
  {
    title: 'Ensayos no destructivos',
    text: 'Controles tecnicos para verificar calidad, estado e integridad de componentes.',
    icon: ShieldCheck
  },
  {
    title: 'Pruebas hidraulicas de alta presion',
    text: 'Ensayos y verificaciones bajo presion para validar sistemas y componentes.',
    icon: Gauge
  }
];

const processSteps = [
  ['01', 'Relevamiento tecnico', 'Analisis de necesidades, condiciones de campo, planos, medidas y requerimientos del proyecto.'],
  ['02', 'Prefabricado y fabricacion', 'Desarrollo de piezas, spool, estructuras, soportes y componentes en centro de servicios.'],
  ['03', 'Control y pruebas', 'Verificacion dimensional, ensayos, pruebas hidraulicas y control tecnico.'],
  ['04', 'Montaje en campo', 'Traslado, asistencia con hidrogrua, montaje, desmontaje e instalacion final.'],
  ['05', 'Entrega y soporte', 'Cierre del trabajo, documentacion tecnica y acompanamiento posterior.']
];

const equipment = [
  'Camiones con hidrogrua',
  'Puente grua de 5 TN y 6 TN',
  'Soldadoras automaticas',
  'Soldadoras TIG / MIG',
  'Corte plasma',
  'Tornos paralelos y verticales',
  'Prensas de 200 TN',
  'Bombas hidraulicas de alta presion con registro',
  'Grupos electrogenos',
  'Cabina de pintura y granallado',
  'Equipo de torqueo HYTORC',
  'Bancos de pruebas computarizados',
  'Laboratorio movil para trabajos in situ'
];

const materials = [
  'Valvulas',
  'Accesorios forjados',
  'Acoplamientos',
  'Accesorios para soldar',
  'Tubos',
  'Juntas',
  'Niples',
  'Perfiles',
  'Conjuntos dielectricos',
  'Bridas'
];

const works = [
  ['Mantenimiento de actuadores con montaje', '/prefabricados/page_04_image_03_xref_101.webp'],
  ['Fabricacion de estructuras y tuberias', '/prefabricados/page_02_image_07_xref_69.webp'],
  ['Mantenimiento y calibracion de valvulas in situ', '/prefabricados/page_04_image_07_xref_109.webp'],
  ['Servicio de torqueo controlado HYTORC', '/prefabricados/page_04_image_05_xref_105.webp'],
  ['Montajes con hidrogrua', '/prefabricados/page_02_image_08_xref_71.webp'],
  ['Trabajos en tanques e instalaciones industriales', '/prefabricados/page_04_image_15_xref_121.webp']
];

const qualityItems = [
  ['ISO 9001', ShieldCheck],
  ['Personal capacitado', HardHat],
  ['Equipamiento especializado', Factory],
  ['Experiencia en campo', Wrench],
  ['Mas de 45 anos de trayectoria', CheckCircle2]
];

const industries = [
  ['Petroleo y gas', Factory],
  ['Mineria', HardHat],
  ['Energia', Gauge],
  ['Petroquimica', Pipette],
  ['Industria alimenticia', Building2],
  ['Plantas industriales', Factory],
  ['Terminales y almacenamiento', Truck],
  ['Servicios industriales generales', Wrench]
];

const clients = [
  'Air Liquide',
  'Axion Energy',
  'Bunge',
  'Cargill S.A.I.C.',
  'Central Termica P. Buena',
  'Coca Cola Andina',
  'Compania Mega',
  'Dow',
  'Oiltanking Ebytem',
  'Pan American',
  'Petrobras',
  'Profertil',
  'Refinor',
  'Shell',
  'T.G.S.',
  'Unipar Indupa',
  'Y.P.F.'
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const PrefabricadosCanerias = () => {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const contactSubject = language === 'es'
    ? 'Consulta tecnica: prefabricados, piping y estructuras'
    : 'Technical inquiry: prefabrication, piping and structures';

  return (
    <div className="min-h-screen bg-white text-gray-950 overflow-hidden">
      <Hero
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        contactSubject={contactSubject}
      />
      <Intro />
      <Services />
      <Process />
      <Equipment />
      <Materials />
      <Works />
      <Quality />
      <Industries />
      <Trajectory />
      <FinalCta contactSubject={contactSubject} />
    </div>
  );
};

const Hero = ({ menuOpen, setMenuOpen, contactSubject }) => (
  <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white">
    <div className="absolute inset-0 z-0">
      <img
        src="/prefabricados/page_03_image_03_xref_88.webp"
        alt="Prefabricados piping y estructuras SERVIN"
        className="w-full h-full object-cover"
        style={{ filter: 'blur(3px)' }}
      />
    </div>
    <div className="absolute inset-0 z-10 bg-black/75" />

    {/* header */}
    <header className="absolute top-0 left-0 right-0 z-30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-s-white.webp" alt="SERVIN Ingenieria S.A." className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 px-4 py-4">
          <div className="flex flex-col gap-3">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} className="py-2 text-sm font-semibold text-white/85" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>

    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-12 lg:py-16 xl:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.65, ease: 'easeOut' }}
        variants={fadeUp}
      >
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="inline-flex items-center bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-2 sm:px-4 md:px-6 py-0.5 sm:py-2 md:py-2.5">
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-corporate-red rounded-full mr-1.5 sm:mr-3 animate-pulse" />
            <span className="text-white/90 text-[8px] sm:text-xs md:text-sm font-medium tracking-wider uppercase">
              SERVIN Ingenieria S.A.
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}>
          Prefabricados /{' '}
          <span className="text-corporate-red">Piping y Estructuras</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-white/80 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontWeight: '300' }}>
          Soluciones integrales para fabricacion, montaje y asistencia en campo en proyectos industriales.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-white/60 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" style={{ fontWeight: '300' }}>
          SERVIN Ingenieria S.A. desarrolla trabajos de prefabricado, piping, fabricacion de estructuras, montaje y desmontaje para industrias de alta exigencia, combinando experiencia tecnica, equipamiento especializado y capacidad operativa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={`/contact?subject=${encodeURIComponent(contactSubject)}#formulario`} className="inline-flex items-center text-xs sm:text-sm md:text-base text-white hover:text-corporate-red font-medium transition-colors">
            Solicitar asesoramiento
          </Link>
          <span className="hidden sm:inline text-white/30">|</span>
          <a href="#alcance" className="inline-flex items-center text-xs sm:text-sm md:text-base text-white/70 hover:text-corporate-red font-medium transition-colors">
            Ver alcance del servicio
          </a>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
      <div className="flex flex-col items-center text-white/80 animate-bounce">
        <span className="text-[9px] sm:text-[10px] md:text-xs font-medium mb-1 sm:mb-2 tracking-wider">Deslizar</span>
        <svg className="w-3 h-5 sm:w-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </div>
  </section>
);

const Intro = () => (
  <Section className="bg-white">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <MotionBlock className="lg:col-span-6">
        <SectionEyebrow>Capacidad tecnica</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
          Capacidad tecnica para proyectos industriales
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            En esta unidad, SERVIN Ingenieria S.A. desarrolla trabajos de prefabricado, fabricacion, montaje y asistencia en campo para proyectos industriales, abarcando canerias, estructuras metalicas, soportes, redes, componentes asociados y servicios complementarios.
          </p>
          <p>
            La empresa combina experiencia, personal capacitado, infraestructura propia y equipamiento de gran porte para responder a los requerimientos de industrias como petroleo, gas, mineria, energia, petroquimica e industria general.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <BadgeStat value="1979" label="Desde" />
          <BadgeStat value="+45" label="anos de experiencia" />
        </div>
      </MotionBlock>
      <MotionBlock className="lg:col-span-6" delay={0.12}>
        <div className="relative">
          <img src="/prefabricados/page_05_image_01_xref_134.webp" alt="Taller industrial SERVIN" className="w-full aspect-[16/11] object-cover border border-gray-200" />
          <div className="absolute -bottom-5 -left-5 hidden bg-corporate-red px-6 py-5 text-white shadow-xl sm:block">
            <p className="text-3xl font-black leading-none">Centro</p>
            <p className="text-xs uppercase tracking-wider">de servicios propio</p>
          </div>
        </div>
      </MotionBlock>
    </div>
  </Section>
);

const Services = () => (
  <Section id="alcance" className="bg-gray-50">
    <SectionHeader
      eyebrow="Alcance del servicio"
      title="Una solucion integral para fabricacion, montaje, mantenimiento y soporte tecnico en campo."
      centered
    />
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <MotionBlock key={service.title} delay={index * 0.035}>
            <article className="group h-full border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-corporate-red/50 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-gray-100 text-corporate-red group-hover:bg-corporate-red group-hover:text-white transition-colors">
                <Icon size={23} />
              </div>
              <h3 className="text-lg font-bold text-gray-950 mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{service.text}</p>
            </article>
          </MotionBlock>
        );
      })}
    </div>
  </Section>
);

const Process = () => (
  <Section className="relative bg-[#0d0e10] text-white">
    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,transparent_0%,transparent_48%,#e00000_49%,#e00000_51%,transparent_52%)] bg-[length:42px_42px]" />
    <div className="relative">
      <SectionHeader
        eyebrow="Proceso"
        title="De la planificacion al montaje en campo"
        subtitle="Un proceso de trabajo ordenado para garantizar calidad, seguridad y eficiencia operativa."
        dark
        centered
      />
      <div className="mt-14 grid lg:grid-cols-5 gap-5">
        {processSteps.map(([number, title, text], index) => (
          <MotionBlock key={title} delay={index * 0.06}>
            <article className="relative h-full border border-white/10 bg-white/[0.04] p-6">
              <div className="text-5xl font-black text-corporate-red mb-5">{number}</div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{text}</p>
            </article>
          </MotionBlock>
        ))}
      </div>
    </div>
  </Section>
);

const Equipment = () => (
  <Section id="equipamiento" className="bg-gray-50">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <MotionBlock className="lg:col-span-5">
        <img src="/prefabricados/page_03_image_03_xref_88.webp" alt="Equipamiento e infraestructura SERVIN" className="w-full aspect-[4/5] object-cover border border-gray-200" />
      </MotionBlock>
      <MotionBlock className="lg:col-span-7" delay={0.1}>
        <SectionEyebrow>Equipamiento e infraestructura</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-5">
          Equipamiento e infraestructura propia
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          En su centro de servicios, SERVIN Ingenieria S.A. cuenta con equipamiento de gran porte para el desarrollo de proyectos industriales, fabricacion, montaje, pruebas y asistencia tecnica.
        </p>
        <div className="mb-8 border-l-4 border-corporate-red bg-white p-5 shadow-sm">
          <p className="font-bold text-gray-950">Centro de servicios preparado para grandes proyectos industriales.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {equipment.map((item) => (
            <div key={item} className="flex gap-3 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
              <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-corporate-red" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </MotionBlock>
    </div>
  </Section>
);

const Materials = () => (
  <section className="relative bg-[#090a0c] text-white">
    <img src="/prefabricados/page_06_image_02_xref_152.webp" alt="Almacen de materiales SERVIN" className="absolute inset-0 h-full w-full object-cover opacity-25" />
    <div className="absolute inset-y-0 left-0 w-1/3 bg-corporate-red/80 [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)]" />
    <Section>
      <div className="relative grid lg:grid-cols-12 gap-10 items-center">
        <MotionBlock className="lg:col-span-5">
          <div className="text-7xl sm:text-8xl font-black text-white leading-none">600 m2</div>
          <p className="mt-4 text-xl font-semibold">de almacen para provision de materiales industriales.</p>
        </MotionBlock>
        <MotionBlock className="lg:col-span-7" delay={0.1}>
          <SectionEyebrow dark>Almacen y stock</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-5 text-white">
            Almacen de materiales y stock disponible
          </h2>
          <p className="text-white/78 leading-relaxed mb-8">
            SERVIN Ingenieria S.A. cuenta con un almacen de 600 m2 para la provision de materiales. Su amplio stock permite desarrollar proyectos optimizando tiempos de fabricacion y entrega, minimizando costos y mejorando la respuesta ante necesidades operativas.
          </p>
          <div className="flex flex-wrap gap-3">
            {materials.map((item) => (
              <span key={item} className="border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                {item}
              </span>
            ))}
          </div>
        </MotionBlock>
      </div>
    </Section>
  </section>
);

const Works = () => (
  <Section id="trabajos" className="bg-white">
    <SectionHeader
      eyebrow="Trabajos realizados"
      title="Experiencia aplicada en proyectos industriales, servicios en campo, fabricacion y montaje."
      centered
    />
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {works.map(([title, image], index) => (
        <MotionBlock key={title} delay={index * 0.04}>
          <figure className="group relative overflow-hidden border border-gray-200 bg-black">
            <img src={image} alt={title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-95" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-lg font-bold text-white leading-tight">{title}</p>
            </figcaption>
          </figure>
        </MotionBlock>
      ))}
    </div>
  </Section>
);

const Quality = () => (
  <Section className="bg-gray-50">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <MotionBlock className="lg:col-span-5">
        <SectionEyebrow>Calidad y respaldo tecnico</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-5">
          Calidad, seguridad y respaldo tecnico
        </h2>
        <p className="text-gray-600 leading-relaxed">
          SERVIN Ingenieria S.A. cuenta con un sistema de gestion de calidad aprobado bajo Norma ISO 9001 en todas sus unidades de negocio. Esta base de calidad permite desarrollar trabajos industriales con criterios tecnicos, trazabilidad y procedimientos orientados a la confiabilidad operativa.
        </p>
      </MotionBlock>
      <MotionBlock className="lg:col-span-7" delay={0.1}>
        <div className="grid sm:grid-cols-2 gap-4">
          {qualityItems.map(([item, Icon]) => (
            <div key={item} className="flex items-center gap-4 border border-gray-200 bg-white p-5">
              <div className="flex h-11 w-11 items-center justify-center bg-corporate-red text-white">
                <Icon size={22} />
              </div>
              <span className="font-bold text-gray-900">{item}</span>
            </div>
          ))}
        </div>
      </MotionBlock>
    </div>
  </Section>
);

const Industries = () => (
  <Section className="relative bg-[#0d0e10] text-white">
    <div className="absolute inset-0 opacity-15 bg-[url('/prefabricados/page_02_image_06_xref_67.webp')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-[#0d0e10]/85" />
    <div className="relative">
      <SectionHeader eyebrow="Industrias" title="Soluciones para industrias de alta exigencia" dark centered />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {industries.map(([industry, Icon], index) => (
          <MotionBlock key={industry} delay={index * 0.03}>
            <div className="border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <Icon className="mb-4 text-corporate-red" size={26} />
              <h3 className="font-bold text-white">{industry}</h3>
            </div>
          </MotionBlock>
        ))}
      </div>
    </div>
  </Section>
);

const Trajectory = () => (
  <Section className="bg-white text-gray-950">
    <MotionBlock className="max-w-3xl mx-auto text-center mb-14">
      <SectionEyebrow>Trayectoria y clientes</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-5">
        Trayectoria que avala nuestra experiencia
      </h2>
      <p className="text-gray-600 leading-relaxed">
        A lo largo de todos estos anos, SERVIN Ingenieria S.A. ha logrado estar presente en cada provincia del pais y tambien abastecer con sus servicios a paises limitrofes.
      </p>
    </MotionBlock>
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <MotionBlock className="lg:col-span-5">
        <img src="/prefabricados/mapa.webp" alt="Presencia SERVIN en Argentina" className="max-h-[420px] w-full object-contain bg-gray-50 border border-gray-200 p-6" />
      </MotionBlock>
      <MotionBlock className="lg:col-span-7" delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {clients.map((client) => (
            <div key={client} className="border border-gray-200 bg-gray-50 px-3 py-4 text-center text-xs sm:text-sm font-semibold text-gray-700">
              {client}
            </div>
          ))}
        </div>
      </MotionBlock>
    </div>
  </Section>
);

const FinalCta = ({ contactSubject }) => (
  <section id="contacto" className="relative bg-black text-white">
    <img src="/prefabricados/page_02_image_08_xref_71.webp" alt="Montaje industrial SERVIN" className="absolute inset-0 h-full w-full object-cover opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/70" />
    <div className="absolute top-0 right-0 h-64 w-64 bg-corporate-red/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 left-0 h-48 w-48 bg-corporate-red/5 blur-2xl rounded-full" />
    <Section>
      <div className="relative grid lg:grid-cols-12 gap-10 items-center">
        <MotionBlock className="lg:col-span-7">
          <SectionEyebrow dark>Contacto tecnico</SectionEyebrow>
          <h2 className="text-3xl sm:text-5xl font-light leading-tight mb-6 text-white">
            Necesitas soporte para un proyecto de piping, estructuras o montaje industrial?
          </h2>
          <p className="text-white/70 leading-relaxed max-w-3xl mb-8 text-base sm:text-lg">
            Nuestro equipo puede acompanarte desde el relevamiento tecnico hasta la fabricacion, pruebas, montaje y asistencia en campo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`/contact?subject=${encodeURIComponent(contactSubject)}#formulario`} className="inline-flex items-center gap-2 bg-corporate-red hover:bg-red-700 text-white font-semibold px-7 py-4 transition-colors">
              <Mail size={18} />
              Contactar area comercial
            </Link>
            <Link to={`/contact?subject=${encodeURIComponent('Consulta tecnica prefabricados piping estructuras')}#formulario`} className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/90 hover:text-white font-semibold px-7 py-4 transition-colors">
              <ChevronRight size={18} />
              Enviar consulta tecnica
            </Link>
          </div>
        </MotionBlock>
        <MotionBlock className="lg:col-span-5" delay={0.12}>
          <div className="grid gap-4">
            <ContactCard name="Marco Dagnino" role="Area de mantenimiento" email="infomantenimientos@serviningenieria.com.ar" phone="+54 9 291 422 8787" />
            <ContactCard name="Claudio Armani" role="Area de ventas" email="ventasbbca@serviningenieria.com.ar" phone="+54 9 291 646 7768" />
          </div>
        </MotionBlock>
      </div>
    </Section>
  </section>
);

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const MotionBlock = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    variants={fadeUp}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ eyebrow, title, subtitle, dark = false, centered = false }) => (
  <MotionBlock className={centered ? 'max-w-4xl mx-auto text-center' : ''}>
    <SectionEyebrow dark={dark}>{eyebrow}</SectionEyebrow>
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light leading-tight ${dark ? 'text-white' : 'text-gray-950'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-white/70' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </MotionBlock>
);

const SectionEyebrow = ({ children, dark = false }) => (
  <div className={`inline-flex items-center border px-4 py-2 mb-5 ${dark ? 'border-white/15 bg-white/[0.06]' : 'border-gray-200 bg-white shadow-sm'}`}>
    <span className="h-2 w-2 bg-corporate-red mr-3" />
    <span className={`text-xs font-semibold tracking-wider uppercase ${dark ? 'text-white/80' : 'text-gray-700'}`}>
      {children}
    </span>
  </div>
);

const BadgeStat = ({ value, label }) => (
  <div className="border border-gray-200 bg-gray-50 px-5 py-4">
    <div className="text-3xl font-black text-corporate-red leading-none">{value}</div>
    <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-600">{label}</div>
  </div>
);

const ContactCard = ({ name, role, email, phone }) => (
  <div className="border border-white/10 bg-white/[0.06] p-5 sm:p-6 backdrop-blur hover:bg-white/[0.1] transition-colors">
    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-corporate-red text-white text-sm font-black">
        {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
      </div>
      <div>
        <h3 className="font-bold text-white text-base">{name}</h3>
        {role && <p className="text-xs text-white/50">{role}</p>}
      </div>
    </div>
    <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-corporate-red transition-colors break-all mb-2">
      <Mail size={15} className="flex-shrink-0" />
      {email}
    </a>
    <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-corporate-red transition-colors">
      <Phone size={15} className="flex-shrink-0" />
      {phone}
    </a>
  </div>
);

export default PrefabricadosCanerias;
