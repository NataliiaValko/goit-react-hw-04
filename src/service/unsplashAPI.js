import axios from "axios";

const ACCESS_KEY = "TGBEFubkRqAVentJ5BKCATtS1qiP2GF_yZWdCqeNBVg";
const BASE_URL = "https://api.unsplash.com/";
export const fetchImages = async ({ query, page }) => {
  const { data } = await axios.get(`${BASE_URL}search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query,
      page,
      per_page: 12,
    },
  });
  return data;
};
