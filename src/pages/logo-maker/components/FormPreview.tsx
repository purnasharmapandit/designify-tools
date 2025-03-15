
import React from "react";
import { Type } from "lucide-react";

const FormPreview = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl">
      <div className="aspect-square rounded-xl bg-white shadow-sm border flex items-center justify-center">
        <div className="text-center px-6">
          <Type className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Logo Preview</h3>
          <p className="text-gray-500">Fill out the form and click "Generate Logos" to see AI-created logos for your business</p>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">How It Works</h3>
        <ol className="space-y-2 text-gray-600">
          <li className="flex gap-2">
            <span className="font-medium text-primary">1.</span> 
            <span>Enter your business details and preferences</span>
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-primary">2.</span> 
            <span>Our AI generates custom logo options</span>
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-primary">3.</span> 
            <span>Customize your favorite design</span>
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-primary">4.</span> 
            <span>Download in your preferred format</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FormPreview;
