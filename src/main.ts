import "@/assets/scss/style.scss";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import gsap from "gsap";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(gsap);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
