
import React from "react";
import { motion } from "framer-motion";
import { Mail, Laptop, Apple } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EmailClientInstructionsProps {
  emailClientInstructions: Record<string, string[]>;
}

const EmailClientInstructions: React.FC<EmailClientInstructionsProps> = ({ 
  emailClientInstructions 
}) => {
  return (
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
  );
};

export default EmailClientInstructions;
