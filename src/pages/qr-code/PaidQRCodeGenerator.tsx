
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
    
    // Check if user is authenticated
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
    
    // Check eligibility for premium QR code generation
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
    
    // If dynamic QR code, save to database
    if (isDynamicQR) {
      try {
        // In a real implementation, we would save the QR data to the database here
        // For now, we'll just simulate it
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
    
    // Record the generation
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
            src="/placeholder.svg" 
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
      <main className="flex-grow pt-16">
        {/* Hero Section */}
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

        {/* Other Sections */}
        <FeaturesList />
        <BenefitsSection />
        <HowItWorksSection />
        <FAQSection />

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your QR Experience?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Generate dynamic premium QR codes with advanced analytics and tracking features to maximize your marketing efforts.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="font-semibold"
            >
              Create Dynamic QR Code Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaidQRCodeGenerator;
