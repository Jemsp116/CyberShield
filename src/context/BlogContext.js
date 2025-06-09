'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getBlogPosts } from '@/services/blog';

const CACHE_KEY = 'blog_posts_cache';
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

const BlogContext = createContext();

function getLocalCache() {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > CACHE_DURATION;

    if (isExpired) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
}

function setLocalCache(data) {
  if (typeof window === 'undefined') return;

  try {
    const cacheData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
}

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Try to get data from local cache first
        const cachedData = getLocalCache();
        if (cachedData) {
          setPosts(cachedData);
          setLoading(false);
          return;
        }

        // If no cache or expired, fetch fresh data
        const data = await getBlogPosts();
        setPosts(data);
        setLocalCache(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const refreshPosts = async () => {
    setLoading(true);
    try {
      const data = await getBlogPosts();
      setPosts(data);
      setLocalCache(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider value={{ posts, loading, error, refreshPosts }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}