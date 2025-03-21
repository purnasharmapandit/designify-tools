import { marked } from 'marked';

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
  if (!content) return '';
  
  // If content is a string, check if it's markdown or HTML
  if (typeof content === 'string') {
    // Try to parse it as markdown
    try {
      // Handle marked returning a Promise
      const html = marked.parse(content);
      // If it's a Promise, return an empty string - the actual parsing
      // will happen asynchronously in a useEffect
      if (html instanceof Promise) {
        console.warn('Markdown parsing is async, use parseRichTextAsync instead');
        return content;
      }
      return html;
    } catch (error) {
      console.warn('Failed to parse content as markdown, returning as-is:', error);
      return content;
    }
  }
  
  // If it's an object, it might be Strapi's rich text format (blocks format)
  if (typeof content === 'object') {
    try {
      // Handle Strapi v4 blocks format if present
      if (content.blocks && Array.isArray(content.blocks)) {
        let html = '';
        
        content.blocks.forEach((block: any) => {
          switch (block.type) {
            case 'paragraph':
              html += `<p>${block.text}</p>`;
              break;
            case 'heading':
              const level = block.level || 1;
              html += `<h${level}>${block.text}</h${level}>`;
              break;
            case 'list':
              const listType = block.format === 'ordered' ? 'ol' : 'ul';
              html += `<${listType}>`;
              block.items.forEach((item: string) => {
                html += `<li>${item}</li>`;
              });
              html += `</${listType}>`;
              break;
            case 'image':
              const imgUrl = getStrapiMedia(block.url);
              html += `<img src="${imgUrl}" alt="${block.alt || ''}" />`;
              break;
            case 'code':
              html += `<pre><code>${block.code}</code></pre>`;
              break;
            case 'quote':
              html += `<blockquote>${block.text}</blockquote>`;
              break;
            default:
              html += block.text || '';
          }
        });
        
        return html;
      }
      
      // If not blocks format, try to stringify and parse as markdown
      const jsonString = JSON.stringify(content);
      const html = marked.parse(jsonString);
      
      // Handle marked returning a Promise
      if (html instanceof Promise) {
        console.warn('Markdown parsing is async, use parseRichTextAsync instead');
        return jsonString;
      }
      
      return html;
    } catch (error) {
      console.error('Error parsing Strapi rich text content:', error);
      return '';
    }
  }
  
  return '';
};

/**
 * Asynchronous version of parseRichText for use in async contexts
 * @param content The Strapi content to parse
 * @returns Promise resolving to HTML string
 */
export const parseRichTextAsync = async (content: any): Promise<string> => {
  if (!content) return '';
  
  // If content is a string, check if it's markdown or HTML
  if (typeof content === 'string') {
    try {
      return await marked.parse(content);
    } catch (error) {
      console.warn('Failed to parse content as markdown, returning as-is:', error);
      return content;
    }
  }
  
  // If it's an object, handle special formats
  if (typeof content === 'object') {
    try {
      // Handle Strapi v4 blocks format
      if (content.blocks && Array.isArray(content.blocks)) {
        // Use the same block parsing logic as in parseRichText
        let html = '';
        
        content.blocks.forEach((block: any) => {
          switch (block.type) {
            case 'paragraph':
              html += `<p>${block.text}</p>`;
            break;
            case 'heading':
              const level = block.level || 1;
              html += `<h${level}>${block.text}</h${level}>`;
              break;
            case 'list':
              const listType = block.format === 'ordered' ? 'ol' : 'ul';
              html += `<${listType}>`;
              block.items.forEach((item: string) => {
                html += `<li>${item}</li>`;
              });
              html += `</${listType}>`;
              break;
            case 'image':
              const imgUrl = getStrapiMedia(block.url);
              html += `<img src="${imgUrl}" alt="${block.alt || ''}" />`;
              break;
            case 'code':
              html += `<pre><code>${block.code}</code></pre>`;
              break;
            case 'quote':
              html += `<blockquote>${block.text}</blockquote>`;
              break;
            default:
              html += block.text || '';
          }
        });
        
        return html;
      }
      
      // If not blocks format, parse as markdown
      return await marked.parse(JSON.stringify(content));
    } catch (error) {
      console.error('Error parsing Strapi rich text content:', error);
      return '';
    }
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

/**
 * Validates that environment variables needed for Strapi are set
 * @returns Object with validation result and any error messages
 */
export const validateStrapiConfig = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!import.meta.env.VITE_STRAPI_URL) {
    errors.push('VITE_STRAPI_URL environment variable is not set');
  }
  
  if (!import.meta.env.VITE_STRAPI_API_TOKEN) {
    errors.push('VITE_STRAPI_API_TOKEN environment variable is not set');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
