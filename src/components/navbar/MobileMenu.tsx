
import React from "react";
import { Link } from "react-router-dom";

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
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
        <Link 
          to="/free-qr-code-generator"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          QR Code Generator
        </Link>
        <Link 
          to="/free-color-palette-generator"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Color Palette Generator
        </Link>
        <Link 
          to="/free-email-signature-generator"
          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Email Signature Generator
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
