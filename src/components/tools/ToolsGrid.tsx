
import { 
  Paintbrush, 
  Image, 
  Layout, 
  Type, 
  Palette, 
  QrCode,
  Presentation, 
  FileImage,
  Layers,
  PenTool,
  Wand2,
  Share2,
  Mail,
  Scissors,
  User,
  MessageSquare,
  ChartBar,
  Award,
  Tag,
  Clock
} from "lucide-react";
import ToolItem from "./ToolItem";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { checkGenerationEligibility } from "@/services/generationLimits";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

// Tool item type
interface Tool {
  icon: any;
  name: string;
  description: string;
  color: string;
  link?: string;
  toolType?: string;
  comingSoon?: boolean;
  category: "premium" | "free" | "coming-soon";
}

const ToolsGrid = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const tools: Tool[] = [
    // Premium Tools
    {
      icon: Paintbrush,
      name: "Logo Maker",
      description: "Create professional logos with AI-powered design suggestions",
      color: "bg-purple-100 text-purple-500",
      link: "/logo-maker",
      toolType: "logo",
      category: "premium"
    },
    {
      icon: PenTool,
      name: "Icon Generator",
      description: "Design custom icons for your projects",
      color: "bg-emerald-100 text-emerald-500",
      link: "/icon-generator",
      toolType: "icon",
      category: "premium"
    },
    {
      icon: QrCode,
      name: "Premium QR Code Generator",
      description: "Create QR codes with analytics, location tracking, and team access",
      color: "bg-blue-100 text-blue-500",
      link: "/qr-code/premium",
      toolType: "qr_code_premium",
      category: "premium"
    },
    {
      icon: User,
      name: "AI Headshot Generator",
      description: "Turn regular photos into professional headshots with AI",
      color: "bg-blue-100 text-blue-500",
      link: "/headshot-generator",
      toolType: "headshot",
      category: "premium"
    },
    {
      icon: Layout,
      name: "Business Card Generator",
      description: "Create professional business cards that leave a lasting impression",
      color: "bg-pink-100 text-pink-500",
      link: "/business-card-generator",
      toolType: "business_card",
      category: "premium"
    },
    {
      icon: ChartBar,
      name: "Infographics Generator",
      description: "Create compelling infographics and visual data representations",
      color: "bg-orange-100 text-orange-500",
      link: "/infographics-generator",
      toolType: "infographics",
      category: "premium"
    },

    // Free Tools
    {
      icon: QrCode,
      name: "QR Code Generator",
      description: "Create customizable QR codes for your business or personal use",
      color: "bg-green-100 text-green-500",
      link: "/qr-code-generator",
      toolType: "qr_code",
      category: "free"
    },
    {
      icon: Palette,
      name: "Color Palette Generator",
      description: "Generate beautiful color schemes for your designs",
      color: "bg-yellow-100 text-yellow-500",
      link: "/color-palette-generator",
      toolType: "color_palette",
      category: "free"
    },
    {
      icon: Mail,
      name: "Email Signature Generator",
      description: "Create professional email signatures that make an impression",
      color: "bg-blue-100 text-blue-500",
      link: "/email-signature-generator",
      toolType: "email_signature",
      category: "free"
    },
    {
      icon: Scissors,
      name: "Background Remover",
      description: "Remove backgrounds from images with AI precision",
      color: "bg-purple-100 text-purple-500",
      link: "/background-remover",
      toolType: "background_remover",
      category: "free"
    },

    // Coming Soon Tools
    {
      icon: Share2,
      name: "Social Banner Maker",
      description: "Create eye-catching banners for all your social media platforms",
      color: "bg-indigo-100 text-indigo-500",
      link: "/social-banner-maker",
      toolType: "social_banner",
      comingSoon: true,
      category: "coming-soon"
    },
    {
      icon: FileImage,
      name: "Image Editor",
      description: "Edit and enhance images with powerful tools",
      color: "bg-violet-100 text-violet-500",
      link: "/image-editor",
      toolType: "image_editor",
      comingSoon: true,
      category: "coming-soon"
    },
    {
      icon: Share2,
      name: "Social Media Kit",
      description: "Generate complete social media graphic packages instantly",
      color: "bg-indigo-100 text-indigo-500",
      link: "/social-media-kit",
      comingSoon: true,
      category: "coming-soon"
    },
    {
      icon: Type,
      name: "Typography Tool",
      description: "Perfect your text layouts with advanced typography options",
      color: "bg-blue-100 text-blue-500",
      link: "/typography-tool",
      comingSoon: true,
      category: "coming-soon"
    },
    {
      icon: Layers,
      name: "Mock-up Generator",
      description: "Create realistic product mock-ups instantly",
      color: "bg-cyan-100 text-cyan-500",
      link: "/mockup-generator",
      comingSoon: true,
      category: "coming-soon"
    },
    {
      icon: Presentation,
      name: "Presentation Maker",
      description: "Design professional presentations with ready-to-use templates",
      color: "bg-emerald-100 text-emerald-500",
      link: "/presentation-maker",
      comingSoon: true,
      category: "coming-soon"
    }
  ];

  // Group tools by category
  const premiumTools = tools.filter(tool => tool.category === "premium");
  const freeTools = tools.filter(tool => tool.category === "free");
  const comingSoonTools = tools.filter(tool => tool.category === "coming-soon");

  const handleToolClick = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>, tool: Tool) => {
    if (tool.comingSoon) {
      event.preventDefault();
      return;
    }

    if (!tool.toolType) {
      return;
    }

    event.preventDefault();
    
    // Simply navigate to the tool page - authentication will be checked when generating content
    navigate(tool.link!);
  };

  // Render a section of tools
  const renderToolSection = (sectionTools: Tool[], title: string, badgeContent: React.ReactNode) => (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {badgeContent}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectionTools.map((tool, index) => (
          <div key={index} onClick={(e) => handleToolClick(e, tool)}>
            <ToolItem 
              {...tool} 
              badge={
                tool.category === "premium" ? 
                  <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white">
                    <Award className="h-3 w-3 mr-1" /> Premium
                  </Badge> : 
                tool.category === "free" ? 
                  <Badge className="bg-green-500 text-white">
                    <Tag className="h-3 w-3 mr-1" /> Free
                  </Badge> : 
                  undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderToolSection(premiumTools, "Premium Tools", 
        <Badge variant="outline" className="ml-3 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 border-amber-300">
          <Award className="h-3 w-3 mr-1" /> Pro features
        </Badge>
      )}
      
      {renderToolSection(freeTools, "Free Tools", 
        <Badge variant="outline" className="ml-3 bg-green-100 text-green-700 border-green-300">
          <Tag className="h-3 w-3 mr-1" /> No credit card required
        </Badge>
      )}
      
      {renderToolSection(comingSoonTools, "Coming Soon", 
        <Badge variant="outline" className="ml-3 bg-blue-100 text-blue-700 border-blue-300">
          <Clock className="h-3 w-3 mr-1" /> In development
        </Badge>
      )}
    </div>
  );
};

export default ToolsGrid;
