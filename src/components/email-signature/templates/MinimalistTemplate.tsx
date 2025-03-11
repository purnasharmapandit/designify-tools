
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Linkedin, Twitter, Instagram, Facebook, Calendar, Phone, Mail, Globe, MapPin } from "lucide-react";

interface MinimalistTemplateProps {
  data: SignatureData;
}

const MinimalistTemplate: React.FC<MinimalistTemplateProps> = ({ data }) => {
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
            <td style={{ padding: "0" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td>
                    <h3 style={{ 
                      margin: "0 0 5px 0", 
                      fontSize: "16px", 
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}>
                      {data.name || "Your Name"}
                      {data.credentials && <span style={{ fontSize: "13px", opacity: "0.8" }}> {data.credentials}</span>}
                    </h3>
                    
                    {data.jobTitle && (
                      <p style={{ 
                        margin: "0 0 15px 0", 
                        fontSize: "13px",
                        letterSpacing: "0.25px",
                        color: data.colors.primary,
                      }}>
                        {data.jobTitle}
                        {data.department && <span style={{ opacity: "0.8" }}> · {data.department}</span>}
                        {data.company && <span style={{ opacity: "0.8" }}> · {data.company}</span>}
                      </p>
                    )}
                  </td>
                </tr>
              </table>
              
              <div style={{ 
                width: "100%", 
                height: "1px", 
                backgroundColor: data.colors.secondary,
                margin: "8px 0",
              }}></div>
              
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%", marginTop: "8px" }}>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td style={{ paddingRight: "15px", paddingBottom: "3px" }}>
                          {data.phone && (
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <a 
                                href={`tel:${data.phone}`} 
                                style={{ 
                                  color: data.colors.text,
                                  textDecoration: "none",
                                  fontSize: "13px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Phone 
                                  size={12} 
                                  style={{ 
                                    marginRight: "5px",
                                    color: data.colors.primary,
                                  }} 
                                />
                                {data.phone}
                              </a>
                            </div>
                          )}
                        </td>
                        <td style={{ paddingBottom: "3px" }}>
                          {data.email && (
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <a 
                                href={`mailto:${data.email}`} 
                                style={{ 
                                  color: data.colors.text,
                                  textDecoration: "none",
                                  fontSize: "13px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Mail 
                                  size={12} 
                                  style={{ 
                                    marginRight: "5px",
                                    color: data.colors.primary,
                                  }} 
                                />
                                {data.email}
                              </a>
                            </div>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingRight: "15px", paddingBottom: "3px" }}>
                          {data.website && (
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <a 
                                href={data.website.startsWith('http') ? data.website : `https://${data.website}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                  color: data.colors.text,
                                  textDecoration: "none",
                                  fontSize: "13px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Globe 
                                  size={12} 
                                  style={{ 
                                    marginRight: "5px",
                                    color: data.colors.primary,
                                  }} 
                                />
                                {data.website.replace(/^https?:\/\//i, '')}
                              </a>
                            </div>
                          )}
                        </td>
                        <td style={{ paddingBottom: "3px" }}>
                          {data.address && (
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <span style={{ 
                                color: data.colors.text,
                                fontSize: "13px",
                                display: "flex",
                                alignItems: "center",
                              }}>
                                <MapPin 
                                  size={12} 
                                  style={{ 
                                    marginRight: "5px",
                                    color: data.colors.primary,
                                  }} 
                                />
                                {data.address}
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                    </table>
                    
                    {data.meetingLink && (
                      <div style={{ marginTop: "8px" }}>
                        <a 
                          href={data.meetingLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            color: data.colors.primary,
                            textDecoration: "none",
                            fontSize: "13px",
                            border: `1px solid ${data.colors.primary}`,
                            borderRadius: "3px",
                            padding: "3px 8px",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <Calendar size={12} style={{ marginRight: "4px" }} />
                          Schedule a meeting
                        </a>
                      </div>
                    )}
                    
                    {/* Social Icons */}
                    <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
                      {data.socialLinks.linkedin && (
                        <a 
                          href={data.socialLinks.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: data.colors.primary, textDecoration: "none" }}
                        >
                          <Linkedin size={14} />
                        </a>
                      )}
                      {data.socialLinks.twitter && (
                        <a 
                          href={data.socialLinks.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: data.colors.primary, textDecoration: "none" }}
                        >
                          <Twitter size={14} />
                        </a>
                      )}
                      {data.socialLinks.instagram && (
                        <a 
                          href={data.socialLinks.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: data.colors.primary, textDecoration: "none" }}
                        >
                          <Instagram size={14} />
                        </a>
                      )}
                      {data.socialLinks.facebook && (
                        <a 
                          href={data.socialLinks.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: data.colors.primary, textDecoration: "none" }}
                        >
                          <Facebook size={14} />
                        </a>
                      )}
                    </div>
                  </td>
                  
                  {/* Company Logo */}
                  {data.companyLogoUrl && (
                    <td style={{ 
                      textAlign: "right", 
                      verticalAlign: "top",
                      width: "120px",
                    }}>
                      <img 
                        src={data.companyLogoUrl} 
                        alt={data.company || "Company"} 
                        style={{ 
                          maxWidth: "100px",
                          maxHeight: "50px",
                        }} 
                      />
                    </td>
                  )}
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MinimalistTemplate;
