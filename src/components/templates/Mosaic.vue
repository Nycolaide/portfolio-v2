<template>
  <div>
    <flicking
      :options="{
        collectStatistics: false,
        gap: 0,
        hanger: '3%',
        anchor: '0px',
      }"
      :tag="'div'"
      :viewportTag="'div'"
      :cameraTag="'div'"
      bound="{true}"
      @need-panel="
        e => {
          // ADD PANELS
        }
      "
      @move-end="
        e => {
          // HANDLE INDEX CHANGE
        }
      "
      style="height: 320px; z-index: 10;"
    >
      <div class="panel" style="z-index: 10;">
        <v-sheet width="420px" class="anchor">
          <News
            :data="data[0]"
            :height="150"
            :width="194"
            class="d-inline-block pa-2"
            @click.native="cardClickEvent('soft-dev')"
          />

          <News
            :data="data[1]"
            :height="150"
            :width="194"
            class="d-inline-block pa-2"
            @click.native="cardClickEvent('cms')"
          />

          <News
            :data="data[2]"
            :height="150"
            :width="420"
            class="d-block pb-2 pr-2 pl-2"
            style="margin-top: -12px"
            @click.native="cardClickEvent('metho')"
          />
        </v-sheet>
      </div>
      <div class="panel">
        <v-sheet width="420px" class="anchor">
          <News
            :data="data[3]"
            :height="316"
            :width="420"
            align="align-top pt-5"
            class="pa-2"
            @click.native="cardClickEvent('f-e')"
          />
        </v-sheet>
      </div>
      <div class="panel">
        <v-sheet width="345px" class="anchor">
          <News
            :data="data[4]"
            :height="180"
            :width="345"
            class="pa-2"
            @click.native="cardClickEvent('create')"
          />
          <News
            :data="data[5]"
            :height="120"
            :width="345"
            class="pa-2"
            @click.native="cardClickEvent('b-e')"
          />
        </v-sheet>
      </div>
    </flicking>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//module
import { Flicking } from "@egjs/vue-flicking";

//templates
import News from "@/components/templates/News";

export default Vue.extend({
  components: {
    News,
    Flicking,
  },
  props: {
    data: {
      type: [Object, Array],
      required: false,
    },
  },
  mounted() {
    var elements = document.getElementsByClassName(
      "eg-flick-viewport"
    ) as HTMLCollectionOf<HTMLElement>;
    if (elements.length > 0) {
      elements[0].style.zIndex = "10";
    }
  },
  methods: {
    cardClickEvent(slug: string) {
      console.log("cardClickEvent", slug);
      if (slug !== undefined) {
        this.$emit("on-click", slug); //{index: event[0]._index,}
      }
    },
  },
});
</script>
