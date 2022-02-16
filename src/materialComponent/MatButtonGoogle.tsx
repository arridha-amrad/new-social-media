import Button, { ButtonProps } from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import orange from "@mui/material/colors/orange";
import styled from "@emotion/styled";
import { FC } from "react";

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

interface Props {
  isDisabled?: boolean;
}

const MatButtonGoogle: FC<Props> = ({ isDisabled = false }) => {
  return (
    <ColorButton
      disabled={isDisabled}
      fullWidth
      variant="contained"
      startIcon={<GoogleIcon />}
    >
      Continue with Google
    </ColorButton>
  );
};

export default MatButtonGoogle;
