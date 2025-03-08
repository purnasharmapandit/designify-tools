
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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

export async function generateIcons(params: GenerateIconParams): Promise<GeneratedIcon[]> {
  try {
    // Call the Supabase Edge Function instead of directly calling the Runware API
    const { data, error } = await supabase.functions.invoke('generate-icons', {
      body: params
    });

    if (error) {
      console.error("Edge function error:", error);
      throw new Error(error.message || "Failed to generate icons");
    }
    
    if (!data || !data.icons || !data.icons.length) {
      throw new Error("No icons were generated");
    }
    
    return data.icons;
  } catch (error) {
    console.error("Error generating icons:", error);
    throw error;
  }
}
