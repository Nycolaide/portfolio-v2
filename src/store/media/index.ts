import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Media } from "./types";
import { RootState } from "../../model/RootState";

export const getDefaultState = (): Media => {
  const state = {
    heroData: {},
  };
  return state;
};

export const state: Media = getDefaultState();

export const media: Module<Media, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default media;
