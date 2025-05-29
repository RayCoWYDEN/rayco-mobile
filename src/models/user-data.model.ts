export interface UserCreateDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserLogedDTO{
  id: number;
  name: string;
  email: string;
  token: TokenDTO;
}

export interface TokenDTO {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
}
