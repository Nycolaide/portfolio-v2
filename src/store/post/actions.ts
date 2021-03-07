import { ActionTree } from "vuex";
import { Post } from "./types";
import { RootState } from "../../model/RootState";
import axios from "axios";
import { getApi } from "@/utils/index";

export const actions: ActionTree<Post, RootState> = {
  async getPostList({ commit }): Promise<any> {
    //Loading...
    commit("getPostList");
    try {
      //API call
      const response = await getApi({
        url: "wp/v2/posts",
      });
      //Success
      commit("getPostList", response);
      console.log("getPostList", response);

      //Fail
    } catch (error) {
      commit("getPostList", error);
    }
  },
};
