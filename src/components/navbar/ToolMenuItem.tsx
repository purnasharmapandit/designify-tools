
import React from "react";
import { Link } from "react-router-dom";

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
    className="group p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-50"
    onClick={onClick}
  >
    <div className={`${color} p-2 rounded-lg`}>
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">{name}</h4>
    </div>
  </Link>
);

export default ToolMenuItem;
