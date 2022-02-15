import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Alert, AlertState } from "./AlertTypes";

const initialState: AlertState = {
  alert: null,
  snackbars: [],
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<Alert>) => {
      state.alert = action.payload;
    },
    unsetAlert: (state) => {
      state.alert = null;
    },
    setSnackbar: (state, action: PayloadAction<Alert>) => {
      const alert: Alert = {
        id: nanoid(4),
        ...action.payload,
      };
      state.snackbars.push(alert);
    },
    unsetSnackbar: (state, action: PayloadAction<Alert>) => {
      state.snackbars = state.snackbars.filter(
        (snackbar) => snackbar.id !== action.payload.id
      );
    },
  },
});

export const { setAlert, unsetAlert, setSnackbar, unsetSnackbar } =
  alertSlice.actions;

export const selectAlert = (state: RootState) => state.alerts.alert;

export const selectSnackbars = (state: RootState) => state.alerts.snackbars;

export default alertSlice.reducer;
