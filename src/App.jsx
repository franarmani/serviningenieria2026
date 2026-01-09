import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

// Divisiones Principales SERVIN - Estructura Industrial Definitiva
import PlantaMantenimiento from './pages/services/PlantaMantenimiento'
import MantenimientosInSitu from './pages/services/MantenimientosInSitu'
import LaboratorioMovil from './pages/services/LaboratorioMovil'
import InspeccionTanquesAPI from './pages/services/InspeccionTanquesAPI'
import TankTreatment from './pages/services/TankTreatment'
import CabinasGranallado from './pages/services/CabinasGranallado'
import PrefabricadosCanerias from './pages/services/PrefabricadosCanerias'

// Ingeniería de Materiales
import Materiales from './pages/services/MaterialesLanding'
import AcoplamientosRexnord from './pages/services/AcoplamientosRexnord'
import AcoplamientoDetail from './pages/services/AcoplamientoDetail'
import FalkCTSeries from './pages/services/FalkCTSeries'
import ComponentesIndustriales from './pages/services/ComponentesIndustriales'

// Páginas de Materiales - Subcategorías
import ValvulasIndustriales from './pages/materials/ValvulasIndustriales'
import ValvulaDetail from './pages/materials/ValvulaDetail'
import BridasConexiones from './pages/materials/BridasConexiones'
import CaneriasTubos from './pages/materials/CaneriasTubos'
import AccesoriosIndustriales from './pages/materials/AccesoriosIndustriales'
import JuntasSellos from './pages/materials/JuntasSellos'
import EsparragosBuloneria from './pages/materials/EsparragosBuloneria'

// Otras páginas
import Clientes from './pages/Clientes'
import Novedades from './pages/Novedades'
import NoticiaDetail from './pages/NoticiaDetail'
import Contact from './pages/Contact'
import NewsDetail from './pages/NewsDetail'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/novedades/:id" element={<NewsDetail />} />
        <Route path="/noticia/:id" element={<NoticiaDetail />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* ======================================== */}
        {/* DIVISIONES PRINCIPALES SERVIN           */}
        {/* ======================================== */}
        
        {/* 1. Ingeniería de Materiales */}
        <Route path="/services/ingenieria-materiales" element={<Materiales />} />
        
        {/* 2. Planta de Mantenimiento Industrial */}
        <Route path="/services/planta" element={<PlantaMantenimiento />} />
        
        {/* 3. Mantenimientos In Situ - Laboratorio Móvil */}
        <Route path="/services/laboratorio-movil" element={<LaboratorioMovil />} />
        
        {/* 4. Mantenimientos In Situ - PREVENTEST */}
        <Route path="/services/in-situ" element={<MantenimientosInSitu />} />
        
        {/* 5. Inspección de Tanques API & END */}
        <Route path="/services/inspecciones" element={<InspeccionTanquesAPI />} />
        
        {/* 6. Revestimiento Industrial (Próximamente 2026) */}
        <Route path="/services/revestimiento" element={<TankTreatment />} />
        
        {/* 7. Cabinas de Granallado (Próximamente 2026) */}
        <Route path="/services/cabinas-granallado" element={<CabinasGranallado />} />
        
        {/* 8. Prefabricados de Cañerías y Estructuras (Próximamente 2026) */}
        <Route path="/services/prefabricados" element={<PrefabricadosCanerias />} />
        
        {/* ======================================== */}
        {/* INGENIERÍA DE MATERIALES - SUBCATEGORÍAS */}
        {/* ======================================== */}
        <Route path="/materiales/acoplamientos" element={<AcoplamientosRexnord />} />
        <Route path="/services/acoplamiento/:id" element={<AcoplamientoDetail />} />
        <Route path="/services/falk-ct-series" element={<FalkCTSeries />} />
        <Route path="/materiales/accesorios-caneria" element={<ComponentesIndustriales />} />
        <Route path="/materiales/valvulas" element={<ValvulasIndustriales />} />
        <Route path="/materiales/valvulas/:id" element={<ValvulaDetail />} />
        <Route path="/materiales/bridas" element={<BridasConexiones />} />
        <Route path="/materiales/canerias" element={<CaneriasTubos />} />
        <Route path="/materiales/accesorios" element={<AccesoriosIndustriales />} />
        <Route path="/materiales/juntas" element={<JuntasSellos />} />
        <Route path="/materiales/esparragos" element={<EsparragosBuloneria />} />

        {/* ======================================== */}
        {/* REDIRECTS DE COMPATIBILIDAD             */}
        {/* ======================================== */}
        <Route path="/services/planta-mantenimiento" element={<Navigate to="/services/planta" replace />} />
        <Route path="/services/mantenimientos-in-situ" element={<Navigate to="/services/in-situ" replace />} />
        <Route path="/services/inspeccion-tanques-api" element={<Navigate to="/services/inspecciones" replace />} />
        <Route path="/services/revestimiento-industrial" element={<Navigate to="/services/revestimiento" replace />} />
        <Route path="/services/tratamiento-tanques" element={<Navigate to="/services/revestimiento" replace />} />
        <Route path="/services/tratamiento-de-tanques" element={<Navigate to="/services/revestimiento" replace />} />
        <Route path="/services/tank-treatment" element={<Navigate to="/services/revestimiento" replace />} />
        <Route path="/services/mobile-lab" element={<Navigate to="/services/laboratorio-movil" replace />} />
        <Route path="/services/calibration-in-situ" element={<Navigate to="/services/in-situ" replace />} />
        <Route path="/services/inspections-api" element={<Navigate to="/services/inspecciones" replace />} />
        <Route path="/services/maintenance" element={<Navigate to="/services/planta" replace />} />
        <Route path="/services/civil" element={<Navigate to="/services/planta" replace />} />
        <Route path="/services/industrial" element={<Navigate to="/services/inspecciones" replace />} />
        <Route path="/services/taller-mantenimiento" element={<Navigate to="/services/planta" replace />} />
        <Route path="/services/ingenieria-materiales/acoplamientos" element={<Navigate to="/materiales/acoplamientos" replace />} />
        <Route path="/services/ingenieria-materiales/componentes" element={<Navigate to="/materiales/accesorios-caneria" replace />} />
        <Route path="/equipamiento" element={<Navigate to="/services/planta" replace />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

// Simple 404 Component
const NotFound = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-8xl font-bold text-corporate-red mb-6">404</div>
          <h1 className="heading-2 mb-6">Página No Encontrada</h1>
          <p className="text-corporate mb-8">
            Lo sentimos, la página que está buscando no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary">
              Volver al Inicio
            </a>
            <a href="/services" className="btn-secondary">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
