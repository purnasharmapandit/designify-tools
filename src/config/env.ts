
// Configuration for environment variables with defaults

export const config = {
  // Strapi configuration
  strapi: {
    url: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
    apiToken: import.meta.env.VITE_STRAPI_API_TOKEN,
  },
  
  // Application configuration
  app: {
    name: 'Your App Name',
    url: import.meta.env.VITE_APP_URL || window.location.origin,
  },
  
  // Feature flags
  features: {
    strapiIntegration: import.meta.env.VITE_USE_STRAPI === 'true' || true,
  }
};
