<template>
  <div>
    <v-container
      ><flicking
        :options="{ collectStatistics: false, gap: 10, hanger: 0, anchor: 0 }"
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
        style="height: 320px"
      >
        <div class="panel">
          <v-sheet width="420px" class="anchor">
            <News
              :data="categoriesHome[0]"
              :height="150"
              :width="194"
              class="d-inline-block pa-2"
            />

            <News
              :data="categoriesHome[1]"
              :height="150"
              :width="194"
              class="d-inline-block pa-2"
            />

            <News
              :data="categoriesHome[2]"
              :height="150"
              :width="420"
              class="d-block pb-2 pr-2 pl-2"
              style="margin-top: -12px"
            />
          </v-sheet>
        </div>
        <div class="panel">
          <v-sheet width="420px" class="anchor">
            <News
              :data="categoriesHome[3]"
              :height="316"
              :width="420"
              align="align-top pt-5"
              class="pa-2"
            />
          </v-sheet>
        </div>
        <div class="panel">
          <v-sheet width="345px" class="anchor">
            <News
              :data="categoriesHome[4]"
              :height="180"
              :width="345"
              class="pa-2"
            />
            <News
              :data="categoriesHome[5]"
              :height="120"
              :width="345"
              class="pa-2"
            />
          </v-sheet>
        </div>
      </flicking>
    </v-container>

    {{ categoriesHome[0] }}
    <!--<v-container>
      <v-slide-group v-model="model" show-arrows>
        <v-slide-item :key="0">
          <v-sheet width="420px">
            <News
              :data="postList[0]"
              :height="150"
              :width="194"
              class="d-inline-block pa-2"
            />

            <News
              :data="postList[0]"
              :height="150"
              :width="194"
              class="d-inline-block pa-2"
            />

            <News
              :data="postList[0]"
              :height="150"
              :width="420"
              class="d-block pa-2"
            />
          </v-sheet>
        </v-slide-item>
        <v-slide-item :key="1">
          <v-sheet width="420px">
            <News
              :data="postList[0]"
              :height="316"
              :width="420"
              align="align-top pt-5"
              class="pa-2"
            />
          </v-sheet>
        </v-slide-item>
        <v-slide-item :key="2">
          <v-sheet width="345px">
            <News :data="postList[0]" :height="180" :width="345" class="pa-2" />
            <News :data="postList[0]" :height="120" :width="345" class="pa-2" />
          </v-sheet>
        </v-slide-item>
      </v-slide-group>
    </v-container>-->

    <v-container>
      <NewsEvol :data="postList[0]" />
    </v-container>
    Bonjour
    {{ heroData }}

    POST API
    {{ postList }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

//module
import { Flicking } from "@egjs/vue-flicking";

//utils
import { selectCategorie, selectItemInArrayObject } from "@/utils/index";

//templates
import News from "@/components/templates/News";
import NewsEvol from "@/components/templates/NewsEvol";
export default Vue.extend({
  components: {
    News,
    NewsEvol,
    Flicking,
  },
  data() {
    return {
      model: 1,

      //categories Home
      //dataset for 1 categorie
      listSlugMosaic: [
        { slug: "front-end", varData: "categorieFrontEnd" },
        { slug: "back-end", varData: "categorieBackEnd" },
        { slug: "project-management", varData: "categorieProjectManagement" },
        { slug: "software", varData: "categorieSoftware" },
        { slug: "ux-ui", varData: "categorieUxUi" },
        { slug: "cms", varData: "categorieCms" },
      ],
      categorieFrontEnd: {},
      categorieBackEnd: {},
      categorieProjectManagement: {},
      categorieSoftware: {},
      categorieUxUi: {},
      categorieCms: {},
      updateCategorie: 0,
    };
  },
  computed: {
    ...mapState("profil", ["heroData"]),
    ...mapState("post", ["postList"]),
    ...mapState("categories", ["categoriesHome"]),
  },
  mounted() {
    this.getMetaCategories();
    this.getPostList();
    this.getMediaList();

    //console.log(
    //  "selectCategorie",
    //  selectItemInArrayObject(this.categoriesHome, "front-end")
    //);

    //for (const index in this.listSlugMosaic) {
    //  this.$set(
    //    this.$data,
    //    this.listSlugMosaic[index].varData,
    //    selectItemInArrayObject(
    //      this.categoriesHome,
    //      this.listSlugMosaic[index].slug
    //    )
    //  );
    //}

    //this.updateCategorie += 1;
  },
  methods: {
    ...mapActions("post", ["getPostList"]),
    ...mapActions("media", ["getMediaList"]),
    ...mapActions("categories", ["getMetaCategories"]),
  },
});
</script>
