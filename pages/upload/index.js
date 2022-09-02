import React, { useEffect } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

function Index() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      signIn();
    }
  }, [session]);

  return (
    <div>
      <Navbar uploadNote="false" />
    </div>
  );
}

export default Index;
