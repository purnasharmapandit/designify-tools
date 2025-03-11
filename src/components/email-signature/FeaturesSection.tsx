
import React from "react";
import { 
  Palette, 
  Image, 
  Share2, 
  Calendar, 
  Smartphone, 
  Mail,
  BookMarked
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Professional Templates",
      description: "Choose from a collection of pre-designed professional templates."
    },
    {
      icon: <Image className="h-10 w-10 text-primary" />,
      title: "Brand Integration",
      description: "Add your logo, colors, and brand elements for a consistent look."
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Social Media Links",
      description: "Include professional social profiles to expand your network."
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Meeting Scheduler",
      description: "Make it easy for contacts to book meetings with you."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Responsive",
      description: "Your signature will look great on any device or email client."
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Client Compatible",
      description: "Works with Gmail, Outlook, Apple Mail, and other major clients."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BookMarked className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Signature Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create professional email signatures that leave a lasting impression
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
