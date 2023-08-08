import prisma from '@/common/libs/prisma';
import { ITask } from '@/common/types/task';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: boolean;
  data?: ITask[];
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await prisma.task.findMany();
    res.status(200).json({ status: true, data: response });
  } catch (error) {
    res.status(500).json({ status: false, error: error });
  }
}
