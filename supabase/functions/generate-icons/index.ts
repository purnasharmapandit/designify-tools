
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.33.1'
import { corsHeaders } from '../_shared/cors.ts'

const API_ENDPOINT = "https://api.runware.ai/v1";

interface GenerateIconParams {
  prompt: string;
  style: string;
  color: string;
  backgroundColor: string;
  count: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        ...corsHeaders,
      },
    })
  }

  try {
    // Get the RUNWARE_API_KEY from environment variables
    const RUNWARE_API_KEY = Deno.env.get('RUNWARE_API_KEY')
    if (!RUNWARE_API_KEY) {
      throw new Error('RUNWARE_API_KEY is not set')
    }

    // Get the request JSON
    const { prompt, style, color, backgroundColor, count } = await req.json() as GenerateIconParams

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

    // Enhance the prompt with style-specific keywords
    const stylePrompt = STYLE_PROMPTS[style] || "";
    const enhancedPrompt = `Create a professional ${stylePrompt} of ${prompt}. Primary color: ${color}, background: ${backgroundColor}. Clean vector style, suitable for UI, high-quality icon design.`;
    
    // Prepare the tasks for the Runware API
    const tasks = [{
      taskType: "authentication",
      apiKey: RUNWARE_API_KEY
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

    console.log(`Generating ${count} icons with style: ${style}`);
    
    // Make the API request to Runware
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
    
    // Format the response
    const icons = imageResults.map((item: any) => ({
      imageURL: item.imageURL,
      positivePrompt: item.positivePrompt,
      seed: item.seed || 0,
      NSFWContent: item.NSFWContent || false
    }));

    // Return the successful response
    return new Response(
      JSON.stringify({ icons }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      },
    )
  } catch (error) {
    console.error("Error processing request:", error);
    
    // Return the error response
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 400,
      },
    )
  }
})
