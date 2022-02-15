import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FC, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectSnackbars, unsetSnackbar } from "../store/Alert/alertSlice";

interface MatSnackbarProps {
  isShow: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
}

const MatSnackbar: FC<MatSnackbarProps> = ({ isShow, setShow }) => {
  const dispatch = useAppDispatch();
  const snackbars = useAppSelector(selectSnackbars);

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setShow(false);
  };

  console.log("snackbars : ", snackbars);

  return (
    <div>
      {snackbars.map((snackbar) => (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          key={snackbar.id}
          open={isShow}
          autoHideDuration={6000}
          onClose={(e, r) => {
            handleClose(e, r);
            dispatch(unsetSnackbar(snackbar));
          }}
          message={snackbar.text}
          action={
            <Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => {
                  setShow(false);
                  dispatch(unsetSnackbar(snackbar));
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Fragment>
          }
        />
      ))}
    </div>
  );
};

export default MatSnackbar;
