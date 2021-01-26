import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2D2C2D",
        header: "#768ddb",
        badgeColor: "#ffffff",
        background: "#ffffff",
        footerApp: "#23272a",
        lvl: "#768ddb"
      },
      dark: {
        primary: "#2D2C2D",
        header: "#768ddb",
        badgeColor: "#2D2C2D",
        background: "#121212",
        footerApp: "#23272a",
        lvl: "#768ddb"
      }
    }
  }
});
