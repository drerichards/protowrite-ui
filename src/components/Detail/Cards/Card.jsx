import React from "react";

const Card = ({ backgroundImage, title, caption, textBody }) => {
  return (
    <div
      className="w-full max-w-sm rounded shadow-lg m-4 md:w-1/3"
      style={{ width: "330px" }}
    >
      <div
        className="bg-cover bg-top bg-no-repeat w-full mt-6 md:mt-0"
        style={{ backgroundImage: `url(${backgroundImage})`, height: "400px" }}
      >
        <div className="h-full flex d-flex flex-col relative">
          <div className="flex-1" />
          <div className="flex-none h-40 bottom-0 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-cover backdrop-blur-md">
              <div className="w-full h-full bg-gray-800 opacity-50"></div>
            </div>
            <div className="absolute w-full bottom-0 z-10 overflow-auto p-4 h-40">
              <h3 className="text-white text-xl font-bold">{title}</h3>
              <p className="text-white text-md font-bold mb-2">{caption}</p>
              <hr className="border-gray-500" />
              <p className="text-white text-md mt-2">{textBody}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
