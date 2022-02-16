import { User } from "../../store/User/UserTypes";

export interface RegisterDTO {
  email: string;
  username: string;
  password: string;
}

export interface RegisterResponseDTO {
  message: string;
}

export interface LoginDTO {
  identity: string;
  password: string;
}

export interface LoginResponseDTO {
  user: User;
}

export interface ResetPasswordDTO {
  password: string;
  token: string;
}
