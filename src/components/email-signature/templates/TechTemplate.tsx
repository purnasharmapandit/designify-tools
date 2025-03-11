
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram, Facebook, Calendar } from "lucide-react";

interface TechTemplateProps {
  data: SignatureData;
}

const TechTemplate: React.FC<TechTemplateProps> = ({ data }) => {
  return (
    <div style={{ 
      maxWidth: "600px",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: data.colors.text,
      background: "#fff",
      borderRadius: "16px",
      padding: "1px",
      background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "15px",
        padding: "24px"
      }}>
        <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
                  {data.photoUrl && (
                    <img 
                      src={data.photoUrl} 
                      alt={data.name}
                      style={{ 
                        width: "64px",
                        height: "64px",
                        borderRadius: "16px",
                        marginRight: "16px",
                        objectFit: "cover"
                      }}
                    />
                  )}
                  <div>
                    <h2 style={{ 
                      margin: "0 0 4px 0",
                      fontSize: "20px",
                      fontWeight: "600",
                      background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      {data.name}
                      {data.credentials && (
                        <span style={{ 
                          fontSize: "14px",
                          fontWeight: "normal",
                          opacity: "0.7",
                          marginLeft: "8px",
                          color: data.colors.text,
                          WebkitTextFillColor: data.colors.text
                        }}>
                          {data.credentials}
                        </span>
                      )}
                    </h2>
                    <p style={{ 
                      margin: "0 0 2px 0",
                      fontSize: "14px",
                      color: data.colors.secondary,
                      fontWeight: "500"
                    }}>
                      {data.jobTitle}
                      {data.department && (
                        <span style={{ color: data.colors.text, opacity: "0.7" }}> • {data.department}</span>
                      )}
                    </p>
                    <p style={{ 
                      margin: "0",
                      fontSize: "14px",
                      color: data.colors.text
                    }}>
                      {data.company}
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "20px"
                }}>
                  {data.email && (
                    <a 
                      href={`mailto:${data.email}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        backgroundColor: `${data.colors.primary}08`,
                        color: data.colors.text,
                        fontSize: "13px",
                        textDecoration: "none",
                        fontWeight: "500"
                      }}
                    >
                      <Mail size={14} style={{ marginRight: "6px", color: data.colors.primary }} />
                      {data.email}
                    </a>
                  )}
                  
                  {data.phone && (
                    <a 
                      href={`tel:${data.phone}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        backgroundColor: `${data.colors.primary}08`,
                        color: data.colors.text,
                        fontSize: "13px",
                        textDecoration: "none",
                        fontWeight: "500"
                      }}
                    >
                      <Phone size={14} style={{ marginRight: "6px", color: data.colors.primary }} />
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
                        padding: "8px 12px",
                        borderRadius: "8px",
                        backgroundColor: `${data.colors.primary}08`,
                        color: data.colors.text,
                        fontSize: "13px",
                        textDecoration: "none",
                        fontWeight: "500"
                      }}
                    >
                      <Globe size={14} style={{ marginRight: "6px", color: data.colors.primary }} />
                      {data.website.replace(/^https?:\/\//i, '')}
                    </a>
                  )}
                  
                  {data.address && (
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      backgroundColor: `${data.colors.primary}08`,
                      color: data.colors.text,
                      fontSize: "13px",
                      fontWeight: "500"
                    }}>
                      <MapPin size={14} style={{ marginRight: "6px", color: data.colors.primary }} />
                      {data.address}
                    </div>
                  )}
                </div>
                
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: `1px solid ${data.colors.primary}10`,
                  paddingTop: "16px"
                }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {data.socialLinks.linkedin && (
                      <a 
                        href={data.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}08`,
                          color: data.colors.primary,
                          transition: "all 0.2s"
                        }}
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {data.socialLinks.twitter && (
                      <a 
                        href={data.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}08`,
                          color: data.colors.primary,
                          transition: "all 0.2s"
                        }}
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {data.socialLinks.instagram && (
                      <a 
                        href={data.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}08`,
                          color: data.colors.primary,
                          transition: "all 0.2s"
                        }}
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                    {data.socialLinks.facebook && (
                      <a 
                        href={data.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}08`,
                          color: data.colors.primary,
                          transition: "all 0.2s"
                        }}
                      >
                        <Facebook size={16} />
                      </a>
                    )}
                  </div>
                  
                  {data.meetingLink && (
                    <a 
                      href={data.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`,
                        color: "#fff",
                        fontSize: "13px",
                        textDecoration: "none",
                        fontWeight: "500"
                      }}
                    >
                      <Calendar size={14} style={{ marginRight: "6px" }} />
                      Schedule a Meeting
                    </a>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechTemplate;
