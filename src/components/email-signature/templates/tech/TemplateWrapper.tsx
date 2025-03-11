
import React, { ReactNode } from "react";
import { SignatureData } from "@/types/email-signature";

interface TemplateWrapperProps {
  data: SignatureData;
  children: ReactNode;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ data, children }) => {
  return (
    <table cellPadding={0} cellSpacing={0} border={0} width={600} style={{ 
      fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
      color: data.colors.text || "#333333",
      borderCollapse: "collapse"
    }}>
      <tr>
        <td style={{
          padding: "1px",
          backgroundColor: data.colors.primary || "#4F46E5"
        }}>
          <table cellPadding={0} cellSpacing={0} border={0} width="100%" style={{
            backgroundColor: "#FFFFFF",
            borderCollapse: "collapse"
          }}>
            <tr>
              <td style={{ padding: "24px" }}>
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
