import { useTimer } from '@/store/timer';
import React from 'react';

export default function Loader() {
  const { status, percentage, base } = useTimer();
  const progress = (percentage / base) * 100 || 100;
  return (
    <div
      className={`flex justify-end w-full shadow-sm h-3 overflow-hidden rounded-full bg-${status}`}
    >
      <div className="bg-white h-3" style={{ width: `${progress}%` }} />
    </div>
  );
}
