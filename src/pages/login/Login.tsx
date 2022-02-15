import "./login.css";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputPassword from "../../materialComponent/MatInputPassword";
import MatButton from "../../materialComponent/MatButton";
import { Link } from "react-router-dom";
import MatButtonGoogle from "../../materialComponent/MatButtonGoogle";
import MatAlert from "../../materialComponent/MatAlert";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Login = () => {
  return (
    <div className="form-auth">
      <div className="main">
        <Paper className="container" elevation={3}>
          <div className="form">
            <h1>Welcome Back !</h1>
            <MatAlert />
            <TextField fullWidth label="Email Or Username" variant="outlined" />
            <InputPassword />
            <MatButton isFullWidth={true} label="Login" />
            <Link to="/forgot-password">forgot password ?</Link>
            <div className="mid-text">
              don't have an account ?<Link to="/register">&nbsp;register</Link>
            </div>

            <div>
              <Divider>
                <Chip label="Or" />
              </Divider>
            </div>

            <MatButtonGoogle />
          </div>
          <div className="wallpaper">
            <img src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
        </Paper>
      </div>
      <div className="footer">
        <div className="container">
          <div>Arridha Amrad</div>
          <div>arridhaamrad@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
