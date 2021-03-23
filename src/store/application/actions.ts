import { ActionTree } from "vuex";
import { Application } from "./types";
import { RootState } from "../../model/RootState";
import { getApi } from "@/utils";

export const actions: ActionTree<Application, RootState> = {
  async getApplicationDefault({ commit }): Promise<any> {
    //Loading...
    try {
      //API call
      const response = await getApi({
        url: "api/app",
      });
      //Success
      commit("getApplicationSetting", response);
      console.log("getApplicationSetting", response);

      //Fail
    } catch (error) {
      commit("getApplicationSetting", error);
    }
  },
};
