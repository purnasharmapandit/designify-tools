
import React from "react";
import ToolMenuItem from "./ToolMenuItem";

interface PremiumToolsColumnProps {
  setIsMenuOpen?: (value: boolean) => void;
}

const PremiumToolsColumn = ({ setIsMenuOpen }: PremiumToolsColumnProps) => {
  return (
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
  );
};

export default PremiumToolsColumn;
