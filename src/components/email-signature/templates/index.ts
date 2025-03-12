
import ProfessionalTemplate from "./ProfessionalTemplate";
import MinimalistTemplate from "./MinimalistTemplate";
import { EmailSignatureData, EmailSignatureTemplate } from "@/types/email-signature";
import React from "react";

export function renderTemplate(template: EmailSignatureTemplate, data: EmailSignatureData, isPreview = false): JSX.Element | string {
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

export function getTemplate(template: EmailSignatureTemplate, data: EmailSignatureData, isPreview = false): JSX.Element | string {
  return renderTemplate(template, data, isPreview);
}

export function getTemplateHtml(template: EmailSignatureTemplate, data: EmailSignatureData): string {
  const result = renderTemplate(template, data, false);
  return typeof result === "string" ? result : "";
}
