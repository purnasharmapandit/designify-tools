
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BusinessCardData } from "../types";

interface ContentTabContentProps {
  cardData: BusinessCardData;
  handleInputChange: (field: keyof BusinessCardData, value: string) => void;
}

const ContentTabContent = ({ cardData, handleInputChange }: ContentTabContentProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          value={cardData.name} 
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>
      
      <div>
        <Label htmlFor="title">Job Title</Label>
        <Input 
          id="title" 
          value={cardData.title} 
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          value={cardData.email} 
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input 
          id="phone" 
          value={cardData.phone} 
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
      </div>
      
      <div>
        <Label htmlFor="website">Website</Label>
        <Input 
          id="website" 
          value={cardData.website} 
          onChange={(e) => handleInputChange("website", e.target.value)}
        />
      </div>
      
      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea 
          id="address" 
          value={cardData.address} 
          onChange={(e) => handleInputChange("address", e.target.value)}
          rows={2}
        />
      </div>
    </div>
  );
};

export default ContentTabContent;
