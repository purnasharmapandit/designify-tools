
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import FreeToolsColumn from "./FreeToolsColumn";
import ViewAllToolsFooter from "./ViewAllToolsFooter";

export const FreeToolsMegaMenu = ({ setIsMenuOpen }: { setIsMenuOpen?: (value: boolean) => void }) => {
  return (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Link 
          to="/tools" 
          className="font-medium text-gray-900 hover:text-primary transition-colors flex items-center"
        >
          Free Tools
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-[400px] p-0 bg-white shadow-lg rounded-xl border" align="start">
        <div className="p-4">
          <div className="mb-3 px-3 py-2 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Free Tools</h3>
          </div>
          
          {/* Free Tools Grid */}
          <FreeToolsColumn setIsMenuOpen={setIsMenuOpen} />
        </div>
        
        {/* View All Tools Footer */}
        <ViewAllToolsFooter setIsMenuOpen={setIsMenuOpen} />
      </HoverCardContent>
    </HoverCard>
  );
};
