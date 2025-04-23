
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ExploreToolsCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  link?: string;
  badge?: "premium" | "free";
  comingSoon?: boolean;
  iconColor: string;
}

const ExploreToolsCard = ({
  icon: Icon,
  name,
  description,
  color,
  link,
  badge,
  comingSoon,
  iconColor,
}: ExploreToolsCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
    style={{ aspectRatio: "1/1" }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`${color} p-3 rounded-lg w-fit group-hover:scale-110 transition-transform`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      {badge === "premium" && (
        <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs">
          Premium
        </Badge>
      )}
      {badge === "free" && (
        <Badge className="bg-green-500 text-white text-xs">
          Free
        </Badge>
      )}
    </div>
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
    {comingSoon && (
      <div className="absolute top-4 right-4">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Coming Soon</span>
      </div>
    )}
    {link && (
      <div className="mt-4">
        <Link to={link}>
          <span className="inline-block px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
            {comingSoon ? "Learn More" : "Try Now"}
          </span>
        </Link>
      </div>
    )}
  </motion.div>
);

export default ExploreToolsCard;
