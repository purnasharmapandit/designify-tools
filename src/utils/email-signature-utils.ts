
import { EmailSignatureData, WebSafeFont } from "@/types/email-signature";

export const webSafeFonts: { label: string; value: WebSafeFont }[] = [
  { label: "Arial", value: "Arial" },
  { label: "Helvetica", value: "Helvetica" },
  { label: "Times New Roman", value: "Times New Roman" },
  { label: "Times", value: "Times" },
  { label: "Courier New", value: "Courier New" },
  { label: "Courier", value: "Courier" },
  { label: "Verdana", value: "Verdana" },
  { label: "Georgia", value: "Georgia" },
  { label: "Palatino", value: "Palatino" },
  { label: "Garamond", value: "Garamond" },
  { label: "Bookman", value: "Bookman" },
  { label: "Tahoma", value: "Tahoma" },
  { label: "Trebuchet MS", value: "Trebuchet MS" },
  { label: "Arial Black", value: "Arial Black" },
  { label: "Impact", value: "Impact" },
];

export const socialPlatforms = [
  { label: "Facebook", value: "facebook", icon: "facebook" },
  { label: "Twitter", value: "twitter", icon: "twitter" },
  { label: "LinkedIn", value: "linkedin", icon: "linkedin" },
  { label: "Instagram", value: "instagram", icon: "instagram" },
  { label: "YouTube", value: "youtube", icon: "youtube" },
  { label: "GitHub", value: "github", icon: "github" },
  { label: "Dribbble", value: "dribble", icon: "dribble" },
  { label: "Behance", value: "behance", icon: "behance" },
];

export const emailTemplates = [
  { label: "Professional", value: "professional" },
  { label: "Corporate", value: "corporate" },
  { label: "Creative", value: "creative" },
  { label: "Minimalist", value: "minimalist" },
  { label: "Elegant", value: "elegant" },
  { label: "Executive", value: "executive" },
];

// Cache for Base64 encoded images
const imageCache = new Map<string, string>();

export function generateImageUrl(file: File | null | undefined): string {
  if (!file) return '';
  
  // For React preview, use object URL
  if (typeof window !== 'undefined' && window.location) {
    return URL.createObjectURL(file);
  }
  
  return '';
}

// This function will convert File objects to base64 strings for email-ready HTML
export async function fileToBase64(file: File | null | undefined): Promise<string> {
  if (!file) return '';
  
  // Check cache first
  const cacheKey = `${file.name}-${file.size}-${file.lastModified}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey) || '';
  }
  
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function() {
      const base64String = reader.result as string;
      imageCache.set(cacheKey, base64String);
      resolve(base64String);
    };
    reader.readAsDataURL(file);
  });
}

export function getEmailClientInstructions(): Record<string, string[]> {
  return {
    gmail: [
      "1. Open Gmail and click on the gear icon (⚙️) in the top right corner",
      "2. Select 'See all settings'",
      "3. In the 'General' tab, scroll down to 'Signature'",
      "4. Click on 'Create new' if you don't have an existing signature",
      "5. Give your signature a name",
      "6. Click on the HTML button (< >) or right-click and select 'Paste as plain text'",
      "7. Paste your signature HTML code and click 'Save Changes' at the bottom of the page"
    ],
    outlook: [
      "1. Open Outlook and click on 'File' in the top menu",
      "2. Select 'Options'",
      "3. Click on 'Mail' in the left sidebar",
      "4. Under 'Compose messages', click on 'Signatures...'",
      "5. Click 'New' and give your signature a name",
      "6. Paste your signature HTML code in the editor",
      "7. Click 'OK' to save your changes"
    ],
    appleMail: [
      "1. Open Mail app and click on 'Mail' in the top menu",
      "2. Select 'Preferences'",
      "3. Click on the 'Signatures' tab",
      "4. Click the '+' button to create a new signature",
      "5. Give your signature a name if prompted",
      "6. Paste your signature HTML code in the editor",
      "7. Close the preferences window to save your changes"
    ]
  };
}

export function generateSignatureHtml(data: EmailSignatureData): string {
  // This function will be implemented in the template components
  // It's here as a placeholder for now
  return "";
}

export function downloadSignatureHtml(html: string, filename: string): void {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'email-signature.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
