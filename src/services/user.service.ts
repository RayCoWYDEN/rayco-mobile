import { MOCK_LOGIN } from "../helpers/mocks";
import { LoginData } from "../models/login-data.model";

function login(loginData: LoginData) {
    if (loginData.email == MOCK_LOGIN.email && loginData.senha == MOCK_LOGIN.senha) {
        return true;
    }
    return false;
}