
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ToolMenuItemProps {
  icon: React.ElementType;
  name: string;
  color: string;
  link: string;
  onClick?: () => void;
}

const ToolMenuItem = ({ 
  icon: Icon, 
  name, 
  color, 
  link, 
  onClick
}: ToolMenuItemProps) => (
  <Link 
    to={link} 
    className="group p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
    onClick={onClick}
  >
    <motion.div 
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      className={`${color} p-2 rounded-lg shadow-sm group-hover:shadow`}
    >
      <Icon className="h-5 w-5" />
    </motion.div>
    <div>
      <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">{name}</h4>
    </div>
  </Link>
);

export default ToolMenuItem;
