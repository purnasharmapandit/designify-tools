# How to Add New Blog Posts

This document explains how to add new blog posts to the application. We've created a flexible system that allows you to add new blog posts without modifying existing code.

## Method 1: Using the Blog Context

The simplest way to add a new blog post is to register it in the `BlogContext.tsx` file:

1. Open `src/contexts/BlogContext.tsx`
2. Find the `blogPosts` object
3. Add a new entry with a unique ID and all required fields
4. Follow the pattern of existing blog posts

Example:

```typescript
export const blogPosts = {
  // ... existing blog posts
  
  yourNewPost: {
    id: 'your-new-post',
    title: 'Your New Blog Post Title',
    slug: 'your-new-post',
    date: '2023-11-20',
    readingTime: '6 min',
    author: {
      name: 'Your Name',
      title: 'Your Title',
      avatar: 'https://i.pravatar.cc/150?img=1' // Use a placeholder or your real avatar
    },
    coverImage: '/path/to/your/image.jpg',
    category: 'Your Category',
    tags: ['tag1', 'tag2', 'tag3'],
    excerpt: 'A brief summary of your blog post',
    tableOfContents: [
      { title: 'Section 1', slug: 'section-1' },
      { title: 'Section 2', slug: 'section-2' }
    ],
    relatedPosts: [
      {
        title: 'Related Post 1',
        path: '/blogs/related-post-slug',
        image: '/path/to/image.jpg',
        excerpt: 'Brief description'
      }
    ]
  }
};
```

## Method 2: Creating a new blog post file

For more complex blog posts, you can create a new file:

1. Create a new file in `src/pages/blogs/` with a descriptive name (e.g., `YourNewPost.tsx`)
2. Create a corresponding route in `App.tsx`
3. Use the `BlogPost` component to render your content

Example:

```tsx
// src/pages/blogs/YourNewPost.tsx
import { registerNewBlogPost } from "@/utils/blogPostUtils";
import BlogPost from "@/components/BlogPost";

// Register the blog post data
const post = registerNewBlogPost({
  id: 'your-new-post',
  title: 'Your New Blog Post Title',
  slug: 'your-new-post',
  date: '2023-11-20',
  readingTime: '6 min',
  author: {
    name: 'Your Name',
    title: 'Your Title',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  coverImage: '/path/to/your/image.jpg',
  category: 'Your Category',
  tags: ['tag1', 'tag2', 'tag3'],
  excerpt: 'A brief summary of your blog post',
  tableOfContents: [
    { title: 'Section 1', slug: 'section-1' },
    { title: 'Section 2', slug: 'section-2' }
  ],
  relatedPosts: [
    {
      title: 'Related Post 1',
      path: '/blogs/related-post-slug',
      image: '/path/to/image.jpg',
      excerpt: 'Brief description'
    }
  ]
});

const YourNewPost = () => {
  const content = (
    <>
      <h2 id="section-1" className="text-2xl font-bold mt-8 mb-4">Section 1</h2>
      <p>
        Your content here...
      </p>
      
      <h2 id="section-2" className="text-2xl font-bold mt-8 mb-4">Section 2</h2>
      <p>
        More content here...
      </p>
      
      {/* Add as many sections as needed */}
    </>
  );

  return <BlogPost post={post} contentSlot={content} />;
};

export default YourNewPost;
```

Then add the route in `App.tsx`:

```tsx
// In App.tsx, add these lines:
import YourNewPost from "./pages/blogs/YourNewPost";

// In the Routes component:
<Route path="/blogs/your-new-post" element={<YourNewPost />} />
```

## Method 3: Using helper utilities for Dynamic Content

For programmatically generating blog posts (e.g., from a CMS or API):

```typescript
import { generateSlug, calculateReadingTime, registerNewBlogPost } from "@/utils/blogPostUtils";

// Example of generating a post from API data
const fetchedData = {
  title: "My API-Fetched Blog Post",
  content: "A long string of content...",
  // ...other data
};

// Generate needed properties
const slug = generateSlug(fetchedData.title);
const readingTime = calculateReadingTime(fetchedData.content);

// Register the post
registerNewBlogPost({
  id: slug,
  title: fetchedData.title,
  slug: slug,
  date: new Date().toISOString(),
  readingTime: readingTime,
  // ...other properties
});
```

## Blog Post Required Fields

Every blog post must have these fields:

- `id`: Unique identifier (string)
- `title`: The post title
- `slug`: URL-friendly version of the title
- `date`: ISO date string (e.g., "2023-11-20")

## Optional Fields

These fields enhance the blog post but are not required:

- `readingTime`: Estimated reading time (e.g., "5 min")
- `author`: Object with `name`, `title`, and `avatar`
- `coverImage`: URL to the header image
- `category`: Primary category
- `tags`: Array of related tags
- `excerpt`: Brief summary for previews
- `tableOfContents`: Navigation structure
- `relatedPosts`: Recommended reading

## Best Practices

1. **Use descriptive slugs** - Make URLs readable and SEO-friendly
2. **Add high-quality images** - Use images that are at least 1200px wide
3. **Structure content with headings** - Use heading levels for better readability
4. **Add proper ID attributes** - Ensure heading IDs match table of contents slugs
5. **Include related posts** - Help users discover more content
6. **Keep excerpts brief** - Aim for 1-2 sentences that summarize the post
7. **Use consistent formatting** - Follow the existing style patterns
