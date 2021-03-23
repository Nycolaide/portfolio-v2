import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Categories } from "./types";
import { RootState } from "../../model/RootState";

export const getDefaultState = (): Categories => {
  const state = {
    categoriesHome: {},
  };
  return state;
};

export const state: Categories = getDefaultState();

export const categories: Module<Categories, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default categories;
