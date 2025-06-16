import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import { UserLogedDTO } from "../models/user-data.model";
import { getUserLoged } from "./user.service";

async function isTokenExpired() {
  const user: UserLogedDTO | null = await getUserLoged();

  if (!user) {
    return true;
  }

  try {
    const decoded: any = jwtDecode(user.token.access_token);

    // A claim 'exp' vem em segundos desde a época Unix
    const now = Date.now() / 1000; // em segundos

    return decoded.exp  < now;

  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return true;
  }
}

export { isTokenExpired };
