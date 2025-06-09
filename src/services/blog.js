import { cache } from 'react';
import { getBlogsData } from '@/data/loaders';

export const getBlogPosts = cache(async () => {
  try {
    const data = await getBlogsData();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
});

export const getBlogPostBySlug = cache(async (slug) => {
  try {
    // Since getBlogsData accepts an ID, we'll need to fetch all posts first
    // and then filter by slug
    const data = await getBlogsData();
    return data.data.find(post => post.attributes.slug === slug);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
});