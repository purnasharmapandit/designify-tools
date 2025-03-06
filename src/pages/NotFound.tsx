
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, Paintbrush } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <motion.div
        className="max-w-4xl w-full text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-block mb-8">
          <div className="relative">
            <svg
              className="h-48 w-48 mx-auto"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="120" cy="120" r="115" fill="white" stroke="#e2e8f0" strokeWidth="10" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#6366f1"
                fontSize="120"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                404
              </text>
            </svg>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-5 -top-5"
            >
              <Paintbrush className="h-12 w-12 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        >
          Page Not Found
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Oops! Looks like this page has been creatively reimagined into nonexistence. 
          Perhaps it's taking a design break?
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Search className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Search Our Site</h3>
            <p className="text-gray-600 text-sm">
              Looking for something specific? Try searching for it.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Home className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Go Home</h3>
            <p className="text-gray-600 text-sm">
              Head back to our homepage to start exploring.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ArrowLeft className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Step Back</h3>
            <p className="text-gray-600 text-sm">
              Return to the previous page you were viewing.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="rounded-full">
              <Home className="mr-2 h-4 w-4" /> Go to Homepage
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
