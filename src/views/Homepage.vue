<template>
  <div>
    Bonjour
    {{ heroData }}

    POST API
    {{ postList }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState("profil", ["heroData"]),
    ...mapState("post", ["postList"]),
  },
  mounted() {
    this.getPostList();
    this.getMediaList();
  },
  methods: {
    ...mapActions("post", ["getPostList"]),
    ...mapActions("media", ["getMediaList"]),
  },
});
</script>
