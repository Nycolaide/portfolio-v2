<template>
  <v-app-bar color="bg">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-img
          v-on="on"
          max-height="52"
          max-width="52"
          src="/img/logo.svg"
        ></v-img>
      </template>
      <span>Hello World ! 🖖🏻</span>
    </v-tooltip>

    <v-app-bar-title class="app-title">
      Portfolio
    </v-app-bar-title>

    <v-spacer />
    <v-btn depressed color="btn" class="text-capitalize mr-1 ml-1 icon-btn">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      max-width="260"
      min-width="260"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          color="btn"
          class="text-capitalize mr-1 ml-1 icon-btn"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-tablet-cellphone</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <div class="d-flex flex-row justify-center text-center">
            <qrcode-vue
              value="https://example.com"
              size="100"
              level="H"
              class="mt-5 mb-0"
            />

            <v-img
              max-height="140"
              max-width="140"
              src="/img/qrcode_contour.svg"
              style="position: absolute"
            ></v-img>
          </div>

          <div
            class="d-flex flex-row mt-6 justify-center text-center"
            style="margin-left: -20px; margin-right: -20px;"
          >
            <v-img
              max-height="72"
              max-width="72"
              src="/img/bot/bot_joy.svg"
              style="transform: rotate(-20deg);"
            ></v-img>

            <span class="mt-6 mb-0">Utiliser l'application sur mobile</span>
            <v-img
              max-height="72"
              max-width="72"
              src="/img/bot/bot_surprise.svg"
              style="transform: rotate(20deg);"
            ></v-img>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <v-btn
            depressed
            color="btn"
            @click="$router.push({ name: 'Homepage' })"
            class="text-capitalize mr-1 ml-1"
          >
            New home
          </v-btn>
        </span>
      </template>
      <span>La fonctionnalitée est en projet ! 🤞🏻</span>
    </v-tooltip>

    <v-btn
      depressed
      color="btn"
      @click="$router.push({ name: 'Home' })"
      class="text-capitalize mr-1 ml-1"
    >
      Home
    </v-btn>

    <v-avatar size="36">
      <img src="@/assets/laurent.jpg" alt="Laurent Grimaldi" />
    </v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import QrcodeVue from "qrcode.vue";

export default Vue.extend({
  components: {
    QrcodeVue,
  },
  data() {
    return {
      menu: false,
    };
  },
});
</script>
