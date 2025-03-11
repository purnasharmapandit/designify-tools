
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Linkedin, Twitter, Instagram, Facebook, Calendar, Phone, Mail, Globe, MapPin } from "lucide-react";

interface ProfessionalTemplateProps {
  data: SignatureData;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data }) => {
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
            <td style={{ paddingRight: "20px", verticalAlign: "top", width: "80px" }}>
              {data.photoUrl && (
                <img 
                  src={data.photoUrl} 
                  alt={data.name || "Profile"} 
                  style={{ 
                    width: "80px", 
                    height: "80px", 
                    borderRadius: "8px", /* Square with slightly rounded corners */
                    border: `2px solid ${data.colors.primary}`,
                    objectFit: "cover" 
                  }} 
                />
              )}
            </td>
            <td style={{ verticalAlign: "top" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td>
                    <h3 style={{ 
                      margin: "0 0 5px 0", 
                      fontSize: "18px", 
                      fontWeight: "bold",
                      color: data.colors.primary, 
                    }}>
                      {data.name || "Your Name"}{data.credentials && `, ${data.credentials}`}
                    </h3>
                    {data.jobTitle && (
                      <p style={{ 
                        margin: "0 0 5px 0", 
                        fontSize: "14px",
                        color: data.colors.text, 
                      }}>
                        {data.jobTitle}
                        {data.department && ` | ${data.department}`}
                      </p>
                    )}
                    {data.company && (
                      <div style={{ 
                        margin: "0 0 10px 0", 
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: data.colors.primary, 
                      }}>
                        {data.companyLogoUrl ? (
                          <img 
                            src={data.companyLogoUrl} 
                            alt={data.company} 
                            style={{ 
                              height: "25px", 
                              marginRight: "5px",
                              verticalAlign: "middle"
                            }} 
                          />
                        ) : null}
                        {data.company}
                      </div>
                    )}
                    
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tr>
                        <td style={{ fontSize: "13px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            {data.phone && (
                              <span style={{ display: "flex", alignItems: "center" }}>
                                <Phone 
                                  size={14} 
                                  color={data.colors.primary} 
                                  style={{ marginRight: "5px" }} 
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
                              </span>
                            )}
                            {data.email && (
                              <span style={{ display: "flex", alignItems: "center" }}>
                                <Mail 
                                  size={14} 
                                  color={data.colors.primary} 
                                  style={{ marginRight: "5px" }} 
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
                              </span>
                            )}
                            {data.website && (
                              <span style={{ display: "flex", alignItems: "center" }}>
                                <Globe 
                                  size={14} 
                                  color={data.colors.primary} 
                                  style={{ marginRight: "5px" }} 
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
                              </span>
                            )}
                            {data.address && (
                              <span style={{ display: "flex", alignItems: "center" }}>
                                <MapPin 
                                  size={14} 
                                  color={data.colors.primary} 
                                  style={{ marginRight: "5px" }} 
                                />
                                <span>{data.address}</span>
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          {(data.socialLinks.linkedin || data.socialLinks.twitter || 
           data.socialLinks.instagram || data.socialLinks.facebook || 
           data.meetingLink) && (
            <tr>
              <td colSpan={2} style={{ 
                paddingTop: "10px", 
                borderTop: `1px solid ${data.colors.secondary}`,
                marginTop: "10px" 
              }}>
                <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <div style={{ 
                        display: "flex", 
                        gap: "10px",
                        justifyContent: "flex-start" 
                      }}>
                        {data.socialLinks.linkedin && (
                          <a 
                            href={data.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              color: data.colors.primary,
                              textDecoration: "none",
                              width: "24px",
                              height: "24px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: data.colors.secondary,
                              borderRadius: "50%",
                              padding: "5px"
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
                              color: data.colors.primary,
                              textDecoration: "none",
                              width: "24px",
                              height: "24px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: data.colors.secondary,
                              borderRadius: "50%",
                              padding: "5px"
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
                              color: data.colors.primary,
                              textDecoration: "none",
                              width: "24px",
                              height: "24px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: data.colors.secondary,
                              borderRadius: "50%",
                              padding: "5px"
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
                              color: data.colors.primary,
                              textDecoration: "none",
                              width: "24px",
                              height: "24px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: data.colors.secondary,
                              borderRadius: "50%",
                              padding: "5px"
                            }}
                          >
                            <Facebook size={16} />
                          </a>
                        )}
                      </div>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {data.meetingLink && (
                        <a 
                          href={data.meetingLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            display: "inline-flex",
                            alignItems: "center",
                            backgroundColor: data.colors.primary,
                            color: "#fff",
                            padding: "6px 12px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            textDecoration: "none",
                            fontWeight: "bold"
                          }}
                        >
                          <Calendar size={14} style={{ marginRight: "5px" }} />
                          Schedule a Meeting
                        </a>
                      )}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessionalTemplate;
