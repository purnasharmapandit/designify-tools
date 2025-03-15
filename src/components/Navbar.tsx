
import { Button } from "@/components/ui/button";
import { Menu, Wand2, X, User, LogOut } from "lucide-react";
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
            
            {/* Tools Dropdown Menu */}
            <div className="relative inline-block font-medium">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium text-gray-900 hover:text-primary transition-colors">Tools</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[220px]">
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/qr-code-generator"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">QR Code Generator</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Create customizable QR codes easily
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/color-palette-generator"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Color Palette Generator</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Generate beautiful color schemes
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/business-card-generator"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Business Card Generator</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Design professional business cards
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/background-remover"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Background Remover</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Remove image backgrounds with AI
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/email-signature-generator"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Email Signature Generator</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Create professional email signatures
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/tools"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-medium text-primary"
                            >
                              <div className="text-sm font-medium leading-none">All Tools</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Explore our complete toolkit
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

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
              <div className="px-3 py-2 rounded-md text-base font-medium text-gray-900">
                Tools
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
                    All Tools
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
