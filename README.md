# Servin Ingeniería S.A. - Sitio Web Corporativo

## 📋 Descripción del Proyecto

Sitio web corporativo profesional para **Servin Ingeniería S.A.**, empresa argentina líder en servicios especializados para la industria con casi 5 décadas de experiencia (fundada en 1979).

**Características principales:**
- 🎨 Diseño corporativo moderno con identidad visual profesional
- 🌐 Soporte multiidioma completo (Español/Inglés)
- 📱 Diseño responsive optimizado para todos los dispositivos
- 🚀 Arquitectura moderna con React + Vite
- 📧 Sistema de contacto serverless con backend propio
- ⚡ Rendimiento optimizado y SEO-friendly
- 🔐 Formularios seguros con validación completa

## 🏢 Sobre la Empresa

**Servin Ingeniería S.A.** es una empresa especializada en servicios industriales con:
- **44+ años de trayectoria** (desde 1979)
- **4 divisiones de servicios** especializados
- **2,639 m²** de instalaciones propias
- **+400 clientes** en cartera
- Presencia en **3 ubicaciones**: Bahía Blanca (Casa Matriz), Neuquén y Buenos Aires

### Mensaje del Presidente
> "Servín Ingeniería ha experimentado un crecimiento notable en sus casi 5 décadas de historia. Nuestro crecimiento en facturación se ha multiplicado por 30 en los últimos 20 años..."
> 
> **Ing. Norberto Dagnino** - Presidente Servin Ingeniería S.A.

## 🎯 Divisiones de Servicios

### 1. Ingeniería de Materiales
- Comercialización de válvulas, tuberías y accesorios
- Representaciones internacionales (Velan Valves, Rexnord Couplings, FluoroSeal)
- Representaciones nacionales (Valmec, Valbol, LVM, Giron, Valam)
- Amplio catálogo de productos industriales
- Política basada en estándares API & ISO

### 2. Inspección de Tanques API y Equipos Estáticos
- Inspección de tanques según normas API
- Más de 1,000 tanques inspeccionados desde 1997
- Pruebas especializadas: flujo magnético, ultrasonido, líquidos penetrantes, partículas magnetizables, prueba de vacío
- Personal altamente capacitado

### 3. Planta de Mantenimiento Industrial
- Recuperación y calibración de válvulas
- Superficie operativa actual: 300 m² (en expansión a 900 m²)
- Equipamiento de vanguardia: tornos, lapidadoras, soldadoras TIG/MIG, cabinas de pintura
- Relación costo-beneficio altamente competitiva

### 4. Mantenimientos In Situ
- Servicio de mantenimiento en las instalaciones del cliente
- Equipos portátiles especializados
- Minimización de tiempos de inactividad
- Atención inmediata y personalizada

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico

**Frontend:**
- **React 18** - Biblioteca de interfaz de usuario moderna
- **Vite 6** - Build tool ultra-rápido
- **TailwindCSS 3** - Framework CSS utility-first
- **React Router Dom** - Navegación SPA profesional
- **Supabase Client** - Base de datos en tiempo real para noticias

**Backend:**
- **Node.js** - Runtime JavaScript del lado del servidor
- **Vercel Serverless Functions** - Backend escalable sin servidores
- **Nodemailer** - Sistema de envío de emails profesional
- **Formidable** - Procesamiento de archivos adjuntos (hasta 25MB)
- **Gmail SMTP** - Servicio de correo corporativo

**Infraestructura:**
- **Vercel** - Hosting del backend serverless
- **GitHub** - Control de versiones y CI/CD
- **Supabase** - Base de datos PostgreSQL para gestión de noticias

### Arquitectura de Componentes

```
src/
├── components/           # Componentes reutilizables
│   ├── ContactForm.jsx  # ⭐ Formulario de contacto profesional
│   ├── layout/          # Componentes de layout
│   │   ├── Header.jsx   # Navegación con cambio de idioma
│   │   ├── Footer.jsx   # Footer corporativo
│   │   └── Layout.jsx   # Layout principal
│   └── ...
├── pages/               # Páginas principales
│   ├── Home.jsx         # Página de inicio
│   ├── About.jsx        # Nosotros
│   ├── Contact.jsx      # ⭐ Página de contacto
│   ├── Novedades.jsx    # Noticias
│   └── services/        # Páginas de servicios
├── context/             # Contextos globales
│   ├── LanguageContext.jsx  # ⭐ Gestión de idiomas (ES/EN)
│   └── NewsContext.jsx      # Gestión de noticias
├── services/            # Servicios externos
│   └── newsService.js   # Conexión con Supabase
└── data/                # Datos estáticos
```

## ✨ Características Destacadas

### 1. Sistema de Contacto Serverless Profesional

**Arquitectura separada:** Backend independiente desplegado en Vercel
- ✅ **Envío de emails corporativos** con diseño HTML profesional
- ✅ **Adjuntar archivos** hasta 25MB (PDF, Word, Excel, imágenes)
- ✅ **Validación completa** frontend y backend
- ✅ **Manejo de errores robusto** con logs detallados
- ✅ **CORS configurado** para seguridad
- ✅ **Rate limiting** para prevenir spam

**Email Template Profesional:**
- 🎨 Header corporativo rojo (#E00000) con logo
- 📋 Diseño limpio y estructurado
- 🏢 Footer con información de la empresa
- 📱 Responsive en todos los clientes de email
- ✉️ Subject line: "Nueva consulta desde la web – Servin Ingeniería"

### 2. Soporte Multiidioma Completo

**Español / English**
- 🌐 Cambio de idioma en tiempo real
- 🔄 Persistencia del idioma seleccionado
- 📝 Traducciones completas de toda la interfaz
- 🎯 URLs amigables en ambos idiomas
- ⚡ Sin recargas de página (SPA)

### 3. Gestión de Noticias con Supabase

- 📰 Sistema de noticias dinámico
- 🖼️ Soporte de imágenes destacadas
- 📍 Filtros por ubicación
- 🏠 Destacar noticias en home
- ✏️ Panel de administración

### 4. Diseño Corporativo Profesional

**Identidad Visual:**
- 🔴 Rojo corporativo: `#E00000`
- ⚫ Grafito: `#2e2c3a`
- ⚪ Blanco: `#fefefe`
- 📏 Diseño modular y limpio
- 🎭 Animaciones sutiles y profesionales

**Responsive Design:**
- 📱 Mobile First approach
- 💻 Optimizado para tablets
- 🖥️ Desktop de alta resolución
- ⚡ Carga rápida en todos los dispositivos
## 🚀 Instalación y Desarrollo

### Prerrequisitos
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/franarmani/serviningenieria2026.git
cd serviningenieria2026
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crear archivo `.env.local` con:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run preview      # Preview de build de producción
npm run lint         # Verificar código
```

## 📦 Compilación para Producción

```bash
npm run build
```

**Resultado:**
- Carpeta `dist/` con archivos optimizados
- Assets con hash único para cache-busting
- CSS y JS minificados
- Imágenes optimizadas

**Archivos generados:**
- `dist/index.html` (~1.4 kB)
- `dist/assets/index-[hash].css` (~113 kB)
- `dist/assets/index-[hash].js` (~1.8 MB)

## 🌐 Despliegue

### Backend Serverless (Ya desplegado)

El backend del formulario de contacto está desplegado en:
- **URL**: `https://servin-mail-api.vercel.app`
- **Plataforma**: Vercel Serverless Functions
- **Repositorio separado**: Arquitectura desacoplada

**Características del backend:**
- ✅ Envío de emails corporativos
- ✅ Procesamiento de archivos adjuntos (hasta 25MB)
- ✅ CORS configurado
- ✅ Validación de datos
- ✅ Logs detallados
- ✅ Manejo de errores robusto

### Frontend

**Opción 1: Netlify (Recomendado)**
```bash
# Conectar repositorio GitHub con Netlify
# Deploy automático en cada push
```

**Opción 2: Vercel**
```bash
vercel --prod
```

**Opción 3: cPanel / FTP Tradicional**
```bash
# Subir contenido de carpeta dist/
# Configurar .htaccess para SPA routing
```

## 🔐 Seguridad

**Implementaciones de seguridad:**
- ✅ Variables de entorno para datos sensibles
- ✅ CORS configurado correctamente
- ✅ Validación de formularios frontend y backend
- ✅ Sanitización de inputs
- ✅ Rate limiting en backend
- ✅ HTTPS en producción

## 📊 Rendimiento

**Optimizaciones:**
- ⚡ Vite para build ultra-rápido
- 🗜️ Code splitting automático
- 🖼️ Lazy loading de imágenes
- 📦 Assets con hash para cache
- 🚀 Preload de recursos críticos
- 🎯 Tree shaking automático

**Métricas objetivo:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90

## 🌍 Soporte de Idiomas

**Idiomas soportados:**
- 🇦🇷 **Español** (por defecto)
- 🇺🇸 **English**

**Funcionalidades:**
- Cambio de idioma en tiempo real
- Persistencia de preferencia
- URLs amigables
- Traducciones completas de UI

## 📧 Sistema de Contacto

### Formulario de Contacto

**Campos:**
- Nombre y Apellido (requerido)
- Empresa / Representa a (requerido)
- Email (requerido)
- Asunto (requerido)
- Mensaje (requerido)
- Archivo adjunto (opcional, hasta 25MB)

**Tipos de archivo permitidos:**
- PDF, Word (.doc, .docx)
- Excel (.xls, .xlsx)
- Imágenes (.jpg, .jpeg, .png, .gif)

**Email generado:**
- ✉️ Diseño HTML profesional
- 🎨 Header corporativo con branding
- 📋 Información estructurada
- 📎 Archivos adjuntos incluidos
- 🔗 Reply-to automático al remitente

## 📱 Páginas del Sitio

### Páginas Principales
- `/` - Home
- `/nosotros` - Sobre la empresa
- `/servicios` - División de servicios
- `/contacto` - Formulario de contacto
- `/novedades` - Noticias y actualizaciones

### Páginas de Servicios
- `/materiales` - Ingeniería de Materiales
- `/valvulas` - Catálogo de válvulas industriales
- `/acoplamientos` - Acoplamientos Rexnord
- `/inspeccion` - Inspección de tanques API
- `/planta-mantenimiento` - Planta de mantenimiento
- `/mantenimiento-insitu` - Mantenimientos in situ
- `/laboratorio-movil` - Laboratorio móvil PrevenTest
## 📍 Información de Contacto

### Casa Matriz - Bahía Blanca
- **Dirección**: Av. Colón 2110/16, B8000FUY Bahía Blanca, Buenos Aires, Argentina
- **Teléfonos**: +54 0291 452-8687 / 454-7318 / 456-2608
- **Fax**: +54 0291 455-3727

### Sucursal Neuquén
- **Dirección**: Félix San Martín 128, Q8300LKD Neuquén, Argentina
- **Teléfono**: +54 0299 448-8499
- **Fax**: +54 0291 442-3805

### Oficina Buenos Aires
- **Dirección**: Avda. Rivadavia 1611 – 5° "D", C1033AAG Buenos Aires, Argentina

## 🏆 Certificaciones y Estándares

- ✅ **IRAM ISO 9001:2015** - Sistema de Gestión de Calidad
- ✅ **IQNet ISO 9001:2015** - Reconocimiento Internacional
- ✅ Cumplimiento de normas API para inspección de tanques
- ✅ Estándares internacionales de calidad

## 🎯 Divisiones de Servicios

### 1. 🔧 Ingeniería de Materiales
Comercialización de válvulas, tuberías y accesorios industriales con representaciones internacionales y nacionales de primer nivel.

### 2. 🔍 Inspección de Tanques API
Más de 1,000 tanques inspeccionados desde 1997 con tecnología de punta y personal altamente capacitado.

### 3. 🏭 Planta de Mantenimiento Industrial
Recuperación y calibración de válvulas con equipamiento de vanguardia en instalaciones de 300 m² (expandiéndose a 900 m²).

### 4. 🚚 Mantenimientos In Situ
Servicios de mantenimiento en las instalaciones del cliente con equipos portátiles especializados.

## 📊 Empresa en Números

- 📅 **44+ años** de trayectoria (desde 1979)
- 🏢 **2,639 m²** de instalaciones propias
- 👥 **400+ clientes** en cartera
- 📍 **3 ubicaciones** en Argentina
- 🔧 **1,000+ tanques** inspeccionados
- 📈 **30x crecimiento** en facturación (últimos 20 años)

## 💼 Tecnologías del Proyecto

### Lenguajes y Frameworks
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.4.1-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js)

### Herramientas y Servicios
![Vercel](https://img.shields.io/badge/Vercel-Production-000000?logo=vercel)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?logo=supabase)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)

## 📈 Estado del Proyecto

```
✅ Desarrollo completado
✅ Sistema de contacto integrado
✅ Soporte multiidioma implementado
✅ Backend serverless desplegado
✅ Compilado para producción
🚀 Listo para despliegue
```

## 👨‍💻 Desarrollo

**Desarrollado por**: Franco Armani  
**Cliente**: Servin Ingeniería S.A.  
**Año**: 2025-2026  
**Versión**: 2.0 Professional

## 📄 Documentación Adicional

Para más información sobre aspectos específicos del proyecto:
- `README_DEPLOYMENT.md` - Guía completa de despliegue
- `README_CLIENTE.md` - Información para el cliente
- `.github/copilot-instructions.md` - Guías de desarrollo

## 🤝 Soporte

Para consultas técnicas o soporte:
- **Sitio web**: [www.serviningenieria.com.ar](http://www.serviningenieria.com.ar)
- **LinkedIn**: [Servin Ingeniería S.A.](https://www.linkedin.com/company/servin-ingenieria-s-a/)

---

<div align="center">

**Servin Ingeniería S.A.**  
*Una empresa de servicios al servicio de las empresas*

🔴 Calidad • 🔧 Experiencia • 🏆 Confianza

</div>
- [ ] Migrar a framework moderno (React/Vue)
- [ ] Implementar PWA
- [ ] Optimización avanzada de imágenes (WebP, lazy loading mejorado)
- [ ] Implementar Service Workers
- [ ] Analytics avanzado
- [ ] A/B Testing
- [ ] Accesibilidad WCAG 2.1 AA completa

## 📚 Recursos Adicionales

### Documentación Técnica
- [API 600 - Steel Gate Valves](https://www.api.org/)
- [ISO 9001:2015](https://www.iso.org/iso-9001-quality-management.html)
- [IRAM](https://www.iram.org.ar/)

### Herramientas Recomendadas
- **IDE**: Visual Studio Code
- **Control de Versiones**: Git + GitHub
- **Testing**: BrowserStack para cross-browser
- **Performance**: Google Lighthouse
- **SEO**: Google Search Console, SEMrush

---

**Última actualización**: Noviembre 2024  
**Repositorio**: [ServinIngenieria-PREVIEW](https://github.com/franarmani/ServinIngenieria-PREVIEW)  
**Estado**: ✅ Producción / Preview
