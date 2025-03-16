
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Camera, User, Image, Download, ImagePlus } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const HeadshotGenerator = () => {
  const headshotImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Camera className="w-12 h-12 text-blue-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
            <User className="w-16 h-16 text-gray-300" />
          </div>
          <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <Image className="w-16 h-16 text-blue-500" />
          </div>
          <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <User className="w-16 h-16 text-purple-500" />
          </div>
          <div className="aspect-square rounded-lg bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
            <User className="w-16 h-16 text-pink-500" />
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
          toolLabel="AI Headshot Generator"
          title="Create"
          highlightedText="Professional Headshots"
          restOfTitle="in Minutes"
          description="Transform your casual photos into professional headshots for LinkedIn, resumes, and business profiles using our AI-powered headshot generator."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Multiple Styles" },
            { icon: <Check className="h-4 w-4" />, text: "High Resolution" },
            { icon: <Check className="h-4 w-4" />, text: "Fast Generation" }
          ]}
          image={headshotImage}
          bgColor="bg-blue-900"
          textColor="text-white"
        />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn Your Selfies Into Professional Headshots</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get studio-quality headshots without hiring a photographer</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ImagePlus className="h-10 w-10 text-blue-500" />,
                  title: "Upload Your Photo",
                  description: "Start by uploading a clear photo of your face. We recommend using a front-facing photo with good lighting."
                },
                {
                  icon: <User className="h-10 w-10 text-blue-500" />,
                  title: "Choose Your Style",
                  description: "Select from various professional styles including corporate, creative, casual, and more."
                },
                {
                  icon: <Image className="h-10 w-10 text-blue-500" />,
                  title: "Generate Headshots",
                  description: "Our AI transforms your photo into professional headshots while maintaining your likeness."
                },
                {
                  icon: <Camera className="h-10 w-10 text-blue-500" />,
                  title: "Multiple Backgrounds",
                  description: "Choose from various professional backgrounds or use a solid color for maximum versatility."
                },
                {
                  icon: <Download className="h-10 w-10 text-blue-500" />,
                  title: "Download & Share",
                  description: "Download your headshots in high resolution for LinkedIn, your resume, or business profiles."
                },
                {
                  icon: <User className="h-10 w-10 text-blue-500" />,
                  title: "Privacy Focused",
                  description: "Your photos are processed securely and never shared with third parties or used for training."
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Professional Headshot?</h2>
                <p className="text-xl mb-8 opacity-90">Create professional headshots for your LinkedIn, resume, or business profile in minutes.</p>
                <Link to="/contact-us?subject=Interest%20in%20AI%20Headshot%20Generator">
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

export default HeadshotGenerator;
