'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

export default function LoginInfo() {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="py-1 px-3 rounded-md border border-gray-300 text-sm flex items-center hover:shadow-md hover:scale-105"
      >
        Login
      </button>
    </div>
  );
}
