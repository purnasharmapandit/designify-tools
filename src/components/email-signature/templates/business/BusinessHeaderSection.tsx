
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface BusinessHeaderSectionProps {
  data: SignatureData;
}

const BusinessHeaderSection: React.FC<BusinessHeaderSectionProps> = ({ data }) => {
  if (!data.name && !data.jobTitle && !data.company && !data.companyLogoUrl) {
    return null;
  }

  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginBottom: "10px" }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            {data.name && (
              <div style={{ 
                fontSize: "18px",
                fontWeight: "bold",
                color: data.colors.primary || "#4F46E5",
                marginBottom: "2px"
              }}>
                {data.name}
              </div>
            )}
            
            {data.jobTitle && (
              <div style={{ 
                fontSize: "14px",
                color: data.colors.secondary || "#6366F1",
                marginBottom: "10px"
              }}>
                {data.jobTitle}
                {data.department && ` • ${data.department}`}
              </div>
            )}
          </td>
          
          {data.companyLogoUrl && (
            <td style={{ verticalAlign: "top", textAlign: "right" }}>
              <img 
                src={data.companyLogoUrl} 
                alt={data.company || "Company"}
                style={{ 
                  maxHeight: "50px",
                  maxWidth: "120px"
                }}
              />
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default BusinessHeaderSection;
