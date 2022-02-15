import { Link } from "react-router-dom";
import MatButton from "../../materialComponent/MatLoadingButton";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";

import "./styles/authentication.css";

const ForgotPassword = () => {
  return (
    <AuthPageWrapper>
      <form className="form-auth">
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
    </AuthPageWrapper>
  );
};

export default ForgotPassword;
