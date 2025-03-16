
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
  MessageSquare
} from "lucide-react";
import ToolItem from "./ToolItem";

const ToolsGrid = () => {
  const tools = [
    {
      icon: Paintbrush,
      name: "Logo Maker",
      description: "Create professional logos with AI-powered design suggestions",
      color: "bg-purple-100 text-purple-500",
      link: "/logo-maker"
    },
    {
      icon: QrCode,
      name: "QR Code Generator",
      description: "Create customizable QR codes for your business or personal use",
      color: "bg-green-100 text-green-500",
      link: "/qr-code-generator"
    },
    {
      icon: Palette,
      name: "Color Palette Generator",
      description: "Generate beautiful color schemes for your designs",
      color: "bg-yellow-100 text-yellow-500",
      link: "/color-palette-generator"
    },
    {
      icon: PenTool,
      name: "Icon Generator",
      description: "Design custom icons for your projects",
      color: "bg-emerald-100 text-emerald-500",
      link: "/icon-generator"
    },
    {
      icon: Mail,
      name: "Email Signature Generator",
      description: "Create professional email signatures that make an impression",
      color: "bg-blue-100 text-blue-500",
      link: "/email-signature-generator"
    },
    {
      icon: Scissors,
      name: "Background Remover",
      description: "Remove backgrounds from images with AI precision",
      color: "bg-purple-100 text-purple-500",
      link: "/background-remover"
    },
    {
      icon: Share2,
      name: "Social Media Kit",
      description: "Generate complete social media graphic packages instantly",
      color: "bg-indigo-100 text-indigo-500",
      link: "/social-media-kit",
      comingSoon: true
    },
    {
      icon: Type,
      name: "Typography Tool",
      description: "Perfect your text layouts with advanced typography options",
      color: "bg-blue-100 text-blue-500",
      link: "/typography-tool",
      comingSoon: true
    },
    {
      icon: Layers,
      name: "Mock-up Generator",
      description: "Create realistic product mock-ups instantly",
      color: "bg-cyan-100 text-cyan-500",
      link: "/mockup-generator",
      comingSoon: true
    },
    {
      icon: Presentation,
      name: "Presentation Maker",
      description: "Design professional presentations with ready-to-use templates",
      color: "bg-emerald-100 text-emerald-500",
      link: "/presentation-maker",
      comingSoon: true
    },
    {
      icon: FileImage,
      name: "Image Editor",
      description: "Edit and enhance images with powerful tools",
      color: "bg-violet-100 text-violet-500",
      link: "/image-editor",
      comingSoon: true
    },
    {
      icon: Layout,
      name: "Business Card Generator",
      description: "Create professional business cards that leave a lasting impression",
      color: "bg-pink-100 text-pink-500",
      link: "/business-card-generator"
    },
    {
      icon: MessageSquare,
      name: "Infographics Generator",
      description: "Create compelling infographics and visual data representations",
      color: "bg-orange-100 text-orange-500",
      link: "/infographics-generator"
    },
    {
      icon: User,
      name: "AI Headshot Generator",
      description: "Turn regular photos into professional headshots with AI",
      color: "bg-blue-100 text-blue-500",
      link: "/headshot-generator"
    },
    {
      icon: Share2,
      name: "Social Banner Maker",
      description: "Create eye-catching banners for all your social media platforms",
      color: "bg-indigo-100 text-indigo-500",
      link: "/social-banner-maker"
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {tools.map((tool, index) => (
        <ToolItem key={index} {...tool} />
      ))}
    </div>
  );
};

export default ToolsGrid;
