import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import bg_image from "assets/bg_image.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto p-10 pt-16 flex">
      <div className="w-1/2 mr-6">
        <h1 className="text-3xl font-bold text-white">Hero Component</h1>
        <p className="text-xl font-bold text-gray-300 my-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <p className="text-lg text-white my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center my-10">
          <button className="bg-gray-500 py-2 px-4 rounded text-white mx-2 hover:bg-gray-600 flex items-center">
            <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
            Add Member
          </button>
          <button className="bg-gray-500 py-2 px-4 rounded text-white mx-2 hover:bg-gray-600">
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </button>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="flex flex-col h-full justify-end">
          <div className="flex justify-center">
            <button className="bg-gray-500 py-2 px-4 rounded-t text-white mx-2 hover:bg-gray-600">
              Characters
            </button>
            <button className="bg-gray-500 py-2 px-4 rounded-t text-white mx-2 hover:bg-gray-600">
              Places
            </button>
            <button className="bg-gray-500 py-2 px-4 rounded-t text-white mx-2 hover:bg-gray-600">
              Chapters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
