<template>
  <div>
    <v-card elevation="0" :color="data ? data.color : 'primary'">
      <v-img
        :src="
          data
            ? data.featured_media
              ? data.featured_media.source
              : null
            : null
        "
        class="black--text text-center"
        v-bind:class="align"
        :height="height"
        :width="width"
      >
        <p class="mb-0 text-h6 font-weight-black">
          {{ data ? name : "" }}
        </p>
      </v-img>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
    align: {
      type: String,
      required: false,
      default: "align-center",
    },
  },
  computed: {
    name: {
      get() {
        let result = "";
        const propertyExist = this.data.toString().indexOf("categories") !== -1;
        if (!propertyExist) {
          for (const item in this.data.categories) {
            result = this.data.categories[item].name;
          }
        }
        return result;
      },
    },
  },
});
</script>
