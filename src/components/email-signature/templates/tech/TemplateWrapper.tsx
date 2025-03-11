
import React, { ReactNode } from "react";
import { SignatureData } from "@/types/email-signature";

interface TemplateWrapperProps {
  data: SignatureData;
  children: ReactNode;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ data, children }) => {
  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ 
      width: "600px",
      fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
      color: data.colors.text || "#333333",
      borderCollapse: "collapse"
    }}>
      <tbody>
        <tr>
          <td style={{
            padding: "1px",
            backgroundColor: data.colors.primary || "#4F46E5"
          }}>
            <table cellPadding={0} cellSpacing={0} border={0} style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderCollapse: "collapse"
            }}>
              <tbody>
                <tr>
                  <td style={{ padding: "24px" }}>
                    {children}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TemplateWrapper;
