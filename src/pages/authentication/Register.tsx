import { Link } from "react-router-dom";
import MatAlert from "../../materialComponent/MatAlert";
import MatButtonGoogle from "../../materialComponent/MatButtonGoogle";
import MatDivider from "../../materialComponent/MatDivider";
import InputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatLoadingButton";
import MatTextField from "../../materialComponent/MatInputText";
import AuthPageWrapper from "./AuthPageWrapper";

import "./styles/authentication.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectAlert,
  setAlert,
  setSnackbar,
} from "../../store/Alert/alertSlice";
import { FormEvent, useState } from "react";
import MatSnackbar from "../../materialComponent/MatSnackbar";

const Register = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // setShowSnackbar(true);
    dispatch(
      setSnackbar({
        text: "Register Success",
        variant: "error",
      })
    );
  };

  const alert = useAppSelector(selectAlert);

  return (
    <AuthPageWrapper>
      <MatAlert alert={alert} />

      <form className="form-auth" onSubmit={onSubmit}>
        <MatTextField isFullWidth={true} label="Email" variant="outlined" />

        <MatTextField isFullWidth={true} label="Username" variant="outlined" />

        <InputPassword />

        <MatButton type="submit" isFullWidth={true} label="Register" />

        <div className="mid-text">
          have an account ?<Link to="/login">&nbsp;login</Link>
        </div>

        <MatDivider />

        <MatSnackbar isShow={showSnackbar} setShow={setShowSnackbar} />

        <MatButtonGoogle />
      </form>
    </AuthPageWrapper>
  );
};

export default Register;
