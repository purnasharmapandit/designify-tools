
import React from "react";
import { motion } from "framer-motion";
import { QrCode, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-white to-indigo-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
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
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Professional QR Code Generator
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Create dynamic QR codes for websites, business cards, menus, and more. Customize colors and download in multiple formats.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No Sign-up</span>
                </div>
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Multiple Formats</span>
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
