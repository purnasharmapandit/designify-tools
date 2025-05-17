
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Users, Rocket, Image, Brush, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <Navbar />
      {/* Hero Section with cleaner background */}
      <div className="pt-28 pb-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold font-display mb-6 text-black dark:text-white"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We're on a mission to democratize design with AI-powered tools that empower everyone to create professional-quality designs.
            </motion.p>
          </div>
        </div>
      </div>
      
      <main>
        {/* Our Mission Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10 mr-4 shadow-md">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-display text-black dark:text-white">Our Mission</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  At MyDesignly, our mission is to make professional-quality design accessible to everyone. We believe that great design shouldn't require years of training or expensive software.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  By harnessing the power of artificial intelligence, we're creating intuitive tools that help individuals and businesses bring their creative visions to life quickly and affordably.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We're committed to continuously improving our technology to provide cutting-edge solutions that simplify the design process while delivering exceptional results.
                </p>
              </motion.div>
              <motion.div 
                className="mt-10 lg:mt-0"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-600 shadow-lg">
                  <Palette className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="italic text-lg text-gray-700 dark:text-gray-300">
                    "We envision a world where anyone can create beautiful, professional designs regardless of their technical skills or background."
                  </blockquote>
                  <p className="mt-4 text-right font-semibold text-primary">— Our Founding Team</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section - with cleaner color scheme */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4 shadow-md">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display text-black dark:text-white">Our Values</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                These core principles guide everything we do at MyDesignly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Accessibility",
                  description: "We believe design tools should be accessible to everyone, regardless of technical expertise or budget.",
                  icon: <Palette className="h-5 w-5 text-primary" />
                },
                {
                  title: "Innovation",
                  description: "We're committed to pushing the boundaries of what's possible with AI-powered design technology.",
                  icon: <Rocket className="h-5 w-5 text-primary" />
                },
                {
                  title: "Quality",
                  description: "We never compromise on the quality of our tools or the designs they help create.",
                  icon: <Target className="h-5 w-5 text-primary" />
                },
                {
                  title: "User-Centered",
                  description: "Everything we build starts with understanding and addressing real user needs.",
                  icon: <Users className="h-5 w-5 text-primary" />
                },
                {
                  title: "Integrity",
                  description: "We operate with transparency and honesty in all our interactions with users and partners.",
                  icon: <Heart className="h-5 w-5 text-primary" />
                },
                {
                  title: "Continuous Improvement",
                  description: "We're never satisfied with the status quo and continuously strive to improve our products.",
                  icon: <Brush className="h-5 w-5 text-primary" />
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-3">
                    {value.icon}
                    <h3 className="text-xl font-semibold ml-2 text-black dark:text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section - with improved styling */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4 shadow-md">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display text-black dark:text-white">Our Team</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the passionate individuals behind MyDesignly who are dedicated to making design accessible to everyone.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Oliver Reynolds",
                  role: "Founder & CEO",
                  bio: "With over 15 years in design and tech, Oliver founded AI Design Tools to democratize access to professional design."
                },
                {
                  name: "Maya Lin",
                  role: "CTO",
                  bio: "Maya leads our technical team, bringing expertise in AI and machine learning to create our innovative design tools."
                }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition-all"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - with improved styling */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-primary/10 mb-6 shadow-md"
            >
              <Rocket className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.h2 
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold font-display mb-6 text-black dark:text-white"
            >
              Ready to Try Our Tools?
            </motion.h2>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Join thousands of users who are already creating amazing designs with our AI-powered tools. No design experience required!
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-white">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 dark:text-white dark:border-white">
                <Link to="/tools">Explore Our Tools</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
