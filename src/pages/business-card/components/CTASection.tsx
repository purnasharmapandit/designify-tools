
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CTASectionProps {
  handleStartCustomizing: () => void;
}

const CTASection = ({ handleStartCustomizing }: CTASectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Professional Business Cards?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of professionals who use our platform to create stunning business cards that make a lasting impression.</p>
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
              onClick={handleStartCustomizing}
            >
              Start Creating For Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-sm opacity-80">No credit card required • Free plan available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
