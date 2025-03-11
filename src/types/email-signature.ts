
export interface SignatureTemplate {
  id: string;
  name: string;
  description: string;
  previewImage: string;
}

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
}

export interface SignatureColors {
  primary: string;
  secondary: string;
  text: string;
}

export interface SignatureData {
  name: string;
  jobTitle: string;
  company: string;
  department: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  photoUrl: string;
  companyLogoUrl: string;
  socialLinks: SocialLinks;
  meetingLink: string;
  credentials: string;
  font: string;
  colors: SignatureColors;
}
