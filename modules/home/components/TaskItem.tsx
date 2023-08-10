import { ITask } from '@/common/types/task';
import { IconCircleCheckFilled, IconDotsVertical } from '@tabler/icons-react';
import React, { useState } from 'react';
import TaskFormCollapse from './TaskFormCollapse';
import { useTasks } from '@/store/tasks';

export default function TaskItem({ task }: { task: ITask }) {
  const [collapseEdit, setCollapseEdit] = useState(false);
  const { setActiveTask, activeTask } = useTasks();

  function toggleCollapse() {
    setCollapseEdit(!collapseEdit);
  }

  return (
    <>
      {collapseEdit ? (
        <TaskFormCollapse closeCollapse={toggleCollapse} defaultValue={task} />
      ) : (
        <div
          key={task.id}
          onClick={() => setActiveTask(task.id)}
          className={`p-4 w-full flex justify-between border-l-4 ${
            activeTask === task.id ? 'border-black' : 'border-gray-300'
          } items-center cursor-pointer bg-white text-gray-700 font-semibold shadow-md md:w-max md:min-w-[500px] rounded-lg`}
        >
          <div className="flex space-x-1">
            <IconCircleCheckFilled
              className={`${task.isDone ? 'text-green-600' : 'text-gray-400'}`}
            />
            <h4>{task.title}</h4>
          </div>
          <div
            className="text-gray-400 rounded-md cursor-pointer hover:bg-gray-100"
            onClick={toggleCollapse}
          >
            <IconDotsVertical />
          </div>
        </div>
      )}
    </>
  );
}
