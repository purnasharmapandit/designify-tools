
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";
import { Link } from "react-router-dom";

interface ComingSoonBannerProps {
  toolName: string;
  expectedReleaseDate?: string;
}

const ComingSoonBanner = ({ toolName, expectedReleaseDate }: ComingSoonBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-6 md:p-8 my-8 max-w-3xl mx-auto shadow-sm border border-indigo-100"
    >
      <div className="flex items-center justify-center mb-4">
        <span className="bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full text-sm">
          Coming Soon
        </span>
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">
        Our {toolName} is under development
      </h3>
      <p className="text-gray-600 text-center mb-6">
        We're working hard to bring you an amazing experience.
        {expectedReleaseDate && ` Expected release: ${expectedReleaseDate}`}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact-us?subject=Interest%20in%20" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full" size="lg">
            <BellRing className="mr-2 h-4 w-4" />
            Get notified when it launches
          </Button>
        </Link>
        <Link to="/tools" className="w-full sm:w-auto">
          <Button variant="default" className="w-full" size="lg">
            Explore available tools
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ComingSoonBanner;
