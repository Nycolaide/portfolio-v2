import { MutationTree } from "vuex";
import { Profil } from "./types";

export const mutations: MutationTree<Profil> = {
  hero(state, payload) {
    state.heroData = payload;
  },
};
