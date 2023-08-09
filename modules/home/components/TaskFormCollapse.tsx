import InputField from '@/common/components/form/InputField';
import { ITask } from '@/common/types/task';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

interface TaskFormCollapseProps {
  closeCollapse(): void;
  defaultValue?: ITask;
}

const TextArea = dynamic(() => import('@/common/components/form/TextArea'));

export default function TaskFormCollapse(props: TaskFormCollapseProps) {
  const { closeCollapse, defaultValue } = props;
  const [title, setTitle] = useState(defaultValue?.title ?? '');
  const [content, setContent] = useState(defaultValue?.content ?? '');
  const router = useRouter();
  const isEdit = Object.keys(defaultValue || {}).length !== 0;

  const [collapseNote, setCollapseNote] = useState(false);

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    await axios.post('/api/task', { title, content });
    closeCollapse();
    router.refresh();
    setTitle('');
    setContent('');
  }

  async function handleUpdate(e: FormEvent) {
    e.preventDefault();
    await axios.patch(`/api/task/${defaultValue?.id}`, { title, content });
    closeCollapse();
    router.refresh();
    setTitle('');
    setContent('');
  }

  async function handleDelete(e: FormEvent) {
    e.preventDefault();
    await axios.delete(`/api/task/${defaultValue?.id}`);
    closeCollapse();
    router.refresh();
  }

  return (
    <form
      onSubmit={isEdit ? handleUpdate : handleCreate}
      className="bg-white text-gray-700 rounded-lg overflow-hidden"
    >
      <div className="p-4 flex flex-col space-y-3">
        <InputField
          placeholder="What are you working on?"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {content || collapseNote ? (
          <TextArea
            defaultValue={content}
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
      <div
        className={`flex w-full ${
          isEdit ? 'justify-between' : 'justify-end'
        } space-x-8 text-sm bg-gray-100 py-2 px-6`}
      >
        {isEdit && (
          <button
            type="reset"
            className="font-semibold text-gray-500"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
        <div className="flex space-x-8">
          <button
            type="reset"
            className="font-semibold text-gray-500"
            onClick={closeCollapse}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-gray-700 px-4 py-2 rounded-lg hover:shadow-md hover:bg-gray-800"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
