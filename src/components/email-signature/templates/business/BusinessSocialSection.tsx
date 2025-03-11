
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface BusinessSocialSectionProps {
  data: SignatureData;
}

const BusinessSocialSection: React.FC<BusinessSocialSectionProps> = ({ data }) => {
  const hasSocialLinks = 
    data.socialLinks.linkedin || 
    data.socialLinks.twitter || 
    data.socialLinks.facebook || 
    data.socialLinks.instagram ||
    data.meetingLink;
  
  if (!hasSocialLinks) {
    return null;
  }

  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td style={{ textAlign: "left", padding: "5px 0" }}>
            {data.socialLinks.facebook && (
              <a 
                href={data.socialLinks.facebook}
                target="_blank" 
                rel="noopener"
                style={{ 
                  display: "inline-block",
                  marginRight: "10px",
                  textDecoration: "none" 
                }}
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                  alt="Facebook" 
                  width="24" 
                  height="24" 
                  style={{ display: "block", border: "0" }} 
                />
              </a>
            )}
            
            {data.socialLinks.twitter && (
              <a 
                href={data.socialLinks.twitter}
                target="_blank" 
                rel="noopener"
                style={{ 
                  display: "inline-block",
                  marginRight: "10px",
                  textDecoration: "none" 
                }}
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/124/124021.png" 
                  alt="Twitter" 
                  width="24" 
                  height="24" 
                  style={{ display: "block", border: "0" }} 
                />
              </a>
            )}
            
            {/* YouTube placeholder */}
            {data.socialLinks.instagram && (
              <a 
                href={data.socialLinks.instagram}
                target="_blank" 
                rel="noopener"
                style={{ 
                  display: "inline-block",
                  marginRight: "10px",
                  textDecoration: "none" 
                }}
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
                  alt="Instagram" 
                  width="24" 
                  height="24" 
                  style={{ display: "block", border: "0" }} 
                />
              </a>
            )}
            
            {data.socialLinks.linkedin && (
              <a 
                href={data.socialLinks.linkedin}
                target="_blank" 
                rel="noopener"
                style={{ 
                  display: "inline-block",
                  marginRight: "10px",
                  textDecoration: "none" 
                }}
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                  alt="LinkedIn" 
                  width="24" 
                  height="24" 
                  style={{ display: "block", border: "0" }} 
                />
              </a>
            )}
            
            {data.meetingLink && (
              <a 
                href={data.meetingLink}
                target="_blank" 
                rel="noopener"
                style={{ 
                  display: "inline-block",
                  textDecoration: "none" 
                }}
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2948/2948111.png" 
                  alt="Schedule Meeting" 
                  width="24" 
                  height="24" 
                  style={{ display: "block", border: "0" }} 
                />
              </a>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BusinessSocialSection;
