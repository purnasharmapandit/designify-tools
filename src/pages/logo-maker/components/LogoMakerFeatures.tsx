
import React from "react";
import { Wand2, Palette, Download } from "lucide-react";

const LogoGeneratorFeatures = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Wand2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">AI-Powered Generation</h3>
        <p className="text-gray-600">Our advanced AI creates unique logo designs based on your business details and preferences.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
          <Palette className="h-6 w-6 text-secondary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Unlimited Customization</h3>
        <p className="text-gray-600">Fine-tune your logo with our easy-to-use editor. Adjust colors, fonts, layout, and more.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
          <Download className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-lg font-semibold mb-2">High-Quality Downloads</h3>
        <p className="text-gray-600">Download your logo in various formats including SVG and PNG with transparent backgrounds.</p>
      </div>
    </div>
  );
};

export default LogoGeneratorFeatures;
