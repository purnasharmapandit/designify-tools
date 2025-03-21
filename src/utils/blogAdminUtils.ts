
// This file is now deprecated. Import from utils/blog-admin/index.ts instead
import * as blogAdmin from './blog-admin';

// Re-export all functions for backward compatibility
export const {
  // Posts
  getAllBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  
  // Categories
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  
  // Tags
  getAllTags,
  createTag,
  updateTag,
  deleteTag,
  
  // Authors
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = blogAdmin;
