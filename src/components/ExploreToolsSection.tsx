
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

// All tool data from ToolsGrid except coming soon ones
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
    name: "Premium QR Code Generator",
    description: "Create QR codes with analytics, location tracking, and team access",
    color: "bg-blue-100 text-blue-500",
    link: "/qr-code/premium",
    category: "premium"
  },
  {
    icon: User,
    name: "AI Headshot Generator",
    description: "Turn regular photos into professional headshots with AI",
    color: "bg-blue-100 text-blue-500",
    link: "/headshot-generator",
    category: "premium"
  },
  {
    icon: Layout,
    name: "Business Card Generator",
    description: "Create professional business cards that leave a lasting impression",
    color: "bg-pink-100 text-pink-500",
    link: "/business-card-generator",
    category: "premium"
  },
  {
    icon: ChartBar,
    name: "Infographics Generator",
    description: "Create compelling infographics and visual data representations",
    color: "bg-orange-100 text-orange-500",
    link: "/infographics-generator",
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
  },
  {
    icon: CircleDashed,
    name: "Mesh Gradient Generator",
    description: "Create beautiful, unique mesh gradients for your designs",
    color: "bg-teal-100 text-teal-500",
    link: "/mesh-gradient-generator",
    category: "free"
  }
];

const ExploreToolsSection = () => {
  const premiumTools = TOOLS.filter(tool => tool.category === "premium");
  const freeTools = TOOLS.filter(tool => tool.category === "free");

  return (
    <section className="py-12 bg-[#eee]">
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

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold">Premium Tools</h3>
            <Badge variant="outline" className="ml-3 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 border-amber-300">
              <Award className="h-3 w-3 mr-1" /> Pro features
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {premiumTools.map((tool, index) => (
              <div key={index}>
                <ToolItem 
                  {...tool} 
                  badge={
                    <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white">
                      <Award className="h-3 w-3 mr-1" /> Premium
                    </Badge>
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold">Free Tools</h3>
            <Badge variant="outline" className="ml-3 bg-green-100 text-green-700 border-green-300">
              <Tag className="h-3 w-3 mr-1" /> No credit card required
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {freeTools.map((tool, index) => (
              <div key={index}>
                <ToolItem 
                  {...tool} 
                  badge={
                    <Badge className="bg-green-500 text-white">
                      <Tag className="h-3 w-3 mr-1" /> Free
                    </Badge>
                  }
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/tools" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary/90 transition-colors">
            View All Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreToolsSection;
