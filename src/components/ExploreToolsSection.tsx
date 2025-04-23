import { motion } from "framer-motion";
import ExploreToolsCard from "./ExploreToolsCard";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Paintbrush,
  QrCode,
  Layout,
  Palette,
  Mail,
  Scissors,
  CircleDashed
} from "lucide-react";

// All tool data moved here, matching Icon & description from /tools page where possible
const TOOLS = [
  {
    name: "Logo Maker",
    icon: Paintbrush,
    description: "Create professional logos with AI-powered design suggestions.",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
    link: "/logo-maker",
    badge: "premium" as "premium"
  },
  {
    name: "Background Remover",
    icon: Scissors,
    description: "Remove backgrounds from images with AI precision.",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
    link: "/background-remover",
    badge: "premium" as "premium"
  },
  // {
  //   name: "Presentation Maker",
  //   icon: Presentation,
  //   description: "Design professional presentations with ready-to-use templates.",
  //   color: "bg-blue-100",
  //   iconColor: "text-blue-500",
  //   link: "/presentation-maker",
  //   badge: "premium" as "premium"
  // },
  {
    name: "Business Card Generator",
    icon: Layout,
    description: "Create professional business cards that leave a lasting impression.",
    color: "bg-green-100",
    iconColor: "text-green-500",
    link: "/business-card-generator",
    badge: "premium" as "premium"
  },
  {
    name: "Color Palette Generator",
    icon: Palette,
    description: "Generate beautiful color schemes for your designs.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-500",
    link: "/free-color-palette-generator",
    badge: "free" as "free"
  },
  {
    name: "QR Code Generator",
    icon: QrCode,
    description: "Create customizable QR codes for your business or personal use.",
    color: "bg-green-100",
    iconColor: "text-green-500",
    link: "/free-qr-code-generator",
    badge: "free" as "free"
  },
  {
    name: "Email Signature",
    icon: Mail,
    description: "Create professional email signatures that make an impression.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    link: "/free-email-signature-generator",
    badge: "free" as "free"
  },
  // 7th tool - Mesh Gradient Maker (not shown on homepage)
  // {
  //   name: "Mesh Gradient Maker",
  //   icon: CircleDashed,
  //   description: "Create beautiful, unique mesh gradients for your designs.",
  //   color: "bg-teal-100",
  //   iconColor: "text-teal-500",
  //   link: "/mesh-gradient-generator",
  //   badge: "free" as "free"
  // }
];

const ExploreToolsSection = () => {
  // Take only the first 6 tools (presentation maker commented out, so mesh gradient also not shown)
  const visibleTools = TOOLS.slice(0, 6);

  return (
    <section className="py-8 bg-white">
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
            <ExploreToolsCard
              key={tool.name}
              icon={tool.icon}
              name={tool.name}
              description={tool.description}
              color={tool.color}
              iconColor={tool.iconColor}
              link={tool.link}
              badge={tool.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreToolsSection;
