
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMakerProvider } from "@/contexts/LogoMakerContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoEditorContent from "./components/LogoEditorContent";

const LogoEditor = () => {
  return (
    <LogoMakerProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-6"
            >
              <h1 className="text-3xl font-bold font-display">Logo Editor</h1>
              <Button>
                <Check className="mr-2 h-4 w-4" />
                Complete
              </Button>
            </motion.div>
            
            <LogoEditorContent />
          </div>
        </main>
        <Footer />
      </div>
    </LogoMakerProvider>
  );
};

export default LogoEditor;
