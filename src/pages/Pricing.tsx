
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PricingTier = ({ name, price, features, isPopular = false }: { name: string; price: number; features: string[]; isPopular?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`relative p-6 bg-white rounded-2xl shadow-lg border ${isPopular ? 'border-primary' : 'border-gray-200'}`}
  >
    {isPopular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
        Most Popular
      </span>
    )}
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-4xl font-bold mb-2">${price}</p>
      <p className="text-gray-500">per month</p>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button 
      variant={isPopular ? "default" : "outline"} 
      className="w-full rounded-full"
    >
      Get Started
    </Button>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: 20,
      features: [
        "5 AI design generations/day",
        "Basic templates",
        "Standard support",
        "720p export quality",
        "2 team members"
      ]
    },
    {
      name: "Pro",
      price: 30,
      features: [
        "20 AI design generations/day",
        "Premium templates",
        "Priority support",
        "1080p export quality",
        "5 team members",
        "Custom branding"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: 50,
      features: [
        "Unlimited AI generations",
        "All premium features",
        "24/7 priority support",
        "4K export quality",
        "Unlimited team members",
        "API access",
        "Custom integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <PricingTier key={index} {...plan} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
