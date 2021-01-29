import axios from "axios";
import qs from "qs";
//import { apiBaseUrl } from "@/const";
import store from "@/store";
//import { objectToFormData } from "object-to-formdata";

export const callApi = async (options: OptionsCall): Promise<Query> => {
  let response: any;
  try {
    let routeNameUrl =
      options.routeName &&
      (store.state as any).customer.routes[options.routeName]
        ? (store.state as any).customer.routes[options.routeName]
        : "";
    if (options.routeNameModif)
      routeNameUrl = options.routeNameModif
        ? options.routeNameModif(routeNameUrl)
        : routeNameUrl;

    const url: string =
      options.routeName && routeNameUrl ? routeNameUrl : options.url;

    switch (options.method) {
      case "GET":
        response = await axios.get(`${url}`, {
          params: options.params,
          paramsSerializer: params => {
            //return qs.stringify(params, { arrayFormat: "repeat" });
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        });
        break;
      case "POST":
        //const formdata = objectToFormData(options.params, { indices: true });
        //if (options.paramsJson) {
        //  response = await axios.post(`${apiBaseUrl}${url}`, options.params);
        //} else {
        //  response = await axios.post(`${apiBaseUrl}${url}`, formdata, {
        //    headers: {
        //      "Content-Type": "multipart/form-data",
        //    },
        //  });
        //}
        console.log("method POST");
        break;
      case "POSTJSON":
        response = await axios.post(`${url}`, options.params);
        break;
      case "PUT":
        response = await axios.put(`${url}`, options.params);
        break;
      case "PATCH":
        response = await axios.patch(`${url}`, options.params);
        break;
      case "DELETE":
        response = await axios.delete(`${url}`, {
          data: options.params,
        });
        break;
      default:
        break;
    }
    //store.commit("application/updateResponseStatusAPI", true); //execute
    return {
      success: true,
      data: response.data,
      httpCode: response ? response.status : NaN,
    };
  } catch (e) {
    //store.commit("application/updateResponseStatusAPI", false); //no execute

    // if (!options.silent) {
    // 	store.commit('application/updateSnackbar', {
    // 		text: i18n.tc('application.error.title', 1),
    // 		color: 'error',
    // 		message: `${e.response && e.response.status ? e.response.status : i18n.tc('application.error.title', 1)}`,
    // 		show: true
    // 	})
    // }
    return {
      success: false,
      data: null,
      httpCode: e.response ? e.response.status : NaN,
    };
  }
};

interface Query {
  data: any;
  success: boolean;
  httpCode: number;
}

interface OptionsCall {
  url?: string;
  routeName?: string;
  routeNameModif?: (routeName: string) => string;
  method: string;
  params: any;
  silent?: boolean;
  paramsJson?: boolean;
}

//export const hexToRgba = (hex: string, opacity: number) => {
//  hex = hex.replace("#", "");
//  const r: number = parseInt(hex.substring(0, 2), 16);
//  const g: number = parseInt(hex.substring(2, 4), 16);
//  const b: number = parseInt(hex.substring(4, 6), 16);

//  const result: string = `rgba(${r},${g},${b},${opacity / 100})`;
//  return result;
//};
