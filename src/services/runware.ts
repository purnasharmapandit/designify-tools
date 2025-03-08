
import { toast } from "sonner";

const API_ENDPOINT = "https://api.runware.ai/v1";

export interface GenerateIconParams {
  prompt: string;
  style: string;
  color: string;
  backgroundColor: string;
  count: number;
}

export interface GeneratedIcon {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}

// Map style IDs to descriptive prompts that enhance the icon generation
const STYLE_PROMPTS: Record<string, string> = {
  flat: "flat vector icon with solid colors, minimalist style",
  gradient: "gradient vector icon with smooth color transitions",
  outlined: "outlined vector icon with clean lines and minimal fill",
  "3d": "3D icon with depth and shadows, dimensional style",
  isometric: "isometric icon with 3D perspective at specific angles",
  "hand-drawn": "hand-drawn sketch icon style, natural appearance",
  pixel: "pixel art icon, 8-bit retro style",
  minimalist: "ultra-minimalist icon with essential elements only",
  duotone: "duotone icon with two-color overlay design",
  line: "simple single-line icon illustration",
  glyph: "solid silhouette icon style with negative space",
  cartoon: "cartoon-style icon with fun, animated appearance",
  material: "material design icon following Google's design principles",
  neon: "neon effect icon with glowing vibrant appearance",
  vintage: "vintage-style icon with retro textures",
  watercolor: "watercolor effect icon with soft color blends",
  glassmorphism: "glassmorphism icon with frosted transparent effect",
  neumorphic: "neumorphic icon with soft UI shadows and highlights",
  clay: "clay-style 3D icon resembling modeling clay",
  emoji: "emoji-style expressive icon"
};

export async function generateIcons(params: GenerateIconParams, apiKey: string): Promise<GeneratedIcon[]> {
  const { prompt, style, color, backgroundColor, count } = params;
  
  // Enhance the prompt with style-specific keywords
  const stylePrompt = STYLE_PROMPTS[style] || "";
  const enhancedPrompt = `Create a professional ${stylePrompt} of ${prompt}. Primary color: ${color}, background: ${backgroundColor}. Clean vector style, suitable for UI, high-quality icon design.`;
  
  try {
    const tasks = [{
      taskType: "authentication",
      apiKey
    }, {
      taskType: "imageInference",
      taskUUID: crypto.randomUUID(),
      positivePrompt: enhancedPrompt,
      model: "rundiffusion:130@100", // Juggernaut Pro model
      width: 1024,
      height: 1024,
      numberResults: count,
      outputFormat: "WEBP",
      CFGScale: 7, // Optimal for icon generation
      scheduler: "FlowMatchEulerDiscreteScheduler",
      strength: 0.8,
    }];

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tasks),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Runware API error:", errorData);
      throw new Error(errorData.message || "Failed to generate icons");
    }

    const data = await response.json();
    
    // Filter for imageInference response
    const imageResults = data.data.filter((item: any) => item.taskType === "imageInference");
    
    if (!imageResults.length) {
      throw new Error("No images were generated");
    }
    
    return imageResults.map((item: any) => ({
      imageURL: item.imageURL,
      positivePrompt: item.positivePrompt,
      seed: item.seed || 0,
      NSFWContent: item.NSFWContent || false
    }));
  } catch (error) {
    console.error("Error generating icons:", error);
    throw error;
  }
}
