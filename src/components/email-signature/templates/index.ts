
import ProfessionalTemplate from "./ProfessionalTemplate";
import MinimalistTemplate from "./MinimalistTemplate";
import { EmailSignatureData, EmailSignatureTemplate } from "@/types/email-signature";

export function renderTemplate(template: EmailSignatureTemplate, data: EmailSignatureData, isPreview = false): JSX.Element | string {
  switch (template) {
    case "professional":
      return isPreview ? <ProfessionalTemplate data={data} isPreview={true} /> : ProfessionalTemplate({ data, isPreview: false });
    case "minimalist":
      return isPreview ? <MinimalistTemplate data={data} isPreview={true} /> : MinimalistTemplate({ data, isPreview: false });
    case "corporate":
      // Fallback to professional for now
      return isPreview ? <ProfessionalTemplate data={data} isPreview={true} /> : ProfessionalTemplate({ data, isPreview: false });
    case "creative":
      // Fallback to minimalist for now
      return isPreview ? <MinimalistTemplate data={data} isPreview={true} /> : MinimalistTemplate({ data, isPreview: false });
    default:
      return isPreview ? <ProfessionalTemplate data={data} isPreview={true} /> : ProfessionalTemplate({ data, isPreview: false });
  }
}

export function getTemplate(template: EmailSignatureTemplate, data: EmailSignatureData, isPreview = false): JSX.Element | string {
  return renderTemplate(template, data, isPreview);
}

export function getTemplateHtml(template: EmailSignatureTemplate, data: EmailSignatureData): string {
  const result = renderTemplate(template, data, false);
  return typeof result === "string" ? result : "";
}
