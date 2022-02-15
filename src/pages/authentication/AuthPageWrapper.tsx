import Paper from "@mui/material/Paper";
import { ReactNode } from "react";
import AuthFooter from "../../components/Footer/AuthFooter";

const AuthPageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-page">
      <div className="main">
        <Paper className="container" elevation={3}>
          {children}
        </Paper>
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthPageWrapper;
