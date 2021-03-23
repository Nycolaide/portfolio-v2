import { ActionTree } from "vuex";
import { Profil } from "./types";
import { RootState } from "../../model/RootState";
import axios from "axios";
import { getApi } from "@/utils/index";

export const actions: ActionTree<Profil, RootState> = {
  async getProfil({ commit }): Promise<any> {
    //Loading...
    commit("hero");
    try {
      //API call
      const response = await getApi({
        url: "api/hero",
      });
      //Success
      commit("hero", response.data);
      console.log("getProfil", response.data);

      //Fail
    } catch (error) {
      commit("hero", error);
    }
  },
};
