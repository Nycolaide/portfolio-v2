import axios from "axios";

const apiBaseUrl = "https://api.laurentgrimaldi.dev/wp-json/";

export const getApi = async (options: any): Promise<any> => {
  let data;
  const url: string = options.url as string;

  try {
    const response = await axios.get(`${apiBaseUrl}${url}`, {
      params: options.params,
    });

    //success api
    data = response;
  } catch (error) {
    //error api
    data = error;
  }
  return data;
};
