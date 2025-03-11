
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram, Facebook, Calendar } from "lucide-react";

interface ElegantTemplateProps {
  data: SignatureData;
}

const ElegantTemplate: React.FC<ElegantTemplateProps> = ({ data }) => {
  return (
    <div style={{ 
      maxWidth: "600px",
      fontFamily: data.font || "Georgia, serif",
      color: data.colors.text,
      padding: "20px",
      borderLeft: `2px solid ${data.colors.primary}`
    }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ paddingBottom: "15px", verticalAlign: "top" }}>
              {data.photoUrl && (
                <img 
                  src={data.photoUrl} 
                  alt={data.name}
                  style={{ 
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: `1px solid ${data.colors.primary}25`,
                    marginRight: "20px",
                    float: "left",
                    objectFit: "cover",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.08)"
                  }}
                />
              )}
              <div>
                <h2 style={{ 
                  margin: "0 0 5px 0",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: data.colors.primary,
                  letterSpacing: "0.5px"
                }}>{data.name} {data.credentials && <span style={{ fontSize: "14px", color: data.colors.text, fontWeight: "300" }}>{data.credentials}</span>}</h2>
                <p style={{ 
                  margin: "0 0 5px 0",
                  fontSize: "15px",
                  fontStyle: "italic",
                  color: data.colors.secondary
                }}>{data.jobTitle}{data.department && <span style={{ fontWeight: "300" }}> • {data.department}</span>}</p>
                <p style={{ 
                  margin: "0",
                  fontSize: "15px",
                  letterSpacing: "0.3px"
                }}>{data.company}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ borderTop: `1px solid ${data.colors.secondary}20`, paddingTop: "15px" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "top", paddingRight: "20px" }}>
                      {data.email && (
                        <a href={`mailto:${data.email}`} style={{ 
                          display: "block", 
                          marginBottom: "8px",
                          color: data.colors.text,
                          textDecoration: "none",
                          fontSize: "14px"
                        }}>
                          <Mail size={14} style={{ verticalAlign: "middle", marginRight: "8px", color: data.colors.primary }} />
                          <span style={{ verticalAlign: "middle" }}>{data.email}</span>
                        </a>
                      )}
                      {data.phone && (
                        <a href={`tel:${data.phone}`} style={{ 
                          display: "block", 
                          marginBottom: "8px",
                          color: data.colors.text,
                          textDecoration: "none",
                          fontSize: "14px"
                        }}>
                          <Phone size={14} style={{ verticalAlign: "middle", marginRight: "8px", color: data.colors.primary }} />
                          <span style={{ verticalAlign: "middle" }}>{data.phone}</span>
                        </a>
                      )}
                    </td>
                    <td style={{ verticalAlign: "top" }}>
                      {data.website && (
                        <a href={data.website.startsWith('http') ? data.website : `https://${data.website}`} style={{ 
                          display: "block", 
                          marginBottom: "8px",
                          color: data.colors.text,
                          textDecoration: "none",
                          fontSize: "14px"
                        }}>
                          <Globe size={14} style={{ verticalAlign: "middle", marginRight: "8px", color: data.colors.primary }} />
                          <span style={{ verticalAlign: "middle" }}>{data.website.replace(/^https?:\/\//i, '')}</span>
                        </a>
                      )}
                      {data.address && (
                        <div style={{ 
                          display: "block", 
                          marginBottom: "8px",
                          color: data.colors.text,
                          fontSize: "14px"
                        }}>
                          <MapPin size={14} style={{ verticalAlign: "middle", marginRight: "8px", color: data.colors.primary }} />
                          <span style={{ verticalAlign: "middle" }}>{data.address}</span>
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {(data.socialLinks.linkedin || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.facebook || data.meetingLink) && (
            <tr>
              <td style={{ paddingTop: "15px", borderTop: `1px solid ${data.colors.secondary}20` }}>
                <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>
                        {data.companyLogoUrl && (
                          <img 
                            src={data.companyLogoUrl} 
                            alt={data.company} 
                            style={{ 
                              height: "28px",
                              marginBottom: "12px"
                            }}
                          />
                        )}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {data.socialLinks.linkedin && (
                          <a 
                            href={data.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-block",
                              margin: "0 6px",
                              color: data.colors.primary,
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
                              display: "inline-block",
                              margin: "0 6px",
                              color: data.colors.primary,
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
                              display: "inline-block",
                              margin: "0 6px",
                              color: data.colors.primary,
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
                              display: "inline-block",
                              margin: "0 6px",
                              color: data.colors.primary,
                              textDecoration: "none"
                            }}
                          >
                            <Facebook size={16} />
                          </a>
                        )}
                        {data.meetingLink && (
                          <a 
                            href={data.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-block",
                              marginLeft: "8px",
                              color: "#fff",
                              backgroundColor: data.colors.primary,
                              borderRadius: "12px",
                              padding: "4px 10px",
                              fontSize: "12px",
                              textDecoration: "none"
                            }}
                          >
                            <Calendar size={12} style={{ verticalAlign: "middle", marginRight: "4px" }} />
                            <span style={{ verticalAlign: "middle" }}>Schedule a meeting</span>
                          </a>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ElegantTemplate;
