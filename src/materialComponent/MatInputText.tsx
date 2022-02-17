import TextField from "@mui/material/TextField";
import { ChangeEventHandler, FC } from "react";

interface MatInputTextProps {
  isFullWidth: boolean;
  label: string;
  variant: "outlined" | "filled" | "standard";
  helperText?: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  isMultiLine?: boolean;
  rows?: number;
}

const MatInputText: FC<MatInputTextProps> = ({
  variant,
  isFullWidth,
  label,
  helperText,
  onChange,
  name,
  value,
  isMultiLine = false,
  rows = 1,
}) => {
  return (
    <TextField
      rows={rows}
      multiline={isMultiLine}
      onChange={onChange}
      name={name}
      value={value}
      fullWidth={isFullWidth}
      label={label}
      helperText={helperText}
      variant={variant}
    />
  );
};

export default MatInputText;
