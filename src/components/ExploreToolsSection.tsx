
import { motion } from "framer-motion";
import ToolCard from "./ToolCard";

const ExploreToolsSection = () => {
  const tools = [
    {
      name: "Mockup Generator",
      color: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      iconColor: "text-indigo-500"
    },
    {
      name: "Social Banner Maker",
      color: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      iconColor: "text-emerald-500"
    },
    {
      name: "QR Code Designer",
      color: "bg-gradient-to-br from-amber-100 to-amber-200",
      iconColor: "text-amber-500"
    },
    {
      name: "Presentation Templates",
      color: "bg-gradient-to-br from-rose-100 to-rose-200",
      iconColor: "text-rose-500"
    },
    {
      name: "Flyer Designer",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    },
    {
      name: "Icon Generator",
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Explore Other Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our full suite of design tools to enhance your creative workflow
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              color={tool.color}
              iconColor={tool.iconColor}
              className="rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreToolsSection;
