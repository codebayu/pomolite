import { prisma } from '@/common/libs/prisma';
import { Task } from '@prisma/client';
import { NextResponse } from 'next/server';

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const task = await prisma.task.findUnique({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(task, { status: 200 });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Task = await request.json();
  const task = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: body.title,
      content: body.content,
      totalPomos: body.totalPomos,
      isDone: body.isDone,
    },
  });
  return NextResponse.json(task, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const task = await prisma.task.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task, { status: 200 });
};
