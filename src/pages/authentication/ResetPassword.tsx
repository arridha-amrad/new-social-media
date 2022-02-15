import { Link } from "react-router-dom";
import MatInputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import AuthPageWrapper from "./AuthPageWrapper";

import "./styles/authentication.css";

const ResetPassword = () => {
  return (
    <AuthPageWrapper>
      <form className="form-auth">
        <MatInputPassword />

        <MatButton isFullWidth={true} label="Submit" />

        <div className="mid-text">
          back to<Link to="/login">&nbsp;login</Link>
        </div>
      </form>
    </AuthPageWrapper>
  );
};

export default ResetPassword;
