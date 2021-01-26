<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-1"
        fab
        dark
        small
        :color="data.color"
        depressed
        v-bind="attrs"
        v-on="on"
        :href="data.link"
        target="_blank"
      >
        <v-icon dark>
          {{ data.icon }}
        </v-icon>
      </v-btn>
    </template>
    <span class="text-capitalize">
      {{ data.name }} <v-icon dark small>mdi-open-in-new</v-icon>
    </span>
  </v-tooltip>
</template>

<script lang="ts">
/**
 * COMPONENT
 * @name Network
 * @description component button for link network
 * @author Laurent Grimaldi
 * @props name, color, icon, link
 * @link https://vuetifyjs.com/en/components/buttons/
 */
import Vue from "vue";

export default Vue.extend({
  name: "social-network",
  props: {
    data: {
      type: Object,
      required: false
    },
    color: {
      type: String,
      required: false,
      default: "black"
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-open-in-new"
    },
    link: {
      type: String,
      required: false,
      default: "https://google.fr"
    }
  }
});
</script>
