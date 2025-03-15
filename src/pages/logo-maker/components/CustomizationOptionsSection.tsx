
import React from "react";
import { motion } from "framer-motion";
import { Type, Palette, Image, Layout } from "lucide-react";

const CustomizationOptionsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Complete Logo Customization Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take full control of your logo design with our advanced editing features
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/logo-maker.png" 
                  alt="Logo editor interface" 
                  className="rounded-lg object-cover w-full h-full" 
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Type className="h-6 w-6 text-brand-purple" />
                  <h3 className="text-xl font-semibold">Font Selection</h3>
                </div>
                <p className="text-gray-600">
                  Choose from hundreds of premium fonts categorized by style. Adjust size, spacing, and weight.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Palette className="h-6 w-6 text-brand-pink" />
                  <h3 className="text-xl font-semibold">Color Management</h3>
                </div>
                <p className="text-gray-600">
                  Select from curated palettes or create your own custom color scheme with our advanced color picker.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Image className="h-6 w-6 text-brand-blue" />
                  <h3 className="text-xl font-semibold">Icon Library</h3>
                </div>
                <p className="text-gray-600">
                  Browse thousands of industry-specific icons to complement your logo text.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Layout className="h-6 w-6 text-brand-yellow" />
                  <h3 className="text-xl font-semibold">Layout Options</h3>
                </div>
                <p className="text-gray-600">
                  Try different arrangements with our preset layouts or create your own unique configuration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationOptionsSection;
