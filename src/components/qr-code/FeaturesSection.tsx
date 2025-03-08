
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Smartphone, Globe, Palette, Shield, Download } from "lucide-react";

const features = [
  {
    icon: <QrCode className="h-8 w-8" />,
    title: "Versatile Content",
    description: "Generate QR codes for URLs, text, contact information, and more.",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "bg-brand-purple text-white"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-Friendly",
    description: "Create QR codes optimized for scanning with any smartphone camera.",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "bg-brand-blue text-white"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Fully Customizable",
    description: "Customize colors, size, and error correction levels to match your brand.",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
    iconColor: "bg-brand-pink text-white"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Error Correction",
    description: "Ensure your QR codes remain scannable even if partially damaged or obscured.",
    bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    iconColor: "bg-emerald-500 text-white"
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Multiple Formats",
    description: "Download your QR codes in PNG, SVG, or JPG formats for any use case.",
    bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    iconColor: "bg-brand-yellow text-white"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "No Registration",
    description: "Use our QR code generator without creating an account or sharing personal data.",
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconColor: "bg-cyan-500 text-white"
  }
];

const FeatureItem = ({ icon, title, description, index, bgColor, iconColor }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className={`h-full shadow-sm hover:shadow-md transition-all card-hover ${bgColor}`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`mb-4 p-3 rounded-full ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our QR Code Generator?</h2>
            <p className="text-lg text-gray-600">
              Our free QR code generator offers powerful features to help you create and customize the perfect QR code for any need.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              {...feature} 
              index={index} 
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
