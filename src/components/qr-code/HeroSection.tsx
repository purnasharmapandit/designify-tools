
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, QrCode, Smartphone, Zap, Shield, DownloadCloud } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-5">
                Free QR Code Generator
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Custom QR Codes</span> in Seconds
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Generate QR codes for websites, text, vCards, and more. Customize colors and download high-quality images for free.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: <QrCode className="h-4 w-4" />, text: "Multiple Content Types" },
                  { icon: <Smartphone className="h-4 w-4" />, text: "Mobile Friendly" },
                  { icon: <Zap className="h-4 w-4" />, text: "Instant Generation" },
                  { icon: <Shield className="h-4 w-4" />, text: "No Sign-up Required" },
                  { icon: <DownloadCloud className="h-4 w-4" />, text: "High-Quality Downloads" }
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
                <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl transform rotate-6"></div>
                
                <motion.div 
                  className="relative bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10 p-8"
                  animate={{ rotate: [0, 0] }}
                >
                  <div className="aspect-square w-64 bg-white p-4 rounded-md flex items-center justify-center">
                    <div className="w-full h-full bg-black rounded-md p-4 flex items-center justify-center">
                      <div className="w-full h-full bg-white rounded-sm grid grid-cols-4 grid-rows-4 gap-1 p-2">
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-white"></div>
                        <div className="col-span-1 row-span-1 bg-white"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-white"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                        <div className="col-span-1 row-span-1 bg-black"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
                      <div className="mt-2 h-3 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <DownloadCloud className="h-4 w-4 text-white" />
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
