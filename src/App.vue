<template>
  <v-app id="app" data-view>
    <Snackbar />

    <!-- navigation-bar -->
    <AppBar />
    <!-- !navigation-bar -->

    <v-app-bar flat dense color="header">
      <!-- -->
      <v-container class="content--app pr-0 pl-0 pr-mb-2 pl-mb-2">
        <v-toolbar flat dense color="header">
          <span class="text-h4 font-weight-black">Portfolio</span>
          <v-spacer />
          <Darkmode />
        </v-toolbar>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer color="footerApp" dark>
      <v-container class="content--app">
        <v-row class="align-center">
          <v-col cols="12" sm="10">
            ©2021 - Laurent Grimaldi - Toutes les marques citées appartiennent à
            leurs propriétaires respectifs. Version
            {{ this.versionApp }}
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

//core
import { ControlReleaseCore } from "@/core/index";

//templates
import AppBar from "@/components/templates/AppBar.vue";

//components
import Darkmode from "@/components/theme/Darkmode.vue";
import Snackbar from "@/components/theme/Snackbar.vue";

export default Vue.extend({
  name: "App",

  components: {
    AppBar,
    Darkmode,
    Snackbar,
  },
  data() {
    return {
      versionApp: process.env.VUE_APP_VERSION,
    };
  },
  async created() {
    await ControlReleaseCore(this.versionApp);
  },
});
</script>
