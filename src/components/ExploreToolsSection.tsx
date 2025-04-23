
import { motion } from "framer-motion";
import ExploreToolsCard from "./ExploreToolsCard";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Paintbrush,
  QrCode,
  Presentation,
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
    badge: "premium"
  },
  {
    name: "Background Remover",
    icon: Scissors,
    description: "Remove backgrounds from images with AI precision.",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
    link: "/background-remover",
    badge: "premium"
  },
  {
    name: "Presentation Maker",
    icon: Presentation,
    description: "Design professional presentations with ready-to-use templates.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    link: "/presentation-maker",
    badge: "premium"
  },
  {
    name: "Business Card Generator",
    icon: Layout,
    description: "Create professional business cards that leave a lasting impression.",
    color: "bg-green-100",
    iconColor: "text-green-500",
    link: "/business-card-generator",
    badge: "premium"
  },
  {
    name: "Color Palette Generator",
    icon: Palette,
    description: "Generate beautiful color schemes for your designs.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-500",
    link: "/color-palette-generator",
    badge: "free"
  },
  {
    name: "QR Code Designer",
    icon: QrCode,
    description: "Create customizable QR codes for your business or personal use.",
    color: "bg-amber-100",
    iconColor: "text-amber-500",
    link: "/qr-code-generator",
    badge: "free"
  },
  {
    name: "Email Signature",
    icon: Mail,
    description: "Create professional email signatures that make an impression.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    link: "/email-signature-generator",
    badge: "free"
  },
  {
    name: "Mesh Gradient Maker",
    icon: CircleDashed,
    description: "Create beautiful, unique mesh gradients for your designs.",
    color: "bg-teal-100",
    iconColor: "text-teal-500",
    link: "/mesh-gradient-generator",
    badge: "free"
  }
];

const ExploreToolsSection = () => {
  return (
    <section className="py-8 bg-white">
      {/* reduced from py-16 to py-8 to match new padding */}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TOOLS.map((tool, index) => (
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
