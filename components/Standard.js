import React from "react";

function Standard() {
  return (
    <div className="w-2/4">
      <div className="bg-gray-600 text-4xl text-center py-10 rounded-md text-white shadow-lg">
        Choose your standard !
      </div>
      <div className="bg-gray-200 h-full mt-10 rounded-md shadow-lg space-y-14 max-h-max bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="self-center flex space-x-5 justify-center p-10 pt-16">
          <div className="text-white text-center py-28 bg-green-600 rounded-md text-4xl shadow-lg w-1/5 hover:bg-gray-300 hover:cursor-pointer">
            11
          </div>
          <div className="text-white text-center  py-28 bg-green-800 rounded-md text-4xl shadow-lg w-1/5 hover:bg-gray-300 hover:cursor-pointer">
            12
          </div>
        </div>
      </div>
    </div>
  );
}

export default Standard;
