
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FeaturesSection from "@/components/typography-tool/FeaturesSection";
import HowItWorksSection from "@/components/typography-tool/HowItWorksSection";
import FAQSection from "@/components/typography-tool/FAQSection";
import { Link } from "react-router-dom";

const TypographyTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Typography Tool | Create Perfect Typography Systems</title>
        <meta
          name="description"
          content="Design consistent and beautiful typography systems for your brand with our Typography Tool. Font pairing, scale generation, and CSS export."
        />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20 pt-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Create Perfect <span className="text-purple-300">Typography</span> For Your Projects
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Design beautiful, consistent typography systems that scale across all your digital products. Font pairing, hierarchies, and responsive scaling made simple.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-300" />
                    <span>Smart Font Pairing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-300" />
                    <span>Scale Generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-300" />
                    <span>CSS Export</span>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
                  <Link to="/contact-us">Join Waitlist</Link>
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-lg p-6 shadow-xl">
                  <div className="space-y-8">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-purple-300 mb-1">Heading 1</div>
                      <div className="text-4xl font-bold">Main Headline</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-purple-300 mb-1">Heading 2</div>
                      <div className="text-3xl font-semibold">Section Title</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-purple-300 mb-1">Body Text</div>
                      <div className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-purple-300 mb-1">Button Text</div>
                      <div className="text-sm font-medium">CALL TO ACTION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
        
        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Perfect Your Typography?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join our waitlist to be the first to know when our Typography Tool is available.
            </p>
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700" asChild>
              <Link to="/contact-us">Join Waitlist</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TypographyTool;
