<template>
  <v-card
    :color="data.color"
    :height="
      $vuetify.breakpoint.mb || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl
        ? '120px'
        : 'auto'
    "
    class="align-end rounded-xl"
    @click="openDialog(data.label, data.category)"
  >
    <v-card-text class="pa-md-5 pa-lg-5 pa-xl-5">
      <v-chip
        class="text-md-h5 font-weight-black"
        :large="
          $vuetify.breakpoint.mb ||
            $vuetify.breakpoint.lg ||
            $vuetify.breakpoint.xl
        "
        label
      >
        {{ data.label }}
      </v-chip>
    </v-card-text>
    <!--<v-img
      :src="data.picture"
      class="white--text align-top"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :height="
        $vuetify.breakpoint.mb ||
        $vuetify.breakpoint.lg ||
        $vuetify.breakpoint.xl
          ? '206px'
          : '130px'
      "
    >
    </v-img>-->
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  methods: {
    openDialog(title: string, category: string) {
      store.commit("application/updateDialog", {
        title: title,
        category: category,
        show: true
      });
    }
  }
});
</script>
