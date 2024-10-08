import Link from 'next/link';
import React from 'react';
import { useAuth } from '@clerk/clerk-react';

function Login() {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <div className="flex flex-col w-96 mx-auto">
        <div className="flex flex-row">
          {!isSignedIn && (
            <Link href="/sign-in/" className="w-full p-2 mb-4 border border-blue-500 rounded mx-1">
              Sign in
            </Link>
          )}
          <Link href="/sign-up/" className="w-full p-2 mb-4 border border-blue-500 rounded mx-1">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;