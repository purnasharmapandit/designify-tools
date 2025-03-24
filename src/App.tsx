
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HelpCenter from "./pages/HelpCenter";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Tools from "./pages/Tools";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import ScrollToTop from "./components/ScrollToTop";
import CreateLogo from "./pages/blogs/CreateLogo";
import ExportingDesigns from "./pages/blogs/ExportingDesigns";
import CustomizingProfilePicture from "./pages/blogs/CustomizingProfilePicture";
import BusinessCards from "./pages/blogs/BusinessCards";
import BillingSubscriptions from "./pages/blogs/BillingSubscriptions";
import LogoMaker from "./pages/logo-maker/LogoMaker";
import LogoEditor from "./pages/logo-maker/LogoEditor";
import { BlogProvider } from "./contexts/BlogContext";
import QRCodeGenerator from "./pages/qr-code/QRCodeGenerator";
import PaidQRCodeGenerator from "./pages/qr-code/PaidQRCodeGenerator";
import ColorPaletteGenerator from "./pages/ColorPaletteGenerator";
import IconGenerator from "./pages/IconGenerator";
import EmailSignatureGenerator from "./pages/email-signature/EmailSignatureGenerator";
import BackgroundRemover from "./pages/background-remover/BackgroundRemover";
import BusinessCardGenerator from "./pages/business-card/BusinessCardGenerator";
import BusinessCardEditor from "./pages/business-card/BusinessCardEditor";
import SocialMediaKit from "./pages/social-media-kit/SocialMediaKit";
import TypographyTool from "./pages/typography-tool/TypographyTool";
import MockupGenerator from "./pages/mockup-generator/MockupGenerator";
import PresentationMaker from "./pages/presentation-maker/PresentationMaker";
import ImageEditor from "./pages/image-editor/ImageEditor";
import InfographicsGenerator from "./pages/infographics/InfographicsGenerator";
import HeadshotGenerator from "./pages/headshot-generator/HeadshotGenerator";
import SocialBannerMaker from "./pages/social-banner/SocialBannerMaker";
import MeshGradientGenerator from "./pages/MeshGradientGenerator";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="relative">
      <QueryClientProvider client={queryClient}>
        <BlogProvider>
          <BrowserRouter>
            <AuthProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/help-center" element={<HelpCenter />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blogs/create-logo" element={<CreateLogo />} />
                  <Route path="/blogs/exporting-designs" element={<ExportingDesigns />} />
                  <Route path="/blogs/customizing-profile-picture" element={<CustomizingProfilePicture />} />
                  <Route path="/blogs/business-cards" element={<BusinessCards />} />
                  <Route path="/blogs/billing-subscriptions" element={<BillingSubscriptions />} />
                  <Route path="/logo-maker" element={<LogoMaker />} />
                  <Route path="/logo-maker/editor/:id" element={<LogoEditor />} />
                  <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
                  <Route path="/qr-code/premium" element={<PaidQRCodeGenerator />} />
                  <Route path="/color-palette-generator" element={<ColorPaletteGenerator />} />
                  <Route path="/icon-generator" element={<IconGenerator />} />
                  <Route path="/email-signature-generator" element={<EmailSignatureGenerator />} />
                  <Route path="/background-remover" element={<BackgroundRemover />} />
                  <Route path="/business-card-generator" element={<BusinessCardGenerator />} />
                  <Route path="/business-card-editor" element={<BusinessCardEditor />} />
                  <Route path="/social-media-kit" element={<SocialMediaKit />} />
                  <Route path="/typography-tool" element={<TypographyTool />} />
                  <Route path="/mockup-generator" element={<MockupGenerator />} />
                  <Route path="/presentation-maker" element={<PresentationMaker />} />
                  <Route path="/image-editor" element={<ImageEditor />} />
                  <Route path="/infographics-generator" element={<InfographicsGenerator />} />
                  <Route path="/headshot-generator" element={<HeadshotGenerator />} />
                  <Route path="/social-banner-maker" element={<SocialBannerMaker />} />
                  <Route path="/mesh-gradient-generator" element={<MeshGradientGenerator />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </TooltipProvider>
            </AuthProvider>
          </BrowserRouter>
        </BlogProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
