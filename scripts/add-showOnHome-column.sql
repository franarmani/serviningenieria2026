-- Script SQL para agregar la columna showOnHome a la tabla de noticias
-- Ejecutar este script en el SQL Editor de Supabase

-- 1. Agregar columna showOnHome (booleano, por defecto false)
ALTER TABLE news 
ADD COLUMN IF NOT EXISTS "showOnHome" BOOLEAN DEFAULT false;

-- 2. (Opcional) Marcar algunas noticias publicadas para mostrar en Home
-- Puedes comentar esta línea si prefieres marcar manualmente desde el dashboard
-- UPDATE news SET "showOnHome" = true WHERE status = 'published' LIMIT 3;

-- 3. Crear índice para mejorar rendimiento de consultas
CREATE INDEX IF NOT EXISTS idx_news_show_on_home ON news("showOnHome") WHERE "showOnHome" = true;

-- 4. Verificar que la columna se creó correctamente
SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'news' AND column_name = 'showOnHome';
