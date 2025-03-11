
import React, { ReactNode } from "react";
import { SignatureData } from "@/types/email-signature";

interface TemplateWrapperProps {
  data: SignatureData;
  children: ReactNode;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ data, children }) => {
  return (
    <table cellPadding="0" cellSpacing="0" border="0" width="600" style={{ 
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: data.colors.text,
      borderRadius: "16px",
      overflow: "hidden"
    }}>
      <tr>
        <td style={{
          background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary})`,
          padding: "1px",
          borderRadius: "16px"
        }}>
          <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "24px"
          }}>
            <tr>
              <td>
                {children}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

export default TemplateWrapper;
