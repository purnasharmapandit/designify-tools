
import { useState, useEffect } from "react";
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
  ArrowRight,
  Image,
  Layout,
  Shield,
  Check,
  ChevronRight
} from "lucide-react";
import { generateLogos } from "@/lib/logoGenerationService";
import { LogoMakerProvider, useLogoMaker, LogoConfig } from "@/contexts/LogoMakerContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ToolCard from "@/components/ToolCard";
import HeroSection from "@/components/HeroSection";
import { useAuth } from "@/contexts/AuthContext";
import { checkGenerationEligibility, recordGeneration } from "@/services/generationLimits";

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

const sampleLogos = [
  {
    industry: "Technology",
    imageUrl: "/lovable-uploads/logo-template-1.png",
    style: "modern"
  },
  {
    industry: "Healthcare",
    imageUrl: "/lovable-uploads/logo-template-2.png",
    style: "elegant"
  },
  {
    industry: "Food",
    imageUrl: "/lovable-uploads/logo-template-3.png",
    style: "playful"
  },
  {
    industry: "Finance",
    imageUrl: "/lovable-uploads/logo-template-4.png",
    style: "geometric"
  }
];

const LogoInputForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useLogoMaker();
  const [isGenerating, setIsGenerating] = useState(false);
  const { user, isLoading } = useAuth();
  
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

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Best AI Logo Generator Without Watermark</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create professional, custom logos instantly — with no watermarks or hidden fees
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-purple/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-brand-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Watermark-Free</h3>
            <p className="text-gray-600">Download professional logos without any branding or watermarks on your designs.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
              <Wand2 className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Industry-Specific Designs</h3>
            <p className="text-gray-600">Get tailored logo suggestions based on your business industry and brand personality.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-pink/10 rounded-full flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-brand-pink" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Unlimited Revisions</h3>
            <p className="text-gray-600">Refine your logo with as many edits as you need until it's exactly right for your brand.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="h-12 w-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-brand-yellow" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Formats</h3>
            <p className="text-gray-600">Export your logo in SVG, PNG, and other formats for use across all your digital and print materials.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowToCreateSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">How to Create the Perfect Logo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to design a professional logo that captures your brand's essence
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border relative z-10">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Enter Your Business Details</h3>
              <p className="text-gray-600 mb-4">
                Start by providing your business name, industry, and preferred style to help our AI understand your brand.
              </p>
              <ul className="space-y-2">
                {["Choose your industry", "Select a design style", "Specify color preferences"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border relative z-10">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Customize Your Design</h3>
              <p className="text-gray-600 mb-4">
                Fine-tune your logo with our intuitive editor to match your exact brand vision.
              </p>
              <ul className="space-y-2">
                {["Adjust colors and fonts", "Modify icon position and size", "Add or remove elements", "Test different layouts"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border relative z-10">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Download & Use</h3>
              <p className="text-gray-600 mb-4">
                Export your finalized logo in multiple formats, ready for immediate use across all platforms.
              </p>
              <ul className="space-y-2">
                {["Get high-resolution PNG files", "Download vector SVG format", "Use on websites, social media, and print", "No watermarks or limitations"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const IndustryStylesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Professional Logo Designs for Every Industry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore logo styles tailored to your specific business category
          </p>
        </motion.div>
        
        <div className="relative">
          <Tabs defaultValue="technology" className="w-full">
            <div className="w-full overflow-x-auto pb-3 no-scrollbar">
              <TabsList className="inline-flex min-w-full w-max space-x-1 px-1">
                {industries.map((industry) => (
                  <TabsTrigger 
                    key={industry.value} 
                    value={industry.value} 
                    className="whitespace-nowrap text-xs md:text-sm px-3 py-1.5"
                  >
                    {industry.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {industries.map((industry) => (
              <TabsContent key={industry.value} value={industry.value} className="pt-4 mt-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                  {sampleLogos.map((logo, index) => (
                    <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-xl">
                      <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 mb-3 border">
                        <img 
                          src={logo.imageUrl} 
                          alt={`${industry.label} logo example`} 
                          className="max-h-16 md:max-h-24 object-contain" 
                        />
                      </div>
                      <p className="text-xs md:text-sm font-medium text-center">{logo.style} Style</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Tips for {industry.label} Logos</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Choose colors that reflect your {industry.label.toLowerCase()} brand values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Consider your audience preferences when selecting fonts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Ensure your logo works across all applications in your field</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const CustomizationOptionsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Complete Logo Customization Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take full control of your logo design with our advanced editing features
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/logo-maker.png" 
                  alt="Logo editor interface" 
                  className="rounded-lg object-cover w-full h-full" 
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Type className="h-6 w-6 text-brand-purple" />
                  <h3 className="text-xl font-semibold">Font Selection</h3>
                </div>
                <p className="text-gray-600">
                  Choose from hundreds of premium fonts categorized by style. Adjust size, spacing, and weight.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Palette className="h-6 w-6 text-brand-pink" />
                  <h3 className="text-xl font-semibold">Color Management</h3>
                </div>
                <p className="text-gray-600">
                  Select from curated palettes or create your own custom color scheme with our advanced color picker.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Image className="h-6 w-6 text-brand-blue" />
                  <h3 className="text-xl font-semibold">Icon Library</h3>
                </div>
                <p className="text-gray-600">
                  Browse thousands of industry-specific icons to complement your logo text.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Layout className="h-6 w-6 text-brand-yellow" />
                  <h3 className="text-xl font-semibold">Layout Options</h3>
                </div>
                <p className="text-gray-600">
                  Try different arrangements with our preset layouts or create your own unique configuration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const UsageExamplesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">See Your Logo in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preview how your logo will look across different applications and platforms
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center p-4 border">
              <img 
                src="/lovable-uploads/business-card.png" 
                alt="Business card with logo" 
                className="max-h-32 object-contain" 
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Business Cards & Stationery</h3>
            <p className="text-gray-600">
              See how your logo looks on professional business cards, letterheads, and other printed materials.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center p-4 border">
              <div className="w-full max-w-xs bg-gray-100 rounded p-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-xs">Logo</span>
                  </div>
                  <div className="h-2 w-16 bg-gray-300 rounded"></div>
                </div>
                <div className="h-20 bg-gray-200 rounded mb-3"></div>
                <div className="flex gap-2 mb-3">
                  <div className="h-2 w-16 bg-gray-300 rounded"></div>
                  <div className="h-2 w-12 bg-gray-300 rounded"></div>
                  <div className="h-2 w-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Website & Digital Platforms</h3>
            <p className="text-gray-600">
              Preview your logo in website headers, mobile apps, and other digital environments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center p-4 border">
              <div className="w-full flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                  Logo
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  FB
                </div>
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs">
                  TW
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                  IG
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Social Media Profiles</h3>
            <p className="text-gray-600">
              See how your logo appears on different social media platforms with optimal dimensions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoMakerFAQSection = () => {
  const faqs = [
    {
      question: "What file formats can I download my logo in?",
      answer: "You can download your logo in multiple formats including PNG (with transparent background), SVG (vector format for scalability), PDF, and JPEG. The SVG and PDF formats are ideal for printing as they can be resized without losing quality."
    },
    {
      question: "Are there any watermarks on the downloaded logos?",
      answer: "No, all logos created with our AI Logo Generator are 100% watermark-free. You'll receive clean files ready for immediate use across all your branding materials."
    },
    {
      question: "Can I modify my logo after it's been generated?",
      answer: "Absolutely! Our logo editor allows unlimited modifications after generation. You can change colors, fonts, layouts, add or remove elements, adjust sizing, and more until your logo is exactly how you want it."
    },
    {
      question: "Do I own full rights to the logo I create?",
      answer: "Yes, you receive full commercial rights to your custom logo. Once you download your logo, it's yours to use across all your business materials, websites, marketing, merchandise, and more."
    },
    {
      question: "How many logo variations can I generate?",
      answer: "Our AI generator creates multiple logo variations based on your inputs. You can generate up to 20 unique designs per project, giving you plenty of options to choose from."
    },
    {
      question: "Can I use my logo for commercial purposes?",
      answer: "Yes, all logos created with our tool include full commercial usage rights. You can use your logo for business cards, websites, social media, product packaging, advertising, and any other commercial applications."
    },
    {
      question: "What if I'm not satisfied with my logo designs?",
      answer: "You can continue regenerating new logo designs or make manual adjustments in our editor until you're completely satisfied. There's no limit to the number of revisions you can make."
    },
    {
      question: "Is there a refund policy if I'm not happy with the results?",
      answer: "Yes, we offer a satisfaction guarantee. If you're not completely satisfied with your logo designs after multiple attempts, contact our support team within 30 days of purchase for assistance or a refund."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our AI Logo Generator
          </p>
        </motion.div>
        
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Start Creating Your Perfect Logo Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of businesses using our AI logo generator to create professional logos in minutes
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Create Your Logo Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  View Example Logos
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 p-8 lg:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-primary mb-2">100K+</div>
                  <p className="text-gray-600">Logos Created</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-secondary mb-2">95%</div>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-accent mb-2">5min</div>
                  <p className="text-gray-600">Average Design Time</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-brand-purple mb-2">24/7</div>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoMakerWrapper = () => {
  const features = [
    { icon: <Layout className="h-4 w-4" />, text: "Multiple Platforms" },
    { icon: <Image className="h-4 w-4" />, text: "100+ Templates" },
    { icon: <Share2 className="h-4 w-4" />, text: "Direct Sharing" },
    { icon: <Sparkles className="h-4 w-4" />, text: "AI-Powered" },
    { icon: <Target className="h-4 w-4" />, text: "Brand Consistency" }
  ];

  const imageElement = (
    <div className="relative">
      <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl transform rotate-6"></div>
      
      <motion.div 
        className="absolute w-60 h-60 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
        animate={{ rotate: [8, 8] }}
        style={{ top: '5%', left: '10%', zIndex: 1 }}
      >
        <div className="h-3 bg-gray-100 w-full"></div>
        <div className="p-2">
          <div className="h-36 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">Instagram</span>
          </div>
          <div className="mt-2 h-3 w-3/4 bg-gray-200 rounded-full"></div>
          <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded-full"></div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute w-72 h-40 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
        animate={{ rotate: [-4, -4] }}
        style={{ top: '35%', left: '30%', zIndex: 2 }}
      >
        <div className="h-3 bg-gray-100 w-full"></div>
        <div className="p-2">
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">Facebook</span>
          </div>
          <div className="flex justify-between mt-2">
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="relative w-64 h-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10"
        animate={{ rotate: [2, 2] }}
        style={{ marginLeft: '25%' }}
      >
        <div className="h-3 bg-gray-100 w-full"></div>
        <div className="p-2">
          <div className="h-40 bg-gradient-to-br from-pink-400 to-red-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">Pinterest</span>
          </div>
          <div className="mt-2 flex items-center">
            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
            <div className="ml-2 h-3 w-20 bg-gray-200 rounded-full"></div>
            <div className="ml-auto h-5 w-5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const title = (
    <>
      Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Stunning</span> Graphics in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Seconds</span>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection 
          tagline="All-in-One Design Suite"
          title={title}
          description="Create professional designs for all your needs in one place. Save time with templates, maintain brand consistency, and boost your creativity."
          features={features}
          imageElement={imageElement}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
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
        </div>
        
        <BenefitsSection />
        <HowToCreateSection />
        <IndustryStylesSection />
        <CustomizationOptionsSection />
        <UsageExamplesSection />
        <LogoMakerFAQSection />
        <TestimonialsSection />
        <CTASection />
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
