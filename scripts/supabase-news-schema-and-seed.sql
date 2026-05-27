-- SERVIN Ingenieria - Supabase schema for the news/admin module.
-- Run this in Supabase SQL Editor for the project that will be used by production.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  summary TEXT NOT NULL,
  summary_en TEXT,
  content TEXT NOT NULL,
  content_en TEXT,
  category TEXT NOT NULL,
  location TEXT,
  image TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured BOOLEAN NOT NULL DEFAULT false,
  "showOnHome" BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

CREATE INDEX IF NOT EXISTS idx_news_status_date ON public.news(status, date DESC);
CREATE INDEX IF NOT EXISTS idx_news_category ON public.news(category);
CREATE INDEX IF NOT EXISTS idx_news_featured ON public.news(featured);
CREATE INDEX IF NOT EXISTS idx_news_show_on_home ON public.news("showOnHome") WHERE "showOnHome" = true;
CREATE INDEX IF NOT EXISTS idx_news_location ON public.news(location);
CREATE UNIQUE INDEX IF NOT EXISTS idx_news_unique_title_date ON public.news(title, date);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc', now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_news_updated_at ON public.news;
CREATE TRIGGER update_news_updated_at
BEFORE UPDATE ON public.news
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view published news" ON public.news;
DROP POLICY IF EXISTS "Authenticated admins can view all news" ON public.news;
DROP POLICY IF EXISTS "Authenticated admins can insert news" ON public.news;
DROP POLICY IF EXISTS "Authenticated admins can update news" ON public.news;
DROP POLICY IF EXISTS "Authenticated admins can delete news" ON public.news;

CREATE POLICY "Anyone can view published news"
ON public.news FOR SELECT
USING (status = 'published');

CREATE POLICY "Authenticated admins can view all news"
ON public.news FOR SELECT TO authenticated
USING (true);

CREATE POLICY "Authenticated admins can insert news"
ON public.news FOR INSERT TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated admins can update news"
ON public.news FOR UPDATE TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated admins can delete news"
ON public.news FOR DELETE TO authenticated
USING (true);

INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Anyone can view images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated admins can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated admins can update images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated admins can delete images" ON storage.objects;

CREATE POLICY "Anyone can view images"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

CREATE POLICY "Authenticated admins can upload images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Authenticated admins can update images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'images')
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Authenticated admins can delete images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'images');

-- Seed examples already present in the project. Replace these later with real news.
INSERT INTO public.news (
  title, title_en, summary, summary_en, content, content_en, category, location, image, date, status, featured, "showOnHome"
) VALUES
(
  'Inspeccion de Tanque de 10.000 m3 en Refineria',
  '10,000 m3 Tank Inspection at Refinery',
  'Completamos exitosamente la inspeccion API 653 de un tanque de almacenamiento de crudo con tecnologia LFET de ultima generacion.',
  'We successfully completed the API 653 inspection of a crude oil storage tank with state-of-the-art LFET technology.',
  '[{"id":"1","type":"text","content":"Nuestro equipo tecnico finalizo la inspeccion integral de un tanque atmosferico de 10.000 m3 de capacidad en una de las principales refinerias del pais.\n\nUtilizando tecnologia LFET con sensores de alta precision, pudimos realizar un mapeo completo del fondo del tanque, reduciendo tiempos de parada y costos operativos.\n\nEl informe tecnico, elaborado segun normativa API 653, identifico areas criticas y recomendaciones de mantenimiento preventivo."}]',
  '[{"id":"1","type":"text","content":"Our technical team completed the comprehensive inspection of a 10,000 m3 atmospheric tank at one of the country main refineries.\n\nUsing LFET technology with high-precision sensors, we performed a complete mapping of the tank floor, reducing downtime and operating costs.\n\nThe technical report, prepared according to API 653 standards, identified critical areas and preventive maintenance recommendations."}]',
  'Inspeccion API',
  'Bahia Blanca, Argentina',
  'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop',
  '2025-11-20',
  'published',
  true,
  true
),
(
  'Certificacion IRAM ISO 9001:2015 Renovada',
  'IRAM ISO 9001:2015 Certification Renewed',
  'SERVIN INGENIERIA renovo su certificacion IRAM ISO 9001:2015 para todas sus divisiones operativas.',
  'SERVIN INGENIERIA renewed its IRAM ISO 9001:2015 certification for all its operational divisions.',
  '[{"id":"1","type":"text","content":"Comunicamos la renovacion de nuestra certificacion IRAM ISO 9001:2015, otorgada por el Instituto Argentino de Normalizacion y Certificacion.\n\nLa auditoria evaluo procesos de gestion de calidad, control documental, satisfaccion del cliente y mejora continua, reafirmando nuestro compromiso con la excelencia operativa."}]',
  '[{"id":"1","type":"text","content":"We announce the renewal of our IRAM ISO 9001:2015 certification, granted by the Argentine Institute of Standardization and Certification.\n\nThe audit evaluated quality management processes, document control, customer satisfaction and continuous improvement, reaffirming our commitment to operational excellence."}]',
  'Certificaciones',
  'Buenos Aires, Argentina',
  '/Novedades/iram-iso-9001.webp',
  '2025-11-15',
  'published',
  false,
  true
),
(
  'Nueva Planta de Granallado y Pintura',
  'New Shot Blasting and Painting Plant',
  'Inauguramos nuestra nueva planta de granallado y pintura industrial con tecnologia de punta y certificacion ambiental.',
  'We inaugurated our new industrial shot blasting and painting plant with cutting-edge technology and environmental certification.',
  '[{"id":"1","type":"text","content":"SERVIN INGENIERIA inaugura su nueva planta de tratamiento superficial y pintura industrial, ampliando significativamente nuestra capacidad operativa.\n\nLa planta incorpora cabina de granallado, sistema de recuperacion de abrasivo y cabina de pintura con control de temperatura y humedad."}]',
  '[{"id":"1","type":"text","content":"SERVIN INGENIERIA inaugurated its new surface treatment and industrial painting plant, significantly expanding operational capacity.\n\nThe plant includes a shot blasting booth, abrasive recovery system and paint booth with temperature and humidity control."}]',
  'Empresa',
  'Buenos Aires, Argentina',
  '/Novedades/granallado%20y%20pintado.jpg',
  '2025-11-10',
  'published',
  false,
  false
),
(
  'Mantenimiento In Situ en Planta Petroquimica',
  'On-Site Maintenance at Petrochemical Plant',
  'Finalizacion exitosa de mantenimiento programado en planta petroquimica con cero incidentes de seguridad.',
  'Successful completion of scheduled maintenance at petrochemical plant with zero safety incidents.',
  '[{"id":"1","type":"text","content":"Nuestro equipo de mantenimientos in situ completo con exito la parada programada de una planta petroquimica, alcanzando los objetivos de seguridad, calidad y plazo.\n\nEl alcance incluyo calibracion de valvulas, reparacion de equipos rotativos, inspeccion de tanques y pruebas funcionales."}]',
  '[{"id":"1","type":"text","content":"Our on-site maintenance team successfully completed the scheduled shutdown of a petrochemical plant, achieving safety, quality and schedule objectives.\n\nThe scope included valve calibration, rotating equipment repair, tank inspection and functional testing."}]',
  'Mantenimiento',
  'Bahia Blanca, Argentina',
  '/Novedades/Mantenimiento%20In%20Situ%20en%20Planta%20Petroquimica.jpg',
  '2025-11-05',
  'published',
  false,
  false
),
(
  'Complejo Prisma: desarrollo turistico con vista al Lago Nahuel Huapi',
  'Complejo Prisma: tourism development overlooking Nahuel Huapi Lake',
  'SERVIN INGENIERIA suma a su trayectoria el desarrollo de Complejo Prisma, una propuesta de alojamiento en Bariloche con departamentos equipados, vistas panoramicas y servicios pensados para el confort de sus huespedes.',
  'SERVIN INGENIERIA adds Complejo Prisma to its track record, a lodging development in Bariloche with equipped apartments, panoramic views and services designed for guest comfort.',
  '[{"id":"1","type":"text","content":"Complejo Prisma representa una nueva muestra de la capacidad de SERVIN INGENIERIA para participar en proyectos que combinan vision empresarial, desarrollo constructivo y valor para destinos turisticos de alto nivel.\n\nUbicado en San Carlos de Bariloche, sobre Av. Exequiel Bustillo 4000 y a 4 km del centro de la ciudad, el complejo se emplaza en un punto panoramico con vistas al Lago Nahuel Huapi y al entorno natural de la Patagonia.\n\nLa propuesta cuenta con departamentos pensados para parejas y familias, incluyendo unidades estandar y superiores con vista al lago. Segun la informacion institucional de Complejo Prisma, las unidades estan equipadas para 4 personas e incorporan cocina completa, smart TV, Wi-Fi, calefaccion por losa radiante, aire acondicionado, caja fuerte, servicio de limpieza, estacionamiento cubierto y lockers.\n\nEste proyecto refleja una mirada integral sobre la calidad, el confort y la experiencia del usuario final, trasladando criterios de planificacion, ejecucion y detalle a un desarrollo turistico ubicado en uno de los puntos mas reconocidos de la Patagonia argentina."}]',
  '[{"id":"1","type":"text","content":"Complejo Prisma is another example of SERVIN INGENIERIA capability to take part in projects that combine business vision, construction development and value creation for high-profile tourism destinations.\n\nLocated in San Carlos de Bariloche at Av. Exequiel Bustillo 4000, 4 km from the city center, the complex is set in a panoramic location overlooking Nahuel Huapi Lake and the natural surroundings of Patagonia.\n\nThe project offers apartments designed for couples and families, including standard and superior units with lake views. According to Complejo Prisma institutional information, the units are equipped for 4 guests and include a full kitchen, smart TV, Wi-Fi, radiant floor heating, air conditioning, safe box, cleaning service, covered parking and lockers.\n\nThis project reflects an integrated approach to quality, comfort and end-user experience, bringing planning, execution and attention to detail into a tourism development located in one of the most recognized areas of Argentine Patagonia."}]',
  'Obras Civiles',
  'San Carlos de Bariloche, Rio Negro',
  'https://complejoprisma.com.ar/wp-content/uploads/2023/06/1.webp',
  '2026-05-27',
  'published',
  true,
  true
)
ON CONFLICT (title, date) DO NOTHING;

UPDATE public.news
SET
  image = '/Novedades/complejoprisma/exterior.webp',
  content = $$[
    {"id":"1","type":"text","content":"Complejo Prisma representa una nueva muestra de la capacidad de SERVIN INGENIERIA para participar en proyectos que combinan vision empresarial, desarrollo constructivo y valor para destinos turisticos de alto nivel.\n\nUbicado en San Carlos de Bariloche, sobre Av. Exequiel Bustillo 4000 y a 4 km del centro de la ciudad, el complejo se emplaza en un punto panoramico con vistas al Lago Nahuel Huapi y al entorno natural de la Patagonia."},
    {"id":"2","type":"image","src":"/Novedades/complejoprisma/exterior.webp","caption":"Frente de Complejo Prisma en Bariloche","alignment":"center"},
    {"id":"3","type":"image","src":"/Novedades/complejoprisma/1661212874.webp","caption":"Vista aerea del complejo y su entorno patagonico","alignment":"center"},
    {"id":"4","type":"text","content":"La propuesta cuenta con departamentos pensados para parejas y familias, incluyendo unidades estandar y superiores con vista al lago. Segun la informacion institucional de Complejo Prisma, las unidades estan equipadas para 4 personas e incorporan cocina completa, smart TV, Wi-Fi, calefaccion por losa radiante, aire acondicionado, caja fuerte, servicio de limpieza, estacionamiento cubierto y lockers."},
    {"id":"5","type":"image","src":"/Novedades/complejoprisma/1.webp","caption":"Estar comedor con vista al Lago Nahuel Huapi","alignment":"center"},
    {"id":"6","type":"image","src":"/Novedades/complejoprisma/Prisma-dpto-10-2-1.webp","caption":"Departamento equipado con cocina integrada y area de estar","alignment":"center"},
    {"id":"7","type":"image","src":"/Novedades/complejoprisma/3.webp","caption":"Cocina completa equipada para estadias confortables","alignment":"center"},
    {"id":"8","type":"text","content":"Este proyecto refleja una mirada integral sobre la calidad, el confort y la experiencia del usuario final, trasladando criterios de planificacion, ejecucion y detalle a un desarrollo turistico ubicado en uno de los puntos mas reconocidos de la Patagonia argentina."},
    {"id":"9","type":"image","src":"/Novedades/complejoprisma/4.webp","caption":"Dormitorio con vista panoramica al lago","alignment":"center"},
    {"id":"10","type":"image","src":"/Novedades/complejoprisma/672704849.webp","caption":"Vista exterior del complejo en temporada invernal","alignment":"center"},
    {"id":"11","type":"image","src":"/Novedades/complejoprisma/caption.webp","caption":"Iluminacion nocturna de Complejo Prisma","alignment":"center"}
  ]$$,
  content_en = $$[
    {"id":"1","type":"text","content":"Complejo Prisma is another example of SERVIN INGENIERIA capability to take part in projects that combine business vision, construction development and value creation for high-profile tourism destinations.\n\nLocated in San Carlos de Bariloche at Av. Exequiel Bustillo 4000, 4 km from the city center, the complex is set in a panoramic location overlooking Nahuel Huapi Lake and the natural surroundings of Patagonia."},
    {"id":"2","type":"image","src":"/Novedades/complejoprisma/exterior.webp","caption":"Complejo Prisma facade in Bariloche","alignment":"center"},
    {"id":"3","type":"image","src":"/Novedades/complejoprisma/1661212874.webp","caption":"Aerial view of the complex and its Patagonian surroundings","alignment":"center"},
    {"id":"4","type":"text","content":"The project offers apartments designed for couples and families, including standard and superior units with lake views. According to Complejo Prisma institutional information, the units are equipped for 4 guests and include a full kitchen, smart TV, Wi-Fi, radiant floor heating, air conditioning, safe box, cleaning service, covered parking and lockers."},
    {"id":"5","type":"image","src":"/Novedades/complejoprisma/1.webp","caption":"Living and dining area overlooking Nahuel Huapi Lake","alignment":"center"},
    {"id":"6","type":"image","src":"/Novedades/complejoprisma/Prisma-dpto-10-2-1.webp","caption":"Equipped apartment with integrated kitchen and living area","alignment":"center"},
    {"id":"7","type":"image","src":"/Novedades/complejoprisma/3.webp","caption":"Fully equipped kitchen for comfortable stays","alignment":"center"},
    {"id":"8","type":"text","content":"This project reflects an integrated approach to quality, comfort and end-user experience, bringing planning, execution and attention to detail into a tourism development located in one of the most recognized areas of Argentine Patagonia."},
    {"id":"9","type":"image","src":"/Novedades/complejoprisma/4.webp","caption":"Bedroom with panoramic lake view","alignment":"center"},
    {"id":"10","type":"image","src":"/Novedades/complejoprisma/672704849.webp","caption":"Exterior view of the complex during winter season","alignment":"center"},
    {"id":"11","type":"image","src":"/Novedades/complejoprisma/caption.webp","caption":"Night lighting at Complejo Prisma","alignment":"center"}
  ]$$
WHERE title = 'Complejo Prisma: desarrollo turistico con vista al Lago Nahuel Huapi'
  AND date = '2026-05-27';
