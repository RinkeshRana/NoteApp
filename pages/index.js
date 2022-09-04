import React from "react";
import LoginBtn from "../components/LoginBtn";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";

function index() {
  return (
    <div>
      {/* <LoginBtn /> */}
      <Navbar />
      {/* <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Welcome />
      </div> */}
      <div className="flex mx-6 my-3 flex-wrap justify-center">
        <NoteCard />
      </div>
    </div>
  );
}

export default index;
