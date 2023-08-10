import { ITask } from '@/common/types/task';
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { IconCirclePlus } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { useHydration } from '@/hooks/useHydration';
import { useTasks } from '@/store/tasks';

const TaskFormCollapse = dynamic(() => import('./TaskFormCollapse'));

export default function Task({ tasks }: { tasks: ITask[] }) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const hydrate = useHydration(useTasks);

  function toggleCollapse() {
    setOpenCollapse(!openCollapse);
  }

  return (
    <div className="flex flex-col space-y-4 w-full md:w-max md:min-w-[500px]">
      {openCollapse ? (
        <TaskFormCollapse closeCollapse={toggleCollapse} />
      ) : (
        <button
          onClick={toggleCollapse}
          className="p-3 rounded-md border border-dashed flex items-center justify-center space-x-2 border-gray-300 font-bold bg-black bg-opacity-5"
        >
          <IconCirclePlus />
          <span>Add Task</span>
        </button>
      )}
      <div className="flex flex-col space-y-2">
        {hydrate && tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
}
