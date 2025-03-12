
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SignatureForm from "@/components/email-signature/SignatureForm";
import SignaturePreview from "@/components/email-signature/SignaturePreview";
import { EmailSignatureData } from "@/types/email-signature";

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Email Signature Generator
              </h1>
              <p className="text-lg text-gray-600">
                Create a professional email signature that works across all major email clients
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <SignatureForm data={data} setData={setData} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SignaturePreview data={data} />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Use Our Email Signature Generator?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Professional Design</h3>
                <p className="text-gray-600">
                  Clean, professional templates that make a great impression
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Compatible Everywhere</h3>
                <p className="text-gray-600">
                  Works in all major email clients with maximum compatibility
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
                <p className="text-gray-600">
                  Adjust colors, fonts, and layouts to match your brand
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Will my signature work in all email clients?
                </h3>
                <p className="text-gray-600">
                  Yes! We use HTML and inline CSS that is compatible with all major email clients
                  including Gmail, Outlook, Apple Mail, and Yahoo Mail.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Can I add my profile picture or company logo?
                </h3>
                <p className="text-gray-600">
                  Absolutely. You can upload both a profile picture and company logo to include in your
                  signature.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
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
