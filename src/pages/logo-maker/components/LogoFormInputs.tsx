
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface LogoFormInputsProps {
  businessName: string;
  slogan: string;
  description: string;
  setBusinessName: (value: string) => void;
  setSlogan: (value: string) => void;
  setDescription: (value: string) => void;
}

const LogoFormInputs = ({
  businessName,
  slogan,
  description,
  setBusinessName,
  setSlogan,
  setDescription,
}: LogoFormInputsProps) => {
  return (
    <>
      <div>
        <Label htmlFor="businessName">Business Name *</Label>
        <Input
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="e.g. Designify Tools"
          className="mt-1"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="slogan">Slogan or Tagline (Optional)</Label>
        <Input
          id="slogan"
          value={slogan}
          onChange={(e) => setSlogan(e.target.value)}
          placeholder="e.g. Design tools for everyone"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="description">Additional Description (Optional)</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe any specific elements or ideas you'd like to see in your logo"
          className="mt-1"
          rows={3}
        />
      </div>
    </>
  );
};

export default LogoFormInputs;
