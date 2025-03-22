
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ExploreToolsSection from "@/components/ExploreToolsSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Helmet>
        <title>Designify Tools | AI-Powered Design Tools for Creators</title>
        <meta 
          name="description" 
          content="Discover our collection of free and premium AI-powered design tools for logos, color palettes, email signatures, background removal, and more. Create professional designs in minutes."
        />
        <meta property="og:title" content="Designify Tools | AI-Powered Design Tools for Creators" />
        <meta 
          property="og:description" 
          content="Discover our collection of free and premium AI-powered design tools for logos, color palettes, email signatures, background removal, and more."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ExploreToolsSection />
        <FeaturesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
