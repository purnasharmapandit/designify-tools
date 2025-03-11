
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Linkedin, Twitter, Instagram, Facebook, Calendar, Phone, Mail, Globe, MapPin } from "lucide-react";

interface ModernTemplateProps {
  data: SignatureData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
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
          borderSpacing: "0px",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td style={{ 
              padding: "20px",
              backgroundColor: data.colors.primary,
              borderRadius: "8px 0 0 8px",
              width: "120px",
              verticalAlign: "top",
              textAlign: "center"
            }}>
              {data.photoUrl && (
                <img 
                  src={data.photoUrl} 
                  alt={data.name || "Profile"} 
                  style={{ 
                    width: "80px", 
                    height: "80px", 
                    borderRadius: "50%",
                    border: "3px solid white",
                    objectFit: "cover",
                    margin: "0 auto 10px auto"
                  }} 
                />
              )}
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "15px",
              }}>
                {data.socialLinks.linkedin && (
                  <a 
                    href={data.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: "white",
                      textDecoration: "none",
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
                      color: "white",
                      textDecoration: "none",
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
                      color: "white",
                      textDecoration: "none",
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
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Facebook size={16} />
                  </a>
                )}
              </div>
            </td>
            <td style={{ 
              padding: "20px",
              backgroundColor: data.colors.secondary,
              borderRadius: "0 8px 8px 0",
              verticalAlign: "top"
            }}>
              <h3 style={{ 
                margin: "0 0 4px 0", 
                fontSize: "20px", 
                fontWeight: "bold",
                color: data.colors.primary, 
              }}>
                {data.name || "Your Name"}
              </h3>
              
              {data.jobTitle && (
                <p style={{ 
                  margin: "0 0 15px 0", 
                  fontSize: "14px",
                  color: data.colors.text, 
                }}>
                  {data.jobTitle}
                  {data.credentials && ` ${data.credentials}`}
                  {data.department && ` | ${data.department}`}
                </p>
              )}
              
              {data.company && (
                <div style={{ 
                  margin: "0 0 15px 0", 
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: data.colors.primary, 
                  display: "flex",
                  alignItems: "center"
                }}>
                  {data.companyLogoUrl ? (
                    <img 
                      src={data.companyLogoUrl} 
                      alt={data.company} 
                      style={{ 
                        height: "20px", 
                        marginRight: "8px",
                        verticalAlign: "middle"
                      }} 
                    />
                  ) : null}
                  {data.company}
                </div>
              )}
              
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%", fontSize: "13px" }}>
                <tr>
                  <td style={{ paddingBottom: "6px" }}>
                    {data.phone && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Phone 
                          size={14} 
                          color={data.colors.primary} 
                          style={{ marginRight: "8px" }} 
                        />
                        <a 
                          href={`tel:${data.phone}`} 
                          style={{ 
                            color: data.colors.text,
                            textDecoration: "none",
                          }}
                        >
                          {data.phone}
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "6px" }}>
                    {data.email && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Mail 
                          size={14} 
                          color={data.colors.primary} 
                          style={{ marginRight: "8px" }} 
                        />
                        <a 
                          href={`mailto:${data.email}`} 
                          style={{ 
                            color: data.colors.text,
                            textDecoration: "none",
                          }}
                        >
                          {data.email}
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "6px" }}>
                    {data.website && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Globe 
                          size={14} 
                          color={data.colors.primary} 
                          style={{ marginRight: "8px" }} 
                        />
                        <a 
                          href={data.website.startsWith('http') ? data.website : `https://${data.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            color: data.colors.text,
                            textDecoration: "none",
                          }}
                        >
                          {data.website.replace(/^https?:\/\//i, '')}
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    {data.address && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MapPin 
                          size={14} 
                          color={data.colors.primary} 
                          style={{ marginRight: "8px" }} 
                        />
                        <span>{data.address}</span>
                      </div>
                    )}
                  </td>
                </tr>
                {data.meetingLink && (
                  <tr>
                    <td style={{ paddingTop: "12px" }}>
                      <a 
                        href={data.meetingLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          display: "inline-block",
                          padding: "6px 12px",
                          backgroundColor: data.colors.primary,
                          color: "#ffffff",
                          textDecoration: "none",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        <Calendar size={12} style={{ marginRight: "4px", display: "inline" }} />
                        Schedule a Meeting
                      </a>
                    </td>
                  </tr>
                )}
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModernTemplate;
