import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { QRCodeContentType } from "@/hooks/use-qrcode";
import { 
  Globe, 
  Type, 
  Share2, 
  CreditCard, 
  Wifi, 
  ClipboardList, 
  Video, 
  Star, 
  UserSquare, 
  Mail, 
  Phone
} from "lucide-react";

interface ContentTypeItem {
  type: QRCodeContentType;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface ContentTypeCategory {
  id: string;
  name: string;
  items: ContentTypeItem[];
}

// Updated content categories with removed options
const contentCategories: ContentTypeCategory[] = [
  {
    id: "popular",
    name: "Popular",
    items: [
      { type: "website", name: "Website URL", icon: <Globe className="h-5 w-5" />, description: "Link to a website or webpage" },
      { type: "text", name: "Plain Text", icon: <Type className="h-5 w-5" />, description: "Add any text content" },
      { type: "social", name: "Social Media", icon: <Share2 className="h-5 w-5" />, description: "Link to social media profiles" },
      { type: "batch_upload", name: "Batch Upload", icon: <Star className="h-5 w-5" />, description: "Generate multiple QR codes" }
    ]
  },
  {
    id: "business",
    name: "Business Links",
    items: [
      { type: "payment", name: "Payments", icon: <CreditCard className="h-5 w-5" />, description: "Link to payment options" },
      { type: "wifi", name: "WiFi Login", icon: <Wifi className="h-5 w-5" />, description: "Share WiFi credentials" },
      { type: "google_form", name: "Google Form", icon: <ClipboardList className="h-5 w-5" />, description: "Link to Google Forms" },
      { type: "zoom", name: "Zoom Meeting", icon: <Video className="h-5 w-5" />, description: "Join video meetings" }
    ]
  },
  {
    id: "contacts",
    name: "Contacts",
    items: [
      { type: "phone", name: "Phone Number", icon: <Phone className="h-5 w-5" />, description: "Share phone contact" },
      { type: "email", name: "Email Address", icon: <Mail className="h-5 w-5" />, description: "Share email contact" }
    ]
  }
];

interface ContentTypeSelectorProps {
  selectedType: QRCodeContentType;
  onSelect: (type: QRCodeContentType) => void;
}

const ContentTypeSelector: React.FC<ContentTypeSelectorProps> = ({ selectedType, onSelect }) => {
  const getSelectedCategory = (): string => {
    for (const category of contentCategories) {
      if (category.items.some(item => item.type === selectedType)) {
        return category.id;
      }
    }
    return "popular";
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue={getSelectedCategory()} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          {contentCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {contentCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {category.items.map((item) => (
                <motion.div
                  key={item.type}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-colors ${selectedType === item.type ? 'border-primary bg-primary/5' : 'hover:border-gray-300'}`}
                    onClick={() => onSelect(item.type)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2">
                        <div className={`${selectedType === item.type ? 'text-primary' : 'text-gray-500'}`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          <p className="text-xs text-gray-500 hidden sm:block">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ContentTypeSelector;
