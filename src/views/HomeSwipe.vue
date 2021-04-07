<template>
  <swiper
    :page-transition="pageTransition"
    :loop="loop"
    :autoplay="autoplay"
    :interval="interval"
    :show-indicator="showIndicator"
    @beforeChange="beforeChange"
    @afterChange="afterChange"
  >
    <swiper-item v-for="(color, index) in colors" :key="index">
      <div
        class="page"
        :style="{
          background: color,
        }"
      >
        {{ index }}
      </div>
    </swiper-item>
  </swiper>
</template>

<script lang="ts">
import Vue from "vue";

import { Swiper, SwiperItem } from "vue-h5-swiper";

export default Vue.extend({
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      colors: ["#76D7C4", "#F1948A", "#BB8FCE", "#7FB3D5"],
      loop: true,
      autoplay: false,
      interval: 1000,
      showIndicator: true,
      pageTransition: "move",
      pageTransitions: "move",
    };
  },
  methods: {
    beforeChange(activeIndex, oldIndex) {
      console.log(`before-change: ${activeIndex}, ${oldIndex}`);
    },

    afterChange(activeIndex, oldIndex) {
      console.log(`after-change: ${activeIndex}, ${oldIndex}`);
    },
  },
});
</script>

<style lang="scss">
.page {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: #fff;
}
</style>
