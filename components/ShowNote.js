import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { HeartIcon } from "@heroicons/react/24/outline";

function ShowNote({ title, description, username, pdfurl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
      addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    }

    return () => {
      removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-7 lg:py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
            <div className="border shadow-md pdfDiv ">
              <Document
                file={pdfurl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={"Loading..."}
              >
                <Page
                  width={windowWidth < 568 ? screen.width - 20 : 500}
                  pageIndex={pageNumber}
                  className="shadow-md"
                />
              </Document>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                {title}
              </h1>
              <p className="leading-relaxed ">{description}</p>
              <div className="flex items-center space-x-3  mt-5">
                <button
                  onClick={() => {
                    if (pageNumber !== 0) {
                      setPageNumber(pageNumber - 1);
                    }
                  }}
                  className=" text-white bg-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Previous Page
                </button>

                <span className="text-gray-700 text-lg text-center">
                  Page {pageNumber + 1} of {numPages}
                </span>
                <button
                  onClick={() => {
                    if (
                      pageNumber + 1 < numPages &&
                      pageNumber + 1 != numPages
                    ) {
                      setPageNumber(pageNumber + 1);
                    }
                  }}
                  className="text-white bg-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Next Page
                </button>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex items-center">
                <span className="title-font font-medium text-sm md:text-2xl text-gray-700">
                  {username}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Comments
                </button>
                <div>
                  <button>
                    <HeartIcon
                      className=" w-8 h-8 inline-flex ml-4"
                      color="red"
                    />
                  </button>
                  <span className="text-gray-500">19</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowNote;
