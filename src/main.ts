import "@/assets/scss/style.scss";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import VueFlicking from "@egjs/vue-flicking";

Vue.use(VueFlicking);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
