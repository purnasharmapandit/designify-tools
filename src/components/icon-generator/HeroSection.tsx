
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, PenTool, Palette, Wand2, Layers, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-5">
                AI Icon Generator
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Custom Icons</span> in Seconds
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Generate beautiful, custom icons with our AI icon maker. Choose from multiple styles and customize colors for your project needs.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: <PenTool className="h-4 w-4" />, text: "20+ Styles" },
                  { icon: <Palette className="h-4 w-4" />, text: "Custom Colors" },
                  { icon: <Wand2 className="h-4 w-4" />, text: "AI-Powered" },
                  { icon: <Layers className="h-4 w-4" />, text: "High Resolution" },
                  { icon: <Zap className="h-4 w-4" />, text: "Instant Generation" }
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
                <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-xl blur-xl transform rotate-6"></div>
                
                <div className="relative grid grid-cols-3 gap-4">
                  <motion.div 
                    className="col-span-1 bg-white rounded-xl shadow-md p-4 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-indigo-600">
                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17C7,17 7,12 7,12C7,12 7,7 12,7C17,7 17,12 17,12C17,12 17,17 12,17Z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="col-span-1 bg-white rounded-xl shadow-md p-4 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-violet-600">
                        <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5.04,8L12,11.85L18.96,8L12,4.15Z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="col-span-1 bg-white rounded-xl shadow-md p-4 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                        <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.5C14.34,8.5 16.46,9.43 18,10.94L16.8,12.12C15.58,10.91 13.88,10.17 12,10.17C10.12,10.17 8.42,10.91 7.2,12.12L6,10.94C7.54,9.43 9.66,8.5 12,8.5M12,11.83C13.4,11.83 14.67,12.39 15.6,13.3L14.4,14.47C13.79,13.87 12.94,13.5 12,13.5C11.06,13.5 10.21,13.87 9.6,14.47L8.4,13.3C9.33,12.39 10.6,11.83 12,11.83M12,15.17C12.94,15.17 13.7,15.91 13.7,16.83C13.7,17.75 12.94,18.5 12,18.5C11.06,18.5 10.3,17.75 10.3,16.83C10.3,15.91 11.06,15.17 12,15.17Z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="col-span-1 bg-white rounded-xl shadow-md p-4 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-600">
                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11C11.17,11 10.5,10.33 10.5,9.5C10.5,8.67 11.17,8 12,8C12.83,8 13.5,8.67 13.5,9.5C13.5,10.33 12.83,11 12,11Z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="col-span-1 bg-white rounded-xl shadow-md p-4 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-pink-600">
                        <path fill="currentColor" d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="col-span-1 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl shadow-md p-4 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Wand2 className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="col-span-3 bg-white rounded-xl shadow-md p-4"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-600">
                          <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <div className="h-6 w-16 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-indigo-800">Flat</span>
                      </div>
                      <div className="h-6 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-800">Outline</span>
                      </div>
                      <div className="h-6 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-800">3D</span>
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

export default HeroSection;
