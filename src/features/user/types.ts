export interface User {
  email: string;
  name: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export type UserResponse = User[];

export interface UserState {
  name: string;
  isAuth: boolean;
  isLoading: boolean;
}
