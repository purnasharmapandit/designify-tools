
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QRCodeForm from "@/components/qr-code/QRCodeForm";
import QRCodePreview from "@/components/qr-code/QRCodePreview";
import FeaturesSection from "@/components/qr-code/FeaturesSection";
import StepsSection from "@/components/qr-code/StepsSection";
import UseCasesSection from "@/components/qr-code/UseCasesSection";
import FAQSection from "@/components/qr-code/FAQSection";
import { Button } from "@/components/ui/button";
import { useQRCode } from "@/hooks/use-qrcode";
import { toast } from "sonner";
import { Check, Scan, QrCode, LayoutGrid, Download } from "lucide-react";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const QRCodeGenerator = () => {
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

  const handleDownload = () => {
    if (options.content.trim() === '') {
      toast.error("Please enter content for your QR code first");
      return;
    }
    
    downloadQRCode();
    toast.success("QR code downloaded successfully!");
  };

  const qrCodeImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 transform rotate-3 absolute -right-5 -top-5 z-10">
        <QrCode className="w-12 h-12 text-primary" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <img 
          src="/placeholder.svg" 
          alt="QR Code Sample" 
          className="w-full" 
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free QR Code Generator | Create Custom QR Codes Online</title>
        <meta name="description" content="Generate free custom QR codes for websites, text, contact info, WiFi, and more. Download in PNG, SVG, or JPG formats. No sign-up required." />
        <meta name="keywords" content="qr code generator, free qr code, custom qr code, qr code maker, create qr code" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <StandardHeroSection
          toolLabel="Free QR Code Generator"
          title="Create"
          highlightedText="Custom QR Codes"
          restOfTitle="in Seconds"
          description="Generate professional QR codes for your business, products, or personal use. Customize colors, add logos, and download in multiple formats."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "No Sign-up Required" },
            { icon: <LayoutGrid className="h-4 w-4" />, text: "Multiple Formats" },
            { icon: <Scan className="h-4 w-4" />, text: "Business Ready" }
          ]}
          image={qrCodeImage}
          bgColor="bg-indigo-950"
          textColor="text-white"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <QRCodeForm 
                options={options} 
                onUpdateOptions={updateOptions}
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
        <StepsSection />
        <FeaturesSection />
        <UseCasesSection />
        <FAQSection />

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your QR Code?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our free, easy-to-use QR code generator helps you create custom QR codes in seconds. No sign-up required.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="font-semibold"
            >
              Generate QR Code Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QRCodeGenerator;
