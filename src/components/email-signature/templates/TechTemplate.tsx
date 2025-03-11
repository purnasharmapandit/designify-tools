
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram, Facebook, Calendar, ExternalLink } from "lucide-react";

interface TechTemplateProps {
  data: SignatureData;
}

const TechTemplate: React.FC<TechTemplateProps> = ({ data }) => {
  return (
    <div style={{ 
      maxWidth: "600px",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: data.colors.text,
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "15px",
        margin: "1px",
        padding: "24px"
      }}>
        <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <div style={{ marginBottom: "24px", display: "flex", alignItems: "center" }}>
                  {data.photoUrl && (
                    <div style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "14px",
                      overflow: "hidden",
                      marginRight: "18px",
                      border: `1px solid ${data.colors.primary}20`,
                      boxShadow: "0 6px 12px rgba(0,0,0,0.06)"
                    }}>
                      <img 
                        src={data.photoUrl} 
                        alt={data.name}
                        style={{ 
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <h2 style={{ 
                      margin: "0 0 6px 0",
                      fontSize: "20px",
                      fontWeight: "600",
                      background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      textShadow: "0 0 1px rgba(0,0,0,0.1)",
                      letterSpacing: "-0.01em"
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
                        <span style={{ 
                          color: "#555", 
                          opacity: "0.9",
                          fontWeight: "400" 
                        }}> • {data.department}</span>
                      )}
                    </p>
                    <div style={{ 
                      margin: "0",
                      fontSize: "14px",
                      color: "#222",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      {data.company}
                      {data.companyLogoUrl && (
                        <img 
                          src={data.companyLogoUrl} 
                          alt={data.company}
                          style={{ 
                            height: "16px",
                            marginLeft: "8px",
                            verticalAlign: "middle"
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                
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
                
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: `1px solid ${data.colors.primary}15`,
                  paddingTop: "18px",
                  marginTop: "2px"
                }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {data.socialLinks.linkedin && (
                      <a 
                        href={data.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "34px",
                          height: "34px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}10`,
                          color: data.colors.primary,
                          transition: "all 0.2s ease",
                          border: `1px solid ${data.colors.primary}15`
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
                          width: "34px",
                          height: "34px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}10`,
                          color: data.colors.primary,
                          transition: "all 0.2s ease",
                          border: `1px solid ${data.colors.primary}15`
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
                          width: "34px",
                          height: "34px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}10`,
                          color: data.colors.primary,
                          transition: "all 0.2s ease",
                          border: `1px solid ${data.colors.primary}15`
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
                          width: "34px",
                          height: "34px",
                          borderRadius: "8px",
                          backgroundColor: `${data.colors.primary}10`,
                          color: data.colors.primary,
                          transition: "all 0.2s ease",
                          border: `1px solid ${data.colors.primary}15`
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
                        padding: "9px 16px",
                        borderRadius: "10px",
                        background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`,
                        color: "#fff",
                        fontSize: "13px",
                        textDecoration: "none",
                        fontWeight: "600",
                        letterSpacing: "0.01em",
                        boxShadow: `0 4px 12px ${data.colors.primary}40`
                      }}
                    >
                      <Calendar size={14} style={{ marginRight: "8px", flexShrink: 0 }} />
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
