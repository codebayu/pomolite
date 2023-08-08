'use client';

import { useTimer } from '@/store/timer';
import React from 'react';
import Loader from './Loader';

export default function PhaseInfo() {
  const { status, phase, timer } = useTimer();

  const color =
    status === 'focus'
      ? 'text-focus'
      : status === 'shortBreak'
      ? 'text-shortBreak'
      : 'text-longBreak';

  function renderPhase() {
    switch (phase) {
      case 1:
        return 'First';
      case 2:
        return 'Second';
      case 3:
        return 'Third';
      case 4:
        return 'Fourth';
      default:
        return 'First';
    }
  }

  function renderNextPhase() {
    if (status === 'shortBreak') {
      switch (phase) {
        case 1:
          return 'Second Phase';
        case 2:
          return 'Third Phase';
        case 3:
          return 'Fourth Phase';
        default:
          return 'First Phase';
      }
    } else if (status === 'focus' && phase === 4) {
      return 'Long Break';
    } else {
      return 'Short Break';
    }
  }

  function renderStatus() {
    switch (status) {
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

  function renderTimeRemaining() {
    if (timer.minutes > 0) return `${timer.minutes} minutes`;
    return `${timer.seconds} seconds`;
  }

  return (
    <div className="bg-white flex flex-col w-full md:w-max md:min-w-[500px] shadow-lg bg-opacity-80 text-sm p-6 text-gray-500 rounded-lg">
      <h3 className={`font-semibold ${color} text-2xl`}>
        {renderPhase()} Phase
      </h3>
      <p>
        {renderStatus()} -{' '}
        {status === 'focus' ? 25 : status === 'shortBreak' ? 5 : 15} minutes
      </p>
      <div className="mt-8 space-y-1">
        <div className="flex justify-between">
          <span>{renderTimeRemaining()} remaining</span>
          {status !== 'longBreak' && <span>Next: {renderNextPhase()}</span>}
        </div>
        <Loader />
      </div>
    </div>
  );
}
