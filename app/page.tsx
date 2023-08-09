import Home from '@/modules/home';
import Navbar from '@/common/components/layouts/Navbar';
import React from 'react';
import { getTask } from '@/services/tasks';

// SSR
export default async function HomePage() {
  const data = await getTask();
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-between">
        <Home tasks={data} />
      </main>
    </>
  );
}
