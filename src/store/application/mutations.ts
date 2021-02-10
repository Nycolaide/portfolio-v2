import { MutationTree } from "vuex";
import { Application } from "./types";

export const mutations: MutationTree<Application> = {
  updateDialog(state, payload) {
    state.dialogCard = payload;
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
};
