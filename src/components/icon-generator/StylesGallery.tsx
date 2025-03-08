
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface StylesGalleryProps {
  styles: Array<{ id: string; name: string; description: string }>;
}

const StylesGallery: React.FC<StylesGalleryProps> = ({ styles }) => {
  const [activeTab, setActiveTab] = useState(styles[0].id);
  
  // Example gallery items for each style - in a real implementation, 
  // these would be actual example icons for each style
  const galleryItems = {
    flat: [1, 2, 3, 4],
    gradient: [1, 2, 3, 4],
    outlined: [1, 2, 3, 4],
    "3d": [1, 2, 3, 4],
    // Default items for other styles
  };
  
  // Default styling colors for each style category
  const styleColors: Record<string, { bg: string, text: string }> = {
    flat: { bg: "bg-blue-50", text: "text-blue-600" },
    gradient: { bg: "bg-purple-50", text: "text-purple-600" },
    outlined: { bg: "bg-green-50", text: "text-green-600" },
    "3d": { bg: "bg-amber-50", text: "text-amber-600" },
    isometric: { bg: "bg-red-50", text: "text-red-600" },
    "hand-drawn": { bg: "bg-teal-50", text: "text-teal-600" },
    pixel: { bg: "bg-indigo-50", text: "text-indigo-600" },
    minimalist: { bg: "bg-gray-50", text: "text-gray-600" },
    // Default styling for other categories
  };
  
  // Helper to get style colors with fallback
  const getStyleColors = (styleId: string) => {
    return styleColors[styleId] || { bg: "bg-gray-50", text: "text-gray-600" };
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            20+ Icon Styles to Choose From
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of icon styles to find the perfect match for your brand
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue={styles[0].id} className="w-full" onValueChange={setActiveTab}>
            <div className="w-full overflow-x-auto pb-3 no-scrollbar">
              <TabsList className="inline-flex min-w-full w-max space-x-1 px-1">
                {styles.slice(0, 8).map((style) => (
                  <TabsTrigger 
                    key={style.id} 
                    value={style.id} 
                    className="whitespace-nowrap"
                  >
                    {style.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {styles.slice(0, 8).map((style) => {
              const { bg, text } = getStyleColors(style.id);
              
              return (
                <TabsContent key={style.id} value={style.id} className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {(galleryItems[style.id as keyof typeof galleryItems] || [1, 2, 3, 4]).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`${bg} p-6 rounded-xl flex flex-col items-center`}
                      >
                        <div className="w-24 h-24 flex items-center justify-center mb-4">
                          <div className={`${text} font-bold text-6xl`}>
                            {/* Placeholder for actual icon image */}
                            {style.name.charAt(0)}
                          </div>
                        </div>
                        <p className="text-sm font-medium">{style.name} Example {index + 1}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">About {style.name} Style</h3>
                    <p className="text-gray-600 mb-4">{style.description}</p>
                    <p className="text-gray-600">
                      Perfect for: {style.id === "flat" ? "Mobile apps, websites, and modern UI designs" : 
                      style.id === "gradient" ? "Vibrant interfaces, branding, and tech products" :
                      style.id === "outlined" ? "Clean interfaces, minimal designs, and line art" :
                      style.id === "3d" ? "Gaming, entertainment, and standout applications" :
                      "Various digital and print applications"}
                    </p>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              And {styles.length - 8} more styles available! Find the perfect match for your brand aesthetic.
            </p>
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Try Creating Your Icon Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylesGallery;
