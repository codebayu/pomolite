/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ITask } from '@/common/types/task';
import React, { useEffect } from 'react';
import Timer from './Timer';
import PhaseInfo from './PhaseInfo';
import { useTimer } from '@/store/timer';
import Task from './Task';
import { ISession } from '@/common/types/auth';
import { useAuth } from '@/store/auth';
import { useTasks } from '@/store/tasks';
import InfoSection from './InfoSection';
import TagManager from 'react-gtm-module';
import { generateUUID } from '@/common/libs/function';

interface HomeProps {
  tasks: ITask[];
  session: ISession | null;
}

// View Only
export default function Home({ tasks, session }: HomeProps) {
  const { status } = useTimer();
  const { setIsLoggedIn, setSession } = useAuth();
  const { localTask } = useTasks();

  const bg =
    status === 'focus'
      ? 'bg-focus'
      : status === 'shortBreak'
      ? 'bg-shortBreak'
      : 'bg-longBreak';

  function initializeTagManager() {
    const GTM_ID = process.env.GTM_ID;
    if (!GTM_ID) return;
    TagManager.initialize({ gtmId: GTM_ID });
  }

  function initializeUserLogin() {
    const userId = localStorage.getItem('user');
    if (!userId) localStorage.setItem('user', generateUUID());
    if (!session) return setIsLoggedIn(false);
    setSession(session);
    setIsLoggedIn(true);
  }

  useEffect(() => {
    initializeUserLogin();
    initializeTagManager();
  }, []);

  return (
    <>
      <section
        className={`flex flex-col items-center p-2 space-y-6 transition-all ease-in-out duration-300 ${bg} text-white py-20 w-full min-h-screen`}
      >
        <Timer />
        <PhaseInfo />
        <Task tasks={!session ? localTask : tasks} />
      </section>
      <InfoSection />
    </>
  );
}
