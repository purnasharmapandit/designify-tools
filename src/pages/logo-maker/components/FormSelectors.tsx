
import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface FormSelectorsProps {
  industry: string;
  style: string;
  setIndustry: (value: string) => void;
  setStyle: (value: string) => void;
  industries: Option[];
  styles: Option[];
}

const FormSelectors = ({
  industry,
  style,
  setIndustry,
  setStyle,
  industries,
  styles,
}: FormSelectorsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="industry">Industry</Label>
        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger id="industry" className="mt-1">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((ind) => (
              <SelectItem key={ind.value} value={ind.value}>
                {ind.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="style">Logo Style</Label>
        <Select value={style} onValueChange={setStyle}>
          <SelectTrigger id="style" className="mt-1">
            <SelectValue placeholder="Select style" />
          </SelectTrigger>
          <SelectContent>
            {styles.map((st) => (
              <SelectItem key={st.value} value={st.value}>
                {st.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FormSelectors;
