
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, Book, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Getting Started",
    icon: Book,
    description: "Learn the basics of our platform",
    color: "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50"
  },
  {
    title: "Troubleshooting",
    icon: HelpCircle,
    description: "Solutions to common issues",
    color: "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50"
  },
  {
    title: "Tutorials",
    icon: Search,
    description: "Step-by-step guides for all features",
    color: "bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50"
  }
];

const popularArticles = [
  { title: "How to create your first logo", link: "/blogs/create-logo" },
  { title: "Exporting designs in different formats", link: "/blogs/exporting-designs" },
  { title: "Customizing your profile picture", link: "/blogs/customizing-profile-picture" },
  { title: "Creating business cards from templates", link: "/blogs/business-cards" },
  { title: "Account billing and subscriptions", link: "/blogs/billing-subscriptions" }
];

const HelpCenter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <div className="pt-28 pb-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-display mb-4">Help Center</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to your questions and learn how to get the most out of our AI design tools
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full py-3 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute right-4 top-3.5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${category.color} rounded-3xl p-6 card-hover h-full`}
            >
              <div className="flex flex-col h-full items-center text-center">
                <div className="p-3 rounded-full w-fit mb-4 bg-white/70">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <Button className="mt-auto" variant="outline">Browse Articles</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold font-display mb-6 text-center">Popular Articles</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-6">
            <ul className="divide-y divide-gray-200">
              {popularArticles.map((article, index) => (
                <li key={index} className="py-4">
                  <Link to={article.link} className="flex items-center hover:text-primary transition-colors">
                    <Book className="mr-4 h-5 w-5 text-primary" />
                    <span>{article.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-3xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is ready to assist you with any questions or issues
          </p>
          <Button>Contact Support</Button>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default HelpCenter;
