
import React from "react";
import { SignatureData } from "@/types/email-signature";
import { Linkedin, Twitter, Instagram, Facebook, Calendar } from "lucide-react";

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
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: `1px solid ${data.colors.primary}15`,
      paddingTop: "18px",
      marginTop: "2px"
    }}>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.socialLinks.linkedin && (
          <a 
            href={data.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              backgroundColor: `${data.colors.primary}10`,
              color: data.colors.primary,
              transition: "all 0.2s ease",
              border: `1px solid ${data.colors.primary}15`
            }}
          >
            <Linkedin size={16} />
          </a>
        )}
        {data.socialLinks.twitter && (
          <a 
            href={data.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              backgroundColor: `${data.colors.primary}10`,
              color: data.colors.primary,
              transition: "all 0.2s ease",
              border: `1px solid ${data.colors.primary}15`
            }}
          >
            <Twitter size={16} />
          </a>
        )}
        {data.socialLinks.instagram && (
          <a 
            href={data.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              backgroundColor: `${data.colors.primary}10`,
              color: data.colors.primary,
              transition: "all 0.2s ease",
              border: `1px solid ${data.colors.primary}15`
            }}
          >
            <Instagram size={16} />
          </a>
        )}
        {data.socialLinks.facebook && (
          <a 
            href={data.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              backgroundColor: `${data.colors.primary}10`,
              color: data.colors.primary,
              transition: "all 0.2s ease",
              border: `1px solid ${data.colors.primary}15`
            }}
          >
            <Facebook size={16} />
          </a>
        )}
      </div>
      
      {data.meetingLink && (
        <a 
          href={data.meetingLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px", 
            height: "32px",
            borderRadius: "8px",
            background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`,
            color: "#fff",
            boxShadow: `0 2px 6px ${data.colors.primary}40`
          }}
        >
          <Calendar size={16} />
        </a>
      )}
    </div>
  );
};

export default SocialSection;
