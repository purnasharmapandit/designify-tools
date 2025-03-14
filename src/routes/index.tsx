
import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Careers from "@/pages/Careers";
import Pricing from "@/pages/Pricing";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/Auth";
import HelpCenter from "@/pages/HelpCenter";
import Blog from "@/pages/Blog";
import Tools from "@/pages/Tools";
import ProtectedRoute from "@/components/ProtectedRoute";

// Blog posts
import CreateLogo from "@/pages/blogs/CreateLogo";
import ExportingDesigns from "@/pages/blogs/ExportingDesigns";
import CustomizingProfilePicture from "@/pages/blogs/CustomizingProfilePicture";
import BusinessCards from "@/pages/blogs/BusinessCards";
import BillingSubscriptions from "@/pages/blogs/BillingSubscriptions";

// Tools
import LogoMaker from "@/pages/logo-maker/LogoMaker";
import LogoEditor from "@/pages/logo-maker/LogoEditor";
import BusinessCardGenerator from "@/pages/business-card/BusinessCardGenerator";
import BusinessCardEditor from "@/pages/business-card/BusinessCardEditor";
import EmailSignatureGenerator from "@/pages/email-signature/EmailSignatureGenerator";
import QRCodeGenerator from "@/pages/qr-code/QRCodeGenerator";
import IconGenerator from "@/pages/IconGenerator";
import ColorPaletteGenerator from "@/pages/ColorPaletteGenerator";
import BackgroundRemover from "@/pages/background-remover/BackgroundRemover";

// Admin
import BlogAdmin from "@/pages/admin/BlogAdmin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/tools" element={<Tools />} />
      
      {/* Blog Posts */}
      <Route path="/blogs/create-logo" element={<CreateLogo />} />
      <Route path="/blogs/exporting-designs" element={<ExportingDesigns />} />
      <Route path="/blogs/customizing-profile-picture" element={<CustomizingProfilePicture />} />
      <Route path="/blogs/business-cards" element={<BusinessCards />} />
      <Route path="/blogs/billing-subscriptions" element={<BillingSubscriptions />} />
      
      {/* Tools */}
      <Route path="/logo-maker" element={<LogoMaker />} />
      <Route path="/logo-editor" element={<LogoEditor />} />
      <Route path="/business-card" element={<BusinessCardGenerator />} />
      <Route path="/business-card-editor" element={<BusinessCardEditor />} />
      <Route path="/email-signature" element={<EmailSignatureGenerator />} />
      <Route path="/qr-code" element={<QRCodeGenerator />} />
      <Route path="/icon-generator" element={<IconGenerator />} />
      <Route path="/color-palette" element={<ColorPaletteGenerator />} />
      <Route path="/background-remover" element={<BackgroundRemover />} />
      
      {/* Admin Routes */}
      <Route 
        path="/admin/blog" 
        element={
          <ProtectedRoute>
            <BlogAdmin />
          </ProtectedRoute>
        } 
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
