
import { motion } from "framer-motion";
import { 
  Paintbrush, 
  Image, 
  Layout, 
  Type, 
  Palette, 
  QrCode,
  Presentation, 
  FileImage,
  Layers,
  PenTool,
  Wand2,
  Share2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Tool = ({ icon: Icon, name, description, color }: { 
  icon: any; 
  name: string; 
  description: string;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
  >
    <div className={`${color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Tools = () => {
  const tools = [
    {
      icon: Paintbrush,
      name: "Logo Maker",
      description: "Create professional logos with AI-powered design suggestions",
      color: "bg-purple-100 text-purple-500"
    },
    {
      icon: Image,
      name: "Banner Designer",
      description: "Design eye-catching banners for social media and marketing",
      color: "bg-blue-100 text-blue-500"
    },
    {
      icon: Layout,
      name: "Social Media Kit",
      description: "Generate complete social media graphic packages instantly",
      color: "bg-pink-100 text-pink-500"
    },
    {
      icon: Type,
      name: "Typography Tool",
      description: "Perfect your text layouts with advanced typography options",
      color: "bg-orange-100 text-orange-500"
    },
    {
      icon: Palette,
      name: "Color Palette Generator",
      description: "Generate beautiful color schemes for your designs",
      color: "bg-yellow-100 text-yellow-500"
    },
    {
      icon: QrCode,
      name: "QR Code Designer",
      description: "Create stylish and functional QR codes",
      color: "bg-green-100 text-green-500"
    },
    {
      icon: Presentation,
      name: "Presentation Maker",
      description: "Design professional presentations with ready-to-use templates",
      color: "bg-indigo-100 text-indigo-500"
    },
    {
      icon: FileImage,
      name: "Image Editor",
      description: "Edit and enhance images with powerful tools",
      color: "bg-red-100 text-red-500"
    },
    {
      icon: Layers,
      name: "Mock-up Generator",
      description: "Create realistic product mock-ups instantly",
      color: "bg-cyan-100 text-cyan-500"
    },
    {
      icon: PenTool,
      name: "Icon Designer",
      description: "Design custom icons for your projects",
      color: "bg-emerald-100 text-emerald-500"
    },
    {
      icon: Wand2,
      name: "Background Remover",
      description: "Remove backgrounds from images with AI precision",
      color: "bg-violet-100 text-violet-500"
    },
    {
      icon: Share2,
      name: "Social Media Templates",
      description: "Ready-to-use templates for all social platforms",
      color: "bg-rose-100 text-rose-500"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with these design tools?",
      answer: "Simply sign up for an account, choose your subscription plan, and you'll have immediate access to all tools based on your plan level. Each tool has an intuitive interface with guided tutorials to help you get started."
    },
    {
      question: "Can I use these tools for commercial projects?",
      answer: "Yes! All designs created with our tools can be used for both personal and commercial projects, with no additional licensing fees required."
    },
    {
      question: "What file formats do your tools support?",
      answer: "Our tools support a wide range of formats including PNG, JPG, SVG, PDF, and more. Specific export options vary by tool and plan level."
    },
    {
      question: "Do I need design experience to use these tools?",
      answer: "Not at all! Our AI-powered tools are designed for users of all skill levels. You can create professional designs with no prior design experience."
    },
    {
      question: "Can I collaborate with team members?",
      answer: "Yes, collaboration features are available on all plans. The number of team members you can invite depends on your subscription level."
    },
    {
      question: "Are there any tutorials available?",
      answer: "Yes, we offer comprehensive tutorials for all our tools in our Help Center. You can also find video tutorials on our YouTube channel."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">Our Design Tools</h1>
            <p className="text-xl text-gray-600">Everything you need to create stunning designs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tools.map((tool, index) => (
              <Tool key={index} {...tool} />
            ))}
          </div>
          
          {/* FAQs Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
