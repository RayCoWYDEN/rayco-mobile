import axios from "axios";
import { getUserLoged, removeUserLoged } from "../services/user.service";
import { UserLogedDTO } from "../models/user-data.model";

const HOST = "172.16.10.110";

const api = axios.create({
  baseURL: `http://${HOST}:9092/`,
});

api.interceptors.request.use(
  async (config) => {
    const user: UserLogedDTO | null = await getUserLoged();
    if (user) {
      config.headers.Authorization = `Bearer ${user.token.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
