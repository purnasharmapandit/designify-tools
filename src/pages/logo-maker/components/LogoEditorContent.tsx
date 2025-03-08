
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogoMaker } from "@/contexts/LogoMakerContext";
import { downloadLogo } from "@/lib/logoGenerationService";
import EditorSidebar from "./EditorSidebar";
import LogoPreview from "./LogoPreview";
import DownloadPanel from "./DownloadPanel";

// Constants
const fonts = [
  { value: "inter", label: "Inter", family: "Inter, sans-serif" },
  { value: "montserrat", label: "Montserrat", family: "Montserrat, sans-serif" },
  { value: "playfair", label: "Playfair Display", family: "Playfair Display, serif" },
  { value: "roboto", label: "Roboto", family: "Roboto, sans-serif" },
  { value: "oswald", label: "Oswald", family: "Oswald, sans-serif" },
  { value: "raleway", label: "Raleway", family: "Raleway, sans-serif" },
  { value: "lato", label: "Lato", family: "Lato, sans-serif" },
];

const icons = [
  { value: "none", label: "None" },
  { value: "abstract", label: "Abstract" },
  { value: "geometric", label: "Geometric" },
  { value: "nature", label: "Nature" },
  { value: "tech", label: "Technology" },
  { value: "food", label: "Food" },
  { value: "finance", label: "Finance" },
];

const layouts = [
  { value: "icon-text", label: "Icon + Text" },
  { value: "text-only", label: "Text Only" },
  { value: "icon-text-stacked", label: "Icon + Text (Stacked)" },
  { value: "text-slogan", label: "Text + Slogan" },
  { value: "circular", label: "Circular" },
  { value: "badge", label: "Badge Style" },
];

const LogoEditorContent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state } = useLogoMaker();
  const [activeTab, setActiveTab] = useState("text");
  const [fontSize, setFontSize] = useState(48);
  const [fontFamily, setFontFamily] = useState("inter");
  const [primaryColor, setPrimaryColor] = useState(state.config.colors[0] || "#4F46E5");
  const [secondaryColor, setSecondaryColor] = useState(state.config.colors[1] || "#F59E0B");
  const [selectedLayout, setSelectedLayout] = useState("icon-text");
  const [iconSet, setIconSet] = useState("geometric");
  const [businessName, setBusinessName] = useState("");
  const [slogan, setSlogan] = useState("");
  
  const selectedLogo = state.generatedLogos.find(logo => logo.id === id) || null;
  
  useEffect(() => {
    if (!selectedLogo && state.generatedLogos.length > 0) {
      navigate(`/logo-maker/editor/${state.generatedLogos[0].id}`);
    } else if (!selectedLogo) {
      navigate("/logo-maker");
    } else {
      // Initialize form values from selected logo
      setBusinessName(selectedLogo.config.businessName);
      setSlogan(selectedLogo.config.slogan);
    }
  }, [selectedLogo, state.generatedLogos, navigate]);

  if (!selectedLogo) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  const handleDownload = (format: 'svg' | 'png') => {
    downloadLogo(selectedLogo.id, format);
    toast.success(`Logo downloaded in ${format.toUpperCase()} format`);
  };

  const handleSave = () => {
    toast.success("Logo saved to your account");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`Check out my new logo: ${window.location.href}`);
    toast.success("Link copied to clipboard");
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8 pt-8">
      {/* Left sidebar - Tools */}
      <div className="lg:col-span-1">
        <EditorSidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          businessName={businessName}
          slogan={slogan}
          fontFamily={fontFamily}
          fontSize={fontSize}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          selectedLayout={selectedLayout}
          iconSet={iconSet}
          onBusinessNameChange={setBusinessName}
          onSloganChange={setSlogan}
          onFontFamilyChange={setFontFamily}
          onFontSizeChange={setFontSize}
          onPrimaryColorChange={setPrimaryColor}
          onSecondaryColorChange={setSecondaryColor}
          onLayoutChange={setSelectedLayout}
          onIconSetChange={setIconSet}
          fonts={fonts}
          icons={icons}
          layouts={layouts}
        />
      </div>
      
      {/* Main content - Logo Preview */}
      <div className="lg:col-span-3">
        <LogoPreview 
          businessName={businessName}
          slogan={slogan}
          fontFamily={fontFamily}
          fontSize={fontSize}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          fonts={fonts}
        />
        
        {/* Generate More Logos */}
        <div className="mt-6 flex items-center justify-center space-x-4">
          <Button 
            variant="outline"
            onClick={() => navigate("/logo-maker")}
          >
            Generate More Logos
          </Button>
          
          <Button 
            onClick={handleSave}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Logo
          </Button>
        </div>
      </div>
      
      {/* Right sidebar - Logo Variations & Export */}
      <div className="lg:col-span-1">
        <DownloadPanel 
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </div>
    </div>
  );
};

export default LogoEditorContent;
