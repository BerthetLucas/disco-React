import { records } from "../assets/data/allRecords";
import { useState } from "react";

function Content({ stockOnly, byTrie }) {
  const [liste] = useState(records);

  // Use method slice() to generate a new tab in order to generate a new tab
  // this allowed to reset easly the filter at "all" value.

  const listeTrie = () => {
    if (stockOnly) {
      return liste.filter((item) => item.stock > 0);
    }

    if (byTrie === "year") {
      return liste.slice().sort((a, b) => b.year - a.year);
    }

    if (byTrie === "pitchhtmlfork") {
      return liste.slice().sort((a, b) => b.pitchforkPos - a.pitchforkPos);
    }

    if (byTrie === "all") {
      return liste;
    } else return liste;
  };

  return (
    <div>
      {listeTrie().map((item, index) => (
        <section key={index} className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="p-5 bg-white flex items-center mx-auto border-b shadow-md mb-10 border-gray-400 rounded-lg sm:flex-row flex-col">
              <div className="sm:w-44 sm:h-44 lg:w-40 lg:h-40 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img
                  src={
                    item.coverUrl
                      ? item.coverUrl
                      : "https://www.mowno.com/wp-content/uploads/2018/04/MONOLITHE-NOIR-rin.jpg"
                  }
                  alt="RIN"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-2xl title-font font-bold mb-2">
                  {item.title}
                </h1>
                <h3 className="text-black text-xl title-font mb-2">
                  {item.artist}
                  <span className="font-light mr-2">{item.year}</span>
                </h3>
                <p className="leading-relaxed text-base">{item.comment}</p>
                <div className="py-4">
                  {item.stock > 0 ? (
                    <div className="inline-block mr-2">
                      <div className="flex pr-2 h-full items-center">
                        <svg
                          className="text-green-500 w-6 h-6 mr-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <p className="title-font font-medium">{item.stock}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="inline-block mr-2">
                      <div className="flex pr-2 h-full items-center">
                        <svg
                          className="text-gray-500 w-6 h-6 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                        <p className="title-font font-medium">out of stock</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="md:flex font-bold text-gray-800">
                  <div className="w-full md:w-1/2 flex space-x-3">
                    <div className="w-1/2">
                      <p>pitchfork pos : #28</p>
                    </div>
                    <div className="w-full">
                      <div className="float-right">
                        <button
                          type="button"
                          className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 ease select-none hover:bg-teal-400"
                        >
                          {" "}
                          +{" "}
                        </button>
                        <button
                          type="button"
                          className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 ease select-none hover:bg-purple-800"
                        >
                          {" "}
                          -{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Content;
