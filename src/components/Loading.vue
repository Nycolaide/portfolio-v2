<template>
  <div>
    <v-overlay
      id="loading--app"
      color="#fbf9fe"
      :opacity="1"
      :value="overlay"
      class="text-center"
      :z-index="9999"
    >
      <span id="loading--app-icon">
        <v-icon class="ma-3" medium x-large-md>mine-witchhat</v-icon>
        <v-icon class="ma-3" medium x-large-md>mine-coin</v-icon>
        <v-icon class="ma-3" medium x-large-md>mine-sword</v-icon>
        <v-icon class="ma-3" medium x-large-md>mine-shield</v-icon>
        <v-icon class="ma-3" medium x-large-md>mine-potion</v-icon>
        <v-icon class="ma-3" medium x-large-md>mine-bookmagic</v-icon>
      </span>
      <p class="text">
        Bibbidi Bobbidi Boo
      </p>
    </v-overlay>
  </div>
</template>

<script lang="ts">
/**
 * COMPONENT LOADING APP
 * @name Loading
 * @description overlay dialog app
 * @author Laurent Grimaldi
 * @version 2.0.0
 */
import Vue from "vue";
//data
//import data from "@/assets/data/troll.json";

export default Vue.extend({
  name: "Loading",
  data() {
    return {
      overlay: true,
      loadingApp: false,
      troll: {
        text: "",
        source: "",
      },
    };
  },
  async mounted() {
    //let sizeTrollList = 0;
    let loadingTime = 2000; //millisecondes
    let time = loadingTime / 6; //millisecondes
    //let loading = false;

    //for (const i in data) {
    //  if (data.hasOwnProperty(i)) {
    //    ++sizeTrollList;
    //  }
    //}
    //const index = Math.floor(Math.random() * Math.floor(sizeTrollList));

    //this.troll["text"] = data[index].text;
    //this.troll["source"] = data[index].source;

    window.onload = function() {
      const id = document.getElementById("loading--app-icon");
      const item = id!.getElementsByTagName("i");

      for (const i in Object.values(item)) {
        setTimeout(function() {
          item[i].classList.add("loading--app-icon-go");
        }, time);

        time = time + loadingTime / 6;
      }
    };
    setTimeout(() => this.closeLoadingMsg(), loadingTime * 2);
  },
  methods: {
    closeLoadingMsg() {
      this.overlay = false;
    },
  },
});
</script>

<style lang="scss">
#loading--app {
  .text {
    font-family: "AkayaTelivigala", cursive;
    font-size: 0.8rem !important;
    line-height: 16px;
    color: #0d0d22;
  }
}
.text {
  font-family: "AkayaTelivigala", cursive;
  font-size: 1rem !important;
  line-height: 16px;
  color: #636363;

  .source {
    font-size: 0.8rem !important;
    opacity: 0.6;
  }
}

.loading--app-icon-go {
  transition: width 1s linear;
  color: #0d0d22 !important;
}
</style>
