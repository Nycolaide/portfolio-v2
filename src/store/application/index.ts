import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Application } from "./types";
import { RootState } from "../../model/RootState";

export const getDefaultState = (): Application => {
  const state = {
    dialogCard: {
      title: "",
      category: "",
      show: false,
    },
    notification: {
      text: "",
      timeout: 6000,
      show: false,
    },
    applicationInit: {},
  };
  return state;
};

export const state: Application = getDefaultState();

export const application: Module<Application, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default application;
