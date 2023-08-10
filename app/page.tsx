import Home from '@/modules/home';
import Navbar from '@/common/components/layouts/Navbar';
import React from 'react';
import { prisma } from '@/common/libs/prisma';
import { ITask } from '@/common/types/task';
import { getServerSession } from 'next-auth/next';
import { ISession } from '@/common/types/auth';

// Server Component
export default async function HomePage() {
  const data = await getTask();
  const session: ISession | null = await getServerSession();
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-between">
        <Home tasks={data} session={session} />
      </main>
    </>
  );
}

// Server Fetching
async function getTask(): Promise<ITask[]> {
  const session: ISession | null = await getServerSession();

  const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email || '' },
  });

  if (!prismaUser) return [];

  const response = await prisma.task.findMany({
    where: { userId: prismaUser?.id },
    orderBy: { createdAt: 'desc' },
  });
  return response;
}
