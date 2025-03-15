
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LogoMakerProvider } from "@/contexts/LogoMakerContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import LogoMakerHero from "./components/LogoMakerHero";
import LogoInputForm from "./components/LogoMakerForm";
import FormPreview from "./components/FormPreview";
import BenefitsSection from "./components/BenefitsSection";
import HowToCreateSection from "./components/HowToCreateSection";
import IndustryStylesSection from "./components/IndustryStylesSection";
import CustomizationOptionsSection from "./components/CustomizationOptionsSection";
import UsageExamplesSection from "./components/UsageExamplesSection";
import LogoMakerFAQSection from "./components/LogoMakerFAQSection";
import CTASection from "./components/CTASection";

const LogoMakerWrapper = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LogoMakerHero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <LogoInputForm />
            </div>
            
            <div>
              <FormPreview />
            </div>
          </div>
        </div>
        
        <BenefitsSection />
        <HowToCreateSection />
        <IndustryStylesSection />
        <CustomizationOptionsSection />
        <UsageExamplesSection />
        <LogoMakerFAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

const LogoMaker = () => {
  return (
    <LogoMakerProvider>
      <LogoMakerWrapper />
    </LogoMakerProvider>
  );
};

export default LogoMaker;
