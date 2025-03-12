
import React from "react";
import { motion } from "framer-motion";
import { Image, ShoppingBag, PenTool, Camera, Share2, Users } from "lucide-react";

const UseCaseCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-sm p-6 border border-purple-100"
  >
    <div className="bg-purple-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-purple-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const UseCasesSection = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: "E-commerce Product Photos",
      description: "Create clean, professional product images with transparent backgrounds for your online store."
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Extract elements from images for use in designs, collages, and marketing materials."
    },
    {
      icon: Camera,
      title: "Professional Portraits",
      description: "Enhance headshots and portraits by removing distracting backgrounds."
    },
    {
      icon: Image,
      title: "Social Media Content",
      description: "Create eye-catching social media posts with subjects that stand out against custom backgrounds."
    },
    {
      icon: Share2,
      title: "Digital Marketing",
      description: "Create consistent visual branding by placing products against branded backgrounds."
    },
    {
      icon: Users,
      title: "Team Photos",
      description: "Standardize team photos by placing everyone against the same background."
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our background remover can help with various creative and professional needs
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
