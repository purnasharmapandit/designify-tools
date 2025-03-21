/**
 * Builds a full URL for a Strapi media asset
 * @param url The relative URL from Strapi
 * @returns Full URL to the media asset
 */
export const getStrapiMedia = (url: string | null | undefined): string => {
  if (!url) return '';
  
  // If the URL starts with http or https, it's already an absolute URL
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Otherwise, prepend the Strapi URL
  const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
  return `${strapiUrl}${url}`;
};

/**
 * Converts a Strapi rich text field to HTML
 * @param content The Strapi content to parse
 * @returns HTML string
 */
export const parseRichText = (content: any): string => {
  // Simple implementation - in a real app you would use a proper markdown or rich text parser
  if (!content) return '';
  
  // If content is a string, assume it's already HTML or plain text
  if (typeof content === 'string') {
    return content;
  }
  
  // If it's an object, it might be Strapi's rich text format
  if (typeof content === 'object') {
    // This is a simplistic approach - you would want to use a Strapi-specific
    // parser like 'react-markdown' with appropriate plugins
    return JSON.stringify(content);
  }
  
  return '';
};

/**
 * Creates a slug from a string
 * @param text Text to convert to slug
 * @returns URL-friendly slug
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};
