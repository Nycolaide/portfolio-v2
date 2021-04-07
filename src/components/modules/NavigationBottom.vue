<template>
  <div>
    <v-bottom-navigation v-model="value" fixed style="z-index: 9999">
      <v-btn v-for="i in navigation" :key="i.name" :value="i.id">
        <span>{{ i.name }}</span>
        <v-icon>{{ i.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationBottom",
  data() {
    return {
      value: null,
      navigation: [
        {
          id: 0,
          name: "Home",
          route: "Home",
          icon: "mdi-home",
        },
        {
          id: 1,
          name: "Blog",
          route: "Home",
          icon: "mdi-newspaper",
        },
        {
          id: 2,
          name: "About",
          route: "Home",
          icon: "mdi-account",
        },
      ],
    };
  },
});
</script>
