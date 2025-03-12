
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SignatureForm from "@/components/email-signature/SignatureForm";
import SignaturePreview from "@/components/email-signature/SignaturePreview";
import { EmailSignatureData } from "@/types/email-signature";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownCircle, Mail, Palette } from "lucide-react";

const EmailSignatureGenerator = () => {
  const [data, setData] = useState<EmailSignatureData>({
    fullName: "",
    jobTitle: "",
    company: "",
    phoneNumber: "",
    email: "",
    website: "",
    address: "",
    profileImage: null,
    companyLogo: null,
    socialLinks: [{ platform: "linkedin", url: "" }],
    template: "professional",
    primaryColor: "#4F46E5",
    secondaryColor: "#3E63DD",
    font: "Arial",
    showProfileImage: true,
    showCompanyLogo: true,
    showAddress: true,
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50/50 via-white to-purple-50/50">
      <Navbar />
      <main className="flex-grow">
        <section className="py-10 md:py-16">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
                Email Signature Generator
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                Create a professional email signature that works across all major email clients
              </p>
            </motion.div>

            {/* Mobile Tabs View */}
            <div className="lg:hidden mb-6">
              <Tabs defaultValue="form" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-6 bg-white/70 backdrop-blur-sm">
                  <TabsTrigger value="form" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700">
                    <Palette className="h-4 w-4 mr-2" />
                    Editor
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Preview
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="form" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SignatureForm data={data} setData={setData} />
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="preview" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SignaturePreview data={data} />
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Desktop View - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:sticky lg:top-24 lg:self-start"
              >
                <SignatureForm data={data} setData={setData} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:sticky lg:top-24 lg:self-start"
              >
                <SignaturePreview data={data} />
              </motion.div>
            </div>

            {/* Scroll down indicator for mobile - only shows on larger screens when both panels are visible */}
            <div className="hidden md:flex lg:hidden justify-center mt-8 animate-bounce">
              <ArrowDownCircle className="h-10 w-10 text-indigo-400 opacity-70" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-800">
              Why Use Our Email Signature Generator?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Palette className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">Professional Design</h3>
                <p className="text-gray-600">
                  Clean, professional templates that make a great impression
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Compatible Everywhere</h3>
                <p className="text-gray-600">
                  Works in all major email clients with maximum compatibility
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-600">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    <path d="M12 12V2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Fully Customizable</h3>
                <p className="text-gray-600">
                  Adjust colors, fonts, and layouts to match your brand
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Will my signature work in all email clients?
                </h3>
                <p className="text-gray-600">
                  Yes! We use HTML and inline CSS that is compatible with all major email clients
                  including Gmail, Outlook, Apple Mail, and Yahoo Mail.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Can I add my profile picture or company logo?
                </h3>
                <p className="text-gray-600">
                  Absolutely. You can upload both a profile picture and company logo to include in your
                  signature. Our optimization process ensures they look great across all devices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  How do I add this signature to my email client?
                </h3>
                <p className="text-gray-600">
                  After generating your signature, switch to the "Instructions" tab for step-by-step
                  guidance specific to your email client (Gmail, Outlook, or Apple Mail).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmailSignatureGenerator;
