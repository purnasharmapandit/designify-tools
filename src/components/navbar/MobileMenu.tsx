
import React from "react";
import { Link } from "react-router-dom";
import FreeToolsColumn from "./FreeToolsColumn";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  user: any;
  signOut: () => void;
  isLoading: boolean;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, user, signOut, isLoading }: MobileMenuProps) => {
  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 border-t border-gray-100">
        <Link 
          to="/"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        
        <div className="space-y-1 pl-2">
          <p className="px-3 py-1 text-xs font-semibold text-gray-500">Free Tools</p>
          <FreeToolsColumn setIsMenuOpen={setIsMenuOpen} />
        </div>
        
        <div className="space-y-1 pl-2">
          <p className="px-3 py-1 text-xs font-semibold text-gray-500">Premium Tools</p>
          <Link 
            to="/logo-maker"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Logo Maker
          </Link>
          <Link 
            to="/business-card-generator"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Business Card Generator
          </Link>
        </div>
        
        <Link 
          to="/pricing"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>
        
        <a 
          href="https://blog.mydesignly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </a>
        
        <Link 
          to="/contact-us"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        
        <Link 
          to="/about-us"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
