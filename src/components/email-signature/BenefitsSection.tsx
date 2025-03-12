
import React from "react";
import { MousePointerClick, Mail, Palette } from "lucide-react";

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
