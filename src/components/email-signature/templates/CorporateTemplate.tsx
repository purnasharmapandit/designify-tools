
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
          <tr>
            <td style={{ padding: "0" }}>
              {/* Header with company logo and name */}
              <table 
                cellPadding="0" 
                cellSpacing="0" 
                style={{ 
                  width: "100%",
                  backgroundColor: data.colors.primary,
                  borderRadius: "4px 4px 0 0",
                  padding: "12px 20px",
                }}
              >
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    {data.companyLogoUrl && (
                      <img 
                        src={data.companyLogoUrl} 
                        alt={data.company || "Company"} 
                        style={{ 
                          height: "30px", 
                          maxWidth: "140px",
                          margin: "0",
                        }} 
                      />
                    )}
                  </td>
                  <td style={{ textAlign: "right", verticalAlign: "middle" }}>
                    {data.company && (
                      <h3 style={{ 
                        color: "#fff", 
                        margin: "0",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}>
                        {data.company}
                      </h3>
                    )}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "20px", borderLeft: `1px solid ${data.colors.secondary}`, borderRight: `1px solid ${data.colors.secondary}`, borderBottom: `1px solid ${data.colors.secondary}` }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    {data.photoUrl && (
                      <img 
                        src={data.photoUrl} 
                        alt={data.name || "Photo"} 
                        style={{ 
                          width: "80px", 
                          height: "80px", 
                          borderRadius: "50%",
                          border: `3px solid ${data.colors.secondary}`,
                          marginRight: "15px",
                          objectFit: "cover",
                        }} 
                      />
                    )}
                  </td>
                  <td style={{ verticalAlign: "top" }}>
                    <h3 style={{ 
                      margin: "0 0 5px 0", 
                      fontSize: "18px", 
                      fontWeight: "bold",
                      color: data.colors.primary, 
                    }}>
                      {data.name || "Your Name"} 
                      {data.credentials && <span style={{ fontSize: "14px", fontWeight: "normal" }}>, {data.credentials}</span>}
                    </h3>
                    
                    {data.jobTitle && (
                      <p style={{ 
                        margin: "0 0 3px 0", 
                        fontSize: "14px",
                        fontWeight: "500",
                      }}>
                        {data.jobTitle}
                        {data.department && <span> | {data.department}</span>}
                      </p>
                    )}
                    
                    <table cellPadding="0" cellSpacing="0" style={{ marginTop: "12px" }}>
                      <tr>
                        <td style={{ paddingBottom: "8px" }}>
                          {data.phone && (
                            <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                              <Phone 
                                size={14} 
                                color={data.colors.primary} 
                                style={{ marginRight: "6px" }} 
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
                        <td style={{ paddingLeft: "15px", paddingBottom: "8px" }}>
                          {data.email && (
                            <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                              <Mail 
                                size={14} 
                                color={data.colors.primary} 
                                style={{ marginRight: "6px" }} 
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
                        <td style={{ paddingBottom: "8px" }}>
                          {data.website && (
                            <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                              <Globe 
                                size={14} 
                                color={data.colors.primary} 
                                style={{ marginRight: "6px" }} 
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
                        <td style={{ paddingLeft: "15px", paddingBottom: "8px" }}>
                          {data.address && (
                            <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                              <MapPin 
                                size={14} 
                                color={data.colors.primary} 
                                style={{ marginRight: "6px" }} 
                              />
                              <span>{data.address}</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    </table>
                    
                    {data.meetingLink && (
                      <a 
                        href={data.meetingLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          display: "inline-block",
                          backgroundColor: data.colors.primary,
                          color: "#fff",
                          textDecoration: "none",
                          padding: "6px 12px",
                          borderRadius: "4px",
                          fontSize: "13px",
                          marginTop: "10px",
                        }}
                      >
                        <Calendar size={14} style={{ marginRight: "5px", verticalAlign: "text-bottom" }} />
                        Schedule a meeting
                      </a>
                    )}
                  </td>
                </tr>
              </table>
              
              {/* Social media */}
              <table cellPadding="0" cellSpacing="0" style={{ marginTop: "15px", width: "100%" }}>
                <tr>
                  <td>
                    <div style={{ borderTop: `1px solid ${data.colors.secondary}`, paddingTop: "10px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        {data.socialLinks.linkedin && (
                          <a 
                            href={data.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              backgroundColor: data.colors.primary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              textDecoration: "none"
                            }}
                          >
                            <Linkedin size={14} />
                          </a>
                        )}
                        {data.socialLinks.twitter && (
                          <a 
                            href={data.socialLinks.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              backgroundColor: data.colors.primary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              textDecoration: "none"
                            }}
                          >
                            <Twitter size={14} />
                          </a>
                        )}
                        {data.socialLinks.instagram && (
                          <a 
                            href={data.socialLinks.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              backgroundColor: data.colors.primary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              textDecoration: "none"
                            }}
                          >
                            <Instagram size={14} />
                          </a>
                        )}
                        {data.socialLinks.facebook && (
                          <a 
                            href={data.socialLinks.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              backgroundColor: data.colors.primary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              textDecoration: "none"
                            }}
                          >
                            <Facebook size={14} />
                          </a>
                        )}
                      </div>
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

export default CorporateTemplate;
