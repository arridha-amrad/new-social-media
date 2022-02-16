import LoadingButton from "@mui/lab/LoadingButton";

import { FC } from "react";

interface MatButtonProps {
  isFullWidth?: boolean;
  label: string;
  type?: "button" | "submit";
  isLoading?: boolean;
}

const MatButton: FC<MatButtonProps> = ({
  type = "submit",
  isFullWidth = false,
  label,
  isLoading = false,
}) => {
  return (
    <LoadingButton
      loading={isLoading}
      type={type}
      fullWidth={isFullWidth}
      variant="contained"
    >
      {label}
    </LoadingButton>
  );
};

export default MatButton;
