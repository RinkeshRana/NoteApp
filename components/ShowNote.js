import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { HeartIcon } from "@heroicons/react/24/outline";

function ShowNote() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-7 lg:py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
            <div className="border shadow-md">
              <Document file="/sample.pdf">
                <Page pageIndex={0} />
              </Document>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Physics Chapter 7
              </h1>
              <p className="leading-relaxed ">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex items-center">
                <span className="title-font font-medium text-sm md:text-2xl text-gray-700">
                  Rinkesh Rana
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
