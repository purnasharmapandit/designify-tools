import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Layout, Image, Share2, MessageCircle, Users, Target, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMediaKit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0"></div>
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
                    Complete Social Media Graphics Suite
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Create Stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Social Media Graphics</span> in Seconds
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-lg">
                    Design professional graphics for all your social channels in one place. Save time with templates, maintain brand consistency, and boost engagement.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <Layout className="h-4 w-4" />, text: "Multiple Platforms" },
                      { icon: <Image className="h-4 w-4" />, text: "100+ Templates" },
                      { icon: <Share2 className="h-4 w-4" />, text: "Direct Sharing" },
                      { icon: <Sparkles className="h-4 w-4" />, text: "AI-Powered" },
                      { icon: <Target className="h-4 w-4" />, text: "Brand Consistency" }
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
                  className="relative mx-auto pt-10"
                >
                  <div className="relative">
                    {/* Social Media Post Mockups */}
                    <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    <motion.div 
                      className="absolute w-60 h-60 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                      animate={{ rotate: [8, 8] }}
                      style={{ top: '5%', left: '10%', zIndex: 1 }}
                    >
                      <div className="h-3 bg-gray-100 w-full"></div>
                      <div className="p-2">
                        <div className="h-36 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-md flex items-center justify-center">
                          <span className="text-white font-bold">Instagram</span>
                        </div>
                        <div className="mt-2 h-3 w-3/4 bg-gray-200 rounded-full"></div>
                        <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute w-72 h-40 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                      animate={{ rotate: [-4, -4] }}
                      style={{ top: '35%', left: '30%', zIndex: 2 }}
                    >
                      <div className="h-3 bg-gray-100 w-full"></div>
                      <div className="p-2">
                        <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center">
                          <span className="text-white font-bold">Facebook</span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
                          <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
                          <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="relative w-64 h-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10"
                      animate={{ rotate: [2, 2] }}
                      style={{ marginLeft: '25%' }}
                    >
                      <div className="h-3 bg-gray-100 w-full"></div>
                      <div className="p-2">
                        <div className="h-40 bg-gradient-to-br from-pink-400 to-red-500 rounded-md flex items-center justify-center">
                          <span className="text-white font-bold">Pinterest</span>
                        </div>
                        <div className="mt-2 flex items-center">
                          <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                          <div className="ml-2 h-3 w-20 bg-gray-200 rounded-full"></div>
                          <div className="ml-auto h-5 w-5 bg-gray-200 rounded-full"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Social Media Kit</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">One tool for all your social media design needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="h-10 w-10 text-purple-500" />,
                  title: "All Platforms Covered",
                  description: "Create graphics for Instagram, Facebook, Twitter, LinkedIn, Pinterest, and more with the right dimensions."
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-purple-500" />,
                  title: "AI-Powered Templates",
                  description: "Get design suggestions based on your brand and message. Our AI helps you create the perfect graphics."
                },
                {
                  icon: <Target className="h-10 w-10 text-purple-500" />,
                  title: "Brand Consistency",
                  description: "Save your brand colors, logos, and fonts to ensure consistent branding across all your social channels."
                },
                {
                  icon: <Users className="h-10 w-10 text-purple-500" />,
                  title: "Team Collaboration",
                  description: "Work together with your team members to create and manage social media assets in one place."
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
                  title: "Performance Insights",
                  description: "Track how your designs perform and get recommendations to improve engagement rates."
                },
                {
                  icon: <MessageCircle className="h-10 w-10 text-purple-500" />,
                  title: "Content Calendar",
                  description: "Plan and schedule your posts directly from the platform to all your social media accounts."
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
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Social Media Presence?</h2>
                <p className="text-xl mb-8 opacity-90">Join thousands of social media managers and creators who will use our platform to create stunning social media graphics.</p>
                <Link to="/contact-us?subject=Interest%20in%20Social%20Media%20Kit">
                  <Button 
                    size="lg" 
                    className="bg-white text-indigo-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Get Notified When We Launch
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">Be the first to know when our Social Media Kit launches</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialMediaKit;
