
import axios from 'axios';
import { BlogPostType, Author, TableOfContentsItem, RelatedPost } from '@/types/blog';
import { validateStrapiConfig } from '@/utils/strapiUtils';

// Base URL for Strapi API - this should be set in environment variables
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_URL = `${STRAPI_URL}/api`;
const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

// Create axios instance with base configuration
const strapiClient = axios.create({
  baseURL: API_URL,
  headers: API_TOKEN ? {
    Authorization: `Bearer ${API_TOKEN}`
  } : {}
});

// Simple in-memory cache
const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

// Helper to check and get cached data
const getCachedData = (key: string) => {
  const now = Date.now();
  const cachedItem = cache[key];
  
  if (cachedItem && now - cachedItem.timestamp < CACHE_DURATION) {
    return cachedItem.data;
  }
  
  return null;
};

// Helper to set cached data
const setCachedData = (key: string, data: any) => {
  cache[key] = {
    data,
    timestamp: Date.now()
  };
};

// Helper to format the Strapi response to our app's format
const formatBlogPost = (post: any): BlogPostType => {
  const { id, attributes } = post;
  const { title, slug, content, date, excerpt, readingTime, coverImage, category, tags, tableOfContents } = attributes;
  
  return {
    id: id.toString(),
    title,
    slug,
    date,
    content, // Include content field for rich text
    readingTime,
    excerpt,
    category: category?.data?.attributes?.name,
    categoryColor: category?.data?.attributes?.color,
    tags: tags?.data?.map((tag: any) => tag.attributes.name) || [],
    coverImage: coverImage?.data?.attributes?.url 
      ? `${STRAPI_URL}${coverImage.data.attributes.url}` 
      : undefined,
    author: attributes.author?.data 
      ? {
          name: attributes.author.data.attributes.name,
          title: attributes.author.data.attributes.title,
          avatar: attributes.author.data.attributes.avatar?.data?.attributes?.url 
            ? `${STRAPI_URL}${attributes.author.data.attributes.avatar.data.attributes.url}` 
            : undefined
        } 
      : undefined,
    tableOfContents: Array.isArray(tableOfContents) 
      ? tableOfContents.map((item: any) => ({
          title: item.title,
          slug: item.slug,
        }))
      : [],
    relatedPosts: attributes.relatedPosts?.data?.map((related: any) => ({
      title: related.attributes.title,
      slug: related.attributes.slug,
      path: `/blog/${related.attributes.slug}`,
      image: related.attributes.coverImage?.data?.attributes?.url 
        ? `${STRAPI_URL}${related.attributes.coverImage.data.attributes.url}` 
        : undefined,
      excerpt: related.attributes.excerpt
    })) || []
  };
};

// Check if Strapi is properly configured
const isStrapiConfigured = (): boolean => {
  const { isValid } = validateStrapiConfig();
  return isValid;
};

// Get all blog posts
export const getAllPosts = async (): Promise<BlogPostType[]> => {
  // Check if Strapi is configured
  if (!isStrapiConfigured()) {
    console.warn('Strapi is not properly configured. Using fallback data.');
    return [];
  }
  
  // Check cache first
  const cacheKey = 'allPosts';
  const cachedPosts = getCachedData(cacheKey);
  if (cachedPosts) {
    return cachedPosts;
  }
  
  try {
    const response = await strapiClient.get('/posts', {
      params: {
        populate: ['coverImage', 'author', 'author.avatar', 'category', 'tags'],
        sort: ['date:desc']
      }
    });
    
    const formattedPosts = response.data.data.map((post: any) => formatBlogPost(post));
    
    // Cache the results
    setCachedData(cacheKey, formattedPosts);
    
    return formattedPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Get a single blog post by slug
export const getPostBySlug = async (slug: string): Promise<BlogPostType | null> => {
  // Check if Strapi is configured
  if (!isStrapiConfigured()) {
    console.warn('Strapi is not properly configured. Using fallback data.');
    return null;
  }
  
  // Check cache first
  const cacheKey = `post_${slug}`;
  const cachedPost = getCachedData(cacheKey);
  if (cachedPost) {
    return cachedPost;
  }
  
  try {
    const response = await strapiClient.get('/posts', {
      params: {
        filters: { slug: { $eq: slug } },
        populate: ['coverImage', 'author', 'author.avatar', 'category', 'tags', 'relatedPosts', 'relatedPosts.coverImage', 'content']
      }
    });
    
    if (response.data.data.length === 0) {
      return null;
    }
    
    const formattedPost = formatBlogPost(response.data.data[0]);
    
    // Cache the result
    setCachedData(cacheKey, formattedPost);
    
    return formattedPost;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
};

// Get related posts for a particular post
export const getRelatedPosts = async (postId: string, limit: number = 3): Promise<BlogPostType[]> => {
  // Check if Strapi is configured
  if (!isStrapiConfigured()) {
    console.warn('Strapi is not properly configured. Using fallback data.');
    return [];
  }
  
  // Check cache first
  const cacheKey = `related_${postId}_${limit}`;
  const cachedPosts = getCachedData(cacheKey);
  if (cachedPosts) {
    return cachedPosts;
  }
  
  try {
    const response = await strapiClient.get(`/posts/${postId}/related`, {
      params: {
        limit,
        populate: ['coverImage', 'author', 'category']
      }
    });
    
    const formattedPosts = response.data.data.map((post: any) => formatBlogPost(post));
    
    // Cache the results
    setCachedData(cacheKey, formattedPosts);
    
    return formattedPosts;
  } catch (error) {
    console.error(`Error fetching related posts for post ${postId}:`, error);
    return [];
  }
};

// Get all categories
export const getCategories = async () => {
  // Check if Strapi is configured
  if (!isStrapiConfigured()) {
    console.warn('Strapi is not properly configured. Using fallback data.');
    return [];
  }
  
  // Check cache first
  const cacheKey = 'categories';
  const cachedCategories = getCachedData(cacheKey);
  if (cachedCategories) {
    return cachedCategories;
  }
  
  try {
    const response = await strapiClient.get('/categories');
    
    const formattedCategories = response.data.data.map((category: any) => ({
      id: category.id,
      name: category.attributes.name,
      slug: category.attributes.slug,
      color: category.attributes.color,
    }));
    
    // Cache the results
    setCachedData(cacheKey, formattedCategories);
    
    return formattedCategories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Get all tags
export const getTags = async () => {
  // Check if Strapi is configured
  if (!isStrapiConfigured()) {
    console.warn('Strapi is not properly configured. Using fallback data.');
    return [];
  }
  
  // Check cache first
  const cacheKey = 'tags';
  const cachedTags = getCachedData(cacheKey);
  if (cachedTags) {
    return cachedTags;
  }
  
  try {
    const response = await strapiClient.get('/tags');
    
    const formattedTags = response.data.data.map((tag: any) => ({
      id: tag.id,
      name: tag.attributes.name,
      slug: tag.attributes.slug,
    }));
    
    // Cache the results
    setCachedData(cacheKey, formattedTags);
    
    return formattedTags;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
};

// Get all authors
export const getAuthors = async (): Promise<Author[]> => {
  // Check if Strapi is configured
  if (!isStrapiConfigured()) {
    console.warn('Strapi is not properly configured. Using fallback data.');
    return [];
  }
  
  // Check cache first
  const cacheKey = 'authors';
  const cachedAuthors = getCachedData(cacheKey);
  if (cachedAuthors) {
    return cachedAuthors;
  }
  
  try {
    const response = await strapiClient.get('/authors', {
      params: {
        populate: ['avatar']
      }
    });
    
    const formattedAuthors = response.data.data.map((author: any) => ({
      id: author.id,
      name: author.attributes.name,
      title: author.attributes.title,
      avatar: author.attributes.avatar?.data?.attributes?.url 
        ? `${STRAPI_URL}${author.attributes.avatar.data.attributes.url}` 
        : undefined
    }));
    
    // Cache the results
    setCachedData(cacheKey, formattedAuthors);
    
    return formattedAuthors;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
};

// Clear the cache for a specific key or all keys
export const clearCache = (key?: string) => {
  if (key) {
    delete cache[key];
  } else {
    Object.keys(cache).forEach(k => delete cache[k]);
  }
};
