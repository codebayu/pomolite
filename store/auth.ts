import { create } from 'zustand';

interface ISession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
}

export interface InitialAuthState {
  isLoggedIn: boolean;
  session: ISession;
  setIsLoggedIn(state: boolean): void;
  setSession(state: ISession): void;
}

export const useAuth = create<InitialAuthState>()((set) => ({
  isLoggedIn: false,
  session: {} as ISession,
  setIsLoggedIn: (newState: boolean) => set({ isLoggedIn: newState }),
  setSession: (newState: ISession) => set({ session: newState }),
}));
