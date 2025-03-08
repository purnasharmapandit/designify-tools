
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Paintbrush, 
  Globe, 
  ShoppingBag, 
  Palette,
  Presentation, 
  MonitorSmartphone
} from "lucide-react";

const useCases = [
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Web Design",
    description: "Create consistent and accessible color schemes for your website projects."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Graphic Design",
    description: "Find harmonious color combinations for logos, illustrations, and visual assets."
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Branding",
    description: "Develop brand color palettes that convey the right emotion and identity."
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Create color systems for interfaces that are both beautiful and usable."
  },
  {
    icon: <Presentation className="h-8 w-8" />,
    title: "Presentations",
    description: "Design slides with coordinated colors that enhance your message."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Social Media",
    description: "Create visually cohesive social profiles with consistent color themes."
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Use Color Palettes</h2>
          <p className="text-lg text-gray-600">
            Beautiful color combinations can transform your designs. Here's how our tool can help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-purple-100 rounded-full text-purple-500 w-fit">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
