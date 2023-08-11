import { ITask } from '@/common/types/task';
import { IconCircleCheckFilled, IconDotsVertical } from '@tabler/icons-react';
import React, { useState } from 'react';
import TaskFormCollapse from './TaskFormCollapse';
import { useTasks } from '@/store/tasks';
import useGlobalModal from '@/hooks/useModal';
import { useTimer } from '@/store/timer';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/auth';
import axios from 'axios';

export default function TaskItem({ task }: { task: ITask }) {
  const [collapseEdit, setCollapseEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { setActiveTask, setWillActiveTask, activeTask, setTaskDone } =
    useTasks();
  const { openModal } = useGlobalModal();
  const state = useTimer();
  const { status, timer, setPauseTimer } = state;

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

  async function handleMarkDone(id: number) {
    setLoading(true);
    if (isLoggedIn) {
      const response = await axios.get(`/api/task/${id}`);
      const currentStatus = response.data.isDone;
      await axios.patch(`/api/task/${id}`, {
        isDone: !currentStatus,
      });
      router.refresh();
    } else {
      setTaskDone(id);
    }
    setLoading(false);
  }

  return (
    <>
      {collapseEdit ? (
        <TaskFormCollapse closeCollapse={toggleCollapse} defaultValue={task} />
      ) : (
        <div
          key={task.id}
          className={`w-full flex justify-between border-l-8 ${
            activeTask === task.id ? 'border-black' : 'border-white'
          } items-center cursor-pointer bg-white text-gray-700 font-semibold shadow-md md:w-max md:min-w-[500px] rounded-lg`}
        >
          <button
            disabled={loading}
            className={`${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => handleMarkDone(task.id)}
          >
            <IconCircleCheckFilled
              size={35}
              className={`${
                task.isDone
                  ? 'text-red-600 hover:text-red-700'
                  : 'text-gray-400 hover:text-gray-500 '
              } mx-2`}
            />
          </button>

          <div
            className="flex w-full items-center justify-between py-4 mr-2"
            onClick={handleClickTaskItem}
          >
            <h4
              className={`${task.isDone ? 'line-through text-gray-500' : ''}`}
            >
              {task.title}
            </h4>
            <span className="text-xs text-gray-600 font-normal">
              {task.totalPomos} Pomos
            </span>
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
