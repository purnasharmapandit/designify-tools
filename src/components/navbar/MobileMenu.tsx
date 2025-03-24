
import { Link } from "react-router-dom";
import { User, LogOut, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreditBalance } from "@/components/CreditBalance";

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
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link 
          to="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        
        {/* Free Tools Mobile Section */}
        <div className="px-3 py-2 rounded-md text-base font-medium text-gray-900">
          Free Tools
          <div className="pl-4 mt-2 space-y-1 border-l border-gray-200">
            <Link 
              to="/qr-code-generator"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              QR Code Generator
            </Link>
            <Link 
              to="/color-palette-generator"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Color Palette Generator
            </Link>
            <Link 
              to="/business-card-generator"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Business Card Generator
            </Link>
            <Link 
              to="/background-remover"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Background Remover
            </Link>
            <Link 
              to="/email-signature-generator"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Email Signature Generator
            </Link>
            <Link 
              to="/mesh-gradient-generator"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Mesh Gradient Generator
            </Link>
          </div>
        </div>
        
        {/* AI Tools Mobile Section */}
        <div className="px-3 py-2 rounded-md text-base font-medium text-gray-900">
          AI Tools <Sparkles className="inline h-3.5 w-3.5 text-brand-purple" />
          <div className="pl-4 mt-2 space-y-1 border-l border-gray-200">
            <Link 
              to="/logo-maker"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Logo Maker
            </Link>
            <Link 
              to="/icon-generator"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Icon Generator
            </Link>
          </div>
        </div>
        
        <Link 
          to="/tools"
          className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          View All Tools
        </Link>
        
        <Link 
          to="/pricing"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link 
          to="/contact-us"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <div className="mt-4">
          {isLoading ? (
            <div className="h-10 w-full bg-gray-200 animate-pulse rounded-full"></div>
          ) : user ? (
            <div className="space-y-2">
              <div className="px-3 py-2">
                <CreditBalance />
              </div>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </Button>
            </div>
          ) : (
            <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="default"
                className="w-full rounded-full font-medium px-6 transition-all"
              >
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
