import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Briefcase, Clock, MapPin, Upload, FileText, Send, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import JobCard from "@/components/JobCard";
import ApplicationForm from "@/components/ApplicationForm";
const openPositions = [{
  id: "ui-ux-designer",
  title: "UI/UX Designer",
  department: "Design",
  location: "Remote",
  type: "Full-time",
  description: "We're looking for a talented UI/UX Designer to create amazing user experiences for our AI-powered design tools. You'll work closely with our product and engineering teams to design intuitive interfaces that make complex AI capabilities accessible to everyone.",
  requirements: ["3+ years of experience in UI/UX design", "Strong portfolio demonstrating user-centered design solutions", "Experience with Figma or similar design tools", "Knowledge of user research and usability testing methodologies", "Understanding of accessibility standards"],
  responsibilities: ["Create wireframes, prototypes, and high-fidelity designs", "Conduct user research and usability testing", "Develop and maintain design systems", "Collaborate with engineers to implement designs"]
}, {
  id: "frontend-developer",
  title: "Senior Frontend Developer",
  department: "Engineering",
  location: "Remote",
  type: "Full-time",
  description: "Join our engineering team to build the next generation of AI-powered design tools. You'll be responsible for implementing responsive interfaces that enable users to create stunning designs with our AI engine.",
  requirements: ["4+ years of experience with React and TypeScript", "Strong knowledge of modern CSS and responsive design", "Experience with state management libraries (Redux, Zustand, etc.)", "Familiarity with design systems and component libraries", "Excellent problem-solving skills"],
  responsibilities: ["Develop responsive, accessible frontend interfaces", "Optimize application performance", "Collaborate with designers and backend engineers", "Write clean, maintainable code with good test coverage"]
}, {
  id: "ml-engineer",
  title: "Machine Learning Engineer",
  department: "AI Research",
  location: "Remote",
  type: "Full-time",
  description: "Help us push the boundaries of what's possible with AI-powered design tools. You'll work on developing and improving our core ML models that power our logo and design generation features.",
  requirements: ["MS or PhD in Computer Science, Machine Learning, or related field", "Experience with PyTorch or TensorFlow", "Knowledge of modern ML techniques, particularly in computer vision and generative models", "Strong programming skills in Python", "Experience deploying ML models to production"],
  responsibilities: ["Research and implement state-of-the-art ML models", "Optimize models for production deployment", "Collaborate with product team to integrate ML capabilities", "Stay current with the latest research in AI and design"]
}];
const CareersPage = () => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const handleApplyNow = (jobId: string) => {
    setSelectedJobId(jobId);
    // Scroll to application form
    document.getElementById('application-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 to-accent/10 py-[40px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center pt-28 py-[70px]">
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </motion.h1>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Help us shape the future of AI-powered design tools and empower creators worldwide
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                <Button size="lg" className="text-base font-medium" onClick={() => document.getElementById('open-positions')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  View Open Positions
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Why Join Us Section */}
        <section className="bg-white py-[54px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 pt-28 py-[20px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Us?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be part of a team that's revolutionizing design through artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              title: "Cutting-Edge Technology",
              description: "Work with the latest AI and design technologies to solve complex challenges",
              icon: "🚀"
            }, {
              title: "Remote-First Culture",
              description: "Enjoy the freedom to work from anywhere with our globally distributed team",
              icon: "🌎"
            }, {
              title: "Growth & Learning",
              description: "Continuous learning opportunities and a clear path for career advancement",
              icon: "📈"
            }, {
              title: "Meaningful Impact",
              description: "Build tools that empower designers and entrepreneurs worldwide",
              icon: "💡"
            }, {
              title: "Work-Life Balance",
              description: "Flexible schedules and generous time off to keep you refreshed and creative",
              icon: "⚖️"
            }, {
              title: "Competitive Benefits",
              description: "Comprehensive healthcare, retirement plans, and other benefits for your wellbeing",
              icon: "🏆"
            }].map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-gray-50 p-6 rounded-xl shadow-sm border">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 pt-28">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our current opportunities and find your perfect role
              </p>
            </div>
            
            <div className="grid gap-6">
              {openPositions.map((job, index) => <JobCard key={job.id} job={job} onApply={() => handleApplyNow(job.id)} animationDelay={index * 0.1} />)}
            </div>
          </div>
        </section>
        
        {/* Application Form Section */}
        <section id="application-section" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 pt-28">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply Now</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Take the first step toward joining our team
              </p>
            </div>
            
            <ApplicationForm selectedJobId={selectedJobId} jobs={openPositions} />
          </div>
        </section>
        
        {/* Team Culture Section */}
        <section className="py-16 bg-primary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold pt-28">Our Culture & Values</h2>
                <p className="text-xl text-gray-700">
                  We believe in creating an inclusive, collaborative environment where everyone can do their best work.
                </p>
                
                <div className="space-y-4">
                  {["Innovation: We embrace new ideas and technologies", "Excellence: We strive for the highest quality in everything we do", "Collaboration: We work together across teams and disciplines", "Empathy: We put users at the center of our design process", "Growth: We continuously learn and improve"].map((value, index) => <div key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-lg text-gray-700">{value}</p>
                    </div>)}
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="aspect-video bg-white rounded-xl shadow-md overflow-hidden">
                <img src="/lovable-uploads/team-image.jpg" alt="Team collaboration" className="w-full h-full object-cover" onError={e => {
                // Fallback if image doesn't exist
                e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
              }} />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default CareersPage;