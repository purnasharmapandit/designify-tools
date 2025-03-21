
import { NavLink } from "react-router-dom";
import { 
  FileText, 
  FolderOpen, 
  Tag, 
  Users, 
  LogOut, 
  Home 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

const BlogSidebar = () => {
  const { signOut } = useAuth();

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-4 border-b border-slate-700 flex items-center space-x-2">
        <Wand2 className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold font-display">Blog Admin</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1">
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) => cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Home className="mr-3 h-4 w-4" />
              Back to Site
            </NavLink>
          </li>
          
          <li className="pt-4">
            <h2 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Content
            </h2>
          </li>
          <li>
            <NavLink 
              to="/blog-admin"
              end
              className={({ isActive }) => cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <FileText className="mr-3 h-4 w-4" />
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog-admin?tab=categories"
              className={({ isActive }) => cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <FolderOpen className="mr-3 h-4 w-4" />
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog-admin?tab=tags"
              className={({ isActive }) => cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Tag className="mr-3 h-4 w-4" />
              Tags
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog-admin?tab=authors"
              className={({ isActive }) => cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Users className="mr-3 h-4 w-4" />
              Authors
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800"
          onClick={() => signOut()}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default BlogSidebar;
