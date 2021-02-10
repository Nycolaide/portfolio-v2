import { GetterTree } from "vuex";
import { Application, Dialog, Notification } from "./types";
import { RootState } from "../../model/RootState";

export const getters: GetterTree<Application, RootState> = {
  notification(state): Notification {
    const { notification } = state;
    return notification;
  },
  dialogCard(state): Dialog {
    const { dialogCard } = state;
    return dialogCard;
  },
};
