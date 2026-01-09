-- ============================================
-- SCRIPT PARA ARREGLAR SUPABASE
-- Ejecuta esto en el SQL Editor de Supabase
-- ============================================

-- 1. Eliminar tabla existente si hay problemas
DROP TABLE IF EXISTS public.news CASCADE;

-- 2. Crear tabla news
CREATE TABLE public.news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    title_en TEXT,
    summary TEXT NOT NULL,
    summary_en TEXT,
    content TEXT NOT NULL,
    content_en TEXT,
    category TEXT NOT NULL,
    image TEXT,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Crear índices
CREATE INDEX idx_news_status_date ON public.news(status, date DESC);
CREATE INDEX idx_news_category ON public.news(category);
CREATE INDEX idx_news_featured ON public.news(featured);

-- 4. DESACTIVAR RLS temporalmente (esto es clave)
ALTER TABLE public.news DISABLE ROW LEVEL SECURITY;

-- 5. Dar permisos completos a usuarios anónimos
GRANT ALL ON public.news TO anon;
GRANT ALL ON public.news TO authenticated;

-- 6. Trigger para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON public.news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 7. Insertar datos de prueba directamente
INSERT INTO public.news (title, title_en, summary, summary_en, content, content_en, category, image, date, status, featured)
VALUES 
(
    'Inspección de Tanque de 10.000 m³ en Refinería',
    'Inspection of 10,000 m³ Tank at Refinery',
    'Completamos exitosamente la inspección API 653 de un tanque de almacenamiento de 10.000 m³ en refinería.',
    'We successfully completed the API 653 inspection of a 10,000 m³ storage tank at a refinery.',
    '[{"id":"1","type":"text","content":"SERVIN INGENIERÍA finalizó con éxito la inspección integral según norma API 653 de un tanque de almacenamiento de hidrocarburos de 10.000 m³ de capacidad."}]',
    '[{"id":"1","type":"text","content":"SERVIN INGENIERÍA successfully completed a comprehensive inspection according to API 653 standard of a 10,000 m³ hydrocarbon storage tank."}]',
    'Inspección API',
    '/about/inspeccion-api.webp',
    '2025-11-19',
    'published',
    true
),
(
    'Certificación IRAM ISO 9001:2015 Renovada',
    'IRAM ISO 9001:2015 Certification Renewed',
    'SERVIN INGENIERÍA renovó su certificación IRAM ISO 9001:2015, reafirmando nuestro compromiso con la calidad.',
    'SERVIN INGENIERÍA renewed its IRAM ISO 9001:2015 certification, reaffirming our commitment to quality.',
    '[{"id":"1","type":"text","content":"Con orgullo anunciamos la renovación de nuestra certificación IRAM ISO 9001:2015."}]',
    '[{"id":"1","type":"text","content":"We proudly announce the renewal of our IRAM ISO 9001:2015 certification."}]',
    'Certificaciones',
    '/about/certificacion-iso.webp',
    '2025-11-14',
    'published',
    false
),
(
    'Nueva Planta de Granallado y Pintura',
    'New Blasting and Painting Facility',
    'Inauguramos nuestra nueva planta de granallado y pintura industrial con tecnología de última generación.',
    'We inaugurated our new industrial blasting and painting facility with state-of-the-art technology.',
    '[{"id":"1","type":"text","content":"SERVIN INGENIERÍA inauguró su nueva planta de granallado y pintura industrial."}]',
    '[{"id":"1","type":"text","content":"SERVIN INGENIERÍA inaugurated its new industrial blasting and painting facility."}]',
    'Empresa',
    '/plantamantenimiento/granallado.webp',
    '2025-11-09',
    'published',
    false
),
(
    'Mantenimiento In Situ en Planta Petroquímica',
    'On-Site Maintenance at Petrochemical Plant',
    'Finalización exitosa de mantenimiento programado en planta petroquímica.',
    'Successful completion of scheduled maintenance at petrochemical plant.',
    '[{"id":"1","type":"text","content":"Nuestro equipo técnico finalizó exitosamente el mantenimiento programado en una planta petroquímica."}]',
    '[{"id":"1","type":"text","content":"Our technical team successfully completed scheduled maintenance at a petrochemical plant."}]',
    'Mant. In Situ',
    '/about/mantenimiento-insitu.webp',
    '2025-11-04',
    'published',
    false
);

-- ============================================
-- ¡LISTO! Ahora la tabla está creada con 4 novedades
-- ============================================
