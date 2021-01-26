<template>
  <v-sheet class="ma-2 card--hero" height="70" width="70" color="background">
    <v-card
      flat
      height="64"
      width="64"
      color="background"
      style="margin: 0 auto;"
    >
      <a :href="data.link" target="_blank">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
          color="background"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img
                :src="data.picture"
                class="rounded-circle ml-2 mr-2"
                v-bind="attrs"
                v-on="on"
                height="72px"
                width="64px"
              ></v-img>
            </template>
            <span
              >{{ data.name }} <br />
              {{ data.work }}</span
            >
          </v-tooltip>
        </v-row>
      </a>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: false
    }
  }
});
</script>
