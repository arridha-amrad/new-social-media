import { Alert } from "../Alert/AlertTypes";

export interface User {
  id: string;
  username: string;
  avatarURL: string;
  email?: string;
  fullName?: string;
}

export interface AuthState {
  user: User | null;
  isLoadingAuth: boolean;
  alert: Alert | null;
}
