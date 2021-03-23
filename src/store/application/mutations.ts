import { getMediaWP } from "@/utils";
import { MutationTree } from "vuex";
import { Application } from "./types";

export const mutations: MutationTree<Application> = {
  updateDialog(state, payload) {
    state.dialogCard = payload;
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
  getApplicationSetting(state, payload) {
    if (payload) {
      if (payload.data.logo != 0) {
        const get_featured_media = Promise.resolve(
          getMediaWP(payload.data.logo)
        );

        get_featured_media.then(value => {
          const media = {} as any;

          media.id = value.data.id;
          media.type = value.data.media_type;
          media.source = value.data.source_url;
          media.detailList = value.data.media_details.sizes;
          media.description = value.data.description.rendered;
          media.title = value.data.title.rendered;
          media.caption = value.data.caption.rendered;

          payload.data.logo = media;
        });
      }
    }
    state.applicationInit = payload;
    console.log("state.applicationInit", state.applicationInit);
  },
};
