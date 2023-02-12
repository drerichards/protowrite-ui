import React, { useState } from "react";

const MembersMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded hover:bg-gray-200 hover:border-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        Presidents
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Presidents</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div
        className={`${
          isOpen
            ? "block"
            : "hidden"
        } absolute mt-2 origin-top-left rounded-md shadow-lg`}
      >
        <div className="bg-white rounded-md shadow-xs">
          <p className="block px-4 py-2 text-sm text-gray-700">George Washington</p>
          <p className="block px-4 py-2 text-sm text-gray-700">Abraham Lincoln</p>
          <p className="block px-4 py-2 text-sm text-gray-700">Franklin D. Roosevelt</p>
        </div>
      </div>
    </div>
  );
};

export default MembersMenu;
