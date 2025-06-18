import { LoginDTO } from "../models/login-data.model";
import { UserCreateDTO, UserInfoDTO, UserLogedDTO } from "../models/user-data.model";
import * as SecureStore from "expo-secure-store";

import axios from "axios";
import { HOST } from "../utils/constants";
import { api } from "../interceptor/api";

const API_URL = `http://${HOST}:9092/`;

const login = (loginData: LoginDTO) => {
  return axios.post(`${API_URL}users/login`, loginData);
}

const register = (user: UserCreateDTO) => {
  return axios.post(`${API_URL}users/register`, user);
}

const storeUserLoged = async (userLoged: UserLogedDTO) => {
  try {
    await SecureStore.setItemAsync("user", JSON.stringify(userLoged));
  } catch (error) {
    console.error("Error to save user data:", error);
  }
};

const getUserLoged = async (): Promise<UserLogedDTO | null> => {
  try {
    const userData = await SecureStore.getItemAsync("user");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error to get user data:", error);
    return null;
  }
};

const removeUserLoged = async () => {
  try {
    await SecureStore.deleteItemAsync("user");
  } catch (error) {
    console.error("Error to remove user data:", error);
  }
};

const saveUserInfo = (userInfoDto: UserInfoDTO) => {
  return api.post("users/personal-info", userInfoDto) 
}

export { login, register, storeUserLoged, getUserLoged, removeUserLoged, saveUserInfo };
