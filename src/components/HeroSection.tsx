
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Zap, Star, PenTool, Wand2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-display max-w-3xl leading-tight mb-4 relative"
          >
            <Sparkles className="h-12 w-12 text-brand-yellow absolute -left-14 top-0 animate-float" />
            <Star className="h-10 w-10 text-brand-blue absolute -left-4 -top-8 animate-float" style={{ animationDelay: "0.8s" }} />
            <Zap className="h-14 w-14 text-rose-400 absolute -right-16 top-0 animate-float" style={{ animationDelay: "0.5s" }} />
            <PenTool className="h-12 w-12 text-purple-400 absolute -right-4 -top-10 animate-float" style={{ animationDelay: "1.2s" }} />
            <Lightbulb className="h-10 w-10 text-green-400 absolute left-1/4 -bottom-6 animate-float" style={{ animationDelay: "1.5s" }} />
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
