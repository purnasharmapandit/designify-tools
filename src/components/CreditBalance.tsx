
import React, { useEffect, useState } from 'react';
import { Coins } from "lucide-react";
import { getUserCredits } from '@/services/creditService';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export function CreditBalance() {
  const [credits, setCredits] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCredits() {
      if (user) {
        const userCredits = await getUserCredits();
        setCredits(userCredits);
      } else {
        setCredits(null);
      }
      setIsLoading(false);
    }

    fetchCredits();
  }, [user]);

  if (!user || credits === null) {
    return null;
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 font-medium"
      onClick={() => navigate('/pricing')}
    >
      <Coins className="h-4 w-4 text-yellow-500" />
      {isLoading ? (
        <span className="w-8 h-4 bg-gray-200 animate-pulse rounded"></span>
      ) : (
        <span>{credits} Credits</span>
      )}
    </Button>
  );
}
