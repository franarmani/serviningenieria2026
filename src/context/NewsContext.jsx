import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { getPublishedNews, getAllNewsAdmin, getNewsById } from '../services/newsService';

const NewsContext = createContext();

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [newsCache, setNewsCache] = useState({});
  const [loading, setLoading] = useState(false);
  const [lastFetch, setLastFetch] = useState(null);

  // Cache duration: 5 minutes
  const CACHE_DURATION = 5 * 60 * 1000;

  // Check if cache is still valid
  const isCacheValid = useCallback(() => {
    if (!lastFetch) return false;
    return Date.now() - lastFetch < CACHE_DURATION;
  }, [lastFetch]);

  // Load published news (for public pages)
  const loadPublishedNews = useCallback(async (forceRefresh = false) => {
    if (!forceRefresh && isCacheValid() && news.length > 0) {
      return news;
    }

    setLoading(true);
    try {
      const data = await getPublishedNews();
      setNews(data || []);
      setLastFetch(Date.now());
      
      // Update individual cache
      data?.forEach(item => {
        setNewsCache(prev => ({
          ...prev,
          [item.id]: item
        }));
      });
      
      return data || [];
    } catch (error) {
      console.error('Error loading news:', error);
      return [];
    } finally {
      setLoading(false);
    }
  }, [news, isCacheValid]);

  // Load all news for admin
  const loadAllNews = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllNewsAdmin();
      setNews(data || []);
      setLastFetch(Date.now());
      
      // Update cache
      data?.forEach(item => {
        setNewsCache(prev => ({
          ...prev,
          [item.id]: item
        }));
      });
      
      return data || [];
    } catch (error) {
      console.error('Error loading all news:', error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Get single news item by ID (uses cache first)
  const getNewsItem = useCallback(async (id) => {
    // Check cache first
    if (newsCache[id]) {
      return newsCache[id];
    }

    // Not in cache, fetch from database
    try {
      const item = await getNewsById(id);
      if (item) {
        setNewsCache(prev => ({
          ...prev,
          [id]: item
        }));
      }
      return item;
    } catch (error) {
      console.error('Error loading news item:', error);
      return null;
    }
  }, [newsCache]);

  // Invalidate cache (force refresh on next load)
  const invalidateCache = useCallback(() => {
    setLastFetch(null);
    setNewsCache({});
  }, []);

  // Initial load
  useEffect(() => {
    loadPublishedNews();
  }, []);

  const value = {
    news,
    loading,
    loadPublishedNews,
    loadAllNews,
    getNewsItem,
    invalidateCache,
    isCacheValid: isCacheValid()
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};
