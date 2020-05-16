export interface User {
  id?: number;
  userName: string;
  email: string;
  passwordHash?: string;
  createdAt?: string;
  updatedAt?: string;  
}