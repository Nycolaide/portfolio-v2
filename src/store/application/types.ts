export interface Application {
  dialogCard: Dialog;
  notification: Notification;
  applicationInit: any;
}
export interface Dialog {
  title: string;
  category: string;
  show: boolean;
}

export interface Notification {
  timeout: number;
  show: boolean;
  text: string;
}
