import React from "react";
import { EmailSignatureData } from "@/types/email-signature";
import { generateImageUrl } from "@/utils/email-signature-utils";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import { socialIconUrls } from "./index";

interface MinimalistTemplateProps {
  data: EmailSignatureData;
  isPreview?: boolean;
}

const MinimalistTemplate: React.FC<MinimalistTemplateProps> = ({ data, isPreview = false }) => {
  // For preview in React
  if (isPreview) {
    return (
      <table style={{ fontFamily: data.font, borderCollapse: 'collapse', margin: 0, padding: 0, width: '100%', maxWidth: '500px' }}>
        <tbody>
          <tr>
            <td>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                  <tr>
                    <td>
                      <h3 style={{ margin: '0 0 5px', color: data.primaryColor, fontSize: '16px', fontWeight: '600' }}>
                        {data.fullName}
                      </h3>
                      {data.jobTitle && (
                        <p style={{ margin: '0 0 15px', fontSize: '14px', color: '#888' }}>
                          {data.jobTitle} {data.company ? `at ${data.company}` : ''}
                        </p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: '5px', paddingBottom: '5px' }}>
              <div style={{ height: '1px', backgroundColor: '#eee', width: '100%' }}></div>
            </td>
          </tr>
          <tr>
            <td>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: 'middle' }}>
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          {data.phoneNumber && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#888', paddingBottom: '2px' }}>
                                <a href={`tel:${data.phoneNumber}`} style={{ color: data.secondaryColor, textDecoration: 'none' }}>{data.phoneNumber}</a>
                              </td>
                            </tr>
                          )}
                          {data.email && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#888', paddingBottom: '2px' }}>
                                <a href={`mailto:${data.email}`} style={{ color: data.secondaryColor, textDecoration: 'none' }}>{data.email}</a>
                              </td>
                            </tr>
                          )}
                          {data.website && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#888', paddingBottom: '2px' }}>
                                <a href={data.website} style={{ color: data.secondaryColor, textDecoration: 'none' }}>{data.website.replace(/^https?:\/\//, '')}</a>
                              </td>
                            </tr>
                          )}
                          {data.showAddress && data.address && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#888', paddingBottom: '2px' }}>
                                {data.address}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </td>
                    {data.socialLinks.length > 0 && (
                      <td style={{ verticalAlign: 'middle', textAlign: 'right' }}>
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
                                      <Icon size={14} />
                                    </a>
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
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
  }

  // For HTML export (no React components, only inline styles)
  const socialIconHtml = (platform: string, url: string) => {
    // Use the CDN icon URLs instead of SVG components for better email client compatibility
    const iconUrl = socialIconUrls[platform as keyof typeof socialIconUrls] || socialIconUrls.linkedin;
    
    return `<a href="${url}" target="_blank" style="text-decoration:none;padding:0;margin:0;display:inline-block;"><img src="${iconUrl}" alt="${platform}" width="14" height="14" style="filter: brightness(0) saturate(100%) invert(25%) sepia(95%) saturate(1467%) hue-rotate(210deg) brightness(94%) contrast(96%);width:14px;height:14px;border:0;" /></a>`;
  };

  return `
    <table cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;margin:0;padding:0;width:100%;max-width:500px;font-family:${data.font},-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
      <tr>
        <td style="padding:0;">
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              <td style="padding:0;">
                <p style="margin:0;padding:0;color:${data.primaryColor};font-size:16px;line-height:22px;font-weight:600;">
                  ${data.fullName}
                </p>
                ${data.jobTitle ? `
                <p style="margin:0;padding:4px 0 15px;font-size:14px;line-height:20px;color:#666666;">
                  ${data.jobTitle} ${data.company ? `at ${data.company}` : ''}
                </p>` : ''}
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              <td style="padding:8px 0;border-top:1px solid #eeeeee;"></td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              <td style="padding:0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:0;">
                      ${data.phoneNumber ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                        <a href="tel:${data.phoneNumber}" style="color:${data.secondaryColor};text-decoration:none;">${data.phoneNumber}</a>
                      </p>` : ''}
                      ${data.email ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                        <a href="mailto:${data.email}" style="color:${data.secondaryColor};text-decoration:none;">${data.email}</a>
                      </p>` : ''}
                      ${data.website ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                        <a href="${data.website}" style="color:${data.secondaryColor};text-decoration:none;">${data.website.replace(/^https?:\/\//, '')}</a>
                      </p>` : ''}
                      ${data.showAddress && data.address ? `
                      <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                        ${data.address}
                      </p>` : ''}
                    </td>
                  </tr>
                </table>
              </td>
              ${data.socialLinks.length > 0 ? `
              <td style="padding:0;vertical-align:top;text-align:right;">
                <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                  <tr>
                    ${data.socialLinks.map(link => `
                    <td style="padding-left:8px;vertical-align:top;">
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

export default MinimalistTemplate;
