
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
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Web Design",
    description: "Create consistent and accessible color schemes for your website projects.",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-100 text-primary"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Graphic Design",
    description: "Find harmonious color combinations for logos, illustrations, and visual assets.",
    gradient: "bg-gradient-to-br from-pink-50 to-pink-100",
    iconBg: "bg-pink-100 text-pink-500"
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Branding",
    description: "Develop brand color palettes that convey the right emotion and identity.",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-100 text-blue-500"
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Create color systems for interfaces that are both beautiful and usable.",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconBg: "bg-amber-100 text-amber-500"
  },
  {
    icon: <Presentation className="h-6 w-6" />,
    title: "Presentations",
    description: "Design slides with coordinated colors that enhance your message.",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-100 text-green-500"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Social Media",
    description: "Create visually cohesive social profiles with consistent color themes.",
    gradient: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-500"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Use Color Palettes</h2>
          <p className="text-lg text-muted-foreground">
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
              <Card className={`h-full hover:shadow-md transition-shadow ${useCase.gradient}`}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className={`mr-4 p-3 rounded-full w-fit ${useCase.iconBg}`}>
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
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
