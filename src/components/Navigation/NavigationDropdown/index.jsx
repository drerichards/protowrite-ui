import React, { useState, useEffect } from "react";
import PWLink from "utils/PWLink.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !event.target.classList.contains("dropdown-button") &&
        !event.target.classList.contains("menu-bars")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="dropdown-button flex items-center px-3 py-2 bg-gray-800 text-white border border-transparent hover:bg-gray-700 hover:border-gray-700"
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon icon={faBars} size="xs" className="menu-bars mr-2" />
        Menu
      </button>
      <div
        className={`dropdown-menu ${
          isOpen ? "block" : "hidden"
        } absolute z-50 top-0 right-0 w-36 mt-12 ml-2 shadow-lg`}
      >
        <div className="bg-white shadow-xs">
          <PWLink
            to="/create-story"
            classes={
              "block pl-2 py-2 text-gray-700 hover:bg-gray-900 hover:text-white"
            }
          >
            Story
          </PWLink>
          <PWLink
            to="/detail"
            classes={
              "block pl-2 py-2 text-gray-700 hover:bg-gray-900 hover:text-white"
            }
          >
            Detail
          </PWLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;
