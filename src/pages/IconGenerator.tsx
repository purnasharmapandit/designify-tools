
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/icon-generator/HeroSection";
import IconGeneratorWizard from "@/components/icon-generator/IconGeneratorWizard";
import HowItWorksSection from "@/components/icon-generator/HowItWorksSection";
import FeaturesList from "@/components/icon-generator/FeaturesList";
import StylesGallery from "@/components/icon-generator/StylesGallery";
import UseCasesSection from "@/components/icon-generator/UseCasesSection";
import FAQSection from "@/components/icon-generator/FAQSection";

const IconGenerator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Icon Generator | Create Custom Icons in Seconds</title>
        <meta name="description" content="Generate beautiful, custom icons with our AI icon maker. Choose from multiple styles and customize colors for your project needs." />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IconGeneratorWizard />
        <HowItWorksSection />
        <FeaturesList />
        <StylesGallery />
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
