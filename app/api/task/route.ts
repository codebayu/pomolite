import { prisma } from '@/common/libs/prisma';
import type { Task } from '@prisma/client';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body: Task = await request.json();
  const task = await prisma.task.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: body.authorId,
    },
  });
  return NextResponse.json(task, { status: 201 });
};
