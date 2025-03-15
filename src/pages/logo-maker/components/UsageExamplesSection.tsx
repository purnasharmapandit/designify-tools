
import React from "react";
import { motion } from "framer-motion";

const UsageExamplesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">See Your Logo in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preview how your logo will look across different applications and platforms
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center p-4 border">
              <img 
                src="/lovable-uploads/business-card.png" 
                alt="Business card with logo" 
                className="max-h-32 object-contain" 
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Business Cards & Stationery</h3>
            <p className="text-gray-600">
              See how your logo looks on professional business cards, letterheads, and other printed materials.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center p-4 border">
              <div className="w-full max-w-xs bg-gray-100 rounded p-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-xs">Logo</span>
                  </div>
                  <div className="h-2 w-16 bg-gray-300 rounded"></div>
                </div>
                <div className="h-20 bg-gray-200 rounded mb-3"></div>
                <div className="flex gap-2 mb-3">
                  <div className="h-2 w-16 bg-gray-300 rounded"></div>
                  <div className="h-2 w-12 bg-gray-300 rounded"></div>
                  <div className="h-2 w-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Website & Digital Platforms</h3>
            <p className="text-gray-600">
              Preview your logo in website headers, mobile apps, and other digital environments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center p-4 border">
              <div className="w-full flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                  Logo
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  FB
                </div>
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs">
                  TW
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                  IG
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Social Media Profiles</h3>
            <p className="text-gray-600">
              See how your logo appears on different social media platforms with optimal dimensions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsageExamplesSection;
