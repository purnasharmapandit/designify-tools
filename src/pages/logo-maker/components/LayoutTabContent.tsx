
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LayoutTabContentProps {
  selectedLayout: string;
  onLayoutChange: (value: string) => void;
  layouts: Array<{ value: string; label: string }>;
}

const LayoutTabContent = ({
  selectedLayout,
  onLayoutChange,
  layouts,
}: LayoutTabContentProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="layout">Layout Style</Label>
        <Select value={selectedLayout} onValueChange={onLayoutChange}>
          <SelectTrigger id="layout" className="mt-1">
            <SelectValue placeholder="Select layout" />
          </SelectTrigger>
          <SelectContent>
            {layouts.map(layout => (
              <SelectItem key={layout.value} value={layout.value}>
                {layout.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="pt-2">
        <Label className="mb-2 block">Alignment</Label>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1"
          >
            Left
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1"
          >
            Center
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1"
          >
            Right
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LayoutTabContent;
