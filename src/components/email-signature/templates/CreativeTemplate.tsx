
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Linkedin, Twitter, Instagram, Facebook, Calendar, Phone, Mail, Globe, MapPin } from "lucide-react";

interface CreativeTemplateProps {
  data: SignatureData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
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
          borderLeft: `4px solid ${data.colors.primary}`,
          position: "relative",
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "20px" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {data.photoUrl && (
                        <img 
                          src={data.photoUrl} 
                          alt={data.name || "Profile"} 
                          style={{ 
                            width: "70px", 
                            height: "70px", 
                            borderRadius: "6px",
                            marginRight: "15px",
                            objectFit: "cover",
                            boxShadow: `0 4px 8px rgba(0,0,0,0.1)`,
                          }} 
                        />
                      )}
                      <div>
                        <h3 style={{ 
                          margin: "0 0 5px 0", 
                          fontSize: "20px", 
                          fontWeight: "bold",
                          color: data.colors.primary, 
                        }}>
                          {data.name || "Your Name"} 
                          {data.credentials && <span style={{ fontSize: "14px", color: data.colors.text }}> {data.credentials}</span>}
                        </h3>
                        {data.jobTitle && (
                          <p style={{ 
                            margin: "0 0 5px 0", 
                            fontSize: "14px",
                            fontWeight: "500",
                            color: data.colors.text, 
                          }}>
                            {data.jobTitle}
                            {data.department && <span style={{ opacity: "0.7", fontWeight: "normal" }}> | {data.department}</span>}
                          </p>
                        )}
                        {data.company && (
                          <p style={{ 
                            margin: "0", 
                            fontSize: "14px",
                            color: data.colors.text, 
                            opacity: "0.8",
                          }}>
                            {data.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td style={{ paddingTop: "15px" }}>
                    <div style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: "12px 25px",
                      maxWidth: "100%",
                      marginBottom: "15px",
                    }}>
                      {data.phone && (
                        <span style={{ display: "flex", alignItems: "center" }}>
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
                        </span>
                      )}
                      {data.email && (
                        <span style={{ display: "flex", alignItems: "center" }}>
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
                        </span>
                      )}
                      {data.website && (
                        <span style={{ display: "flex", alignItems: "center" }}>
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
                        </span>
                      )}
                      {data.address && (
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <MapPin 
                            size={14} 
                            color={data.colors.primary} 
                            style={{ marginRight: "6px" }} 
                          />
                          <span>{data.address}</span>
                        </span>
                      )}
                      {data.meetingLink && (
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <Calendar 
                            size={14} 
                            color={data.colors.primary} 
                            style={{ marginRight: "6px" }} 
                          />
                          <a 
                            href={data.meetingLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              color: data.colors.text,
                              textDecoration: "none",
                            }}
                          >
                            Schedule a meeting
                          </a>
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              </table>
              
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {data.companyLogoUrl && (
                          <img 
                            src={data.companyLogoUrl} 
                            alt={data.company || "Company"} 
                            style={{ 
                              height: "28px", 
                              maxWidth: "120px",
                              marginRight: "10px"
                            }} 
                          />
                        )}
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        {data.socialLinks.linkedin && (
                          <a 
                            href={data.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              width: "24px",
                              height: "24px",
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
                              width: "24px",
                              height: "24px",
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
                              width: "24px",
                              height: "24px",
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
                              width: "24px",
                              height: "24px",
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

export default CreativeTemplate;
