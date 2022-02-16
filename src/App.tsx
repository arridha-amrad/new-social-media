import { useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getLoginUserAPI } from "./API/user/userApi";
import ProtectedRoutes from "./components/Protected";
import MatBackdrop from "./materialComponent/MatBackdrop";
import { Home, Login, Register, ForgotPassword, ResetPassword } from "./pages";
import { useAppDispatch } from "./store/hooks";
import { setUser } from "./store/User/userSlice";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const dispatch = useAppDispatch();

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await getLoginUserAPI();
      if (isMounted) {
        dispatch(setUser(data.user));
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useLayoutEffect(() => {
    fetchUser();
    return () => setIsMounted(false);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <MatBackdrop />;
  }

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;
