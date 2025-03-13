
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface TemplatesSectionProps {
  designSectionRef: React.RefObject<HTMLDivElement>;
  handleTemplateSelection: (templateId: string) => void;
}

const TemplatesSection = ({ designSectionRef, handleTemplateSelection }: TemplatesSectionProps) => {
  const navigate = useNavigate();

  const templates = [
    { id: "minimal", name: "Minimal", color: "bg-gray-50", textColor: "text-gray-900" },
    { id: "corporate", name: "Corporate", color: "bg-blue-50", textColor: "text-blue-900" },
    { id: "creative", name: "Creative", color: "bg-yellow-50", textColor: "text-yellow-900" },
    { id: "bold", name: "Bold", color: "bg-red-50", textColor: "text-red-900" },
    { id: "elegant", name: "Elegant", color: "bg-purple-50", textColor: "text-purple-900" },
    { id: "modern", name: "Modern", color: "bg-green-50", textColor: "text-green-900" },
    { id: "professional", name: "Professional", color: "bg-indigo-50", textColor: "text-indigo-900" },
    { id: "vibrant", name: "Vibrant", color: "bg-pink-50", textColor: "text-pink-900" },
    { id: "eco", name: "Eco Green", color: "bg-emerald-50", textColor: "text-emerald-900" },
    { id: "gradient", name: "Gradient", color: "bg-sky-50", textColor: "text-sky-900" },
    { id: "vintage", name: "Vintage", color: "bg-stone-50", textColor: "text-stone-900" },
    { id: "geometric", name: "Geometric", color: "bg-fuchsia-50", textColor: "text-fuchsia-900" }
  ];

  return (
    <section ref={designSectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Template Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find the perfect template for your business card among our diverse collection.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map((template, i) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`${template.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 aspect-[1.8/1] relative overflow-hidden group`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="rounded-full"
                  onClick={() => handleTemplateSelection(template.id)}
                >
                  Use Template
                </Button>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className={`text-lg font-bold ${template.textColor}`}>{template.name}</h3>
                  <p className={`text-sm ${template.textColor} opacity-70`}>Business Card</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full"
            onClick={() => navigate("/business-card-editor")}
          >
            Start Customizing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
