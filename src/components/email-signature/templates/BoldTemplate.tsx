
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram, Facebook, Calendar } from "lucide-react";

interface BoldTemplateProps {
  data: SignatureData;
}

const BoldTemplate: React.FC<BoldTemplateProps> = ({ data }) => {
  return (
    <div style={{ 
      maxWidth: "600px",
      fontFamily: data.font || "Arial, sans-serif",
      color: data.colors.text,
      background: `linear-gradient(to right, ${data.colors.primary}20, transparent)`
    }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ padding: "20px" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td style={{ paddingRight: "20px", verticalAlign: "top" }}>
                    {data.photoUrl && (
                      <img 
                        src={data.photoUrl} 
                        alt={data.name}
                        style={{ 
                          width: "100px",
                          height: "100px",
                          borderRadius: "8px",
                          border: `3px solid ${data.colors.primary}`
                        }}
                      />
                    )}
                  </td>
                  <td style={{ verticalAlign: "top" }}>
                    <h2 style={{ 
                      margin: "0 0 5px 0",
                      fontSize: "28px",
                      color: data.colors.primary,
                      fontWeight: "bold"
                    }}>{data.name}</h2>
                    <p style={{ 
                      margin: "0 0 5px 0",
                      fontSize: "18px",
                      fontWeight: "bold"
                    }}>{data.jobTitle}</p>
                    <p style={{ 
                      margin: "0 0 15px 0",
                      fontSize: "16px"
                    }}>{data.company}</p>
                    
                    <div style={{ marginBottom: "15px" }}>
                      {data.email && (
                        <a href={`mailto:${data.email}`} style={{ 
                          display: "block",
                          marginBottom: "5px",
                          color: data.colors.text,
                          textDecoration: "none",
                          fontWeight: "bold"
                        }}>
                          <Mail size={16} style={{ marginRight: "8px", color: data.colors.primary }} />
                          {data.email}
                        </a>
                      )}
                      {data.phone && (
                        <a href={`tel:${data.phone}`} style={{ 
                          display: "block",
                          marginBottom: "5px",
                          color: data.colors.text,
                          textDecoration: "none",
                          fontWeight: "bold"
                        }}>
                          <Phone size={16} style={{ marginRight: "8px", color: data.colors.primary }} />
                          {data.phone}
                        </a>
                      )}
                      {data.website && (
                        <a href={data.website} style={{ 
                          display: "block",
                          marginBottom: "5px",
                          color: data.colors.text,
                          textDecoration: "none",
                          fontWeight: "bold"
                        }}>
                          <Globe size={16} style={{ marginRight: "8px", color: data.colors.primary }} />
                          {data.website}
                        </a>
                      )}
                    </div>
                    
                    <div style={{ marginTop: "10px" }}>
                      {Object.entries({
                        linkedin: [data.socialLinks.linkedin, Linkedin],
                        twitter: [data.socialLinks.twitter, Twitter],
                        instagram: [data.socialLinks.instagram, Instagram],
                        facebook: [data.socialLinks.facebook, Facebook],
                        calendar: [data.meetingLink, Calendar]
                      }).map(([key, [link, Icon]]) => 
                        link && (
                          <a 
                            key={key}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-block",
                              marginRight: "12px",
                              color: data.colors.primary,
                              textDecoration: "none"
                            }}
                          >
                            <Icon size={24} style={{ fill: data.colors.primary }} />
                          </a>
                        )
                      )}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoldTemplate;
