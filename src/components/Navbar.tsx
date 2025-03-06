
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          
          <div className="flex items-center">
            <Button
              variant="default"
              className="rounded-full font-medium px-6 transition-all"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
