import { useTimer } from '@/store/timer';
import React from 'react';

export default function Loader() {
  const { status, percentage, base } = useTimer();
  const progress = (percentage / base) * 100 || 100;
  const bg =
    status === 'focus'
      ? 'bg-focus'
      : status === 'shortBreak'
      ? 'bg-shortBreak'
      : 'bg-longBreak';
  return (
    <div
      className={`flex justify-end w-full shadow-sm h-3 overflow-hidden rounded-full ${bg}`}
    >
      <div className="bg-gray-300 h-3" style={{ width: `${progress}%` }} />
    </div>
  );
}
