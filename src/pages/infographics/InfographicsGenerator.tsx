
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Check, Wand2, Layout, Layers, Download } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const InfographicsGenerator = () => {
  const infographicsImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Layout className="w-12 h-12 text-purple-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 rounded-lg p-3 aspect-[3/4]">
            <div className="h-4 w-20 bg-blue-200 mb-2 rounded"></div>
            <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-3/4 bg-gray-200 mb-3 rounded"></div>
            <div className="h-16 w-full bg-blue-100 mb-3 rounded flex items-center justify-center">
              <FileText className="h-8 w-8 text-blue-400" />
            </div>
            <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-5/6 bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 aspect-[3/4]">
            <div className="h-4 w-20 bg-purple-200 mb-2 rounded"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 w-full bg-purple-100 rounded flex items-center justify-center">
                <Layers className="h-5 w-5 text-purple-400" />
              </div>
              <div className="h-10 w-full bg-purple-100 rounded flex items-center justify-center">
                <Download className="h-5 w-5 text-purple-400" />
              </div>
              <div className="h-10 w-full bg-purple-100 rounded flex items-center justify-center">
                <Wand2 className="h-5 w-5 text-purple-400" />
              </div>
              <div className="h-10 w-full bg-purple-100 rounded flex items-center justify-center">
                <Layout className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <div className="h-2 w-full bg-gray-200 mt-3 mb-1 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3 aspect-[3/4]">
            <div className="h-4 w-20 bg-pink-200 mb-2 rounded"></div>
            <div className="h-20 w-full bg-pink-100 mb-3 rounded flex items-center justify-center">
              <FileText className="h-8 w-8 text-pink-400" />
            </div>
            <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-5/6 bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 aspect-[3/4]">
            <div className="h-4 w-20 bg-green-200 mb-2 rounded"></div>
            <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-3/4 bg-gray-200 mb-3 rounded"></div>
            <div className="h-16 w-full bg-green-100 mb-3 rounded flex items-center justify-center">
              <FileText className="h-8 w-8 text-green-400" />
            </div>
            <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
            <div className="h-2 w-4/5 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Infographics & Brochures"
          title="Create"
          highlightedText="Professional Materials"
          restOfTitle="in Minutes"
          description="Design stunning infographics, brochures, and flyers for your business or personal projects with our intuitive drag-and-drop editor. No design experience needed."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "100+ Templates" },
            { icon: <Check className="h-4 w-4" />, text: "Drag & Drop Editor" },
            { icon: <Check className="h-4 w-4" />, text: "PDF Export" }
          ]}
          image={infographicsImage}
          bgColor="bg-blue-900"
          textColor="text-white"
        />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Professional Materials Effortlessly</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">All the tools you need to design impressive documents</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="h-10 w-10 text-purple-500" />,
                  title: "Professional Templates",
                  description: "Choose from our library of 100+ professionally designed templates for infographics, brochures, and flyers."
                },
                {
                  icon: <Layers className="h-10 w-10 text-purple-500" />,
                  title: "Drag & Drop Editor",
                  description: "Our intuitive editor makes it easy to customize your designs - no design skills required."
                },
                {
                  icon: <Wand2 className="h-10 w-10 text-purple-500" />,
                  title: "AI-Powered Design",
                  description: "Let our AI suggest layout improvements and design elements that work best for your content."
                },
                {
                  icon: <FileText className="h-10 w-10 text-purple-500" />,
                  title: "Smart Text Elements",
                  description: "Create dynamic text boxes, lists, and callouts that automatically adjust as you add content."
                },
                {
                  icon: <Download className="h-10 w-10 text-purple-500" />,
                  title: "Multiple Export Options",
                  description: "Export your designs as PDF, PNG, or JPG files, perfect for printing or digital distribution."
                },
                {
                  icon: <Layout className="h-10 w-10 text-purple-500" />,
                  title: "Data Visualization",
                  description: "Create beautiful charts and graphs to visualize your data effectively in your infographics."
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
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Beautiful Designs?</h2>
                <p className="text-xl mb-8 opacity-90">Start designing professional infographics, brochures, and flyers today.</p>
                <Link to="/contact-us?subject=Interest%20in%20Infographics%20Generator">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
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

export default InfographicsGenerator;
