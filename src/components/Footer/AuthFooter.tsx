import "./footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

const AuthFooter = () => {
  return (
    <div className="auth-footer">
      <div className="container">
        <Box display="inline-flex" alignItems="center">
          Created by{" "}
          <Typography fontWeight="bold">&nbsp;Arridha Amrad</Typography>
        </Box>
        <div className="author">
          <MailOutlineIcon />
          <p>arridhaamrad@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AuthFooter;
