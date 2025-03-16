
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Presentation, LayoutGrid, Play, FileText, Palette, LineChart, Clock, Sparkles, Layers, Check, Download, ZoomIn, Brain, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";
import ToolsFAQSection from "@/components/tools/ToolsFAQSection";

const PresentationMaker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Presentation Maker | Create Stunning Slide Decks in Minutes</title>
        <meta name="description" content="Transform your ideas into professional presentations with our AI-powered slide maker. Create engaging presentations for business, education, and social media with beautiful templates." />
        <meta name="keywords" content="presentation maker, slide deck creator, AI presentations, business slides, presentation templates, pitch deck, animated slides" />
        <meta property="og:title" content="AI Presentation Maker | Create Stunning Slide Decks in Minutes" />
        <meta property="og:description" content="Transform your ideas into professional presentations with our AI-powered slide maker. Perfect for business pitches, educational content, and social media." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Presentation Maker | Create Stunning Slide Decks in Minutes" />
        <meta name="twitter:description" content="Transform your ideas into professional presentations with our AI-powered slide maker. Perfect for business pitches, educational content, and social media." />
      </Helmet>
      
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
        
        {/* How It Works Section - New Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Presentations in Three Simple Steps</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our intuitive platform makes it easy to design professional presentations</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Choose a Template",
                  description: "Browse our extensive library of professionally designed templates and select one that matches your needs and style.",
                  icon: <LayoutGrid className="h-10 w-10 text-emerald-500" />
                },
                {
                  step: "02",
                  title: "Add Your Content",
                  description: "Insert your text, images, charts, and videos. Our AI assistant can help generate content and suggest improvements.",
                  icon: <FileText className="h-10 w-10 text-emerald-500" />
                },
                {
                  step: "03",
                  title: "Customize & Download",
                  description: "Apply your branding, adjust layouts, and customize animations. Then download or share your presentation with your audience.",
                  icon: <Download className="h-10 w-10 text-emerald-500" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 h-full">
                    <div className="text-5xl font-bold text-emerald-100 mb-4">{item.step}</div>
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                      <div className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <ChevronRight className="h-6 w-6 text-emerald-500" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Advanced Features Section - New Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Presentation Capabilities</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Take your presentations to the next level with these powerful features</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="h-10 w-10 text-white" />,
                  title: "AI Content Generation",
                  description: "Generate professional slide content with our AI assistant. Transform bullet points into engaging narratives.",
                  bgGradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
                  textColor: "text-white"
                },
                {
                  icon: <ZoomIn className="h-10 w-10 text-white" />,
                  title: "Interactive Elements",
                  description: "Add interactive elements like clickable regions, embedded videos, and animated transitions to engage your audience.",
                  bgGradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
                  textColor: "text-white"
                },
                {
                  icon: <Users className="h-10 w-10 text-white" />,
                  title: "Collaboration Tools",
                  description: "Work together with your team in real-time with comments, suggestions, and version history tracking.",
                  bgGradient: "bg-gradient-to-br from-purple-500 to-pink-500",
                  textColor: "text-white"
                },
                {
                  icon: <Code className="h-10 w-10 text-white" />,
                  title: "Export Options",
                  description: "Export your presentations in multiple formats including PDF, PowerPoint, Google Slides, or as a standalone web presentation.",
                  bgGradient: "bg-gradient-to-br from-orange-500 to-amber-500",
                  textColor: "text-white"
                },
                {
                  icon: <Palette className="h-10 w-10 text-white" />,
                  title: "Design System Integration",
                  description: "Connect to your company's design system to ensure all presentations follow your brand guidelines perfectly.",
                  bgGradient: "bg-gradient-to-br from-rose-500 to-red-500",
                  textColor: "text-white"
                },
                {
                  icon: <LineChart className="h-10 w-10 text-white" />,
                  title: "Analytics Dashboard",
                  description: "Track presentation performance with viewer analytics, engagement metrics, and audience feedback tools.",
                  bgGradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
                  textColor: "text-white"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-6 shadow-sm ${feature.bgGradient} ${feature.textColor}`}
                >
                  <div className="p-3 rounded-full w-fit mb-4 bg-white/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="opacity-90">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use Cases Section - New Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for Every Presentation Need</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">How professionals use our presentation maker</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Pitches",
                  description: "Create compelling pitch decks that win over investors and clients with professional designs and data visualizations.",
                  features: ["Investor pitch templates", "Financial chart builders", "Executive summary layouts"]
                },
                {
                  title: "Education & Training",
                  description: "Design engaging lessons and training materials that keep students and employees focused and interested.",
                  features: ["Interactive quiz features", "Step-by-step tutorials", "Visual learning aids"]
                },
                {
                  title: "Marketing Presentations",
                  description: "Showcase your products, campaigns, and results with eye-catching slides that communicate your value proposition.",
                  features: ["Product showcase templates", "Campaign result layouts", "Brand storytelling formats"]
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
                        <Check className="h-4 w-4 text-emerald-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section - New Section */}
        <section className="py-16 bg-white">
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
                  Everything you need to know about our Presentation Maker
                </p>
              </motion.div>
            </div>

            <div className="mt-8 max-w-4xl mx-auto">
              <ToolsFAQSection />
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
