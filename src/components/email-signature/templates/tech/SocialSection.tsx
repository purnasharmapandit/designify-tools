
import React from "react";
import { SignatureData } from "@/types/email-signature";

interface SocialSectionProps {
  data: SignatureData;
}

const SocialSection: React.FC<SocialSectionProps> = ({ data }) => {
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
          <td>
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
                <tr>
                  {data.socialLinks.linkedin && (
                    <td style={{ paddingRight: "12px" }}>
                      <a 
                        href={data.socialLinks.linkedin}
                        target="_blank" 
                        rel="noopener"
                        style={{ textDecoration: "none" }}
                      >
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                          alt="LinkedIn" 
                          width="18" 
                          height="18" 
                          style={{ 
                            display: "block", 
                            border: "0"
                          }} 
                        />
                      </a>
                    </td>
                  )}
                  
                  {data.socialLinks.twitter && (
                    <td style={{ paddingRight: "12px" }}>
                      <a 
                        href={data.socialLinks.twitter}
                        target="_blank" 
                        rel="noopener"
                        style={{ textDecoration: "none" }}
                      >
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/124/124021.png" 
                          alt="Twitter" 
                          width="18" 
                          height="18" 
                          style={{ 
                            display: "block", 
                            border: "0"
                          }} 
                        />
                      </a>
                    </td>
                  )}
                  
                  {data.socialLinks.facebook && (
                    <td style={{ paddingRight: "12px" }}>
                      <a 
                        href={data.socialLinks.facebook}
                        target="_blank" 
                        rel="noopener"
                        style={{ textDecoration: "none" }}
                      >
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                          alt="Facebook" 
                          width="18" 
                          height="18" 
                          style={{ 
                            display: "block", 
                            border: "0"
                          }} 
                        />
                      </a>
                    </td>
                  )}
                  
                  {data.socialLinks.instagram && (
                    <td style={{ paddingRight: "12px" }}>
                      <a 
                        href={data.socialLinks.instagram}
                        target="_blank" 
                        rel="noopener"
                        style={{ textDecoration: "none" }}
                      >
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
                          alt="Instagram" 
                          width="18" 
                          height="18" 
                          style={{ 
                            display: "block", 
                            border: "0"
                          }} 
                        />
                      </a>
                    </td>
                  )}
                  
                  {data.meetingLink && (
                    <td>
                      <a 
                        href={data.meetingLink}
                        target="_blank" 
                        rel="noopener"
                        style={{ textDecoration: "none" }}
                      >
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/2948/2948111.png" 
                          alt="Schedule Meeting" 
                          width="18" 
                          height="18" 
                          style={{ 
                            display: "block", 
                            border: "0"
                          }} 
                        />
                      </a>
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

export default SocialSection;
