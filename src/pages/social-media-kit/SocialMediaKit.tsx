
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import FeaturesSection from "@/components/social-media-kit/FeaturesSection";
import HowItWorksSection from "@/components/social-media-kit/HowItWorksSection";
import FAQSection from "@/components/social-media-kit/FAQSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SocialMediaKit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Social Media Kit | Create Consistent Social Content</title>
        <meta
          name="description"
          content="Design beautiful and consistent social media content for multiple platforms with our Social Media Kit. Pre-sized templates, brand consistency tools, and more."
        />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 pt-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Create Stunning <span className="text-blue-300">Social Media</span> Content
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Design beautiful, on-brand social media content for all platforms in minutes. Pre-sized templates, brand consistency tools, and more.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-300" />
                    <span>All Major Platforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-300" />
                    <span>Brand Consistency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-300" />
                    <span>Ready-made Templates</span>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100" asChild>
                  <Link to="/contact-us">Join Waitlist</Link>
                </Button>
              </div>
              
              <div className="relative h-[300px]">
                {/* Animated floating social icons */}
                <motion.div 
                  className="grid grid-cols-2 gap-4 absolute"
                  style={{ width: "50%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse"
                  }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg p-4 aspect-square flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Instagram className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-4 aspect-square flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  >
                    <Facebook className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg p-4 aspect-square flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      delay: 0.3
                    }}
                  >
                    <Twitter className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg p-4 aspect-square flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ 
                      duration: 4.5, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      delay: 0.8
                    }}
                  >
                    <Linkedin className="h-8 w-8 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Social Media?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Join our waitlist to be the first to know when our Social Media Kit is available.
            </p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" asChild>
              <Link to="/contact-us">Join Waitlist</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SocialMediaKit;
