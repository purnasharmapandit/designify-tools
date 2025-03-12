
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Upload, Download, Image as ImageIcon, Scissors, AlertCircle, Check, X, EyeOff, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import BackgroundRemoverHero from "@/components/background-remover/BackgroundRemoverHero";
import UploadSection from "@/components/background-remover/UploadSection";
import PreviewSection from "@/components/background-remover/PreviewSection";
import ControlsSection from "@/components/background-remover/ControlsSection";
import FAQSection from "@/components/background-remover/FAQSection";
import UseCasesSection from "@/components/background-remover/UseCasesSection";

const BackgroundRemover = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <BackgroundRemoverHero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <UploadSection />
            <PreviewSection />
          </div>
          
          <ControlsSection />
        </div>
        
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default BackgroundRemover;
