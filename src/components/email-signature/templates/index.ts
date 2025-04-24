
import ProfessionalTemplate from "./ProfessionalTemplate";
import MinimalistTemplate from "./MinimalistTemplate";
import ElegantTemplate from "./ElegantTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";
import { EmailSignatureData, EmailSignatureTemplate } from "@/types/email-signature";
import React from "react";

// Add mapping for social icon URLs for better email client compatibility
export const socialIconUrls = {
  facebook: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg",
  twitter: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg",
  linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg",
  instagram: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg",
  youtube: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/youtube.svg",
  github: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg",
  dribble: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/dribbble.svg",
  behance: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/behance.svg"
};

// Using direct PNG icons from a reliable CDN for better email client compatibility
export const socialIconPngUrls = {
  facebook: "https://cdn.iconscout.com/icon/free/png-24/facebook-224-498412.png",
  twitter: "https://cdn.iconscout.com/icon/free/png-24/twitter-241-721979.png", 
  linkedin: "https://cdn.iconscout.com/icon/free/png-24/linkedin-162-498418.png",
  instagram: "https://cdn.iconscout.com/icon/free/png-24/instagram-188-498425.png",
  youtube: "https://cdn.iconscout.com/icon/free/png-24/youtube-85-226402.png",
  github: "https://cdn.iconscout.com/icon/free/png-24/github-153-675523.png",
  dribble: "https://cdn.iconscout.com/icon/free/png-24/dribbble-3-459731.png",
  behance: "https://cdn.iconscout.com/icon/free/png-24/behance-2-569456.png"
};

// Update the renderTemplate and getTemplate functions to use the PNG icons in the HTML output
export function renderTemplate(template: EmailSignatureTemplate, data: EmailSignatureData, isPreview = false): React.ReactNode | string {
  switch (template) {
    case "professional":
      return isPreview 
        ? React.createElement(ProfessionalTemplate, { data, isPreview: true }) 
        : ProfessionalTemplate({ data, isPreview: false });
    case "minimalist":
      return isPreview 
        ? React.createElement(MinimalistTemplate, { data, isPreview: true }) 
        : MinimalistTemplate({ data, isPreview: false });
    case "elegant":
      return isPreview 
        ? React.createElement(ElegantTemplate, { data, isPreview: true }) 
        : ElegantTemplate({ data, isPreview: false });
    case "executive":
      return isPreview 
        ? React.createElement(ExecutiveTemplate, { data, isPreview: true }) 
        : ExecutiveTemplate({ data, isPreview: false });
    case "corporate":
      // Fallback to professional for now
      return isPreview 
        ? React.createElement(ProfessionalTemplate, { data, isPreview: true }) 
        : ProfessionalTemplate({ data, isPreview: false });
    case "creative":
      // Fallback to elegant for now
      return isPreview 
        ? React.createElement(ElegantTemplate, { data, isPreview: true }) 
        : ElegantTemplate({ data, isPreview: false });
    default:
      return isPreview 
        ? React.createElement(ProfessionalTemplate, { data, isPreview: true }) 
        : ProfessionalTemplate({ data, isPreview: false });
  }
}

export function getTemplate(template: EmailSignatureTemplate, data: EmailSignatureData, isPreview = false): React.ReactNode | string {
  return renderTemplate(template, data, isPreview);
}

export function getTemplateHtml(template: EmailSignatureTemplate, data: EmailSignatureData): string {
  // Adding wrapper table for better Gmail compatibility
  const innerContent = renderTemplate(template, data, false);
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;" />
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
</head>
<body style="margin:0; padding:0;">
${typeof innerContent === "string" ? innerContent : ""}
</body>
</html>`;
}
