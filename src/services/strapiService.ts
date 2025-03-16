
/**
 * Strapi service for fetching content from Strapi CMS
 */

// The base URL for your Strapi API
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

/**
 * Fetch data from Strapi API
 * @param endpoint The API endpoint to fetch from
 * @param queryParams Optional query parameters
 * @returns The fetched data
 */
export async function fetchFromStrapi(endpoint: string, queryParams: Record<string, string> = {}) {
  // Build query string from params
  const queryString = Object.keys(queryParams).length
    ? '?' + new URLSearchParams(queryParams).toString()
    : '';
  
  try {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}${queryString}`);
    
    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

/**
 * Get all blog posts from Strapi
 * @param limit Optional limit of posts to fetch
 * @param page Optional page number for pagination
 * @returns Array of blog posts
 */
export async function getAllBlogPosts(limit?: number, page?: number) {
  const queryParams: Record<string, string> = {
    'populate': '*',
    'sort': 'date:desc'
  };
  
  if (limit) {
    queryParams['pagination[limit]'] = limit.toString();
  }
  
  if (page) {
    queryParams['pagination[page]'] = page.toString();
  }
  
  const response = await fetchFromStrapi('blog-posts', queryParams);
  return response.data;
}

/**
 * Get a specific blog post by slug
 * @param slug The slug of the post to fetch
 * @returns The blog post data
 */
export async function getBlogPostBySlug(slug: string) {
  const response = await fetchFromStrapi('blog-posts', {
    'filters[slug][$eq]': slug,
    'populate': '*'
  });
  
  return response.data[0] || null;
}

/**
 * Get related blog posts
 * @param currentPostId The ID of the current post
 * @param limit Optional limit of related posts to fetch
 * @returns Array of related blog posts
 */
export async function getRelatedBlogPosts(currentPostId: string, limit: number = 2) {
  // In a real implementation, you might want to fetch posts with similar tags or categories
  // For now, we'll just fetch latest posts excluding the current one
  const response = await fetchFromStrapi('blog-posts', {
    'filters[id][$ne]': currentPostId,
    'pagination[limit]': limit.toString(),
    'sort': 'date:desc',
    'populate': '*'
  });
  
  return response.data;
}

/**
 * Convert Strapi blog data to our app's BlogPostType format
 * @param strapiPost The post data from Strapi
 * @returns Formatted blog post data
 */
export function formatStrapiPost(strapiPost: any) {
  const { id, attributes } = strapiPost;
  
  return {
    id: id.toString(),
    title: attributes.title,
    slug: attributes.slug,
    date: attributes.date,
    readingTime: attributes.readingTime,
    author: attributes.author && {
      name: attributes.author.name,
      title: attributes.author.title,
      avatar: attributes.author.avatar?.data?.attributes?.url 
        ? `${STRAPI_URL}${attributes.author.avatar.data.attributes.url}`
        : undefined
    },
    coverImage: attributes.coverImage?.data?.attributes?.url 
      ? `${STRAPI_URL}${attributes.coverImage.data.attributes.url}` 
      : undefined,
    category: attributes.category,
    categoryColor: attributes.categoryColor,
    tags: attributes.tags?.data?.map((tag: any) => tag.attributes.name) || [],
    excerpt: attributes.excerpt,
    tableOfContents: attributes.tableOfContents || [],
    relatedPosts: attributes.relatedPosts?.data?.map((related: any) => ({
      title: related.attributes.title,
      path: `/blogs/${related.attributes.slug}`,
      image: related.attributes.coverImage?.data?.attributes?.url 
        ? `${STRAPI_URL}${related.attributes.coverImage.data.attributes.url}` 
        : undefined,
      excerpt: related.attributes.excerpt
    })) || []
  };
}
