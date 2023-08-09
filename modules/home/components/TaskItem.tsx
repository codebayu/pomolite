import { ITask } from '@/common/types/task';
import { IconCircleCheckFilled, IconDotsVertical } from '@tabler/icons-react';
import React from 'react';

export default function TaskItem({ task }: { task: ITask }) {
  return (
    <div
      key={task.id}
      className="p-4 w-full flex justify-between items-center bg-white text-gray-700 font-semibold shadow-md md:w-max md:min-w-[500px] rounded-lg"
    >
      <div className="flex space-x-1">
        <IconCircleCheckFilled className="text-gray-400" />
        <h4>{task.title}</h4>
      </div>
      <div className="text-gray-400 rounded-md cursor-pointer hover:bg-gray-100">
        <IconDotsVertical />
      </div>
    </div>
  );
}
