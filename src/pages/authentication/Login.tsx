import InputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import { Link } from "react-router-dom";
import MatButtonGoogle from "../../materialComponent/MatButtonGoogle";
import MatAlert from "../../materialComponent/MatAlert";
import MatDivider from "../../materialComponent/MatDivider";

import "./styles/authentication.css";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";

const Login = () => {
  return (
    <AuthPageWrapper>
      <form className="form">
        <h1>Welcome Back !</h1>
        <MatAlert />
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
      <div className="wallpaper">
        <img
          src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="wallpaper"
        />
      </div>
    </AuthPageWrapper>
  );
};

export default Login;
