
import React from "react";
import { Check, Zap, RefreshCw, Copy, Sparkles, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const guides = [
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Generate Palettes",
    description: "Click the "Generate New Palette" button or press the Space key to create new color combinations instantly.",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-100 text-blue-500"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Lock Colors",
    description: "Found a color you like? Click the lock icon or press 1-5 keys to lock colors so they won't change when generating new palettes.",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-100 text-primary"
  },
  {
    icon: <Copy className="h-5 w-5" />,
    title: "Save Your Work",
    description: "Copy individual colors or export the entire palette in your preferred format (HEX, RGB, or CSS) to use in your projects.",
    gradient: "bg-gradient-to-br from-pink-50 to-pink-100",
    iconBg: "bg-pink-100 text-pink-500"
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Customize Palette Type",
    description: "Open settings with the gear icon or S key to choose from different palette types like analogous, monochromatic, or complementary.",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconBg: "bg-amber-100 text-amber-500"
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile Friendly",
    description: "Our tool works great on mobile devices. Swipe through colors and tap to copy individual shades for your design projects on the go.",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-100 text-green-500"
  },
  {
    icon: <Check className="h-5 w-5" />,
    title: "Ready to Use",
    description: "All palette colors are carefully selected to work well together. Use them for websites, applications, branding, or any creative project.",
    gradient: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-500"
  }
];

const GuideSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Use The Color Palette Generator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intuitive tools make it easy to create and use beautiful color palettes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-md transition-shadow ${guide.gradient}`}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className={`mr-4 p-3 rounded-full w-fit ${guide.iconBg}`}>
                      {guide.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                      <p className="text-muted-foreground">
                        {guide.description}
                      </p>
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

export default GuideSection;
