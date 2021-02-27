<template>
  <v-overlay
    id="loading--app"
    color="#fbf9fe"
    :opacity="1"
    :value="overlay"
    class="text-center"
    style="position: fixed;"
  >
    <span id="loading--app-icon">
      <v-icon class="ma-3" medium x-large-md>code-html</v-icon>
      <v-icon class="ma-3" medium x-large-md>code-html</v-icon>
      <v-icon class="ma-3" medium x-large-md>code-html</v-icon>
      <v-icon class="ma-3" medium x-large-md>code-html</v-icon>
      <v-icon class="ma-3" medium x-large-md>code-html</v-icon>
      <v-icon class="ma-3" medium x-large-md>code-html</v-icon>
    </span>
    <p class="troll-text">
      {{ troll.text }} <br />
      <span class="source">{{ troll.source }}</span>
    </p>
  </v-overlay>
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
import data from "@/assets/data/troll.json";

export default Vue.extend({
  name: "Loading",
  data() {
    return {
      overlay: true,
      troll: {
        text: "",
        source: "",
      },
    };
  },
  methods: {},
  mounted() {
    let sizeTrollList = 0;
    for (const i in data) {
      if (data.hasOwnProperty(i)) {
        ++sizeTrollList;
      }
    }
    const index = Math.floor(Math.random() * Math.floor(sizeTrollList));

    this.troll["text"] = data[index].text;
    this.troll["source"] = data[index].source;

    window.onload = function() {
      const id = document.getElementById("loading--app-icon");
      const item = id!.getElementsByTagName("i");

      let time = 500; //millisecondes
      for (const i in Object.values(item)) {
        setTimeout(function() {
          item[i].classList.add("loading--app-icon-go");
        }, time);

        time = time + 500;
      }
    };
  },
});
</script>

<style lang="scss">
.troll-text {
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
  color: #33bee5 !important;
}
</style>
