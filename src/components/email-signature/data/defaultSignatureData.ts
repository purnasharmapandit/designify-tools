
import { SignatureData } from "@/types/email-signature";

export const defaultSignatureData: SignatureData = {
  name: "",
  jobTitle: "",
  company: "",
  department: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  photoUrl: "",
  companyLogoUrl: "",
  socialLinks: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  meetingLink: "",
  credentials: "",
  font: "Inter",
  colors: {
    primary: "#3b82f6",
    secondary: "#4f46e5",
    text: "#334155"
  }
};
