
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
    message: "",
    selectedTool: ""
  });

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
      description: "Thank you for your message. We'll get back to you soon!",
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
      className="min-h-screen bg-white"
    >
      <Navbar />
      <div className="pt-28 pb-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-display mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">support@aidesigntools.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-gray-600">
                    123 Innovation Drive<br />
                    Suite 400<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={handleSubjectSelect}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Technical Support">Technical Support</SelectItem>
                    <SelectItem value="Book A Demo">Book A Demo</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {formData.subject === "Others" && (
                <div>
                  <label htmlFor="customSubject" className="block text-sm font-medium text-gray-700 mb-1">
                    Please specify
                  </label>
                  <Input
                    type="text"
                    id="customSubject"
                    name="customSubject"
                    value={formData.customSubject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter subject"
                  />
                </div>
              )}
              
              {formData.subject === "Book A Demo" && (
                <div>
                  <label htmlFor="selectedTool" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Tool for Demo
                  </label>
                  <Select
                    value={formData.selectedTool}
                    onValueChange={handleToolSelect}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a tool" />
                    </SelectTrigger>
                    <SelectContent>
                      {tools.map((tool) => (
                        <SelectItem key={tool} value={tool}>
                          {tool}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell us how we can assist you..."
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center justify-center">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ContactUs;
