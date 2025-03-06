
import { Button } from "@/components/ui/button";
import { Menu, Wand2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-primary">
              <Wand2 className="h-6 w-6" />
              <span className="text-xl font-bold font-display">Designify</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/tools" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Tools
            </Link>
            <Link 
              to="/pricing" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/contact-us" 
              className="font-medium text-gray-900 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="hidden md:inline-flex rounded-full font-medium px-6 transition-all"
            >
              Login
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/tools"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
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
                <Button
                  variant="default"
                  className="w-full rounded-full font-medium px-6 transition-all"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
