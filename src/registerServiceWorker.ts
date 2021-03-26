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
    updated(registration) {
      console.log("New content is available: Please refresh.");
      registration.update();
      location.reload();
      //  caches.keys().then(function(names) {
      //    for (let name of names) caches.delete(name);
      //  });
      //  window.location.reload(true);
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
