import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  theme: 'outlined' | 'filled';
  onClick?(e?: any): void;
}
export default function Button(props: ButtonProps) {
  const { children, theme, type, onClick } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        theme === 'outlined'
          ? 'font-semibold text-gray-500'
          : 'text-white bg-gray-700 px-4 py-2 rounded-lg hover:shadow-md hover:bg-gray-800'
      }`}
    >
      {children}
    </button>
  );
}
