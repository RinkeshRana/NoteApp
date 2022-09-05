import React, { useState } from "react";
import {
  BookOpenIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  BellIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar({ showUploadNoteBtn }) {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  const router = useRouter();

  const uploadNote = () => {
    if (session) {
      router.push("/upload");
    } else {
      signIn();
    }
  };

  return (
    <div className="border-b ">
      <div
        className={`flex items-center shadow-indigo-200 justify-evenly py-5 border-b ${
          show ? "" : "shadow-md"
        }`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <BookOpenIcon color="black" className="md:w-8 h-6 md:h-8 w-6" />
          <span className="text-black md:ml-3 md:text-lg  font-bold">
            NoteBook
          </span>
        </div>
        <div className="flex items-center border-2 rounded-md w-1/3 h-10">
          <MagnifyingGlassIcon className="w-6 h-6 ml-3" />
          <input
            type="text"
            placeholder="Search"
            className="md:text-lg ml-2 w-full outline-none h-full my-1"
          />
        </div>
        <div className="hidden md:block ">
          <div className={"flex space-x-9 text-gray-500 items-center "}>
            <button
              className={`bg-indigo-500 hover:bg-indigo-600 h-10 w-36 rounded-md text-white ${
                showUploadNoteBtn ? "hidden" : "block"
              } `}
              onClick={uploadNote}
            >
              Upload Note
            </button>
            <BellIcon className="w-9 h-9" />
            {session?.user ? (
              <div>
                <Image
                  onClick={signOut}
                  className="rounded-full cursor-pointer    "
                  src={session.user.image}
                  width={40}
                  height={40}
                  alt="Logged in"
                />
              </div>
            ) : (
              <UserCircleIcon
                className="w-9 h-9 cursor-pointer"
                onClick={signIn}
              />
            )}
          </div>
        </div>
        <Bars3Icon
          className="w-6 h-6 ml-3 md:hidden cursor-pointer"
          color="black"
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      <div
        className={`space-y-5 shadow-md p-3 md:hidden  ${
          !show ? "hidden" : "block"
        }`}
      >
        <div>
          <button
            className="text-gray-500 text-md font-medium "
            onClick={uploadNote}
          >
            Upload Note
          </button>
        </div>
        <div>
          <button className="font-medium text-gray-500 text-md">Profile</button>
        </div>
        <div>
          <button className="font-medium text-gray-500 text-md">
            Notifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
