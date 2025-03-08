
import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingBag, MessageCircle, PenTool, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Websites & Landing Pages",
    description: "Add professional icons to enhance user experience and visual appeal on your website."
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Applications",
    description: "Create consistent icon sets for your app's interface and navigation elements."
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "E-commerce & Products",
    description: "Design category icons, feature highlights, and product indicators for your store."
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Social Media Content",
    description: "Enhance your posts and stories with custom icons that match your brand style."
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Presentations & Documents",
    description: "Make your slides and reports more engaging with custom icon visuals."
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Software & Tech Products",
    description: "Create feature icons, menu elements, and visual indicators for your software."
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perfect Icons for Every Use Case</h2>
          <p className="text-lg text-gray-600">
            Our AI-generated icons are ideal for a wide range of applications across digital and print projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-secondary/10 rounded-full text-secondary w-fit">
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
