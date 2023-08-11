import { ITimer, ITimerStatus } from '@/common/types/timer';
import { create } from 'zustand';

export interface InitialTimerState {
  focus: number;
  shortBreak: number;
  longBreak: number;
  replay: number;
  speed: number;
  timer: ITimer;
  status: ITimerStatus;
  counter: number;
  phase: number;
  base: number;
  percentage: number;
  setTimerState(newState: InitialTimerState): void;
  setPauseTimer(): void;
}

export const useTimer = create<InitialTimerState>()((set) => ({
  focus: 1,
  shortBreak: 5,
  longBreak: 15,
  replay: 4,
  speed: 1.03,
  timer: {
    minutes: 25,
    seconds: 0,
    pause: true,
  },
  status: 'focus',
  counter: 0,
  phase: 1,
  base: 0,
  percentage: 0,
  setTimerState: (newState: InitialTimerState) =>
    set((state) => ({
      ...state,
      ...newState,
    })),
  setPauseTimer() {
    set((state) => ({
      timer: {
        ...state.timer,
        pause: !state.timer.pause,
      },
    }));
  },
}));
