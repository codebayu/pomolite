import { prisma } from '@/common/libs/prisma';
import type { Task } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body: Task = await request.json();
  const session = await getServerSession();

  const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email || '' },
  });

  if (!prismaUser) {
    return NextResponse.json({}, { status: 401 });
  }

  const task = await prisma.task.create({
    data: {
      title: body.title,
      content: body.content,
      userId: prismaUser.id,
      isDone: body.isDone,
      totalPomos: body.totalPomos,
    },
  });
  return NextResponse.json(task, { status: 201 });
};
