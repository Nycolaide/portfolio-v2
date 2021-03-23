<template>
  <v-dialog
    v-model="showDialog"
    :max-width="sizeDialog"
    @click:outside="closeBtn()"
  >
    <v-card rounded="lg">
      <!-- Header -->
      <v-toolbar flat justify="space-around" class="pb-10" color="background">
        <v-spacer />
        <v-avatar
          v-if="mode == 'modal'"
          :size="110"
          class="border-avatar"
          style="margin-top: -65px; margin-left: 41px;"
        >
          <img :src="picture.source" :alt="picture.title" />
        </v-avatar>
        <v-spacer />
        <v-btn icon @click="closeBtn()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- /Header -->

      <v-card-title class="text-h4 font-weight-bold pt-2 pb-10">
        <!-- title slot -->
        <slot name="title"> <v-spacer />{{ title }}<v-spacer /> </slot>
        <!-- !title slot -->
      </v-card-title>

      <v-card-text class="text-center">
        <!-- content slot -->
        <slot name="content"> </slot>
        <!-- !content slot -->
      </v-card-text>
      <v-card-actions class="pt-10 pb-10 text-capitalize" v-if="action">
        <slot name="action">
          <v-spacer />
          <v-btn
            color="primary"
            block
            rounded
            large
            @click="dialog = false"
            class="text-capitalize"
          >
            I accept
          </v-btn>
          <v-spacer />
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
/**
 * TEMPLATE
 * @name Dialog
 * @description Component for dialog
 * @author Laurent Grimaldi
 */
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Dialog",
  props: {
    title: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
      default: "modal",
    },
    action: {
      type: Boolean,
      required: false,
      default: false,
    },
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "sd",
    },
    content: {
      type: Object,
      required: false,
    },

    disabled: { type: Boolean, required: false, default: false },

    noclick: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      sizeDialog: "",
      picture: {
        id: 0,
        source: "",
        title: "",
      },
    };
  },
  mounted() {
    switch (this.size) {
      case "sd":
        this.sizeDialog = "300";
        break;
      case "md":
        this.sizeDialog = "500";
        break;
      case "ld":
        this.sizeDialog = "90%";
        break;
    }
  },
  computed: {
    showDialog: {
      get(): boolean {
        if (this.content.hasOwnProperty("data")) {
          this.$set(this.$data, "picture", this.content.data.logo);
        }

        return this.show;
      },
      set(value: boolean) {
        this.$emit("update:show", value);
      },
    },
  },
  methods: {
    closeBtn() {
      this.showDialog = false;
    },
  },
});
</script>

<style lang="scss">
.v-dialog {
  overflow-y: inherit !important;

  .theme--dark.v-card {
    background-color: #121212 !important;

    .border-avatar {
      border: 6px solid #121212;
      background-color: #121212;
    }
  }

  .border-avatar {
    border: 6px solid white;
    background-color: white;
  }
}
</style>
