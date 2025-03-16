
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Type, BookOpen, PenTool, Layers, Palette, Settings, Eye, Sparkles, Download, Monitor, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TypographyTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Typography Tool | Perfect Your Text Design with Professional Typography Controls</title>
        <meta name="description" content="Create stunning typography for your designs with our Typography Tool. Experiment with font pairings, adjust kerning, check readability, and design perfect text hierarchies." />
        <meta name="keywords" content="typography tool, font pairing, kerning adjustment, text design, typography hierarchy, readability checking, professional typography" />
        <meta property="og:title" content="Typography Tool | Perfect Your Text Design with Professional Typography Controls" />
        <meta property="og:description" content="Create stunning typography for your designs with our Typography Tool. Experiment with font pairings, adjust kerning, check readability, and design perfect text hierarchies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Typography Tool | Perfect Your Text Design with Professional Typography Controls" />
        <meta name="twitter:description" content="Create stunning typography for your designs with our Typography Tool. Experiment with font pairings, adjust kerning, check readability, and design perfect text hierarchies." />
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
        
        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Perfect your typography in three simple steps</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: <Type className="h-12 w-12 text-orange-500" />,
                  title: "1. Choose Your Fonts",
                  description: "Browse our extensive font library and select fonts that match your brand style. Our smart pairing system helps you find complementary typefaces."
                },
                {
                  icon: <PenTool className="h-12 w-12 text-orange-500" />,
                  title: "2. Adjust & Fine-Tune",
                  description: "Customize every aspect of your typography including size, spacing, alignment, and color. Use our readability tools to ensure optimal legibility."
                },
                {
                  icon: <Download className="h-12 w-12 text-orange-500" />,
                  title: "3. Export & Implement",
                  description: "Download your typography system in various formats, or get code snippets to implement directly in your website, app or design software."
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
        
        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Typography That Makes an Impact</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">How professionals use our typography tool to elevate their designs</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Monitor className="h-10 w-10 text-orange-500" />,
                  title: "Website Design",
                  description: "Create consistent, readable typography systems for your website that enhance user experience and brand identity.",
                  features: ["Content hierarchy", "Responsive text sizing", "Custom font implementation"]
                },
                {
                  icon: <Layers className="h-10 w-10 text-orange-500" />,
                  title: "Print Materials",
                  description: "Design typography for brochures, business cards, and other print materials that command attention.",
                  features: ["Print-optimized spacing", "High-contrast text", "Professional alignment"]
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-orange-500" />,
                  title: "Editorial Design",
                  description: "Craft elegant typography systems for magazines, books, and other long-form content.",
                  features: ["Column layout optimization", "Pull quote styling", "Reading comfort analysis"]
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
                  <div className="mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Check className="h-4 w-4 text-orange-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our Typography Tool
              </p>
            </motion.div>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Do I need design experience to use the Typography Tool?",
                  answer: "Not at all! Our Typography Tool is designed to be accessible for beginners while offering advanced features for professionals. The intuitive interface guides you through the process, and our AI-powered suggestions help you make design decisions even without formal design training."
                },
                {
                  question: "What types of fonts are available in the library?",
                  answer: "Our tool includes over 1,000 carefully curated fonts across various categories including serif, sans-serif, display, script, and monospace. We feature both popular Google Fonts and exclusive premium typefaces. For professional accounts, we also support custom font uploads."
                },
                {
                  question: "Can I save my typography settings for future use?",
                  answer: "Yes! You can save unlimited typography presets in your account. This makes it easy to maintain brand consistency across projects or experiment with different typography systems. Premium users can also share these presets with team members for collaborative design work."
                },
                {
                  question: "How does the readability analyzer work?",
                  answer: "Our readability analyzer examines multiple factors including font choice, size, line height, contrast, and character spacing. It provides a comprehensive score based on established typographic principles and accessibility guidelines, helping you create text that's easy to read across different devices and for users with various visual abilities."
                },
                {
                  question: "Can I export my typography styles to use in other design tools?",
                  answer: "Absolutely. You can export your typography styles in multiple formats including CSS for web development, style guides for design documentation, and format-specific exports for design software like Adobe XD, Figma, and Sketch. This ensures seamless integration with your existing design workflow."
                },
                {
                  question: "Is there a limit to how many typography projects I can create?",
                  answer: "Free accounts can create up to 3 typography projects. Premium subscribers enjoy unlimited project creation along with additional features like team sharing, advanced export options, and access to premium fonts."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
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
