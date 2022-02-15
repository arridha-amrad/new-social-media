import { Link } from "react-router-dom";
import MatAlert from "../../materialComponent/MatAlert";
import MatButtonGoogle from "../../materialComponent/MatButtonGoogle";
import MatDivider from "../../materialComponent/MatDivider";
import InputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";

import "./styles/authentication.css";

const Register = () => {
  return (
    <AuthPageWrapper>
      <form className="form">
        <h1>Let's Join Us !</h1>
        <MatAlert />
        <MatTextField isFullWidth={true} label="Email" variant="outlined" />
        <MatTextField isFullWidth={true} label="Username" variant="outlined" />
        <InputPassword />
        <MatButton isFullWidth={true} label="Register" />

        <div className="mid-text">
          have an account ?<Link to="/login">&nbsp;login</Link>
        </div>

        <MatDivider />

        <MatButtonGoogle />
      </form>
      <div className="wallpaper">
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
          alt="wallpaper"
        />
      </div>
    </AuthPageWrapper>
  );
};

export default Register;
