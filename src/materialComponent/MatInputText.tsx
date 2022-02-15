import TextField from "@mui/material/TextField";
import { FC } from "react";

interface MatInputTextProps {
  isFullWidth: boolean;
  label: string;
  variant: "outlined" | "filled" | "standard";
  helperText?: string;
}

const MatInputText: FC<MatInputTextProps> = ({
  variant,
  isFullWidth,
  label,
  helperText,
}) => {
  return (
    <TextField
      fullWidth={isFullWidth}
      label={label}
      helperText={helperText}
      variant={variant}
    />
  );
};

export default MatInputText;
