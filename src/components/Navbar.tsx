
import { Button } from "@/components/ui/button";
import { Menu, Wand2, X, User, LogOut, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

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
            
            {/* Free Tools Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-gray-900 hover:text-primary transition-colors">Free Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/qr-code-generator"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-purple-900">
                              QR Code Generator
                            </div>
                            <p className="text-sm leading-tight text-purple-800">
                              Create customizable QR codes for your business or personal use
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/color-palette-generator"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-blue-900">
                              Color Palette Generator
                            </div>
                            <p className="text-sm leading-tight text-blue-800">
                              Generate beautiful color schemes for your design projects
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/business-card-generator"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pink-50 to-pink-100 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-pink-900">
                              Business Card Generator
                            </div>
                            <p className="text-sm leading-tight text-pink-800">
                              Design professional business cards with customizable templates
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/background-remover"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-green-900">
                              Background Remover
                            </div>
                            <p className="text-sm leading-tight text-green-800">
                              Remove image backgrounds with AI-powered technology
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1 col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/email-signature-generator"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-yellow-900">
                              Email Signature Generator
                            </div>
                            <p className="text-sm leading-tight text-yellow-800">
                              Create professional email signatures for your business communications
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1 col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/tools"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-gray-900">
                              View All Free Tools
                            </div>
                            <p className="text-sm leading-tight text-gray-800">
                              Explore our complete collection of free design tools
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* AI Tools Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-gray-900 hover:text-primary transition-colors">
                    <span className="flex items-center">
                      AI Tools
                      <Sparkles className="ml-1 h-3.5 w-3.5 text-brand-purple" />
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/logo-maker"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-purple/10 to-brand-purple/20 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              AI Logo Maker
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Generate custom logos powered by AI
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/icon-generator"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-blue/10 to-brand-blue/20 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              AI Icon Generator
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Create beautiful icons with AI assistance
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1 col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/tools"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-pink/10 to-brand-pink/20 p-6 no-underline outline-none focus:shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              View All AI Tools
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our complete collection of AI-powered design tools
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
