// components/ProtectedRoute.js
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>; // Handle loading state
  }

  // If the user is not authenticated, redirect them to the homepage
  if (status !== 'authenticated' || !session) {
    router.push('/');
    return null; // Prevent rendering the content for unauthenticated users
  }


  return <>{children}</>;
};

export default ProtectedRoute;
