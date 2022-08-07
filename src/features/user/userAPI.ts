import axios, { AxiosResponse } from 'axios';
import { User, Login, UserResponse } from './types';

const API_URL = 'http://localhost:5000/users';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const login = async ({ email, password }: Login): Promise<AxiosResponse<UserResponse>> => {
  return $api.get(`?email=${email}&password=${password}`);
};

export const registration = async ({
  email,
  name,
  password,
}: User): Promise<AxiosResponse<User>> => {
  return $api.post<User>(``, { email, name, password });
};
