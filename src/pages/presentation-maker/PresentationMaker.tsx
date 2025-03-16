import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Presentation, LayoutGrid, Play, FileText, Palette, LineChart, Clock, Sparkles, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const PresentationMaker = () => {
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
                  <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-5">
                    Beautiful Presentations Made Easy
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                    Create Stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Presentations</span> in Minutes
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 max-w-lg">
                    Our Presentation Maker helps you create professional, engaging presentations with ready-to-use templates, beautiful graphics, and smart AI assistance.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <LayoutGrid className="h-4 w-4" />, text: "200+ Templates" },
                      { icon: <Play className="h-4 w-4" />, text: "Interactive Slides" },
                      { icon: <FileText className="h-4 w-4" />, text: "AI Content Writing" },
                      { icon: <Palette className="h-4 w-4" />, text: "Theme Builder" },
                      { icon: <LineChart className="h-4 w-4" />, text: "Data Visualizations" }
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
                    {/* Presentation Slide Mockups */}
                    <div className="absolute -z-10 w-full h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    {/* Main Slide */}
                    <motion.div 
                      className="relative bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden aspect-[16/9] w-full max-w-md z-20"
                      animate={{ rotateY: [0, 0] }}
                    >
                      <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                      <div className="p-6">
                        <div className="h-8 w-2/3 bg-emerald-600 rounded-sm mb-4"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded-sm mb-2"></div>
                        <div className="h-4 w-4/6 bg-gray-200 rounded-sm mb-6"></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="aspect-square bg-teal-100 rounded-md flex items-center justify-center">
                            <LineChart className="h-8 w-8 text-teal-600" />
                          </div>
                          <div className="aspect-square bg-teal-100 rounded-md flex items-center justify-center">
                            <LineChart className="h-8 w-8 text-teal-600" />
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div className="h-6 w-24 bg-teal-100 rounded-full"></div>
                          <div className="flex space-x-2">
                            <div className="h-6 w-6 rounded-full bg-emerald-500"></div>
                            <div className="h-6 w-6 rounded-full bg-cyan-500"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Background Slide 1 */}
                    <motion.div 
                      className="absolute bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden aspect-[16/9] w-4/5 max-w-sm"
                      animate={{ rotate: [-6, -6] }}
                      style={{ top: '10%', left: '-15%', zIndex: 10 }}
                    >
                      <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                      <div className="p-4">
                        <div className="h-6 w-1/2 bg-blue-600 rounded-sm mb-3"></div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <div className="h-3 w-full bg-gray-200 rounded-sm"></div>
                            <div className="h-3 w-full bg-gray-200 rounded-sm"></div>
                            <div className="h-3 w-3/4 bg-gray-200 rounded-sm"></div>
                          </div>
                          <div className="aspect-square bg-blue-100 rounded-md flex items-center justify-center">
                            <Presentation className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Background Slide 2 */}
                    <motion.div 
                      className="absolute bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden aspect-[16/9] w-4/5 max-w-sm"
                      animate={{ rotate: [8, 8] }}
                      style={{ top: '25%', right: '-15%', zIndex: 10 }}
                    >
                      <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <div className="p-4">
                        <div className="h-6 w-2/3 bg-purple-600 rounded-sm mb-3"></div>
                        <div className="aspect-[21/9] bg-purple-100 rounded-md mb-3 flex items-center justify-center">
                          <LayoutGrid className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-4 w-4 rounded-full bg-pink-500"></div>
                          <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                          <div className="h-4 w-4 rounded-full bg-indigo-500"></div>
                        </div>
                      </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Presentation Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create stunning presentations that engage your audience</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <LayoutGrid className="h-10 w-10 text-emerald-500" />,
                  title: "Professional Templates",
                  description: "Start with beautifully designed templates for any purpose, from business presentations to educational content."
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
                  title: "AI Content Assistant",
                  description: "Get AI-powered suggestions for text, structure, and images to create compelling presentations faster."
                },
                {
                  icon: <Palette className="h-10 w-10 text-emerald-500" />,
                  title: "Brand Customization",
                  description: "Apply your brand colors, fonts, and logos with one click to maintain consistent branding."
                },
                {
                  icon: <LineChart className="h-10 w-10 text-emerald-500" />,
                  title: "Data Visualization",
                  description: "Create beautiful charts and graphs that make your data easy to understand and visually appealing."
                },
                {
                  icon: <Layers className="h-10 w-10 text-emerald-500" />,
                  title: "Smart Layouts",
                  description: "Our intelligent layout system automatically arranges your content for optimal visual impact."
                },
                {
                  icon: <Clock className="h-10 w-10 text-emerald-500" />,
                  title: "Time-Saving Tools",
                  description: "Create professional presentations in minutes instead of hours with our intuitive editor."
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
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Presentations</h2>
                <p className="text-xl mb-8 opacity-90">Join the waitlist for our Presentation Maker and be among the first to create stunning, engaging presentations.</p>
                <Link to="/contact-us?subject=Interest%20in%20Presentation%20Maker">
                  <Button 
                    size="lg" 
                    className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Get Notified on Launch
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">Early access members will receive special discounts</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PresentationMaker;
