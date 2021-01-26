<template>
  <v-sheet class="text-center pt-16 pb-16" color="background">
    <p v-text="title" class="text-h4 font-weight-bold"></p>
    <p v-html="desc" class="text-h6 font-weight-regular mt-6"></p>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "titlesection",
  props: {
    title: {
      type: String,
      required: false
    },
    desc: {
      type: String,
      required: false
    }
  }
});
</script>
