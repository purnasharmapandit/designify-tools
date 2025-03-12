import React from "react";
import { EmailSignatureData, SocialMediaLink } from "@/types/email-signature";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ColorPicker } from "@/components/ui/color-picker";
import { webSafeFonts, emailTemplates, socialPlatforms } from "@/utils/email-signature-utils";
import { Trash2, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SignatureFormProps {
  data: EmailSignatureData;
  setData: React.Dispatch<React.SetStateAction<EmailSignatureData>>;
}

const SignatureForm: React.FC<SignatureFormProps> = ({ data, setData }) => {
  const addSocialLink = () => {
    setData((prev) => ({
      ...prev,
      socialLinks: [
        ...prev.socialLinks,
        { platform: "linkedin", url: "" },
      ],
    }));
  };

  const removeSocialLink = (index: number) => {
    setData((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index),
    }));
  };

  const updateSocialLink = (index: number, field: keyof SocialMediaLink, value: string) => {
    setData((prev) => {
      const newSocialLinks = [...prev.socialLinks];
      newSocialLinks[index] = {
        ...newSocialLinks[index],
        [field]: value,
      };
      return {
        ...prev,
        socialLinks: newSocialLinks,
      };
    });
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="social">Social Links</TabsTrigger>
            <TabsTrigger value="options">Options</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4 mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={data.fullName}
                  onChange={(e) => setData({ ...data, fullName: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={data.jobTitle}
                  onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
                  placeholder="Marketing Manager"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={data.company}
                  onChange={(e) => setData({ ...data, company: e.target.value })}
                  placeholder="Acme Inc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={data.phoneNumber}
                  onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={data.website}
                  onChange={(e) => setData({ ...data, website: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={data.address}
                  onChange={(e) => setData({ ...data, address: e.target.value })}
                  placeholder="123 Business St, City, State, ZIP"
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="design" className="space-y-4 mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="template">Template Style</Label>
                <Select
                  value={data.template}
                  onValueChange={(value) => setData({ ...data, template: value as any })}
                >
                  <SelectTrigger id="template">
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {emailTemplates.map((template) => (
                      <SelectItem key={template.value} value={template.value}>
                        {template.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="font">Font</Label>
                <Select
                  value={data.font}
                  onValueChange={(value) => setData({ ...data, font: value as any })}
                >
                  <SelectTrigger id="font">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent>
                    {webSafeFonts.map((font) => (
                      <SelectItem key={font.value} value={font.value}>
                        <span style={{ fontFamily: font.value }}>{font.label}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <ColorPicker
                  id="primaryColor"
                  label="Primary Color"
                  value={data.primaryColor}
                  onChange={(value) => setData({ ...data, primaryColor: value })}
                />
              </div>
              <div className="space-y-2">
                <ColorPicker
                  id="secondaryColor"
                  label="Secondary Color"
                  value={data.secondaryColor}
                  onChange={(value) => setData({ ...data, secondaryColor: value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profileImageUrl">Profile Image URL</Label>
                <Input
                  id="profileImageUrl"
                  type="url"
                  value={data.profileImageUrl}
                  onChange={(e) => setData({ ...data, profileImageUrl: e.target.value })}
                  placeholder="https://example.com/profile.jpg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a direct URL to your profile image (recommended size: 100x100px)
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyLogoUrl">Company Logo URL</Label>
                <Input
                  id="companyLogoUrl"
                  type="url"
                  value={data.companyLogoUrl}
                  onChange={(e) => setData({ ...data, companyLogoUrl: e.target.value })}
                  placeholder="https://example.com/logo.png"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a direct URL to your company logo (recommended size: 200x50px)
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-4 mt-4">
            <div className="space-y-4">
              {data.socialLinks.map((link, index) => (
                <div key={index} className="flex items-end gap-2">
                  <div className="flex-1 space-y-2">
                    <Label>Platform</Label>
                    <Select
                      value={link.platform}
                      onValueChange={(value) => updateSocialLink(index, "platform", value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {socialPlatforms.map((platform) => (
                          <SelectItem key={platform.value} value={platform.value}>
                            {platform.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-[2] space-y-2">
                    <Label>URL</Label>
                    <Input
                      value={link.url}
                      onChange={(e) => updateSocialLink(index, "url", e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeSocialLink(index)}
                    className="flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={addSocialLink} className="w-full">
                <Plus className="h-4 w-4 mr-2" /> Add Social Link
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="options" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="showProfileImage">Show Profile Image</Label>
                  <p className="text-sm text-gray-500">Include your profile image in the signature</p>
                </div>
                <Switch
                  id="showProfileImage"
                  checked={data.showProfileImage}
                  onCheckedChange={(checked) => setData({ ...data, showProfileImage: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="showCompanyLogo">Show Company Logo</Label>
                  <p className="text-sm text-gray-500">Include your company logo in the signature</p>
                </div>
                <Switch
                  id="showCompanyLogo"
                  checked={data.showCompanyLogo}
                  onCheckedChange={(checked) => setData({ ...data, showCompanyLogo: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="showAddress">Show Address</Label>
                  <p className="text-sm text-gray-500">Include your physical address in the signature</p>
                </div>
                <Switch
                  id="showAddress"
                  checked={data.showAddress}
                  onCheckedChange={(checked) => setData({ ...data, showAddress: checked })}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SignatureForm;
