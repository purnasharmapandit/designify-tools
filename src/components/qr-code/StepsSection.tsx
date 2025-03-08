
import React from "react";
import { motion } from "framer-motion";
import { Pencil, PaintBucket, Download } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: <Pencil className="h-6 w-6" />,
    title: "Enter Your Content",
    description: "Input the URL, text, or data you want to encode in your QR code.",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-100 text-primary"
  },
  {
    icon: <PaintBucket className="h-6 w-6" />,
    title: "Customize Your QR Code",
    description: "Choose colors, adjust size, and select error correction level to match your needs.",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-100 text-green-500"
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Download & Share",
    description: "Download your QR code in your preferred format and share it with the world.",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconBg: "bg-amber-100 text-amber-500"
  }
];

const StepsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Create Your QR Code in 3 Simple Steps</h2>
          <p className="text-lg text-muted-foreground">
            Our user-friendly tool makes it easy to generate custom QR codes in seconds.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-md transition-shadow card-hover ${step.gradient}`}>
                <div className="p-6">
                  <div className="flex items-start">
                    <div className={`mr-4 p-3 rounded-full ${step.iconBg}`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-sm mr-2">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
