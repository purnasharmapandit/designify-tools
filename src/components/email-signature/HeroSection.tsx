
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Copy, Paintbrush, Zap, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-800 font-medium text-sm mb-5">
                Professional Email Signature Generator
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">Professional Email Signatures</span> in Seconds
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Make a lasting impression with customized email signatures that showcase your brand and contact information beautifully.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: <Mail className="h-4 w-4" />, text: "Email Client Compatible" },
                  { icon: <Copy className="h-4 w-4" />, text: "Copy & Paste Ready" },
                  { icon: <Paintbrush className="h-4 w-4" />, text: "Multiple Styles" },
                  { icon: <Zap className="h-4 w-4" />, text: "No Coding Required" },
                  { icon: <CheckCircle className="h-4 w-4" />, text: "Professional Templates" }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                    className="bg-white shadow-sm px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    {feature.icon}
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto"
            >
              <div className="relative">
                <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-xl blur-xl transform rotate-6"></div>
                
                <motion.div 
                  className="relative bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10 p-6"
                  animate={{ rotate: [0, 0] }}
                >
                  <div className="bg-gray-50 rounded-md p-5">
                    <div className="flex items-start space-x-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                        JD
                      </div>
                      <div>
                        <div className="h-5 w-36 bg-gray-300 rounded-md mb-2"></div>
                        <div className="h-3 w-48 bg-gray-200 rounded-md mb-1"></div>
                        <div className="h-3 w-40 bg-gray-200 rounded-md mb-3"></div>
                        <div className="flex space-x-2">
                          <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                          <div className="h-6 w-6 rounded-full bg-sky-500"></div>
                          <div className="h-6 w-6 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="h-8 w-20 rounded-md bg-teal-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-teal-800">Template 1</span>
                      </div>
                      <div className="h-8 w-20 rounded-md bg-gray-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-800">Template 2</span>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
                      <Copy className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
