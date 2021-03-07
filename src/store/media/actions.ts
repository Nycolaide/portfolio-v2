import { ActionTree } from "vuex";
import { Media } from "./types";
import { RootState } from "../../model/RootState";
import axios from "axios";
import { getApi } from "@/utils/index";

export const actions: ActionTree<Media, RootState> = {
  async getMediaList({ commit }, payload): Promise<any> {
    //Loading...
    //commit("hero");
    try {
      //API call
      const response = await getApi({
        url: "wp/v2/media/",
        params: payload,
      });
      //Success
      //commit("hero", response.data);
      console.log("getMediaList", response.data);

      //Fail
    } catch (error) {
      //commit("hero", error);
    }
  },
};
