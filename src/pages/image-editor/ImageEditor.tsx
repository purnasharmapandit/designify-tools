
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Image, Layers, Wand2, Sliders, Download, Share2, RotateCw, Scissors, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const ImageEditor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 z-0"></div>
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
                    Powerful Image Editing
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Edit <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Images</span> Like a Pro
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-lg">
                    Our Image Editor gives you professional editing tools that are powerful yet easy to use. Edit, enhance, and transform your images in minutes.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <Layers className="h-4 w-4" />, text: "Layer Support" },
                      { icon: <Wand2 className="h-4 w-4" />, text: "AI Enhancement" },
                      { icon: <Sliders className="h-4 w-4" />, text: "Advanced Filters" },
                      { icon: <Scissors className="h-4 w-4" />, text: "Precise Cropping" },
                      { icon: <PenTool className="h-4 w-4" />, text: "Drawing Tools" }
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
                    <div className="absolute -z-10 w-full h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-2 w-full max-w-md">
                      <div className="flex justify-between items-center mb-2 px-2">
                        <div className="flex items-center">
                          <Image className="h-5 w-5 text-violet-600 mr-2" />
                          <span className="font-medium text-sm">Image Editor</span>
                        </div>
                        <div className="flex space-x-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      
                      <div className="relative h-48 bg-gray-100 rounded-md overflow-hidden mb-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img 
                            src="/placeholder.svg" 
                            alt="Placeholder" 
                            className="h-32 w-32 opacity-50"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between px-2 py-1">
                        <div className="flex space-x-2">
                          <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <RotateCw className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <Scissors className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <Wand2 className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                        <div className="flex space-x-2">
                          <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <Download className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center">
                            <Share2 className="h-4 w-4 text-violet-600" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-2 px-2">
                        <div className="h-24 bg-gray-50 rounded-md border border-gray-100 p-2">
                          <div className="flex justify-between">
                            <span className="text-xs font-medium">Adjustments</span>
                            <button className="text-xs text-violet-600">Reset</button>
                          </div>
                          <div className="mt-2 space-y-2">
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span>Brightness</span>
                                <span>+15</span>
                              </div>
                              <div className="h-1 bg-gray-200 rounded-full">
                                <div className="h-full w-3/5 bg-violet-500 rounded-full"></div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span>Contrast</span>
                                <span>+5</span>
                              </div>
                              <div className="h-1 bg-gray-200 rounded-full">
                                <div className="h-full w-2/5 bg-violet-500 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                  icon: <Layers className="h-10 w-10 text-violet-500" />,
                  title: "Layer Management",
                  description: "Work with multiple layers to create complex compositions and non-destructive edits."
                },
                {
                  icon: <Wand2 className="h-10 w-10 text-violet-500" />,
                  title: "AI Enhancement",
                  description: "Let our AI enhance your photos automatically, fixing lighting, colors, and more."
                },
                {
                  icon: <Sliders className="h-10 w-10 text-violet-500" />,
                  title: "Pro Adjustments",
                  description: "Fine-tune exposure, contrast, saturation, and more with professional-grade controls."
                },
                {
                  icon: <PenTool className="h-10 w-10 text-violet-500" />,
                  title: "Selection Tools",
                  description: "Make precise selections with smart selection tools to edit specific parts of your image."
                },
                {
                  icon: <Scissors className="h-10 w-10 text-violet-500" />,
                  title: "Crop & Transform",
                  description: "Crop, rotate, and transform your images with precise controls and guides."
                },
                {
                  icon: <RotateCw className="h-10 w-10 text-violet-500" />,
                  title: "Filters & Effects",
                  description: "Apply professional filters and effects to transform the look and feel of your images."
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Images Today</h2>
                <p className="text-xl mb-8 opacity-90">Sign up to be notified when our Image Editor launches and get exclusive early access.</p>
                <Link to="/contact-us?subject=Interest%20in%20Image%20Editor">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Join the Waitlist
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">Early access members will receive special pricing</p>
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
