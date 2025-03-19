
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { checkCreditsForFeature, deductCreditsForFeature } from "./creditService";

export type ToolType = 'icon' | 'logo' | 'business_card' | 'email_signature' | 'background_remover' | 'qr_code' | 'qr_code_premium' | 'color_palette';

export interface GenerationResult {
  canGenerate: boolean;
  message: string;
  redirectToAuth?: boolean;
  redirectToSubscription?: boolean;
}

// Map tool types to feature names in the credits system
const toolTypeToFeature: Record<ToolType, string> = {
  'icon': 'icon',
  'logo': 'basic_logo',
  'business_card': 'business_card',
  'email_signature': 'email_signature',
  'background_remover': 'basic_logo', // Using logo cost as an example
  'qr_code': 'email_signature', // Using email signature cost as an example
  'qr_code_premium': 'business_card', // Premium QR codes use business card credits
  'color_palette': 'email_signature' // Using email signature cost as an example
};

export async function checkGenerationEligibility(toolType: ToolType): Promise<GenerationResult> {
  // Get the feature name for this tool type
  const featureName = toolTypeToFeature[toolType];
  
  // Check credits for this feature
  const creditCheck = await checkCreditsForFeature(featureName);
  
  if (creditCheck.redirectToAuth) {
    return {
      canGenerate: false,
      message: "Please sign up or sign in to generate content",
      redirectToAuth: true,
    };
  }
  
  if (!creditCheck.canUse) {
    return {
      canGenerate: false,
      message: creditCheck.message,
      redirectToSubscription: creditCheck.redirectToPricing,
    };
  }
  
  return {
    canGenerate: true,
    message: creditCheck.message,
  };
}

export async function recordGeneration(toolType: ToolType): Promise<boolean> {
  const featureName = toolTypeToFeature[toolType];
  return deductCreditsForFeature(featureName, toolType);
}
