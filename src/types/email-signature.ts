
export type EmailSignatureTemplate = 'professional' | 'corporate' | 'creative' | 'minimalist' | 'elegant' | 'executive';

export type SocialMediaLink = {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'youtube' | 'github' | 'dribble' | 'behance';
  url: string;
};

export type WebSafeFont = 
  'Arial' | 
  'Helvetica' | 
  'Times New Roman' | 
  'Times' | 
  'Courier New' | 
  'Courier' | 
  'Verdana' | 
  'Georgia' | 
  'Palatino' | 
  'Garamond' | 
  'Bookman' | 
  'Tahoma' | 
  'Trebuchet MS' | 
  'Arial Black' | 
  'Impact';

export interface EmailSignatureData {
  fullName: string;
  jobTitle: string;
  company: string;
  phoneNumber: string;
  email: string;
  website: string;
  address: string;
  profileImageUrl: string;
  companyLogoUrl: string;
  socialLinks: SocialMediaLink[];
  template: EmailSignatureTemplate;
  primaryColor: string;
  secondaryColor: string;
  font: WebSafeFont;
  showProfileImage: boolean;
  showCompanyLogo: boolean;
  showAddress: boolean;
}
