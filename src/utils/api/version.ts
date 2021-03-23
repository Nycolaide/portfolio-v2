import axios from "axios";

export const getVersionApp = () => {
  let version;
  try {
    const response = axios.get(
      "https://api.laurentgrimaldi.dev/wp-json/api/version"
    );
    version = response;
  } catch (error) {
    console.error(error);
    version = "";
  }

  return version;
};
