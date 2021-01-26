import { GetterTree } from "vuex";
import { Application, Dialog } from "./types";
import { RootState } from "../../model/RootState";

export const getters: GetterTree<Application, RootState> = {
  dialogCard(state): Dialog {
    const { dialogCard } = state;
    console.log("dialogCard", dialogCard);
    return dialogCard;
  }
};
