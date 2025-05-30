
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Send, Github, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "react-router-dom";

const tools = [
  "Logo Maker",
  "Business Card Generator",
  "Icon Generator",
  "Email Signature Generator",
  "QR Code Generator",
  "Color Palette Generator",
  "Background Remover"
];

const ContactUs = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
    message: "",
    selectedTool: ""
  });

  // Check if we're coming from auth page with "Book A Demo" request
  useEffect(() => {
    if (location.state && location.state.bookDemo) {
      setFormData(prev => ({
        ...prev,
        subject: "Book A Demo",
        message: "I would like to book a demo to receive an access code for the platform."
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value,
      customSubject: "",
      selectedTool: value === "Book A Demo" ? prev.selectedTool : ""
    }));
  };

  const handleToolSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTool: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare form data for submission
    const finalSubject = formData.subject === "Others" 
      ? formData.customSubject 
      : formData.subject === "Book A Demo" 
        ? `Book A Demo: ${formData.selectedTool}` 
        : formData.subject;
        
    const finalFormData = {
      ...formData,
      subject: finalSubject
    };
    
    console.log("Form submitted:", finalFormData);
    
    toast({
      title: "Message Sent",
      description: formData.subject === "Book A Demo" 
        ? "Thank you for booking a demo. We'll contact you soon with your access code!" 
        : "Thank you for your message. We'll get back to you soon!",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      customSubject: "",
      message: "",
      selectedTool: ""
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <Navbar />
      {/* Hero Section with darker gradient background */}
      <div className="pt-28 pb-12 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl font-bold font-display mb-4 text-black dark:text-white"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg text-black dark:text-gray-200 max-w-3xl mx-auto"
            >
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </motion.p>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold font-display mb-6 text-black dark:text-white">Get in Touch</h2>
              <p className="text-black dark:text-gray-200 mb-6">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-brand-purple/30 to-brand-blue/30 shadow-md">
                  <Mail className="h-6 w-6 text-black dark:text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-white">Email</h3>
                  <p className="text-black dark:text-gray-300">support@mydesignly.com</p>
                  <p className="text-black dark:text-gray-300 mt-2">sales@mydesignly.com</p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold font-display mb-6 text-black dark:text-white">Follow Us</h3>
              <motion.div 
                className="flex space-x-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                  href="#" 
                  className="p-3 bg-gradient-to-r from-brand-blue/10 to-brand-blue/20 dark:from-brand-blue/30 dark:to-brand-blue/40 rounded-full hover:shadow-md transition-all"
                >
                  <Twitter className="h-5 w-5 text-black dark:text-brand-blue" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                  href="#" 
                  className="p-3 bg-gradient-to-r from-brand-purple/10 to-brand-purple/20 dark:from-brand-purple/30 dark:to-brand-purple/40 rounded-full hover:shadow-md transition-all"
                >
                  <Facebook className="h-5 w-5 text-black dark:text-brand-purple" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                  href="#" 
                  className="p-3 bg-gradient-to-r from-brand-pink/10 to-brand-pink/20 dark:from-brand-pink/30 dark:to-brand-pink/40 rounded-full hover:shadow-md transition-all"
                >
                  <Linkedin className="h-5 w-5 text-black dark:text-brand-pink" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
                  href="#" 
                  className="p-3 bg-gradient-to-r from-brand-yellow/10 to-brand-yellow/20 dark:from-brand-yellow/30 dark:to-brand-yellow/40 rounded-full hover:shadow-md transition-all"
                >
                  <Github className="h-5 w-5 text-black dark:text-brand-yellow" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form Column */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))",
              boxShadow: "0 10px 40px rgba(155, 135, 245, 0.1)"
            }}
          >
            <h2 className="text-2xl font-bold font-display mb-6 text-black dark:text-white">
              {location.state?.bookDemo ? "Book Your Demo" : "Send Us a Message"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-gray-200 mb-1">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-brand-purple/30 focus:border-brand-purple focus:ring-brand-purple/20 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-gray-200 mb-1">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-brand-purple/30 focus:border-brand-purple focus:ring-brand-purple/20 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-gray-200 mb-1">
                  Subject
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={handleSubjectSelect}
                >
                  <SelectTrigger className="w-full border-brand-purple/30 focus:ring-brand-purple/20 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Technical Support">Technical Support</SelectItem>
                    <SelectItem value="Book A Demo">Book A Demo</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {formData.subject === "Others" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="customSubject" className="block text-sm font-medium text-black dark:text-gray-200 mb-1">
                    Please specify
                  </label>
                  <Input
                    type="text"
                    id="customSubject"
                    name="customSubject"
                    value={formData.customSubject}
                    onChange={handleChange}
                    required
                    className="w-full border-brand-purple/30 focus:border-brand-purple focus:ring-brand-purple/20 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter subject"
                  />
                </motion.div>
              )}
              
              {formData.subject === "Book A Demo" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="selectedTool" className="block text-sm font-medium text-black dark:text-gray-200 mb-1">
                    Select Tool for Demo
                  </label>
                  <Select
                    value={formData.selectedTool}
                    onValueChange={handleToolSelect}
                  >
                    <SelectTrigger className="w-full border-brand-purple/30 focus:ring-brand-purple/20 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="Select a tool" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      {tools.map((tool) => (
                        <SelectItem key={tool} value={tool}>
                          {tool}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-gray-200 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-brand-purple/30 focus:border-brand-purple focus:ring-brand-purple/20 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Tell us how we can assist you..."
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-purple/90 hover:to-brand-pink/90 transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {formData.subject === "Book A Demo" ? "Request Demo & Access Code" : "Send Message"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ContactUs;
