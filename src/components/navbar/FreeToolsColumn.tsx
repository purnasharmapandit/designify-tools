
import React from "react";
import ToolMenuItem from "./ToolMenuItem";

interface FreeToolsColumnProps {
  setIsMenuOpen?: (value: boolean) => void;
}

const FreeToolsColumn = ({ setIsMenuOpen }: FreeToolsColumnProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 h-5 w-5" {...props}>
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <path d="M17.5 14V21" stroke="currentColor" strokeWidth="2" />
            <path d="M14 17.5H21" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="QR Code Generator" 
        color="bg-purple-100" 
        link="/qr-code-generator"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5" {...props}>
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10Z" fill="currentColor" />
            <path d="M15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z" fill="currentColor" />
          </svg>
        )} 
        name="Color Palette Generator" 
        color="bg-blue-100"
        link="/color-palette-generator"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 h-5 w-5" {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M7 15C7 13.8954 7.89543 13 9 13H15C16.1046 13 17 13.8954 17 15V19H7V15Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="Business Card Generator" 
        color="bg-pink-100"
        link="/business-card-generator"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 h-5 w-5" {...props}>
            <path d="M15 7H21V9H15V7Z" fill="currentColor" />
            <path d="M15 11H21V13H15V11Z" fill="currentColor" />
            <path d="M15 15H21V17H15V15Z" fill="currentColor" />
            <path d="M3 7H9V9H3V7Z" fill="currentColor" />
            <path d="M3 11H9V13H3V11Z" fill="currentColor" />
            <path d="M3 15H9V17H3V15Z" fill="currentColor" />
            <path d="M11 7H13V9H11V7Z" fill="currentColor" />
            <path d="M11 11H13V13H11V11Z" fill="currentColor" />
            <path d="M11 15H13V17H11V15Z" fill="currentColor" />
          </svg>
        )} 
        name="Background Remover" 
        color="bg-green-100"
        link="/background-remover"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
      
      <ToolMenuItem 
        icon={(props) => (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-600 h-5 w-5" {...props}>
            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="2" />
            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" />
          </svg>
        )} 
        name="Email Signature Generator" 
        color="bg-yellow-100"
        link="/email-signature-generator"
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      />
    </div>
  );
};

export default FreeToolsColumn;
