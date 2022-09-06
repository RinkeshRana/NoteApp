import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { storage, db } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

function UploadSection() {
  const { data: session } = useSession();
  const [disableButton, setDisableButton] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdfUpload, setPdfUpload] = useState(null);
  const [thumbnailUpload, setThumbnailUpload] = useState(null);
  const [fileList, setFileList] = useState([]);
  const fileListRef = ref(storage, `pdf`);

  // const uploadPDF = () => {
  //   if (pdfUpload == null) return;

  //   const fileref = ref(storage, `${session.user.email}/pdf/${pdfUpload.name}`);
  //   uploadBytes(fileref, pdfUpload).then(async (res) => {
  //     const downloadURL = await getDownloadURL(fileref);
  //     console.log(downloadURL);
  //     alert("PDF Uploaded");
  //   });
  // };

  // const uploadThumbnail = () => {
  //   if (thumbnailUpload == null) return;

  //   const fileref = ref(
  //     storage,
  //     `${session.user.email}/pdf/${thumbnailUpload.name}`
  //   );
  //   uploadBytes(fileref, thumbnailUpload).then(async () => {
  //     const downloadURL = await getDownloadURL(fileref);
  //     console.log(downloadURL);
  //     alert("PDF Uploaded");
  //   });
  // };

  // useEffect(() => {
  //   listAll(fileListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setFileList((prev) => [prev, url]);
  //       });
  //     });
  //   });
  // }, [fileListRef]);

  const submitUpload = async () => {
    // add doc
    const docRef = await addDoc(collection(db, "notes"), {
      title: title,
      description: description,
      email: session.user.email,
      name: session.user.name,
      timestamp: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);

    // PDF Upload
    const pdfref = ref(storage, `${docRef.id}/pdf/${pdfUpload.name}`);
    uploadBytes(pdfref, pdfUpload).then(async () => {
      const downloadURL = await getDownloadURL(pdfref);
      console.log(downloadURL);
      alert("PDF Uploaded");
      await updateDoc(doc(db, "notes", docRef.id), {
        pdfURL: downloadURL,
      });
    });

    // Thumbnail Upload
    const thumbnailref = ref(
      storage,
      `${docRef.id}/thumbnail/${thumbnailUpload.name}`
    );
    uploadBytes(thumbnailref, thumbnailUpload).then(async () => {
      const downloadURL = await getDownloadURL(thumbnailref);
      console.log(downloadURL);
      alert("Thumbnail Uploaded");
      await updateDoc(doc(db, "notes", docRef.id), {
        thumbnailURL: downloadURL,
        id: docRef.id,
      });
    });
  };
  return (
    <div>
      <section className="text-gray-400 body-font relative">
        <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap justify-center">
          {/* left */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:mr-auto w-full md:py-8 ">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Upload Note
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Help other students by uploading your note!
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Title
              </label>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Short Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className=" mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                PDF
              </label>
              <input
                required
                type="file"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100  file:cursor-pointer"
                onChange={(e) => {
                  setPdfUpload(e.target.files[0]);
                }}
              />
            </div>
            <div className="mb-4 ">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Thumbnail ( You can upload image of first page! )
              </label>
              <input
                required=""
                type="file"
                className="w-full file:cursor-pointer  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
                onChange={(e) => {
                  setThumbnailUpload(e.target.files[0]);
                }}
              />
            </div>
            <button
              // disabled={disableButton}
              className="disabled:bg-indigo-200 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={submitUpload}
              // onSubmit={submitUpload}
              type="submit"
            >
              Upload
            </button>
          </div>

          {/* right */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-200 shadow rounded-lg overflow-hidden sm:ml-10 p-10 flex items-end justify-center relative mt-8 md:mt-0">
            <div>
              {fileList.map((item, index) => {
                return (
                  <iframe src={item} width={100} height={100} key={index} />
                );
              })}
              <NoteCard
                title={title}
                description={description}
                username={session.user.name}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UploadSection;
