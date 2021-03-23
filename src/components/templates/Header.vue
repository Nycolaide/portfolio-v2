<template>
  <div>
    <v-row>
      <v-col class="text-left justify-start align-center d-flex">
        <v-sheet>
          <div class="im-unicorn">
            <v-btn x-small fab color="badgeColor" elevation="6">
              <v-icon>🦄</v-icon>
            </v-btn>
          </div>
          <v-avatar size="100">
            <img src="@/assets/laurent.jpg" alt="Laurent Grimaldi" />
          </v-avatar>
        </v-sheet>
        <v-sheet>
          <p class="text-h5 text-mb-h4 font-weight-bold mb-0">
            Laurent Grimaldi
          </p>
          <p>Développeur FrontEnd Javascript 🖖🏻</p>
        </v-sheet>
      </v-col>
      <v-col class="text-right justify-end align-center d-flex">
        <Button :large="true">
          <template v-slot:content>
            <v-icon left class="icon-large">mdi-link</v-icon>
            <span>Mon CV</span>
          </template>
        </Button>
        <Button :large="true">
          <template v-slot:content>
            <v-icon left color="red" class="icon-large">mdi-mail</v-icon>
            <span>Me Contacter</span>
          </template>
        </Button>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//template
import Button from "@/components/templates/Button.vue";

export default Vue.extend({
  components: {
    Button,
  },
});
</script>
