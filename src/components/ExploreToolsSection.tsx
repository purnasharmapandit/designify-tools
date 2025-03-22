
import { motion } from "framer-motion";
import ToolCard from "./ToolCard";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ExploreToolsSection = () => {
  // Premium tools
  const premiumTools = [
    {
      name: "Logo Maker",
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-500",
      link: "/logo-maker",
      badge: "premium"
    },
    {
      name: "Background Remover",
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-500",
      link: "/background-remover",
      badge: "premium"
    },
    {
      name: "Presentation Maker",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-500",
      link: "/presentation-maker",
      badge: "premium" 
    },
    {
      name: "Business Card Generator",
      color: "bg-gradient-to-br from-green-100 to-green-200",
      iconColor: "text-green-500",
      link: "/business-card-generator",
      badge: "premium"
    }
  ];

  // Free tools
  const freeTools = [
    {
      name: "Color Palette Generator",
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-500",
      link: "/color-palette-generator"
    },
    {
      name: "QR Code Designer",
      color: "bg-gradient-to-br from-amber-100 to-amber-200",
      iconColor: "text-amber-500",
      link: "/qr-code-generator"
    },
    {
      name: "Email Signature",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-500",
      link: "/email-signature-generator"
    },
    {
      name: "Social Banner Maker",
      color: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      iconColor: "text-emerald-500",
      link: "/social-banner-maker",
      comingSoon: true
    }
  ];

  return (
    <section className="py-16 bg-white">
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
        
        {/* Premium tools row */}
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {premiumTools.map((tool, index) => (
              <Link key={index} to={tool.link || "#"} className="block">
                <div className="relative">
                  <ToolCard
                    name={tool.name}
                    color={tool.color}
                    iconColor={tool.iconColor}
                    className="rounded-2xl"
                  />
                  {tool.comingSoon && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  {tool.badge === "premium" && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs">
                        Premium
                      </Badge>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Free tools row */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {freeTools.map((tool, index) => (
              <Link key={index} to={tool.link || "#"} className="block">
                <div className="relative">
                  <ToolCard
                    name={tool.name}
                    color={tool.color}
                    iconColor={tool.iconColor}
                    className="rounded-2xl"
                  />
                  {tool.comingSoon && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  {tool.badge === "premium" && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs">
                        Premium
                      </Badge>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreToolsSection;
