
import React from "react";
import { motion } from "framer-motion";
import { Shield, Wand2, Palette, Download } from "lucide-react";

const BenefitsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Best AI Logo Generator Without Watermark</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create professional, custom logos instantly — with no watermarks or hidden fees
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-purple/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-brand-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Watermark-Free</h3>
            <p className="text-gray-600">Download professional logos without any branding or watermarks on your designs.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
              <Wand2 className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Industry-Specific Designs</h3>
            <p className="text-gray-600">Get tailored logo suggestions based on your business industry and brand personality.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-pink/10 rounded-full flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-brand-pink" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Unlimited Revisions</h3>
            <p className="text-gray-600">Refine your logo with as many edits as you need until it's exactly right for your brand.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-brand-yellow" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Formats</h3>
            <p className="text-gray-600">Export your logo in SVG, PNG, and other formats for use across all your digital and print materials.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
