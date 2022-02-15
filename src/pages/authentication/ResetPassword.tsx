import { Link } from "react-router-dom";
import MatAlert from "../../materialComponent/MatAlert";
import MatInputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import AuthPageWrapper from "./AuthPageWrapper";

import "./styles/authentication.css";

const ResetPassword = () => {
  return (
    <AuthPageWrapper>
      <form className="form">
        <h1>One more step !</h1>
        <h1>Get your account back.</h1>
        <MatAlert />

        <MatInputPassword />

        <MatButton isFullWidth={true} label="Submit" />

        <div className="mid-text">
          back to<Link to="/login">&nbsp;login</Link>
        </div>
      </form>
      <div className="wallpaper">
        <img
          src="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
          alt="wallpaper"
        />
      </div>
    </AuthPageWrapper>
  );
};

export default ResetPassword;
