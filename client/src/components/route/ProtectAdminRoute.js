import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const userState = useSelector((state) => state.auth);
  return userState?.user?.role === "admin";
};

const ProtectAdminRoutes = () => {
  const isAdmin = useAuth();
  return isAdmin ? <Outlet /> : <Navigate to="/home" />;
}

const ProtectUserRoutes = () => {
  const isAdmin = useAuth();
  return !isAdmin ? <Outlet /> : <Navigate to="/dashboard" />;
}

export {
  ProtectAdminRoutes,
  ProtectUserRoutes,
}