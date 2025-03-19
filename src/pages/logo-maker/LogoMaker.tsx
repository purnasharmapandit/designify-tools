
import React from "react";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import LogoMakerHero from "./components/LogoMakerHero";
import GeneratorSection from "./components/GeneratorSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesGridSection from "./components/FeaturesGridSection";
import LogoMakerFAQSection from "./components/LogoMakerFAQSection";
import CTASection from "./components/CTASection";

const LogoMaker = () => {
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
          image={<LogoMakerHero />}
          bgColor="bg-blue-900"
          textColor="text-white"
        />

        <GeneratorSection />
        <HowItWorksSection />
        <FeaturesGridSection />
        <LogoMakerFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LogoMaker;
