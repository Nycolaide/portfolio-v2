import { MutationTree } from "vuex";
import { Media } from "./types";

export const mutations: MutationTree<Media> = {
  hero(state, payload) {
    state.heroData = payload;
  },
};
