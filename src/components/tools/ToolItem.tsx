
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ToolItemProps { 
  icon: LucideIcon; 
  name: string; 
  description: string;
  color: string;
  link?: string;
  comingSoon?: boolean;
  badge?: React.ReactNode;
  category?: string;
}

const ToolItem = ({ icon: Icon, name, description, color, link, comingSoon, badge }: ToolItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`${color} p-3 rounded-lg w-fit group-hover:scale-110 transition-transform`}>
        <Icon className="h-6 w-6" />
      </div>
      {badge && (
        <div>{badge}</div>
      )}
    </div>
    
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    
    <p className="text-gray-600">{description}</p>
    
    {comingSoon && (
      <div className="absolute top-4 right-4">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Coming Soon</span>
      </div>
    )}
    
    {link && (
      <div className="mt-4">
        <Link to={link}>
          <Button variant="outline" size="sm">{comingSoon ? "Learn More" : "Try Now"}</Button>
        </Link>
      </div>
    )}
  </motion.div>
);

export default ToolItem;
