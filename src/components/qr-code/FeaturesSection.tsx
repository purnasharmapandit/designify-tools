
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Smartphone, Globe, Palette, Shield, Download } from "lucide-react";

const features = [
  {
    icon: <QrCode className="h-8 w-8" />,
    title: "Versatile Content",
    description: "Generate QR codes for URLs, text, contact information, and more."
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-Friendly",
    description: "Create QR codes optimized for scanning with any smartphone camera."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Fully Customizable",
    description: "Customize colors, size, and error correction levels to match your brand."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Error Correction",
    description: "Ensure your QR codes remain scannable even if partially damaged or obscured."
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Multiple Formats",
    description: "Download your QR codes in PNG, SVG, or JPG formats for any use case."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "No Registration",
    description: "Use our QR code generator without creating an account or sharing personal data."
  }
];

const FeatureItem = ({ icon, title, description, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our QR Code Generator?</h2>
          <p className="text-lg text-gray-600">
            Our free QR code generator offers powerful features to help you create and customize the perfect QR code for any need.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
