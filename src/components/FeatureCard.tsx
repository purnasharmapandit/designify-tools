
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconColor?: string;
  bgGradient: string;
  delay?: number;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  iconColor = "text-white",
  bgGradient,
  delay = 0
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-3xl p-6 card-hover flex flex-col items-center text-center h-full",
        bgGradient,
        className
      )}
    >
      <div className={cn("p-3 rounded-full mb-4 backdrop-blur-sm bg-white/30", iconColor)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
