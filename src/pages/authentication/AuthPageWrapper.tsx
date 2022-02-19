import Paper from "@mui/material/Paper";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthFooter } from "../../components";
import MatAlert from "../../materialComponent/MatAlert";
import { selectAlert, unsetAlert } from "../../store/Alert/alertSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import "./styles/authentication.css";

const AuthPageWrapper = ({ children }: { children: ReactNode }) => {
  let imgSource =
    "https://images.unsplash.com/photo-1444533045186-3d46ae6c5e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const location = useLocation();
  if (location.pathname === "/register") {
    imgSource =
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80";
  }
  if (location.pathname === "/login") {
    imgSource =
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  }
  if (location.pathname === "/reset-password") {
    imgSource =
      "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80";
  }

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const alert = useAppSelector(selectAlert);

  useEffect(() => {
    dispatch(unsetAlert());
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <div className="auth-page">
      <div className="main">
        <Paper className="container" elevation={3}>
          <div className="form">
            <h1 className="title">Let's Join Us !</h1>
            <MatAlert alert={alert} />
            {children}
          </div>
          <div className="wallpaper">
            <img src={imgSource} alt="wallpaper" />
          </div>
        </Paper>
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthPageWrapper;
