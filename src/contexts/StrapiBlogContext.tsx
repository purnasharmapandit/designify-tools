
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { BlogPostType } from '@/types/blog';
import { getAllBlogPosts, getBlogPostBySlug, getRelatedBlogPosts, formatStrapiPost } from '@/services/strapiService';

interface StrapiBlogContextType {
  getAllPosts: () => Promise<BlogPostType[]>;
  getPostBySlug: (slug: string) => Promise<BlogPostType | undefined>;
  getRelatedPosts: (currentPostId: string, limit?: number) => Promise<BlogPostType[]>;
  isLoading: boolean;
  error: Error | null;
}

const StrapiBlogContext = createContext<StrapiBlogContextType | undefined>(undefined);

export const StrapiBlogProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getAllPosts = async (): Promise<BlogPostType[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const strapiPosts = await getAllBlogPosts();
      const formattedPosts = strapiPosts.map(formatStrapiPost);
      return formattedPosts;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch blog posts'));
      console.error('Error fetching blog posts:', err);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getPostBySlug = async (slug: string): Promise<BlogPostType | undefined> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const strapiPost = await getBlogPostBySlug(slug);
      if (!strapiPost) return undefined;
      
      return formatStrapiPost(strapiPost);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch blog post'));
      console.error('Error fetching blog post by slug:', err);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };

  const getRelatedPosts = async (currentPostId: string, limit: number = 2): Promise<BlogPostType[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const strapiRelatedPosts = await getRelatedBlogPosts(currentPostId, limit);
      return strapiRelatedPosts.map(formatStrapiPost);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch related blog posts'));
      console.error('Error fetching related blog posts:', err);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StrapiBlogContext.Provider value={{ getAllPosts, getPostBySlug, getRelatedPosts, isLoading, error }}>
      {children}
    </StrapiBlogContext.Provider>
  );
};

export const useStrapiBlog = () => {
  const context = useContext(StrapiBlogContext);
  if (context === undefined) {
    throw new Error('useStrapiBlog must be used within a StrapiBlogProvider');
  }
  return context;
};
