
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface ProfileSectionProps {
  data: SignatureData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => {
  if (!data.name && !data.jobTitle && !data.company && !data.department && !data.photoUrl) {
    return null;
  }

  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginBottom: "24px" }}>
      <tbody>
        <tr>
          {data.photoUrl && (
            <td width={90} style={{ verticalAlign: "top" }}>
              <table cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  <tr>
                    <td style={{
                      width: "72px",
                      height: "72px",
                      verticalAlign: "top"
                    }}>
                      <img 
                        src={data.photoUrl} 
                        alt={data.name || "Profile"}
                        width="72"
                        height="72"
                        style={{ 
                          display: "block",
                          width: "72px",
                          height: "72px",
                          border: `1px solid ${data.colors.primary || "#4F46E5"}`,
                          maxWidth: "72px"
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          )}
          <td style={{ verticalAlign: "top", paddingLeft: data.photoUrl ? "18px" : "0" }}>
            {data.name && (
              <p style={{ 
                margin: "0 0 6px 0",
                padding: "0",
                fontSize: "20px",
                fontWeight: "bold",
                color: data.colors.primary || "#4F46E5"
              }}>
                {data.name}
                {data.credentials && (
                  <span style={{ 
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: data.colors.text || "#333333",
                    marginLeft: "8px"
                  }}>
                    {data.credentials}
                  </span>
                )}
              </p>
            )}
            {data.jobTitle && (
              <p style={{ 
                margin: "0 0 2px 0",
                padding: "0",
                fontSize: "14px",
                color: data.colors.secondary || "#6366F1"
              }}>
                {data.jobTitle}
                {data.department && (
                  <span style={{ 
                    color: "#555555"
                  }}> • {data.department}</span>
                )}
              </p>
            )}
            {data.company && (
              <p style={{ 
                margin: "0",
                padding: "0",
                fontSize: "14px",
                color: "#222222"
              }}>
                {data.company}
                {data.companyLogoUrl && (
                  <img 
                    src={data.companyLogoUrl} 
                    alt={data.company}
                    height="16"
                    style={{ 
                      height: "16px",
                      marginLeft: "8px",
                      verticalAlign: "middle"
                    }}
                  />
                )}
              </p>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileSection;
