import axios from "axios";
import { getUserLoged, removeUserLoged } from "../services/user.service";
import { UserLogedDTO } from "../models/user-data.model";
import { HOST } from "../utils/constants";

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

export {api};
