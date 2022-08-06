import { AxiosResponse } from "axios";
import $api from "./settings";

interface AuthResponse {
  email: string;
  password: string;
}

const login = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return $api.get(`/users?email=${email}&password=${password}`);
};

const registration = async (email: string, password: string) => {
  return $api.post<AuthResponse>(`/users`, { email, password });
};
