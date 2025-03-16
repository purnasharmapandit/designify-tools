
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Layout, Image, Share2, Download, ImagePlus } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const SocialBannerMaker = () => {
  const bannerImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Share2 className="w-12 h-12 text-blue-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[2/1] col-span-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
            <Layout className="w-16 h-16 text-blue-500" />
          </div>
          <div className="aspect-[1/1] rounded-lg bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
            <Image className="w-8 h-8 text-pink-500" />
          </div>
          <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <Share2 className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Social Banner Maker"
          title="Create"
          highlightedText="Stunning Social Banners"
          restOfTitle="in Minutes"
          description="Design eye-catching banners for all your social media platforms with our easy-to-use banner maker. Stand out with professional graphics."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Multiple Sizes" },
            { icon: <Check className="h-4 w-4" />, text: "Custom Templates" },
            { icon: <Check className="h-4 w-4" />, text: "One-Click Download" }
          ]}
          image={bannerImage}
          bgColor="bg-blue-900"
          textColor="text-white"
        />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Perfect Social Media Banners</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ideal for Facebook, Twitter, LinkedIn, YouTube and more</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ImagePlus className="h-10 w-10 text-blue-500" />,
                  title: "Choose a Template",
                  description: "Start with one of our professionally designed templates for various platforms and purposes."
                },
                {
                  icon: <Layout className="h-10 w-10 text-blue-500" />,
                  title: "Customize Content",
                  description: "Add your text, upload images, adjust colors and fonts to match your brand."
                },
                {
                  icon: <Image className="h-10 w-10 text-blue-500" />,
                  title: "Perfect Sizing",
                  description: "All templates are preset to the ideal dimensions for each social media platform."
                },
                {
                  icon: <Share2 className="h-10 w-10 text-blue-500" />,
                  title: "Cross-Platform Ready",
                  description: "Create banners for Facebook, Twitter, LinkedIn, YouTube and more in minutes."
                },
                {
                  icon: <Download className="h-10 w-10 text-blue-500" />,
                  title: "Easy Export",
                  description: "Download your banners in high-resolution formats ready for immediate upload."
                },
                {
                  icon: <Layout className="h-10 w-10 text-blue-500" />,
                  title: "Brand Consistency",
                  description: "Save your brand colors and assets to maintain consistency across all your banners."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Social Media Banners?</h2>
                <p className="text-xl mb-8 opacity-90">Make professional banners that grab attention and boost your social media presence.</p>
                <Link to="/contact-us?subject=Interest%20in%20Social%20Banner%20Maker">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Try It Free
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">No credit card required • Get started in minutes</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialBannerMaker;
