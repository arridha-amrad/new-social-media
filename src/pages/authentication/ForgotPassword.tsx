import { Link } from "react-router-dom";
import MatAlert from "../../materialComponent/MatAlert";
import MatButton from "../../materialComponent/MatLoadingButton";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";

import "./styles/authentication.css";

const ForgotPassword = () => {
  return (
    <AuthPageWrapper>
      <form className="form">
        <h1>Calm Pal !</h1>
        <h1>We'll fix your account.</h1>
        <MatAlert />

        <MatTextField
          isFullWidth={true}
          label="Email"
          variant="outlined"
          helperText="Enter your registered email"
        />

        <MatButton isFullWidth={true} label="Send" />

        <div className="mid-text">
          back to<Link to="/login">&nbsp;login</Link>
        </div>
      </form>
      <div className="wallpaper">
        <img
          src="https://images.unsplash.com/photo-1444533045186-3d46ae6c5e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="wallpaper"
        />
      </div>
    </AuthPageWrapper>
  );
};

export default ForgotPassword;
