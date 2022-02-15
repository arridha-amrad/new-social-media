import { FC } from "react";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Alert as IAlert } from "../store/Alert/AlertTypes";
import { useAppDispatch } from "../store/hooks";
import { unsetAlert } from "../store/Alert/alertSlice";

interface MatAlertProps {
  alert: IAlert | null;
}

const MatAlert: FC<MatAlertProps> = ({ alert = null }) => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={!!alert}>
        <Alert
          severity={alert?.variant}
          variant="standard"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(unsetAlert());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alert?.text}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default MatAlert;
