<template>
  <div>
    <v-btn @click="changeTheme()" icon>
      <v-img
        v-if="$vuetify.theme.dark"
        :src="'https://www.svgrepo.com/show/65427/sun.svg'"
        contain
        width="20"
        height="20"
      />
      <v-img
        v-else
        :src="'https://www.svgrepo.com/show/16561/moon.svg'"
        contain
        width="20"
        height="20"
      />
    </v-btn>
  </div>
</template>

<script lang="ts">
/**
 * COMPONENT
 * @name Darkmode
 * @description Change to Darkmode / Lightmode to application
 * @author Laurent Grimaldi
 * @props no props, use $vuetify variables
 * @returns change global UI for dark or light mode
 * @link https://vuetifyjs.com/en/features/theme/#example
 */
import Vue from "vue";
export default Vue.extend({
  name: "modeTheme",
  data() {
    return {
      dark: "8cf19abac44887797fc8b62658d2efdcf06a2e339396e497d71395d6dfdd6f66" as string,
      light: "a6341d5aae1cd59bda37fbdcf1492cd3c177123c7215c74dbd546040091438d1" as string
    };
  },
  methods: {
    changeTheme() {
      if (this.$vuetify.theme.dark) {
        localStorage.setItem("app_theme", this.light);
        this.$vuetify.theme.dark = false;
      } else {
        localStorage.setItem("app_theme", this.dark);
        this.$vuetify.theme.dark = true;
      }
    }
  },
  mounted() {
    const theme = localStorage.getItem("app_theme");

    if (theme === this.dark) {
      this.$vuetify.theme.dark = true;
    }
  }
});
</script>
