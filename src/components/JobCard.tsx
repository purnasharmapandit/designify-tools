
import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface JobCardProps {
  job: Job;
  onApply: () => void;
  animationDelay?: number;
}

const JobCard = ({ job, onApply, animationDelay = 0 }: JobCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm border overflow-hidden"
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{job.type}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>View Less <ChevronUp className="ml-1 h-4 w-4" /></>
              ) : (
                <>View More <ChevronDown className="ml-1 h-4 w-4" /></>
              )}
            </Button>
            <Button 
              size="sm"
              onClick={onApply}
            >
              Apply Now
            </Button>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{job.description}</p>
        
        {isExpanded && (
          <div className="mt-6 space-y-6 text-gray-700 animate-fade-in">
            <div>
              <h4 className="text-lg font-semibold mb-2">Requirements</h4>
              <ul className="list-disc pl-5 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-1">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-2">
              <Button onClick={onApply}>
                Apply for this position
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default JobCard;
