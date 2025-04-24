
import React from "react";
import { EmailSignatureData } from "@/types/email-signature";
import { generateImageUrl } from "@/utils/email-signature-utils";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import { socialIconUrls, socialIconPngUrls } from "./index";

interface ElegantTemplateProps {
  data: EmailSignatureData;
  isPreview?: boolean;
}

const ElegantTemplate: React.FC<ElegantTemplateProps> = ({ data, isPreview = false }) => {
  // For preview in React
  if (isPreview) {
    return (
      <table style={{ fontFamily: data.font, borderCollapse: 'collapse', margin: 0, padding: 0, width: '100%', maxWidth: '500px' }}>
        <tbody>
          <tr>
            <td style={{ padding: 0 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    {data.showProfileImage && data.profileImageUrl && (
                      <td style={{ verticalAlign: 'top', width: '80px', paddingRight: '15px' }}>
                        <div style={{ 
                          width: '80px', 
                          height: '80px', 
                          borderRadius: '5px', 
                          overflow: 'hidden',
                          border: `1px solid ${data.primaryColor}`,
                        }}>
                          <img
                            src={generateImageUrl(data.profileImageUrl)}
                            alt={data.fullName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </td>
                    )}
                    <td style={{ verticalAlign: 'top' }}>
                      <h2 style={{ 
                        margin: '0 0 5px', 
                        fontSize: '20px', 
                        fontWeight: 'bold',
                        color: data.primaryColor,
                        letterSpacing: '0.5px'
                      }}>
                        {data.fullName}
                      </h2>
                      <p style={{ 
                        margin: '0 0 10px', 
                        fontSize: '14px', 
                        color: '#555',
                        fontStyle: 'italic'
                      }}>
                        {data.jobTitle} {data.company ? `• ${data.company}` : ''}
                      </p>
                      <div style={{ height: '2px', background: `linear-gradient(to right, ${data.primaryColor}, transparent)`, width: '120px', marginBottom: '10px' }}></div>
                    </td>
                    {data.showCompanyLogo && data.companyLogoUrl && (
                      <td style={{ verticalAlign: 'top', width: '100px', textAlign: 'right' }}>
                        <img
                          src={generateImageUrl(data.companyLogoUrl)}
                          alt={data.company}
                          style={{ maxWidth: '100px', maxHeight: '50px', objectFit: 'contain' }}
                        />
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: '10px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td>
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          {data.phoneNumber && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#555', paddingBottom: '4px' }}>
                                <span style={{ fontWeight: 'bold', color: data.primaryColor }}>T:</span> <a href={`tel:${data.phoneNumber}`} style={{ color: '#555', textDecoration: 'none' }}>{data.phoneNumber}</a>
                              </td>
                            </tr>
                          )}
                          {data.email && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#555', paddingBottom: '4px' }}>
                                <span style={{ fontWeight: 'bold', color: data.primaryColor }}>E:</span> <a href={`mailto:${data.email}`} style={{ color: '#555', textDecoration: 'none' }}>{data.email}</a>
                              </td>
                            </tr>
                          )}
                          {data.website && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#555', paddingBottom: '4px' }}>
                                <span style={{ fontWeight: 'bold', color: data.primaryColor }}>W:</span> <a href={data.website} style={{ color: '#555', textDecoration: 'none' }}>{data.website.replace(/^https?:\/\//, '')}</a>
                              </td>
                            </tr>
                          )}
                          {data.showAddress && data.address && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#555', paddingBottom: '4px' }}>
                                <span style={{ fontWeight: 'bold', color: data.primaryColor }}>A:</span> {data.address}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </td>
                    <td style={{ textAlign: 'right', verticalAlign: 'bottom' }}>
                      {data.socialLinks.length > 0 && (
                        <table style={{ borderCollapse: 'collapse', display: 'inline-block' }}>
                          <tbody>
                            <tr>
                              {data.socialLinks.map((link, index) => {
                                let Icon;
                                switch (link.platform) {
                                  case 'facebook': Icon = Facebook; break;
                                  case 'twitter': Icon = Twitter; break;
                                  case 'linkedin': Icon = Linkedin; break;
                                  case 'instagram': Icon = Instagram; break;
                                  case 'youtube': Icon = Youtube; break;
                                  case 'github': Icon = Github; break;
                                  default: Icon = Linkedin;
                                }
                                
                                return (
                                  <td key={index} style={{ paddingLeft: '8px' }}>
                                    <a href={link.url} style={{ color: data.primaryColor, textDecoration: 'none' }}>
                                      <Icon size={16} />
                                    </a>
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  // For HTML export (no React components, only inline styles)
  const socialIconHtml = (platform: string, url: string) => {
    // Use PNG icons for better email client compatibility
    const iconUrl = socialIconPngUrls[platform as keyof typeof socialIconPngUrls] || socialIconPngUrls.linkedin;
    
    return `<a href="${url}" target="_blank" style="text-decoration:none;padding:0;margin:0;display:inline-block;"><img src="${iconUrl}" alt="${platform}" width="16" height="16" style="width:16px;height:16px;border:0;" /></a>`;
  };

  return `
    <table cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;margin:0;padding:0;width:100%;max-width:500px;font-family:${data.font},-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
      <tr>
        <td style="padding:0;">
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              ${data.showProfileImage && data.profileImageUrl ? `
              <td style="padding:0 15px 0 0;width:80px;vertical-align:top;">
                <div style="width:80px;height:80px;border-radius:5px;overflow:hidden;border:1px solid ${data.primaryColor};">
                  <img src="${data.profileImageUrl}" alt="${data.fullName}" width="80" height="80" style="width:100%;height:100%;object-fit:cover;" />
                </div>
              </td>` : ''}
              <td style="padding:0;vertical-align:top;">
                <p style="margin:0;padding:0;color:${data.primaryColor};font-size:20px;line-height:24px;font-weight:600;letter-spacing:0.5px;">
                  ${data.fullName}
                </p>
                ${data.jobTitle ? `
                <p style="margin:0;padding:4px 0 10px;font-size:14px;line-height:20px;color:#555;font-style:italic;">
                  ${data.jobTitle} ${data.company ? `• ${data.company}` : ''}
                </p>` : ''}
                <div style="height:2px;background:linear-gradient(to right, ${data.primaryColor}, transparent);width:120px;margin-bottom:10px;"></div>
              </td>
              ${data.showCompanyLogo && data.companyLogoUrl ? `
              <td style="padding:0 0 0 15px;width:100px;vertical-align:top;text-align:right;">
                <img src="${data.companyLogoUrl}" alt="${data.company}" width="100" style="max-width:100px;max-height:50px;" />
              </td>` : ''}
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:10px;">
            <tr>
              <td style="vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:0;">
                      ${data.phoneNumber ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#555;">
                        <span style="font-weight:bold;color:${data.primaryColor};">T:</span> <a href="tel:${data.phoneNumber}" style="color:#555;text-decoration:none;">${data.phoneNumber}</a>
                      </p>` : ''}
                      ${data.email ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#555;">
                        <span style="font-weight:bold;color:${data.primaryColor};">E:</span> <a href="mailto:${data.email}" style="color:#555;text-decoration:none;">${data.email}</a>
                      </p>` : ''}
                      ${data.website ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#555;">
                        <span style="font-weight:bold;color:${data.primaryColor};">W:</span> <a href="${data.website}" style="color:#555;text-decoration:none;">${data.website.replace(/^https?:\/\//, '')}</a>
                      </p>` : ''}
                      ${data.showAddress && data.address ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#555;">
                        <span style="font-weight:bold;color:${data.primaryColor};">A:</span> ${data.address}
                      </p>` : ''}
                    </td>
                  </tr>
                </table>
              </td>
              ${data.socialLinks.length > 0 ? `
              <td style="padding:0;vertical-align:bottom;text-align:right;">
                <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                  <tr>
                    ${data.socialLinks.map(link => `
                    <td style="padding:0 0 0 8px;vertical-align:middle;">
                      ${socialIconHtml(link.platform, link.url)}
                    </td>`).join('')}
                  </tr>
                </table>
              </td>` : ''}
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
};

export default ElegantTemplate;
