import React from "react";
import { EmailSignatureData } from "@/types/email-signature";
import { generateImageUrl } from "@/utils/email-signature-utils";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";

interface ProfessionalTemplateProps {
  data: EmailSignatureData;
  isPreview?: boolean;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data, isPreview = false }) => {
  // For preview in React
  if (isPreview) {
    return (
      <table style={{ fontFamily: data.font, borderCollapse: 'collapse', margin: 0, padding: 0, width: '100%', maxWidth: '500px' }}>
        <tbody>
          <tr>
            {data.showProfileImage && data.profileImage && (
              <td style={{ verticalAlign: 'top', paddingRight: '15px', width: '100px' }}>
                <img
                  src={generateImageUrl(data.profileImage)}
                  alt={data.fullName}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </td>
            )}
            <td style={{ verticalAlign: 'top' }}>
              <table style={{ borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td>
                      <h2 style={{ margin: '0 0 5px', color: data.primaryColor, fontSize: '18px', fontWeight: 'bold' }}>
                        {data.fullName}
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ margin: '0 0 5px', fontSize: '14px', color: '#666' }}>
                        {data.jobTitle} {data.company ? `at ${data.company}` : ''}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingTop: '10px' }}>
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          {data.phoneNumber && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#666', paddingBottom: '3px' }}>
                                Phone: <a href={`tel:${data.phoneNumber}`} style={{ color: data.secondaryColor, textDecoration: 'none' }}>{data.phoneNumber}</a>
                              </td>
                            </tr>
                          )}
                          {data.email && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#666', paddingBottom: '3px' }}>
                                Email: <a href={`mailto:${data.email}`} style={{ color: data.secondaryColor, textDecoration: 'none' }}>{data.email}</a>
                              </td>
                            </tr>
                          )}
                          {data.website && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#666', paddingBottom: '3px' }}>
                                Web: <a href={data.website} style={{ color: data.secondaryColor, textDecoration: 'none' }}>{data.website.replace(/^https?:\/\//, '')}</a>
                              </td>
                            </tr>
                          )}
                          {data.showAddress && data.address && (
                            <tr>
                              <td style={{ fontSize: '13px', color: '#666', paddingBottom: '3px' }}>
                                Address: {data.address}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  {data.socialLinks.length > 0 && (
                    <tr>
                      <td style={{ paddingTop: '10px' }}>
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
                                  <td key={index} style={{ paddingRight: '8px' }}>
                                    <a href={link.url} style={{ color: data.primaryColor, textDecoration: 'none' }}>
                                      <Icon size={16} />
                                    </a>
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </td>
            {data.showCompanyLogo && data.companyLogo && (
              <td style={{ verticalAlign: 'top', paddingLeft: '15px', width: '120px', textAlign: 'right' }}>
                <img
                  src={generateImageUrl(data.companyLogo)}
                  alt={data.company}
                  style={{ maxWidth: '100px', maxHeight: '60px', objectFit: 'contain' }}
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    );
  }

  // For HTML export (no React components, only inline styles)
  const socialIconHtml = (platform: string, url: string) => {
    const iconSvgs: Record<string, string> = {
      facebook: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/facebook.svg" alt="Facebook" width="16" height="16" style="filter: invert(1);" />`,
      twitter: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/twitter.svg" alt="Twitter" width="16" height="16" style="filter: invert(1);" />`,
      linkedin: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg" alt="LinkedIn" width="16" height="16" style="filter: invert(1);" />`,
      instagram: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/instagram.svg" alt="Instagram" width="16" height="16" style="filter: invert(1);" />`,
      youtube: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/youtube.svg" alt="YouTube" width="16" height="16" style="filter: invert(1);" />`,
      github: `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg" alt="GitHub" width="16" height="16" style="filter: invert(1);" />`,
    };

    return `<a href="${url}" target="_blank" style="text-decoration:none;padding:0;margin:0;">${iconSvgs[platform] || iconSvgs.linkedin}</a>`;
  };

  return `
    <table cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;margin:0;padding:0;width:100%;max-width:500px;font-family:${data.font},-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
      <tr>
        <td style="padding:0;">
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              ${data.showProfileImage && data.profileImage ? `
              <td style="padding:0 15px 0 0;width:100px;vertical-align:top;">
                <img src="${generateImageUrl(data.profileImage)}" alt="${data.fullName}" width="80" height="80" style="border-radius:50%;width:80px;height:80px;object-fit:cover;" />
              </td>` : ''}
              <td style="padding:0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                  <tr>
                    <td style="padding:0;">
                      <p style="margin:0;padding:0;color:${data.primaryColor};font-size:18px;line-height:24px;font-weight:600;">
                        ${data.fullName}
                      </p>
                      ${data.jobTitle ? `
                      <p style="margin:0;padding:4px 0 0;font-size:14px;line-height:20px;color:#666666;">
                        ${data.jobTitle} ${data.company ? `at ${data.company}` : ''}
                      </p>` : ''}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0 0;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding:0;">
                            ${data.phoneNumber ? `
                            <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                              Phone: <a href="tel:${data.phoneNumber}" style="color:${data.secondaryColor};text-decoration:none;">${data.phoneNumber}</a>
                            </p>` : ''}
                            ${data.email ? `
                            <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                              Email: <a href="mailto:${data.email}" style="color:${data.secondaryColor};text-decoration:none;">${data.email}</a>
                            </p>` : ''}
                            ${data.website ? `
                            <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                              Web: <a href="${data.website}" style="color:${data.secondaryColor};text-decoration:none;">${data.website.replace(/^https?:\/\//, '')}</a>
                            </p>` : ''}
                            ${data.showAddress && data.address ? `
                            <p style="margin:0;padding:0 0 4px;font-size:13px;line-height:18px;color:#666666;">
                              Address: ${data.address}
                            </p>` : ''}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  ${data.socialLinks.length > 0 ? `
                  <tr>
                    <td style="padding:12px 0 0;">
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          ${data.socialLinks.map(link => `
                          <td style="padding:0 8px 0 0;vertical-align:middle;">
                            ${socialIconHtml(link.platform, link.url)}
                          </td>`).join('')}
                        </tr>
                      </table>
                    </td>
                  </tr>` : ''}
                </table>
              </td>
              ${data.showCompanyLogo && data.companyLogo ? `
              <td style="padding:0 0 0 15px;width:120px;vertical-align:top;text-align:right;">
                <img src="${generateImageUrl(data.companyLogo)}" alt="${data.company}" width="100" style="max-width:100px;height:auto;" />
              </td>` : ''}
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
};

export default ProfessionalTemplate;
