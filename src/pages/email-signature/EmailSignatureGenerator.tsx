
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SignatureForm from "@/components/email-signature/SignatureForm";
import SignaturePreview from "@/components/email-signature/SignaturePreview";
import { EmailSignatureData } from "@/types/email-signature";
import { ArrowRight, Sparkles, Mail, Palette, MousePointerClick, CheckCircle, Laptop, Apple } from "lucide-react";
import { getEmailClientInstructions } from "@/utils/email-signature-utils";
import { Card, CardContent } from "@/components/ui/card";

const EmailSignatureGenerator = () => {
  const [data, setData] = useState<EmailSignatureData>({
    fullName: "",
    jobTitle: "",
    company: "",
    phoneNumber: "",
    email: "",
    website: "",
    address: "",
    profileImageUrl: "",
    companyLogoUrl: "",
    socialLinks: [{ platform: "linkedin", url: "" }],
    template: "professional",
    primaryColor: "#4F46E5",
    secondaryColor: "#3E63DD",
    font: "Arial",
    showProfileImage: true,
    showCompanyLogo: true,
    showAddress: true,
  });

  const emailClientInstructions = getEmailClientInstructions();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-purple-50/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl"></div>
            <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-purple-100/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          <div className="relative">
            <section className="pt-28 pb-16 px-4">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Professional Email Signatures
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    Create beautiful, professional email signatures in minutes. No design skills required.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                    <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                      <span>Works with Gmail</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                      <span>Works with Outlook</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                      <span>Works with Apple Mail</span>
                    </div>
                  </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="sticky top-24">
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5">
                          <h2 className="text-xl font-semibold text-white mb-1 flex items-center">
                            <Palette className="h-5 w-5 mr-2 text-indigo-200" /> 
                            <span>Design Your Signature</span>
                          </h2>
                          <p className="text-sm text-indigo-200">Customize details to match your brand</p>
                        </div>
                        <SignatureForm data={data} setData={setData} />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="sticky top-24">
                      <SignaturePreview data={data} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
                Email Client Setup Instructions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to add your beautiful signature to your favorite email client
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden"
              >
                <Card className="h-full bg-white border-indigo-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -mr-16 -mt-16 z-0"></div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700">Gmail</h3>
                    </div>
                    <ol className="space-y-3 text-gray-600">
                      {emailClientInstructions['gmail'].map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 text-blue-700 text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden"
              >
                <Card className="h-full bg-white border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl -mr-16 -mt-16 z-0"></div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shadow-sm">
                        <Laptop className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-purple-700">Outlook</h3>
                    </div>
                    <ol className="space-y-3 text-gray-600">
                      {emailClientInstructions['outlook'].map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5 text-purple-700 text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative overflow-hidden"
              >
                <Card className="h-full bg-white border-indigo-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-3xl -mr-16 -mt-16 z-0"></div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shadow-sm">
                        <Apple className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-indigo-700">Apple Mail</h3>
                    </div>
                    <ol className="space-y-3 text-gray-600">
                      {emailClientInstructions['appleMail'].map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5 text-indigo-700 text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-indigo-900 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Three Simple Steps
              </h2>
              <p className="text-indigo-200">
                Create your professional email signature in minutes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-700/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Fill Your Details</h3>
                <p className="text-indigo-200">
                  Add your personal information, upload images, and choose social links
                </p>
              </div>
              
              <div className="bg-purple-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-700/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Customize Design</h3>
                <p className="text-purple-200">
                  Pick a template, adjust colors, and customize the layout to match your style
                </p>
              </div>
              
              <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-700/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Export & Use</h3>
                <p className="text-indigo-200">
                  Copy your signature or download the HTML to use in any email client
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
                Why Create a Professional Email Signature?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A well-designed email signature enhances your credibility and makes a lasting impression
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="relative p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <MousePointerClick className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">Professional Branding</h3>
                  <p className="text-gray-600">
                    Reinforce your professional identity with every email you send
                  </p>
                </div>
              </div>
              
              <div className="relative p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-purple-50 border border-purple-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">Lead Generation</h3>
                  <p className="text-gray-600">
                    Include social links and contact info to connect with more prospects
                  </p>
                </div>
              </div>
              
              <div className="relative p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Palette className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">Brand Consistency</h3>
                  <p className="text-gray-600">
                    Maintain consistent brand colors and styling across all communications
                  </p>
                </div>
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
