import React from "react";
import NavigationDropdown from "./NavigationDropdown";
import PWLink from "utils/PWLink.jsx";

const NavigationBanner = () => (
  <nav className="flex items-center justify-between bg-gray-800 p-4">
    <div className="flex items-center">
    <PWLink to="/">
      <svg
        className="h-8 w-8 fill-current text-white mr-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M0 10C0 4.48 4.487 0 10 0s10 4.48 10 10-4.487 10-10 10S0 15.52 0 10zm7.5-5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 017.5 5z" />
      </svg>
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
