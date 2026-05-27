-- DEPRECADO: este script agregaba `newsLocation` (selector). Ahora se usa `location` (texto libre).
-- Usá `scripts/add-location-column.sql`.
-- Ejecutar este script en el SQL Editor de Supabase

-- 1) Agregar columna newsLocation (string) para indicar dónde aplica/destacar la noticia
ALTER TABLE news
ADD COLUMN IF NOT EXISTS "newsLocation" TEXT DEFAULT 'general';

-- 2) Crear índice para mejorar rendimiento de filtros por ubicación (si se usa)
CREATE INDEX IF NOT EXISTS idx_news_newslocation ON news("newsLocation");

-- 3) Verificar que la columna se creó correctamente
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'news' AND column_name = 'newsLocation';
