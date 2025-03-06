
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Undo2,
  Redo2,
  Type,
  Image,
  PaintBucket,
  Download,
  Check,
  Save,
  Layout,
  RotateCcw,
  Share2,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { downloadLogo } from "@/lib/logoGenerationService";
import { LogoMakerProvider, useLogoMaker } from "@/contexts/LogoMakerContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  
  const selectedLogo = state.generatedLogos.find(logo => logo.id === id) || null;
  
  useEffect(() => {
    if (!selectedLogo && state.generatedLogos.length > 0) {
      navigate(`/logo-maker/editor/${state.generatedLogos[0].id}`);
    } else if (!selectedLogo) {
      navigate("/logo-maker");
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
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <Tabs defaultValue="text" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="text">
                <Type className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="icon">
                <Image className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="color">
                <PaintBucket className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="layout">
                <Layout className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="text" className="space-y-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input 
                  id="businessName"
                  value={selectedLogo.config.businessName}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="slogan">Slogan</Label>
                <Input 
                  id="slogan"
                  value={selectedLogo.config.slogan}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="font">Font Family</Label>
                <Select value={fontFamily} onValueChange={setFontFamily}>
                  <SelectTrigger id="font" className="mt-1">
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fonts.map(font => (
                      <SelectItem key={font.value} value={font.value}>
                        <span style={{ fontFamily: font.family }}>{font.label}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Font Size: {fontSize}px</Label>
                <Slider
                  value={[fontSize]}
                  min={12}
                  max={96}
                  step={1}
                  onValueChange={([value]) => setFontSize(value)}
                  className="mt-2"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="icon" className="space-y-4">
              <div>
                <Label htmlFor="iconSet">Icon Style</Label>
                <Select value={iconSet} onValueChange={setIconSet}>
                  <SelectTrigger id="iconSet" className="mt-1">
                    <SelectValue placeholder="Select icon style" />
                  </SelectTrigger>
                  <SelectContent>
                    {icons.map(icon => (
                      <SelectItem key={icon.value} value={icon.value}>
                        {icon.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-4">
                <Label className="mb-2 block">Available Icons</Label>
                <div className="grid grid-cols-4 gap-2">
                  {Array(8).fill(0).map((_, i) => (
                    <button 
                      key={i}
                      className="aspect-square bg-gray-100 rounded p-2 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </button>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="color" className="space-y-4">
              <div>
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex gap-2 mt-1">
                  <div className="w-10 h-10 rounded" style={{ backgroundColor: primaryColor }}></div>
                  <Input 
                    id="primaryColor"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="secondaryColor">Secondary Color</Label>
                <div className="flex gap-2 mt-1">
                  <div className="w-10 h-10 rounded" style={{ backgroundColor: secondaryColor }}></div>
                  <Input 
                    id="secondaryColor"
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <Label className="mb-2 block">Color Presets</Label>
                <div className="grid grid-cols-4 gap-2">
                  {["#4F46E5", "#10B981", "#EF4444", "#F59E0B", "#EC4899", "#8B5CF6", "#14B8A6", "#6B7280"].map((color, i) => (
                    <button 
                      key={i}
                      className="aspect-square rounded hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      onClick={() => setPrimaryColor(color)}
                    ></button>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="layout" className="space-y-4">
              <div>
                <Label htmlFor="layout">Layout Style</Label>
                <Select value={selectedLayout} onValueChange={setSelectedLayout}>
                  <SelectTrigger id="layout" className="mt-1">
                    <SelectValue placeholder="Select layout" />
                  </SelectTrigger>
                  <SelectContent>
                    {layouts.map(layout => (
                      <SelectItem key={layout.value} value={layout.value}>
                        {layout.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-2">
                <Label className="mb-2 block">Alignment</Label>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    Left
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    Center
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    Right
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Main content - Logo Preview */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Undo2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Undo</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Redo2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Redo</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Reset</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div>
              <Select defaultValue="light">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Background" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light Background</SelectItem>
                  <SelectItem value="dark">Dark Background</SelectItem>
                  <SelectItem value="transparent">Transparent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Logo Canvas */}
          <div className="aspect-video bg-gray-50 flex items-center justify-center p-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-full mb-4 flex items-center justify-center text-white text-3xl">
                {selectedLogo.config.businessName.charAt(0)}
              </div>
              <div 
                className="text-4xl font-bold" 
                style={{ 
                  fontFamily: fonts.find(f => f.value === fontFamily)?.family || "Inter, sans-serif",
                  color: primaryColor,
                  fontSize: `${fontSize}px`
                }}
              >
                {selectedLogo.config.businessName}
              </div>
              {selectedLogo.config.slogan && (
                <div 
                  className="text-lg mt-2" 
                  style={{ color: secondaryColor }}
                >
                  {selectedLogo.config.slogan}
                </div>
              )}
            </div>
          </div>
        </div>
        
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
        <div className="bg-white rounded-lg shadow-sm border p-4 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Download Logo</h3>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleDownload('svg')}
              >
                <Download className="mr-2 h-4 w-4" />
                SVG Vector
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleDownload('png')}
              >
                <Download className="mr-2 h-4 w-4" />
                PNG High Res
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Share</h3>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={handleShare}
            >
              <Share2 className="mr-2 h-4 w-4" />
              Copy Link
            </Button>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Need Help?</h3>
            <Button 
              variant="outline" 
              className="w-full justify-start"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Logo Design Tips
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoEditor = () => {
  return (
    <LogoMakerProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-6"
            >
              <h1 className="text-3xl font-bold font-display">Logo Editor</h1>
              <Button>
                <Check className="mr-2 h-4 w-4" />
                Complete
              </Button>
            </motion.div>
            
            <LogoEditorContent />
          </div>
        </main>
        <Footer />
      </div>
    </LogoMakerProvider>
  );
};

export default LogoEditor;
