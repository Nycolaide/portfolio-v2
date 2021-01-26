<template>
  <p v-html="content" class="text-h6 font-weight-regular"></p>
</template>
<script lang="ts">
/**
 * COMPONENT
 * @name Text
 * @description component text for display short text
 * @author Laurent Grimaldi
 * @props text
 */
import Vue from "vue";

export default Vue.extend({
  name: "text-content",
  props: {
    content: {
      type: String,
      required: false,
      default: "text"
    }
  }
});
</script>
