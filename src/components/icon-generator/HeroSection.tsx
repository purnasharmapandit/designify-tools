
import React from "react";
import { motion } from "framer-motion";
import { Wand2, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-blue-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-800/40 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-indigo-700/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-blue-900 to-transparent"></div>
      </div>

      <div className="relative">
        <section className="pt-28 pb-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
            >
              <div className="inline-flex p-3 bg-blue-800/50 rounded-full text-blue-200 mb-4">
                <Wand2 className="h-8 w-8" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-indigo-200 to-blue-300 bg-clip-text text-transparent">
                AI Icon Generator
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Create beautiful, custom icons in seconds with our AI-powered generator. Perfect for apps, websites, and presentations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white">
                  <Check className="h-4 w-4 text-blue-300" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white">
                  <Check className="h-4 w-4 text-blue-300" />
                  <span>Multiple Styles</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white">
                  <Check className="h-4 w-4 text-blue-300" />
                  <span>Commercial Use</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
