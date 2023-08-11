/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useTimer } from '@/store/timer';
import React, { useEffect } from 'react';
import {
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
  IconRefreshDot,
} from '@tabler/icons-react';
import { playSound } from '@/common/libs/function';
import { useTasks } from '@/store/tasks';
import axios from 'axios';
import { useAuth } from '@/store/auth';
import { useRouter } from 'next/navigation';

export default function Timer() {
  const { activeTask, setIncrementPomos } = useTasks();
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const state = useTimer();
  const {
    focus,
    longBreak,
    replay,
    shortBreak,
    speed,
    status,
    timer,
    setTimerState,
    phase,
    setPauseTimer,
  } = state;

  const color =
    status === 'focus'
      ? 'text-focus'
      : status === 'shortBreak'
      ? 'text-shortBreak'
      : 'text-longBreak';

  function setTimer() {
    const baseValue =
      status === 'focus'
        ? focus
        : status === 'shortBreak'
        ? shortBreak
        : longBreak;
    setTimerState({
      ...state,
      timer: {
        ...state.timer,
        pause: true,
        minutes: baseValue,
        seconds: 0,
      },
      base: baseValue * 60,
      percentage: baseValue * 60,
    });
  }

  function handlePause() {
    playSound('click');
    setPauseTimer();
  }

  function handleNext() {
    if (state.status === 'focus' && state.phase < 4) {
      setTimerState({ ...state, status: 'shortBreak' });
      updateTotalPomos();
    } else if (state.status === 'shortBreak' && state.phase < 4) {
      setTimerState({
        ...state,
        status: 'focus',
        phase: state.phase + 1,
      });
    } else if (state.status === 'focus' && state.phase === 4) {
      setTimerState({
        ...state,
        status: 'longBreak',
        phase: 4,
      });
    } else {
      setTimerState({
        ...state,
        status: 'focus',
        phase: 1,
      });
    }
  }

  function renderStatus() {
    switch (state.status) {
      case 'focus':
        return 'Focus';
      case 'longBreak':
        return 'Long Break';
      case 'shortBreak':
        return 'Short Break';
      default:
        return 'Focus';
    }
  }

  async function updateTotalPomos() {
    if (isLoggedIn) {
      await axios.patch(`/api/task/${activeTask}`, {
        totalPomos: { increment: 1 },
      });
      router.refresh();
    } else {
      setIncrementPomos(activeTask as number);
    }
  }

  useEffect(() => {
    setTimer();
  }, [state.status, focus, longBreak, replay, shortBreak, speed]);

  useEffect(() => {
    if (!state.timer.pause) {
      if (state.timer.seconds > 0 || state.timer.minutes > 0) {
        const timer = setTimeout(() => {
          if (state.timer.seconds > 0) {
            setTimerState({
              ...state,
              timer: {
                ...state.timer,
                seconds: state.timer.seconds - 1,
              },
              percentage: state.percentage - 1,
            });
          } else if (state.timer.minutes > 0) {
            setTimerState({
              ...state,
              timer: {
                ...state.timer,
                minutes: state.timer.minutes - 1,
                seconds: 59,
              },
              percentage: state.percentage - 1,
            });
          }
        }, (1 / speed) * 1000);
        return () => clearTimeout(timer);
      } else if (
        state.status === 'focus' &&
        state.counter < replay &&
        state.phase < 4
      ) {
        playSound('alarm');
        setTimerState({
          ...state,
          status: 'shortBreak',
          timer: {
            ...state.timer,
            pause: true,
            minutes: shortBreak,
            seconds: 0,
          },
        });
        updateTotalPomos();
      } else if (state.status === 'shortBreak') {
        playSound('alarm');
        setTimerState({
          ...state,
          status: 'focus',
          timer: {
            ...state.timer,
            pause: true,
            minutes: focus,
            seconds: 0,
          },
          phase: state.phase + 1,
        });
      } else if (state.status === 'longBreak') {
        playSound('alarm');
        setTimerState({
          ...state,
          status: 'focus',
          timer: {
            ...state.timer,
            pause: true,
            minutes: focus,
            seconds: 0,
          },
          phase: 1,
        });
      } else {
        playSound('alarm');
        setTimerState({
          ...state,
          status: 'longBreak',
          timer: {
            ...state.timer,
            pause: true,
            minutes: longBreak,
            seconds: 0,
          },
          counter: 0,
        });
      }
    }
  }, [state.timer]);

  return (
    <div className="flex flex-col w-full md:w-max md:min-w-[500px] border border-gray-300 shadow-md space-y-10 items-center justify-center p-6 rounded-lg">
      <span>{renderStatus()} Session</span>
      <h2 className="text-8xl font-bold min-w-[290px] flex ">
        {state.timer.minutes < 10 ? '0' : ''}
        {state.timer.minutes}:{state.timer.seconds < 10 ? '0' : ''}
        {state.timer.seconds}
      </h2>
      <div className="flex w-full justify-around">
        <button className="opacity-0" aria-label="prev-button">
          <IconPlayerTrackPrevFilled />
        </button>
        <button
          onClick={handlePause}
          className={`bg-white ${color} min-w-[200px] px-16 py-2 rounded-md font-semibold text-lg border-b-4 border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-100 ease-in-out`}
        >
          {timer.pause ? 'Start' : 'Pause'}
        </button>
        <button
          aria-label="next-button"
          onClick={handleNext}
          className="hover:scale-110 transition-all duration-100 ease-in-out"
        >
          {phase === 4 && status === 'longBreak' ? (
            <IconRefreshDot />
          ) : (
            <IconPlayerTrackNextFilled />
          )}
        </button>
      </div>
    </div>
  );
}
