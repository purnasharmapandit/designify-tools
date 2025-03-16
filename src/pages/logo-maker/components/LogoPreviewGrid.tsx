
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface LogoDesign {
  id: string;
  imageUrl: string;
  config: {
    businessName: string;
  };
}

interface LogoPreviewGridProps {
  logos: LogoDesign[];
}

const LogoPreviewGrid = ({ logos }: LogoPreviewGridProps) => {
  const navigate = useNavigate();

  if (logos.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Your Generated Logos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            whileHover={{ y: -5, scale: 1.03 }}
            className="bg-white rounded-lg p-4 border cursor-pointer shadow-sm hover:shadow-md transition-all"
            onClick={() => navigate(`/logo-maker/editor/${logo.id}`)}
          >
            <img 
              src={logo.imageUrl} 
              alt={`Logo for ${logo.config.businessName}`} 
              className="w-full aspect-square object-contain"
            />
            <div className="mt-2 text-center text-sm font-medium text-gray-600">
              Variation {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoPreviewGrid;
