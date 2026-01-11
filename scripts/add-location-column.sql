-- Add free-text location field to news (city/address)
-- Idempotent migration (safe to run multiple times)

ALTER TABLE public.news
ADD COLUMN IF NOT EXISTS location TEXT;

CREATE INDEX IF NOT EXISTS idx_news_location ON public.news(location);
