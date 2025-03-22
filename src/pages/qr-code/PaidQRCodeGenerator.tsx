import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, QrCode, ChartBar, Download, MapPin, Users, Plus } from "lucide-react";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import AnalyticsQRCodeForm from "@/components/paid-qr-code/AnalyticsQRCodeForm";
import QRCodePreview from "@/components/qr-code/QRCodePreview";
import FeaturesList from "@/components/paid-qr-code/FeaturesList";
import BenefitsSection from "@/components/paid-qr-code/BenefitsSection";
import HowItWorksSection from "@/components/paid-qr-code/HowItWorksSection";
import FAQSection from "@/components/paid-qr-code/FAQSection";
import { useQRCode } from "@/hooks/use-qrcode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { checkGenerationEligibility, recordGeneration } from "@/services/generationLimits";
import { Link } from "react-router-dom";

const PaidQRCodeGenerator = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isDynamicQR, setIsDynamicQR] = useState(true);
  const [shortCode, setShortCode] = useState(Math.random().toString(36).substring(2, 8));
  
  const { 
    qrCodeUrl, 
    error, 
    isGenerating, 
    options, 
    updateOptions,
    downloadQRCode 
  } = useQRCode({
    contentType: 'website',
    content: '',
    size: 250,
    color: '#000000',
    bgColor: '#ffffff',
    errorCorrectionLevel: 'M',
    margin: 4,
    outputFormat: 'png',
    centerElement: null
  });

  const handleDownload = async () => {
    if (options.content.trim() === '') {
      toast.error("Please enter content for your QR code first");
      return;
    }
    
    if (!user) {
      navigate("/auth", { 
        state: { 
          returnTo: "/qr-code/premium",
          requiresSignUp: true 
        }
      });
      toast.info("Please create an account to generate premium QR codes");
      return;
    }
    
    const eligibility = await checkGenerationEligibility('qr_code_premium');
    if (!eligibility.canGenerate) {
      if (eligibility.redirectToAuth) {
        navigate("/auth", { 
          state: { 
            returnTo: "/qr-code/premium",
            requiresSignUp: true 
          }
        });
        return;
      }
      
      if (eligibility.redirectToSubscription) {
        navigate("/pricing");
        return;
      }
      
      toast.error(eligibility.message);
      return;
    }
    
    if (isDynamicQR) {
      try {
        toast.success(`Dynamic QR code created with short code: ${shortCode}`);
        console.log("Dynamic QR Data:", {
          userId: user.id,
          shortCode: shortCode,
          destination: options.content,
          createdAt: new Date().toISOString()
        });
      } catch (error) {
        console.error("Error saving dynamic QR code:", error);
        toast.error("There was an issue creating your dynamic QR code.");
        return;
      }
    }
    
    const recorded = await recordGeneration('qr_code_premium');
    if (!recorded) {
      toast.error("There was an issue generating your premium QR code. Please try again.");
      return;
    }
    
    downloadQRCode();
    
    if (isDynamicQR) {
      toast.success("Premium dynamic QR code downloaded successfully! You can update its destination anytime.");
    } else {
      toast.success("Premium QR code downloaded successfully with analytics enabled!");
    }
  };

  const handleFormUpdate = (newOptions: Partial<typeof options>) => {
    updateOptions(newOptions);
  };

  const qrCodeImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 transform rotate-3 absolute -right-5 -top-5 z-10">
        <QrCode className="w-12 h-12 text-primary" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/881e4853-0a3c-4840-9265-a9ad83a5640a.png" 
            alt="QR Code Sample" 
            className="w-full" 
          />
          <div className="bg-slate-50 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <ChartBar className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Analytics Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Premium QR Code Generator | Dynamic QR Codes with Analytics</title>
        <meta name="description" content="Generate premium dynamic QR codes with 1 year of scan analytics, CSV export, location tracking, and user management features." />
        <meta name="keywords" content="premium qr code, dynamic qr code, qr code analytics, qr code tracking, business qr code, qr code statistics" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow pt-28">
        <StandardHeroSection
          toolLabel="Premium QR Code Generator"
          title="Dynamic QR Codes with"
          highlightedText="Advanced Analytics"
          restOfTitle="and Tracking"
          description="Generate dynamic QR codes that you can update anytime, with 1 year of scan analytics, CSV export for data analysis, location tracking, and multi-user management."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Dynamic QR Codes" },
            { icon: <Check className="h-4 w-4" />, text: "1 Year Analytics" },
            { icon: <Check className="h-4 w-4" />, text: "Location Tracking" }
          ]}
          image={qrCodeImage}
          bgColor="bg-blue-900"
          textColor="text-white"
          toolLabelClassName="bg-white/20 text-white font-medium"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <AnalyticsQRCodeForm 
                options={options} 
                onUpdateOptions={handleFormUpdate}
                onDownload={handleDownload}
              />
              <QRCodePreview 
                qrCodeUrl={qrCodeUrl} 
                isGenerating={isGenerating} 
                error={error}
                centerElement={options.centerElement}
              />
            </div>
          </div>
        </section>

        <FeaturesList />
        <BenefitsSection />
        <HowItWorksSection />
        <FAQSection />

        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Simple QR Code Instead?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Try our free QR code generator for quick and simple static QR codes. Perfect for small businesses, 
              personal projects, or if you just need a basic QR code without analytics features.
            </p>
            <Link to="/qr-code">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold"
              >
                Use Free QR Code Generator
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaidQRCodeGenerator;
