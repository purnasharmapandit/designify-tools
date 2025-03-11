
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface BusinessContactSectionProps {
  data: SignatureData;
}

const BusinessContactSection: React.FC<BusinessContactSectionProps> = ({ data }) => {
  const hasContactInfo = data.email || data.phone || data.address || data.website;
  
  if (!hasContactInfo) {
    return null;
  }

  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginBottom: "10px" }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
              <tbody>
                {data.email && (
                  <tr>
                    <td style={{ 
                      fontSize: "13px", 
                      padding: "2px 0",
                      color: data.colors.text || "#333333"
                    }}>
                      <span style={{ fontWeight: "bold" }}>E: </span>
                      <a 
                        href={`mailto:${data.email}`} 
                        style={{ 
                          color: data.colors.text || "#333333",
                          textDecoration: "none"
                        }}
                      >
                        {data.email}
                      </a>
                    </td>
                  </tr>
                )}
                
                {data.phone && (
                  <tr>
                    <td style={{ 
                      fontSize: "13px", 
                      padding: "2px 0",
                      color: data.colors.text || "#333333"
                    }}>
                      <span style={{ fontWeight: "bold" }}>M: </span>
                      <a 
                        href={`tel:${data.phone}`} 
                        style={{ 
                          color: data.colors.text || "#333333",
                          textDecoration: "none"
                        }}
                      >
                        {data.phone}
                      </a>
                    </td>
                  </tr>
                )}
                
                {data.address && (
                  <tr>
                    <td style={{ 
                      fontSize: "13px", 
                      padding: "2px 0",
                      color: data.colors.text || "#333333"
                    }}>
                      <span style={{ fontWeight: "bold" }}>A: </span>
                      {data.address}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
        
        {data.website && (
          <tr>
            <td style={{ paddingTop: "10px" }}>
              <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ 
                      padding: "6px 0",
                      backgroundColor: data.colors.primary || "#4F46E5",
                      textAlign: "center",
                      borderRadius: "3px"
                    }}>
                      <a 
                        href={data.website.startsWith('http') ? data.website : `https://${data.website}`}
                        target="_blank"
                        rel="noopener"
                        style={{
                          color: "#FFFFFF",
                          fontSize: "13px",
                          textDecoration: "none",
                          fontWeight: "bold"
                        }}
                      >
                        {data.website.replace(/^https?:\/\//i, '')}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default BusinessContactSection;
