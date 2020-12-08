export interface User {
  firstName: string;
  fullName: string;
  lastName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  gamerId: string;
  token: string;
  user: User;
  userName: string;
}
