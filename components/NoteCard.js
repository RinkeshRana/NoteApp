import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import {
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

function NoteCard({ title, description, thumbnail, username, id }) {
  const router = useRouter();
  const openNote = () => router.push(`/note/${id}`);
  return (
    <div
      className="md:w-72 w-52 bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer m-3"
      onClick={openNote}
    >
      <Image
        className="rounded-t-lg"
        src={thumbnail}
        alt="Image not available"
        width={500}
        height={500}
      />

      <div className="p-5">
        <h5 className="mb-2 text-base md:text-xl font-bold tracking-tight text-gray-900 truncate">
          {title}
        </h5>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
        {/* who uploaded */}

        <div className="mt-2 text-gray-500">Uploaded by: {username} </div>

        {/* Likes and comments count */}
        <div className="mt-2 flex space-x-2">
          <div className="flex items-center">
            <HeartIcon className="md:w-6 md:h-6 h-4 w-4 " color="red" />
            <span className="ml-1 text-sm md:text-md">24</span>
          </div>
          <div className="flex items-center">
            <ChatBubbleLeftEllipsisIcon
              className="md:w-6 md:h-6 h-4 w-4"
              color="gray"
            />
            <span className="ml-1 text-sm md:text-md">24</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
