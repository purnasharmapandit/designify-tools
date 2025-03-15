
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ToolItemProps { 
  icon: LucideIcon; 
  name: string; 
  description: string;
  color: string;
  link?: string;
  comingSoon?: boolean;
}

const ToolItem = ({ icon: Icon, name, description, color, link, comingSoon }: ToolItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
  >
    <div className={`${color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
      <Icon className="h-6 w-6" />
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
