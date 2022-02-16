import "./styles/authentication.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import MatInputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import AuthPageWrapper from "./AuthPageWrapper";
import UseForm from "../../utils/useForm";
import { FormEvent } from "react";
import { useAppDispatch } from "../../store/hooks";
import { resetPassword } from "../../store/User/userSlice";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  const { onChange, state } = UseForm({
    password: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (token) {
      dispatch(resetPassword({ password: state.password, token }));
    } else {
      navigate("/login");
    }
  };

  return (
    <AuthPageWrapper>
      <form className="form-auth" onSubmit={onSubmit}>
        <MatInputPassword onChange={onChange} value={state.password} />

        <MatButton isFullWidth={true} label="Submit" />

        <div className="mid-text">
          back to<Link to="/login">&nbsp;login</Link>
        </div>
      </form>
    </AuthPageWrapper>
  );
};

export default ResetPassword;
