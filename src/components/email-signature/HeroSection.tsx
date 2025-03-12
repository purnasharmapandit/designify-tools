
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-purple-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-purple-100/30 blur-3xl"></div>
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
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Professional Email Signatures
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Create beautiful, professional email signatures in minutes. No design skills required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-indigo-500" />
                  <span>Works with Gmail</span>
                </div>
                <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-indigo-500" />
                  <span>Works with Outlook</span>
                </div>
                <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-indigo-500" />
                  <span>Works with Apple Mail</span>
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
