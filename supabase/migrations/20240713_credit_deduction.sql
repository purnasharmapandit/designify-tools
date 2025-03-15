
-- Function to deduct credits and record generation in a single transaction
CREATE OR REPLACE FUNCTION public.deduct_credits_and_record(
  p_user_id UUID,
  p_credit_cost INTEGER,
  p_tool_type TEXT,
  p_subscription_tier TEXT DEFAULT 'credit'
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_current_balance INTEGER;
BEGIN
  -- Get current balance
  SELECT credits_balance INTO v_current_balance
  FROM public.user_credits
  WHERE user_id = p_user_id;
  
  -- Check if user has enough credits
  IF v_current_balance IS NULL OR v_current_balance < p_credit_cost THEN
    RETURN FALSE;
  END IF;
  
  -- Update the credit balance
  UPDATE public.user_credits
  SET credits_balance = credits_balance - p_credit_cost,
      updated_at = NOW()
  WHERE user_id = p_user_id;
  
  -- Record the generation
  INSERT INTO public.user_generations (
    user_id,
    tool_type,
    subscription_tier,
    credit_cost
  ) VALUES (
    p_user_id,
    p_tool_type,
    p_subscription_tier,
    p_credit_cost
  );
  
  RETURN TRUE;
END;
$$;

-- Add policy for inserting credit records
CREATE POLICY "Users can insert their own credits"
  ON public.user_credits
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);
