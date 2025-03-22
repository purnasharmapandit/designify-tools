
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ToolsFAQSection from "@/components/tools/ToolsFAQSection";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">Our Design Tools</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a range of free and premium design tools to help you create stunning visuals for your business or personal projects
            </p>
          </div>
          
          <ToolsGrid />
          
          {/* FAQs Section */}
          <ToolsFAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
