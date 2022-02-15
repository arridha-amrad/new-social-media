import LoadingButton from "@mui/lab/LoadingButton";

import { FC } from "react";

interface MatButtonProps {
  isFullWidth?: boolean;
  label: string;
}

const MatButton: FC<MatButtonProps> = ({ isFullWidth = false, label }) => {
  return (
    <LoadingButton fullWidth={isFullWidth} variant="contained">
      {label}
    </LoadingButton>
  );
};

export default MatButton;
