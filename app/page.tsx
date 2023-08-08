import { ITask } from '@/common/types/task';
import axios, { AxiosResponse } from 'axios';
import Home from '@/modules/home';
import Navbar from '@/common/components/layouts/Navbar';
import React from 'react';

// SSR
export default async function HomePage() {
  const { data } = await getTask();
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
async function getTask(): Promise<{ status: number; data: ITask[] }> {
  const response: AxiosResponse = await axios.get(
    `${process.env.BASE_URL}/api/tasks`
  );
  return {
    status: response.status,
    data: response.data.data,
  };
}
