
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface ContactSectionProps {
  data: SignatureData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  if (!data.email && !data.phone && !data.website && !data.address) {
    return null;
  }

  return (
    <table cellPadding="0" cellSpacing="0" border="0" style={{ width: "100%", marginBottom: "22px" }}>
      <tbody>
        <tr>
          <td>
            <table cellPadding="0" cellSpacing="0" border="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  {data.email && (
                    <td style={{ paddingRight: "10px", paddingBottom: "10px" }}>
                      <table cellPadding="0" cellSpacing="0" border="0" style={{
                        backgroundColor: "#F3F4F6",
                        borderCollapse: "collapse"
                      }}>
                        <tbody>
                          <tr>
                            <td style={{
                              padding: "8px 14px",
                              borderRadius: "4px",
                              border: "1px solid #E5E7EB"
                            }}>
                              <a 
                                href={`mailto:${data.email}`}
                                style={{
                                  color: "#333333",
                                  fontSize: "13px",
                                  textDecoration: "none",
                                  fontFamily: "Arial, sans-serif"
                                }}
                              >
                                ✉️ {data.email}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  )}
                  
                  {data.phone && (
                    <td style={{ paddingRight: "10px", paddingBottom: "10px" }}>
                      <table cellPadding="0" cellSpacing="0" border="0" style={{
                        backgroundColor: "#F3F4F6",
                        borderCollapse: "collapse"
                      }}>
                        <tbody>
                          <tr>
                            <td style={{
                              padding: "8px 14px",
                              borderRadius: "4px",
                              border: "1px solid #E5E7EB"
                            }}>
                              <a 
                                href={`tel:${data.phone}`}
                                style={{
                                  color: "#333333",
                                  fontSize: "13px",
                                  textDecoration: "none",
                                  fontFamily: "Arial, sans-serif"
                                }}
                              >
                                📱 {data.phone}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>

            <table cellPadding="0" cellSpacing="0" border="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  {data.website && (
                    <td style={{ paddingRight: "10px", paddingBottom: "10px" }}>
                      <table cellPadding="0" cellSpacing="0" border="0" style={{
                        backgroundColor: "#F3F4F6",
                        borderCollapse: "collapse"
                      }}>
                        <tbody>
                          <tr>
                            <td style={{
                              padding: "8px 14px",
                              borderRadius: "4px",
                              border: "1px solid #E5E7EB"
                            }}>
                              <a 
                                href={data.website.startsWith('http') ? data.website : `https://${data.website}`}
                                target="_blank"
                                rel="noopener"
                                style={{
                                  color: "#333333",
                                  fontSize: "13px",
                                  textDecoration: "none",
                                  fontFamily: "Arial, sans-serif"
                                }}
                              >
                                🌐 {data.website.replace(/^https?:\/\//i, '')}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  )}
                  
                  {data.address && (
                    <td style={{ paddingRight: "10px", paddingBottom: "10px" }}>
                      <table cellPadding="0" cellSpacing="0" border="0" style={{
                        backgroundColor: "#F3F4F6",
                        borderCollapse: "collapse"
                      }}>
                        <tbody>
                          <tr>
                            <td style={{
                              padding: "8px 14px",
                              borderRadius: "4px",
                              border: "1px solid #E5E7EB"
                            }}>
                              <span style={{
                                color: "#333333",
                                fontSize: "13px",
                                fontFamily: "Arial, sans-serif"
                              }}>
                                📍 {data.address}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactSection;
