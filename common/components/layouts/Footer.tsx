import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="flex flex-col space-y-1 w-full border-t p-4 border-gray-200 justify-center items-center">
      <Link href="https://github.com/Bayusetiawan45/pomolite" target="_blank">
        <IconBrandGithub />
      </Link>
      <div className="text-gray-600 font-semibold flex space-x-1">
        <p>
          Made with <span className="text-red-500">&hearts;</span> by
        </p>
        <Link
          href="https://github.com/Bayusetiawan45"
          target="_blank"
          className="text-focus"
        >
          Bayu Setiawan
        </Link>
      </div>
      <span className="text-xs text-gray-600">
        ©Pomolite 2023. All Rights Reserved.
      </span>
    </div>
  );
}
