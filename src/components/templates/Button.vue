<template>
  <v-btn
    depressed
    :class="
      large ? 'body-1 text-capitalize mr-1 ml-1' : 'text-capitalize mr-1 ml-1'
    "
    :color="color"
    :x-small="xsmall"
    :small="small"
    :medium="medium"
    :large="large"
    :x-large="xlarge"
    :disabled="disabled"
  >
    <slot name="content">{{ text }}</slot>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Button",
  props: {
    text: {
      type: String,
      required: false,
      default: "Button",
    },
    color: {
      type: String,
      required: false,
      default: "btn",
    },
    //SIZE
    xsmall: {
      type: Boolean,
      required: false,
      default: false,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    medium: {
      type: Boolean,
      required: false,
      default: false,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    xlarge: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    icon: {
      type: String,
      required: false,
      default: "mdi-open-in-new",
    },
    link: {
      type: String,
      required: false,
      default: "https://google.fr",
    },
  },
});
</script>
