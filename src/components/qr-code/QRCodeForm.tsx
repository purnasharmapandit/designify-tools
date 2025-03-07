
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ColorPicker } from "@/components/ui/color-picker";
import { 
  QRCodeOptions, 
  QRCodeErrorCorrectionLevel, 
  QRCodeOutputFormat,
  QRCodeContentType,
  QRCodeCenterElement
} from "@/hooks/use-qrcode";
import ContentTypeSelector from "./ContentTypeSelector";
import CenterElementSelector from "./CenterElementSelector";

interface QRCodeFormProps {
  options: QRCodeOptions;
  onUpdateOptions: (options: Partial<QRCodeOptions>) => void;
  onDownload: () => void;
}

const QRCodeForm: React.FC<QRCodeFormProps> = ({ options, onUpdateOptions, onDownload }) => {
  const [socialPlatform, setSocialPlatform] = useState<string>("instagram");
  const [wifiSecurity, setWifiSecurity] = useState<string>("WPA");
  
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
      
      case 'social':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="socialPlatform">Social Media Platform</Label>
              <Select
                value={socialPlatform}
                onValueChange={(value) => {
                  setSocialPlatform(value);
                  onUpdateOptions({ content: '' });
                }}
              >
                <SelectTrigger id="socialPlatform">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Username/Profile URL</Label>
              <Input
                id="content"
                name="content"
                placeholder={`Your ${socialPlatform} username or profile URL`}
                value={options.content}
                onChange={handleInputChange}
              />
            </div>
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
      
      case 'phone':
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Phone Number</Label>
            <Input
              id="content"
              name="content"
              placeholder="+1 555 123 4567"
              value={options.content}
              onChange={handleInputChange}
            />
          </div>
        );
      
      case 'email':
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Email Address</Label>
            <Input
              id="content"
              name="content"
              placeholder="example@domain.com"
              value={options.content}
              onChange={handleInputChange}
            />
          </div>
        );
      
      case 'wifi':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ssid">WiFi Network Name (SSID)</Label>
              <Input
                id="ssid"
                placeholder="Network Name"
                value={options.content.includes('"ssid":') ? JSON.parse(options.content).ssid || '' : ''}
                onChange={(e) => {
                  const wifi = options.content ? 
                    JSON.parse(options.content.length ? options.content : '{"ssid":"","password":"","encryption":"WPA"}') : 
                    { ssid: '', password: '', encryption: wifiSecurity };
                  wifi.ssid = e.target.value;
                  onUpdateOptions({ content: JSON.stringify(wifi) });
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="WiFi Password"
                value={options.content.includes('"password":') ? JSON.parse(options.content).password || '' : ''}
                onChange={(e) => {
                  const wifi = options.content ? 
                    JSON.parse(options.content.length ? options.content : '{"ssid":"","password":"","encryption":"WPA"}') : 
                    { ssid: '', password: '', encryption: wifiSecurity };
                  wifi.password = e.target.value;
                  onUpdateOptions({ content: JSON.stringify(wifi) });
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="security">Security Type</Label>
              <Select
                value={wifiSecurity}
                onValueChange={(value) => {
                  setWifiSecurity(value);
                  const wifi = options.content ? 
                    JSON.parse(options.content.length ? options.content : '{"ssid":"","password":"","encryption":"WPA"}') : 
                    { ssid: '', password: '', encryption: 'WPA' };
                  wifi.encryption = value;
                  onUpdateOptions({ content: JSON.stringify(wifi) });
                }}
              >
                <SelectTrigger id="security">
                  <SelectValue placeholder="Security Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="WPA">WPA/WPA2</SelectItem>
                  <SelectItem value="WEP">WEP</SelectItem>
                  <SelectItem value="nopass">No Password</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 'payment':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="paymentType">Payment Type</Label>
              <Select
                value={options.content.includes('"type":') ? JSON.parse(options.content).type || 'upi' : 'upi'}
                onValueChange={(value) => {
                  const payment = { type: value, id: '' };
                  onUpdateOptions({ content: JSON.stringify(payment) });
                }}
              >
                <SelectTrigger id="paymentType">
                  <SelectValue placeholder="Payment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upi">UPI Payment</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentId">
                {options.content.includes('"type":"paypal"') ? 'PayPal Username' : 'UPI ID'}
              </Label>
              <Input
                id="paymentId"
                placeholder={options.content.includes('"type":"paypal"') ? 'username@paypal.com' : 'upiid@bank'}
                value={options.content.includes('"id":') ? JSON.parse(options.content).id || '' : ''}
                onChange={(e) => {
                  const paymentType = options.content.includes('"type":"paypal"') ? 'paypal' : 'upi';
                  const payment = { type: paymentType, id: e.target.value };
                  onUpdateOptions({ content: JSON.stringify(payment) });
                }}
              />
            </div>
          </div>
        );
      
      case 'zoom':
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Zoom Meeting Link</Label>
            <Input
              id="content"
              name="content"
              placeholder="https://zoom.us/j/example"
              value={options.content}
              onChange={handleInputChange}
            />
          </div>
        );
      
      case 'google_form':
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Google Form Link</Label>
            <Input
              id="content"
              name="content"
              placeholder="https://forms.gle/example"
              value={options.content}
              onChange={handleInputChange}
            />
          </div>
        );
      
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
          <div className="space-y-4">
            <Label>QR Code Type</Label>
            <ContentTypeSelector 
              selectedType={options.contentType} 
              onSelect={handleContentTypeChange} 
            />
          </div>

          {renderContentInput()}

          <CenterElementSelector 
            centerElement={options.centerElement} 
            onChange={handleCenterElementChange} 
          />

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
              <Label htmlFor="margin">Margin</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="margin"
                  min={0}
                  max={10}
                  step={1}
                  value={[options.margin]}
                  onValueChange={(values) => onUpdateOptions({ margin: values[0] })}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-12 text-right">
                  {options.margin}
                </span>
              </div>
            </div>
          </div>

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
              <Label htmlFor="errorCorrectionLevel">Error Correction Level</Label>
              <Select
                value={options.errorCorrectionLevel}
                onValueChange={(value) => 
                  onUpdateOptions({ 
                    errorCorrectionLevel: value as QRCodeErrorCorrectionLevel 
                  })
                }
              >
                <SelectTrigger id="errorCorrectionLevel">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (7%)</SelectItem>
                  <SelectItem value="M">Medium (15%)</SelectItem>
                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                  <SelectItem value="H">High (30%)</SelectItem>
                </SelectContent>
              </Select>
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

          <Button 
            onClick={onDownload} 
            className="w-full"
            disabled={!options.content}
          >
            Download QR Code
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default QRCodeForm;
