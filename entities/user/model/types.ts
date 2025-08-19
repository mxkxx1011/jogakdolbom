export interface User {
  id: number;
  kakaoId: string;
  nickname: string;
  email: string;
  imageUrl: string | null;
  imageKey: string | null;
  birth: string | null;
  phone: string | null;
  region: string | null;
  tokenBalance: number;
  createdAt: string;
  updatedAt: string;
}
