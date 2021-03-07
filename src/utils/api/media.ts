import axios from "axios";
import { getApi } from "@/utils/index";

export const getMediaWP = (id: number) => {
  let media;
  try {
    const response = getApi({
      url: "wp/v2/media/" + id,
    });
    media = response;
    console.log("getMediaWP", response);
  } catch (error) {
    console.error(error);
    media = "";
  }

  return media;
};

export const getCategoryWP = (id: number) => {
  let category;
  try {
    const response = getApi({
      url: "wp/v2/categories/" + id,
    });
    category = response;
  } catch (error) {
    console.error(error);
    category = "";
  }

  return category;
};

export const getTagsWP = (id: number) => {
  let tag;
  try {
    const response = getApi({
      url: "wp/v2/tags/" + id,
    });
    tag = response;
    console.log("getTagsWP", response);
  } catch (error) {
    console.error(error);
    tag = "";
  }

  return tag;
};
