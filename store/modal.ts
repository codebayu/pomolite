import { create } from 'zustand';

export interface InitialModalState {
  isOpen: boolean;
  type: string;
  showModal(): void;
  hideModal(): void;
  setType(type: string): void;
}

export const useModal = create<InitialModalState>()((set) => ({
  isOpen: false,
  type: ',',
  showModal: () => set({ isOpen: true }),
  hideModal: () => set({ isOpen: false }),
  setType: (type) => set({ type }),
}));
