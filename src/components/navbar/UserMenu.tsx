
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { CreditBalance } from "@/components/CreditBalance";

interface UserMenuProps {
  user: any;
  signOut: () => void;
  isLoading: boolean;
}

const UserMenu = ({ user, signOut, isLoading }: UserMenuProps) => {
  if (isLoading) {
    return <div className="h-10 w-20 bg-gray-200 animate-pulse rounded-full"></div>;
  }
  
  if (user) {
    return (
      <div className="flex items-center gap-2">
        <CreditBalance />
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
          onClick={signOut}
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Sign out</span>
        </Button>
        <Button
          variant="default"
          size="sm"
          className="rounded-full"
        >
          <User className="h-4 w-4 mr-2" />
          <span>Profile</span>
        </Button>
      </div>
    );
  }
  
  return (
    <Link to="/auth">
      <Button
        variant="default"
        className="hidden md:inline-flex rounded-full font-medium px-6 transition-all"
      >
        Sign in
      </Button>
    </Link>
  );
};

export default UserMenu;
