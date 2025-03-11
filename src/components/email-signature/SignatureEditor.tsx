
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/ui/color-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Twitter, Instagram, Facebook, Calendar } from "lucide-react";

interface SignatureEditorProps {
  data: SignatureData;
  onChange: (data: Partial<SignatureData>) => void;
  onProceed: () => void;
}

const SignatureEditor: React.FC<SignatureEditorProps> = ({ data, onChange, onProceed }) => {
  const handleSocialLinkChange = (platform: keyof SignatureData["socialLinks"], value: string) => {
    onChange({ 
      socialLinks: { 
        ...data.socialLinks, 
        [platform]: value 
      } 
    });
  };

  const handleColorChange = (colorType: keyof SignatureData["colors"], value: string) => {
    onChange({ 
      colors: { 
        ...data.colors, 
        [colorType]: value 
      } 
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-2">Customize Your Signature</h2>
      
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="personal" className="flex-1">Personal Info</TabsTrigger>
          <TabsTrigger value="company" className="flex-1">Company</TabsTrigger>
          <TabsTrigger value="social" className="flex-1">Social</TabsTrigger>
          <TabsTrigger value="design" className="flex-1">Design</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              id="jobTitle"
              value={data.jobTitle}
              onChange={(e) => onChange({ jobTitle: e.target.value })}
              placeholder="Marketing Manager"
            />
          </div>
          
          <div>
            <Label htmlFor="department">Department</Label>
            <Input
              id="department"
              value={data.department}
              onChange={(e) => onChange({ department: e.target.value })}
              placeholder="Marketing"
            />
          </div>
          
          <div>
            <Label htmlFor="credentials">Credentials</Label>
            <Input
              id="credentials"
              value={data.credentials}
              onChange={(e) => onChange({ credentials: e.target.value })}
              placeholder="MBA, PhD"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <Label htmlFor="photo">Profile Photo URL</Label>
            <Input
              id="photo"
              value={data.photoUrl}
              onChange={(e) => onChange({ photoUrl: e.target.value })}
              placeholder="https://example.com/photo.jpg"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Recommended size: 100x100px
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="company" className="space-y-4">
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              value={data.company}
              onChange={(e) => onChange({ company: e.target.value })}
              placeholder="Acme Inc."
            />
          </div>
          
          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              value={data.website}
              onChange={(e) => onChange({ website: e.target.value })}
              placeholder="https://example.com"
            />
          </div>
          
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value={data.address}
              onChange={(e) => onChange({ address: e.target.value })}
              placeholder="123 Business St, City, State 12345"
              rows={2}
            />
          </div>
          
          <div>
            <Label htmlFor="companyLogo">Company Logo URL</Label>
            <Input
              id="companyLogo"
              value={data.companyLogoUrl}
              onChange={(e) => onChange({ companyLogoUrl: e.target.value })}
              placeholder="https://example.com/logo.png"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Recommended height: 50px
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-4">
          <div>
            <Label htmlFor="linkedin" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Label>
            <Input
              id="linkedin"
              value={data.socialLinks.linkedin}
              onChange={(e) => handleSocialLinkChange("linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          
          <div>
            <Label htmlFor="twitter" className="flex items-center gap-2">
              <Twitter className="h-4 w-4" /> Twitter
            </Label>
            <Input
              id="twitter"
              value={data.socialLinks.twitter}
              onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
              placeholder="https://twitter.com/username"
            />
          </div>
          
          <div>
            <Label htmlFor="instagram" className="flex items-center gap-2">
              <Instagram className="h-4 w-4" /> Instagram
            </Label>
            <Input
              id="instagram"
              value={data.socialLinks.instagram}
              onChange={(e) => handleSocialLinkChange("instagram", e.target.value)}
              placeholder="https://instagram.com/username"
            />
          </div>
          
          <div>
            <Label htmlFor="facebook" className="flex items-center gap-2">
              <Facebook className="h-4 w-4" /> Facebook
            </Label>
            <Input
              id="facebook"
              value={data.socialLinks.facebook}
              onChange={(e) => handleSocialLinkChange("facebook", e.target.value)}
              placeholder="https://facebook.com/username"
            />
          </div>
          
          <div>
            <Label htmlFor="meetingLink" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Meeting Link
            </Label>
            <Input
              id="meetingLink"
              value={data.meetingLink}
              onChange={(e) => onChange({ meetingLink: e.target.value })}
              placeholder="https://calendly.com/username"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Calendly, HubSpot, or other scheduling service
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="design" className="space-y-4">
          <div>
            <Label htmlFor="font">Font</Label>
            <Select 
              value={data.font} 
              onValueChange={(value) => onChange({ font: value })}
            >
              <SelectTrigger id="font">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Inter">Inter</SelectItem>
                <SelectItem value="Arial">Arial</SelectItem>
                <SelectItem value="Helvetica">Helvetica</SelectItem>
                <SelectItem value="Georgia">Georgia</SelectItem>
                <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                <SelectItem value="Verdana">Verdana</SelectItem>
                <SelectItem value="Tahoma">Tahoma</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <ColorPicker
              label="Primary Color"
              value={data.colors.primary}
              onChange={(value) => handleColorChange("primary", value)}
              id="primaryColor"
            />
          </div>
          
          <div className="space-y-2">
            <ColorPicker
              label="Secondary Color"
              value={data.colors.secondary}
              onChange={(value) => handleColorChange("secondary", value)}
              id="secondaryColor"
            />
          </div>
          
          <div className="space-y-2">
            <ColorPicker
              label="Text Color"
              value={data.colors.text}
              onChange={(value) => handleColorChange("text", value)}
              id="textColor"
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="pt-4 border-t mt-6">
        <Button onClick={onProceed} className="w-full">
          Proceed to Preview
        </Button>
      </div>
    </div>
  );
};

export default SignatureEditor;
