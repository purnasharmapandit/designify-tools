
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
    primary: "#6366f1",
    secondary: "#e2e8f0",
    text: "#334155"
  }
};
