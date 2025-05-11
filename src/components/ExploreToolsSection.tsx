
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Paintbrush,
  QrCode,
  Layout,
  Palette,
  Mail,
  Scissors,
  CircleDashed,
  Award,
  Tag,
  PenTool,
  User,
  ChartBar
} from "lucide-react";
import ToolItem from "./tools/ToolItem";

// All tool data moved here, matching the ToolsGrid component
const TOOLS = [
  {
    icon: Paintbrush,
    name: "Logo Maker",
    description: "Create professional logos with AI-powered design suggestions",
    color: "bg-purple-100 text-purple-500",
    link: "/logo-maker",
    category: "premium"
  },
  {
    icon: PenTool,
    name: "Icon Generator",
    description: "Design custom icons for your projects",
    color: "bg-emerald-100 text-emerald-500",
    link: "/icon-generator",
    category: "premium"
  },
  {
    icon: QrCode,
    name: "QR Code Generator",
    description: "Create customizable QR codes for your business or personal use",
    color: "bg-green-100 text-green-500",
    link: "/free-qr-code-generator",
    category: "free"
  },
  {
    icon: Palette,
    name: "Color Palette Generator",
    description: "Generate beautiful color schemes for your designs",
    color: "bg-yellow-100 text-yellow-500",
    link: "/free-color-palette-generator",
    category: "free"
  },
  {
    icon: Mail,
    name: "Email Signature Generator",
    description: "Create professional email signatures that make an impression",
    color: "bg-blue-100 text-blue-500",
    link: "/free-email-signature-generator",
    category: "free"
  },
  {
    icon: Scissors,
    name: "Background Remover",
    description: "Remove backgrounds from images with AI precision",
    color: "bg-purple-100 text-purple-500",
    link: "/background-remover",
    category: "free"
  }
];

const ExploreToolsSection = () => {
  // Take only the first 6 tools to maintain 3x2 grid
  const visibleTools = TOOLS.slice(0, 6);

  return (
    <section className="py-8 bg-[#eee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Explore Our Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our full suite of design tools to enhance your creative workflow
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleTools.map((tool, index) => (
            <div key={index}>
              <ToolItem 
                {...tool} 
                badge={
                  tool.category === "premium" ? 
                    <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white">
                      <Award className="h-3 w-3 mr-1" /> Premium
                    </Badge> : 
                  tool.category === "free" ? 
                    <Badge className="bg-green-500 text-white">
                      <Tag className="h-3 w-3 mr-1" /> Free
                    </Badge> : 
                    undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreToolsSection;
