import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Smartphone, Monitor, Tablet, Laptop, Clock, Image, RotateCw, Download, ZoomIn, Sparkles, Check, BellPlus } from "lucide-react";
import { Link } from "react-router-dom";
import ToolsFAQSection from "@/components/tools/ToolsFAQSection";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const MockupGenerator = () => {
  const mockupImage = (
    <div className="relative">
      <motion.div 
        className="absolute w-72 h-56 bg-gray-900 rounded-t-lg overflow-hidden"
        animate={{ rotate: [2, 2] }}
        style={{ top: '0%', left: '15%', zIndex: 5 }}
      >
        <div className="h-full p-2">
          <div className="h-full w-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">Your Website Design</span>
          </div>
        </div>
        <div className="h-2 w-full bg-gray-800"></div>
        <div className="h-12 w-20 bg-gray-800 mx-auto rounded-b-lg"></div>
      </motion.div>
      
      <motion.div 
        className="absolute w-24 h-48 bg-black rounded-2xl overflow-hidden border-4 border-black"
        animate={{ rotate: [-5, -5] }}
        style={{ top: '20%', left: '5%', zIndex: 10 }}
      >
        <div className="h-full w-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center p-2">
          <span className="text-white font-bold text-[8px] text-center">Mobile App UI</span>
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="relative w-64 h-48 bg-gray-800 rounded-xl overflow-hidden border-8 border-gray-800 z-1"
        animate={{ rotate: [4, 4] }}
        style={{ marginLeft: '30%', marginTop: '10%' }}
      >
        <div className="h-full w-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">Tablet Design</span>
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-700"></div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mockup Generator | Create Professional Device & Product Mockups in Seconds</title>
        <meta name="description" content="Transform your designs into realistic mockups with our AI-powered mockup generator. Create device screens, product displays, and marketing materials with just a few clicks." />
        <meta name="keywords" content="mockup generator, device mockups, product mockups, 3D mockups, presentation mockups, marketing mockups, realistic mockups" />
        <meta property="og:title" content="Mockup Generator | Create Professional Device & Product Mockups in Seconds" />
        <meta property="og:description" content="Transform your designs into realistic mockups with our AI-powered mockup generator. Perfect for presentations, social media, and marketing materials." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mockup Generator | Create Professional Device & Product Mockups in Seconds" />
        <meta name="twitter:description" content="Transform your designs into realistic mockups with our AI-powered mockup generator. Perfect for presentations, social media, and marketing materials." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Realistic Product Mockups"
          title="Create Professional"
          highlightedText="Mockups"
          restOfTitle="Instantly"
          description="Transform your designs into realistic product mockups for presentations, marketing materials, and more with just a few clicks."
          features={[
            { icon: <Smartphone className="h-4 w-4" />, text: "Device Mockups" },
            { icon: <Image className="h-4 w-4" />, text: "Product Mockups" },
            { icon: <RotateCw className="h-4 w-4" />, text: "3D Rendering" },
            { icon: <Download className="h-4 w-4" />, text: "High-Res Export" },
            { icon: <Clock className="h-4 w-4" />, text: "Time-Saving" }
          ]}
          image={mockupImage}
          bgColor="bg-blue-900"
          textColor="text-white"
          actionButton={
            <Link to="/contact-us?subject=Mockup%20Generator%20Waitlist">
              <Button 
                size="lg" 
                className="rounded-full px-8 font-medium"
              >
                Join Waitlist <BellPlus className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          }
        />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mockup Generator Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create stunning, professional mockups</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Monitor className="h-10 w-10 text-cyan-500" />,
                  title: "Device Mockups",
                  description: "Showcase your designs on the latest phones, tablets, laptops, and desktop screens with realistic device mockups."
                },
                {
                  icon: <Image className="h-10 w-10 text-cyan-500" />,
                  title: "Product Mockups",
                  description: "Display your designs on physical products like business cards, brochures, t-shirts, mugs, and more."
                },
                {
                  icon: <RotateCw className="h-10 w-10 text-cyan-500" />,
                  title: "3D Perspective",
                  description: "Adjust angles, perspective, and rotation to create the perfect view of your design in context."
                },
                {
                  icon: <ZoomIn className="h-10 w-10 text-cyan-500" />,
                  title: "Scene Creator",
                  description: "Build complete scenes with multiple mockups, backgrounds, and props for compelling presentations."
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-cyan-500" />,
                  title: "Smart Shadows",
                  description: "Add realistic shadows and lighting effects to make your mockups look professional and authentic."
                },
                {
                  icon: <Download className="h-10 w-10 text-cyan-500" />,
                  title: "Export Options",
                  description: "Download your mockups in various formats and resolutions for different use cases and platforms."
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
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create stunning mockups in three simple steps</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: <Image className="h-12 w-12 text-cyan-500" />,
                  title: "1. Upload Your Design",
                  description: "Upload your design file (PNG, JPG, SVG) or paste a URL. Our system will automatically detect the design dimensions and prepare it for placement."
                },
                {
                  icon: <Monitor className="h-12 w-12 text-cyan-500" />,
                  title: "2. Choose Your Mockup",
                  description: "Browse our library of device and product mockups. Select from smartphones, tablets, laptops, desktop displays, print materials, apparel, and more."
                },
                {
                  icon: <ZoomIn className="h-12 w-12 text-cyan-500" />,
                  title: "3. Customize & Download",
                  description: "Adjust the perspective, shadows, backgrounds, and other settings. Then download your finished mockup in high resolution for your presentations or marketing materials."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for Every Presentation</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">How professionals use our mockups to showcase their designs</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "UI/UX Designers",
                  description: "Present your app and website designs in context to clients and stakeholders with realistic device mockups.",
                  features: ["App screen presentations", "Responsive design demonstrations", "Portfolio showcases"]
                },
                {
                  title: "Marketing Teams",
                  description: "Create eye-catching visuals for social media, advertising campaigns, and marketing materials.",
                  features: ["Social media campaigns", "Digital advertising", "Product launches"]
                },
                {
                  title: "E-commerce Businesses",
                  description: "Display your products in attractive, professional contexts to boost conversion rates.",
                  features: ["Product photography enhancement", "Online store images", "Promotional materials"]
                }
              ].map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Check className="h-4 w-4 text-cyan-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Everything you need to know about our Mockup Generator
                </p>
              </motion.div>
            </div>

            <ToolsFAQSection />
          </div>
        </section>
        
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Professional Mockups?</h2>
                <p className="text-xl mb-8 opacity-90">Join our waitlist to be the first to know when our Mockup Generator launches and get exclusive early access.</p>
                <Link to="/contact-us?subject=Interest%20in%20Mockup%20Generator">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Join the Waitlist
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">No credit card required • Be first in line</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MockupGenerator;
