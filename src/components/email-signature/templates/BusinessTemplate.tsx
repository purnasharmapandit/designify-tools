
import React from "react";
import { SignatureData } from "@/types/email-signature";
import BusinessWrapper from "./business/BusinessWrapper";
import BusinessHeaderSection from "./business/BusinessHeaderSection";
import BusinessContactSection from "./business/BusinessContactSection";
import BusinessSocialSection from "./business/BusinessSocialSection";

interface BusinessTemplateProps {
  data: SignatureData;
}

const BusinessTemplate: React.FC<BusinessTemplateProps> = ({ data }) => {
  return (
    <BusinessWrapper data={data}>
      <BusinessHeaderSection data={data} />
      <BusinessContactSection data={data} />
      <BusinessSocialSection data={data} />
    </BusinessWrapper>
  );
};

export default BusinessTemplate;
