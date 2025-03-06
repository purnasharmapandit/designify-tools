
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessCards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/help-center" className="inline-flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Link>
          
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold font-display mb-6">Creating Business Cards from Templates</h1>
            <p className="text-gray-500 mb-8">Published on September 5, 2023 · 7 min read</p>
            
            <img 
              src="/lovable-uploads/business-card.png" 
              alt="Business Card Templates" 
              className="w-full h-auto rounded-xl mb-8"
            />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The Importance of Business Cards</h2>
            <p>
              Even in our digital age, business cards remain a powerful networking tool and a tangible 
              representation of your brand. A well-designed business card makes a lasting impression and 
              helps people remember you and your business.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Using Our Business Card Templates</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 1: Browse Templates</h3>
            <p>
              Start by browsing our extensive library of professionally designed business card templates. 
              Filter by industry, style, orientation, and color scheme to find templates that match your brand.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 2: Select Your Template</h3>
            <p>
              Click on any template to preview it in detail. You can see both the front and back designs. 
              When you find one you like, select it to start customizing.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 3: Add Your Information</h3>
            <p>
              Replace the placeholder text with your own details:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Name and job title</li>
              <li>Company name and logo</li>
              <li>Contact information (phone, email, website)</li>
              <li>Business address</li>
              <li>Social media handles (optional)</li>
              <li>QR code linking to your website or digital profile (optional)</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 4: Customize the Design</h3>
            <p>
              Personalize the template to match your brand identity:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Change colors to match your brand palette</li>
              <li>Upload your logo or create one with our Logo Maker</li>
              <li>Adjust fonts and text sizes</li>
              <li>Add or remove design elements</li>
              <li>Modify the layout if needed</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 5: Preview and Finalize</h3>
            <p>
              Use our preview tool to see exactly how your business card will look when printed. Check for any typos or 
              design issues, and make final adjustments as needed.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 6: Export or Print</h3>
            <p>
              When you're satisfied with your design, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Export as a print-ready PDF file to send to your preferred printing service</li>
              <li>Save as image files for digital sharing</li>
              <li>Order prints directly through our platform (premium feature)</li>
            </ul>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-5 mt-8">
              <h3 className="text-lg font-bold mb-2">Best Practices for Business Cards</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep the design clean and uncluttered</li>
                <li>Use standard dimensions (3.5" × 2" in the US, 85 × 55 mm internationally)</li>
                <li>Include only essential information</li>
                <li>Ensure text is legible (minimum 8pt font)</li>
                <li>Leave a small margin around the edges for printing tolerance</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessCards;
