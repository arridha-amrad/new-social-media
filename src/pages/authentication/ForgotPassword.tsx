import "./styles/authentication.css";

import { Link } from "react-router-dom";
import MatButton from "../../materialComponent/MatLoadingButton";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";
import { useAppDispatch } from "../../store/hooks";
import { FormEvent, useState } from "react";
import { forgotPassword } from "../../store/User/userSlice";
import UseForm from "../../utils/useForm";

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { onChange, state } = UseForm({
    email: "",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(forgotPassword(state.email));
    setLoading(false);
  };

  return (
    <AuthPageWrapper>
      <form className="form-auth" onSubmit={onSubmit}>
        <MatTextField
          onChange={onChange}
          value={state.email}
          name="email"
          isFullWidth={true}
          label="Email"
          variant="outlined"
          helperText="Enter your registered email"
        />

        <MatButton isLoading={loading} isFullWidth={true} label="Send" />

        <div className="mid-text">
          back to<Link to="/login">&nbsp;login</Link>
        </div>
      </form>
    </AuthPageWrapper>
  );
};

export default ForgotPassword;
