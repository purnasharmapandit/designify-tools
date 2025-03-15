
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { addCreditsToUser } from '@/services/creditService';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export function MockCreditPurchase() {
  const [amount, setAmount] = useState<number>(100);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleAddCredits = async () => {
    if (!user) {
      toast.error("You must be logged in to add credits");
      return;
    }

    setIsLoading(true);
    try {
      const success = await addCreditsToUser(user.id, amount);
      if (success) {
        toast.success(`Added ${amount} credits to your account`);
      } else {
        toast.error("Failed to add credits");
      }
    } catch (error) {
      console.error("Error adding credits:", error);
      toast.error("An error occurred while adding credits");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Add Test Credits</CardTitle>
        <CardDescription>
          For testing purposes only. This would normally be handled by a payment processor.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Credit Amount</Label>
            <Input
              id="amount"
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAddCredits} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Adding..." : "Add Credits"}
        </Button>
      </CardFooter>
    </Card>
  );
}
