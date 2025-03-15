
import { Button } from "@/components/ui/button";
import { Menu, Wand2, X, User, LogOut, Sparkles, Coins, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { CreditBalance } from "@/components/CreditBalance";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
            
            {/* Tools Mega Menu */}
            <HoverCard openDelay={100} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Link 
                  to="/tools" 
                  className="font-medium text-gray-900 hover:text-primary transition-colors flex items-center"
                >
                  Tools
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-[800px] p-0 bg-white shadow-lg rounded-xl border" align="start">
                <div className="grid grid-cols-2 gap-0 w-full p-4">
                  {/* Free Tools Column */}
                  <div className="pr-4 border-r border-gray-100">
                    <div className="mb-3 px-3 py-2 bg-gray-50 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Free Tools</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Link 
                        to="/qr-code-generator" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 h-5 w-5">
                            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                            <path d="M17.5 14V21" stroke="currentColor" strokeWidth="2" />
                            <path d="M14 17.5H21" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">QR Code Generator</h4>
                          <p className="text-xs text-gray-500">Create customizable QR codes for your business</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/color-palette-generator" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5">
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
                            <path d="M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10Z" fill="currentColor" />
                            <path d="M15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">Color Palette Generator</h4>
                          <p className="text-xs text-gray-500">Generate beautiful color schemes for your designs</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/business-card-generator" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-pink-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 h-5 w-5">
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M7 15C7 13.8954 7.89543 13 9 13H15C16.1046 13 17 13.8954 17 15V19H7V15Z" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">Business Card Generator</h4>
                          <p className="text-xs text-gray-500">Design professional business cards with templates</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/background-remover" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-green-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 h-5 w-5">
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
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">Background Remover</h4>
                          <p className="text-xs text-gray-500">Remove image backgrounds with AI-powered technology</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/email-signature-generator" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-yellow-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-600 h-5 w-5">
                            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="2" />
                            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">Email Signature Generator</h4>
                          <p className="text-xs text-gray-500">Create professional email signatures that impress</p>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="mt-4 px-3">
                      <Link
                        to="/tools"
                        className="inline-flex items-center text-sm font-medium text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        View all free tools
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Paid/AI Tools Column */}
                  <div className="pl-4">
                    <div className="mb-3 px-3 py-2 bg-gradient-to-r from-brand-purple/10 to-brand-purple/20 rounded-lg">
                      <h3 className="text-sm font-semibold text-brand-purple uppercase tracking-wider flex items-center">
                        Premium AI Tools
                        <Sparkles className="ml-1 h-3.5 w-3.5 text-brand-purple" />
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Link 
                        to="/logo-maker" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 h-5 w-5">
                            <path d="M20 14V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V14" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" />
                            <path d="M15 19H9" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 12L20 7" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 12L4 7" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">
                            AI Logo Maker
                            <Sparkles className="inline-block ml-1 h-3 w-3 text-brand-purple" />
                          </h4>
                          <p className="text-xs text-gray-500">Generate unique logos with AI technology</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/icon-generator" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5">
                            <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">
                            AI Icon Generator
                            <Sparkles className="inline-block ml-1 h-3 w-3 text-brand-purple" />
                          </h4>
                          <p className="text-xs text-gray-500">Create custom icons with AI assistance</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/social-media-kit" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 h-5 w-5">
                            <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
                            <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
                            <path d="M8.7 10.7L15.3 7.3" stroke="currentColor" strokeWidth="2" />
                            <path d="M8.7 13.3L15.3 16.7" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">
                            Social Media Kit
                            <Sparkles className="inline-block ml-1 h-3 w-3 text-brand-purple" />
                          </h4>
                          <p className="text-xs text-gray-500">Generate complete social media graphic packages</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/image-editor" 
                        className="group p-3 flex items-start space-x-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="bg-pink-100 p-2 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 h-5 w-5">
                            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" />
                            <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" fill="currentColor" />
                            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">
                            Image Editor
                            <Sparkles className="inline-block ml-1 h-3 w-3 text-brand-purple" />
                          </h4>
                          <p className="text-xs text-gray-500">Edit and enhance images with AI tools</p>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="mt-4 px-3">
                      <Link
                        to="/tools"
                        className="inline-flex items-center text-sm font-medium text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        View all premium tools
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

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
            {isLoading ? (
              <div className="h-10 w-20 bg-gray-200 animate-pulse rounded-full"></div>
            ) : user ? (
              <div className="flex items-center gap-2">
                <CreditBalance />
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={signOut}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign out</span>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-full"
                >
                  <User className="h-4 w-4 mr-2" />
                  <span>Profile</span>
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button
                  variant="default"
                  className="hidden md:inline-flex rounded-full font-medium px-6 transition-all"
                >
                  Sign in
                </Button>
              </Link>
            )}
            
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
                    to="/tools"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-primary hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Free Tools
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
                  <Link 
                    to="/tools"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-primary hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All AI Tools
                  </Link>
                </div>
              </div>
              
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
        )}
      </div>
    </header>
  );
};

export default Navbar;

