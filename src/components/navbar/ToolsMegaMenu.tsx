
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import FreeToolsColumn from "./FreeToolsColumn";
import PremiumToolsColumn from "./PremiumToolsColumn";
import ViewAllToolsFooter from "./ViewAllToolsFooter";

export const ToolsMegaMenu = ({ setIsMenuOpen }: { setIsMenuOpen?: (value: boolean) => void }) => {
  return (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Link 
          to="/tools" 
          className="font-medium text-gray-900 hover:text-primary transition-colors flex items-center"
        >
          Tools
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-[700px] p-0 bg-white shadow-lg rounded-xl border" align="start">
        <div className="grid grid-cols-2 gap-0 w-full p-4">
          {/* Free Tools Column */}
          <FreeToolsColumn setIsMenuOpen={setIsMenuOpen} />
          
          {/* Paid/AI Tools Column */}
          <PremiumToolsColumn setIsMenuOpen={setIsMenuOpen} />
        </div>
        
        {/* View All Tools Footer */}
        <ViewAllToolsFooter setIsMenuOpen={setIsMenuOpen} />
      </HoverCardContent>
    </HoverCard>
  );
};
