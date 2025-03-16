import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Type, BookOpen, PenTool, Layers, Palette, Settings, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TypographyTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-24 overflow-hidden w-full">
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
                  <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 font-medium text-sm mb-5">
                    Master the Art of Typography
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                    Elevate Your Designs with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Perfect Typography</span>
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 max-w-lg">
                    Explore, experiment, and perfect your typography with our comprehensive tool. From font pairing to kerning, create visually stunning and readable text.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <Type className="h-4 w-4" />, text: "Font Pairing" },
                      { icon: <BookOpen className="h-4 w-4" />, text: "Readability Check" },
                      { icon: <PenTool className="h-4 w-4" />, text: "Kerning Adjustment" },
                      { icon: <Layers className="h-4 w-4" />, text: "Hierarchy Design" },
                      { icon: <Settings className="h-4 w-4" />, text: "Custom Presets" }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-white"
                      >
                        {feature.icon}
                        <span className="text-sm font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <Button 
                      size="lg" 
                      className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg h-14 px-8"
                    >
                      Start Designing Now
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative mx-auto"
                >
                  <div className="relative">
                    {/* Typography Tool Mockup */}
                    <div className="absolute -z-10 w-full h-80 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <Type className="h-5 w-5 text-orange-600 mr-2" />
                          <span className="font-bold text-gray-800">Typography Tool</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 opacity-70"></div>
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs py-1 px-2 rounded">Open Sans</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">Aa</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <BookOpen className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <Palette className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <Eye className="h-4 w-4 text-gray-500" />
                          </div>
                        </div>
                        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                          Font Pairing
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Font Size</span>
                          <span className="text-xs text-gray-500">16px</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore the powerful features that make typography design easy and effective</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Type className="h-10 w-10 text-orange-500" />,
                  title: "Font Explorer",
                  description: "Browse a vast library of fonts and discover the perfect typeface for your project."
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-orange-500" />,
                  title: "Readability Analyzer",
                  description: "Ensure your text is readable and accessible with our advanced readability scoring system."
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-orange-500" />,
                  title: "Smart Suggestions",
                  description: "Get intelligent suggestions for font pairings, sizes, and styles based on your content."
                },
                {
                  icon: <PenTool className="h-10 w-10 text-orange-500" />,
                  title: "Kerning & Tracking",
                  description: "Fine-tune the spacing between letters to achieve perfect visual balance and readability."
                },
                {
                  icon: <Layers className="h-10 w-10 text-orange-500" />,
                  title: "Hierarchy Design",
                  description: "Create clear visual hierarchies with font sizes, weights, and styles to guide your reader's eye."
                },
                {
                  icon: <Palette className="h-10 w-10 text-orange-500" />,
                  title: "Color Palette Integration",
                  description: "Experiment with color combinations to enhance the visual impact of your typography."
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
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock Your Typography Potential</h2>
                <p className="text-xl mb-8 opacity-90">Join our waitlist to be the first to experience the future of typography design.</p>
                <Link to="/contact-us?subject=Interest%20in%20Typography%20Tool">
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Join the Waitlist
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">No credit card required • Get early access</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TypographyTool;
