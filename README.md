# Servin Ingeniería S.A. - Sitio Web Corporativo

## 📋 Descripción del Proyecto

Sitio web corporativo para **Servin Ingeniería S.A.**, una empresa argentina líder en servicios especializados para la industria con casi 5 décadas de experiencia (fundada en 1979). El proyecto es un sitio web multi-página que presenta las 4 divisiones principales de servicios de la empresa.

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

## 🏗️ Estructura del Proyecto

```
ServinIngenieria-PREVIEW/
│
├── index.html                          # Página principal
├── README.md                           # Este archivo
│
├── certificaciones/                    # Sección de certificaciones
│   ├── certificaciones.html
│   ├── css/
│   │   └── main-certificaciones.css
│   ├── images/
│   ├── js/
│   │   └── pdfdwnld.js
│   └── PDFS/
│
├── css/                                # Estilos globales
│   ├── base.css                        # Estilos base
│   ├── fonts.css                       # Tipografías
│   ├── main.css                        # Estilos principales
│   ├── servicios.css                   # Estilos de servicios
│   ├── vendor.css                      # Librerías de terceros
│   └── micons/                         # Iconos personalizados
│
├── fonts/                              # Fuentes tipográficas
│   ├── lora/
│   └── montserrat/
│
├── images/                             # Recursos gráficos
│   ├── divisiones/
│   ├── galeria/
│   └── photoswipe/
│
├── ingenieriademateriales/             # División 1
│   ├── ingenieriademateriales.html
│   ├── css/
│   ├── fonts/
│   ├── images/
│   │   ├── catalogo/                   # Catálogo de productos
│   │   │   ├── Acoplamientos/
│   │   │   ├── Aeroenfriadores/
│   │   │   ├── Esclusas/
│   │   │   ├── Esféricas-Mariposas/
│   │   │   ├── Industriales/
│   │   │   ├── Piping/
│   │   │   ├── Revestidas/
│   │   │   ├── Seguridad-Automatización/
│   │   │   ├── servicios-especiales/
│   │   │   └── Tapon/
│   │   └── logos/
│   └── js/
│       ├── acordeon.js
│       ├── filtrobusqueda.js
│       ├── floatingimage.js
│       ├── formcontact.js
│       ├── formrapido.js
│       └── galeria.js
│
├── inspecciones/                       # División 2
│   ├── inspecciones.html
│   ├── css/
│   │   ├── animacion.css
│   │   └── inspecciones.css
│   ├── images/
│   └── js/
│       └── animacion.js
│
├── mantenimiento/                      # División 3
│   ├── mantenimiento.html
│   ├── css/
│   │   └── mantenimiento.css
│   └── images/
│
├── insitu/                             # División 4
│   ├── insitu.html
│   ├── css/
│   │   └── insitu.css
│   └── images/
│
├── subir cv/                           # Portal de RRHH
│   ├── curriculum.html
│   ├── enviado.html
│   ├── css/
│   │   └── curriculum.css
│   └── images/
│
├── js/                                 # Scripts globales
│   ├── formcontact.js                  # Formulario de contacto
│   ├── formrapido.js                   # Formulario rápido
│   ├── galeria.js                      # Galería de imágenes
│   ├── jquery-3.2.1.min.js            # jQuery
│   ├── main.js                         # Script principal
│   ├── modernizr.js                    # Detección de características
│   ├── pace.min.js                     # Carga de página
│   └── plugins.js                      # Plugins adicionales
│
└── lightbox2/                          # Librería para galería
    ├── bower.json
    ├── DEPLOY.md
    ├── Gruntfile.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── ROADMAP.md
```

## 🎨 Características del Diseño

### Página Principal (index.html)
- **Hero Section** con carrusel de imágenes de fondo (transiciones suaves cada 8 segundos)
- **Sección Nosotros** con estadísticas dinámicas (años de experiencia calculados automáticamente)
- **Divisiones de Servicios** con tarjetas interactivas
- **Galería de proyectos** con integración PhotoSwipe
- **Formulario de contacto** con integración Formspree
- **Footer** con formulario de contacto rápido y redes sociales
- Navegación smooth scroll entre secciones
- Diseño responsive para todos los dispositivos

### Secciones Especializadas

#### 1. Ingeniería de Materiales
- Sliders animados con logos de representaciones
- Sistema de filtros para catálogo de productos
- Acordeón con información de productos
- Galería de imágenes por categorías:
  - Válvulas Esclusas, Globo y Retención
  - Válvulas de Tapón
  - Válvulas Revestidas
  - Válvulas Industriales
  - Válvulas Esféricas y Mariposas
  - Válvulas para Servicios Especiales
  - Válvulas de Seguridad y Automatización
  - Acoplamientos
  - Aeroenfriadores
  - Accesorios para Piping

#### 2. Certificaciones
- Visualización de certificados IRAM ISO 9001:2015 y IQNet ISO 9001:2015
- Descarga de PDFs de certificaciones
- Overlay interactivo en imágenes
- Integración con Lightbox2

#### 3. Subir CV
- Formulario integrado con JotForm
- Sistema de envío de currículums
- Página de confirmación

## 🔧 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
  - Flexbox y Grid Layout
  - Transiciones y animaciones CSS
  - Media queries para responsive design
- **JavaScript (ES5/ES6)** - Interactividad
  - Vanilla JS para funcionalidades core
  - jQuery 3.2.1 para manipulación DOM

### Librerías y Plugins
- **jQuery 3.2.1** - Manipulación DOM y AJAX
- **Modernizr** - Detección de características del navegador
- **Pace.js** - Indicador de carga de página
- **PhotoSwipe** - Galería de imágenes lightbox
- **Lightbox2** - Visualización de imágenes
- **Font Awesome** - Iconos vectoriales
- **Slick Carousel** - Carruseles (opcional)
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll

### Servicios Externos
- **Formspree** (https://formspree.io/f/xgegglae) - Procesamiento de formularios
- **JotForm** - Formulario de envío de CVs
- **Google Fonts** - Tipografías (Lora, Montserrat)

### Tipografías
- **Lora** - Serif para títulos
- **Montserrat** - Sans-serif para cuerpo de texto

## 📱 Características Responsive

El sitio está optimizado para:
- **Desktop** (1920px+)
- **Laptop** (1366px - 1919px)
- **Tablet** (768px - 1365px)
- **Mobile** (320px - 767px)

### Breakpoints principales:
```css
/* Mobile first approach */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1366px) { /* Large Desktop */ }
```

## 🌐 Funcionalidades Principales

### 1. Sistema de Navegación
- Menú hamburguesa en mobile
- Smooth scroll entre secciones
- Navegación sticky en scroll
- Breadcrumb en páginas internas

### 2. Formularios
- **Formulario de Contacto Principal**: Nombre, Email, Asunto, Mensaje
- **Formulario Rápido**: Solo email para contacto inmediato
- **Formulario CV**: Integración completa con JotForm
- Validación en frontend
- Mensajes de éxito/error
- Integración con Formspree

### 3. Galería de Imágenes
- PhotoSwipe para zoom y navegación
- Lazy loading de imágenes
- Efecto hover en thumbnails
- Captions descriptivos

### 4. Animaciones
- Fade in/out en hero section
- Scroll animations con AOS
- Hover effects en cards
- Transiciones suaves entre estados

### 5. SEO y Accesibilidad
- Meta tags descriptivos
- Alt text en imágenes
- Estructura semántica HTML5
- ARIA labels donde corresponde
- Favicon en múltiples tamaños

## 📍 Ubicaciones

### Casa Matriz - Bahía Blanca
- **Dirección**: Av. Colón 2110/16, B8000FUY Bahía Blanca
- **Teléfonos**: +54 0291 452-8687 / 454-7318 / 456-2608
- **Fax**: +54 0291 455-3727
- **Email**: servinbbca@serviningenieria.com.ar

### Sucursal Neuquén
- **Dirección**: Félix San Martín 128, Q8300LKD Neuquén
- **Teléfono**: +54 0299 448-8499
- **Fax**: +54 0291 442-3805
- **Email**: servinqn@serviningenieria.com.ar

### Oficina Buenos Aires
- **Dirección**: Avda. Rivadavia 1611 – 5° "D", C1033AAG Buenos Aires
- **Email**: servinbue@serviningenieria.com.ar

## 🔐 Certificaciones

- **IRAM ISO 9001:2015** - Sistema de Gestión de Calidad
  - Comercialización de válvulas, tuberías, accesorios y acoplamientos
  - Inspección de tanques estáticos y de hidrocarburos
  - Mantenimiento de válvulas manuales, actuadas y de seguridad

- **IQNet ISO 9001:2015** - Reconocimiento Internacional de Calidad

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local o remoto para hosting

### Instalación Local

1. **Clonar o descargar el repositorio**
```bash
git clone https://github.com/franarmani/ServinIngenieria-PREVIEW.git
cd ServinIngenieria-PREVIEW
```

2. **Abrir con Live Server (VS Code)**
   - Instalar la extensión "Live Server"
   - Click derecho en `index.html`
   - Seleccionar "Open with Live Server"

3. **O usar cualquier servidor HTTP local**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server
```

4. **Abrir en el navegador**
```
http://localhost:8000
```

### Despliegue en Producción

El sitio es estático y puede ser desplegado en:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Servidor Apache/Nginx**
- **Hosting tradicional (cPanel, etc.)**

#### Ejemplo con Netlify:
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🛠️ Configuración

### Formularios de Contacto

Para usar tus propios formularios, actualiza las URLs de Formspree:

```html
<!-- En index.html y otras páginas -->
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

### Google Analytics (Opcional)

Agregar antes del cierre de `</head>`:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 Estadísticas del Proyecto

- **Páginas HTML**: 7+
- **Archivos CSS**: 15+
- **Archivos JavaScript**: 15+
- **Imágenes**: 100+ (incluyendo catálogo de productos)
- **Líneas de código**: ~8,000+
- **Divisiones de negocio**: 4
- **Secciones principales**: 6 (Home, Nosotros, Divisiones, Galería, Contacto, Certificaciones)

## 🎨 Paleta de Colores

```css
/* Colores principales */
--primary-red: #cc005f;
--dark-background: #111111;
--light-text: #ffffff;
--gray-text: #757575;
--border-gray: #2d2d2d;

/* Overlays */
--overlay-dark: rgba(0, 0, 0, 0.5);
--overlay-gradient: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
```

## 📝 Scripts Personalizados

### Cálculo Dinámico de Años de Experiencia
```javascript
const foundingYear = 1979;
const currentYear = new Date().getFullYear();
let yearsOfExperience = currentYear - foundingYear;
const currentMonth = new Date().getMonth();

if (currentMonth >= 10) {
    yearsOfExperience++;
}
```

### Carrusel de Imágenes Hero
```javascript
const images = document.querySelectorAll('.s-home .background-image');
const duration = 8000; // 8 segundos
const fadeDuration = 3000; // 3 segundos de fade

function cycleImages() {
    showImage(currentIndex);
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(cycleImages, duration);
}
```

## 🔍 SEO

### Meta Tags Implementados
- Title tags específicos por página
- Meta descriptions
- Meta viewport para responsive
- Open Graph tags (opcional)
- Schema.org markup (recomendado agregar)

### URLs Amigables
Todas las URLs son descriptivas y semánticas:
- `/ingenieriademateriales/`
- `/inspecciones/`
- `/mantenimiento/`
- `/insitu/`
- `/certificaciones/`
- `/subir-cv/`

## 🐛 Debugging y Mantenimiento

### Verificar Formularios
```javascript
// Console para verificar envío
console.log('Form submitted:', formData);
```

### Validar Links Rotos
Usar herramientas como:
- W3C Link Checker
- Broken Link Checker (extension Chrome)
- Online Broken Link Checker

### Performance
- Optimizar imágenes (WebP, compresión)
- Minificar CSS/JS
- Lazy loading de imágenes
- CDN para recursos estáticos

## 📄 Licencia y Créditos

### Desarrollado por
**Franco Armani**
- LinkedIn: [franco-armani-993a36234](https://www.linkedin.com/in/franco-armani-993a36234/)
- Alias: FTA

### Cliente
**Servin Ingeniería S.A.**
- Copyright © 2024 Servin Ingeniería
- Todos los derechos reservados

### Librerías de Terceros
- jQuery: MIT License
- PhotoSwipe: MIT License
- Lightbox2: MIT License
- Font Awesome: Font Awesome Free License
- Modernizr: MIT License

## 🔄 Versión

**v1.0 - PREVIEW** (Noviembre 2024)

## 📞 Contacto y Soporte

Para consultas sobre el sitio web:
- **Email General**: servinbbca@serviningenieria.com.ar
- **Desarrollo Web**: Franco Armani (ver LinkedIn)

## 🚧 Roadmap / Mejoras Futuras

### Funcionalidades Planificadas
- [ ] El sitio web incluye las siguientes secciones, estructuradas en HTML5, utilizando React + Vite + TailwindCSS:

1. **Inicio**
   - Breve presentación de la empresa: "Más de 46 años de experiencia brindando soluciones técnicas a la industria pesada y energética."
   - Imagen o slider representativo de la planta, personal trabajando y equipos técnicos.

2. **Quiénes Somos**
   - Historia de la empresa
   - Sedes: Casa matriz en Bahía Blanca, oficina en Buenos Aires, sucursal en Neuquén.
   - Certificaciones ISO 9001:2015 (IRAM - IQNet), habilitación OPDS.

3. **Servicios**
   - División Planta de Recuperación y Calibración de Válvulas
     - Detalles de la planta, equipos utilizados (bancos de prueba, torno, lapeadoras, cabinas de pintura y granallado).
     - Laboratorio móvil y servicios in situ (Preventest).
   - División de Inspecciones
     - Ensayos No Destructivos (MFL, LFET, PAUT, UT, líquidos penetrantes, partículas magnéticas, etc.)
     - Cumplimiento de Resoluciones 785/05 y 343-SMA/08.
   - Ingeniería de Materiales
     - Acoplamientos, válvulas especiales, selladores y más.

4. **Representaciones**
   - Internacionales: Velan Valves, Neway, Rexnord, etc.
   - Nacionales: Valmec, Valbol, LVM, Valam, Klinger, etc.
   - Breve descripción por marca y tipo de producto que representan.

5. **Equipamiento**
   - Listado técnico con capacidad (rango de presión, diámetro, automatización, software de informes).
   - Fotografías de los equipos: banco Ventil, torno, cabinas, etc.

6. **Clientes**
   - Logos de empresas como PROFERTIL, DOW, ESSO, PETROBRAS, TGS, MEGA, etc.
   - Testimonios y referencias de clientes.

7. **Trabajos Realizados**
   - Listado de casos destacados con empresas mencionadas (por ejemplo: "Recuperación de válvulas Pressure Seal 10'' S.900 – SIDERRAR").
   - Año, tipo de trabajo, cliente.

8. **Contacto**
   - Formulario de contacto
   - Datos de cada sede (dirección, teléfono, correo).
   - Mapa con ubicación de Bahía Blanca, Buenos Aires, Neuquén./Noticias de la empresa
- [ ] Portal de clientes con login
- [ ] Catálogo de productos con búsqueda avanzada
- [ ] Chat en vivo
- [ ] Multiidioma (Inglés/Español)
- [ ] Sistema de cotizaciones online
- [ ] Integración con CRM
- [ ] App móvil

### Mejoras Técnicas
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
