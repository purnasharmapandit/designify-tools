
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram, Facebook, Calendar } from "lucide-react";

interface CompactTemplateProps {
  data: SignatureData;
}

const CompactTemplate: React.FC<CompactTemplateProps> = ({ data }) => {
  return (
    <div style={{ 
      maxWidth: "400px",
      fontFamily: data.font || "Arial, sans-serif",
      color: data.colors.text,
      fontSize: "12px",
      lineHeight: "1.4"
    }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ paddingRight: "10px", verticalAlign: "top" }}>
              {data.photoUrl && (
                <img 
                  src={data.photoUrl} 
                  alt={data.name}
                  style={{ 
                    width: "50px",
                    height: "50px",
                    borderRadius: "4px"
                  }}
                />
              )}
            </td>
            <td>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ 
                  color: data.colors.primary,
                  fontSize: "14px",
                  display: "block"
                }}>{data.name}</strong>
                <span style={{ 
                  fontSize: "12px",
                  color: data.colors.text,
                  display: "block"
                }}>{data.jobTitle}</span>
                <span style={{ 
                  fontSize: "12px",
                  color: data.colors.text,
                  display: "block"
                }}>{data.company}</span>
              </div>
              
              <div style={{ fontSize: "11px" }}>
                {data.email && (
                  <a href={`mailto:${data.email}`} style={{ 
                    display: "block",
                    color: data.colors.text,
                    textDecoration: "none",
                    marginBottom: "2px"
                  }}>
                    <Mail size={10} style={{ marginRight: "4px", color: data.colors.primary }} />
                    {data.email}
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} style={{ 
                    display: "block",
                    color: data.colors.text,
                    textDecoration: "none",
                    marginBottom: "2px"
                  }}>
                    <Phone size={10} style={{ marginRight: "4px", color: data.colors.primary }} />
                    {data.phone}
                  </a>
                )}
                {data.website && (
                  <a href={data.website} style={{ 
                    display: "block",
                    color: data.colors.text,
                    textDecoration: "none",
                    marginBottom: "2px"
                  }}>
                    <Globe size={10} style={{ marginRight: "4px", color: data.colors.primary }} />
                    {data.website}
                  </a>
                )}
              </div>
            </td>
          </tr>
          {(data.socialLinks.linkedin || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.facebook || data.meetingLink) && (
            <tr>
              <td colSpan={2} style={{ paddingTop: "8px", borderTop: `1px solid ${data.colors.secondary}`, marginTop: "8px" }}>
                {data.socialLinks.linkedin && (
                  <a 
                    href={data.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Linkedin size={14} />
                  </a>
                )}
                {data.socialLinks.twitter && (
                  <a 
                    href={data.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Twitter size={14} />
                  </a>
                )}
                {data.socialLinks.instagram && (
                  <a 
                    href={data.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Instagram size={14} />
                  </a>
                )}
                {data.socialLinks.facebook && (
                  <a 
                    href={data.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Facebook size={14} />
                  </a>
                )}
                {data.meetingLink && (
                  <a 
                    href={data.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Calendar size={14} />
                  </a>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompactTemplate;
