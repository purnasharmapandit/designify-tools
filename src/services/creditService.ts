
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Credit {
  id: string;
  user_id: string;
  credits_balance: number;
  created_at: string;
  updated_at: string;
}

export interface FeatureCost {
  id: string;
  feature_name: string;
  credit_cost: number;
  description: string;
  created_at: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  credits: number;
  is_popular: boolean;
  features: string[];
  created_at: string;
}

/**
 * Get the current user's credit balance
 * @returns The user's credit balance or 0 if not found
 */
export async function getUserCredits(): Promise<number> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return 0;
    
    const { data, error } = await supabase
      .from('user_credits')
      .select('credits_balance')
      .eq('user_id', session.user.id)
      .single();
    
    if (error) {
      console.error("Error fetching user credits:", error);
      return 0;
    }
    
    return data?.credits_balance || 0;
  } catch (error) {
    console.error("Failed to get user credits:", error);
    return 0;
  }
}

/**
 * Check if the user has enough credits for a feature
 * @param featureName The name of the feature to check
 * @returns An object indicating if the user can use the feature and the cost
 */
export async function checkCreditsForFeature(featureName: string): Promise<{
  canUse: boolean;
  cost: number;
  currentBalance: number;
  message: string;
  redirectToAuth?: boolean;
  redirectToPricing?: boolean;
}> {
  // First check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    return {
      canUse: false,
      cost: 0,
      currentBalance: 0,
      message: "Please sign in to use this feature",
      redirectToAuth: true
    };
  }
  
  // Get the feature cost
  const { data: featureData, error: featureError } = await supabase
    .from('feature_costs')
    .select('credit_cost')
    .eq('feature_name', featureName)
    .single();
  
  if (featureError || !featureData) {
    console.error("Error fetching feature cost:", featureError);
    // Default to allowing the use as a fallback
    return {
      canUse: true,
      cost: 0,
      currentBalance: 0,
      message: "Could not verify credit requirements, allowing use",
    };
  }
  
  const creditCost = featureData.credit_cost;
  
  // Get the user's credit balance
  const { data: userData, error: userError } = await supabase
    .from('user_credits')
    .select('credits_balance')
    .eq('user_id', session.user.id)
    .single();
  
  // If user doesn't have a credit record yet, create one with 0 balance
  if (userError && userError.code === 'PGRST116') {
    // Create a new credit record for this user
    const { error: insertError } = await supabase
      .from('user_credits')
      .insert({
        user_id: session.user.id,
        credits_balance: 0
      });
      
    if (insertError) {
      console.error("Error creating user credit record:", insertError);
    }
    
    return {
      canUse: false,
      cost: creditCost,
      currentBalance: 0,
      message: "You don't have enough credits to use this feature",
      redirectToPricing: true
    };
  }
  
  if (userError) {
    console.error("Error fetching user credit balance:", userError);
    // Default to allowing the use as a fallback in case of an error
    return {
      canUse: true,
      cost: creditCost,
      currentBalance: 0,
      message: "Could not verify credit balance, allowing use",
    };
  }
  
  const creditBalance = userData?.credits_balance || 0;
  
  if (creditBalance >= creditCost) {
    return {
      canUse: true,
      cost: creditCost,
      currentBalance: creditBalance,
      message: `This will use ${creditCost} credits. Your balance after: ${creditBalance - creditCost} credits`,
    };
  } else {
    return {
      canUse: false,
      cost: creditCost,
      currentBalance: creditBalance,
      message: `You need ${creditCost} credits but only have ${creditBalance}`,
      redirectToPricing: true
    };
  }
}

/**
 * Deduct credits from a user's balance for using a feature
 * @param featureName The name of the feature used
 * @param toolType The type of tool used (for recording generation)
 * @returns True if credits were successfully deducted
 */
export async function deductCreditsForFeature(featureName: string, toolType: string): Promise<boolean> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast.error("You must be signed in to use this feature");
      return false;
    }
    
    // Get the feature cost
    const { data: featureData, error: featureError } = await supabase
      .from('feature_costs')
      .select('credit_cost')
      .eq('feature_name', featureName)
      .single();
    
    if (featureError || !featureData) {
      console.error("Error fetching feature cost:", featureError);
      return false;
    }
    
    const creditCost = featureData.credit_cost;
    
    // Begin a transaction to update credits and record generation
    const { data, error } = await supabase.rpc('deduct_credits_and_record', {
      p_user_id: session.user.id,
      p_credit_cost: creditCost,
      p_tool_type: toolType,
      p_subscription_tier: 'credit'
    });
    
    if (error) {
      console.error("Error deducting credits:", error);
      toast.error("Failed to deduct credits. Please try again.");
      return false;
    }
    
    // Success, credits deducted and generation recorded
    const newBalance = await getUserCredits();
    toast.success(`${creditCost} credits used. New balance: ${newBalance} credits`);
    return true;
  } catch (error) {
    console.error("Failed to deduct credits:", error);
    toast.error("An error occurred while processing credits");
    return false;
  }
}

/**
 * Add credits to a user's balance (after purchase)
 * @param userId The user ID to add credits to
 * @param creditsToAdd The number of credits to add
 * @returns True if credits were successfully added
 */
export async function addCreditsToUser(userId: string, creditsToAdd: number): Promise<boolean> {
  try {
    // Check if user has a credit record
    const { data: existingCredit, error: checkError } = await supabase
      .from('user_credits')
      .select('id, credits_balance')
      .eq('user_id', userId)
      .single();
    
    if (checkError && checkError.code === 'PGRST116') {
      // User doesn't have a credit record, create one
      const { error: insertError } = await supabase
        .from('user_credits')
        .insert({
          user_id: userId,
          credits_balance: creditsToAdd
        });
      
      if (insertError) {
        console.error("Error creating user credit record:", insertError);
        return false;
      }
    } else if (checkError) {
      console.error("Error checking user credit record:", checkError);
      return false;
    } else {
      // User has a credit record, update it
      const { error: updateError } = await supabase
        .from('user_credits')
        .update({
          credits_balance: existingCredit.credits_balance + creditsToAdd,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingCredit.id);
      
      if (updateError) {
        console.error("Error updating user credit record:", updateError);
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error("Failed to add credits to user:", error);
    return false;
  }
}

/**
 * Get all available pricing tiers
 * @returns Array of pricing tiers
 */
export async function getPricingTiers(): Promise<PricingTier[]> {
  try {
    const { data, error } = await supabase
      .from('pricing_tiers')
      .select('*')
      .order('price', { ascending: true });
    
    if (error) {
      console.error("Error fetching pricing tiers:", error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error("Failed to get pricing tiers:", error);
    return [];
  }
}

/**
 * Get all feature costs
 * @returns Array of feature costs
 */
export async function getFeatureCosts(): Promise<FeatureCost[]> {
  try {
    const { data, error } = await supabase
      .from('feature_costs')
      .select('*')
      .order('credit_cost', { ascending: true });
    
    if (error) {
      console.error("Error fetching feature costs:", error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error("Failed to get feature costs:", error);
    return [];
  }
}
