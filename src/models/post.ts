export interface Post {
  id?: number;
  userId: number;
  content: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;  
}