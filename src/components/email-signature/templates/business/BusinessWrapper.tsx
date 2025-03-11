
import React, { ReactNode } from "react";
import { SignatureData } from "@/types/email-signature";

interface BusinessWrapperProps {
  data: SignatureData;
  children: ReactNode;
}

const BusinessWrapper: React.FC<BusinessWrapperProps> = ({ data, children }) => {
  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ 
      width: "600px",
      fontFamily: data.font || "Arial, 'Helvetica Neue', Helvetica, sans-serif",
      color: data.colors.text || "#333333",
      borderCollapse: "collapse"
    }}>
      <tbody>
        <tr>
          <td>
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BusinessWrapper;
