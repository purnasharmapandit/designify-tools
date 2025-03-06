
import { toast } from "sonner";
import { LogoConfig } from "@/contexts/LogoMakerContext";

// Mock logo generation service for now
// In a real application, this would connect to an AI service like Runware

interface GeneratedLogo {
  id: string;
  imageUrl: string;
  config: LogoConfig;
}

// Sample logo templates - these would be replaced with actual AI-generated logos
const sampleLogoImages = [
  "/lovable-uploads/logo-template-1.png",
  "/lovable-uploads/logo-template-2.png",
  "/lovable-uploads/logo-template-3.png",
  "/lovable-uploads/logo-template-4.png",
];

// Map industry to recommended colors and styles
const industryRecommendations: Record<string, {colors: string[], styles: string[]}> = {
  "technology": {
    colors: ["#2563EB", "#10B981", "#8B5CF6"],
    styles: ["modern", "geometric", "3d"]
  },
  "healthcare": {
    colors: ["#14B8A6", "#2563EB", "#8B5CF6"],
    styles: ["modern", "elegant", "geometric"]
  },
  "education": {
    colors: ["#2563EB", "#8B5CF6", "#F59E0B"],
    styles: ["elegant", "modern", "playful"]
  },
  "food": {
    colors: ["#F59E0B", "#EF4444", "#10B981"],
    styles: ["playful", "handdrawn", "vintage"]
  },
  "retail": {
    colors: ["#EC4899", "#F59E0B", "#14B8A6"],
    styles: ["modern", "elegant", "playful"]
  },
  "finance": {
    colors: ["#4B5563", "#2563EB", "#14B8A6"],
    styles: ["modern", "elegant", "geometric"]
  },
  "art": {
    colors: ["#EC4899", "#8B5CF6", "#F59E0B"],
    styles: ["handdrawn", "playful", "vintage"]
  },
  "sports": {
    colors: ["#EF4444", "#F59E0B", "#10B981"],
    styles: ["playful", "3d", "modern"]
  },
  "travel": {
    colors: ["#10B981", "#14B8A6", "#F59E0B"],
    styles: ["modern", "elegant", "playful"]
  },
  "construction": {
    colors: ["#F59E0B", "#4B5563", "#EF4444"],
    styles: ["geometric", "modern", "3d"]
  }
};

export const generateLogos = async (config: LogoConfig): Promise<GeneratedLogo[]> => {
  try {
    // In a real implementation, this would call an AI API
    // For now, we'll simulate a delay and return mock data
    toast.info("Generating logos based on your input...");
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get industry recommendations or use defaults
    const recommendations = industryRecommendations[config.industry] || {
      colors: ["#2563EB", "#10B981", "#8B5CF6"],
      styles: ["modern", "geometric", "elegant"]
    };
    
    // Generate sample logos with industry-specific variations
    const logos = Array(4).fill(null).map((_, index) => {
      // Mix the user's preference with industry recommendations
      const enhancedConfig = {
        ...config,
        // Only override colors if user didn't specify specific ones
        colors: config.colors.length === 0 ? 
                [recommendations.colors[index % recommendations.colors.length]] : 
                config.colors
      };
      
      return {
        id: `logo-${Date.now()}-${index}`,
        imageUrl: sampleLogoImages[index % sampleLogoImages.length],
        config: enhancedConfig,
      };
    });
    
    toast.success("Your logos are ready!");
    return logos;
  } catch (error) {
    console.error("Error generating logos:", error);
    toast.error("Failed to generate logos. Please try again.");
    throw error;
  }
};

export const downloadLogo = (logoId: string, format: 'svg' | 'png' | 'pdf' | 'jpg'): void => {
  // In a real implementation, this would convert and download the logo
  // For demo purposes, we'll just show a toast
  switch (format) {
    case 'svg':
      toast.success("Logo downloaded as vector SVG file - perfect for printing and professional use");
      break;
    case 'png':
      toast.success("Logo downloaded as PNG with transparent background");
      break;
    case 'pdf':
      toast.success("Logo downloaded as PDF document");
      break;
    case 'jpg':
      toast.success("Logo downloaded as JPG image");
      break;
    default:
      // Here's where the error occurred - format is never in this case due to TypeScript's exhaustive checking
      // Ensure we have proper type assertion for safety
      const formatString = format as string; // Explicitly cast to string to use toUpperCase
      toast.success(`Logo downloaded in ${formatString.toUpperCase()} format`);
  }
};

// Helper function to preview logo in different contexts
export const previewLogoInContext = (logoId: string, context: 'business-card' | 'website' | 'social-media' | 'merchandise'): string => {
  // In a real implementation, this would return a URL to a mockup with the logo
  // For now, we'll return a placeholder
  return `/mockups/${context}-preview.png`;
};
