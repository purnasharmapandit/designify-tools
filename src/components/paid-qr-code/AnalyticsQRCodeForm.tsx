import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorPicker } from "@/components/ui/color-picker";
import { 
  QRCodeOptions, 
  QRCodeErrorCorrectionLevel, 
  QRCodeOutputFormat,
  QRCodeContentType,
  QRCodeCenterElement
} from "@/hooks/use-qrcode";
import ContentTypeSelector from "../qr-code/ContentTypeSelector";
import CenterElementSelector from "../qr-code/CenterElementSelector";
import { ChartBar, MapPin, Download, Users } from "lucide-react";

interface AnalyticsQRCodeFormProps {
  options: QRCodeOptions;
  onUpdateOptions: (options: Partial<QRCodeOptions>) => void;
  onDownload: () => void;
}

const AnalyticsQRCodeForm: React.FC<AnalyticsQRCodeFormProps> = ({ 
  options, 
  onUpdateOptions, 
  onDownload 
}) => {
  const [activeTab, setActiveTab] = useState("content");
  const [enableAnalytics, setEnableAnalytics] = useState(true);
  const [enableLocationTracking, setEnableLocationTracking] = useState(true);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onUpdateOptions({ [name]: value });
  };

  const handleContentTypeChange = (contentType: QRCodeContentType) => {
    onUpdateOptions({ contentType, content: '' });
  };

  const handleCenterElementChange = (centerElement: QRCodeCenterElement | null) => {
    onUpdateOptions({ centerElement });
  };

  // Render different input fields based on content type
  const renderContentInput = () => {
    switch (options.contentType) {
      case 'website':
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Website URL</Label>
            <Input
              id="content"
              name="content"
              placeholder="https://example.com"
              value={options.content}
              onChange={handleInputChange}
            />
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Text Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Enter your text here..."
              value={options.content}
              onChange={handleInputChange}
              className="min-h-24"
            />
          </div>
        );
      
      // Other content types would be similar to the regular QR code form
      default:
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Enter content for your QR code"
              value={options.content}
              onChange={handleInputChange}
              className="min-h-24"
            />
          </div>
        );
    }
  };

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-4">
              <div className="space-y-4">
                <Label>QR Code Type</Label>
                <ContentTypeSelector 
                  selectedType={options.contentType} 
                  onSelect={handleContentTypeChange} 
                />
              </div>

              {renderContentInput()}
            </TabsContent>
            
            <TabsContent value="design" className="space-y-6">
              <CenterElementSelector 
                centerElement={options.centerElement} 
                onChange={handleCenterElementChange} 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ColorPicker
                  id="color"
                  label="QR Code Color"
                  value={options.color}
                  onChange={(value) => onUpdateOptions({ color: value })}
                />
                
                <ColorPicker
                  id="bgColor"
                  label="Background Color"
                  value={options.bgColor}
                  onChange={(value) => onUpdateOptions({ bgColor: value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="size">Size (px)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      id="size"
                      min={100}
                      max={500}
                      step={10}
                      value={[options.size]}
                      onValueChange={(values) => onUpdateOptions({ size: values[0] })}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-12 text-right">
                      {options.size}px
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="outputFormat">Output Format</Label>
                  <Select
                    value={options.outputFormat}
                    onValueChange={(value) => 
                      onUpdateOptions({ 
                        outputFormat: value as QRCodeOutputFormat 
                      })
                    }
                  >
                    <SelectTrigger id="outputFormat">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="png">PNG</SelectItem>
                      <SelectItem value="svg">SVG</SelectItem>
                      <SelectItem value="jpg">JPG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="space-y-4 border border-slate-200 p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ChartBar className="h-5 w-5 text-primary" />
                    <Label htmlFor="analytics">QR Code Analytics</Label>
                  </div>
                  <Switch 
                    id="analytics" 
                    checked={enableAnalytics}
                    onCheckedChange={setEnableAnalytics}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Track scans, devices, and times for 1 year
                </p>
              </div>
              
              <div className="space-y-4 border border-slate-200 p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Label htmlFor="location">Location Tracking</Label>
                  </div>
                  <Switch 
                    id="location" 
                    checked={enableLocationTracking}
                    onCheckedChange={setEnableLocationTracking}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  See geographical data of where your QR code is scanned
                </p>
              </div>
              
              <div className="space-y-4 border border-slate-200 p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    <Label>CSV Export</Label>
                  </div>
                  <span className="text-sm font-medium text-green-600">Included</span>
                </div>
                <p className="text-sm text-gray-500">
                  Export all analytics data to CSV for detailed analysis
                </p>
              </div>
              
              <div className="space-y-4 border border-slate-200 p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Label>Team Access</Label>
                  </div>
                  <span className="text-sm font-medium text-green-600">Add-on Available</span>
                </div>
                <p className="text-sm text-gray-500">
                  Allow team members to view and manage QR codes
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <Button 
            onClick={onDownload} 
            className="w-full"
            disabled={!options.content}
          >
            Generate Premium QR Code
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsQRCodeForm;
