import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common["x_cg_demo_api_key"] =
  import.meta.env.VITE_API_KEY;

export const getBaseList = () => {
  return axios
    .get("/coins/list")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw new Error(error);
    });
};

function getOneCoinInfo(id) {
  return axios.get(`coins/${id}`);
}
export const getCoinsInfo = (ids) => {
  const promises = ids.map((id) => getOneCoinInfo(id));
  return Promise.all(promises);
};
