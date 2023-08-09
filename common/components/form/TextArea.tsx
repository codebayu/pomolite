import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  placeholder: string;
  defaultValue?: string;
  onChange(e: ChangeEvent<HTMLTextAreaElement>): void;
}
export default function TextArea(props: TextAreaProps) {
  const { placeholder, defaultValue, onChange } = props;
  return (
    <textarea
      className="bg-gray-100 p-2 outline-none rounded-md text-sm text-gray-600"
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
}
