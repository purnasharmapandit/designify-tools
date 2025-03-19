
import React from "react";
import LogoGeneratorTool from "./LogoGeneratorTool";

const GeneratorSection = () => {
  return (
    <section className="py-16 bg-slate-50" id="generator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Logo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your brand and let our AI generate the perfect logo for you
          </p>
        </div>
        
        <LogoGeneratorTool />
      </div>
    </section>
  );
};

export default GeneratorSection;
