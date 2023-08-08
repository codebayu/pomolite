'use client';

import { useTimer } from '@/store/timer';
import { IconHourglassHigh } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const { status } = useTimer();
  return (
    <header
      className={`text-white flex bg-${status} transition-all ease-in-out duration-300 items-center justify-between w-full p-4 md:px-40 lg:px-96`}
    >
      <div className="flex space-x-1 items-center">
        <IconHourglassHigh />
        <h1 className="font-bold text-2xl">Pomolite</h1>
      </div>
      <Link
        href="/"
        className="py-1 px-3 bg-white rounded-md text-sm bg-opacity-20 flex items-center"
      >
        Login
      </Link>
    </header>
  );
}
