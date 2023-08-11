import { useModal } from '@/store/modal';

export default function useGlobalModal() {
  const {
    showModal,
    setType,
    isOpen,
    type,
    hideModal: closeModal,
  } = useModal();
  function openModal(type: string) {
    setType(type);
    showModal();
  }
  return {
    openModal,
    closeModal,
    isOpen,
    type,
  };
}
