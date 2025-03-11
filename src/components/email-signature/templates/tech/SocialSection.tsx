
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface SocialSectionProps {
  data: SignatureData;
}

const SocialSection: React.FC<SocialSectionProps> = ({ data }) => {
  const hasSocialLinks = data.socialLinks.linkedin || data.socialLinks.twitter || 
                         data.socialLinks.instagram || data.socialLinks.facebook;
                         
  if (!hasSocialLinks && !data.meetingLink) {
    return null;
  }

  return (
    <table cellPadding={0} cellSpacing={0} border={0} width="100%" style={{
      borderTop: "1px solid #E5E7EB",
      paddingTop: "18px",
      marginTop: "2px"
    }}>
      <tr>
        <td>
          <table cellPadding={0} cellSpacing={0} border={0} align="left">
            <tr>
              {data.socialLinks.linkedin && (
                <td style={{ paddingRight: "10px" }}>
                  <a 
                    href={data.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none"
                    }}
                  >
                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                      backgroundColor: "#F3F4F6",
                      border: "1px solid #E5E7EB"
                    }}>
                      <tr>
                        <td style={{
                          width: "34px",
                          height: "34px",
                          textAlign: "center",
                          verticalAlign: "middle"
                        }}>
                          <span style={{ 
                            fontSize: "16px",
                            color: data.colors.primary || "#4F46E5"
                          }}>in</span>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              )}
              {data.socialLinks.twitter && (
                <td style={{ paddingRight: "10px" }}>
                  <a 
                    href={data.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none"
                    }}
                  >
                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                      backgroundColor: "#F3F4F6",
                      border: "1px solid #E5E7EB"
                    }}>
                      <tr>
                        <td style={{
                          width: "34px",
                          height: "34px",
                          textAlign: "center",
                          verticalAlign: "middle"
                        }}>
                          <span style={{ 
                            fontSize: "16px",
                            color: data.colors.primary || "#4F46E5"
                          }}>𝕏</span>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              )}
              {data.socialLinks.instagram && (
                <td style={{ paddingRight: "10px" }}>
                  <a 
                    href={data.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none"
                    }}
                  >
                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                      backgroundColor: "#F3F4F6",
                      border: "1px solid #E5E7EB"
                    }}>
                      <tr>
                        <td style={{
                          width: "34px",
                          height: "34px",
                          textAlign: "center",
                          verticalAlign: "middle"
                        }}>
                          <span style={{ 
                            fontSize: "16px",
                            color: data.colors.primary || "#4F46E5"
                          }}>📷</span>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              )}
              {data.socialLinks.facebook && (
                <td style={{ paddingRight: "10px" }}>
                  <a 
                    href={data.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none"
                    }}
                  >
                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                      backgroundColor: "#F3F4F6",
                      border: "1px solid #E5E7EB"
                    }}>
                      <tr>
                        <td style={{
                          width: "34px",
                          height: "34px",
                          textAlign: "center",
                          verticalAlign: "middle"
                        }}>
                          <span style={{ 
                            fontSize: "16px",
                            color: data.colors.primary || "#4F46E5"
                          }}>f</span>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              )}
            </tr>
          </table>
          
          {data.meetingLink && (
            <table cellPadding={0} cellSpacing={0} border={0} align="right">
              <tr>
                <td>
                  <a 
                    href={data.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none"
                    }}
                  >
                    <table cellPadding={0} cellSpacing={0} border={0} style={{
                      backgroundColor: data.colors.primary || "#4F46E5"
                    }}>
                      <tr>
                        <td style={{
                          width: "32px",
                          height: "32px",
                          textAlign: "center",
                          verticalAlign: "middle"
                        }}>
                          <span style={{ 
                            fontSize: "16px",
                            color: "#FFFFFF"
                          }}>📅</span>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              </tr>
            </table>
          )}
        </td>
      </tr>
    </table>
  );
};

export default SocialSection;
