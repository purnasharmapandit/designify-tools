
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ToolCardProps {
  color: string;
  image: string;
  alt: string;
  className?: string;
}

const ToolCard = ({ color, image, alt, className }: ToolCardProps) => {
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
      <div className="h-full w-full p-2 flex items-center justify-center">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default ToolCard;
