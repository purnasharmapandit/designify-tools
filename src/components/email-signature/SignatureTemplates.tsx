
import React from "react";
import { SignatureTemplate } from "@/types/email-signature";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SignatureTemplatesProps {
  templates: SignatureTemplate[];
  onSelect: (templateId: string) => void;
}

const SignatureTemplates: React.FC<SignatureTemplatesProps> = ({ templates, onSelect }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Choose a Template</h2>
      <p className="text-muted-foreground mb-6">
        Select a template to start with. You can customize all elements in the next step.
      </p>
      
      <div className="grid sm:grid-cols-2 gap-6">
        {templates.map((template) => (
          <motion.div 
            key={template.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden h-full cursor-pointer hover:border-primary/50">
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                {template.previewImage ? (
                  <img 
                    src={template.previewImage} 
                    alt={template.name} 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <span className="text-muted-foreground">Preview not available</span>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-1">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                <Button 
                  className="w-full" 
                  onClick={() => onSelect(template.id)}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SignatureTemplates;
