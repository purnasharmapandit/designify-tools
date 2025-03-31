
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ToolsFAQSection from "@/components/tools/ToolsFAQSection";
import { Helmet } from "react-helmet";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Design Tools Collection | Free & Premium Design Tools</title>
        <meta 
          name="description" 
          content="Discover our collection of free and premium design tools including logo makers, QR code generators, color palette tools, and more to enhance your design projects."
        />
        <meta property="og:title" content="Design Tools Collection | Free & Premium Design Tools" />
        <meta 
          property="og:description" 
          content="Explore our comprehensive collection of design tools for professionals and beginners. Create logos, QR codes, color palettes and more with our easy-to-use tools."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "headline": "Design Tools Collection",
              "description": "Discover our collection of free and premium design tools including logo makers, QR code generators, color palette tools, and more.",
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "15+",
                "lowPrice": "0",
                "highPrice": "29.99",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      
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
