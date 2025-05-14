
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
      className="min-h-screen bg-white"
    >
      <Navbar />
      {/* Hero Section with gradient background */}
      <div className="pt-28 pb-12 bg-gradient-to-r from-primary/10 via-brand-purple/20 to-brand-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg text-gray-800 max-w-3xl mx-auto"
            >
              We're on a mission to democratize design with AI-powered tools that empower everyone to create professional-quality designs.
            </motion.p>
          </div>
        </div>
      </div>
      
      <main>
        {/* Our Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-brand-purple/30 to-brand-blue/30 mr-4 shadow-md">
                    <Target className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h2 className="text-3xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">Our Mission</h2>
                </div>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  At MyDesignly, our mission is to make professional-quality design accessible to everyone. We believe that great design shouldn't require years of training or expensive software.
                </p>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  By harnessing the power of artificial intelligence, we're creating intuitive tools that help individuals and businesses bring their creative visions to life quickly and affordably.
                </p>
                <p className="text-gray-800 leading-relaxed">
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
                <div className="bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 rounded-2xl p-8 h-full border border-brand-purple/10 shadow-lg">
                  <Palette className="h-8 w-8 text-brand-purple mb-4 opacity-70" />
                  <blockquote className="italic text-lg text-gray-800">
                    "We envision a world where anyone can create beautiful, professional designs regardless of their technical skills or background."
                  </blockquote>
                  <p className="mt-4 text-right font-semibold text-brand-purple">— Our Founding Team</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gradient-to-r from-slate-50 to-brand-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-brand-pink/30 to-brand-purple/30 mr-4 shadow-md">
                  <Heart className="h-6 w-6 text-brand-pink" />
                </div>
                <h2 className="text-3xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">Our Values</h2>
              </div>
              <p className="text-gray-800 max-w-3xl mx-auto">
                These core principles guide everything we do at MyDesignly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Accessibility",
                  description: "We believe design tools should be accessible to everyone, regardless of technical expertise or budget.",
                  color: "from-brand-purple/10 to-brand-blue/10",
                  borderColor: "border-brand-purple/20",
                  icon: <Palette className="h-5 w-5 text-brand-purple" />
                },
                {
                  title: "Innovation",
                  description: "We're committed to pushing the boundaries of what's possible with AI-powered design technology.",
                  color: "from-brand-pink/10 to-brand-purple/10",
                  borderColor: "border-brand-pink/20",
                  icon: <Rocket className="h-5 w-5 text-brand-pink" />
                },
                {
                  title: "Quality",
                  description: "We never compromise on the quality of our tools or the designs they help create.",
                  color: "from-brand-blue/10 to-brand-yellow/10",
                  borderColor: "border-brand-blue/20",
                  icon: <Target className="h-5 w-5 text-brand-blue" />
                },
                {
                  title: "User-Centered",
                  description: "Everything we build starts with understanding and addressing real user needs.",
                  color: "from-brand-purple/10 to-brand-pink/10",
                  borderColor: "border-brand-purple/20",
                  icon: <Users className="h-5 w-5 text-brand-purple" />
                },
                {
                  title: "Integrity",
                  description: "We operate with transparency and honesty in all our interactions with users and partners.",
                  color: "from-brand-pink/10 to-brand-yellow/10",
                  borderColor: "border-brand-pink/20",
                  icon: <Heart className="h-5 w-5 text-brand-pink" />
                },
                {
                  title: "Continuous Improvement",
                  description: "We're never satisfied with the status quo and continuously strive to improve our products.",
                  color: "from-brand-blue/10 to-brand-purple/10",
                  borderColor: "border-brand-blue/20",
                  icon: <Brush className="h-5 w-5 text-brand-blue" />
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className={`bg-gradient-to-br ${value.color} rounded-lg p-6 border ${value.borderColor} hover:shadow-md transition-all`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-3">
                    {value.icon}
                    <h3 className="text-xl font-semibold ml-2">{value.title}</h3>
                  </div>
                  <p className="text-gray-800">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-brand-blue/30 to-brand-yellow/30 mr-4 shadow-md">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">Our Team</h2>
              </div>
              <p className="text-gray-800 max-w-3xl mx-auto">
                Meet the passionate individuals behind MyDesignly who are dedicated to making design accessible to everyone.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  name: "Oliver Reynolds",
                  role: "Founder & CEO",
                  bio: "With over 15 years in design and tech, Oliver founded AI Design Tools to democratize access to professional design.",
                  gradient: "from-brand-purple to-brand-blue"
                },
                {
                  name: "Maya Lin",
                  role: "CTO",
                  bio: "Maya leads our technical team, bringing expertise in AI and machine learning to create our innovative design tools.",
                  gradient: "from-brand-pink to-brand-purple"
                }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow hover:shadow-md transition-all"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-brand-purple font-medium mb-3">{member.role}</p>
                  <p className="text-gray-800 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-gradient-to-r from-brand-purple/30 to-brand-pink/30 mb-4 shadow-md"
            >
              <Rocket className="h-6 w-6 text-brand-purple" />
            </motion.div>
            <motion.h2 
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink"
            >
              Ready to Try Our Tools?
            </motion.h2>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-800 max-w-2xl mx-auto mb-8"
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
              <Button size="lg" className="bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-purple/90 hover:to-brand-pink/90 transition-all shadow-md hover:shadow-lg">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" asChild className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
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
