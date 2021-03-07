import { MutationTree } from "vuex";
import { Post } from "./types";
import { getMediaWP, getCategoryWP, getTagsWP } from "@/utils/index";

//model
import { PostModel } from "@/model/Post";

export const mutations: MutationTree<Post> = {
  getPostList(state, payload) {
    const data = [] as unknown[];
    if (payload) {
      if (payload.status === 200 && payload.data) {
        //format response api wordpress
        payload.data.map(post => {
          //if is not protected with password
          const postSelect = new PostModel();
          if (post.content.protected != true) {
            postSelect.id = post.id;
            postSelect.title = post.title.rendered;
            postSelect.featured_media = [];
            postSelect.date = post.date;
            postSelect.format = post.format;
            postSelect.categories = [];
            postSelect.tags = [];
            postSelect.slug = post.slug;
            postSelect.content = post.content.rendered;
            postSelect.excerpt = post.excerpt.rendered;
            postSelect.status = post.status;
            postSelect.type = post.type;

            //featured_media
            if (post.featured_media != 0) {
              const get_featured_media = Promise.resolve(
                getMediaWP(post.featured_media)
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

                postSelect.featured_media = media;
              });
            }

            //categories
            for (const index in Object.values(post.categories)) {
              const get_categories = Promise.resolve(
                getCategoryWP(Number(post.categories[index]))
              );

              get_categories.then(value => {
                postSelect.categories.push(value.data);
              });
            }

            //tags
            for (const index in Object.values(post.tags)) {
              const get_tags = Promise.resolve(
                getTagsWP(Number(post.tags[index]))
              );

              get_tags.then(value => {
                postSelect.tags.push(value.data);
              });
            }

            data.push(postSelect);
          }
        });
      }
    }
    state.postList = data;
  },
};
