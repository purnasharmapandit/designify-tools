
import React, { ReactNode } from "react";
import { SignatureData } from "@/types/email-signature";

interface TemplateWrapperProps {
  data: SignatureData;
  children: ReactNode;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ data, children }) => {
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
                {children}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TemplateWrapper;
