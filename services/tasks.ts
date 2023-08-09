'use server';

import { prisma } from '@/common/libs/prisma';
import { ITask } from '@/common/types/task';

export async function getTask(): Promise<ITask[]> {
  const response = await prisma.task.findMany();
  return response;
}

export async function postTask({ title, content, authorId }: ITask) {
  try {
    await prisma.task.create({ data: { title, content, authorId, id: 7 } });
  } catch (error) {
    console.log({ error });
  }
}
