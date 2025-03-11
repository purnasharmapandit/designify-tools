
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
    <table cellPadding={0} cellSpacing={0} border={0} style={{ marginBottom: "24px" }}>
      <tr>
        <td style={{ verticalAlign: "middle" }}>
          {data.photoUrl && (
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tr>
                <td style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginRight: "18px",
                  border: `1px solid ${data.colors.primary}20`,
                  boxShadow: "0 6px 12px rgba(0,0,0,0.06)"
                }}>
                  <img 
                    src={data.photoUrl} 
                    alt={data.name || "Profile"}
                    width="72"
                    height="72"
                    style={{ 
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </td>
                <td width="18"></td>
              </tr>
            </table>
          )}
        </td>
        <td style={{ verticalAlign: "middle" }}>
          {data.name && (
            <h2 style={{ 
              margin: "0 0 6px 0",
              padding: "0",
              fontSize: "20px",
              fontWeight: "600",
              color: data.colors.primary,
              letterSpacing: "-0.01em"
            }}>
              {data.name}
              {data.credentials && (
                <span style={{ 
                  fontSize: "14px",
                  fontWeight: "normal",
                  opacity: "0.7",
                  marginLeft: "8px",
                  color: data.colors.text
                }}>
                  {data.credentials}
                </span>
              )}
            </h2>
          )}
          {data.jobTitle && (
            <p style={{ 
              margin: "0 0 2px 0",
              padding: "0",
              fontSize: "14px",
              color: data.colors.secondary,
              fontWeight: "500"
            }}>
              {data.jobTitle}
              {data.department && (
                <span style={{ 
                  color: "#555", 
                  opacity: "0.9",
                  fontWeight: "400" 
                }}> • {data.department}</span>
              )}
            </p>
          )}
          {data.company && (
            <p style={{ 
              margin: "0",
              padding: "0",
              fontSize: "14px",
              color: "#222"
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
    </table>
  );
};

export default ProfileSection;
