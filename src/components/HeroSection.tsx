
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Zap, Star, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4"
          >
            <Sparkles className="h-8 w-8 text-brand-yellow absolute -left-10 -top-2 animate-float" />
            <Sparkles className="h-8 w-8 text-brand-blue absolute -right-10 top-2 animate-float" style={{ animationDelay: "1s" }} />
            <Zap className="h-7 w-7 text-rose-400 absolute left-8 -top-6 animate-float" style={{ animationDelay: "0.5s" }} />
            <Star className="h-6 w-6 text-green-400 absolute right-4 bottom-0 animate-float" style={{ animationDelay: "1.5s" }} />
            <PenTool className="h-7 w-7 text-purple-400 absolute -right-16 -top-8 animate-float" style={{ animationDelay: "0.8s" }} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-display max-w-3xl leading-tight mb-4"
          >
            The best place to get your design tools without any doubt
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mb-8"
          >
            Create stunning designs with our easy-to-use tools. Perfect for professionals and beginners alike.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base btn-shine-effect"
            >
              Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
