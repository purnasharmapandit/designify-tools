
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import PremiumToolsColumn from "./PremiumToolsColumn";
import ViewAllToolsFooter from "./ViewAllToolsFooter";

export const PaidToolsMegaMenu = ({ setIsMenuOpen }: { setIsMenuOpen?: (value: boolean) => void }) => {
  return (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Link 
          to="/tools" 
          className="font-medium text-gray-900 hover:text-primary transition-colors flex items-center"
        >
          Premium Tools
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-[400px] p-0 bg-white shadow-lg rounded-xl border" align="start">
        <div className="p-4">
          <div className="mb-3 px-3 py-2 bg-gradient-to-r from-brand-purple/10 to-brand-purple/20 rounded-lg">
            <h3 className="text-sm font-semibold text-brand-purple uppercase tracking-wider flex items-center">
              Premium AI Tools
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-3.5 w-3.5 text-brand-purple">
                <path d="M7 3.34455C8.73483 2.4737 10.8346 2.4737 12.5694 3.34455C14.3042 4.21541 15.4514 5.8026 15.6145 7.58806C15.7777 9.37351 14.9358 11.093 13.4116 12.1578L15.4429 17.8888C15.5403 18.1501 15.5013 18.4419 15.3382 18.6707C15.1751 18.8995 14.9075 19.0311 14.6216 19.0162L12.0297 18.8421L10.171 20.8333C9.98432 21.0355 9.72155 21.1415 9.4517 21.1203C9.18186 21.0991 8.94051 20.9535 8.79414 20.7246L5.12822 14.386C3.24829 13.6462 1.99122 12.0097 1.82242 10.1348C1.65362 8.25982 2.60498 6.4602 4.27538 5.43306C5.94578 4.40592 8.08401 4.31413 9.8188 5.18498L7 3.34455Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5588 6.91683L16.8497 4.62595C17.0729 4.40274 17.4017 4.40274 17.6249 4.62595L19.374 6.37507C19.5972 6.59828 19.5972 6.92706 19.374 7.15028L17.0831 9.44115" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M13.1214 8.35419L15.226 10.4588" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </h3>
          </div>
          
          {/* Premium Tools Grid */}
          <PremiumToolsColumn setIsMenuOpen={setIsMenuOpen} />
        </div>
        
        {/* View All Tools Footer */}
        <ViewAllToolsFooter setIsMenuOpen={setIsMenuOpen} />
      </HoverCardContent>
    </HoverCard>
  );
};
