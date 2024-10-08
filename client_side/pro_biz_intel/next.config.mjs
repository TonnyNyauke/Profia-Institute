/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_ZGlzY3JldGUtZm9hbC0yMS5jbGVyay5hY2NvdW50cy5kZXYk',
    },
    middleware: [
      {
        name: 'clerk',
        path: './middleware/clerk.ts',
      },
    ],
  };
  
  export default nextConfig;