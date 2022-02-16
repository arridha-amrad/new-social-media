import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ChangeEventHandler, FC, useState } from "react";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const MatInputPassword: FC<Props> = ({ onChange, value }) => {
  const [isShow, setShow] = useState(false);
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        name="password"
        value={value}
        onChange={onChange}
        type={isShow ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setShow((prev) => !prev)}>
              {isShow ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};

export default MatInputPassword;
