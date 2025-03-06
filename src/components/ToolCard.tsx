
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ToolCardProps {
  name: string;
  color: string;
  iconColor: string;
  className?: string;
}

const ToolCard = ({ name, color, iconColor, className }: ToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className={cn(
        "rounded-3xl overflow-hidden shadow-sm card-hover",
        color,
        className
      )}
      style={{ aspectRatio: "1/1" }}
    >
      <div className="h-full w-full p-6 flex flex-col items-center justify-center">
        <span className={cn("text-5xl mb-3", iconColor)}>✦</span>
        <h3 className="text-xl font-semibold text-center">{name}</h3>
      </div>
    </motion.div>
  );
};

export default ToolCard;
