import React from "react";
import { EmailSignatureData } from "@/types/email-signature";
import { generateImageUrl } from "@/utils/email-signature-utils";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import { socialIconPngUrls } from "./index";

interface ExecutiveTemplateProps {
  data: EmailSignatureData;
  isPreview?: boolean;
}

const ExecutiveTemplate: React.FC<ExecutiveTemplateProps> = ({ data, isPreview = false }) => {
  // For preview in React
  if (isPreview) {
    return (
      <table style={{ fontFamily: data.font, borderCollapse: 'collapse', margin: 0, padding: 0, width: '100%', maxWidth: '500px' }}>
        <tbody>
          <tr>
            <td>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ borderLeft: `4px solid ${data.primaryColor}`, paddingLeft: '15px' }}>
                      <h2 style={{ 
                        margin: '0 0 5px', 
                        color: data.primaryColor,
                        fontSize: '22px', 
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {data.fullName}
                      </h2>
                      {data.jobTitle && (
                        <p style={{ 
                          margin: '0 0 15px', 
                          fontSize: '14px', 
                          color: '#444',
                          fontWeight: '500'
                        }}>
                          {data.jobTitle} | {data.company}
                        </p>
                      )}
                    </td>
                    {data.showCompanyLogo && data.companyLogoUrl && (
                      <td style={{ width: '120px', textAlign: 'right', verticalAlign: 'top' }}>
                        <img
                          src={generateImageUrl(data.companyLogoUrl)}
                          alt={data.company}
                          style={{ maxWidth: '110px', maxHeight: '60px', objectFit: 'contain' }}
                        />
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td style={{ paddingTop: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    {data.showProfileImage && data.profileImageUrl && (
                      <td style={{ width: '80px', verticalAlign: 'top' }}>
                        <img
                          src={generateImageUrl(data.profileImageUrl)}
                          alt={data.fullName}
                          style={{ 
                            width: '70px', 
                            height: '70px', 
                            objectFit: 'cover',
                            borderRadius: '0',
                            border: `1px solid ${data.secondaryColor}`
                          }}
                        />
                      </td>
                    )}
                    <td style={{ verticalAlign: 'top', paddingLeft: data.showProfileImage && data.profileImageUrl ? '15px' : '0' }}>
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          {data.phoneNumber && (
                            <tr>
                              <td style={{ 
                                fontSize: '13px', 
                                color: '#444', 
                                paddingBottom: '5px',
                                display: 'flex',
                                alignItems: 'center' 
                              }}>
                                <span style={{ 
                                  display: 'inline-block',
                                  width: '8px',
                                  height: '8px',
                                  backgroundColor: data.secondaryColor,
                                  marginRight: '8px'
                                }}></span>
                                <a href={`tel:${data.phoneNumber}`} style={{ color: '#444', textDecoration: 'none' }}>{data.phoneNumber}</a>
                              </td>
                            </tr>
                          )}
                          {data.email && (
                            <tr>
                              <td style={{ 
                                fontSize: '13px', 
                                color: '#444', 
                                paddingBottom: '5px',
                                display: 'flex',
                                alignItems: 'center' 
                              }}>
                                <span style={{ 
                                  display: 'inline-block',
                                  width: '8px',
                                  height: '8px',
                                  backgroundColor: data.secondaryColor,
                                  marginRight: '8px'
                                }}></span>
                                <a href={`mailto:${data.email}`} style={{ color: '#444', textDecoration: 'none' }}>{data.email}</a>
                              </td>
                            </tr>
                          )}
                          {data.website && (
                            <tr>
                              <td style={{ 
                                fontSize: '13px', 
                                color: '#444', 
                                paddingBottom: '5px',
                                display: 'flex',
                                alignItems: 'center' 
                              }}>
                                <span style={{ 
                                  display: 'inline-block',
                                  width: '8px',
                                  height: '8px',
                                  backgroundColor: data.secondaryColor,
                                  marginRight: '8px'
                                }}></span>
                                <a href={data.website} style={{ color: '#444', textDecoration: 'none' }}>{data.website.replace(/^https?:\/\//, '')}</a>
                              </td>
                            </tr>
                          )}
                          {data.showAddress && data.address && (
                            <tr>
                              <td style={{ 
                                fontSize: '13px', 
                                color: '#444', 
                                paddingBottom: '5px',
                                display: 'flex',
                                alignItems: 'center' 
                              }}>
                                <span style={{ 
                                  display: 'inline-block',
                                  width: '8px',
                                  height: '8px',
                                  backgroundColor: data.secondaryColor,
                                  marginRight: '8px'
                                }}></span>
                                {data.address}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          
          {data.socialLinks.length > 0 && (
            <tr>
              <td style={{ paddingTop: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td>
                        <table style={{ borderCollapse: 'collapse' }}>
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
                                  <td key={index} style={{ paddingRight: '10px' }}>
                                    <a href={link.url} style={{ 
                                      color: '#fff', 
                                      textDecoration: 'none',
                                      backgroundColor: data.primaryColor,
                                      width: '26px',
                                      height: '26px',
                                      borderRadius: '3px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}>
                                      <Icon size={14} />
                                    </a>
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
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
  }

  // For HTML export (no React components, only inline styles)
  const socialIconHtml = (platform: string, url: string) => {
    const iconUrl = socialIconPngUrls[platform as keyof typeof socialIconPngUrls] || socialIconPngUrls.linkedin;
    
    return `<a href="${url}" target="_blank" style="color:#fff;text-decoration:none;background-color:${data.primaryColor};width:26px;height:26px;border-radius:3px;display:inline-block;text-align:center;line-height:26px;"><img src="${iconUrl}" alt="${platform}" width="14" height="14" style="filter: invert(1);width:14px;height:14px;" /></a>`;
  };

  const bulletPoint = `<span style="display:inline-block;width:8px;height:8px;background-color:${data.secondaryColor};margin-right:8px;"></span>`;

  return `
    <table cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;margin:0;padding:0;width:100%;max-width:500px;font-family:${data.font},-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
      <tr>
        <td style="padding:0;">
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              <td style="border-left:4px solid ${data.primaryColor};padding-left:15px;">
                <p style="margin:0;padding:0;color:${data.primaryColor};font-size:22px;line-height:28px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                  ${data.fullName}
                </p>
                ${data.jobTitle ? `
                <p style="margin:0;padding:4px 0 15px;font-size:14px;line-height:20px;color:#444;font-weight:500;">
                  ${data.jobTitle} | ${data.company}
                </p>` : ''}
              </td>
              ${data.showCompanyLogo && data.companyLogoUrl ? `
              <td style="width:120px;vertical-align:top;text-align:right;">
                <img src="${data.companyLogoUrl}" alt="${data.company}" width="110" style="max-width:110px;max-height:60px;" />
              </td>` : ''}
            </tr>
          </table>
          
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:12px;">
            <tr>
              ${data.showProfileImage && data.profileImageUrl ? `
              <td style="width:80px;vertical-align:top;">
                <img src="${data.profileImageUrl}" alt="${data.fullName}" width="70" height="70" style="width:70px;height:70px;object-fit:cover;border:1px solid ${data.secondaryColor};" />
              </td>` : ''}
              <td style="vertical-align:top;padding-left:${data.showProfileImage && data.profileImageUrl ? '15px' : '0'};">
                <table cellpadding="0" cellspacing="0" border="0">
                  ${data.phoneNumber ? `
                  <tr>
                    <td style="padding:0 0 5px;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="font-size:13px;line-height:18px;color:#444;">${bulletPoint}<a href="tel:${data.phoneNumber}" style="color:#444;text-decoration:none;">${data.phoneNumber}</a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ''}
                  ${data.email ? `
                  <tr>
                    <td style="padding:0 0 5px;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="font-size:13px;line-height:18px;color:#444;">${bulletPoint}<a href="mailto:${data.email}" style="color:#444;text-decoration:none;">${data.email}</a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ''}
                  ${data.website ? `
                  <tr>
                    <td style="padding:0 0 5px;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="font-size:13px;line-height:18px;color:#444;">${bulletPoint}<a href="${data.website}" style="color:#444;text-decoration:none;">${data.website.replace(/^https?:\/\//, '')}</a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ''}
                  ${data.showAddress && data.address ? `
                  <tr>
                    <td style="padding:0 0 5px;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="font-size:13px;line-height:18px;color:#444;">${bulletPoint}${data.address}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>` : ''}
                </table>
              </td>
            </tr>
          </table>
          
          ${data.socialLinks.length > 0 ? `
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:12px;">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    ${data.socialLinks.map(link => `
                    <td style="padding:0 10px 0 0;">${socialIconHtml(link.platform, link.url)}</td>`).join('')}
                  </tr>
                </table>
              </td>
            </tr>
          </table>` : ''}
        </td>
      </tr>
    </table>
  `;
};

export default ExecutiveTemplate;
