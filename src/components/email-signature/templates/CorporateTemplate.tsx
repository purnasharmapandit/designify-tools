
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Linkedin, Twitter, Instagram, Facebook, Calendar, Phone, Mail, Globe, MapPin } from "lucide-react";

interface CorporateTemplateProps {
  data: SignatureData;
}

const CorporateTemplate: React.FC<CorporateTemplateProps> = ({ data }) => {
  const getFontStyle = () => {
    switch (data.font) {
      case "Arial":
      case "Helvetica":
        return "font-sans";
      case "Georgia":
      case "Times New Roman":
        return "font-serif";
      case "Verdana":
      case "Tahoma":
        return "font-sans";
      default:
        return "font-sans";
    }
  };

  return (
    <div 
      className={`max-w-xl ${getFontStyle()}`}
      style={{
        color: data.colors.text,
        fontFamily: data.font || "Arial, sans-serif",
      }}
    >
      <table 
        cellPadding="0" 
        cellSpacing="0" 
        style={{ 
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          {/* Header with company name */}
          <tr>
            <td style={{ 
              padding: "10px 20px", 
              backgroundColor: data.colors.primary,
              color: "#fff",
              borderRadius: "4px 4px 0 0",
            }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "flex-end", 
                alignItems: "center" 
              }}>
                <h2 style={{ 
                  margin: 0, 
                  fontSize: "18px", 
                  fontWeight: "bold" 
                }}>
                  {data.company || "Company Name"}
                </h2>
              </div>
            </td>
          </tr>
          
          {/* Main content */}
          <tr>
            <td style={{ padding: "20px", border: "1px solid #eee", borderTop: "none" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  {/* Photo and Name Section */}
                  <td style={{ verticalAlign: "top" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
                          {data.photoUrl && (
                            <img 
                              src={data.photoUrl} 
                              alt={data.name || "Photo"} 
                              style={{ 
                                width: "70px", 
                                height: "70px", 
                                borderRadius: "50%",
                                objectFit: "cover",
                              }} 
                            />
                          )}
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <h3 style={{ 
                            margin: "0 0 5px 0", 
                            fontSize: "20px", 
                            fontWeight: "bold",
                            color: data.colors.primary, 
                          }}>
                            {data.name || "Your Name"}
                          </h3>
                          
                          {data.jobTitle && (
                            <p style={{ 
                              margin: "0 0 10px 0", 
                              fontSize: "14px",
                              color: data.colors.text,
                            }}>
                              {data.jobTitle}
                              {data.department && <span> | {data.department}</span>}
                            </p>
                          )}
                          
                          {/* Contact Information */}
                          <table cellPadding="0" cellSpacing="0">
                            {data.phone && (
                              <tr>
                                <td style={{ 
                                  verticalAlign: "middle", 
                                  paddingRight: "5px", 
                                  paddingBottom: "5px",
                                  color: data.colors.primary
                                }}>
                                  <Phone size={14} />
                                </td>
                                <td style={{ verticalAlign: "middle", paddingBottom: "5px" }}>
                                  <a 
                                    href={`tel:${data.phone}`} 
                                    style={{ 
                                      color: data.colors.text,
                                      textDecoration: "none",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {data.phone}
                                  </a>
                                </td>
                              </tr>
                            )}
                            
                            {data.email && (
                              <tr>
                                <td style={{ 
                                  verticalAlign: "middle", 
                                  paddingRight: "5px", 
                                  paddingBottom: "5px",
                                  color: data.colors.primary
                                }}>
                                  <Mail size={14} />
                                </td>
                                <td style={{ verticalAlign: "middle", paddingBottom: "5px" }}>
                                  <a 
                                    href={`mailto:${data.email}`} 
                                    style={{ 
                                      color: data.colors.text,
                                      textDecoration: "none",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {data.email}
                                  </a>
                                </td>
                              </tr>
                            )}
                            
                            {data.website && (
                              <tr>
                                <td style={{ 
                                  verticalAlign: "middle", 
                                  paddingRight: "5px", 
                                  paddingBottom: "5px",
                                  color: data.colors.primary
                                }}>
                                  <Globe size={14} />
                                </td>
                                <td style={{ verticalAlign: "middle", paddingBottom: "5px" }}>
                                  <a 
                                    href={data.website.startsWith('http') ? data.website : `https://${data.website}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ 
                                      color: data.colors.text,
                                      textDecoration: "none",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {data.website.replace(/^https?:\/\//i, '')}
                                  </a>
                                </td>
                              </tr>
                            )}
                          </table>
                          
                          {/* Schedule Meeting Button */}
                          {data.meetingLink && (
                            <div style={{ marginTop: "10px" }}>
                              <a 
                                href={data.meetingLink}
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                  display: "inline-flex",
                                  alignItems: "center",
                                  backgroundColor: data.colors.primary,
                                  color: "#fff",
                                  textDecoration: "none",
                                  padding: "6px 12px",
                                  borderRadius: "4px",
                                  fontSize: "13px",
                                }}
                              >
                                <Calendar size={14} style={{ marginRight: "5px" }} />
                                Schedule a meeting
                              </a>
                            </div>
                          )}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              {/* Divider */}
              <div style={{ 
                borderTop: `1px solid #eee`,
                margin: "15px 0",
              }}></div>
              
              {/* Social Media Links */}
              <div style={{ display: "flex", gap: "10px" }}>
                {data.socialLinks.twitter && (
                  <a 
                    href={data.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: data.colors.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: data.colors.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: data.colors.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      textDecoration: "none"
                    }}
                  >
                    <Facebook size={16} />
                  </a>
                )}
                
                {data.socialLinks.linkedin && (
                  <a 
                    href={data.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: data.colors.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      textDecoration: "none"
                    }}
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CorporateTemplate;
