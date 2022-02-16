import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectUserState } from "../store/User/userSlice";

const ProtectedRoutes = () => {
  const { user } = useAppSelector(selectUserState);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
