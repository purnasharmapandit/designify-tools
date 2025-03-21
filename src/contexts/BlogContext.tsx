
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { BlogPostType } from '@/types/blog';
import * as strapiService from '@/services/strapiService';

interface BlogContextType {
  getAllPosts: () => Promise<BlogPostType[]>;
  getPostBySlug: (slug: string) => Promise<BlogPostType | null>;
  getRelatedPosts: (currentPostId: string, limit?: number) => Promise<BlogPostType[]>;
  posts: BlogPostType[];
  isLoading: boolean;
  error: string | null;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all posts when the context is initialized
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const allPosts = await strapiService.getAllPosts();
        setPosts(allPosts);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getAllPosts = async () => {
    // Return cached posts if available
    if (posts.length > 0) {
      return posts;
    }
    
    try {
      const allPosts = await strapiService.getAllPosts();
      setPosts(allPosts);
      return allPosts;
    } catch (err) {
      console.error("Failed to fetch blog posts:", err);
      setError("Failed to load blog posts. Please try again later.");
      return [];
    }
  };

  const getPostBySlug = async (slug: string) => {
    // Check if the post is already in the cache
    const cachedPost = posts.find(post => post.slug === slug);
    if (cachedPost) {
      return cachedPost;
    }
    
    return strapiService.getPostBySlug(slug);
  };

  const getRelatedPosts = async (currentPostId: string, limit: number = 2) => {
    return strapiService.getRelatedPosts(currentPostId, limit);
  };

  return (
    <BlogContext.Provider value={{ 
      getAllPosts, 
      getPostBySlug, 
      getRelatedPosts,
      posts,
      isLoading,
      error
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
