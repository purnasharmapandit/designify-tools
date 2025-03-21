
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { BlogPostType } from '@/types/blog';
import * as strapiService from '@/services/strapiService';

// Add the blogPosts object with our existing blog posts
export const blogPosts = {
  createLogo: {
    id: 'create-logo',
    title: 'How to Create Your First Logo',
    slug: 'create-logo',
    date: '2023-10-15',
    readingTime: '5 min',
    author: {
      name: 'Jane Smith',
      title: 'Brand Specialist',
      avatar: '/lovable-uploads/1a43098b-f1ed-4275-9a64-0247d2c9441e.png'
    },
    coverImage: '/lovable-uploads/logo-maker.png',
    category: 'Logo Design',
    tags: ['Logo', 'Design', 'Branding'],
    excerpt: 'Learn how to create your first professional logo with our AI-powered Logo Maker in just minutes. No design skills required.',
    tableOfContents: [
      { title: 'Getting Started', slug: 'getting-started' },
      { title: 'Describe Your Brand', slug: 'describe-brand' },
      { title: 'Choose a Style', slug: 'choose-style' },
      { title: 'Select Colors', slug: 'select-colors' },
      { title: 'Review and Customize', slug: 'review-customize' },
      { title: 'Download Your Logo', slug: 'download-logo' }
    ]
  },
  customizingProfilePicture: {
    id: 'customizing-profile-picture',
    title: 'Creating the Perfect Profile Picture',
    slug: 'customizing-profile-picture',
    date: '2023-10-22',
    readingTime: '4 min',
    author: {
      name: 'Michael Chen',
      title: 'Visual Designer',
      avatar: '/lovable-uploads/57d5ad99-eb1e-4280-a64f-e837c1d3b851.png'
    },
    coverImage: '/lovable-uploads/profile-pic.png',
    category: 'Profile Design',
    categoryColor: 'blue',
    tags: ['Profile', 'Design', 'Social Media'],
    excerpt: 'Discover how to create and customize the perfect profile picture for any platform using our AI-powered tools.',
    tableOfContents: [
      { title: 'Why It Matters', slug: 'why-it-matters' },
      { title: 'Creating the Perfect Profile Picture', slug: 'creating-perfect-pic' },
      { title: 'Platform-Specific Tips', slug: 'platform-tips' }
    ]
  },
  businessCards: {
    id: 'business-cards',
    title: 'Designing Professional Business Cards',
    slug: 'business-cards',
    date: '2023-11-05',
    readingTime: '6 min',
    author: {
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      avatar: '/lovable-uploads/db9c3f39-be59-43e9-9fda-054848781b3d.png'
    },
    coverImage: '/lovable-uploads/business-card.png',
    category: 'Business Tools',
    categoryColor: 'green',
    tags: ['Business Card', 'Design', 'Networking'],
    excerpt: 'Learn how to design professional business cards that make a lasting impression using our business card templates.',
    tableOfContents: [
      { title: 'The Importance of Business Cards', slug: 'importance' },
      { title: 'Using Our Business Card Templates', slug: 'using-templates' },
      { title: 'Best Practices', slug: 'best-practices' }
    ]
  },
  exportingDesigns: {
    id: 'exporting-designs',
    title: 'How to Export Your Designs',
    slug: 'exporting-designs',
    date: '2023-11-18',
    readingTime: '3 min',
    author: {
      name: 'Alex Rivera',
      title: 'Product Manager',
      avatar: '/lovable-uploads/9631ab2d-6048-425b-b6ac-fd4d8e6181c0.png'
    },
    coverImage: '/lovable-uploads/4894cea5-585c-4904-82e3-fd2a5f99eed2.png',
    category: 'Tips & Tricks',
    categoryColor: 'yellow',
    tags: ['Export', 'File Formats', 'Design'],
    excerpt: 'Master the export process and choose the right file formats for your designs, whether for web, print, or other applications.',
    tableOfContents: [
      { title: 'Understanding File Formats', slug: 'file-formats' },
      { title: 'How to Export Your Designs', slug: 'how-to-export' },
      { title: 'Plan Options', slug: 'plan-options' }
    ]
  },
  billingSubscriptions: {
    id: 'billing-subscriptions',
    title: 'Understanding Billing and Subscriptions',
    slug: 'billing-subscriptions',
    date: '2023-12-01',
    readingTime: '5 min',
    author: {
      name: 'Taylor Washington',
      title: 'Customer Success',
      avatar: '/lovable-uploads/c2c476a5-d97d-45d6-8bc0-4babfc0a0178.png'
    },
    coverImage: '/lovable-uploads/821d58bb-8315-4c80-be65-f4ba367bdeae.png',
    category: 'Account Management',
    categoryColor: 'purple',
    tags: ['Billing', 'Subscriptions', 'Pricing'],
    excerpt: 'Everything you need to know about our subscription plans, billing cycles, payment methods, and cancellation policies.',
    tableOfContents: [
      { title: 'Subscription Plans', slug: 'subscription-plans' },
      { title: 'Managing Your Subscription', slug: 'managing-subscription' },
      { title: 'Payment Methods', slug: 'payment-methods' },
      { title: 'Billing Cycle', slug: 'billing-cycle' },
      { title: 'Cancellation Policy', slug: 'cancellation-policy' },
      { title: 'FAQ', slug: 'faq' }
    ]
  }
};

// Define a cache for registered blog posts
const _registeredPosts: Record<string, BlogPostType> = {};

// Add the registerBlogPost function
export const registerBlogPost = (post: BlogPostType): void => {
  _registeredPosts[post.slug] = post;
};

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
    // First check if it's one of our hardcoded posts
    if (blogPosts[slug as keyof typeof blogPosts]) {
      return blogPosts[slug as keyof typeof blogPosts];
    }
    
    // Then check if it's a registered post
    if (_registeredPosts[slug]) {
      return _registeredPosts[slug];
    }
    
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
