
import ProfessionalTemplate from "./ProfessionalTemplate";
import MinimalistTemplate from "./MinimalistTemplate";
import { EmailSignatureData, EmailSignatureTemplate } from "@/types/email-signature";
import React from "react";

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
    case "corporate":
      // Fallback to professional for now
      return isPreview 
        ? React.createElement(ProfessionalTemplate, { data, isPreview: true }) 
        : ProfessionalTemplate({ data, isPreview: false });
    case "creative":
      // Fallback to minimalist for now
      return isPreview 
        ? React.createElement(MinimalistTemplate, { data, isPreview: true }) 
        : MinimalistTemplate({ data, isPreview: false });
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

