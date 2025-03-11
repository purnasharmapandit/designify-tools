
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
      background: `linear-gradient(135deg, ${data.colors.primary}08 0%, transparent 100%)`,
      borderRadius: "8px",
      overflow: "hidden"
    }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ padding: "24px" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td style={{ paddingRight: "24px", verticalAlign: "top" }}>
                    {data.photoUrl && (
                      <div style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: `2px solid ${data.colors.primary}`,
                        boxShadow: `0 4px 12px ${data.colors.primary}20`
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
                  </td>
                  <td style={{ verticalAlign: "top" }}>
                    <div style={{ 
                      fontSize: "26px",
                      fontWeight: "700",
                      color: data.colors.primary,
                      marginBottom: "4px",
                      letterSpacing: "-0.02em"
                    }}>
                      {data.name}
                      {data.credentials && (
                        <span style={{ 
                          fontSize: "14px",
                          color: data.colors.text,
                          fontWeight: "400",
                          marginLeft: "8px"
                        }}>
                          {data.credentials}
                        </span>
                      )}
                    </div>
                    
                    <div style={{ 
                      fontSize: "16px",
                      fontWeight: "600",
                      color: data.colors.secondary,
                      marginBottom: "2px"
                    }}>
                      {data.jobTitle}
                      {data.department && (
                        <span style={{ 
                          fontWeight: "400",
                          color: data.colors.text,
                          opacity: "0.8",
                          fontSize: "14px"
                        }}> • {data.department}</span>
                      )}
                    </div>
                    
                    <div style={{ 
                      fontSize: "15px",
                      marginBottom: "16px",
                      color: data.colors.text
                    }}>
                      {data.company}
                    </div>
                    
                    <div style={{ marginBottom: "16px" }}>
                      <table cellPadding="0" cellSpacing="0">
                        <tbody>
                          {data.email && (
                            <tr>
                              <td style={{ paddingBottom: "6px" }}>
                                <a href={`mailto:${data.email}`} style={{ 
                                  display: "flex",
                                  alignItems: "center",
                                  color: data.colors.text,
                                  textDecoration: "none",
                                  fontSize: "14px"
                                }}>
                                  <Mail size={16} style={{ marginRight: "8px", color: data.colors.primary }} />
                                  {data.email}
                                </a>
                              </td>
                            </tr>
                          )}
                          {data.phone && (
                            <tr>
                              <td style={{ paddingBottom: "6px" }}>
                                <a href={`tel:${data.phone}`} style={{ 
                                  display: "flex",
                                  alignItems: "center",
                                  color: data.colors.text,
                                  textDecoration: "none",
                                  fontSize: "14px"
                                }}>
                                  <Phone size={16} style={{ marginRight: "8px", color: data.colors.primary }} />
                                  {data.phone}
                                </a>
                              </td>
                            </tr>
                          )}
                          {data.website && (
                            <tr>
                              <td style={{ paddingBottom: "6px" }}>
                                <a href={data.website.startsWith('http') ? data.website : `https://${data.website}`} style={{ 
                                  display: "flex",
                                  alignItems: "center",
                                  color: data.colors.text,
                                  textDecoration: "none",
                                  fontSize: "14px"
                                }}>
                                  <Globe size={16} style={{ marginRight: "8px", color: data.colors.primary }} />
                                  {data.website.replace(/^https?:\/\//i, '')}
                                </a>
                              </td>
                            </tr>
                          )}
                          {data.address && (
                            <tr>
                              <td>
                                <div style={{ 
                                  display: "flex",
                                  alignItems: "center",
                                  color: data.colors.text,
                                  fontSize: "14px"
                                }}>
                                  <MapPin size={16} style={{ marginRight: "8px", color: data.colors.primary }} />
                                  {data.address}
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ display: "flex", gap: "12px" }}>
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
                              backgroundColor: data.colors.primary,
                              color: "#fff",
                              textDecoration: "none"
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
                              backgroundColor: data.colors.primary,
                              color: "#fff",
                              textDecoration: "none"
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
                              backgroundColor: data.colors.primary,
                              color: "#fff",
                              textDecoration: "none"
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
                              backgroundColor: data.colors.primary,
                              color: "#fff",
                              textDecoration: "none"
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
                            backgroundColor: "#fff",
                            border: `2px solid ${data.colors.primary}`,
                            color: data.colors.primary,
                            fontSize: "14px",
                            fontWeight: "600",
                            textDecoration: "none"
                          }}
                        >
                          <Calendar size={16} style={{ marginRight: "6px" }} />
                          Schedule a Meeting
                        </a>
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
