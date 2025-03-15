import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Shield, Clock, Users, Infinity, Coins } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { getPricingTiers, getFeatureCosts, PricingTier, FeatureCost } from "@/services/creditService";
import { toast } from "sonner";
import { MockCreditPurchase } from "@/components/MockCreditPurchase";

const Pricing = () => {
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([]);
  const [featureCosts, setFeatureCosts] = useState<FeatureCost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPricingData() {
      try {
        const [tiers, costs] = await Promise.all([
          getPricingTiers(),
          getFeatureCosts()
        ]);
        
        setPricingTiers(tiers);
        setFeatureCosts(costs);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
        toast.error("Failed to load pricing information");
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchPricingData();
  }, []);

  const handlePurchase = (tier: PricingTier) => {
    if (!user) {
      toast.error("Please sign in to purchase credits");
      navigate("/auth?redirect=pricing");
      return;
    }

    if (tier.name === "Enterprise") {
      navigate("/contact-us?subject=Enterprise%20Plan%20Inquiry");
      return;
    }

    // For now, just show a success message
    // In a real implementation, this would redirect to a payment page
    toast.success(`Thanks for your interest in the ${tier.name}! This would normally redirect to payment.`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-display mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purchase credits and use them across all our tools. No subscriptions or hidden fees.
            </p>
          </motion.div>
          
          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {isLoading ? (
              // Loading skeletons
              [...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-8 h-96 animate-pulse"></div>
              ))
            ) : (
              pricingTiers.map((tier) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`bg-white rounded-xl shadow-sm border p-8 flex flex-col ${
                    tier.is_popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {tier.is_popular && (
                    <div className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  
                  {tier.name === "Enterprise" ? (
                    <div className="my-4 text-3xl font-bold">Custom</div>
                  ) : (
                    <div className="my-4">
                      <span className="text-3xl font-bold">${tier.price}</span>
                      <span className="text-gray-500 ml-1">one-time</span>
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-6">
                    {tier.name === "Enterprise" ? "Custom credit amount for your needs" : `${tier.credits} credits`}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handlePurchase(tier)}
                    variant={tier.is_popular ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {tier.name === "Enterprise" ? "Contact Sales" : "Buy Credits"}
                  </Button>
                </motion.div>
              ))
            )}
          </div>
          
          {/* Feature Costs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-display mb-4">Credit Costs Per Feature</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See exactly how many credits each feature costs
            </p>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-sm border p-8 mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                // Loading skeletons
                [...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-4 h-24 animate-pulse"></div>
                ))
              ) : (
                featureCosts.map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium">{feature.description}</h3>
                      <p className="text-sm text-gray-500">{feature.feature_name}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-primary font-bold">
                      <Coins className="h-4 w-4" />
                      <span>{feature.credit_cost} credits</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
          
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-display mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold mb-2">Do credits expire?</h3>
                <p className="text-gray-600">No, your credits never expire. Use them whenever you need them.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold mb-2">Can I get a refund for unused credits?</h3>
                <p className="text-gray-600">We don't offer refunds for purchased credits, but they never expire so you can use them anytime.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold mb-2">How do I know how many credits I have left?</h3>
                <p className="text-gray-600">Your credit balance is always visible in the top navigation bar when you're logged in.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold mb-2">What if I need more than 1000 credits?</h3>
                <p className="text-gray-600">For larger credit needs, please contact our sales team for our Enterprise plan options.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Dev-only credit adder - would be removed in production */}
          {process.env.NODE_ENV !== 'production' && user && (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-center mb-4">Developer Testing</h3>
              <MockCreditPurchase />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
