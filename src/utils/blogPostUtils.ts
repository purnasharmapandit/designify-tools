
import { BlogPostType } from '@/types/blog';
import { registerBlogPost } from '@/contexts/BlogContext';

/**
 * Register a new blog post for the application
 * 
 * @param post The blog post to register
 * @returns The registered blog post
 * 
 * @example
 * ```typescript
 * // Import at the top of your file
 * import { registerNewBlogPost } from '@/utils/blogPostUtils';
 * 
 * // Then register your blog post
 * registerNewBlogPost({
 *   id: 'my-new-post',
 *   title: 'My New Blog Post',
 *   slug: 'my-new-post',
 *   date: '2023-12-10',
 *   readingTime: '5 min',
 *   author: {
 *     name: 'Your Name',
 *     title: 'Your Title',
 *     avatar: 'https://example.com/avatar.jpg'
 *   },
 *   coverImage: '/path/to/cover-image.jpg',
 *   category: 'Your Category',
 *   tags: ['tag1', 'tag2'],
 *   excerpt: 'Short description of your post',
 *   tableOfContents: [
 *     { title: 'Section 1', slug: 'section-1' },
 *     { title: 'Section 2', slug: 'section-2' }
 *   ],
 *   relatedPosts: [
 *     {
 *       title: 'Related Post 1',
 *       path: '/blogs/related-post-1',
 *       image: '/path/to/image.jpg',
 *       excerpt: 'Short description'
 *     }
 *   ]
 * });
 * ```
 */
export const registerNewBlogPost = (post: BlogPostType): BlogPostType => {
  registerBlogPost(post);
  return post;
};

/**
 * Generate a blog post slug from a title
 * 
 * @param title The title to convert to a slug
 * @returns A URL-friendly slug
 * 
 * @example
 * ```typescript
 * const slug = generateSlug('My New Blog Post');
 * console.log(slug); // 'my-new-blog-post'
 * ```
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

/**
 * Calculate estimated reading time based on content
 * 
 * @param content The content to calculate reading time for
 * @param wordsPerMinute Average reading speed in words per minute
 * @returns Formatted reading time string
 * 
 * @example
 * ```typescript
 * const readingTime = calculateReadingTime('Your content here...');
 * console.log(readingTime); // '2 min'
 * ```
 */
export const calculateReadingTime = (content: string, wordsPerMinute: number = 200): string => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
};
