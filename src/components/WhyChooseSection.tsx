
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Time-Saving Solutions",
    description: "Create professional designs in minutes, not hours or days"
  },
  {
    title: "User-Friendly Interface",
    description: "No design skills needed, our AI tools do the heavy lifting"
  },
  {
    title: "Customizable Results",
    description: "Fine-tune every design to match your unique brand identity"
  },
  {
    title: "Affordable Pricing",
    description: "Professional design quality without the professional price tag"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Why Choose Our AI Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful solutions that make design accessible to everyone
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="bg-brand-purple p-2 rounded-full shrink-0 mt-1">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
