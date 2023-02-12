import React from "react";
import NavigationDropdown from "./NavigationDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import PWLink from "utils/PWLink.jsx";

const NavigationBanner = () => (
  <nav className="flex items-center justify-between bg-gray-800 p-4">
    <div className="flex items-center">
      <PWLink to="/">
        <FontAwesomeIcon
          icon={faBrain}
          size="2x"
          className="bg-slate-200 mr-2 rounded-full p-3"
        />
      </PWLink>
      <PWLink to="/" classes={"text-white text-xl font-bold"}>
        ProtoWrite
      </PWLink>
    </div>
    <div className="flex items-center">
      <PWLink to="/register" classes={"text-white mr-4"}>
        Register
      </PWLink>
      <NavigationDropdown />
    </div>
  </nav>
);

export default NavigationBanner;
