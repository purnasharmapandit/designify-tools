
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SignatureForm from "@/components/email-signature/SignatureForm";
import SignaturePreview from "@/components/email-signature/SignaturePreview";
import { EmailSignatureData } from "@/types/email-signature";
import { ArrowRight, Sparkles, Mail, Palette, MousePointerClick } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50/50 via-white to-purple-50/30">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-8 pb-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
                Email Signature Generator
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Create a professional email signature that leaves a lasting impression
              </p>
              <div className="inline-flex items-center justify-center gap-2 text-sm text-indigo-700 font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Works with Gmail, Outlook, and Apple Mail</span>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="order-2 lg:order-1"
              >
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 p-4">
                      <h2 className="text-white font-semibold flex items-center gap-2">
                        <Palette className="h-5 w-5" /> 
                        <span>Design Your Signature</span>
                      </h2>
                    </div>
                    <SignatureForm data={data} setData={setData} />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 p-4">
                      <h2 className="text-white font-semibold flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <span>Preview & Export</span>
                      </h2>
                    </div>
                    <SignaturePreview data={data} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-800">
                How It Works
              </h2>
              <p className="text-gray-600">
                Create your professional email signature in three simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-indigo-800">Fill Your Details</h3>
                <p className="text-gray-600 text-center">
                  Add your personal information, upload images, and choose social links
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-purple-800">Customize Design</h3>
                <p className="text-gray-600 text-center">
                  Pick a template, adjust colors, and customize the layout to match your style
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-indigo-800">Export & Use</h3>
                <p className="text-gray-600 text-center">
                  Copy your signature or download the HTML to use in any email client
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="#form" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Create Your Signature Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-800">
                Why Use Our Email Signature Generator?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MousePointerClick className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-indigo-800">Easy to Use</h3>
                <p className="text-gray-600 text-center">
                  Simple, intuitive interface that makes creating signatures a breeze
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-purple-800">Email Client Compatible</h3>
                <p className="text-gray-600 text-center">
                  Works in all major email clients with maximum compatibility
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Palette className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-indigo-800">Fully Customizable</h3>
                <p className="text-gray-600 text-center">
                  Adjust colors, fonts, and layouts to match your brand identity
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
