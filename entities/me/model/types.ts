export interface UserMe {
  id: number;
  nickname: string;
  email: string;
  imageUrl: string | null;
  kakaoProfileImageUrl: string | null;
  profileImageUrl: string | null;
  hasCustomImage: boolean;
  birth: string | null;
  phone: string | null;
  region: string | null;
  tokenBalance: number;
  createdAt: string;
}

export interface Stats {
  reviewCount: number;
  avgRating: number;
}

export interface Me {
  user: UserMe;
  stats: Stats;
}
