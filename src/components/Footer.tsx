
import { motion } from "framer-motion";
import { Sparkles, Award, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Define Free tools and Premium tools
  const freeTools = [
    { name: "QR Code Generator", link: "/qr-code-generator" },
    { name: "Color Palette Generator", link: "/color-palette-generator" },
    { name: "Email Signature Generator", link: "/email-signature-generator" },
    { name: "Background Remover", link: "/background-remover" },
    { name: "Mesh Gradient Generator", link: "/mesh-gradient-generator" }
  ];

  const premiumTools = [
    { name: "Logo Maker", link: "/logo-maker" },
    { name: "Icon Generator", link: "/icon-generator" },
    { name: "Premium QR Code", link: "/qr-code/premium" },
    { name: "AI Headshot Generator", link: "/headshot-generator" },
    { name: "Business Card Generator", link: "/business-card-generator" },
    { name: "Infographics Generator", link: "/infographics-generator" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-brand-yellow" />
              <span className="text-xl font-bold">MyDesignly</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating beautiful designs has never been easier with our suite of AI-powered tools.
            </p>
          </div>
          
          {/* Column 2: Free Tools */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Free Tools</h3>
              <Tag className="h-4 w-4 text-green-400" />
            </div>
            <ul className="space-y-2">
              {freeTools.map((tool, index) => (
                <li key={index}>
                  <Link to={tool.link} className="text-gray-400 hover:text-white transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/tools" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  View All Free Tools
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Premium Tools */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Premium Tools</h3>
              <Award className="h-4 w-4 text-amber-400" />
            </div>
            <ul className="space-y-2">
              {premiumTools.map((tool, index) => (
                <li key={index}>
                  <Link to={tool.link} className="text-gray-400 hover:text-white transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/tools" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  View All Premium Tools
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} MyDesignly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
