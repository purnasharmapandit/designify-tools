
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Wand2, Loader2 } from "lucide-react";
import { generateLogos } from "@/lib/logoGenerationService";
import { useLogoMaker, LogoConfig } from "@/contexts/LogoMakerContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { checkGenerationEligibility, recordGeneration } from "@/services/generationLimits";

export const industries = [
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

export const styles = [
  { value: "modern", label: "Modern & Minimal" },
  { value: "playful", label: "Playful & Bold" },
  { value: "elegant", label: "Elegant & Sophisticated" },
  { value: "vintage", label: "Vintage & Retro" },
  { value: "geometric", label: "Geometric & Abstract" },
  { value: "handdrawn", label: "Hand-drawn & Organic" },
  { value: "3d", label: "3D & Dimensional" },
];

export const colorSchemes = [
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

  const handleNavigateToAuth = () => {
    navigate("/auth", { state: { returnTo: "/logo-maker" } });
  };

  const handleNavigateToSubscription = () => {
    navigate("/pricing");
    toast.info("Subscribe to unlock unlimited logo generation");
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
    
    // Check eligibility only when generate button is clicked
    const eligibility = await checkGenerationEligibility('logo');
    
    if (!eligibility.canGenerate) {
      if (eligibility.redirectToAuth) {
        handleNavigateToAuth();
        toast.info("Please sign up or sign in to generate logos");
        return;
      } else if (eligibility.redirectToSubscription) {
        handleNavigateToSubscription();
        toast.info(eligibility.message);
        return;
      }
    }
    
    try {
      setIsGenerating(true);
      const logos = await generateLogos(state.config);
      dispatch({ type: "SET_GENERATED_LOGOS", payload: logos });
      
      // Record this generation
      await recordGeneration('logo');
      
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

export default LogoInputForm;
