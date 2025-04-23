
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Paintbrush,
  QrCode,
  Layout,
  Palette,
  Mail,
  Scissors,
  CircleDashed
} from "lucide-react";
import ToolCard from "./ToolCard";

// All tool data in one array
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
    link: "/color-palette-generator",
    badge: "free" as "free"
  },
  {
    name: "QR Code Designer",
    icon: QrCode,
    description: "Create customizable QR codes for your business or personal use.",
    color: "bg-amber-100",
    iconColor: "text-amber-500",
    link: "/qr-code-generator",
    badge: "free" as "free"
  },
  {
    name: "Email Signature",
    icon: Mail,
    description: "Create professional email signatures that make an impression.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    link: "/email-signature-generator",
    badge: "free" as "free"
  }
];

// Only show the first 6 tools
const visibleTools = TOOLS.slice(0, 6);

const ExploreToolsSection = () => {
  return (
    <section className="py-6 bg-[#eee]">
      {/* Changed background to off-white and reduced top/bottom padding */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Explore Our Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our full suite of design tools to enhance your creative workflow
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {visibleTools.map((tool, index) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              color={tool.color}
              iconColor={tool.iconColor}
              link={tool.link}
              className="h-full px-2 py-2 sm:px-3 sm:py-3" // more compact on desktop
              // Compact design: uses smaller padding within each card
              // Can't set icon here, so we'll adjust the card below
            >
              {/* Intentionally left blank: ToolCard renders icon internally as ✦ for now */}
            </ToolCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreToolsSection;
