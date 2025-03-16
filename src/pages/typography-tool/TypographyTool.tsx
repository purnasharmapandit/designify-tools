import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Type, Sliders, Palette, LayoutGrid, Sparkles, Wand2, FileText, TextSelect } from "lucide-react";
import { Link } from "react-router-dom";

const TypographyTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 overflow-hidden w-full">
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
                  <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-5">
                    Advanced Typography Design
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                    Perfect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Typography</span> with Precision
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 max-w-lg">
                    Our Typography Tool gives you complete control over fonts, spacing, alignment, and more for beautiful, readable text in all your designs.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <Type className="h-4 w-4" />, text: "500+ Fonts" },
                      { icon: <Sliders className="h-4 w-4" />, text: "Advanced Controls" },
                      { icon: <Palette className="h-4 w-4" />, text: "Custom Colors" },
                      { icon: <LayoutGrid className="h-4 w-4" />, text: "Grid Layout" },
                      { icon: <Sparkles className="h-4 w-4" />, text: "AI Suggestions" }
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative mx-auto"
                >
                  <div className="relative">
                    {/* Typography Tool UI Mockup */}
                    <div className="absolute -z-10 w-full h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-6 w-full max-w-md">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                          <Type className="h-6 w-6 text-indigo-600 mr-2" />
                          <span className="font-bold">Typography Tool</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          className="h-12 bg-indigo-50 rounded-lg p-3"
                        >
                          <div className="h-full flex items-center">
                            <span className="font-serif text-xl text-indigo-800">Aa</span>
                            <span className="text-gray-400 text-xs ml-3">Font Family: Georgia</span>
                            <div className="ml-auto w-4 h-4 rounded-full bg-indigo-500"></div>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="space-y-2"
                        >
                          <div className="w-full h-10 rounded-lg bg-gray-100 relative">
                            <div className="absolute left-0 top-0 h-full w-3/4 bg-indigo-500 rounded-lg"></div>
                            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-2 border-indigo-500"></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Font Size</span>
                            <span>32px</span>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-600">Line Height</span>
                          <div className="flex space-x-2">
                            <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                              <span className="text-xs">1.0</span>
                            </div>
                            <div className="h-8 w-8 rounded bg-indigo-100 flex items-center justify-center">
                              <span className="text-xs font-bold text-indigo-700">1.5</span>
                            </div>
                            <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                              <span className="text-xs">2.0</span>
                            </div>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                          className="space-y-2"
                        >
                          <div className="h-24 bg-white border border-gray-200 rounded-lg p-3">
                            <div className="h-3 w-full bg-gray-200 rounded-full mb-2"></div>
                            <div className="h-3 w-4/5 bg-gray-200 rounded-full mb-2"></div>
                            <div className="h-3 w-3/5 bg-gray-200 rounded-full"></div>
                          </div>
                        </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Typography Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Take complete control of your text with our advanced typography tool</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TextSelect className="h-10 w-10 text-indigo-500" />,
                  title: "Font Selection",
                  description: "Access over 500 carefully curated fonts, including popular Google Fonts and premium typography options."
                },
                {
                  icon: <Sliders className="h-10 w-10 text-indigo-500" />,
                  title: "Fine Controls",
                  description: "Adjust kerning, leading, tracking, and other typographic details with precision controls."
                },
                {
                  icon: <Wand2 className="h-10 w-10 text-indigo-500" />,
                  title: "Smart Formatting",
                  description: "Get AI-powered suggestions for font pairings, size ratios, and hierarchy to improve readability."
                },
                {
                  icon: <LayoutGrid className="h-10 w-10 text-indigo-500" />,
                  title: "Grid Systems",
                  description: "Use built-in baseline grids and modular scales to create harmonious text layouts."
                },
                {
                  icon: <Palette className="h-10 w-10 text-indigo-500" />,
                  title: "Color Management",
                  description: "Apply and manage text colors with contrast checking to ensure accessibility standards."
                },
                {
                  icon: <FileText className="h-10 w-10 text-indigo-500" />,
                  title: "Template Library",
                  description: "Start with typography templates designed by professionals for various industries and needs."
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect Typography Is Coming Soon</h2>
                <p className="text-xl mb-8 opacity-90">Sign up to be notified when our Typography Tool launches and get exclusive early access.</p>
                <Link to="/contact-us?subject=Interest%20in%20Typography%20Tool">
                  <Button 
                    size="lg" 
                    className="bg-white text-indigo-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
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

export default TypographyTool;
