<template>
  <div class="home">
    <!--<Header />-->
    <v-sheet color="header">
      <v-container class="pt-12 pb-16 content--app">
        <v-row align="center" class="mt-5 mb-5">
          <v-col cols="12" md="6">
            <Hero />
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              class="text-center text-md-left pt-3 pb-3 pa-4"
              color="header"
              flat
            >
              <p
                class="text-h5 text-mb-h4 font-weight-bold mb-0"
                style="color: black;"
              >
                Laurent Grimaldi
              </p>
              <p class="text-h6 text-mb-h5 mb-0" style="color: black;">
                Développeur Front End
              </p>
            </v-card>
            <v-sheet class="mt-3 mb-5 text-center text-md-left" color="header">
              <v-btn
                x-large
                rounded
                color="primary"
                class="ml-2 mb-2"
                href="https://1drv.ms/f/s!Aogx7ss2wAgioEV5P1Q8uQMQZuLA"
                target="_blank"
              >
                <v-icon left>mdi-download</v-icon>
                Mon CV
              </v-btn>
              <v-btn
                x-large
                rounded
                class="ml-2 mb-2"
                color="white"
                style="color: black;"
                href="mailto:hello@laurentgrimaldi.dev"
              >
                Me contacter
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#768ddb"
        fill-opacity="1"
        d="M0,128L24,122.7C48,117,96,107,144,128C192,149,240,203,288,197.3C336,192,384,128,432,101.3C480,75,528,85,576,85.3C624,85,672,75,720,69.3C768,64,816,64,864,74.7C912,85,960,107,1008,117.3C1056,128,1104,128,1152,117.3C1200,107,1248,85,1296,74.7C1344,64,1392,64,1416,64L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
      ></path>
    </svg>

    <v-container style="margin-top: -90px" class="content--app">
      <Section
        title="Mes compétences"
        desc="Découvrez l'ensemble de mes compétences professionnelles, et retrouver mes expériences sur <a href='https://www.linkedin.com/in/laurentgrimaldi/' class='linkedin-color'>Linkedin</a>"
      />
      <v-row color="#121212">
        <v-col>
          <Mosaic :data="categoriesHome" @on-click="openDialog" />
        </v-col>
      </v-row>

      <Section
        title="Ma veille technologique"
        desc="Retrouvez les conférences, keynotes que j'ai suivi ainsi que les principaux influenceurs qui m'inspirent dans mon travail et me divertissent dans ma vie personnelle."
      />
      <v-row class="mb-12">
        <v-col cols="12" class="text-center">
          <v-card flat color="background">
            <v-card-text>
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PL093t5RJWW-wW3yjbpqytM-fUcJjRXY2f"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="border-radius: 18px"
              ></iframe>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <SlideGroups class="mt-3" style="margin: 0 auto;">
        <template v-slot:content>
          <!-- eslint-disable -->
          <v-slide-item
            v-for="item in UserList"
            :key="item.id"
            color="background"
          >
            <User :data="item" class="mt-5 mb-10" />
          </v-slide-item>
          <!-- eslint-enable -->
        </template>
      </SlideGroups>
    </v-container>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="mb-n2"
    >
      <path
        fill="#23272a"
        fill-opacity="1"
        d="M0,192L40,208C80,224,160,256,240,234.7C320,213,400,139,480,117.3C560,96,640,128,720,154.7C800,181,880,203,960,213.3C1040,224,1120,224,1200,218.7C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
    <v-sheet color="footerApp" class="pb-16">
      <v-container class="text-center mb-8 content--app">
        <ContentText
          content="Retrouvez moi sur mes différents réseaux sociaux."
          class="white--text"
        />
        <div style="margin: 0 auto;">
          <Network v-for="item in socialList" :key="item.id" :data="item" />
        </div>
      </v-container>

      <v-container class="content--app">
        <v-card
          class="pa-2 pa-sm-12 rounded-xl text-center text-sm-left"
          color="white"
          style="color: black"
        >
          <v-card-title class="text-h5 font-weight-bold">
            Vous voulez en s'avoir plus ?
          </v-card-title>
          <v-card-text class="text-h6 font-weight-regular" style="color: black">
            N'hésiter pas à me contacter par email
          </v-card-text>
          <v-card-actions>
            <v-spacer class="d-sm-none" />
            <v-btn
              x-large
              rounded
              class="ml-2"
              color="primary"
              href="mailto:laurentgrim.95@gmail.com"
            >
              Me contacter
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-container>
    </v-sheet>

    <Dialog />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { mapState, mapActions } from "vuex";

//modules
import Hero from "@/components/Hero.vue";
import User from "@/components/User.vue";
import Categorie from "@/components/CardCategorie.vue";
import Network from "@/components/Network.vue";

//dialog
import Dialog from "@/components/Dialog.vue";

//templates
import Header from "@/components/templates/Header.vue";
import Mosaic from "@/components/templates/Mosaic.vue";
import Section from "@/components/templates/TitleSection.vue";
import ContentText from "@/components/templates/Text.vue";
import SlideGroups from "@/components/SlideGroups.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Hero,
    User,
    SlideGroups,
    Categorie,
    Section,
    ContentText,
    Network,
    Dialog,
    Header,
    Mosaic,
  },
  data() {
    return {
      //Category
      CategorySkill: [
        {
          id: 0,
          label: "Front-End",
          category: "f-e",
          color: "#776bff",
          picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        },
        {
          id: 1,
          label: "Back-End",
          category: "b-e",
          color: "#ffd01a",
          picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        },
        {
          id: 2,
          label: "UI/UX Design",
          category: "create",
          color: "#fa4e89",
          picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        },
        {
          id: 3,
          label: "CMS",
          category: "cms",
          color: "#ffa600",
          picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        },
        {
          id: 4,
          label: "Gestion de projets",
          category: "metho",
          color: "#ff87ff",
          picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        },
        {
          id: 5,
          label: "Logiciels",
          category: "soft-dev",
          color: "#00e0a7",
          picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        },
      ],

      UserList: [
        {
          id: 1,
          name: "Panos Panay",
          picture: "https://files.laurentgrimaldi.dev/user/panospanay.jpg",
          work: "Chief Product Officer Microsoft",
          link: "https://twitter.com/panos_panay",
        },
        {
          id: 2,
          name: "Dona Sarkar",
          picture: "https://files.laurentgrimaldi.dev/user/donasarkar.jpg",
          work: "Leading Dev Advocacy Microsoft",
          link: "https://twitter.com/donasarkar",
        },
        {
          id: 3,
          name: "Joueur du Grenier",
          picture: "https://files.laurentgrimaldi.dev/user/jdg.jpg",
          work: "Youtubeur",
          link: "https://www.youtube.com/user/joueurdugrenier",
        },
        {
          id: 4,
          name: "Hugo Lisoir",
          picture: "https://files.laurentgrimaldi.dev/user/hugolisoir.jpg",
          work: "Youtubeur",
          link: "https://www.youtube.com/channel/UCDC6DBi0kRp6Jk21xqfvFLA",
        },
        {
          id: 5,
          name: "Alexandre Astier",
          picture: "https://files.laurentgrimaldi.dev/user/alexandreastier.png",
          work: "C'est pas faux",
          link: "https://twitter.com/AAstierOff",
        },
        {
          id: 6,
          name: "Jonathan Ive",
          picture: "https://files.laurentgrimaldi.dev/user/jonathanive.jpg",
          work: "Designer",
          link: "https://designwanted.com/design/jonathan-ive-apple/",
        },
        {
          id: 7,
          name: "Re:Take",
          picture: "https://files.laurentgrimaldi.dev/user/retake.jpg",
          work: "Youtubeur",
          link: "https://www.youtube.com/user/PizzaLauncher",
        },
        {
          id: 8,
          name: "Viva la Dirt League",
          picture: "https://files.laurentgrimaldi.dev/user/vivaladirtleague",
          work: "Youtubeur",
          link: "https://www.youtube.com/user/VivaLaDirtLeague",
        },
        {
          id: 9,
          name: "Benjamin Brillaud",
          picture: "https://files.laurentgrimaldi.dev/user/notabene.jpg",
          work: "Youtubeur",
          link: "https://www.youtube.com/user/notabenemovies",
        },
        {
          id: 10,
          name: "Tev",
          picture: "https://files.laurentgrimaldi.dev/user/tev.jpg",
          work: "CEO de Candysan & Youtubeur IciJapon",
          link: "https://twitter.com/IciJapon",
        },
        {
          id: 11,
          name: "Natsume Akatsuki",
          picture:
            "https://files.laurentgrimaldi.dev/user/natsumeakatsuki.jpeg",
          work: "Mangaka",
          link: "https://fr.wikipedia.org/wiki/Natsume_Akatsuki",
        },
        {
          id: 12,
          name: "AstronoGeek",
          picture: "https://files.laurentgrimaldi.dev/user/astronogeek.jpg",
          work: "Youtubeur",
          link: "https://www.youtube.com/channel/UC5X4e8ScZI2AFd_vkjSoyoQ",
        },
        {
          id: 13,
          name: "Joeel56",
          picture: "https://files.laurentgrimaldi.dev/user/joeel56.jpeg",
          work: "Web Developpeur / Youtubeuse ",
          link: "https://www.instagram.com/joeel56/?hl=fr",
        },
      ],

      socialList: [
        {
          id: 0,
          name: "Twitter",
          icon: "mdi-twitter",
          color: "",
          link: "https://twitter.com/grimlaurent",
        },
        {
          id: 1,
          name: "Instagram",
          icon: "mdi-instagram",
          color: "",
          link: "https://www.instagram.com/grimlaurent/",
        },
        {
          id: 2,
          name: "GitHub",
          icon: "mdi-github",
          color: "",
          link: "https://github.com/GrimLaurent",
        },
        {
          id: 3,
          name: "CodePen",
          icon: "mdi-codepen",
          color: "",
          link: "https://codepen.io/GrimLaurent",
        },
      ],
    };
  },
  computed: {
    ...mapState("categories", ["categoriesHome"]),
  },
  mounted() {
    this.getMetaCategories();
  },
  methods: {
    ...mapActions("categories", ["getMetaCategories"]),

    openDialog(category: string) {
      console.log("hello", category);
      store.commit("application/updateDialog", {
        title: "",
        category: category,
        show: true,
      });
    },
  },
});
</script>

<style lang="scss">
.card--hero {
  top: -5px;
  font-size: 30px;
  animation-timing-function: ease-in-out;
  animation: float 5s infinite;
}

.card--hero:nth-child(1) {
  top: 8px;
  animation: float 4.5s infinite;
}
.card--hero:nth-child(3n) {
  top: 5px;
  animation: float 5.5s infinite;
}
.card--hero:nth-child(4n) {
  top: -8px;
  animation: float 7.5s infinite;
}
.card--hero:nth-child(5n) {
  top: 3px;
  animation: float 6.5s infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, 10px);
  }
}

.content--app {
  max-width: 1290px;
}

@media screen and (max-width: 475px) {
  iframe {
    width: 290px;
    height: 164px;
  }
}

@media screen and (min-width: 476px) and (max-width: 680px) {
  iframe {
    width: 440px;
    height: 246px;
  }
}

@media screen and (min-width: 680px) and (max-width: 1300px) {
  iframe {
    width: 580px;
    height: 330px;
  }
}

@media screen and (min-width: 1301px) {
  iframe {
    width: 750px;
    height: 420px;
  }
}

.linkedin-color {
  color: #768ddb !important;
  text-decoration: none;
}
</style>
