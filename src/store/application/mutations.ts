import { MutationTree } from "vuex";
import { Application } from "./types";

export const mutations: MutationTree<Application> = {
  updateDialog(state, payload) {
    console.log("updateDialog", payload);

    state.dialogCard = payload;
  },
  updateNotification(state, payload) {
    console.log("updateNotification", payload);

    state.notification = payload;
  },
};
