import InputField from '@/common/components/InputField';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

interface TaskFormCollapseProps {
  closeCollapse(): void;
}

const TextArea = dynamic(() => import('@/common/components/form/TextArea'));

export default function TaskFormCollapse(props: TaskFormCollapseProps) {
  const { closeCollapse } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const [collapseNote, setCollapseNote] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await axios.post('/api/task', { title, content, authorId: 1 });
    closeCollapse();
    router.refresh();
    setTitle('');
    setContent('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-700 rounded-lg overflow-hidden"
    >
      <div className="p-4 flex flex-col space-y-3">
        <InputField
          placeholder="What are you working on?"
          onChange={(e) => setTitle(e.target.value)}
        />

        {collapseNote ? (
          <TextArea
            placeholder="Some notes..."
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <span
            className="text-xs text-gray-500 font-semibold cursor-pointer"
            onClick={() => setCollapseNote(!collapseNote)}
          >
            + Add Note
          </span>
        )}
      </div>
      <div className="flex w-full justify-end space-x-4 text-sm bg-gray-100 p-4">
        <button
          type="reset"
          className="font-semibold text-gray-500"
          onClick={closeCollapse}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-gray-700 px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
}
