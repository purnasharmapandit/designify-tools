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
        
        // Sort tiers to ensure Enterprise is at the end
        const sortedTiers = [...tiers].sort((a, b) => {
          if (a.name === "Enterprise") return 1; // Enterprise tier always last
          if (b.name === "Enterprise") return -1;
          return a.price - b.price; // Otherwise sort by price
        });
        
        setPricingTiers(sortedTiers);
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
      // Redirect to contact page with a subject for Enterprise inquiry
      navigate("/contact-us?subject=Enterprise%20Plan%20Inquiry");
      return;
    }

    // For now, just show a success message
    // In a real implementation, this would redirect to a payment page
    toast.success(`Thanks for your interest in the ${tier.name}! This would normally redirect to payment.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue">Simple, Transparent Pricing</h1>
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
              pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border p-8 flex flex-col ${
                    tier.is_popular ? 'ring-2 ring-brand-purple' : ''
                  }`}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {tier.is_popular && (
                    <div className="bg-gradient-to-r from-brand-purple to-brand-pink text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  
                  {tier.name === "Enterprise" ? (
                    <div className="my-4 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">Custom</div>
                  ) : (
                    <div className="my-4">
                      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">${tier.price}</span>
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
                    className={`w-full ${tier.is_popular ? 'bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-purple/90 hover:to-brand-pink/90 text-white' : 'border-brand-purple text-brand-purple hover:bg-brand-purple/10'}`}
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
            <h2 className="text-3xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-yellow">Credit Costs Per Feature</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See exactly how many credits each feature costs
            </p>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-md border p-8 mb-16 bg-gradient-to-br from-white to-purple-50/40">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                // Loading skeletons
                [...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-4 h-24 animate-pulse"></div>
                ))
              ) : (
                featureCosts.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div>
                      <h3 className="font-medium">{feature.description}</h3>
                      <p className="text-sm text-gray-500">{feature.feature_name}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-purple font-bold bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 px-3 py-1 rounded-full">
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
            <h2 className="text-3xl font-bold font-display mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Do credits expire?",
                  answer: "No, your credits never expire. Use them whenever you need them."
                },
                {
                  question: "Can I get a refund for unused credits?",
                  answer: "We don't offer refunds for purchased credits, but they never expire so you can use them anytime."
                },
                {
                  question: "How do I know how many credits I have left?",
                  answer: "Your credit balance is always visible in the top navigation bar when you're logged in."
                },
                {
                  question: "What if I need more than 1000 credits?",
                  answer: "For larger credit needs, please contact our sales team for our Enterprise plan options."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
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
