
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";
import CreateLogo from "./pages/blogs/CreateLogo";
import ExportingDesigns from "./pages/blogs/ExportingDesigns";
import CustomizingProfilePicture from "./pages/blogs/CustomizingProfilePicture";
import BusinessCards from "./pages/blogs/BusinessCards";
import BillingSubscriptions from "./pages/blogs/BillingSubscriptions";
import LogoMaker from "./pages/logo-maker/LogoMaker";
import LogoEditor from "./pages/logo-maker/LogoEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/blogs/create-logo" element={<CreateLogo />} />
          <Route path="/blogs/exporting-designs" element={<ExportingDesigns />} />
          <Route path="/blogs/customizing-profile-picture" element={<CustomizingProfilePicture />} />
          <Route path="/blogs/business-cards" element={<BusinessCards />} />
          <Route path="/blogs/billing-subscriptions" element={<BillingSubscriptions />} />
          <Route path="/logo-maker" element={<LogoMaker />} />
          <Route path="/logo-maker/editor/:id" element={<LogoEditor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
