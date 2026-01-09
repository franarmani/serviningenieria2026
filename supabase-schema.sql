-- Create news table
CREATE TABLE IF NOT EXISTS public.news (
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

-- Create index on status and date for faster queries
CREATE INDEX IF NOT EXISTS idx_news_status_date ON public.news(status, date DESC);
CREATE INDEX IF NOT EXISTS idx_news_category ON public.news(category);
CREATE INDEX IF NOT EXISTS idx_news_featured ON public.news(featured);

-- Enable Row Level Security
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published news
CREATE POLICY "Anyone can view published news" ON public.news
    FOR SELECT
    USING (status = 'published');

-- Policy: Authenticated users can view all news
CREATE POLICY "Authenticated users can view all news" ON public.news
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy: Authenticated users can insert news
CREATE POLICY "Authenticated users can insert news" ON public.news
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Policy: Authenticated users can update news
CREATE POLICY "Authenticated users can update news" ON public.news
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Policy: Authenticated users can delete news
CREATE POLICY "Authenticated users can delete news" ON public.news
    FOR DELETE
    TO authenticated
    USING (true);

-- Create storage bucket for news images
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for images bucket
CREATE POLICY "Anyone can view images" ON storage.objects
    FOR SELECT
    USING (bucket_id = 'images');

CREATE POLICY "Authenticated users can upload images" ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'images');

CREATE POLICY "Authenticated users can update images" ON storage.objects
    FOR UPDATE
    TO authenticated
    USING (bucket_id = 'images');

CREATE POLICY "Authenticated users can delete images" ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'images');

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to update updated_at on news table
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON public.news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
