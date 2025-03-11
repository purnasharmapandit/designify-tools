
import { SignatureTemplate } from "@/types/email-signature";

export const defaultTemplates: SignatureTemplate[] = [
  { 
    id: "minimal", 
    name: "Minimal",
    description: "Clean, simple design with essential information",
    previewImage: "/lovable-uploads/ad773163-0e7f-4f92-b290-351b0c446ab9.png",
    featured: false,
    new: false
  },
  { 
    id: "professional", 
    name: "Professional",
    description: "Complete business signature with contact details",
    previewImage: "/lovable-uploads/1a43098b-f1ed-4275-9a64-0247d2c9441e.png",
    featured: true,
    new: false
  },
  { 
    id: "modern", 
    name: "Modern",
    description: "Contemporary design with bold color accents",
    previewImage: "/lovable-uploads/c2c476a5-d97d-45d6-8bc0-4babfc0a0178.png",
    featured: false,
    new: false
  },
  { 
    id: "creative", 
    name: "Creative",
    description: "Standout design for creative professionals",
    previewImage: "/lovable-uploads/9631ab2d-6048-425b-b6ac-fd4d8e6181c0.png",
    featured: false,
    new: false
  },
  { 
    id: "corporate", 
    name: "Corporate",
    description: "Professional signature with branded header",
    previewImage: "/lovable-uploads/db9c3f39-be59-43e9-9fda-054848781b3d.png",
    featured: false,
    new: true
  },
  { 
    id: "minimalist", 
    name: "Minimalist",
    description: "Ultra-clean design with refined typography",
    previewImage: "/lovable-uploads/1e50aa4b-618f-4bc9-a6fc-867d25daf731.png",
    featured: false,
    new: true
  },
];
