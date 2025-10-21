import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

const ProtectedRoute = () => {
  const { user, checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    // Auth Status prüfen beim Mount
    checkAuth();
  }, [checkAuth]);

  // Loading State während der Authentifizierung
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-100 mx-auto mb-4"></div>
          <p className="text_sm text-grey-400">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Redirect wenn nicht eingeloggt
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Render Child Routes wenn eingeloggt
  return <Outlet />;
};

export default ProtectedRoute;