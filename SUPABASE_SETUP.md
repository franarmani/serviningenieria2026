# Configuración de Supabase para SERVIN INGENIERÍA

## Pasos para configurar Supabase

### 1. Crear proyecto en Supabase
1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta o inicia sesión
2. Crea un nuevo proyecto
3. Guarda las credenciales (URL y anon key)

### 2. Configurar la base de datos
1. En el panel de Supabase, ve a **SQL Editor**
2. Crea una nueva query
3. Copia y pega el contenido del archivo `supabase-schema.sql`
4. Ejecuta la query para crear:
   - Tabla `news` con todos los campos
   - Índices para optimizar consultas
   - Políticas de seguridad (Row Level Security)
   - Bucket de storage para imágenes
   - Trigger para actualizar automáticamente `updated_at`

### 3. Configurar autenticación
1. Ve a **Authentication** > **Providers**
2. Habilita **Email** provider
3. Ve a **Authentication** > **Users**
4. Crea un usuario administrador:
   - Email: tu_email@ejemplo.com
   - Password: tu_contraseña_segura
   - Confirma el email automáticamente

### 4. Configurar variables de entorno
1. Copia las credenciales de tu proyecto:
   - Ve a **Settings** > **API**
   - Copia **Project URL** y **anon public** key
2. Edita el archivo `.env` en la raíz del proyecto:
   ```env
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu_anon_key_aqui
   ```

### 5. Estructura de la tabla `news`

```sql
news (
  id UUID PRIMARY KEY,
  title TEXT,
  title_en TEXT,
  summary TEXT,
  summary_en TEXT,
  content TEXT,
  content_en TEXT,
  category TEXT,
   location TEXT,
  image TEXT,
  date DATE,
  status TEXT (draft|published|archived),
  featured BOOLEAN,
   showOnHome BOOLEAN,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)
```

Notas:
- El dashboard usa `showOnHome` para destacar noticias en el Home.
- El dashboard usa `location` como “Ubicación” (ciudad / planta / dirección).
- Si tu base ya existe, podés ejecutar los scripts:
   - `scripts/add-showOnHome-column.sql`
   - `scripts/add-location-column.sql`

### 6. Inicializar datos de ejemplo
Una vez configurado, los datos de ejemplo se crearán automáticamente la primera vez que accedas a la aplicación.

### 7. Storage para imágenes
El bucket `images` está configurado para almacenar imágenes de noticias:
- Path: `images/news/{filename}`
- Acceso público para lectura
- Solo usuarios autenticados pueden subir/editar/eliminar

## Seguridad

### Políticas implementadas:
- ✅ Cualquiera puede leer noticias publicadas
- ✅ Solo usuarios autenticados pueden ver todas las noticias
- ✅ Solo usuarios autenticados pueden crear/editar/eliminar noticias
- ✅ RLS (Row Level Security) habilitado

### Recomendaciones:
- Cambia las credenciales de administrador después del primer login
- No compartas tu anon key públicamente (ya está en .gitignore)
- Usa variables de entorno para todas las credenciales
- Considera implementar roles específicos para mayor control

## Testing

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Prueba las siguientes funcionalidades:
   - Ver noticias en `/novedades`
   - Login en `/admin/login`
   - CRUD de noticias en `/admin/dashboard`
   - Upload de imágenes

## Migración desde localStorage

Los datos actuales en localStorage NO se migrarán automáticamente. Si deseas conservarlos:

1. Exporta los datos desde la consola del navegador:
   ```javascript
   console.log(JSON.stringify(JSON.parse(localStorage.getItem('servin_news')), null, 2));
   ```

2. Copia el JSON resultante

3. Usa el dashboard de administración para crear las noticias manualmente, o modifica `newsService.js` para importar ese JSON.

## Soporte

Para más información sobre Supabase:
- [Documentación oficial](https://supabase.com/docs)
- [Guía de inicio rápido](https://supabase.com/docs/guides/getting-started)
- [JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
