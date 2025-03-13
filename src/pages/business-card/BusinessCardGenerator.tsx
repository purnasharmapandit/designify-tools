
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Download, Palette, PenTool, Crop, ChevronRight, Box, CheckCircle } from "lucide-react";
import { ColorPicker } from "@/components/ui/color-picker";
import { Link } from "react-router-dom";

const BusinessCardGenerator = () => {
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [activeTemplate, setActiveTemplate] = useState("minimal");
  const designSectionRef = useRef<HTMLDivElement>(null);

  const templates = [
    { id: "minimal", name: "Minimal", color: "#f3f4f6" },
    { id: "corporate", name: "Corporate", color: "#e0f2fe" },
    { id: "creative", name: "Creative", color: "#fef3c7" },
    { id: "bold", name: "Bold", color: "#fee2e2" },
  ];

  const scrollToTemplates = () => {
    if (designSectionRef.current) {
      designSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with 3D Card Animation */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDYwQzE1LjY3IDYwIDQgNDguMzMgNCAzNHM5LjMzLTMwIDI2LTMwIDI2IDExLjY3IDI2IDI2LTExLjY3IDMwLTI2IDMweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-5">
                  Professional Business Cards in Minutes
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Create Stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Business Cards</span> with AI
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Design professional business cards in minutes with our AI-powered tools. Choose from multiple templates and customize to your brand.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-lg h-14 px-8"
                    onClick={scrollToTemplates}
                  >
                    Start Creating Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="rounded-full border-2 h-14 px-8 text-lg"
                    onClick={scrollToTemplates}
                  >
                    View Templates
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-${i % 2 === 0 ? 'blue' : 'purple'}-400 to-${i % 2 === 0 ? 'indigo' : 'pink'}-500`}></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">5,000+</span> business professionals trust our platform
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mx-auto"
              >
                <div className="relative w-full max-w-md mx-auto">
                  {/* Floating Card Effect */}
                  <motion.div 
                    className="absolute -z-10 w-full h-64 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl"
                    animate={{ 
                      rotate: [0, 2, 0, -2, 0],
                      y: [0, -5, 0, 5, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut" 
                    }}
                    style={{ top: '10%', left: '5%' }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute -z-10 w-full h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl transform -rotate-6"
                    animate={{ 
                      rotate: [-6, -4, -6, -8, -6],
                      y: [0, 5, 0, -5, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    style={{ top: '15%', left: '-5%' }}
                  ></motion.div>
                  
                  {/* Main Card Preview */}
                  <div className="relative bg-white rounded-xl shadow-2xl p-8 aspect-[1.8/1] bg-gradient-to-br from-white to-gray-50">
                    <div className="absolute top-8 left-8 flex flex-col">
                      <span className="text-lg font-bold text-gray-900">Jane Doe</span>
                      <span className="text-sm text-gray-600">Lead Designer</span>
                    </div>
                    <div className="absolute bottom-8 left-8 flex flex-col">
                      <span className="text-xs text-gray-800">hello@example.com</span>
                      <span className="text-xs text-gray-800">+1 (555) 123-4567</span>
                      <span className="text-xs text-gray-800">www.example.com</span>
                    </div>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2">
                      <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-indigo-600">E</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6 gap-4">
                  {templates.map((template) => (
                    <motion.button
                      key={template.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-8 h-8 rounded-full ${activeTemplate === template.id ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                      style={{ backgroundColor: template.color }}
                      onClick={() => setActiveTemplate(template.id)}
                      aria-label={`Select ${template.name} template`}
                    ></motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Features Pills */}
          <div className="max-w-7xl mx-auto px-4 mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <Box className="h-4 w-4" />, text: "100+ Templates" },
                { icon: <Palette className="h-4 w-4" />, text: "Custom Colors" },
                { icon: <Download className="h-4 w-4" />, text: "Export as PDF/PNG" },
                { icon: <PenTool className="h-4 w-4" />, text: "Logo Upload" },
                { icon: <Crop className="h-4 w-4" />, text: "Custom Dimensions" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                  className="bg-white shadow-sm px-4 py-2 rounded-full flex items-center gap-2"
                >
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Business Card in 3 Simple Steps</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our intuitive platform makes it easy to design professional business cards in minutes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Choose a Template",
                  description: "Browse through our library of professionally designed templates and select the one that fits your style.",
                  icon: <Layers className="h-10 w-10 text-purple-500" />
                },
                {
                  step: "02",
                  title: "Customize Your Design",
                  description: "Add your information, upload your logo, and customize colors to match your brand identity.",
                  icon: <PenTool className="h-10 w-10 text-purple-500" />
                },
                {
                  step: "03",
                  title: "Download & Print",
                  description: "Export your design in high-resolution formats ready for printing or digital sharing.",
                  icon: <Download className="h-10 w-10 text-purple-500" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 h-full">
                    <div className="text-5xl font-bold text-indigo-100 mb-4">{item.step}</div>
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                      <div className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <ChevronRight className="h-6 w-6 text-indigo-500" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section ref={designSectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Template Collection</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find the perfect template for your business card among our diverse collection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Minimal", color: "bg-gray-50", textColor: "text-gray-900" },
                { name: "Corporate", color: "bg-blue-50", textColor: "text-blue-900" },
                { name: "Creative", color: "bg-yellow-50", textColor: "text-yellow-900" },
                { name: "Bold", color: "bg-red-50", textColor: "text-red-900" },
                { name: "Modern", color: "bg-green-50", textColor: "text-green-900" },
                { name: "Elegant", color: "bg-purple-50", textColor: "text-purple-900" },
                { name: "Professional", color: "bg-indigo-50", textColor: "text-indigo-900" },
                { name: "Vibrant", color: "bg-pink-50", textColor: "text-pink-900" }
              ].map((template, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`${template.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 aspect-[1.8/1] relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      Use Template
                    </Button>
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className={`text-lg font-bold ${template.textColor}`}>{template.name}</h3>
                      <p className={`text-sm ${template.textColor} opacity-70`}>Business Card</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="rounded-full">
                View All Templates
              </Button>
            </div>
          </div>
        </section>

        {/* Customize Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Customize Every Detail to Match Your Brand</h2>
                <p className="text-xl text-gray-600 mb-8">Our business card generator gives you complete control over your design. Customize colors, fonts, layouts, and more.</p>
                
                <div className="space-y-6">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Choose Primary Color</label>
                    <ColorPicker 
                      label="Primary Color" 
                      value={primaryColor} 
                      onChange={setPrimaryColor} 
                      id="primary-color" 
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Available Features:</h4>
                    <div className="space-y-3">
                      {["Custom typography", "Logo upload", "QR code generation", "Multiple layouts", "Instant preview"].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="mt-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600">
                    Start Customizing
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[500px]"
              >
                <div className="absolute w-64 h-40 bg-white shadow-xl rounded-lg transform rotate-6 top-12 left-12 z-10">
                  <div className="h-full p-4 flex flex-col justify-between bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg text-white">
                    <div>
                      <div className="text-lg font-bold">Sarah Johnson</div>
                      <div className="text-xs opacity-90">Marketing Director</div>
                    </div>
                    <div className="text-xs">
                      <div>sarah@company.com</div>
                      <div>+1 (555) 987-6543</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute w-64 h-40 bg-white shadow-xl rounded-lg transform -rotate-3 top-36 left-32 z-20">
                  <div className="h-full p-4 flex flex-col justify-between bg-white rounded-lg border-2 border-gray-200">
                    <div>
                      <div className="text-lg font-bold text-gray-900">Michael Chen</div>
                      <div className="text-xs text-gray-600">Software Engineer</div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div>michael@techfirm.com</div>
                      <div>+1 (555) 123-4567</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute w-64 h-40 bg-white shadow-xl rounded-lg transform rotate-12 top-60 left-48 z-30">
                  <div className="h-full p-4 flex flex-col justify-between bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white">
                    <div>
                      <div className="text-lg font-bold">Alex Rivera</div>
                      <div className="text-xs opacity-90">Creative Director</div>
                    </div>
                    <div className="text-xs">
                      <div>alex@design.co</div>
                      <div>+1 (555) 234-5678</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from professionals who have used our business card generator.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Emily Johnson",
                  role: "Marketing Manager",
                  content: "The business card generator helped me create professional cards quickly. The templates are modern and the customization options are fantastic.",
                  image: "/placeholder.svg"
                },
                {
                  name: "David Chen",
                  role: "Startup Founder",
                  content: "As a startup founder, I needed business cards fast. This tool saved me time and money while delivering high-quality designs my team loves.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Maria Garcia",
                  role: "Freelance Designer",
                  content: "Even as a designer, I use this tool for quick iterations. The export quality is excellent and my clients are always impressed with the results.",
                  image: "/placeholder.svg"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm p-8"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.content}"</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Professional Business Cards?</h2>
                <p className="text-xl mb-8 opacity-90">Join thousands of professionals who use our platform to create stunning business cards that make a lasting impression.</p>
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  onClick={scrollToTemplates}
                >
                  Start Creating For Free
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-4 text-sm opacity-80">No credit card required • Free plan available</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessCardGenerator;
