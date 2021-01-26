<template>
  <v-slide-group
    v-model="model"
    class="slideGroups"
    active-class="success"
    show-arrows
    center-active
  >
    <slot name="content"> </slot>
  </v-slide-group>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      model: null
    };
  }
});
</script>

<style lang="scss">
.theme--dark {
  .slideGroups {
    .v-slide-group__prev,
    .v-slide-group__next {
      position: relative;
      background: #fcfcfc00;
      z-index: 2;
      i {
        background: black;
        padding: 8px;
        border-radius: 25px;
      }
    }
  }
}
.slideGroups {
  @media screen and (max-width: 375px) {
    .v-slide-group__prev,
    .v-slide-group__next {
      display: none;
    }

    .v-slide-group__wrapper {
      width: 100%;
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }

  .v-image {
    .v-responsive__content {
      margin-bottom: 220px;
    }
  }

  .v-slide-group__wrapper {
    max-width: 1118px;
    margin: 0 auto;
  }
  .v-slide-group__prev,
  .v-slide-group__next {
    position: relative;
    background: #ff000000;
    z-index: 2;
    i {
      background: black;
      color: white;
      padding: 8px;
      border-radius: 25px;
    }
  }

  .v-slide-group__prev--disabled {
    opacity: 0;
  }
}
</style>
