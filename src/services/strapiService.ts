
import axios from 'axios';
import { BlogPostType, Author, TableOfContentsItem, RelatedPost } from '@/types/blog';

// Base URL for Strapi API - this should be set in environment variables
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_URL = `${STRAPI_URL}/api`;

// Helper to format the Strapi response to our app's format
const formatBlogPost = (post: any): BlogPostType => {
  const { id, attributes } = post;
  const { title, slug, content, date, excerpt, readingTime, coverImage, category, tags, tableOfContents } = attributes;
  
  return {
    id: id.toString(),
    title,
    slug,
    date,
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
      path: `/blog/${related.attributes.slug}`,
      image: related.attributes.coverImage?.data?.attributes?.url 
        ? `${STRAPI_URL}${related.attributes.coverImage.data.attributes.url}` 
        : undefined,
      excerpt: related.attributes.excerpt
    })) || []
  };
};

// Get all blog posts
export const getAllPosts = async (): Promise<BlogPostType[]> => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        populate: ['coverImage', 'author', 'author.avatar', 'category', 'tags'],
        sort: ['date:desc']
      }
    });
    
    return response.data.data.map((post: any) => formatBlogPost(post));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Get a single blog post by slug
export const getPostBySlug = async (slug: string): Promise<BlogPostType | null> => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        filters: { slug: { $eq: slug } },
        populate: ['coverImage', 'author', 'author.avatar', 'category', 'tags', 'relatedPosts', 'relatedPosts.coverImage']
      }
    });
    
    if (response.data.data.length === 0) {
      return null;
    }
    
    return formatBlogPost(response.data.data[0]);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
};

// Get related posts for a particular post
export const getRelatedPosts = async (postId: string, limit: number = 3): Promise<BlogPostType[]> => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/related`, {
      params: {
        limit,
        populate: ['coverImage', 'author', 'category']
      }
    });
    
    return response.data.data.map((post: any) => formatBlogPost(post));
  } catch (error) {
    console.error(`Error fetching related posts for post ${postId}:`, error);
    return [];
  }
};

// Get all categories
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data.data.map((category: any) => ({
      id: category.id,
      name: category.attributes.name,
      slug: category.attributes.slug,
      color: category.attributes.color,
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Get all tags
export const getTags = async () => {
  try {
    const response = await axios.get(`${API_URL}/tags`);
    return response.data.data.map((tag: any) => ({
      id: tag.id,
      name: tag.attributes.name,
      slug: tag.attributes.slug,
    }));
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
};

// Get all authors
export const getAuthors = async (): Promise<Author[]> => {
  try {
    const response = await axios.get(`${API_URL}/authors`, {
      params: {
        populate: ['avatar']
      }
    });
    
    return response.data.data.map((author: any) => ({
      id: author.id,
      name: author.attributes.name,
      title: author.attributes.title,
      avatar: author.attributes.avatar?.data?.attributes?.url 
        ? `${STRAPI_URL}${author.attributes.avatar.data.attributes.url}` 
        : undefined
    }));
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
};
