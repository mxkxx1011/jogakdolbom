import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { getUserInfo } from '../api';

import { type User } from './types';

interface UserState {
  accessToken: string | null;
  isLoggedIn: boolean;
  user: User | null;
  login: (accessToken: string) => void;
  reset: () => void;
  fetchUserInfo: () => Promise<void>;
}

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      accessToken: null,
      isLoggedIn: false,
      user: null,
      login: (accessToken: string) => set({ accessToken, isLoggedIn: true }),
      reset: () => set({ accessToken: null, isLoggedIn: false, user: null }),
      fetchUserInfo: async () => {
        const user = await getUserInfo();
        set({ user });
      },
    }),
    { name: 'userInfo' },
  ),
);

export { useUserStore };
