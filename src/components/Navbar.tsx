
import { Button } from "@/components/ui/button";
import { Menu, Wand2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { FreeToolsMegaMenu } from "./navbar/FreeToolsMegaMenu";
import { PaidToolsMegaMenu } from "./navbar/PaidToolsMegaMenu";
import UserMenu from "./navbar/UserMenu";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isLoading } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-primary">
              <Wand2 className="h-6 w-6" />
              <span className="text-xl font-bold font-display">MyDesignly</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Home
            </Link>
            
            <FreeToolsMegaMenu />

            <PaidToolsMegaMenu />

            <Link 
              to="/pricing" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            
            <a 
              href="https://blog.mydesignly.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Blog
            </a>
            
            <Link 
              to="/contact-us" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            
            <Link 
              to="/about-us" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              About Us
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <UserMenu user={user} signOut={signOut} isLoading={isLoading} />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <MobileMenu 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          user={user}
          signOut={signOut}
          isLoading={isLoading}
        />
      </div>
    </header>
  );
};

export default Navbar;
