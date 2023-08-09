import Home from '@/modules/home';
import Navbar from '@/common/components/layouts/Navbar';
import React from 'react';
import { prisma } from '@/common/libs/prisma';
import { ITask } from '@/common/types/task';

// Server Component
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

// Server Fetching
async function getTask(): Promise<ITask[]> {
  const response = await prisma.task.findMany();
  return response;
}
