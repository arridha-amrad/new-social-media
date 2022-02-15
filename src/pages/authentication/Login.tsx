import InputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import { Link } from "react-router-dom";
import MatButtonGoogle from "../../materialComponent/MatButtonGoogle";
import MatDivider from "../../materialComponent/MatDivider";

import "./styles/authentication.css";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";

const Login = () => {
  return (
    <AuthPageWrapper>
      <form className="form-auth">
        <MatTextField
          isFullWidth={true}
          label="Email Or Username"
          variant="outlined"
        />
        <InputPassword />
        <MatButton isFullWidth={true} label="Login" />
        <Link to="/forgot-password">forgot password ?</Link>

        <div className="mid-text">
          don't have an account ?<Link to="/register">&nbsp;register</Link>
        </div>

        <MatDivider />

        <MatButtonGoogle />
      </form>
    </AuthPageWrapper>
  );
};

export default Login;
