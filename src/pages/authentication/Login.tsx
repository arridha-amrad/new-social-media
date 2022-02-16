import InputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import { Link } from "react-router-dom";
import MatButtonGoogle from "../../materialComponent/MatButtonGoogle";
import MatDivider from "../../materialComponent/MatDivider";

import "./styles/authentication.css";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";
import { useAppDispatch } from "../../store/hooks";
import { FormEvent } from "react";
import { login } from "../../store/User/userSlice";
import UseForm from "../../utils/useForm";
import { LoginDTO } from "../../API/user/types";

const Login = () => {
  const dispatch = useAppDispatch();

  const { onChange, state } = UseForm<LoginDTO>({
    identity: "",
    password: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <AuthPageWrapper>
      <form className="form-auth" onSubmit={onSubmit}>
        <MatTextField
          onChange={onChange}
          value={state.identity}
          name="identity"
          isFullWidth={true}
          label="Email Or Username"
          variant="outlined"
        />
        <InputPassword onChange={onChange} value={state.password} />
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
