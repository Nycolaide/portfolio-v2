/* eslint-disable no-console */

import { register } from "register-service-worker";
//core
import { ControlReleaseCore } from "@/core/index";
import { getVersionApp } from "@/utils/index";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    async updated() {
      console.log("Un nouveau contenu est disponible; Actualiser ...");
      const version = await getVersionApp();
      const versionLocal = localStorage.getItem("app_version");
      setTimeout(() => {
        //window.location.reload(true);
        if (versionLocal != version.data.version) {
          const dateUpdate = new Date();
          localStorage.clear();
          localStorage.setItem("app_version", version);
          localStorage.setItem("app_updated", String(dateUpdate));

          window.location.reload(true);
        }
      }, 1000);
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
