export interface Alert {
  id?: string;
  text: string;
  variant: "success" | "error";
}

export interface AlertState {
  alert: Alert | null;
  snackbars: Alert[];
}
