
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Smartphone, Monitor, Tablet, Laptop, Clock, Image, RotateCw, Download, ZoomIn, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const MockupGenerator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 overflow-hidden w-full">
          <div className="absolute inset-0 bg-blue-900 z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

          <div className="px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium text-sm mb-5">
                    Realistic Product Mockups
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Create Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Mockups</span> Instantly
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-lg">
                    Transform your designs into realistic product mockups for presentations, marketing materials, and more with just a few clicks.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <Smartphone className="h-4 w-4" />, text: "Device Mockups" },
                      { icon: <Image className="h-4 w-4" />, text: "Product Mockups" },
                      { icon: <RotateCw className="h-4 w-4" />, text: "3D Rendering" },
                      { icon: <Download className="h-4 w-4" />, text: "High-Res Export" },
                      { icon: <Clock className="h-4 w-4" />, text: "Time-Saving" }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                        className="bg-white shadow-sm px-4 py-2 rounded-full flex items-center gap-2"
                      >
                        {feature.icon}
                        <span className="text-sm font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative mx-auto"
                >
                  <div className="relative">
                    {/* Mockup Visualization */}
                    <div className="absolute -z-10 w-full h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    {/* Desktop Monitor Mockup */}
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
                    
                    {/* Smartphone Mockup */}
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
                    
                    {/* Tablet Mockup */}
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
                    
                    {/* Laptop Mockup */}
                    <motion.div 
                      className="absolute w-60 h-40 z-20"
                      animate={{ rotate: [-2, -2] }}
                      style={{ top: '55%', left: '25%' }}
                    >
                      <div className="h-36 bg-gray-300 rounded-t-lg overflow-hidden p-1">
                        <div className="h-full w-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm flex items-center justify-center">
                          <span className="text-white font-bold text-xs">Laptop Display</span>
                        </div>
                      </div>
                      <div className="h-4 bg-gray-400 rounded-b-lg"></div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
        
        {/* CTA Section */}
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
