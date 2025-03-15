
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Start Creating Your Perfect Logo Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of businesses using our AI logo generator to create professional logos in minutes
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Create Your Logo Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  View Example Logos
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 p-8 lg:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-primary mb-2">100K+</div>
                  <p className="text-gray-600">Logos Created</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-secondary mb-2">95%</div>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-accent mb-2">5min</div>
                  <p className="text-gray-600">Average Design Time</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-brand-purple mb-2">24/7</div>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
