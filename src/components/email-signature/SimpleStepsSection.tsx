
import React from "react";

const SimpleStepsSection = () => {
  return (
    <section className="py-16 px-4 bg-indigo-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Three Simple Steps
          </h2>
          <p className="text-indigo-200">
            Create your professional email signature in minutes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-700/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Fill Your Details</h3>
            <p className="text-indigo-200">
              Add your personal information, upload images, and choose social links
            </p>
          </div>
          
          <div className="bg-purple-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-700/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Customize Design</h3>
            <p className="text-purple-200">
              Pick a template, adjust colors, and customize the layout to match your style
            </p>
          </div>
          
          <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-700/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Export & Use</h3>
            <p className="text-indigo-200">
              Copy your signature or download the HTML to use in any email client
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleStepsSection;
