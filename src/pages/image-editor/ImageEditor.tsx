import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageEditorFAQs from "./components/FAQSection";
import { Button } from "@/components/ui/button";
import { ChevronRight, ImageIcon, Crop, Layers, Palette, PenTool, Sliders, Download, Sparkles, BellPlus } from "lucide-react";
import { Link } from "react-router-dom";
import ComingSoonBanner from "@/components/ComingSoonBanner";

const ImageEditor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Online Image Editor | Professional Photo Editing Tool</title>
        <meta name="description" content="Transform your photos with our powerful yet easy-to-use online image editor. Perfect for social media graphics, marketing materials, and personal projects. Try it for free!" />
        <meta property="og:title" content="Online Image Editor | Professional Photo Editing Tool" />
        <meta property="og:description" content="Transform your photos with our powerful yet easy-to-use online image editor. Perfect for social media graphics, marketing materials, and personal projects." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/image-editor-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Image Editor | Professional Photo Editing Tool" />
        <meta name="twitter:description" content="Transform your photos with our powerful yet easy-to-use online image editor. Perfect for social media graphics, marketing materials, and personal projects." />
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
                  <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-800 font-medium text-sm mb-5">
                    Professional Image Editing
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                    Edit Images Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Pro</span>
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 max-w-lg">
                    Transform your photos with our powerful yet easy-to-use image editor. Perfect for social media, marketing materials, and personal projects.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { icon: <Crop className="h-4 w-4" />, text: "Smart Cropping" },
                      { icon: <Layers className="h-4 w-4" />, text: "Layer Support" },
                      { icon: <Palette className="h-4 w-4" />, text: "Color Adjustment" },
                      { icon: <PenTool className="h-4 w-4" />, text: "Remove Objects" },
                      { icon: <Download className="h-4 w-4" />, text: "Multiple Export Formats" }
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
                    <Link to="/contact-us?subject=Image%20Editor%20Waitlist">
                      <Button 
                        size="lg" 
                        className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg h-14 px-8"
                      >
                        Join Waitlist
                        <BellPlus className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative mx-auto"
                >
                  <div className="relative">
                    <div className="absolute -z-10 w-full h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl transform rotate-6"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <ImageIcon className="h-5 w-5 text-pink-600 mr-2" />
                          <span className="font-bold text-gray-800">Image Editor</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-100 aspect-video rounded-lg overflow-hidden mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-70"></div>
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs py-1 px-2 rounded">1920 × 1080</div>
                      </div>
                      
                      <div className="flex justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <Crop className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <Sliders className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <Palette className="h-4 w-4 text-gray-500" />
                          </div>
                        </div>
                        <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                          AI Enhance
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Brightness</span>
                          <span className="text-xs text-gray-500">+15</span>
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need for perfect images</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Crop className="h-10 w-10 text-pink-500" />,
                  title: "Smart Cropping",
                  description: "Intelligent cropping tools that identify and preserve the important parts of your images."
                },
                {
                  icon: <Sliders className="h-10 w-10 text-pink-500" />,
                  title: "Advanced Adjustments",
                  description: "Fine-tune brightness, contrast, saturation, and more with precision controls."
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-pink-500" />,
                  title: "AI Enhancement",
                  description: "One-click image improvements powered by AI that make your photos look professional."
                },
                {
                  icon: <PenTool className="h-10 w-10 text-pink-500" />,
                  title: "Object Removal",
                  description: "Easily remove unwanted objects from your photos with our smart removal tool."
                },
                {
                  icon: <Layers className="h-10 w-10 text-pink-500" />,
                  title: "Layer Support",
                  description: "Work with multiple layers to create complex compositions and effects."
                },
                {
                  icon: <Download className="h-10 w-10 text-pink-500" />,
                  title: "Multiple Export Options",
                  description: "Export your images in various formats and sizes optimized for different purposes."
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
        
        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Image Editor Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to perfect images</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload Your Image",
                  description: "Import an image from your device, cloud storage, or choose from our stock library.",
                  icon: <ImageIcon className="h-10 w-10 text-pink-500" />
                },
                {
                  step: "02",
                  title: "Apply Edits",
                  description: "Use our intuitive tools to adjust, enhance, crop, or add effects to your image.",
                  icon: <Sliders className="h-10 w-10 text-pink-500" />
                },
                {
                  step: "03",
                  title: "Use AI Features",
                  description: "Let our AI suggest enhancements or automatically remove unwanted objects.",
                  icon: <Sparkles className="h-10 w-10 text-pink-500" />
                },
                {
                  step: "04",
                  title: "Download & Share",
                  description: "Save your edited image in multiple formats or share directly to social media.",
                  icon: <Download className="h-10 w-10 text-pink-500" />
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                    <div className="text-3xl font-bold text-pink-100 mb-4">{step.step}</div>
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-6 w-6 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for Every Need</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our image editor helps with all your visual content needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Social Media Content",
                  description: "Create eye-catching posts for Instagram, Facebook, Twitter, and more with perfect dimensions and filters.",
                  color: "from-pink-500 to-purple-500",
                  icon: <ImageIcon className="h-8 w-8 text-white" />
                },
                {
                  title: "Marketing Materials",
                  description: "Design professional visuals for your marketing campaigns, presentations, and promotional materials.",
                  color: "from-blue-500 to-cyan-500",
                  icon: <PenTool className="h-8 w-8 text-white" />
                },
                {
                  title: "Product Photography",
                  description: "Enhance product photos with background removal, lighting adjustments, and professional retouching.",
                  color: "from-amber-500 to-orange-500",
                  icon: <Crop className="h-8 w-8 text-white" />
                },
                {
                  title: "Personal Projects",
                  description: "Edit personal photos for albums, prints, or digital sharing with friends and family.",
                  color: "from-green-500 to-emerald-500",
                  icon: <Palette className="h-8 w-8 text-white" />
                },
                {
                  title: "Web Design",
                  description: "Create and edit images for websites, landing pages, and digital platforms with the right specifications.",
                  color: "from-violet-500 to-indigo-500",
                  icon: <Layers className="h-8 w-8 text-white" />
                },
                {
                  title: "Print Materials",
                  description: "Prepare images for brochures, flyers, business cards, and other printed materials with proper resolution.",
                  color: "from-rose-500 to-red-500",
                  icon: <Sliders className="h-8 w-8 text-white" />
                }
              ].map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full group-hover:shadow-md transition-all">
                    <div className={`mb-6 inline-flex p-3 rounded-lg bg-gradient-to-br ${useCase.color}`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our image editor</p>
            </div>
            
            <ImageEditorFAQs />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Images?</h2>
                <p className="text-xl mb-8 opacity-90">Join our waitlist to be the first to know when our Image Editor launches.</p>
                <Link to="/contact-us?subject=Interest%20in%20Image%20Editor">
                  <Button 
                    size="lg" 
                    className="bg-white text-pink-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Join the Waitlist
                    <BellPlus className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">No credit card required • Be first in line</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <div className="my-12">
          <ComingSoonBanner 
            toolName="Image Editor" 
            expectedReleaseDate="Q3 2023" 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImageEditor;
