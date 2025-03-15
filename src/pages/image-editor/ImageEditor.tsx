
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoonBanner from "@/components/ComingSoonBanner";
import { Button } from "@/components/ui/button";
import { ChevronRight, Image, PenTool, Crop, SlidersHorizontal, Wand2, Layers, Paintbrush, FileImage, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ImageEditor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

          <div className="px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-800 font-medium text-sm mb-5">
                    Professional Image Editing
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Edit Images Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Professional</span> Designer
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-lg">
                    Our powerful yet intuitive Image Editor gives you all the tools you need to enhance, transform, and perfect your images with ease.
                  </p>
                  
                  <ComingSoonBanner toolName="Image Editor" expectedReleaseDate="Q3 2023" />
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <Crop className="h-4 w-4" />, text: "Cropping & Resize" },
                      { icon: <SlidersHorizontal className="h-4 w-4" />, text: "Photo Adjustment" },
                      { icon: <Wand2 className="h-4 w-4" />, text: "AI Enhancement" },
                      { icon: <Layers className="h-4 w-4" />, text: "Layer Support" },
                      { icon: <FileImage className="h-4 w-4" />, text: "Multiple Formats" }
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
                    {/* Image Editor UI Mockup */}
                    <div className="absolute -z-10 w-full h-80 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    <div className="relative bg-gray-900 rounded-xl shadow-xl overflow-hidden w-full max-w-md">
                      {/* Editor Header */}
                      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center">
                          <Image className="h-5 w-5 text-violet-400 mr-2" />
                          <span className="text-white text-sm font-medium">Image Editor</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      
                      <div className="flex h-64">
                        {/* Toolbar */}
                        <div className="w-12 bg-gray-800 flex flex-col items-center py-3 space-y-4">
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="h-8 w-8 rounded-lg bg-violet-500 flex items-center justify-center"
                          >
                            <Crop className="h-4 w-4 text-white" />
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="h-8 w-8 rounded-lg bg-gray-700 flex items-center justify-center"
                          >
                            <SlidersHorizontal className="h-4 w-4 text-gray-400" />
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="h-8 w-8 rounded-lg bg-gray-700 flex items-center justify-center"
                          >
                            <PenTool className="h-4 w-4 text-gray-400" />
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="h-8 w-8 rounded-lg bg-gray-700 flex items-center justify-center"
                          >
                            <Paintbrush className="h-4 w-4 text-gray-400" />
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="h-8 w-8 rounded-lg bg-gray-700 flex items-center justify-center"
                          >
                            <Wand2 className="h-4 w-4 text-gray-400" />
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="h-8 w-8 rounded-lg bg-gray-700 flex items-center justify-center"
                          >
                            <Layers className="h-4 w-4 text-gray-400" />
                          </motion.div>
                        </div>
                        
                        {/* Main Editor Area */}
                        <div className="flex-1 bg-gray-700 p-4 flex items-center justify-center">
                          <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500">
                            {/* Crop Overlay Mockup */}
                            <div className="absolute inset-0 border-2 border-dashed border-white opacity-75"></div>
                            <div className="absolute w-4 h-4 bg-white rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute w-4 h-4 bg-white rounded-full top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute w-4 h-4 bg-white rounded-full bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
                            <div className="absolute w-4 h-4 bg-white rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
                            
                            <Image className="h-16 w-16 text-white opacity-50" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Controls Bar */}
                      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                        <div className="flex space-x-3">
                          <div className="h-7 w-16 bg-gray-700 rounded-md flex items-center justify-center">
                            <span className="text-gray-400 text-xs">16:9</span>
                          </div>
                          <div className="h-7 w-16 bg-gray-700 rounded-md flex items-center justify-center">
                            <span className="text-gray-400 text-xs">1080p</span>
                          </div>
                        </div>
                        <Button variant="default" size="sm" className="bg-violet-600 hover:bg-violet-700">
                          Apply
                        </Button>
                      </div>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Editing Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create stunning, professional images</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Crop className="h-10 w-10 text-violet-500" />,
                  title: "Precision Cropping",
                  description: "Crop, resize, and transform your images with pixel-perfect accuracy using our intuitive cropping tools."
                },
                {
                  icon: <SlidersHorizontal className="h-10 w-10 text-violet-500" />,
                  title: "Advanced Adjustments",
                  description: "Fine-tune colors, exposure, contrast, and more with professional-grade adjustment controls."
                },
                {
                  icon: <Wand2 className="h-10 w-10 text-violet-500" />,
                  title: "AI Enhancement",
                  description: "Let our AI automatically enhance your images, fix imperfections, and optimize quality with one click."
                },
                {
                  icon: <Layers className="h-10 w-10 text-violet-500" />,
                  title: "Layer-Based Editing",
                  description: "Work with multiple layers for complex compositions, masks, and non-destructive editing workflows."
                },
                {
                  icon: <Paintbrush className="h-10 w-10 text-violet-500" />,
                  title: "Creative Tools",
                  description: "Add text, shapes, filters, and effects to transform your images into works of art."
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-violet-500" />,
                  title: "Smart Selection",
                  description: "Precisely select objects, remove backgrounds, and make targeted adjustments with AI-powered selection tools."
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
        <section className="py-20 bg-gradient-to-br from-violet-50 to-fuchsia-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Images</h2>
                <p className="text-xl mb-8 opacity-90">Join our waitlist to be the first to know when our Image Editor launches and get exclusive early access.</p>
                <Link to="/contact-us?subject=Interest%20in%20Image%20Editor">
                  <Button 
                    size="lg" 
                    className="bg-white text-violet-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Join the Waitlist
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">Early access members receive special pricing</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImageEditor;
