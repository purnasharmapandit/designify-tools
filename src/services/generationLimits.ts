import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type ToolType = 'icon' | 'logo';

export interface GenerationResult {
  canGenerate: boolean;
  message: string;
  redirectToAuth?: boolean;
  redirectToSubscription?: boolean;
}

export async function checkGenerationEligibility(toolType: ToolType): Promise<GenerationResult> {
  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    return {
      canGenerate: false,
      message: "Please sign up or sign in to generate content",
      redirectToAuth: true,
    };
  }
  
  const userId = session.user.id;
  
  // Check if user has generated content of this type before
  const { data: existingGenerations, error } = await supabase
    .from('user_generations')
    .select('*')
    .eq('user_id', userId)
    .eq('tool_type', toolType);
  
  if (error) {
    console.error("Error checking generation history:", error);
    return {
      canGenerate: true, // Allow generation if we can't check (fallback)
      message: "Couldn't verify generation limits, allowing generation",
    };
  }
  
  // If user has no previous generations of this type, allow one free generation
  if (!existingGenerations || existingGenerations.length === 0) {
    return {
      canGenerate: true,
      message: "You have one free generation, enjoy!",
    };
  }
  
  // If user has a subscription that allows more generations, check their subscription tier
  // For now, we're just checking if they're not on the 'free' tier
  const { data: latestGeneration } = await supabase
    .from('user_generations')
    .select('subscription_tier')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();
  
  if (latestGeneration && latestGeneration.subscription_tier !== 'free') {
    return {
      canGenerate: true,
      message: "Generation available with your subscription",
    };
  }
  
  // Otherwise, user has used their free generation and needs to subscribe
  return {
    canGenerate: false,
    message: "You've used your free generation. Please subscribe to continue.",
    redirectToSubscription: true,
  };
}

export async function recordGeneration(toolType: ToolType): Promise<void> {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    console.error("Cannot record generation: No authenticated user");
    return;
  }
  
  const { error } = await supabase
    .from('user_generations')
    .insert({
      user_id: session.user.id,
      tool_type: toolType,
      subscription_tier: 'free' // Default to free tier, would be updated based on actual subscription
    });
  
  if (error) {
    console.error("Error recording generation:", error);
  }
}
