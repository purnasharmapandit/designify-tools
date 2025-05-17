
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FreeToolsColumn from "./FreeToolsColumn";
import PremiumToolsColumn from "./PremiumToolsColumn";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  user: any;
  signOut: () => void;
  isLoading: boolean;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, user, signOut, isLoading }: MobileMenuProps) => {
  const [showFreeTools, setShowFreeTools] = useState(false);
  const [showPremiumTools, setShowPremiumTools] = useState(false);
  
  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden fixed inset-x-0 top-16 bg-white dark:bg-gray-800 z-40 max-h-[80vh] overflow-y-auto shadow-lg border-t border-gray-100 dark:border-gray-700">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link 
          to="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        
        {/* Free Tools Dropdown */}
        <div className="space-y-1">
          <button 
            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
            onClick={() => setShowFreeTools(!showFreeTools)}
          >
            <span>Free Tools</span>
            {showFreeTools ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          
          {showFreeTools && (
            <div className="ml-4 border-l-2 border-gray-100 pl-2 space-y-1">
              <FreeToolsColumn setIsMenuOpen={setIsMenuOpen} />
            </div>
          )}
        </div>
        
        {/* Premium Tools Dropdown */}
        <div className="space-y-1">
          <button 
            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
            onClick={() => setShowPremiumTools(!showPremiumTools)}
          >
            <span>Premium Tools</span>
            {showPremiumTools ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          
          {showPremiumTools && (
            <div className="ml-4 border-l-2 border-gray-100 pl-2 space-y-1">
              <PremiumToolsColumn setIsMenuOpen={setIsMenuOpen} />
            </div>
          )}
        </div>
        
        <Link 
          to="/pricing"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>
        
        <a 
          href="https://blog.mydesignly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </a>
        
        <Link 
          to="/contact-us"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        
        <Link 
          to="/about-us"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>

        {/* User Authentication Section */}
        <div className="pt-4 border-t border-gray-200">
          {isLoading ? (
            <div className="px-3 py-2">
              <div className="h-10 w-full bg-gray-200 animate-pulse rounded-full"></div>
            </div>
          ) : user ? (
            <div className="space-y-2 px-3 py-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 w-full justify-start"
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
              >
                <span>Sign out</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Profile</span>
              </Button>
            </div>
          ) : (
            <div className="px-3 py-2">
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="default"
                  className="w-full font-medium transition-all"
                >
                  Sign in
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
