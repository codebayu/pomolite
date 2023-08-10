import { ISession } from '@/common/types/auth';
import { create } from 'zustand';

export interface InitialAuthState {
  isLoggedIn: boolean;
  session: ISession;
  guest: string;
  setIsLoggedIn(state: boolean): void;
  setSession(state: ISession): void;
  setGuest(id: string): void;
}

export const useAuth = create<InitialAuthState>()((set) => ({
  isLoggedIn: false,
  session: {} as ISession,
  guest: '',
  setIsLoggedIn: (newState: boolean) => set({ isLoggedIn: newState }),
  setSession: (newState: ISession) => set({ session: newState }),
  setGuest: (id: string) => set({ guest: id }),
}));
