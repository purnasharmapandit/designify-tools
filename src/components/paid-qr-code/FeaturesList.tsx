
import React from "react";
import { motion } from "framer-motion";
import { 
  ChartBar, 
  FileSpreadsheet, 
  MapPin, 
  Users, 
  Plus, 
  Shield, 
  BarChart3, 
  CalendarClock 
} from "lucide-react";

const FeaturesList = () => {
  const features = [
    {
      icon: <ChartBar className="h-10 w-10 text-primary" />,
      title: "1-Year Analytics",
      description: "Track scan counts, times, devices, and more for a full year to understand engagement patterns."
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
      title: "CSV Export",
      description: "Export all your QR code scan data to CSV format for advanced analysis and reporting."
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Location Tracking",
      description: "See where your QR codes are being scanned with geographical tracking and visualization."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Add-on Users",
      description: "Grant team members access to view and manage QR codes with customizable permissions."
    },
    {
      icon: <Plus className="h-10 w-10 text-primary" />,
      title: "Add-on Codes",
      description: "Easily expand your QR code capacity as your business grows without service interruption."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Dashboard Reports",
      description: "Get visual reports and insights on your QR code performance in an intuitive dashboard."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enhanced Security",
      description: "Premium QR codes include additional security features to prevent unauthorized duplication."
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-primary" />,
      title: "Scheduled Campaigns",
      description: "Plan and schedule QR code campaigns in advance with automatic activation and deactivation."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our premium QR code generator offers advanced features to help you track, analyze, and optimize your marketing campaigns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
