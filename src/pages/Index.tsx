
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-slate-50"
    >
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </motion.div>
  );
};

export default Index;
