
import React from "react";
import { motion } from "framer-motion";
import { Scissors, Image, Check } from "lucide-react";

const BackgroundRemoverHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-indigo-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-indigo-100/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>
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
              <div className="inline-flex p-3 bg-purple-100 rounded-full text-purple-600 mb-4">
                <Scissors className="h-8 w-8" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Professional Background Remover
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Remove backgrounds from your images with AI precision in seconds. Perfect for professional photos, product shots, and more.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                <div className="flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>High Resolution</span>
                </div>
                <div className="flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Instant Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackgroundRemoverHero;
