import React from "react";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
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

const QRCodeGenerator = () => {
  const { 
    qrCodeUrl, 
    error, 
    isGenerating, 
    options, 
    updateOptions,
    downloadQRCode 
  } = useQRCode({
    content: '',
    size: 250,
    color: '#000000',
    bgColor: '#ffffff',
    errorCorrectionLevel: 'M',
    margin: 4,
    outputFormat: 'png'
  });

  const handleDownload = () => {
    if (options.content.trim() === '') {
      toast.error("Please enter content for your QR code first");
      return;
    }
    
    downloadQRCode();
    toast.success("QR code downloaded successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                  <QrCode className="h-10 w-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                  Free QR Code Generator
                </h1>
                <p className="text-xl text-gray-600 md:max-w-3xl mx-auto">
                  Create customizable QR codes for your business, personal, or marketing needs in seconds — no sign up required.
                </p>
              </motion.div>
            </div>

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
