
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Linkedin, Twitter, Instagram, Facebook, Calendar, Phone, Mail, Globe, MapPin } from "lucide-react";

interface MinimalTemplateProps {
  data: SignatureData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
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
            <td 
              style={{ 
                paddingBottom: "10px", 
                borderBottom: `1px solid ${data.colors.secondary}`,
                verticalAlign: "top",
              }}
            >
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td style={{ paddingRight: "15px" }}>
                    <h3 style={{ 
                      margin: "0 0 2px 0", 
                      fontSize: "16px", 
                      fontWeight: "bold",
                      color: data.colors.primary, 
                    }}>
                      {data.name || "Your Name"}
                    </h3>
                    {data.jobTitle && (
                      <p style={{ 
                        margin: "0 0 2px 0", 
                        fontSize: "14px",
                        color: data.colors.text, 
                      }}>
                        {data.jobTitle}
                        {data.department && `, ${data.department}`}
                      </p>
                    )}
                    {data.company && (
                      <p style={{ 
                        margin: "0", 
                        fontSize: "14px",
                        color: data.colors.text, 
                      }}>
                        {data.company}
                      </p>
                    )}
                  </td>
                  {data.photoUrl && (
                    <td style={{ width: "60px", verticalAlign: "top" }}>
                      <img 
                        src={data.photoUrl} 
                        alt={data.name || "Profile"} 
                        style={{ 
                          width: "60px", 
                          height: "60px", 
                          borderRadius: "3px",
                          objectFit: "cover" 
                        }} 
                      />
                    </td>
                  )}
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: "10px" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td style={{ fontSize: "13px" }}>
                    {data.email && (
                      <p style={{ 
                        margin: "0 0 5px 0", 
                        display: "flex", 
                        alignItems: "center" 
                      }}>
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
                      </p>
                    )}
                    {data.phone && (
                      <p style={{ 
                        margin: "0 0 5px 0", 
                        display: "flex", 
                        alignItems: "center" 
                      }}>
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
                      </p>
                    )}
                    {data.website && (
                      <p style={{ 
                        margin: "0 0 5px 0", 
                        display: "flex", 
                        alignItems: "center" 
                      }}>
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
                      </p>
                    )}
                    {data.address && (
                      <p style={{ 
                        margin: "0 0 5px 0", 
                        display: "flex", 
                        alignItems: "center" 
                      }}>
                        <MapPin 
                          size={14} 
                          color={data.colors.primary} 
                          style={{ marginRight: "5px" }} 
                        />
                        <span>{data.address}</span>
                      </p>
                    )}
                  </td>
                  <td style={{ textAlign: "right", verticalAlign: "top" }}>
                    <div style={{ display: "inline-flex" }}>
                      {data.socialLinks.linkedin && (
                        <a 
                          href={data.socialLinks.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            marginLeft: "8px",
                            color: data.colors.primary,
                            textDecoration: "none",
                          }}
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {data.socialLinks.twitter && (
                        <a 
                          href={data.socialLinks.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            marginLeft: "8px",
                            color: data.colors.primary,
                            textDecoration: "none",
                          }}
                        >
                          <Twitter size={18} />
                        </a>
                      )}
                      {data.socialLinks.instagram && (
                        <a 
                          href={data.socialLinks.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            marginLeft: "8px",
                            color: data.colors.primary,
                            textDecoration: "none",
                          }}
                        >
                          <Instagram size={18} />
                        </a>
                      )}
                      {data.socialLinks.facebook && (
                        <a 
                          href={data.socialLinks.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            marginLeft: "8px",
                            color: data.colors.primary,
                            textDecoration: "none",
                          }}
                        >
                          <Facebook size={18} />
                        </a>
                      )}
                      {data.meetingLink && (
                        <a 
                          href={data.meetingLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            marginLeft: "8px",
                            color: data.colors.primary,
                            textDecoration: "none",
                          }}
                        >
                          <Calendar size={18} />
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

export default MinimalTemplate;
