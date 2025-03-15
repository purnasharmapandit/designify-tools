
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { industries } from "./LogoMakerForm";

export const sampleLogos = [
  {
    industry: "Technology",
    imageUrl: "/lovable-uploads/logo-template-1.png",
    style: "modern"
  },
  {
    industry: "Healthcare",
    imageUrl: "/lovable-uploads/logo-template-2.png",
    style: "elegant"
  },
  {
    industry: "Food",
    imageUrl: "/lovable-uploads/logo-template-3.png",
    style: "playful"
  },
  {
    industry: "Finance",
    imageUrl: "/lovable-uploads/logo-template-4.png",
    style: "geometric"
  }
];

const IndustryStylesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Professional Logo Designs for Every Industry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore logo styles tailored to your specific business category
          </p>
        </motion.div>
        
        <div className="relative">
          <Tabs defaultValue="technology" className="w-full">
            <div className="w-full overflow-x-auto pb-3 no-scrollbar">
              <TabsList className="inline-flex min-w-full w-max space-x-1 px-1">
                {industries.map((industry) => (
                  <TabsTrigger 
                    key={industry.value} 
                    value={industry.value} 
                    className="whitespace-nowrap text-xs md:text-sm px-3 py-1.5"
                  >
                    {industry.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {industries.map((industry) => (
              <TabsContent key={industry.value} value={industry.value} className="pt-4 mt-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                  {sampleLogos.map((logo, index) => (
                    <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-xl">
                      <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 mb-3 border">
                        <img 
                          src={logo.imageUrl} 
                          alt={`${industry.label} logo example`} 
                          className="max-h-16 md:max-h-24 object-contain" 
                        />
                      </div>
                      <p className="text-xs md:text-sm font-medium text-center">{logo.style} Style</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Tips for {industry.label} Logos</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Choose colors that reflect your {industry.label.toLowerCase()} brand values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Consider your audience preferences when selecting fonts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Ensure your logo works across all applications in your field</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default IndustryStylesSection;
