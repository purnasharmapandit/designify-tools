
import { SignatureData } from "@/types/email-signature";

export const defaultSignatureData: SignatureData = {
  name: "Alex Johnson",
  jobTitle: "Product Marketing Lead",
  company: "TechVision Inc.",
  department: "Marketing",
  email: "alex.johnson@techvision.com",
  phone: "+1 (555) 123-4567",
  website: "techvision.com",
  address: "123 Innovation Drive, San Francisco, CA",
  photoUrl: "/lovable-uploads/profile-pic.png",
  companyLogoUrl: "/lovable-uploads/57d5ad99-eb1e-4280-a64f-e837c1d3b851.png",
  socialLinks: {
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    instagram: "https://instagram.com/alexjohnson",
    facebook: "https://facebook.com/alexjohnson"
  },
  meetingLink: "https://calendly.com/alexjohnson/meeting",
  credentials: "MBA",
  font: "Inter",
  colors: {
    primary: "#3b82f6",
    secondary: "#4f46e5",
    text: "#334155"
  }
};
