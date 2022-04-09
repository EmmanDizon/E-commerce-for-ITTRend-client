import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.auth);

  return user && user.isAuthenticated;
};

export default function ProtectRoutes() {
  const isAuth = useAuth();
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/home" />;
}
