import { GetterTree } from "vuex";
import { Application, Dialog, Notification } from "./types";
import { RootState } from "../../model/RootState";

export const getters: GetterTree<Application, RootState> = {
  notification(state): Notification {
    const { notification } = state;
    console.log("notification", notification);
    return notification;
  },
  dialogCard(state): Dialog {
    const { dialogCard } = state;
    console.log("dialogCard", dialogCard);
    return dialogCard;
  },
};
