import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { BlogPostType } from '@/types/blog';
import { fetchBlogPosts, fetchBlogPostBySlug, fetchRelatedPosts } from '@/services/blogService';

interface BlogContextType {
  posts: BlogPostType[];
  isLoading: boolean;
  error: Error | null;
  getAllPosts: () => Promise<BlogPostType[]>;
  getPostBySlug: (slug: string) => Promise<BlogPostType | null>;
  getRelatedPosts: (currentPostId: string, limit?: number) => Promise<BlogPostType[]>;
  refetchPosts: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Legacy support for existing code - this should be removed once migration is complete
export const blogPosts = {
  createLogo: {
    id: 'create-logo',
    title: 'How to Create Your First Logo',
    slug: 'create-logo',
    date: '2023-06-15',
    readingTime: '8 min',
    author: {
      name: 'Alex Johnson',
      title: 'Lead Designer',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    coverImage: '/lovable-uploads/logo-maker.png',
    category: 'Design Guides',
    categoryColor: 'blue',
    tags: ['Logo Design', 'Branding', 'Design Tools'],
    excerpt: 'Learn how to create a professional logo in minutes using our AI-powered Logo Maker.',
    tableOfContents: [
      { title: 'Getting Started', slug: 'getting-started' },
      { title: 'Step 1: Describe Your Brand', slug: 'describe-brand' },
      { title: 'Step 2: Choose a Style', slug: 'choose-style' },
      { title: 'Step 3: Select Colors', slug: 'select-colors' },
      { title: 'Step 4: Review and Customize', slug: 'review-customize' },
      { title: 'Step 5: Download Your Logo', slug: 'download-logo' },
    ],
    relatedPosts: [
      {
        title: 'Exporting Designs in Different Formats',
        path: '/blogs/exporting-designs',
        image: '/lovable-uploads/business-card.png',
        excerpt: 'Learn about different file formats and when to use them for your design exports.'
      },
      {
        title: 'Creating Business Cards from Templates',
        path: '/blogs/business-cards',
        image: '/lovable-uploads/business-card.png',
        excerpt: 'Discover how to create professional business cards using our template library.'
      }
    ]
  },
  exportingDesigns: {
    id: 'exporting-designs',
    title: 'Exporting Designs in Different Formats',
    slug: 'exporting-designs',
    date: '2023-07-02',
    readingTime: '6 min',
    author: {
      name: 'Sophia Chen',
      title: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    category: 'Tutorials',
    categoryColor: 'yellow',
    tags: ['File Formats', 'Exports', 'Design Tools'],
    excerpt: 'A comprehensive guide to exporting your designs in various formats for different use cases.',
    tableOfContents: [
      { title: 'Understanding File Formats', slug: 'file-formats' },
      { title: 'Raster Formats', slug: 'raster-formats' },
      { title: 'Vector Formats', slug: 'vector-formats' },
      { title: 'How to Export Your Designs', slug: 'how-to-export' },
      { title: 'Plan Options', slug: 'plan-options' }
    ],
    relatedPosts: [
      {
        title: 'How to Create Your First Logo',
        path: '/blogs/create-logo',
        image: '/lovable-uploads/logo-maker.png',
        excerpt: 'Learn how to create a professional logo in minutes using our AI-powered Logo Maker.'
      },
      {
        title: 'Customizing Your Profile Picture',
        path: '/blogs/customizing-profile-picture',
        image: '/lovable-uploads/profile-pic.png',
        excerpt: 'Tips and tutorials for creating the perfect profile picture for different platforms.'
      }
    ]
  },
  customizingProfilePicture: {
    id: 'customizing-profile-picture',
    title: 'Customizing Your Profile Picture',
    slug: 'customizing-profile-picture',
    date: '2023-08-10',
    readingTime: '5 min',
    author: {
      name: 'Miguel Reyes',
      title: 'UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=68'
    },
    coverImage: '/lovable-uploads/profile-pic.png',
    category: 'Design Tips',
    categoryColor: 'purple',
    tags: ['Profile Picture', 'Social Media', 'Image Editing'],
    excerpt: 'Tips and tutorials for creating the perfect profile picture for different platforms.',
    tableOfContents: [
      { title: 'Why Your Profile Picture Matters', slug: 'why-it-matters' },
      { title: 'Creating the Perfect Profile Picture', slug: 'creating-perfect-pic' },
      { title: 'Platform-Specific Tips', slug: 'platform-tips' }
    ],
    relatedPosts: [
      {
        title: 'How to Create Your First Logo',
        path: '/blogs/create-logo',
        image: '/lovable-uploads/logo-maker.png',
        excerpt: 'Learn how to create a professional logo in minutes using our AI-powered Logo Maker.'
      },
      {
        title: 'Exporting Designs in Different Formats',
        path: '/blogs/exporting-designs',
        image: '/lovable-uploads/business-card.png',
        excerpt: 'Learn about different file formats and when to use them for your design exports.'
      }
    ]
  },
  businessCards: {
    id: 'business-cards',
    title: 'Creating Business Cards from Templates',
    slug: 'business-cards',
    date: '2023-09-05',
    readingTime: '7 min',
    author: {
      name: 'Jordan Williams',
      title: 'Creative Director',
      avatar: 'https://i.pravatar.cc/150?img=30'
    },
    coverImage: '/lovable-uploads/business-card.png',
    category: 'Templates',
    categoryColor: 'green',
    tags: ['Business Cards', 'Print Design', 'Templates'],
    excerpt: 'Discover how to create professional business cards using our template library.',
    tableOfContents: [
      { title: 'The Importance of Business Cards', slug: 'importance' },
      { title: 'Using Our Business Card Templates', slug: 'using-templates' },
      { title: 'Best Practices for Business Cards', slug: 'best-practices' }
    ],
    relatedPosts: [
      {
        title: 'Account Billing and Subscriptions',
        path: '/blogs/billing-subscriptions',
        image: '/lovable-uploads/profile-pic.png',
        excerpt: 'Everything you need to know about our subscription plans and billing options.'
      },
      {
        title: 'How to Create Your First Logo',
        path: '/blogs/create-logo',
        image: '/lovable-uploads/logo-maker.png',
        excerpt: 'Learn how to create a professional logo in minutes using our AI-powered Logo Maker.'
      }
    ]
  },
  billingSubscriptions: {
    id: 'billing-subscriptions',
    title: 'Account Billing and Subscriptions',
    slug: 'billing-subscriptions',
    date: '2023-10-12',
    readingTime: '9 min',
    author: {
      name: 'Olivia Martinez',
      title: 'Customer Success Manager',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    category: 'Account Help',
    categoryColor: 'orange',
    tags: ['Billing', 'Subscription', 'Pricing', 'Account'],
    excerpt: 'Everything you need to know about our subscription plans and billing options.',
    tableOfContents: [
      { title: 'Understanding Our Subscription Plans', slug: 'subscription-plans' },
      { title: 'Managing Your Subscription', slug: 'managing-subscription' },
      { title: 'Payment Methods', slug: 'payment-methods' },
      { title: 'Billing Cycle and Invoices', slug: 'billing-cycle' },
      { title: 'Cancellation Policy', slug: 'cancellation-policy' },
      { title: 'Frequently Asked Questions', slug: 'faq' }
    ],
    relatedPosts: [
      {
        title: 'Creating Business Cards from Templates',
        path: '/blogs/business-cards',
        image: '/lovable-uploads/business-card.png',
        excerpt: 'Discover how to create professional business cards using our template library.'
      },
      {
        title: 'Exporting Designs in Different Formats',
        path: '/blogs/exporting-designs',
        image: '/lovable-uploads/business-card.png',
        excerpt: 'Learn about different file formats and when to use them for your design exports.'
      }
    ]
  }
};

// Legacy function for backward compatibility
export const registerBlogPost = (post: BlogPostType) => {
  console.warn('registerBlogPost is deprecated. Use Supabase Admin UI to manage blog posts.');
};

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Load posts when the component mounts
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      console.error("Failed to load blog posts:", err);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  const getAllPosts = async () => {
    // If posts are already loaded, return them
    if (posts.length > 0 && !isLoading) {
      return posts;
    }
    
    // Otherwise fetch them
    try {
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
      return fetchedPosts;
    } catch (err) {
      console.error("Failed to get all blog posts:", err);
      setError(err instanceof Error ? err : new Error(String(err)));
      return [];
    }
  };

  const getPostBySlug = async (slug: string) => {
    try {
      // Try to find in cache first
      const cachedPost = posts.find(post => post.slug === slug);
      if (cachedPost) {
        return cachedPost;
      }
      
      // Otherwise fetch from Supabase
      return await fetchBlogPostBySlug(slug);
    } catch (err) {
      console.error(`Failed to get blog post with slug ${slug}:`, err);
      setError(err instanceof Error ? err : new Error(String(err)));
      return null;
    }
  };

  const getRelatedPosts = async (currentPostId: string, limit: number = 2) => {
    try {
      return await fetchRelatedPosts(currentPostId, limit);
    } catch (err) {
      console.error(`Failed to get related posts for post ${currentPostId}:`, err);
      setError(err instanceof Error ? err : new Error(String(err)));
      return [];
    }
  };

  const refetchPosts = async () => {
    await loadPosts();
  };

  return (
    <BlogContext.Provider 
      value={{ 
        posts, 
        isLoading, 
        error, 
        getAllPosts, 
        getPostBySlug, 
        getRelatedPosts,
        refetchPosts 
      }}
    >
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
