import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Profil } from "./types";
import { RootState } from "../../model/RootState";

export const getDefaultState = (): Profil => {
  const state = {
    heroData: {},
  };
  return state;
};

export const state: Profil = getDefaultState();

export const profil: Module<Profil, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default profil;
