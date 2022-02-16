import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserReducer from "./User/userSlice";
import AlertReducer from "./Alert/alertSlice";

export const store = configureStore({
  reducer: {
    alerts: AlertReducer,
    user: UserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
