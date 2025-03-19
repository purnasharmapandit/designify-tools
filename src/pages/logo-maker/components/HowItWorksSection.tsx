
import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our AI logo generator makes creating a professional logo easier than ever.
          Follow these simple steps to get your perfect logo.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Describe Your Brand</h3>
            <p className="text-gray-600">
              Tell us about your business and the style of logo you're looking for.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Generate Options</h3>
            <p className="text-gray-600">
              Our AI will create multiple logo options based on your description.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Customize & Download</h3>
            <p className="text-gray-600">
              Fine-tune your favorite logo and download in multiple formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
