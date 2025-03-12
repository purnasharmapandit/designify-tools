
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EmailSignatureData } from "@/types/email-signature";
import { getEmailClientInstructions } from "@/utils/email-signature-utils";
import HeroSection from "@/components/email-signature/HeroSection";
import SignatureBuilder from "@/components/email-signature/SignatureBuilder";
import EmailClientInstructions from "@/components/email-signature/EmailClientInstructions";
import SimpleStepsSection from "@/components/email-signature/SimpleStepsSection";
import BenefitsSection from "@/components/email-signature/BenefitsSection";

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
        <HeroSection />
        
        <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-purple-50/30">
          <div className="relative">
            <section className="px-4">
              <div className="container mx-auto">
                <SignatureBuilder data={data} setData={setData} />
              </div>
            </section>
          </div>
        </div>

        <EmailClientInstructions emailClientInstructions={emailClientInstructions} />
        <SimpleStepsSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default EmailSignatureGenerator;
