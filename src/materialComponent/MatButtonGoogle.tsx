import Button, { ButtonProps } from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import orange from "@mui/material/colors/orange";
import styled from "@emotion/styled";

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

const MatButtonGoogle = () => {
  return (
    <ColorButton fullWidth variant="contained" startIcon={<GoogleIcon />}>
      Continue with Google
    </ColorButton>
  );
};

export default MatButtonGoogle;
