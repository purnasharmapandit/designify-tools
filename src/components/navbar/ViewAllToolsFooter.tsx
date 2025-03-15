
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ViewAllToolsFooterProps {
  setIsMenuOpen?: (value: boolean) => void;
}

const ViewAllToolsFooter = ({ setIsMenuOpen }: ViewAllToolsFooterProps) => {
  return (
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
  );
};

export default ViewAllToolsFooter;
