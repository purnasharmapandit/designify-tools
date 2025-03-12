
import React from "react";
import { EmailSignatureData } from "@/types/email-signature";
import { generateImageUrl } from "@/utils/email-signature-utils";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";

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
    const iconSvgs: Record<string, string> = {
      facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${data.primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
      twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${data.primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
      linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${data.primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
      instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${data.primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
      youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${data.primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
      github: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${data.primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    };

    return `<a href="${url}" style="color:${data.primaryColor};text-decoration:none;">${iconSvgs[platform] || iconSvgs.linkedin}</a>`;
  };

  const socialLinksHtml = data.socialLinks.length > 0 
    ? `<td style="vertical-align:middle;text-align:right;">
        <table style="border-collapse:collapse;display:inline-block;">
          <tbody>
            <tr>
              ${data.socialLinks.map((link) => 
                `<td style="padding-left:8px;">${socialIconHtml(link.platform, link.url)}</td>`
              ).join('')}
            </tr>
          </tbody>
        </table>
      </td>` 
    : '';

  const contactInfoHtml = `
    ${data.phoneNumber ? `<tr><td style="font-size:13px;color:#888;padding-bottom:2px;"><a href="tel:${data.phoneNumber}" style="color:${data.secondaryColor};text-decoration:none;">${data.phoneNumber}</a></td></tr>` : ''}
    ${data.email ? `<tr><td style="font-size:13px;color:#888;padding-bottom:2px;"><a href="mailto:${data.email}" style="color:${data.secondaryColor};text-decoration:none;">${data.email}</a></td></tr>` : ''}
    ${data.website ? `<tr><td style="font-size:13px;color:#888;padding-bottom:2px;"><a href="${data.website}" style="color:${data.secondaryColor};text-decoration:none;">${data.website.replace(/^https?:\/\//, '')}</a></td></tr>` : ''}
    ${data.showAddress && data.address ? `<tr><td style="font-size:13px;color:#888;padding-bottom:2px;">${data.address}</td></tr>` : ''}
  `;

  return `
    <table style="font-family:${data.font};border-collapse:collapse;margin:0;padding:0;width:100%;max-width:500px;">
      <tbody>
        <tr>
          <td>
            <table style="border-collapse:collapse;width:100%;">
              <tbody>
                <tr>
                  <td>
                    <h3 style="margin:0 0 5px;color:${data.primaryColor};font-size:16px;font-weight:600;">
                      ${data.fullName}
                    </h3>
                    ${data.jobTitle ? `<p style="margin:0 0 15px;font-size:14px;color:#888;">
                      ${data.jobTitle} ${data.company ? `at ${data.company}` : ''}
                    </p>` : ''}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top:5px;padding-bottom:5px;">
            <div style="height:1px;background-color:#eee;width:100%;"></div>
          </td>
        </tr>
        <tr>
          <td>
            <table style="border-collapse:collapse;width:100%;">
              <tbody>
                <tr>
                  <td style="vertical-align:middle;">
                    <table style="border-collapse:collapse;">
                      <tbody>
                        ${contactInfoHtml}
                      </tbody>
                    </table>
                  </td>
                  ${socialLinksHtml}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};

export default MinimalistTemplate;
