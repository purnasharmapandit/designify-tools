
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeshGradientHero from "@/components/mesh-gradient/MeshGradientHero";
import MeshGradientFeatures from "@/components/mesh-gradient/MeshGradientFeatures";
import MeshGradientHowItWorks from "@/components/mesh-gradient/MeshGradientHowItWorks";
import MeshGradientFAQ from "@/components/mesh-gradient/MeshGradientFAQ";
import { Helmet } from "react-helmet";

const MeshGradientGenerator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mesh Gradient Generator | Create Beautiful Gradients</title>
        <meta 
          name="description" 
          content="Create stunning mesh gradients for your designs with our free mesh gradient generator tool. Perfect for web designs, presentations, and social media."
        />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <MeshGradientHero />
        <MeshGradientFeatures />
        <MeshGradientHowItWorks />
        <MeshGradientFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default MeshGradientGenerator;
