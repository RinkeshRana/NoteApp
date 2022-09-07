import React from "react";
import Navbar from "../../components/Navbar";
import ShowNote from "../../components/ShowNote";

function note({data :{title,description, name, pdfURL}}) {
  return (
    <div>
      <Navbar />
      <ShowNote title={title} description={description} username={name} pdfurl={pdfURL} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { note } = context.query;
  const res = await fetch(`https://note-app-olive.vercel.app/api/fetchnote?id=${note}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}



export default note;
