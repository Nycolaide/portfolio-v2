import { ActionTree } from "vuex";
import { Categories } from "./types";
import { RootState } from "../../model/RootState";
import axios from "axios";
import { getApi } from "@/utils/index";

export const actions: ActionTree<Categories, RootState> = {
  async getMetaCategories({ commit }): Promise<any> {
    //Loading...
    commit("formatWpCategoriesHome");
    try {
      //API call
      const response = await getApi({
        url: "api/meta-categories",
      });
      //Success
      commit("formatWpCategoriesHome", response.data);

      //Fail
    } catch (error) {
      commit("formatWpCategoriesHome", error);
    }
  },
};
