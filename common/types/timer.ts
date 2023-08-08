export interface ITimer {
  minutes: number;
  seconds: number;
  pause: boolean;
}

export interface initialState {
  timer: ITimer;
  status: ITimerStatus;
  counter: number;
  phase: number;
  base: number;
  percentage: number;
}

export type IBreakStatus = 'shortBreak' | 'longBreak';

export type ITimerStatus = 'focus' | 'shortBreak' | 'longBreak';
