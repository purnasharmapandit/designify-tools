
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
            <td style={{ paddingBottom: "15px" }}>
              {data.photoUrl && (
                <img 
                  src={data.photoUrl} 
                  alt={data.name}
                  style={{ 
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginRight: "20px",
                    float: "left"
                  }}
                />
              )}
              <div>
                <h2 style={{ 
                  margin: "0 0 5px 0",
                  fontSize: "24px",
                  color: data.colors.primary
                }}>{data.name}</h2>
                <p style={{ 
                  margin: "0 0 5px 0",
                  fontSize: "16px",
                  fontStyle: "italic"
                }}>{data.jobTitle}</p>
                <p style={{ 
                  margin: "0",
                  fontSize: "16px"
                }}>{data.company}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ borderTop: `1px solid ${data.colors.secondary}`, paddingTop: "15px" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td style={{ verticalAlign: "top", paddingRight: "20px" }}>
                    {data.email && (
                      <a href={`mailto:${data.email}`} style={{ 
                        display: "block", 
                        marginBottom: "8px",
                        color: data.colors.text,
                        textDecoration: "none"
                      }}>
                        <Mail size={14} style={{ marginRight: "8px", color: data.colors.primary }} />
                        {data.email}
                      </a>
                    )}
                    {data.phone && (
                      <a href={`tel:${data.phone}`} style={{ 
                        display: "block", 
                        marginBottom: "8px",
                        color: data.colors.text,
                        textDecoration: "none"
                      }}>
                        <Phone size={14} style={{ marginRight: "8px", color: data.colors.primary }} />
                        {data.phone}
                      </a>
                    )}
                  </td>
                  <td style={{ verticalAlign: "top" }}>
                    {data.website && (
                      <a href={data.website} style={{ 
                        display: "block", 
                        marginBottom: "8px",
                        color: data.colors.text,
                        textDecoration: "none"
                      }}>
                        <Globe size={14} style={{ marginRight: "8px", color: data.colors.primary }} />
                        {data.website}
                      </a>
                    )}
                    {data.address && (
                      <div style={{ 
                        display: "block", 
                        marginBottom: "8px",
                        color: data.colors.text
                      }}>
                        <MapPin size={14} style={{ marginRight: "8px", color: data.colors.primary }} />
                        {data.address}
                      </div>
                    )}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          {(data.socialLinks.linkedin || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.facebook || data.meetingLink) && (
            <tr>
              <td style={{ paddingTop: "15px", textAlign: "center" }}>
                {data.socialLinks.linkedin && (
                  <a 
                    href={data.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      margin: "0 10px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {data.socialLinks.twitter && (
                  <a 
                    href={data.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      margin: "0 10px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {data.socialLinks.instagram && (
                  <a 
                    href={data.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      margin: "0 10px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {data.socialLinks.facebook && (
                  <a 
                    href={data.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      margin: "0 10px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {data.meetingLink && (
                  <a 
                    href={data.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      margin: "0 10px",
                      color: data.colors.primary,
                      textDecoration: "none"
                    }}
                  >
                    <Calendar size={20} />
                  </a>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ElegantTemplate;
