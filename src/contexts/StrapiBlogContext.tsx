
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { BlogPostType } from '@/types/blog';
import { 
  getAllBlogPosts, 
  getBlogPostBySlug, 
  getRelatedBlogPosts, 
  formatStrapiPost,
  checkStrapiConnection 
} from '@/services/strapiService';
import { useToast } from '@/hooks/use-toast';

interface StrapiBlogContextType {
  getAllPosts: () => Promise<BlogPostType[]>;
  getPostBySlug: (slug: string) => Promise<BlogPostType | undefined>;
  getRelatedPosts: (currentPostId: string, limit?: number) => Promise<BlogPostType[]>;
  isLoading: boolean;
  error: Error | null;
  isConnected: boolean;
  checkConnection: () => Promise<boolean>;
}

const StrapiBlogContext = createContext<StrapiBlogContextType | undefined>(undefined);

export const StrapiBlogProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check connection when component mounts
    checkConnection();
  }, []);

  const checkConnection = async (): Promise<boolean> => {
    try {
      const connected = await checkStrapiConnection();
      setIsConnected(connected);
      
      if (!connected) {
        toast({
          title: "Strapi Connection Error",
          description: "Could not connect to Strapi CMS. Make sure it's running at the correct URL.",
          variant: "destructive"
        });
      }
      
      return connected;
    } catch (err) {
      setIsConnected(false);
      return false;
    }
  };

  const getAllPosts = async (): Promise<BlogPostType[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!await checkConnection()) {
        return [];
      }
      
      const strapiPosts = await getAllBlogPosts();
      const formattedPosts = strapiPosts.map(formatStrapiPost);
      return formattedPosts;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch blog posts'));
      console.error('Error fetching blog posts:', err);
      toast({
        title: "Error Loading Posts",
        description: "Failed to load blog posts from Strapi",
        variant: "destructive"
      });
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getPostBySlug = async (slug: string): Promise<BlogPostType | undefined> => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!await checkConnection()) {
        return undefined;
      }
      
      const strapiPost = await getBlogPostBySlug(slug);
      if (!strapiPost) return undefined;
      
      return formatStrapiPost(strapiPost);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch blog post'));
      console.error('Error fetching blog post by slug:', err);
      toast({
        title: "Error Loading Post",
        description: "Failed to load the requested blog post",
        variant: "destructive"
      });
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };

  const getRelatedPosts = async (currentPostId: string, limit: number = 2): Promise<BlogPostType[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!await checkConnection()) {
        return [];
      }
      
      const strapiRelatedPosts = await getRelatedBlogPosts(currentPostId, limit);
      return strapiRelatedPosts.map(formatStrapiPost);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch related blog posts'));
      console.error('Error fetching related blog posts:', err);
      toast({
        title: "Error Loading Related Posts",
        description: "Failed to load related blog posts",
        variant: "destructive"
      });
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StrapiBlogContext.Provider value={{ 
      getAllPosts, 
      getPostBySlug, 
      getRelatedPosts, 
      isLoading, 
      error, 
      isConnected,
      checkConnection 
    }}>
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
