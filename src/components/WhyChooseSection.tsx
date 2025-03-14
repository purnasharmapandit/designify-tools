
import { Rocket, Sparkles, Gem, Wand } from "lucide-react";
import { motion } from "framer-motion";
import ReasonCard from "./ReasonCard";

const reasons = [
  {
    icon: Rocket,
    title: "Time-Saving Solutions",
    description: "Create professional designs in minutes, not hours or days. Our AI tools automate the tedious parts so you can focus on creativity.",
    bgGradient: "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50",
    iconBgColor: "bg-brand-purple"
  },
  {
    icon: Sparkles,
    title: "User-Friendly Interface",
    description: "No design skills needed, our AI tools do the heavy lifting. Intuitive controls make design accessible to everyone, regardless of experience.",
    bgGradient: "bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50",
    iconBgColor: "bg-brand-pink"
  },
  {
    icon: Gem,
    title: "Customizable Results",
    description: "Fine-tune every design to match your unique brand identity. Adjust colors, fonts, layouts and more with simple controls.",
    bgGradient: "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50",
    iconBgColor: "bg-brand-blue"
  },
  {
    icon: Wand,
    title: "Affordable Pricing",
    description: "Professional design quality without the professional price tag. Our subscription plans fit businesses of all sizes.",
    bgGradient: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50",
    iconBgColor: "bg-brand-yellow"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Why Choose Our AI Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful solutions that make design accessible to everyone
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              bgGradient={reason.bgGradient}
              iconBgColor={reason.iconBgColor}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
