<template>
  <div>
    <v-snackbar
      v-model="showNotification"
      :timeout="notification.timeout ? notification.timeout : -1"
      left
    >
      <v-row>
        <v-col class="mt-2 mb-2">
          {{ notification.text }}
        </v-col>
      </v-row>

      <template v-slot:action="{ attrs }">
        <v-btn
          icon
          v-bind="attrs"
          @click="
            () =>
              $store.commit('application/updateNotification', { show: false })
          "
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
/**
 * COMPONENT
 * @name Notification
 * @description Generate popup notification in app
 * @author Laurent Grimaldi
 * @link https://vuetifyjs.com/en/components/snackbars/
 */
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("application", ["notification"]),

    showNotification: {
      get: function() {
        let show = false;
        if (this.notification.show) {
          show = true;
        }
        return show;
      },
      set(value: number): void {
        this.$store.commit("application/updateNotification", { show: value });
      },
    },
  },
});
</script>

<style lang="scss">
.v-sheet.v-snack__wrapper {
  border-radius: 14px !important;
}
</style>
