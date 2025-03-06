
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ExportingDesigns = () => {
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
            <h1 className="text-4xl font-bold font-display mb-6">Exporting Designs in Different Formats</h1>
            <p className="text-gray-500 mb-8">Published on July 2, 2023 · 6 min read</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Understanding File Formats</h2>
            <p>
              Choosing the right file format is crucial for your design project. Different platforms and use cases 
              require specific formats to ensure optimal quality and compatibility. This guide will help you 
              understand when to use each format and how to export your designs effectively.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Raster Formats (Pixel-Based)</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>PNG:</strong> Best for web graphics with transparency. Ideal for logos and images that need 
                to be placed on different colored backgrounds.
              </li>
              <li>
                <strong>JPG/JPEG:</strong> Perfect for photographs and complex images with many colors. Smaller file 
                size but doesn't support transparency.
              </li>
              <li>
                <strong>WebP:</strong> Modern format with excellent compression, ideal for web usage. Supports both 
                transparency and animation.
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Vector Formats (Scale-Based)</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>SVG:</strong> Perfect for logos and icons that need to be resized without quality loss. 
                Works great on the web and for print.
              </li>
              <li>
                <strong>PDF:</strong> Industry standard for documents and designs that will be printed professionally.
              </li>
              <li>
                <strong>EPS:</strong> Compatible with most design software, ideal for sending to print shops.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How to Export Your Designs</h2>
            <p>
              Our platform makes it easy to export your designs in various formats. Here's how:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 1: Finalize Your Design</h3>
            <p>
              Make sure your design is complete and ready for export. Check all elements, colors, and sizing.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 2: Click the Export Button</h3>
            <p>
              In the top right corner of the editor, click on the "Export" button to open the export panel.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 3: Choose Your Format</h3>
            <p>
              Select the format that best suits your needs from the dropdown menu. You can export in multiple 
              formats simultaneously.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 4: Set Quality and Size</h3>
            <p>
              Adjust the quality settings and dimensions based on where your design will be used. Higher quality means 
              larger file sizes.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Step 5: Download</h3>
            <p>
              Click the "Download" button to save your design to your device. Files will be saved to your default 
              download location.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 mt-8">
              <h3 className="text-lg font-bold mb-2">Note for Different Plan Levels</h3>
              <p>
                Export options vary by subscription plan:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Basic Plan:</strong> PNG, JPG, and SVG at 720p resolution</li>
                <li><strong>Pro Plan:</strong> All basic formats plus PDF at 1080p resolution</li>
                <li><strong>Enterprise Plan:</strong> All formats at 4K resolution with batch export capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExportingDesigns;
