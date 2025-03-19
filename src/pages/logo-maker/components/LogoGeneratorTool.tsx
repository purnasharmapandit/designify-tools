
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
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
import LogoFormInputs from "./LogoFormInputs";
import FormSelectors from "./FormSelectors";
import GenerateButton from "./GenerateButton";
import LogoPreviewGrid from "./LogoPreviewGrid";
import { industries, styles } from "../constants/logoOptions";
import { useAuth } from "@/contexts/AuthContext";

const LogoGeneratorTool = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useLogoMaker();
  const { user } = useAuth();
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
    
    // If user is not authenticated, redirect to auth page with signup mode
    if (!user) {
      navigate("/auth", { 
        state: { 
          returnTo: "/logo-maker",
          requiresSignUp: true 
        }
      });
      toast.info("Please create an account to generate logos");
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
              <LogoFormInputs 
                businessName={businessName}
                slogan={slogan}
                description={description}
                setBusinessName={setBusinessName}
                setSlogan={setSlogan}
                setDescription={setDescription}
              />
              
              <FormSelectors 
                industry={industry}
                style={style}
                setIndustry={setIndustry}
                setStyle={setStyle}
                industries={industries}
                styles={styles}
              />
            </div>
            
            <div className="pt-4">
              <GenerateButton isGenerating={isGenerating} />
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-center border-t pt-6">
          <p className="text-sm text-gray-500">
            Need inspiration? Check out our <a href="#" className="text-primary underline">logo gallery</a>
          </p>
        </CardFooter>
      </Card>
      
      <LogoPreviewGrid logos={state.generatedLogos} />
    </div>
  );
};

export default LogoGeneratorTool;
