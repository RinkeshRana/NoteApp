import React, { useEffect } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import NoteCard from "../../components/NoteCard";
import UploadSection from "../../components/UploadSection";

function Index() {
  const { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     signIn();
  //   }
  // }, [session]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <UploadSection />
    </div>
  );
}

export default Index;
