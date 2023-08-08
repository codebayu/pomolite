'use client';

import { ITask } from '@/common/types/task';
import React from 'react';
import Timer from './Timer';
import PhaseInfo from './PhaseInfo';
import { useTimer } from '@/store/timer';

// View Only
export default function Home({ tasks }: { tasks: ITask[] }) {
  const { status } = useTimer();
  return (
    <section
      className={`flex flex-col items-center p-2 space-y-10 transition-all ease-in-out duration-300 bg-${status} text-white pt-10 w-full min-h-screen`}
    >
      <Timer />
      <PhaseInfo />
    </section>
  );
}
