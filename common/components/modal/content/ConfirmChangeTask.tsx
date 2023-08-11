import useGlobalModal from '@/hooks/useModal';
import { IconX } from '@tabler/icons-react';
import React from 'react';
import Button from '../../button';
import { useTimer } from '@/store/timer';
import { useTasks } from '@/store/tasks';

export default function ConfirmChangeTask() {
  const { closeModal } = useGlobalModal();
  const { willActiveTask, setActiveTask } = useTasks();
  const state = useTimer();
  const { setPauseTimer } = state;

  function handleClose() {
    setPauseTimer();
    closeModal();
  }

  function handleConfirm() {
    setActiveTask(willActiveTask as number);
    setPauseTimer();
    closeModal();
  }

  return (
    <div className="flex flex-col w-full rounded-md">
      <div className="flex items-start justify-end p-4 border-b rounded-t">
        <IconX onClick={handleClose} />
      </div>
      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Do you want to switch task?
        </h3>
      </div>
      <div className="flex items-center p-4 space-x-8 justify-end border-t border-gray-200 rounded-b">
        <Button theme="outlined" type="reset" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} theme="filled" type="submit">
          Confirm
        </Button>
      </div>
    </div>
  );
}
