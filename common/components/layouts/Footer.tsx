import React from 'react';

export default function Footer() {
  return (
    <div className="flex flex-col space-y-3 w-full border-t p-6  border-gray-200 justify-center items-center">
      <p className="text-gray-600 font-semibold">
        Made with <span className="text-red-500">&hearts;</span> by{' '}
        <a
          href="https://github.com/Bayusetiawan45"
          target="_blank"
          className="text-focus"
        >
          Bayu Setiawan
        </a>
      </p>
      <span className="text-xs text-gray-600">
        ©Pomolite 2023. All Rights Reserved.
      </span>
    </div>
  );
}
