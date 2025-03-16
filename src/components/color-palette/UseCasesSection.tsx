
import React from "react";
import { motion } from "framer-motion";
import { 
  GalleryHorizontalEnd,
  PaintBucket,
  Palette,
  Smartphone,
  MonitorSmartphone,
  Brush
} from "lucide-react";

const useCases = [
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "Web Design",
    description: "Create cohesive color schemes for websites that enhance user experience and reinforce brand identity.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <PaintBucket className="h-6 w-6" />,
    title: "Branding",
    description: "Develop distinctive color palettes that capture your brand's personality and create recognition.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "UI Design",
    description: "Design visually appealing interfaces with color schemes that guide users through your application.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: <GalleryHorizontalEnd className="h-6 w-6" />,
    title: "Social Media",
    description: "Create consistent, eye-catching graphics with harmonious colors that stand out in social feeds.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: <Brush className="h-6 w-6" />,
    title: "Illustration",
    description: "Find the perfect color combinations for digital art, illustrations, and creative projects.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Print Design",
    description: "Generate export-ready color palettes for business cards, brochures, and other printed materials.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Color Palettes for Every Design Need</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our color palette generator can enhance your creative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full ${useCase.color} flex items-center justify-center mb-4`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
