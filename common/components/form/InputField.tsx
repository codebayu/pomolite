import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  placeholder: string;
  defaultValue?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

export default function InputField(props: InputFieldProps) {
  const { placeholder, defaultValue, onChange } = props;
  return (
    <input
      type="text"
      className="text-lg py-4 w-full border-none outline-none text-md font-semibold text-gray-500"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
