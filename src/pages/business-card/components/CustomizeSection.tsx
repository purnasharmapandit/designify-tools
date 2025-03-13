
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";
import { CheckCircle } from "lucide-react";

interface CustomizeSectionProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  handleStartCustomizing: () => void;
}

const CustomizeSection = ({ 
  primaryColor, 
  setPrimaryColor, 
  handleStartCustomizing 
}: CustomizeSectionProps) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Customize Every Detail to Match Your Brand</h2>
            <p className="text-xl text-gray-600 mb-8">Our business card generator gives you complete control over your design. Customize colors, fonts, layouts, and more.</p>
            
            <div className="space-y-6">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Choose Primary Color</label>
                <ColorPicker 
                  label="Primary Color" 
                  value={primaryColor} 
                  onChange={setPrimaryColor} 
                  id="primary-color" 
                />
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Available Features:</h4>
                <div className="space-y-3">
                  {["Custom typography", "Logo upload", "QR code generation", "Multiple layouts", "Instant preview"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                className="mt-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"
                onClick={handleStartCustomizing}
              >
                Start Customizing
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <div className="absolute w-64 h-40 bg-white shadow-xl rounded-lg transform rotate-6 top-12 left-12 z-10">
              <div className="h-full p-4 flex flex-col justify-between bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg text-white">
                <div>
                  <div className="text-lg font-bold">Sarah Johnson</div>
                  <div className="text-xs opacity-90">Marketing Director</div>
                </div>
                <div className="text-xs">
                  <div>sarah@company.com</div>
                  <div>+1 (555) 987-6543</div>
                </div>
              </div>
            </div>
            
            <div className="absolute w-64 h-40 bg-white shadow-xl rounded-lg transform -rotate-3 top-36 left-32 z-20">
              <div className="h-full p-4 flex flex-col justify-between bg-white rounded-lg border-2 border-gray-200">
                <div>
                  <div className="text-lg font-bold text-gray-900">Michael Chen</div>
                  <div className="text-xs text-gray-600">Software Engineer</div>
                </div>
                <div className="text-xs text-gray-700">
                  <div>michael@techfirm.com</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
            
            <div className="absolute w-64 h-40 bg-white shadow-xl rounded-lg transform rotate-12 top-60 left-48 z-30">
              <div className="h-full p-4 flex flex-col justify-between bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white">
                <div>
                  <div className="text-lg font-bold">Alex Rivera</div>
                  <div className="text-xs opacity-90">Creative Director</div>
                </div>
                <div className="text-xs">
                  <div>alex@design.co</div>
                  <div>+1 (555) 234-5678</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
