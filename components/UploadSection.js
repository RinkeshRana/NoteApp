import React from "react";
import NoteCard from "./NoteCard";

function UploadSection() {
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
                type="text"
                id="name"
                name="name"
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
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                PDF
              </label>
              <input
                type="file"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Thumbnail ( You can upload image of first page! )
              </label>
              <input
                type="file"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Upload
            </button>
          </div>

          {/* right */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-200 shadow rounded-lg overflow-hidden sm:ml-10 p-10 flex items-end justify-center relative mt-8 md:mt-0">
            <div>
              <NoteCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UploadSection;
