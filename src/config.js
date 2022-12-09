import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tender-lingerie-moth.cyclic.app/api/",
});

export const PF = "https://tender-lingerie-moth.cyclic.app/images";
