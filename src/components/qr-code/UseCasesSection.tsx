
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Store, 
  Wifi, 
  User, 
  FileText, 
  MapPin, 
  CreditCard 
} from "lucide-react";

const useCases = [
  {
    icon: <Store className="h-6 w-6" />,
    title: "Business & Marketing",
    description: "Link to your website, social media, or digital business card from print materials.",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-100 text-blue-500"
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Wi-Fi Access",
    description: "Help guests connect to your network without typing complicated passwords.",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-100 text-green-500"
  },
  {
    icon: <User className="h-6 w-6" />,
    title: "Personal Profiles",
    description: "Share your contact information or social media profiles instantly.",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-100 text-primary"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documents & Manuals",
    description: "Provide easy access to digital versions of printed documents.",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconBg: "bg-amber-100 text-amber-500"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location & Navigation",
    description: "Direct users to specific locations on map applications.",
    gradient: "bg-gradient-to-br from-pink-50 to-pink-100",
    iconBg: "bg-pink-100 text-pink-500"
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Payments",
    description: "Enable contactless payments and simplify financial transactions.",
    gradient: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-500"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perfect for Any Need</h2>
          <p className="text-lg text-muted-foreground">
            QR codes have countless applications in both personal and professional settings.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-md transition-shadow card-hover ${useCase.gradient}`}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className={`mr-4 p-3 rounded-full w-fit ${useCase.iconBg}`}>
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
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
