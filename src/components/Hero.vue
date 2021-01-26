<template>
  <div>
    <v-card class="hero-profil" flat color="header">
      <v-card-text>
        <div class="border">
          <div class="hero-work">
            <v-btn small fab color="badgeColor" elevation="6">
              <v-icon>🦄</v-icon>
            </v-btn>
          </div>
          <v-img src="@/assets/laurent.jpg" class="rounded-circle"></v-img>

          <div class="hero-link">
            <v-btn
              id="network-hero--1"
              fab
              color="#161414"
              elevation="6"
              href="https://github.com/"
              target="_blank"
            >
              <v-icon color="white">mdi-github</v-icon>
            </v-btn>
            <v-btn
              id="network-hero--2"
              fab
              color="#0274b3"
              elevation="6"
              href="https://www.linkedin.com/in/laurentgrimaldi/"
              target="_blank"
            >
              <v-icon color="white">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              id="network-hero--3"
              fab
              color="#1e2026"
              elevation="6"
              href="https://codepen.io/GrimLaurent"
              target="_blank"
            >
              <v-icon color="white">mdi-codepen</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
//DARK
.theme--dark {
  .hero-profil {
    .border {
      border: 1px solid white !important;
    }
  }
}
//LIGHT
.hero-profil {
  .border {
    width: 260px;
    height: 260px;
    border: 1px solid black;
    margin: 0 auto;
    border-radius: 50%;

    .v-image {
      width: 230px;
      height: 230px;
      margin: 14px auto;
    }

    .hero-work {
      position: absolute;
      margin: 17px;
      z-index: 1;
    }

    .hero-link {
      margin-top: -44px;

      #network-hero--1 {
        margin: -61px 10px -28px 34px;
      }
      #network-hero--2 {
      }
      #network-hero--3 {
        margin: 0px 0px 30px 10px;
      }
    }
  }
}
</style>
