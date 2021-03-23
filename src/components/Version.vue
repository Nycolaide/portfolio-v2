<template>
  <div>
    <v-row>
      <v-col cols="12" class="mb-2">
        <v-btn
          :href="content.data.github_project"
          target="_blank"
          dark
          color="#050d21"
          class="text-capitalize"
          elevation="0"
        >
          <v-icon left>
            mdi-github
          </v-icon>
          Github
          <v-icon right small>
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-toolbar dense flat color="background">
      <v-divider />
      <span class="pa-3 font-weight-bold"
        ><v-icon color="#3fb983">mdi-vuejs</v-icon> {{ version }}</span
      >
      <v-divider />
    </v-toolbar>
    <v-row>
      <v-col
        cols="12"
        class="text-center"
        v-html="content.data.description_version"
      ></v-col>
      <v-col cols="12" class="text-start">
        <v-btn
          text
          x-small
          class=" text-capitalize"
          href="https://v1.laurentgrimaldi.dev/"
          target="_blank"
        >
          Portfolio (v1 - 2018) <v-icon right small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    version: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: String,
      required: false,
      default: "https://google.com",
    },
    content: {
      type: Object,
      required: false,
    },
  },
});
</script>
