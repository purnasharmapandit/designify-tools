
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresAccessCode?: boolean;
}

const ADMIN_EMAIL = "accesstechjagat@gmail.com";

const ProtectedRoute = ({ children, requiresAccessCode = false }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Check if user is logged in
  if (!user) {
    // Redirect to the login page but save the current location they were trying to access
    return <Navigate to="/auth" state={{ returnTo: location.pathname, requiresSignUp: true }} replace />;
  }

  // For blog admin routes, check if the user has the admin email
  if (location.pathname.startsWith("/blog-admin") && user.email !== ADMIN_EMAIL) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
