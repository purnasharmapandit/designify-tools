
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Presentation, LineChart, Image, Type, Layout } from "lucide-react";
import FeaturesSection from "@/components/presentation-maker/FeaturesSection";
import HowItWorksSection from "@/components/presentation-maker/HowItWorksSection";
import PresentationMakerFAQs from "@/components/presentation-maker/FAQSection";

const PresentationMaker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Presentation Maker | Create Professional Slide Decks</title>
        <meta
          name="description"
          content="Create stunning professional presentations with our AI-powered Presentation Maker. Beautiful templates, smart layouts, and built-in data visualization."
        />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Create Stunning <span className="text-teal-300">Presentations</span> in Minutes
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Design professional presentations that captivate your audience. Beautiful templates, smart layouts, and AI-powered content assistance.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-teal-300" />
                    <span>Professional Templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-teal-300" />
                    <span>Smart Layouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-teal-300" />
                    <span>Data Visualization</span>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
                  Start Creating Now
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="bg-gradient-to-br from-teal-800 to-emerald-800 rounded-lg p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-teal-300 font-medium">Presentation Maker</div>
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-xl font-bold mb-2">Quarterly Results</div>
                      <div className="w-full h-20 bg-white/20 rounded-lg mb-3"></div>
                      <div className="flex space-x-2">
                        <div className="w-1/3 h-4 bg-teal-500/40 rounded"></div>
                        <div className="w-1/2 h-4 bg-emerald-500/40 rounded"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="w-full h-16 bg-white/20 rounded-lg"></div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="w-full h-16 bg-white/20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        <HowItWorksSection />
        <PresentationMakerFAQs />
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Impactful Presentations?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Start designing professional slide decks that will captivate your audience.
            </p>
            <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700">
              Create Your First Presentation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PresentationMaker;
