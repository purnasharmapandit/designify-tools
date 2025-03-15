
import React from "react";
import { Button } from "@/components/ui/button";
import { Palette, RefreshCw, Droplet, Download, Eye, Bookmark, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onGenerateNewPalette: () => void;
}

const HeroSection = ({ onGenerateNewPalette }: HeroSectionProps) => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-5">
                Color Palette Generator
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Beautiful Color Palettes</span> in Seconds
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Generate harmonious color combinations for your projects with our intuitive color palette tool. Perfect for designers and creatives.
              </p>
              
              <Button 
                onClick={onGenerateNewPalette}
                size="lg"
                className="mb-6"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate New Palette
              </Button>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: <Droplet className="h-4 w-4" />, text: "Harmonious Colors" },
                  { icon: <Download className="h-4 w-4" />, text: "Export Options" },
                  { icon: <Eye className="h-4 w-4" />, text: "Preview Mode" },
                  { icon: <Bookmark className="h-4 w-4" />, text: "Save Favorites" },
                  { icon: <Sparkles className="h-4 w-4" />, text: "AI Suggestions" }
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
                <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl transform rotate-6"></div>
                
                <motion.div 
                  className="relative bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10 p-6"
                  animate={{ rotate: [0, 0] }}
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-3">
                      <div className="h-16 w-16 rounded-md bg-purple-500"></div>
                      <div className="h-16 w-16 rounded-md bg-purple-400"></div>
                      <div className="h-16 w-16 rounded-md bg-pink-400"></div>
                      <div className="h-16 w-16 rounded-md bg-pink-500"></div>
                      <div className="h-16 w-16 rounded-md bg-red-400"></div>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between mb-2">
                        <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                        <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                      </div>
                      <div className="grid grid-cols-5 gap-3">
                        <div className="h-6 w-full bg-gray-100 rounded-md flex items-center justify-center">
                          <div className="h-4 w-12 bg-gray-200 rounded-sm"></div>
                        </div>
                        <div className="h-6 w-full bg-gray-100 rounded-md flex items-center justify-center">
                          <div className="h-4 w-12 bg-gray-200 rounded-sm"></div>
                        </div>
                        <div className="h-6 w-full bg-gray-100 rounded-md flex items-center justify-center">
                          <div className="h-4 w-12 bg-gray-200 rounded-sm"></div>
                        </div>
                        <div className="h-6 w-full bg-gray-100 rounded-md flex items-center justify-center">
                          <div className="h-4 w-12 bg-gray-200 rounded-sm"></div>
                        </div>
                        <div className="h-6 w-full bg-gray-100 rounded-md flex items-center justify-center">
                          <div className="h-4 w-12 bg-gray-200 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <RefreshCw className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <Download className="h-4 w-4 text-white" />
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
