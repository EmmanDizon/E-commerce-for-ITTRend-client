import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.auth);

  return user && user.isAuthenticated;
};

export default function AuthRestrictionRoute() {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/" replace state={1} /> : <Outlet />;
}
