
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram, Facebook, Calendar } from "lucide-react";

interface TechTemplateProps {
  data: SignatureData;
}

const TechTemplate: React.FC<TechTemplateProps> = ({ data }) => {
  return (
    <div style={{ 
      maxWidth: "600px",
      fontFamily: data.font || "monospace",
      color: data.colors.text,
      background: "#f8f9fa",
      borderRadius: "8px",
      overflow: "hidden"
    }}>
      <div style={{ 
        background: data.colors.primary,
        padding: "2px 0",
        marginBottom: "15px"
      }} />
      
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ padding: "20px" }}>
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                      {data.photoUrl && (
                        <img 
                          src={data.photoUrl} 
                          alt={data.name}
                          style={{ 
                            width: "60px",
                            height: "60px",
                            borderRadius: "8px",
                            marginRight: "15px"
                          }}
                        />
                      )}
                      <div>
                        <h2 style={{ 
                          margin: "0 0 5px 0",
                          fontSize: "20px",
                          color: data.colors.primary
                        }}>
                          {data.name} <span style={{ color: data.colors.text }}>//</span>
                        </h2>
                        <p style={{ 
                          margin: "0 0 3px 0",
                          fontSize: "14px"
                        }}>
                          <span style={{ color: data.colors.primary }}>role:</span> {data.jobTitle}
                        </p>
                        <p style={{ 
                          margin: "0",
                          fontSize: "14px"
                        }}>
                          <span style={{ color: data.colors.primary }}>team:</span> {data.company}
                        </p>
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: "#ffffff",
                      padding: "15px",
                      borderRadius: "6px",
                      marginBottom: "15px"
                    }}>
                      <code style={{ display: "block", marginBottom: "8px", fontSize: "13px" }}>
                        <span style={{ color: data.colors.primary }}>const</span> contact = {"{"}
                      </code>
                      {data.email && (
                        <code style={{ display: "block", marginLeft: "20px", marginBottom: "4px", fontSize: "13px" }}>
                          email: <a href={`mailto:${data.email}`} style={{ color: data.colors.text, textDecoration: "none" }}>"<span style={{ color: data.colors.primary }}>{data.email}</span>"</a>,
                        </code>
                      )}
                      {data.phone && (
                        <code style={{ display: "block", marginLeft: "20px", marginBottom: "4px", fontSize: "13px" }}>
                          phone: <a href={`tel:${data.phone}`} style={{ color: data.colors.text, textDecoration: "none" }}>"<span style={{ color: data.colors.primary }}>{data.phone}</span>"</a>,
                        </code>
                      )}
                      {data.website && (
                        <code style={{ display: "block", marginLeft: "20px", marginBottom: "4px", fontSize: "13px" }}>
                          web: <a href={data.website} style={{ color: data.colors.text, textDecoration: "none" }}>"<span style={{ color: data.colors.primary }}>{data.website}</span>"</a>,
                        </code>
                      )}
                      <code style={{ display: "block", fontSize: "13px" }}>{"}"}</code>
                    </div>
                    
                    {(data.socialLinks.linkedin || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.facebook || data.meetingLink) && (
                      <div style={{ textAlign: "right" }}>
                        {Object.entries({
                          linkedin: [data.socialLinks.linkedin, Linkedin],
                          twitter: [data.socialLinks.twitter, Twitter],
                          instagram: [data.socialLinks.instagram, Instagram],
                          facebook: [data.socialLinks.facebook, Facebook],
                          calendar: [data.meetingLink, Calendar]
                        }).map(([key, [link, Icon]]) => 
                          link && (
                            <a 
                              key={key}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-block",
                                margin: "0 5px",
                                color: data.colors.primary,
                                textDecoration: "none"
                              }}
                            >
                              <Icon size={18} />
                            </a>
                          )
                        )}
                      </div>
                    )}
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

export default TechTemplate;
