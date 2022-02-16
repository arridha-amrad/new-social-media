import {
  LoginDTO,
  LoginResponseDTO,
  RegisterDTO,
  RegisterResponseDTO,
  ResetPasswordDTO,
} from "./types";
import axiosInstance from "../../utils/axiosInterceptor";
import { User } from "../../store/User/UserTypes";

export const registerAPI = async (registerData: RegisterDTO) => {
  return axiosInstance.post<RegisterResponseDTO>(
    "/api/auth/register",
    registerData
  );
};

export const loginAPI = async (loginData: LoginDTO) => {
  return axiosInstance.post<LoginResponseDTO>("/api/auth/login", loginData);
};

export const forgotPasswordAPI = async (email: string) => {
  return axiosInstance.post<{ message: string }>("/api/auth/forgot-password", {
    email,
  });
};

export const resetPasswordAPI = async (data: ResetPasswordDTO) => {
  return axiosInstance.post<{ message: string }>(
    `/api/auth/reset-password/${data.token}`,
    { password: data.password }
  );
};

export const getLoginUserAPI = async () => {
  return axiosInstance.get<{ user: User }>("/api/user/me");
};

export const refreshToken = async () => {
  return axiosInstance.get("/api/auth/refresh-token");
};
