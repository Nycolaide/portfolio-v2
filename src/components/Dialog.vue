<template>
  <div class="text-center">
    <v-dialog
      v-model="showDialog"
      @click:outside="closeDialog()"
      max-width="800"
      scrollable
    >
      <v-card class="rounded-xl">
        <v-card-title>
          <v-spacer />
          <v-btn icon text depressed @click="closeDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <p class="text-h4 font-weight-bold mb-0" color="primary">
                {{ dialogCard.title }}
              </p>
              <v-divider />
            </v-col>
            <v-col v-for="item in data" :key="item.id" cols="12" sm="6" md="4">
              <v-hover v-slot="{ hover }">
                <v-card flat>
                  <v-card-title class="text-subtitle-1 font-weight-bold pb-0">
                    <v-icon class="mr-1" :color="item.color">{{
                      item.icon
                    }}</v-icon>
                    {{ item.name }} <v-spacer />
                    <v-btn
                      small
                      icon
                      :class="{ 'display-btns': !hover }"
                      :href="item.link"
                      target="_blank"
                      ><v-icon color="primary" small
                        >mdi-open-in-new</v-icon
                      ></v-btn
                    ></v-card-title
                  >

                  <v-card-text>
                    <span v-for="a in 10" :key="a" class="ml-1 mr-1">
                      <v-sheet
                        v-if="a <= item.score / 10"
                        class="point d-inline-block"
                        color="lvl"
                      ></v-sheet>
                      <v-sheet
                        v-else
                        class="point d-inline-block"
                        style="opacity: 0.3"
                        color="lvl"
                      ></v-sheet>
                    </span>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { mapGetters } from "vuex";

import DataJson from "@/assets/data/skill.json";

export default Vue.extend({
  data() {
    return {
      title: "",
      data: [] as any
    };
  },
  methods: {
    closeDialog() {
      this.data = []; //clear data
      store.commit("application/updateDialog", {
        title: "",
        catgeory: "",
        show: false
      });
    },

    loadData() {
      for (const key in DataJson) {
        if (DataJson[key].category === this.dialogCard.category) {
          this.data.push(DataJson[key]);
        }
      }
    }
  },
  computed: {
    ...mapGetters("application", ["dialogCard"]),

    showDialog: {
      get: function() {
        let action = false;
        if (this.dialogCard.show) {
          this.loadData();
          action = true;
        }

        return action;
      }
    }
  }
});
</script>
<style lang="scss">
.point {
  width: 10px;
  height: 10px;
  border-radius: 30px;
}

.display-btns {
  display: none;
}
</style>
