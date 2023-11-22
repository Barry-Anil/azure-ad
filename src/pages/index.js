import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.name;

  if (status === "loading") {
    return <p className="font-bold text-3xl mb-4">Hang on there...</p>
  }

  console.log(session, "Session")

  if (status === "authenticated" && session != null) {
    return (
      <main className="p-5">
        <p className="font-bold text-3xl mb-4">Signed in as {userEmail}</p>
        <button
          className="border-0 px-4 py-2 rounded-md bg-black text-white mb-4"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <Image
          width={100}
          height={100}
          alt="pixel bay"
          src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png"
        />
      </main>
    );
  }

  async function onClick() {
    const response = await fetch("/api/hello");
    const json = await response.json();
    const { data, error } = json;
    console.log(data?.content ?? error);
  }



  return (
    <main className="p-5">
      <p className="font-bold text-3xl mb-4">Not signed in.</p>
      <button
        className="border-0 px-4 py-2 rounded-md bg-black text-white"
        onClick={onClick}
      >
        Sign in with Github
      </button>
      <button
        className="border-0 px-4 py-2 rounded-md bg-sky-700 text-white ml-4"
        onClick={() => signIn('azure-ad')}
      >
        Sign in with Azure AD
      </button>
    </main>
  );
}
