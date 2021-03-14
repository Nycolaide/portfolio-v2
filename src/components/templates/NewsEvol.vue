<template>
  <div>
    <v-card elevation="0">
      <v-card-title class="pb-3">
        {{ data ? data.title : "" }}<v-spacer />
        <v-btn icon text>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>
        <v-icon>mdi-calendar</v-icon> {{ data ? date : "" }}
      </v-card-subtitle>
      <v-card-text v-html="data ? data.excerpt : ''" class="pb-0"></v-card-text>
      <v-card-actions class="pt-0">
        <v-chip v-for="item in category" :key="item.id" class="mr-2" small>
          {{ item.name }}
        </v-chip>
        <v-spacer />
        <v-btn>
          Voir
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { convertDate } from "@/utils/index";

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
  },
  computed: {
    date: {
      get() {
        let date;
        if (this.data) {
          date = convertDate(this.data.date);
          console.log();
        }
        return date;
      },
    },
    category: {
      get() {
        let response = [] as unknown[];
        if (this.data) {
          for (const item in this.data.categories) {
            if (this.data.categories[item].parent === 0) {
              response.push(this.data.categories[item]);
            }
          }
        }
        return response;
      },
    },
  },
});
</script>
