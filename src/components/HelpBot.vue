<template>
  <div>
    <v-expand-transition>
      <v-menu
        top
        right
        z-index="121"
        :nudge-top="80"
        :nudge-left="175"
        :nudge-width="170"
        :close-on-click="false"
        elevation="20"
        rounded="lg"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fixed
            fab
            bottom
            right
            color="primary"
            v-bind="attrs"
            v-on="on"
            class="mb-10 mr-10"
            style="z-index: 121;"
            elevation="0"
          >
            <v-icon v-if="attrs['aria-expanded'] == 'false'">mdi-help</v-icon>
            <v-icon v-else>mdi-close</v-icon>
          </v-btn>
        </template>
        <v-card class="rounded-lg">
          <v-card-text class="pr-0 pl-0">
            <v-list dense>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="action(item.action, item.type)"
                >
                  <v-list-item-icon class="mr-4">
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <!-- Status App -->
                <v-list-item
                  href="https://stats.uptimerobot.com/DW25vuBG3y"
                  target="_blank"
                >
                  <v-list-item-icon class="mr-3">
                    <v-badge dot offset-x="4" offset-y="4" color="#3bd671">
                      <v-icon>mdi-server-security</v-icon>
                    </v-badge>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>État du serveur</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <!-- /Status App -->
                <v-list-item
                  v-for="(item, a) in socialNetwork"
                  :key="a + 3"
                  :href="item.link"
                  target="_blank"
                >
                  <v-list-item-icon class="mr-3">
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-expand-transition>

    <Dialog
      :title="
        applicationInit
          ? applicationInit.data
            ? applicationInit.data.title
            : ''
          : ''
      "
      size="md"
      :show.sync="showVersion"
      :content="applicationInit"
    >
      <template v-slot:content>
        <Version :version="versionApp" :content="applicationInit" />
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//templates
import Dialog from "@/components/templates/Dialog.vue";

//components
import Version from "@/components/Version.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Billy",
  components: {
    Dialog,
    Version,
  },
  data() {
    return {
      showVersion: false,
      versionApp: localStorage.getItem("app_version"),
      items: [
        {
          text: "Discute avec moi",
          icon: "mdi-email",
          type: "mail",
        },
        {
          text: "Signaler un bug",
          icon: "mdi-bug",
          type: "support",
        },
        {
          text: "Développé avec ❤️ <br/> par Laurent Grimaldi",
          icon: "mdi-rocket-launch",
          action: "version",
          type: "click",
        },
      ],
      socialNetwork: [
        {
          text: "Twitter",
          icon: "mdi-twitter",
          link: "https://twitter.com/grimlaurent",
        },
        {
          text: "Discord",
          icon: "mdi-discord",
          link: "https://discord.gg/Sk6rAN9Ghj",
        },
      ],
    };
  },
  methods: {
    action(route: string, type: string) {
      if (type == "click") {
        if ((route = "version")) {
          this.showVersion = true;
        }
      } else if (type == "mail") {
        window.location.href =
          "mailto:" + this.applicationInit.data.contact.email;
      } else if (type == "support") {
        window.location.href =
          "mailto:" +
          this.applicationInit.data.contact.support +
          "?subject=Report Issue:";
      }
    },
  },
  computed: {
    ...mapState("application", ["applicationInit"]),
  },
});
</script>
