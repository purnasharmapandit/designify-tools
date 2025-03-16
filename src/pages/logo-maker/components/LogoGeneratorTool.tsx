
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLogoMaker } from "@/contexts/LogoMakerContext";
import { generateLogos } from "@/lib/logoGenerationService";
import { Loader2, Sparkles } from "lucide-react";

const industries = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "food", label: "Food & Restaurant" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "finance", label: "Finance & Banking" },
  { value: "art", label: "Art & Entertainment" },
  { value: "sports", label: "Sports & Fitness" },
  { value: "travel", label: "Travel & Hospitality" },
  { value: "construction", label: "Construction & Real Estate" }
];

const styles = [
  { value: "modern", label: "Modern & Minimal" },
  { value: "playful", label: "Playful & Fun" },
  { value: "elegant", label: "Elegant & Luxury" },
  { value: "vintage", label: "Vintage & Retro" },
  { value: "geometric", label: "Geometric & Abstract" },
  { value: "handdrawn", label: "Hand-drawn & Organic" },
  { value: "3d", label: "3D & Dimensional" },
  { value: "mascot", label: "Mascot & Character" }
];

const LogoGeneratorTool = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useLogoMaker();
  const [businessName, setBusinessName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");
  const [industry, setIndustry] = useState("");
  const [style, setStyle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessName) {
      toast.error("Please enter your business name");
      return;
    }
    
    try {
      setIsGenerating(true);
      
      // Update the config in context
      dispatch({
        type: "UPDATE_CONFIG",
        payload: {
          businessName,
          slogan,
          industry,
          colors: [],
          style
        }
      });
      
      // Call the logo generation service
      const logos = await generateLogos({
        businessName,
        slogan,
        industry,
        colors: [],
        style
      });
      
      // Update generated logos in context
      dispatch({
        type: "SET_GENERATED_LOGOS",
        payload: logos
      });
      
      // Navigate to editor with the first logo
      if (logos.length > 0) {
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
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle>Logo Generator</CardTitle>
          <CardDescription>
            Tell us about your business and we'll create logo options for you
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Designify Tools"
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="slogan">Slogan or Tagline (Optional)</Label>
                <Input
                  id="slogan"
                  value={slogan}
                  onChange={(e) => setSlogan(e.target.value)}
                  placeholder="e.g. Design tools for everyone"
                  className="mt-1"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry" className="mt-1">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind.value} value={ind.value}>
                          {ind.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="style">Logo Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger id="style" className="mt-1">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      {styles.map((st) => (
                        <SelectItem key={st.value} value={st.value}>
                          {st.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Additional Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe any specific elements or ideas you'd like to see in your logo"
                  className="mt-1"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Logos...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Logo Options
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-center border-t pt-6">
          <p className="text-sm text-gray-500">
            Need inspiration? Check out our <a href="#" className="text-primary underline">logo gallery</a>
          </p>
        </CardFooter>
      </Card>
      
      {/* Sample Logos Preview (will be replaced by actual generated logos) */}
      {state.generatedLogos.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Your Generated Logos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {state.generatedLogos.map((logo) => (
              <motion.div
                key={logo.id}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white rounded-lg p-4 border cursor-pointer shadow-sm hover:shadow-md transition-all"
                onClick={() => navigate(`/logo-maker/editor/${logo.id}`)}
              >
                <img 
                  src={logo.imageUrl} 
                  alt={`Logo for ${logo.config.businessName}`} 
                  className="w-full aspect-square object-contain"
                />
                <div className="mt-2 text-center text-sm font-medium text-gray-600">
                  Variation {state.generatedLogos.indexOf(logo) + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoGeneratorTool;
