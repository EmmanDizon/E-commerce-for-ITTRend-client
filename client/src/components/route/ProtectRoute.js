import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.auth);

  return user && user.isAuthenticated;
};

const ProtectRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoutes;
