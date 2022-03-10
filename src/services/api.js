import axios from "axios";

export const key = "2084a00f95fb3e4737567fae4e38ed85";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
