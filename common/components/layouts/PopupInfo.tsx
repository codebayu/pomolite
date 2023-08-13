'use client';

import { IconX } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function PopupInfo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const open = setTimeout(() => {
      setShow(true);
      console.log('trigger');
    }, 3000);
    return () => {
      clearTimeout(open);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 ${
        show ? 'flex' : 'hidden'
      } flex-col right-4 z-20 bg-white rounded-lg p-4 text-gray-700 shadow-lg`}
    >
      <div className="flex justify-between space-x-4 items-center">
        <p className="font-bold">You got some error when login?</p>
        <IconX
          className=" text-gray-600 cursor-pointer"
          size={20}
          onClick={() => setShow(!show)}
        />
      </div>
      <span className="text-xs">
        Click below for better experience{' '}
        <span className="text-red-600">&#x2665;</span>
      </span>
      <Link
        href="https://dev-pomolite.vercel.app/"
        className="bg-focus flex items-center justify-center rounded-md py-1 px-3 mt-4 text-sm text-white w-max"
      >
        Here
      </Link>
    </div>
  );
}
