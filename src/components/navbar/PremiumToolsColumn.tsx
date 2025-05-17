
import React from "react";
import ToolMenuItem from "./ToolMenuItem";

interface PremiumToolsColumnProps {
  setIsMenuOpen?: (value: boolean) => void;
}

const PremiumToolsColumn = ({ setIsMenuOpen }: PremiumToolsColumnProps) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4 space-y-1 md:space-y-0">
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 h-5 w-5" {...props}>
            <path d="M20 14V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V14" stroke="currentColor" strokeWidth="2" />
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" />
            <path d="M15 19H9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L20 7" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L4 7" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="AI Logo Maker" 
        color="bg-purple-100"
        link="/logo-maker"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5" {...props}>
            <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )} 
        name="AI Icon Generator" 
        color="bg-blue-100"
        link="/icon-generator"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 h-5 w-5" {...props}>
            <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M8.7 10.7L15.3 7.3" stroke="currentColor" strokeWidth="2" />
            <path d="M8.7 13.3L15.3 16.7" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="Social Media Kit" 
        color="bg-indigo-100"
        link="/social-media-kit"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 h-5 w-5" {...props}>
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" />
            <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" fill="currentColor" />
            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="Image Editor" 
        color="bg-pink-100"
        link="/image-editor"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5" {...props}>
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <path d="M17.5 14V21" stroke="currentColor" strokeWidth="2" />
            <path d="M14 17.5H21" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="Premium QR Code" 
        color="bg-blue-100"
        link="/qr-code/premium"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 h-5 w-5" {...props}>
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" />
            <path d="M9 7H15C15.5523 7 16 7.44772 16 8V16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16V8C8 7.44772 8.44772 7 9 7Z" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="Business Cards" 
        color="bg-green-100"
        link="/business-card-generator"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
    </div>
  );
};

export default PremiumToolsColumn;
