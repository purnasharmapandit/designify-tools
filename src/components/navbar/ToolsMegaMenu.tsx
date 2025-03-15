
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

// Tool item component
const ToolMenuItem = ({ 
  icon: Icon, 
  name, 
  color, 
  link, 
  onClick
}: { 
  icon: React.ElementType; 
  name: string; 
  color: string;
  link: string;
  onClick?: () => void;
}) => (
  <Link 
    to={link} 
    className="group p-3 flex items-center space-x-3 rounded-lg hover:bg-gray-50"
    onClick={onClick}
  >
    <div className={`${color} p-2 rounded-lg`}>
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">{name}</h4>
    </div>
  </Link>
);

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
          <div className="pr-4 border-r border-gray-100">
            <div className="mb-3 px-3 py-2 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Free Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 h-5 w-5" {...props}>
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M17.5 14V21" stroke="currentColor" strokeWidth="2" />
                    <path d="M14 17.5H21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )} 
                name="QR Code Generator" 
                color="bg-purple-100" 
                link="/qr-code-generator"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
              
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5" {...props}>
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10Z" fill="currentColor" />
                    <path d="M15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z" fill="currentColor" />
                  </svg>
                )} 
                name="Color Palette Generator" 
                color="bg-blue-100"
                link="/color-palette-generator"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
              
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 h-5 w-5" {...props}>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 15C7 13.8954 7.89543 13 9 13H15C16.1046 13 17 13.8954 17 15V19H7V15Z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )} 
                name="Business Card Generator" 
                color="bg-pink-100"
                link="/business-card-generator"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
              
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 h-5 w-5" {...props}>
                    <path d="M15 7H21V9H15V7Z" fill="currentColor" />
                    <path d="M15 11H21V13H15V11Z" fill="currentColor" />
                    <path d="M15 15H21V17H15V15Z" fill="currentColor" />
                    <path d="M3 7H9V9H3V7Z" fill="currentColor" />
                    <path d="M3 11H9V13H3V11Z" fill="currentColor" />
                    <path d="M3 15H9V17H3V15Z" fill="currentColor" />
                    <path d="M11 7H13V9H11V7Z" fill="currentColor" />
                    <path d="M11 11H13V13H11V11Z" fill="currentColor" />
                    <path d="M11 15H13V17H11V15Z" fill="currentColor" />
                  </svg>
                )} 
                name="Background Remover" 
                color="bg-green-100"
                link="/background-remover"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
              
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-600 h-5 w-5" {...props}>
                    <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )} 
                name="Email Signature Generator" 
                color="bg-yellow-100"
                link="/email-signature-generator"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
            </div>
          </div>
          
          {/* Paid/AI Tools Column */}
          <div className="pl-4">
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
            <div className="grid grid-cols-2 gap-4">
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 h-5 w-5" {...props}>
                    <path d="M20 14V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V14" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 19H9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 12L20 7" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 12L4 7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )} 
                name="AI Logo Maker" 
                color="bg-purple-100"
                link="/logo-maker"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
              
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5" {...props}>
                    <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )} 
                name="AI Icon Generator" 
                color="bg-blue-100"
                link="/icon-generator"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
              
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 h-5 w-5" {...props}>
                    <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M8.7 10.7L15.3 7.3" stroke="currentColor" strokeWidth="2" />
                    <path d="M8.7 13.3L15.3 16.7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )} 
                name="Social Media Kit" 
                color="bg-indigo-100"
                link="/social-media-kit"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
              
              <ToolMenuItem 
                icon={(props) => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-600 h-5 w-5" {...props}>
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" fill="currentColor" />
                    <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )} 
                name="Image Editor" 
                color="bg-pink-100"
                link="/image-editor"
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
        
        <div className="w-full p-3 border-t border-gray-100">
          <Link
            to="/tools"
            className="flex justify-center items-center py-2 text-sm font-medium text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
          >
            View all tools
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
