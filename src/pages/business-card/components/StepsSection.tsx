
import React from "react";
import { motion } from "framer-motion";
import { Layers, PenTool, Download, ChevronRight } from "lucide-react";

const StepsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Business Card in 3 Simple Steps</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our intuitive platform makes it easy to design professional business cards in minutes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              step: "01",
              title: "Choose a Template",
              description: "Browse through our library of professionally designed templates and select the one that fits your style.",
              icon: <Layers className="h-10 w-10 text-purple-500" />
            },
            {
              step: "02",
              title: "Customize Your Design",
              description: "Add your information, upload your logo, and customize colors to match your brand identity.",
              icon: <PenTool className="h-10 w-10 text-purple-500" />
            },
            {
              step: "03",
              title: "Download & Print",
              description: "Export your design in high-resolution formats ready for printing or digital sharing.",
              icon: <Download className="h-10 w-10 text-purple-500" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 h-full">
                <div className="text-5xl font-bold text-indigo-100 mb-4">{item.step}</div>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                  <div className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ChevronRight className="h-6 w-6 text-indigo-500" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
