import { ITask } from '@/common/types/task';
import { IconCircleCheckFilled, IconDotsVertical } from '@tabler/icons-react';
import React, { useState } from 'react';
import TaskFormCollapse from './TaskFormCollapse';
import { useTasks } from '@/store/tasks';
import useGlobalModal from '@/hooks/useModal';
import { useTimer } from '@/store/timer';

export default function TaskItem({ task }: { task: ITask }) {
  const [collapseEdit, setCollapseEdit] = useState(false);
  const { setActiveTask, setWillActiveTask, activeTask } = useTasks();
  const state = useTimer();
  const { status, timer, setPauseTimer } = state;
  const { openModal } = useGlobalModal();

  function toggleCollapse() {
    setCollapseEdit(!collapseEdit);
  }

  function handleClickTaskItem() {
    if (!timer.pause && status === 'focus') {
      setPauseTimer();
      setWillActiveTask(task.id);
      openModal('CONFiRM_CHANGE_TASK');
    } else {
      setActiveTask(task.id);
    }
  }

  return (
    <>
      {collapseEdit ? (
        <TaskFormCollapse closeCollapse={toggleCollapse} defaultValue={task} />
      ) : (
        <div
          key={task.id}
          className={`w-full flex justify-between border-l-8 ${
            activeTask === task.id ? 'border-black' : 'border-gray-300'
          } items-center cursor-pointer bg-white text-gray-700 font-semibold shadow-md md:w-max md:min-w-[500px] rounded-lg`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex space-x-1 p-4" onClick={handleClickTaskItem}>
              <IconCircleCheckFilled
                className={`${
                  task.isDone ? 'text-green-600' : 'text-gray-400'
                }`}
              />
              <h4>{task.title}</h4>
            </div>
            <span className="text-xs text-gray-600 font-normal">9 Pomos</span>
          </div>
          <div
            className="text-gray-400 rounded-md  p-4 cursor-pointer hover:bg-gray-100"
            onClick={toggleCollapse}
          >
            <IconDotsVertical />
          </div>
        </div>
      )}
    </>
  );
}
