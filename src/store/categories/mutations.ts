import { MutationTree } from "vuex";
import { Categories } from "./types";
import { getMediaWP, getCategoryWP, getTagsWP } from "@/utils/index";

//model
import { PostModel } from "@/model/Post";
import { arSA } from "date-fns/locale";

export const mutations: MutationTree<Categories> = {
  formatWpCategoriesHome(state, payload) {
    const data = [] as unknown[];
    if (payload) {
      payload.map(categories => {
        const categorieSelect = {} as any;

        categorieSelect.id_meta = categories.id_wp_meta;
        categorieSelect.color = categories.color;
        categorieSelect.categories = [];
        categorieSelect.featured_media = [];

        //featured_media
        if (categories.picture_id_wp_meta != 0) {
          const get_featured_media = Promise.resolve(
            getMediaWP(categories.picture_id_wp_meta)
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

            categorieSelect.featured_media = media;
          });
        }

        //categories
        const get_categories = Promise.resolve(
          getCategoryWP(Number(categories.id_wp_meta))
        );

        get_categories.then(value => {
          categorieSelect.categories.push(value.data);
        });

        console.log("categorieSelect", categorieSelect);
        data.push(categorieSelect);
      });
    }

    console.log(data);
    state.categoriesHome = data;
  },
};
