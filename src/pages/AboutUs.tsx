
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Users, Rocket } from "lucide-react";
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
      <div className="pt-28 pb-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-display mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize design with AI-powered tools that empower everyone to create professional-quality designs.
            </p>
          </div>
        </div>
      </div>
      
      <main className="py-12">
        {/* Our Mission Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-display">Our Mission</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  At AI Design Tools, our mission is to make professional-quality design accessible to everyone. We believe that great design shouldn't require years of training or expensive software.
                </p>
                <p className="text-gray-700 mb-4">
                  By harnessing the power of artificial intelligence, we're creating intuitive tools that help individuals and businesses bring their creative visions to life quickly and affordably.
                </p>
                <p className="text-gray-700">
                  We're committed to continuously improving our technology to provide cutting-edge solutions that simplify the design process while delivering exceptional results.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-full">
                  <blockquote className="italic text-lg text-gray-700">
                    "We envision a world where anyone can create beautiful, professional designs regardless of their technical skills or background."
                  </blockquote>
                  <p className="mt-4 text-right font-semibold">— Our Founding Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display">Our Values</h2>
              </div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                These core principles guide everything we do at AI Design Tools.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Accessibility",
                  description: "We believe design tools should be accessible to everyone, regardless of technical expertise or budget."
                },
                {
                  title: "Innovation",
                  description: "We're committed to pushing the boundaries of what's possible with AI-powered design technology."
                },
                {
                  title: "Quality",
                  description: "We never compromise on the quality of our tools or the designs they help create."
                },
                {
                  title: "User-Centered",
                  description: "Everything we build starts with understanding and addressing real user needs."
                },
                {
                  title: "Integrity",
                  description: "We operate with transparency and honesty in all our interactions with users and partners."
                },
                {
                  title: "Continuous Improvement",
                  description: "We're never satisfied with the status quo and continuously strive to improve our products."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display">Our Team</h2>
              </div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Meet the passionate individuals behind AI Design Tools who are dedicated to making design accessible to everyone.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO",
                  bio: "With over 15 years in design and tech, Alex founded AI Design Tools to democratize access to professional design."
                },
                {
                  name: "Sarah Chen",
                  role: "CTO",
                  bio: "Sarah leads our technical team, bringing expertise in AI and machine learning to create our innovative design tools."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Chief Design Officer",
                  bio: "Michael ensures all our tools maintain the highest design standards while remaining intuitive and user-friendly."
                },
                {
                  name: "Priya Patel",
                  role: "Head of Product",
                  bio: "Priya works closely with users to understand their needs and translate them into valuable product features."
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 border border-gray-200 text-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/70">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-display mb-4">Ready to Try Our Tools?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Join thousands of users who are already creating amazing designs with our AI-powered tools. No design experience required!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-shine-effect">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/help-center">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
