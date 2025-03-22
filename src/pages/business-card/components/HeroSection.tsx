
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Box, 
  Palette, 
  Download, 
  PenTool, 
  Crop, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Building, 
  Image
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  scrollToTemplates: () => void;
  activeTemplate: string;
  setActiveTemplate: (templateId: string) => void;
  templates: Array<{ id: string; name: string; color: string }>;
}

const HeroSection = ({ 
  scrollToTemplates, 
  activeTemplate, 
  setActiveTemplate,
  templates
}: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId: string) => {
    setActiveTemplate(templateId);
  };

  const handleStartCreating = () => {
    navigate(`/business-card-editor?template=${activeTemplate}`);
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden w-full">
      <div className="absolute inset-0 bg-blue-900 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-5">
                Professional Business Cards in Minutes
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Create Stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Business Cards</span> with AI
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-lg">
                Design professional business cards in minutes with our AI-powered tools. Choose from multiple templates and customize to your brand.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-lg h-14 px-8"
                  onClick={handleStartCreating}
                >
                  Start Creating Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-2 h-14 px-8 text-lg bg-white/10 text-white border-white/20 hover:bg-white/20"
                  onClick={scrollToTemplates}
                >
                  View Templates
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-${i % 2 === 0 ? 'blue' : 'purple'}-400 to-${i % 2 === 0 ? 'indigo' : 'pink'}-500`}></div>
                  ))}
                </div>
                <p className="text-sm text-gray-200">
                  <span className="font-bold">5,000+</span> business professionals trust our platform
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Card Shadow/Glow Effect */}
                <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl transform rotate-6"></div>
                
                {/* New business cards image */}
                <img 
                  src="/lovable-uploads/8e42a692-0d62-4db7-b2b5-ca0cabe78369.png" 
                  alt="Creative business cards with colorful design" 
                  className="w-full relative z-10"
                />
              </div>

              <div className="flex justify-center mt-6 gap-4">
                {templates.slice(0, 4).map((template) => (
                  <motion.button
                    key={template.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 rounded-full shadow-sm ${activeTemplate === template.id ? 'ring-2 ring-offset-2 ring-white' : ''}`}
                    style={{ backgroundColor: template.color }}
                    onClick={() => handleTemplateSelect(template.id)}
                    aria-label={`Select ${template.name} template`}
                  ></motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Features Pills */}
      <div className="px-4 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Box className="h-4 w-4" />, text: "100+ Templates" },
              { icon: <Palette className="h-4 w-4" />, text: "Custom Colors" },
              { icon: <Download className="h-4 w-4" />, text: "Export as PDF/PNG" },
              { icon: <PenTool className="h-4 w-4" />, text: "Logo Upload" },
              { icon: <Crop className="h-4 w-4" />, text: "Custom Dimensions" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-white"
              >
                {feature.icon}
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
