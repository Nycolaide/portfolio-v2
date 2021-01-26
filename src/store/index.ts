import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./RootState";

//store
import { application } from "@/store/application";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    application
  }
});
