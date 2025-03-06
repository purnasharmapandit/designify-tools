
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { 
  Wand2, 
  Palette, 
  Type, 
  Tag, 
  BadgeInfo, 
  Loader2,
  Download,
  ArrowRight
} from "lucide-react";
import { generateLogos } from "@/lib/logoGenerationService";
import { LogoMakerProvider, useLogoMaker, LogoConfig } from "@/contexts/LogoMakerContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "food", label: "Food & Restaurant" },
  { value: "retail", label: "Retail" },
  { value: "finance", label: "Finance" },
  { value: "art", label: "Art & Design" },
  { value: "sports", label: "Sports & Fitness" },
  { value: "travel", label: "Travel & Hospitality" },
  { value: "construction", label: "Construction" },
];

const styles = [
  { value: "modern", label: "Modern & Minimal" },
  { value: "playful", label: "Playful & Bold" },
  { value: "elegant", label: "Elegant & Sophisticated" },
  { value: "vintage", label: "Vintage & Retro" },
  { value: "geometric", label: "Geometric & Abstract" },
  { value: "handdrawn", label: "Hand-drawn & Organic" },
  { value: "3d", label: "3D & Dimensional" },
];

const colorSchemes = [
  { value: "blue", label: "Blue Professional", colors: ["#2563EB", "#BFDBFE"] },
  { value: "green", label: "Green Nature", colors: ["#10B981", "#D1FAE5"] },
  { value: "purple", label: "Purple Creative", colors: ["#8B5CF6", "#EDE9FE"] },
  { value: "orange", label: "Orange Energetic", colors: ["#F59E0B", "#FEF3C7"] },
  { value: "pink", label: "Pink Playful", colors: ["#EC4899", "#FCE7F3"] },
  { value: "gray", label: "Gray Professional", colors: ["#4B5563", "#F9FAFB"] },
  { value: "red", label: "Red Bold", colors: ["#EF4444", "#FEE2E2"] },
  { value: "teal", label: "Teal Calm", colors: ["#14B8A6", "#CCFBF1"] },
];

const LogoInputForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useLogoMaker();
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleInputChange = (key: keyof LogoConfig, value: string | string[]) => {
    dispatch({ type: "UPDATE_CONFIG", payload: { [key]: value } });
  };

  const handleColorSchemeChange = (schemeValue: string) => {
    const scheme = colorSchemes.find(s => s.value === schemeValue);
    if (scheme) {
      dispatch({ type: "UPDATE_CONFIG", payload: { colors: scheme.colors } });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!state.config.businessName.trim()) {
      toast.error("Please enter your business name");
      return;
    }
    
    if (!state.config.industry) {
      toast.error("Please select your industry");
      return;
    }
    
    try {
      setIsGenerating(true);
      const logos = await generateLogos(state.config);
      dispatch({ type: "SET_GENERATED_LOGOS", payload: logos });
      
      if (logos.length > 0) {
        dispatch({ type: "SELECT_LOGO", payload: logos[0] });
        navigate(`/logo-maker/editor/${logos[0].id}`);
      }
    } catch (error) {
      console.error("Error generating logos:", error);
      toast.error("Failed to generate logos. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name *</Label>
          <Input 
            id="businessName"
            value={state.config.businessName}
            onChange={e => handleInputChange("businessName", e.target.value)}
            placeholder="Enter your business name"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="slogan">Slogan/Tagline</Label>
          <Input 
            id="slogan"
            value={state.config.slogan}
            onChange={e => handleInputChange("slogan", e.target.value)}
            placeholder="A catchy phrase describing your business"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="industry">Industry *</Label>
          <Select 
            value={state.config.industry}
            onValueChange={value => handleInputChange("industry", value)}
          >
            <SelectTrigger id="industry" className="mt-1">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map(industry => (
                <SelectItem key={industry.value} value={industry.value}>
                  {industry.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="style">Logo Style</Label>
          <Select 
            value={state.config.style}
            onValueChange={value => handleInputChange("style", value)}
          >
            <SelectTrigger id="style" className="mt-1">
              <SelectValue placeholder="Select a style" />
            </SelectTrigger>
            <SelectContent>
              {styles.map(style => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="colors">Color Scheme</Label>
          <Select 
            onValueChange={handleColorSchemeChange}
            defaultValue="blue"
          >
            <SelectTrigger id="colors" className="mt-1">
              <SelectValue placeholder="Select color scheme" />
            </SelectTrigger>
            <SelectContent>
              {colorSchemes.map(scheme => (
                <SelectItem key={scheme.value} value={scheme.value}>
                  <div className="flex items-center gap-2">
                    {scheme.colors.map((color, i) => (
                      <div 
                        key={i}
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <span>{scheme.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button 
        type="submit" 
        disabled={isGenerating}
        className="w-full"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Logos...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Logos
          </>
        )}
      </Button>
    </form>
  );
};

const LogoGeneratorFeatures = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Wand2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">AI-Powered Generation</h3>
        <p className="text-gray-600">Our advanced AI creates unique logo designs based on your business details and preferences.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
          <Palette className="h-6 w-6 text-secondary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Unlimited Customization</h3>
        <p className="text-gray-600">Fine-tune your logo with our easy-to-use editor. Adjust colors, fonts, layout, and more.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
          <Download className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-lg font-semibold mb-2">High-Quality Downloads</h3>
        <p className="text-gray-600">Download your logo in various formats including SVG and PNG with transparent backgrounds.</p>
      </div>
    </div>
  );
};

const LogoMakerWrapper = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-display mb-4">AI Logo Maker</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create professional logos in minutes with our AI-powered logo generator
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <LogoInputForm />
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="aspect-square rounded-xl bg-white shadow-sm border flex items-center justify-center">
                <div className="text-center px-6">
                  <Type className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Logo Preview</h3>
                  <p className="text-gray-500">Fill out the form and click "Generate Logos" to see AI-created logos for your business</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">1.</span> 
                    <span>Enter your business details and preferences</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">2.</span> 
                    <span>Our AI generates custom logo options</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">3.</span> 
                    <span>Customize your favorite design</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">4.</span> 
                    <span>Download in your preferred format</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <LogoGeneratorFeatures />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const LogoMaker = () => {
  return (
    <LogoMakerProvider>
      <LogoMakerWrapper />
    </LogoMakerProvider>
  );
};

export default LogoMaker;
