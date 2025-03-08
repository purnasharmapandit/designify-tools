
import React from "react";
import { Check, Zap, RefreshCw, Copy, Sparkles, Smartphone } from "lucide-react";

const GuideSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Use The Color Palette Generator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Generate Palettes</h3>
            </div>
            <p className="text-muted-foreground">
              Click the "Generate New Palette" button or press the <kbd className="px-2 py-1 bg-gray-100 border rounded text-xs">Space</kbd> key to create new color combinations instantly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Lock Colors</h3>
            </div>
            <p className="text-muted-foreground">
              Found a color you like? Click the lock icon or press <kbd className="px-2 py-1 bg-gray-100 border rounded text-xs">1-5</kbd> keys to lock colors so they won't change when generating new palettes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                <Copy className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Save Your Work</h3>
            </div>
            <p className="text-muted-foreground">
              Copy individual colors or export the entire palette in your preferred format (HEX, RGB, or CSS) to use in your projects.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Customize Palette Type</h3>
            </div>
            <p className="text-muted-foreground">
              Open settings with the gear icon or <kbd className="px-2 py-1 bg-gray-100 border rounded text-xs">S</kbd> key to choose from different palette types like analogous, monochromatic, or complementary.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Mobile Friendly</h3>
            </div>
            <p className="text-muted-foreground">
              Our tool works great on mobile devices. Swipe through colors and tap to copy individual shades for your design projects on the go.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Ready to Use</h3>
            </div>
            <p className="text-muted-foreground">
              All palette colors are carefully selected to work well together. Use them for websites, applications, branding, or any creative project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
