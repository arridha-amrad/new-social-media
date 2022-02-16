import "./styles/authentication.css";

import { Link } from "react-router-dom";
import MatButtonGoogle from "../../materialComponent/MatButtonGoogle";
import MatDivider from "../../materialComponent/MatDivider";
import InputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";
import { useAppDispatch } from "../../store/hooks";
import { FormEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import UseForm from "../../utils/useForm";
import { registration } from "../../store/User/userSlice";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const { onChange, state } = UseForm({
    email: "",
    username: "",
    password: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(registration(state)).then(() => {
      setLoading(false);
    });
  };

  return (
    <AuthPageWrapper>
      <form className="form-auth" onSubmit={onSubmit}>
        <MatTextField
          onChange={onChange}
          name="email"
          value={state.email}
          isFullWidth={true}
          label="Email"
          variant="outlined"
        />

        <MatTextField
          onChange={onChange}
          name="username"
          value={state.username}
          isFullWidth={true}
          label="Username"
          variant="outlined"
        />

        <InputPassword onChange={onChange} value={state.password} />

        <MatButton
          isLoading={loading}
          type="submit"
          isFullWidth={true}
          label="Register"
        />

        <Typography variant="body1" textAlign="center">
          have an account ?<Link to="/login">&nbsp;login</Link>
        </Typography>

        <MatDivider />

        <MatButtonGoogle isDisabled={loading} />
      </form>
    </AuthPageWrapper>
  );
};

export default Register;
