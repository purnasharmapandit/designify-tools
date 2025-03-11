
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Mail, Phone, Globe, MapPin, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  data: SignatureData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  return (
    <div style={{ 
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "22px"
    }}>
      {data.email && (
        <a 
          href={`mailto:${data.email}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 14px",
            borderRadius: "10px",
            backgroundColor: `${data.colors.primary}08`,
            color: "#333",
            fontSize: "13px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.2s ease",
            border: `1px solid ${data.colors.primary}15`
          }}
        >
          <Mail size={14} style={{ marginRight: "8px", color: data.colors.primary, flexShrink: 0 }} />
          {data.email}
        </a>
      )}
      
      {data.phone && (
        <a 
          href={`tel:${data.phone}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 14px",
            borderRadius: "10px",
            backgroundColor: `${data.colors.primary}08`,
            color: "#333",
            fontSize: "13px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.2s ease",
            border: `1px solid ${data.colors.primary}15`
          }}
        >
          <Phone size={14} style={{ marginRight: "8px", color: data.colors.primary, flexShrink: 0 }} />
          {data.phone}
        </a>
      )}
      
      {data.website && (
        <a 
          href={data.website.startsWith('http') ? data.website : `https://${data.website}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 14px",
            borderRadius: "10px",
            backgroundColor: `${data.colors.primary}08`,
            color: "#333",
            fontSize: "13px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.2s ease",
            border: `1px solid ${data.colors.primary}15`
          }}
        >
          <Globe size={14} style={{ marginRight: "8px", color: data.colors.primary, flexShrink: 0 }} />
          {data.website.replace(/^https?:\/\//i, '')}
          <ExternalLink size={12} style={{ marginLeft: "4px", color: data.colors.primary, opacity: 0.7 }} />
        </a>
      )}
      
      {data.address && (
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 14px",
          borderRadius: "10px",
          backgroundColor: `${data.colors.primary}08`,
          color: "#333",
          fontSize: "13px",
          fontWeight: "500",
          border: `1px solid ${data.colors.primary}15`
        }}>
          <MapPin size={14} style={{ marginRight: "8px", color: data.colors.primary, flexShrink: 0 }} />
          {data.address}
        </div>
      )}
    </div>
  );
};

export default ContactSection;
