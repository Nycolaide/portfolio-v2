import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./RootState";

//store
import { application } from "@/store/application";
import { profil } from "@/store/profil";
import { post } from "@/store/post";
import { media } from "@/store/media";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    application,
    profil,
    post,
    media,
  },
});
