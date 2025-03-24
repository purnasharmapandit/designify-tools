
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Camera, User, Image, Download, ImagePlus, Sparkle, Upload, Wand2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import HeadshotGeneratorTool from "./components/HeadshotGeneratorTool";

const HeadshotGenerator = () => {
  const beforeAfterImage = (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Row */}
          <div className="flex items-center justify-between gap-2 p-4 bg-white rounded-lg shadow-sm">
            {/* Before Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Before
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/0e9ae0d9-fe21-4c61-ad05-0efc6f3acdf5.png" 
                  alt="Original photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex flex-col items-center">
              <ArrowRight className="h-5 w-5 text-blue-500" />
              <div className="mt-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                AI
              </div>
            </div>
            
            {/* After Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                After
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/185c6d0e-b12b-4ba2-8374-2c1c5749fd1d.png" 
                  alt="AI enhanced professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Second Row */}
          <div className="flex items-center justify-between gap-2 p-4 bg-white rounded-lg shadow-sm">
            {/* Before Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Before
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/ad773163-0e7f-4f92-b290-351b0c446ab9.png" 
                  alt="Original photo 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex flex-col items-center">
              <ArrowRight className="h-5 w-5 text-blue-500" />
              <div className="mt-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                AI
              </div>
            </div>
            
            {/* After Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                After
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/1a43098b-f1ed-4275-9a64-0247d2c9441e.png" 
                  alt="AI enhanced professional headshot 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Third Row */}
          <div className="flex items-center justify-between gap-2 p-4 bg-white rounded-lg shadow-sm">
            {/* Before Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Before
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/881e4853-0a3c-4840-9265-a9ad83a5640a.png" 
                  alt="Original photo 3" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex flex-col items-center">
              <ArrowRight className="h-5 w-5 text-blue-500" />
              <div className="mt-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                AI
              </div>
            </div>
            
            {/* After Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                After
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/9631ab2d-6048-425b-b6ac-fd4d8e6181c0.png" 
                  alt="AI enhanced professional headshot 3" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Fourth Row */}
          <div className="flex items-center justify-between gap-2 p-4 bg-white rounded-lg shadow-sm">
            {/* Before Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Before
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/db9c3f39-be59-43e9-9fda-054848781b3d.png" 
                  alt="Original photo 4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex flex-col items-center">
              <ArrowRight className="h-5 w-5 text-blue-500" />
              <div className="mt-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                AI
              </div>
            </div>
            
            {/* After Image */}
            <div className="relative">
              <div className="absolute -top-6 left-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                After
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg border-2 border-gray-100">
                <img 
                  src="/lovable-uploads/4894cea5-585c-4904-82e3-fd2a5f99eed2.png" 
                  alt="AI enhanced professional headshot 4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 shadow-lg">
        <Sparkle className="w-6 h-6 text-white" />
      </div>
      <div className="absolute -left-4 -bottom-4 bg-blue-50 rounded-full p-3 shadow-md border border-blue-100">
        <Camera className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Headshot Generator | Professional Headshots in Minutes</title>
        <meta name="description" content="Transform your casual photos into professional headshots for LinkedIn, resumes, and business profiles using our AI-powered headshot generator. No photoshoot needed." />
        <meta name="keywords" content="AI headshot, professional headshot, headshot generator, LinkedIn photo, professional profile picture, AI photo generator" />
        <meta property="og:title" content="AI Headshot Generator | Professional Headshots in Minutes" />
        <meta property="og:description" content="Transform your casual photos into professional headshots for LinkedIn, resumes, and business profiles using our AI-powered headshot generator." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Headshot Generator | Professional Headshots in Minutes" />
        <meta name="twitter:description" content="Transform your casual photos into professional headshots for LinkedIn, resumes, and business profiles using our AI-powered headshot generator." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="AI Headshot Generator"
          title="Create"
          highlightedText="Professional Headshots"
          restOfTitle="in Minutes"
          description="Transform your casual photos into professional headshots for LinkedIn, resumes, and business profiles using our AI-powered headshot generator."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Multiple Styles" },
            { icon: <Check className="h-4 w-4" />, text: "High Resolution" },
            { icon: <Check className="h-4 w-4" />, text: "Fast Generation" }
          ]}
          image={beforeAfterImage}
          bgColor="bg-blue-900"
          textColor="text-white"
        />
        
        {/* Generator Tool Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your AI Headshot</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Upload your photo and let our AI transform it into a professional headshot
              </p>
            </div>
            
            <HeadshotGeneratorTool />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Three simple steps to your professional headshot</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Upload className="h-12 w-12 text-blue-500" />,
                  title: "Upload Your Photo",
                  description: "Choose a clear photo of your face. Selfies work great!"
                },
                {
                  icon: <Wand2 className="h-12 w-12 text-purple-500" />,
                  title: "AI Enhancement",
                  description: "Our AI transforms your photo into a professional headshot."
                },
                {
                  icon: <Download className="h-12 w-12 text-green-500" />,
                  title: "Download & Share",
                  description: "Get your headshot in high resolution, ready to use."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn Your Selfies Into Professional Headshots</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get studio-quality headshots without hiring a photographer</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ImagePlus className="h-10 w-10 text-blue-500" />,
                  title: "Upload Your Photo",
                  description: "Start by uploading a clear photo of your face. We recommend using a front-facing photo with good lighting."
                },
                {
                  icon: <User className="h-10 w-10 text-blue-500" />,
                  title: "Choose Your Style",
                  description: "Select from various professional styles including corporate, creative, casual, and more."
                },
                {
                  icon: <Image className="h-10 w-10 text-blue-500" />,
                  title: "Generate Headshots",
                  description: "Our AI transforms your photo into professional headshots while maintaining your likeness."
                },
                {
                  icon: <Camera className="h-10 w-10 text-blue-500" />,
                  title: "Multiple Backgrounds",
                  description: "Choose from various professional backgrounds or use a solid color for maximum versatility."
                },
                {
                  icon: <Download className="h-10 w-10 text-blue-500" />,
                  title: "Download & Share",
                  description: "Download your headshots in high resolution for LinkedIn, your resume, or business profiles."
                },
                {
                  icon: <User className="h-10 w-10 text-blue-500" />,
                  title: "Privacy Focused",
                  description: "Your photos are processed securely and never shared with third parties or used for training."
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

        {/* Use Cases Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional headshots for every situation</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "LinkedIn Profiles", description: "Make a positive first impression on potential employers" },
                { title: "Corporate Websites", description: "Maintain a professional team section on your company website" },
                { title: "Job Applications", description: "Stand out with a professional appearance in your resume" },
                { title: "Social Media", description: "Present yourself professionally across all platforms" },
                { title: "Professional Bios", description: "Complete your speaker profiles and professional bios" },
                { title: "ID Badges", description: "Create consistent, professional photos for company badges" },
                { title: "Conference Profiles", description: "Look your best in event programs and speaker listings" },
                { title: "Personal Branding", description: "Elevate your personal brand with a polished appearance" }
              ].map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Common questions about our AI Headshot Generator</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "How does the AI headshot generator work?",
                  a: "Our AI headshot generator uses advanced machine learning algorithms to analyze your uploaded photo and transform it into a professional headshot. It enhances features, adjusts lighting, and applies professional styling while maintaining your natural appearance."
                },
                {
                  q: "What kind of photos work best?",
                  a: "For best results, upload a clear, well-lit photo of your face. Front-facing photos with neutral backgrounds work best, but our AI can work with most decent quality selfies or portraits."
                },
                {
                  q: "How long does it take to generate a headshot?",
                  a: "Most headshots are generated within 30-60 seconds, depending on the complexity of the transformation and current system load."
                },
                {
                  q: "Can I customize the style of my headshot?",
                  a: "Yes! You can choose from various professional styles including corporate, creative, casual, and more. You can also select different backgrounds and lighting styles."
                },
                {
                  q: "Is my photo data secure?",
                  a: "Absolutely. We take privacy seriously. Your uploaded photos are processed securely and are never shared with third parties or used to train our AI models. Photos are automatically deleted after processing."
                },
                {
                  q: "What resolution will my headshot be?",
                  a: "Your AI-generated headshots will be high-resolution images suitable for professional use on websites, social media, and even printing."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Professional Headshot?</h2>
                <p className="text-xl mb-8 opacity-90">Create professional headshots for your LinkedIn, resume, or business profile in minutes.</p>
                <Link to="#generator">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Try It Free
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

export default HeadshotGenerator;
