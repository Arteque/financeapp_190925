import { useAuthStore } from "../stores/AuthStore";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLogged = useAuthStore((state) => state.isLogged);

  return (
    <>
      {isLogged ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default ProtectedRoutes;
