import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";
import FetchNotes from "../components/FetchNotes";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import { db } from "../firebase";

function index() {
  return (
    <div>
      <Navbar />

      <div className="flex mx-6 my-3 flex-wrap justify-center">
        <FetchNotes />
      </div>
    </div>
  );
}

export default index;
