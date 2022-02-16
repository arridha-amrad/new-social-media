import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./UserTypes";
import {
  registerAPI,
  loginAPI,
  forgotPasswordAPI,
  resetPasswordAPI,
} from "../../API/user/userApi";
import { LoginDTO, RegisterDTO, ResetPasswordDTO } from "../../API/user/types";
import { setAlert } from "../Alert/alertSlice";
import { RootState } from "..";

export const registration = createAsyncThunk(
  "user/register",
  async (registerData: RegisterDTO, thunkAPI) => {
    try {
      const { data } = await registerAPI(registerData);
      thunkAPI.dispatch(setAlert({ text: data.message, variant: "success" }));
    } catch (err: any) {
      return thunkAPI.dispatch(
        setAlert({ text: err.response.data.message, variant: "error" })
      );
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (loginData: LoginDTO, thunkAPI) => {
    try {
      const { data } = await loginAPI(loginData);
      return data.user;
    } catch (err: any) {
      thunkAPI.dispatch(
        setAlert({ text: err.response.data.message, variant: "error" })
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email: string, thunkAPI) => {
    try {
      const { data } = await forgotPasswordAPI(email);
      thunkAPI.dispatch(
        setAlert({
          text: data.message,
          variant: "success",
        })
      );
    } catch (err: any) {
      thunkAPI.dispatch(
        setAlert({ text: err.response.data.message, variant: "error" })
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (dto: ResetPasswordDTO, thunkAPI) => {
    try {
      const { data } = await resetPasswordAPI(dto);
      thunkAPI.dispatch(
        setAlert({
          text: data.message,
          variant: "success",
        })
      );
    } catch (err: any) {
      thunkAPI.dispatch(
        setAlert({
          text: err.response.data.message,
          variant: "error",
        })
      );
    }
  }
);

const initialState: AuthState = {
  user: null,
  isLoadingAuth: false,
  alert: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoadingAuth = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoadingAuth = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoadingAuth = false;
      state.user = action.payload as User;
    });
  },
});

export const { setUser } = userSlice.actions;

export const selectUserState = (state: RootState) => state.user;

export default userSlice.reducer;
