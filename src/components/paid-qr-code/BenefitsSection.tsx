
import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  LineChart, 
  Zap, 
  Settings 
} from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Premium QR Codes?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock powerful insights and maximize ROI with our advanced QR code analytics platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/placeholder.svg" 
              alt="QR Analytics Dashboard" 
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg">
              <LineChart className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Make Data-Driven Decisions</h3>
                <p className="text-gray-600">
                  Use real scan data to optimize your marketing campaigns and increase engagement rates.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Target Your Audience Better</h3>
                <p className="text-gray-600">
                  Understand where and when your QR codes are being scanned to refine your targeting strategies.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Boost Marketing ROI</h3>
                <p className="text-gray-600">
                  Measure campaign performance accurately and allocate budget to the most effective channels.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalable Solution</h3>
                <p className="text-gray-600">
                  Add users and QR codes on demand as your business grows without disrupting your operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
