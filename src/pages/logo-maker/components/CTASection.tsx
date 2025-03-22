
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Perfect Logo?</h2>
            <p className="text-xl mb-8 opacity-90">Start building your brand identity with a professional logo in just minutes.</p>
            <a href="#generator">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
              >
                Create Your Logo Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="mt-4 text-sm opacity-80">No credit card required • Get started in minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
