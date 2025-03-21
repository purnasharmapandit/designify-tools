import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import HelpCenter from './pages/HelpCenter';
import Pricing from './pages/Pricing';
import BlogPostPage from './pages/BlogPostPage';
import CreateLogo from './pages/blogs/CreateLogo';
import CustomizingProfilePicture from './pages/blogs/CustomizingProfilePicture';
import BusinessCards from './pages/blogs/BusinessCards';
import ExportingDesigns from './pages/blogs/ExportingDesigns';
import BillingSubscriptions from './pages/blogs/BillingSubscriptions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/pricing" element={<Pricing />} />
      
      {/* Blog routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/blogs/create-logo" element={<CreateLogo />} />
      <Route path="/blogs/customizing-profile-picture" element={<CustomizingProfilePicture />} />
      <Route path="/blogs/business-cards" element={<BusinessCards />} />
      <Route path="/blogs/exporting-designs" element={<ExportingDesigns />} />
      <Route path="/blogs/billing-subscriptions" element={<BillingSubscriptions />} />
    </Routes>
  );
}

export default App;
