import { MutationTree } from "vuex";
import { Application } from "./types";

export const mutations: MutationTree<Application> = {
  updateDialog(state, payload) {
    console.log("updateDialog", payload);

    state.dialogCard = payload;
  }
};
