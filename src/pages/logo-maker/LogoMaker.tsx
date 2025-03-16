
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, PenTool, Palette, Layout, ChevronRight, Sparkles, PaintBucket, Download, Undo2, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import LogoGeneratorTool from "./components/LogoGeneratorTool";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LogoMaker = () => {
  const logoMakerImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <PenTool className="w-12 h-12 text-pink-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            LOGO
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
              <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-3 rounded-full bg-gray-300"></div>
              <div className="w-12 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Logo Maker | Create Professional Logos in Seconds</title>
        <meta name="description" content="Design unique, professional logos for your brand in seconds with our AI-powered logo generator. No design skills required. Customize colors, fonts, and styles." />
        <meta name="keywords" content="logo maker, AI logo generator, professional logo design, brand logo, custom logo, business logo, logo creation tool" />
        <meta property="og:title" content="AI Logo Maker | Create Professional Logos in Seconds" />
        <meta property="og:description" content="Design unique, professional logos for your brand in seconds with our AI-powered logo generator. No design skills required." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Logo Maker | Create Professional Logos in Seconds" />
        <meta name="twitter:description" content="Design unique, professional logos for your brand in seconds with our AI-powered logo generator. No design skills required." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="AI Logo Generator"
          title="Create"
          highlightedText="Professional Logos"
          restOfTitle="in Seconds"
          description="Generate unique, customizable logos for your business or project with our AI-powered logo maker. No design skills required."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "AI-Generated" },
            { icon: <Check className="h-4 w-4" />, text: "Fully Customizable" },
            { icon: <Check className="h-4 w-4" />, text: "Commercial Use" }
          ]}
          image={logoMakerImage}
          bgColor="bg-blue-900"
          textColor="text-white"
        />

        {/* Logo Generator Tool Section */}
        <section className="py-16 bg-slate-50" id="generator">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Logo</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tell us about your brand and let our AI generate the perfect logo for you
              </p>
            </div>
            
            <LogoGeneratorTool />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Our AI logo generator makes creating a professional logo easier than ever.
              Follow these simple steps to get your perfect logo.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Describe Your Brand</h3>
                <p className="text-gray-600">
                  Tell us about your business and the style of logo you're looking for.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Generate Options</h3>
                <p className="text-gray-600">
                  Our AI will create multiple logo options based on your description.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Customize & Download</h3>
                <p className="text-gray-600">
                  Fine-tune your favorite logo and download in multiple formats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful Logo Design Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to create the perfect logo for your brand
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="h-10 w-10 text-purple-500" />,
                  title: "AI-Powered Generation",
                  description: "Our advanced AI creates unique, professional logos based on your brand description."
                },
                {
                  icon: <Palette className="h-10 w-10 text-pink-500" />,
                  title: "Custom Color Palettes",
                  description: "Choose from trending color combinations or create your own to match your brand identity."
                },
                {
                  icon: <Layout className="h-10 w-10 text-indigo-500" />,
                  title: "Multiple Layouts",
                  description: "Explore different logo arrangements including stacked, horizontal, and circular designs."
                },
                {
                  icon: <PaintBucket className="h-10 w-10 text-blue-500" />,
                  title: "Font Customization",
                  description: "Access premium fonts and typographic settings to perfect your logo's text elements."
                },
                {
                  icon: <Download className="h-10 w-10 text-emerald-500" />,
                  title: "High-Quality Exports",
                  description: "Download your logo in multiple formats including SVG, PNG, and PDF for any use case."
                },
                {
                  icon: <Undo2 className="h-10 w-10 text-amber-500" />,
                  title: "Unlimited Revisions",
                  description: "Make as many changes as you need until your logo is exactly how you want it."
                },
                {
                  icon: <Layers className="h-10 w-10 text-red-500" />,
                  title: "Industry-Specific Designs",
                  description: "Get logo suggestions tailored to your specific industry and audience."
                },
                {
                  icon: <PenTool className="h-10 w-10 text-teal-500" />,
                  title: "Icon Library",
                  description: "Access thousands of professional icons and symbols to enhance your logo design."
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
                  <div className="mb-4 bg-gray-50 p-3 rounded-full inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Common questions about our AI Logo Maker</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does the AI logo generator work?",
                  answer: "Our AI logo generator uses advanced machine learning algorithms to create unique, professional logos based on your business information. Simply enter details about your business, select your preferences, and our AI will generate multiple logo options for you to choose from and customize."
                },
                {
                  question: "Can I edit my logo after it's generated?",
                  answer: "Absolutely! After generating your logos, you can select any design to customize further. Our editor lets you modify colors, fonts, layouts, and more. You can make unlimited edits until your logo is perfect."
                },
                {
                  question: "What file formats will I receive?",
                  answer: "You can download your finished logo in multiple formats including SVG (vector), PNG (with transparent background), JPG, and PDF. Vector formats like SVG allow you to scale your logo to any size without losing quality."
                },
                {
                  question: "Do I own the rights to my logo?",
                  answer: "Yes, you retain full ownership rights to any logo you create using our platform. Your logos are 100% yours to use for any commercial or personal purpose."
                },
                {
                  question: "Is there a limit to how many logos I can generate?",
                  answer: "Our free plan allows you to generate a limited number of logos per month. For unlimited logo generation and access to premium features, check out our affordable subscription plans."
                },
                {
                  question: "Can I use my logo for commercial purposes?",
                  answer: "Yes! All logos created on our platform can be used for any commercial purpose, including business branding, marketing materials, websites, and merchandise."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Perfect Logo?</h2>
                <p className="text-xl mb-8 opacity-90">Start building your brand identity with a professional logo in just minutes.</p>
                <Link to="#generator">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Create Your Logo Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">No credit card required • Get started in minutes</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LogoMaker;
