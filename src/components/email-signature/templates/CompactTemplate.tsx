
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
      lineHeight: "1.4",
      backgroundColor: "#fff",
      padding: "10px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
    }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ paddingRight: "12px", verticalAlign: "top", width: "60px" }}>
              {data.photoUrl && (
                <img 
                  src={data.photoUrl} 
                  alt={data.name}
                  style={{ 
                    width: "55px",
                    height: "55px",
                    borderRadius: "4px",
                    objectFit: "cover",
                    border: `1px solid ${data.colors.primary}20`
                  }}
                />
              )}
            </td>
            <td>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <div style={{ marginBottom: "5px" }}>
                        <strong style={{ 
                          color: data.colors.primary,
                          fontSize: "15px",
                          display: "block",
                          fontWeight: "600",
                          marginBottom: "1px"
                        }}>{data.name}</strong>
                        
                        <div style={{ 
                          fontSize: "12px",
                          color: data.colors.secondary,
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <span>{data.jobTitle}</span>
                          {data.department && (
                            <>
                              <span style={{ 
                                margin: "0 5px", 
                                fontSize: "10px", 
                                color: data.colors.secondary 
                              }}>•</span>
                              <span style={{ opacity: "0.8" }}>{data.department}</span>
                            </>
                          )}
                        </div>
                        
                        <div style={{ 
                          fontSize: "12px",
                          color: data.colors.text,
                          display: "block",
                          marginTop: "1px"
                        }}>
                          {data.company}
                          {data.companyLogoUrl && (
                            <img 
                              src={data.companyLogoUrl} 
                              alt={data.company}
                              style={{ 
                                height: "14px",
                                verticalAlign: "middle",
                                marginLeft: "5px"
                              }}
                            />
                          )}
                        </div>
                      </div>
                      
                      <div style={{ fontSize: "11px" }}>
                        {data.email && (
                          <a href={`mailto:${data.email}`} style={{ 
                            display: "block",
                            color: data.colors.text,
                            textDecoration: "none",
                            marginBottom: "2px"
                          }}>
                            <Mail size={10} style={{ verticalAlign: "middle", marginRight: "4px", color: data.colors.primary }} />
                            <span style={{ verticalAlign: "middle" }}>{data.email}</span>
                          </a>
                        )}
                        {data.phone && (
                          <a href={`tel:${data.phone}`} style={{ 
                            display: "block",
                            color: data.colors.text,
                            textDecoration: "none",
                            marginBottom: "2px"
                          }}>
                            <Phone size={10} style={{ verticalAlign: "middle", marginRight: "4px", color: data.colors.primary }} />
                            <span style={{ verticalAlign: "middle" }}>{data.phone}</span>
                          </a>
                        )}
                        {data.website && (
                          <a href={data.website.startsWith('http') ? data.website : `https://${data.website}`} style={{ 
                            display: "block",
                            color: data.colors.text,
                            textDecoration: "none",
                            marginBottom: "2px"
                          }}>
                            <Globe size={10} style={{ verticalAlign: "middle", marginRight: "4px", color: data.colors.primary }} />
                            <span style={{ vert

icalAlign: "middle" }}>{data.website.replace(/^https?:\/\//i, '')}</span>
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {(data.socialLinks.linkedin || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.facebook || data.meetingLink) && (
            <tr>
              <td colSpan={2} style={{ paddingTop: "8px", borderTop: `1px solid ${data.colors.secondary}15` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
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
                        <Linkedin size={12} />
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
                        <Twitter size={12} />
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
                        <Instagram size={12} />
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
                        <Facebook size={12} />
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
                        fontSize: "10px",
                        color: data.colors.primary,
                        textDecoration: "none",
                        padding: "3px 8px",
                        borderRadius: "3px",
                        border: `1px solid ${data.colors.primary}30`,
                        transition: "all 0.2s"
                      }}
                    >
                      <Calendar size={10} style={{ marginRight: "3px" }} />
                      Schedule
                    </a>
                  )}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompactTemplate;
