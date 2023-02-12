import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faCircle } from "@fortawesome/free-solid-svg-icons";

const MembersMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 left-0 ml-2 flex flex-col-reverse z-20">
      <div />
      <div className="relative">
        <button
          className="dropdown-button w-52 px-3 py-2 bg-gray-600 text-white border border-transparent hover:bg-gray-700 hover:border-gray-700"
          onClick={toggleDropdown}
        >
          Members
        </button>
        {isOpen && (
          <ul
            className="dropdown-menu absolute bg-white top-0 left-0 mt-2 py-2 w-52 shadow overflow-hidden"
            style={{
              transform: "translateY(-106%)",
            }}
          >
            <li className="px-2 py-2 truncate cursor-pointer relative hover:bg-gray-200">
              <span>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="xs"
                  className="mr-2"
                  style={{
                    fontSize: "6px",
                    color: "#82ca12",
                    marginBottom: "1px",
                    boxShadow: "0px 0px #ccc",
                  }}
                />
                George Washington
              </span>
              <span className="absolute right-0">
                <FontAwesomeIcon icon={faMessage} size="xs" className="mr-2" />
              </span>
            </li>
            <li className="px-2 py-2 truncate cursor-pointer relative hover:bg-gray-200">
              <span>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="xs"
                  className="mr-2"
                  style={{
                    fontSize: "6px",
                    color: "#82ca12",
                    marginBottom: "1px",
                    boxShadow: "0px 0px #ccc",
                  }}
                />
                Abraham Lincoln
              </span>
              <span className="absolute right-0">
                <FontAwesomeIcon icon={faMessage} size="xs" className="mr-2" />
              </span>
            </li>
            <li className="px-2 py-2 truncate cursor-pointer relative hover:bg-gray-200">
              <span>
                <FontAwesomeIcon
                  icon={faCircle}
                  size="xs"
                  className="mr-2"
                  style={{
                    fontSize: "6px",
                    color: "#82ca12",
                    marginBottom: "1px",
                    boxShadow: "0px 0px #ccc",
                  }}
                />
                Franklin D. Roosevelt
              </span>
              <span className="absolute right-0">
                <FontAwesomeIcon icon={faMessage} size="xs" className="mr-2" />
              </span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MembersMenu;
