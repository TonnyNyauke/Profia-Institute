'use client'

import { SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  return (
    <div className='flex justify-center items-center mt-14'>
      <SignUp
        fallbackRedirectUrl={'/home'}
      />
    </div>
  );
}