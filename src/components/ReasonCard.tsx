
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ReasonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgGradient: string;
  iconBgColor: string;
  delay?: number;
}

const ReasonCard = ({ 
  icon: Icon, 
  title, 
  description, 
  bgGradient,
  iconBgColor,
  delay = 0 
}: ReasonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-3xl p-6 card-hover h-full",
        bgGradient
      )}
    >
      <div className="flex flex-col h-full">
        <div className={cn("p-3 rounded-full w-fit mb-4", iconBgColor)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mt-auto">{description}</p>
      </div>
    </motion.div>
  );
};

export default ReasonCard;
