import { create } from 'zustand';

export interface InitialAuthState {
  isLoggedIn: boolean;
  setIsLoggedIn(state: boolean): void;
}

export const useAuth = create<InitialAuthState>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (newState: boolean) => set({ isLoggedIn: newState }),
}));
