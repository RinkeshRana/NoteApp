import React from "react";
import Navbar from "../../components/Navbar";
import ShowNote from "../../components/ShowNote";

function note({data :{title,description, username, pdfURL}}) {
  return (
    <div>
      <Navbar />
      <ShowNote title={title} description={description} username={username} pdfurl={pdfURL} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { note } = context.query;
  const res = await fetch(`http://localhost:3000/api/fetchnote?id=${note}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}



export default note;
