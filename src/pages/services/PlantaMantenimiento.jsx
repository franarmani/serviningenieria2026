import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const PlantaMantenimiento = () => {
  const { language } = useLanguage();
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [showEquipmentModal, setShowEquipmentModal] = useState(false);
  
  // Video player states
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsTimeoutRef = useRef(null);
  const videoContainerRef = useRef(null);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowProcessModal(false);
        setShowEquipmentModal(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Bloquear scroll cuando modal está abierto
  useEffect(() => {
    if (showProcessModal || showEquipmentModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showProcessModal, showEquipmentModal]);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 75%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
            alt={language === 'es' ? 'Planta de Mantenimiento Industrial' : 'Industrial Maintenance Plant'} 
            className="w-full h-full object-cover" 
            style={{
              filter: 'grayscale(30%) contrast(1.1)'
            }}
          />
        </div>

        <div className="absolute inset-0 z-10" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
        }}></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16 xl:py-20">
          
          {/* Corporate badge */}
          <div className="mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 lg:mb-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-white/90 text-[10px] sm:text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'PLANTA DE MANTENIMIENTO INDUSTRIAL' : 'INDUSTRIAL MAINTENANCE PLANT'}
              </span>
            </div>
          </div>

          {/* Executive title */}
          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up-delay-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6 px-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em',
              lineHeight: '1.1'
            }}>
              {language === 'es' ? 'PLANTA DE' : 'MAINTENANCE'}
            </h1>
            <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-transparent to-corporate-red mr-1 sm:mr-2 lg:mr-4"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-1 sm:px-2" style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #8B0000 0%, #A00000 50%, #8B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
                {language === 'es' ? 'MANTENIMIENTO' : 'PLANT'}
              </h2>
              <div className="h-px w-4 sm:w-8 lg:w-16 bg-gradient-to-r from-corporate-red to-transparent ml-1 sm:ml-2 lg:ml-4"></div>
            </div>
          </div>

          {/* Professional subtitle - Descripción General */}
          <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-8 sm:mb-12 lg:mb-16 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
            {language === 'es' 
              ? <>Unidad técnica especializada en <span className="font-semibold">recuperación, ensayo y certificación de válvulas industriales críticas</span> bajo normas API, ASME y estándares de fabricante.</>
              : <>Specialized technical unit for <span className="font-semibold">recovery, testing and certification of critical industrial valves</span> under API, ASME and manufacturer standards.</>}
          </p>

          {/* Executive actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-3 px-4 sm:px-0">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 border border-red-900/20 text-center" 
              style={{ 
                minWidth: '200px', 
                fontFamily: 'Inter, system-ui, sans-serif',
                background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)'
              }}
            >
              {language === 'es' ? 'Solicitar Evaluación Técnica' : 'Request Technical Evaluation'}
            </Link>

            <a 
              href="#especificaciones" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/25 hover:border-white/40 text-center"
              style={{ minWidth: '200px', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {language === 'es' ? 'Ver Especificaciones' : 'View Specifications'}
            </a>
          </div>
        </div>

        {/* Deslizar */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-[10px] sm:text-xs font-medium mb-2 tracking-wider" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{language === 'es' ? 'Deslizar' : 'Scroll'}</span>
            <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Separador sutil */}
      <div className="relative h-px">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Especificaciones del Taller */}
      <section id="especificaciones" className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 shadow-sm">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Infraestructura' : 'Infrastructure'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3 sm:mb-4 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Especificaciones' : 'Workshop'}</span> {language === 'es' ? 'del Taller' : 'Specifications'}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Infraestructura propia en Bahía Blanca con equipamiento certificado y personal técnico especializado.'
                : 'Own infrastructure in Bahía Blanca with certified equipment and specialized technical personnel.'}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-corporate-red text-2xl sm:text-3xl font-bold mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>700+</div>
              <div className="text-gray-900 text-sm font-medium mb-1">m²</div>
              <div className="text-gray-500 text-xs">{language === 'es' ? 'Taller especializado' : 'Specialized workshop'}</div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-corporate-red text-2xl sm:text-3xl font-bold mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>1/2"–24"</div>
              <div className="text-gray-900 text-sm font-medium mb-1">{language === 'es' ? 'Diámetro' : 'Diameter'}</div>
              <div className="text-gray-500 text-xs">{language === 'es' ? 'Rango de trabajo' : 'Working range'}</div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-corporate-red text-2xl sm:text-3xl font-bold mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>650</div>
              <div className="text-gray-900 text-sm font-medium mb-1">kg/cm²</div>
              <div className="text-gray-500 text-xs">{language === 'es' ? 'Presión hidráulica' : 'Hydraulic pressure'}</div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 text-center">
              <div className="text-corporate-red text-2xl sm:text-3xl font-bold mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>API</div>
              <div className="text-gray-900 text-sm font-medium mb-1">{language === 'es' ? 'Alineado' : 'Aligned'}</div>
              <div className="text-gray-500 text-xs">{language === 'es' ? 'Proceso documentado' : 'Documented process'}</div>
            </div>

            <div className="col-span-2 lg:col-span-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 text-center">
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-medium rounded">API 598</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-medium rounded">API 6D</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-medium rounded">ASME</span>
              </div>
              <div className="text-gray-900 text-sm font-medium">{language === 'es' ? 'Normativas' : 'Standards'}</div>
            </div>

          </div>

          {/* Ubicación */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-corporate-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Bahía Blanca, Buenos Aires, Argentina</span>
          </div>
        </div>
      </section>

      {/* Capacidades del Taller */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Capacidades Técnicas' : 'Technical Capabilities'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Capacidades' : 'Workshop'}</span> {language === 'es' ? 'del Taller' : 'Capabilities'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {(language === 'es' ? [
              { icon: '🔧', title: 'Recuperación Integral', desc: 'Válvulas industriales de todo tipo y tamaño' },
              { icon: '💧', title: 'Ensayos Hidráulicos', desc: 'Banco VENTIL con registro digital' },
              { icon: '💨', title: 'Ensayos Neumáticos', desc: 'Aire hasta 200 kg/cm²' },
              { icon: '⚙️', title: 'Calibración', desc: 'Válvulas de seguridad y alivio' },
              { icon: '🎛️', title: 'Válvulas de Control', desc: 'Mantenimiento y actuadores' },
              { icon: '🔩', title: 'Lapeo de Asientos', desc: 'Lapeadora automática 20"' },
              { icon: '📐', title: 'Mecanizado', desc: 'Torno paralelo industrial' },
              { icon: '📊', title: 'Alta Presión', desc: 'Hasta 650 kg/cm² hidráulico' }
            ] : [
              { icon: '🔧', title: 'Full Recovery', desc: 'Industrial valves of all types and sizes' },
              { icon: '💧', title: 'Hydraulic Testing', desc: 'VENTIL bench with digital recording' },
              { icon: '💨', title: 'Pneumatic Testing', desc: 'Air up to 200 kg/cm²' },
              { icon: '⚙️', title: 'Calibration', desc: 'Safety and relief valves' },
              { icon: '🎛️', title: 'Control Valves', desc: 'Maintenance and actuators' },
              { icon: '🔩', title: 'Seat Lapping', desc: '20" automatic lapping machine' },
              { icon: '📐', title: 'Machining', desc: 'Industrial parallel lathe' },
              { icon: '📊', title: 'High Pressure', desc: 'Up to 650 kg/cm² hydraulic' }
            ]).map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-corporate-red/20 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.title}</h3>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maquinaria de Precisión */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Equipamiento' : 'Equipment'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Maquinaria' : 'Precision'}</span> {language === 'es' ? 'de Precisión' : 'Machinery'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-corporate-red text-lg font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Torno Paralelo Industrial' : 'Industrial Parallel Lathe'}</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Mecanizados menores y recuperación dimensional de componentes.'
                  : 'Minor machining and dimensional recovery of components.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-corporate-red text-lg font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Lapeadora Automática 20"' : '20" Automatic Lapping Machine'}</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Rectificado y lapeo de asientos, sellos y superficies de cierre.'
                  : 'Grinding and lapping of seats, seals and sealing surfaces.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-corporate-red/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-corporate-red text-lg font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Banco VENTIL (Holanda)' : 'VENTIL Bench (Holland)'}</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Ensayos hidráulicos hasta 650 kg/cm² con registro digital.'
                  : 'Hydraulic testing up to 650 kg/cm² with digital recording.'}
              </p>
            </div>

          </div>

          {/* Ver más equipamiento - Botón */}
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowEquipmentModal(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-corporate-red transition-colors"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span>{language === 'es' ? 'Ver infraestructura completa' : 'View complete infrastructure'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Proceso de Recuperación - Metodología Certificada */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Metodología Certificada' : 'Certified Methodology'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Proceso' : 'Recovery'}</span> {language === 'es' ? 'de Recuperación' : 'Process'}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Procedimiento controlado y documentado en todas sus etapas.'
                : 'Controlled and documented procedure in all stages.'}
            </p>
          </div>

          {/* 4 Macro etapas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
            {(language === 'es' ? [
              { num: '01', title: 'Diagnóstico', desc: 'Inspección dimensional completa y evaluación de estado' },
              { num: '02', title: 'Intervención', desc: 'Mecanizado, soldadura certificada y reconstrucción' },
              { num: '03', title: 'Ensayo', desc: 'Pruebas hidráulicas, neumáticas y funcionales' },
              { num: '04', title: 'Certificación', desc: 'Documentación técnica e informe final' }
            ] : [
              { num: '01', title: 'Diagnosis', desc: 'Complete dimensional inspection and condition assessment' },
              { num: '02', title: 'Intervention', desc: 'Machining, certified welding and reconstruction' },
              { num: '03', title: 'Testing', desc: 'Hydraulic, pneumatic and functional tests' },
              { num: '04', title: 'Certification', desc: 'Technical documentation and final report' }
            ]).map((step, index) => (
              <div key={index} className="group bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-corporate-red/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-corporate-red text-2xl font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.num}</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Ver proceso detallado - Botón */}
          <div className="text-center">
            <button 
              onClick={() => setShowProcessModal(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-corporate-red transition-colors"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span>{language === 'es' ? 'Ver las 8 etapas detalladas' : 'View all 8 detailed stages'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Ensayos en Planta - EVIDENCIA TÉCNICA (Video) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Video - Columna izquierda */}
            <div className="order-2 lg:order-1">
              <div 
                ref={videoContainerRef}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-900 to-black group cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => isPlaying && setShowControls(false)}
              >
                {/* Aspect ratio container */}
                <div className="aspect-video relative">
                  <video
                    ref={videoRef}
                    src="/calibracion%20de%20valvulas%20de%20seguridad%20y%20alivio.mp4"
                    title={language === 'es' ? 'Calibración de válvulas de seguridad y alivio - SERVIN Ingeniería' : 'Safety and relief valve calibration - SERVIN Engineering'}
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleVideoEnd}
                    onClick={togglePlay}
                  ></video>
                  
                  {/* Play/Pause overlay button */}
                  {!isPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
                      onClick={togglePlay}
                    >
                      <div 
                        className="bg-corporate-red flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300"
                        style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                      >
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Custom controls */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    
                    {/* Progress bar */}
                    <div 
                      className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 group/progress"
                      onClick={handleProgressClick}
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-corporate-red to-red-500 rounded-full relative transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    
                    {/* Controls row */}
                    <div className="flex items-center justify-between gap-3">
                      
                      {/* Left controls */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        {/* Play/Pause */}
                        <button 
                          onClick={togglePlay}
                          className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        >
                          {isPlaying ? (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          )}
                        </button>
                        
                        {/* Mute */}
                        <button 
                          onClick={toggleMute}
                          className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        >
                          {isMuted ? (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                          )}
                        </button>
                        
                        {/* Time */}
                        <div className="text-white/80 text-xs sm:text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          <span className="text-white">{formatTime(currentTime)}</span>
                          <span className="mx-1">/</span>
                          <span>{formatTime(duration)}</span>
                        </div>
                      </div>
                      
                      {/* Right controls */}
                      <div className="flex items-center gap-2">
                        {/* SERVIN badge */}
                        <div className="hidden sm:flex items-center gap-1.5 bg-corporate-red/20 border border-corporate-red/30 rounded-full px-2.5 py-1">
                          <div className="w-1.5 h-1.5 bg-corporate-red rounded-full"></div>
                          <span className="text-white text-[10px] font-semibold tracking-wide">SERVIN</span>
                        </div>
                        
                        {/* Fullscreen */}
                        <button 
                          onClick={toggleFullscreen}
                          className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        >
                          {isFullscreen ? (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Video caption */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-corporate-red rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Ensayo real en banco VENTIL — Bahía Blanca' : 'Real test on VENTIL bench — Bahía Blanca'}
                </span>
              </div>
            </div>

            {/* Texto técnico - Columna derecha */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                <span className="text-gray-700 text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Ensayos en Planta' : 'In-Plant Testing'}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <span className="font-semibold text-corporate-red">{language === 'es' ? 'Ensayos funcionales' : 'Functional testing'}</span> {language === 'es' ? 'en banco certificado' : 'on certified bench'}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' 
                  ? 'Evaluación funcional de válvulas de control y seguridad en condiciones controladas, con instrumentación digital y registro documental.'
                  : 'Functional evaluation of control and safety valves under controlled conditions, with digital instrumentation and documentary recording.'}
              </p>
              
              <ul className="space-y-3">
                {(language === 'es' ? [
                  'Presión hidráulica hasta 650 kg/cm²',
                  'Presión neumática hasta 200 kg/cm²',
                  'Registro digital e informe técnico'
                ] : [
                  'Hydraulic pressure up to 650 kg/cm²',
                  'Pneumatic pressure up to 200 kg/cm²',
                  'Digital recording and technical report'
                ]).map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-700" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <div className="w-5 h-5 rounded-full bg-corporate-red/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Especializados */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-corporate-red rounded-full mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Servicios' : 'Services'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <span className="font-semibold text-corporate-red">{language === 'es' ? 'Servicios' : 'Specialized'}</span> {language === 'es' ? 'Especializados' : 'Services'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Válvulas de Seguridad */}
            <div className="group h-full">
              <div className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://amarineblog.com/wp-content/uploads/2019/12/valve-field-test-2.png?w=720" 
                    alt={language === 'es' ? 'Válvulas de Seguridad' : 'Safety Valves'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 flex gap-1">
                    <span className="px-2 py-0.5 bg-white/90 text-gray-700 text-[10px] font-medium rounded">API</span>
                    <span className="px-2 py-0.5 bg-white/90 text-gray-700 text-[10px] font-medium rounded">ASME</span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Válvulas de Seguridad y Alivio' : 'Safety and Relief Valves'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Calibración, reparación y certificación según normativa API/ASME.'
                      : 'Calibration, repair and certification per API/ASME standards.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Válvulas de Control */}
            <div className="group h-full">
              <div className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=500" 
                    alt={language === 'es' ? 'Válvulas de Control' : 'Control Valves'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Válvulas de Control' : 'Control Valves'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Mantenimiento de válvulas de control y actuadores asociados.'
                      : 'Maintenance of control valves and associated actuators.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Válvulas de Proceso */}
            <div className="group h-full">
              <div className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=500" 
                    alt={language === 'es' ? 'Válvulas de Proceso' : 'Process Valves'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-white/90 text-gray-700 text-[10px] font-medium rounded">API 6D</span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Válvulas de Proceso' : 'Process Valves'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Compuerta, globo, bola y mariposa para servicio industrial.'
                      : 'Gate, globe, ball and butterfly for industrial service.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Actuadores */}
            <div className="group h-full">
              <div className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-corporate-red/20 transform hover:-translate-y-1 flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex-shrink-0">
                  <img 
                    src="https://img.directindustry.es/images_di/photo-g/61466-18012197.jpg" 
                    alt={language === 'es' ? 'Actuadores' : 'Actuators'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-corporate-red transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Actuadores y Accesorios' : 'Actuators and Accessories'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' 
                      ? 'Neumáticos, hidráulicos y accesorios de control.'
                      : 'Pneumatic, hydraulic and control accessories.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documentación Técnica */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              <div>
                <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-4">
                  <div className="w-1.5 h-1.5 bg-corporate-red rounded-full mr-2"></div>
                  <span className="text-white/80 text-xs font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {language === 'es' ? 'Documentación' : 'Documentation'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Documentación Técnica y Certificaciones' : 'Technical Documentation and Certifications'}
                </h3>
                <p className="text-sm text-white/70 mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' 
                    ? 'Cada trabajo incluye trazabilidad documental completa.'
                    : 'Each job includes complete documentary traceability.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {(language === 'es' ? [
                  'Informe dimensional',
                  'Registro fotográfico completo',
                  'Certificados de prueba',
                  'Trazabilidad de materiales',
                  'Informe técnico final',
                  'Certificación según norma'
                ] : [
                  'Dimensional report',
                  'Complete photo record',
                  'Test certificates',
                  'Material traceability',
                  'Final technical report',
                  'Standards certification'
                ]).map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-white/80" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <svg className="w-4 h-4 text-corporate-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4B0000 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Evaluación Técnica' : 'Technical Evaluation'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? <>¿Necesita evaluar válvulas industriales críticas <span className="block font-bold mt-2">en planta certificada?</span></>
                : <>Need to evaluate critical industrial valves <span className="block font-bold mt-2">in a certified plant?</span></>}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {language === 'es' 
                ? 'Solicite una evaluación técnica sin compromiso.'
                : 'Request a no-obligation technical evaluation.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
              <Link 
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8B0000' }}
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'es' ? 'Solicitar Evaluación Técnica' : 'Request Technical Evaluation'}
              </Link>
              
              <Link 
                to="/services"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {language === 'es' ? 'Ver Todos los Servicios' : 'View All Services'}
              </Link>
            </div>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>700+ m²</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Taller especializado' : 'Specialized workshop'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>VENTIL</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Banco certificado' : 'Certified bench'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Trazabilidad' : 'Traceability'}</div>
                <div className="text-white/70 text-[10px] sm:text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{language === 'es' ? 'Documental completa' : 'Complete documentation'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal: Infraestructura Industrial Completa */}
      {showEquipmentModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowEquipmentModal(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Modal content */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-corporate-red/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Infraestructura Industrial Completa' : 'Complete Industrial Infrastructure'}
                </h3>
              </div>
              <button 
                onClick={() => setShowEquipmentModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(language === 'es' ? [
                  { icon: '⚙️', title: 'Torno paralelo industrial' },
                  { icon: '🔧', title: 'Lapeadora automática 20"' },
                  { icon: '💧', title: 'Banco VENTIL (Holanda) certificado' },
                  { icon: '💨', title: 'Banco de ensayos neumáticos' },
                  { icon: '📊', title: 'Registro instrumental digital' },
                  { icon: '📐', title: 'Platos de lapeo manual' },
                  { icon: '🧪', title: 'Booster de agua hasta 650 kg/cm²' },
                  { icon: '🔩', title: 'Compresor de alta presión' },
                  { icon: '✨', title: 'Cabina de granallado' }
                ] : [
                  { icon: '⚙️', title: 'Industrial parallel lathe' },
                  { icon: '🔧', title: '20" automatic lapping machine' },
                  { icon: '💧', title: 'Certified VENTIL bench (Holland)' },
                  { icon: '💨', title: 'Pneumatic test bench' },
                  { icon: '📊', title: 'Digital instrumental recording' },
                  { icon: '📐', title: 'Manual lapping plates' },
                  { icon: '🧪', title: 'Water booster up to 650 kg/cm²' },
                  { icon: '🔩', title: 'High pressure compressor' },
                  { icon: '✨', title: 'Shot blasting booth' }
                ]).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 rounded-b-2xl">
              <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Presione ESC o haga clic fuera para cerrar' : 'Press ESC or click outside to close'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Proceso Completo 8 Etapas */}
      {showProcessModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowProcessModal(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Modal content */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-corporate-red/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {language === 'es' ? 'Proceso Completo — 8 Etapas' : 'Complete Process — 8 Stages'}
                </h3>
              </div>
              <button 
                onClick={() => setShowProcessModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(language === 'es' ? [
                  { num: '01', title: 'Diagnóstico e inspección dimensional completa', desc: 'Evaluación inicial del estado de la válvula' },
                  { num: '02', title: 'Limpieza por granallado o ultrasonido', desc: 'Preparación de superficies para inspección' },
                  { num: '03', title: 'Mecanizado de asientos y superficies críticas', desc: 'Rectificado de precisión CNC' },
                  { num: '04', title: 'Reconstrucción mediante soldadura certificada', desc: 'Procedimientos calificados WPS/PQR' },
                  { num: '05', title: 'Armado con torques especificados', desc: 'Secuencia controlada según fabricante' },
                  { num: '06', title: 'Pruebas hidráulicas, neumáticas o de calibración', desc: 'Ensayos según API 598 / API 6D' },
                  { num: '07', title: 'Registro fotográfico documental', desc: 'Trazabilidad visual completa' },
                  { num: '08', title: 'Informe técnico y certificación final', desc: 'Documentación para auditoría' }
                ] : [
                  { num: '01', title: 'Diagnosis and complete dimensional inspection', desc: 'Initial valve condition assessment' },
                  { num: '02', title: 'Shot blasting or ultrasonic cleaning', desc: 'Surface preparation for inspection' },
                  { num: '03', title: 'Machining of seats and critical surfaces', desc: 'CNC precision grinding' },
                  { num: '04', title: 'Reconstruction through certified welding', desc: 'Qualified WPS/PQR procedures' },
                  { num: '05', title: 'Assembly with specified torques', desc: 'Controlled sequence per manufacturer' },
                  { num: '06', title: 'Hydraulic, pneumatic or calibration tests', desc: 'Testing per API 598 / API 6D' },
                  { num: '07', title: 'Documentary photographic record', desc: 'Complete visual traceability' },
                  { num: '08', title: 'Technical report and final certification', desc: 'Audit-ready documentation' }
                ]).map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-corporate-red/20 transition-colors">
                    <div className="w-10 h-10 bg-corporate-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-corporate-red text-sm font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.num}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.title}</h4>
                      <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 rounded-b-2xl">
              <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {language === 'es' ? 'Presione ESC o haga clic fuera para cerrar' : 'Press ESC or click outside to close'}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PlantaMantenimiento;
