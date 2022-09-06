import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import NoteCard from "./NoteCard";

function FetchNotes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "notes"), orderBy("timestamp", "desc")),

      (snapshot) => {
        setNotes(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, []);
  return (
    <div className="flex mx-6 my-3 flex-wrap justify-center">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          thumbnail={note.thumbnailURL}
          pdf={note.pdf}
          username={note.name}
        />
      ))}
    </div>
  );
}

export default FetchNotes;
