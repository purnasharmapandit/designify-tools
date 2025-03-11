
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface ProfileSectionProps {
  data: SignatureData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => {
  return (
    <div style={{ marginBottom: "24px", display: "flex", alignItems: "center" }}>
      {data.photoUrl && (
        <div style={{
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
            alt={data.name}
            style={{ 
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>
      )}
      <div>
        <h2 style={{ 
          margin: "0 0 6px 0",
          fontSize: "20px",
          fontWeight: "600",
          background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 1px rgba(0,0,0,0.1)",
          letterSpacing: "-0.01em"
        }}>
          {data.name}
          {data.credentials && (
            <span style={{ 
              fontSize: "14px",
              fontWeight: "normal",
              opacity: "0.7",
              marginLeft: "8px",
              color: data.colors.text,
              WebkitTextFillColor: data.colors.text
            }}>
              {data.credentials}
            </span>
          )}
        </h2>
        <p style={{ 
          margin: "0 0 2px 0",
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
        <div style={{ 
          margin: "0",
          fontSize: "14px",
          color: "#222",
          display: "flex",
          alignItems: "center"
        }}>
          {data.company}
          {data.companyLogoUrl && (
            <img 
              src={data.companyLogoUrl} 
              alt={data.company}
              style={{ 
                height: "16px",
                marginLeft: "8px",
                verticalAlign: "middle"
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
