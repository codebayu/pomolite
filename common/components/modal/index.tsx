'use client';

import useGlobalModal from '@/hooks/useModal';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ConfirmChangeTask from './content/ConfirmChangeTask';

export default function Modal() {
  const { isOpen, type, closeModal } = useGlobalModal();
  return (
    <>
      {isOpen && <div className="fixed inset-0 z-50 bg-black opacity-50" />}
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
        onExited={closeModal}
      >
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative min-w-[500px] max-w-full bg-white rounded-lg shadow-lg">
            {type === 'CONFiRM_CHANGE_TASK' && <ConfirmChangeTask />}
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
