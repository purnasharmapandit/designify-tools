
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Wifi, User, FileText, MapPin, CreditCard } from "lucide-react";

const useCases = [
  {
    icon: <Store className="h-8 w-8" />,
    title: "Business & Marketing",
    description: "Link to your website, social media, or digital business card from print materials."
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: "Wi-Fi Access",
    description: "Help guests connect to your network without typing complicated passwords."
  },
  {
    icon: <User className="h-8 w-8" />,
    title: "Personal Profiles",
    description: "Share your contact information or social media profiles instantly."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Documents & Manuals",
    description: "Provide easy access to digital versions of printed documents."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Location & Navigation",
    description: "Direct users to specific locations on map applications."
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Payments",
    description: "Enable contactless payments and simplify financial transactions."
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perfect for Any Need</h2>
          <p className="text-lg text-gray-600">
            QR codes have countless applications in both personal and professional settings.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-secondary/10 rounded-full text-secondary w-fit">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
