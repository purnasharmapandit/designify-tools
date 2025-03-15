
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Image, Download, Zap, Layers, Palette } from "lucide-react";

const BackgroundRemoverHero = () => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-5">
                AI Background Remover
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Remove <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Image Backgrounds</span> in Seconds
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Remove backgrounds from your images with one click. Our AI-powered tool delivers professional results instantly.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: <Image className="h-4 w-4" />, text: "High-Resolution Results" },
                  { icon: <Download className="h-4 w-4" />, text: "Free Downloads" },
                  { icon: <Zap className="h-4 w-4" />, text: "Instant Processing" },
                  { icon: <Layers className="h-4 w-4" />, text: "Transparent Background" },
                  { icon: <Palette className="h-4 w-4" />, text: "Custom Backgrounds" }
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
                <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl blur-xl transform rotate-6"></div>
                
                <div className="relative flex items-start justify-center">
                  <motion.div 
                    className="absolute w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden z-0"
                    animate={{ rotate: [-5, -5] }}
                    style={{ top: '10%', left: '5%' }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <div className="h-48 w-48 rounded-full bg-white flex items-center justify-center">
                        <Image className="h-8 w-8 text-amber-300" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative w-64 h-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10 bg-checkerboard"
                    animate={{ rotate: [0, 0] }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image className="h-16 w-16 text-amber-500 opacity-20" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-56 w-40 bg-transparent">
                        <svg viewBox="0 0 100 140" className="w-full h-full">
                          <path d="M50,20 Q65,10 80,20 Q95,30 80,50 Q75,60 80,70 Q90,85 80,100 Q70,115 50,120 Q30,115 20,100 Q10,85 20,70 Q25,60 20,50 Q5,30 20,20 Q35,10 50,20" fill="orange" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute w-32 h-32 rounded-lg shadow-lg overflow-hidden z-20"
                    animate={{ rotate: [8, 8] }}
                    style={{ bottom: '0%', right: '5%' }}
                  >
                    <div className="w-full h-8 bg-gray-100 flex items-center justify-center">
                      <div className="h-4 w-16 bg-amber-500 rounded-sm"></div>
                    </div>
                    <div className="w-full h-24 bg-checkerboard flex items-center justify-center">
                      <div className="h-16 w-16 bg-transparent">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path d="M50,20 Q65,10 80,20 Q95,30 80,50 Q75,60 80,70 Q90,85 80,100 Q70,115 50,120 Q30,115 20,100 Q10,85 20,70 Q25,60 20,50 Q5,30 20,20 Q35,10 50,20" fill="orange" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundRemoverHero;
