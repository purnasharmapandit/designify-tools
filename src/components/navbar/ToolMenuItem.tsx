
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ToolMenuItemProps {
  icon: React.ElementType;
  name: string;
  color: string;
  link: string;
  onClick?: () => void;
  isNew?: boolean;
  isPremium?: boolean;
}

const ToolMenuItem = ({ 
  icon: Icon, 
  name, 
  color, 
  link, 
  onClick,
  isNew = false,
  isPremium = false
}: ToolMenuItemProps) => (
  <Link 
    to={link} 
    className="group p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
    onClick={onClick}
  >
    <motion.div 
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      className={`${color} p-2 rounded-lg shadow-sm group-hover:shadow relative`}
    >
      <Icon className="h-5 w-5" />
      {isNew && (
        <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="h-3 w-3 bg-red-500 rounded-full animate-ping absolute"></span>
        </span>
      )}
    </motion.div>
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">{name}</h4>
        {isPremium && (
          <span className="inline-flex items-center rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800">
            PRO
          </span>
        )}
        {isNew && (
          <span className="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-800">
            NEW
          </span>
        )}
      </div>
    </div>
  </Link>
);

export default ToolMenuItem;
