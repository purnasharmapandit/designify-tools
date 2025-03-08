
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-brand-yellow" />
              <span className="text-xl font-bold">DesignAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating beautiful designs has never been easier with our suite of AI-powered tools.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/logo-maker" className="text-gray-400 hover:text-white transition-colors">Logo Maker</Link></li>
              <li><Link to="/qr-code-generator" className="text-gray-400 hover:text-white transition-colors">QR Code Generator</Link></li>
              <li><Link to="/color-palette-generator" className="text-gray-400 hover:text-white transition-colors">Color Palette Generator</Link></li>
              <li><Link to="/icon-generator" className="text-gray-400 hover:text-white transition-colors">Icon Generator</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Profile Pic Generator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Card Generator</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DesignAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
