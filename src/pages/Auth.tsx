
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, signIn, signUp, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get return URL from location state or query params
  const getReturnUrl = () => {
    // First check location state
    if (location.state && location.state.returnTo) {
      return location.state.returnTo;
    }
    
    // Then check query params
    const searchParams = new URLSearchParams(location.search);
    const returnTo = searchParams.get("returnTo");
    if (returnTo) {
      return returnTo;
    }
    
    // Default to home
    return "/";
  };
  
  // Check if user is coming from email verification
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const verified = searchParams.get("verified");
    
    if (verified === "true") {
      toast.success("Email verified successfully! You can now sign in.");
    }
  }, [location]);

  // Redirect if already logged in
  useEffect(() => {
    if (user && !isLoading) {
      const returnUrl = getReturnUrl();
      navigate(returnUrl);
    }
  }, [user, isLoading, navigate, location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setIsSubmitting(true);
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Helmet>
        <title>{isSignUp ? "Sign Up" : "Sign In"} | DesignAI</title>
        <meta name="description" content="Sign in or create an account to access DesignAI's tools" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-primary">
              <Wand2 className="h-8 w-8" />
              <span className="text-2xl font-bold font-display">Designify</span>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-8">
            {isSignUp ? "Create a new account" : "Sign in to your account"}
          </h2>

          <div className="bg-white px-6 py-8 shadow sm:rounded-lg sm:px-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email">Email address</Label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={isSignUp ? "new-password" : "current-password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
                      {isSignUp ? "Creating account..." : "Signing in..."}
                    </span>
                  ) : (
                    <span>{isSignUp ? "Sign up" : "Sign in"}</span>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Sign in instead" : "Create a new account"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
