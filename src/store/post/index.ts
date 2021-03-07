import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Post } from "./types";
import { RootState } from "../../model/RootState";

export const getDefaultState = (): Post => {
  const state = {
    postList: {},
  };
  return state;
};

export const state: Post = getDefaultState();

export const post: Module<Post, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default post;
