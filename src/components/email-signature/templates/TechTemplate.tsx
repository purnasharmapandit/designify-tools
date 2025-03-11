
import React from "react";
import { SignatureData } from "@/types/email-signature";
import ProfileSection from "./tech/ProfileSection";
import ContactSection from "./tech/ContactSection";
import SocialSection from "./tech/SocialSection";

interface TechTemplateProps {
  data: SignatureData;
}

const TechTemplate: React.FC<TechTemplateProps> = ({ data }) => {
  return (
    <div style={{ 
      maxWidth: "600px",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: data.colors.text,
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "15px",
        margin: "1px",
        padding: "24px"
      }}>
        <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <ProfileSection data={data} />
                <ContactSection data={data} />
                <SocialSection data={data} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechTemplate;
