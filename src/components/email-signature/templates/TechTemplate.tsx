
import React from "react";
import { SignatureData } from "@/types/email-signature";
import ProfileSection from "./tech/ProfileSection";
import ContactSection from "./tech/ContactSection";
import SocialSection from "./tech/SocialSection";
import TemplateWrapper from "./tech/TemplateWrapper";

interface TechTemplateProps {
  data: SignatureData;
}

const TechTemplate: React.FC<TechTemplateProps> = ({ data }) => {
  return (
    <TemplateWrapper data={data}>
      <ProfileSection data={data} />
      <ContactSection data={data} />
      <SocialSection data={data} />
    </TemplateWrapper>
  );
};

export default TechTemplate;
