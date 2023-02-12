import React, { useState, useEffect } from "react";
import PWLink from "utils/PWLink.jsx";

const NavigationDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleClick = (event) => {
			if (!event.target.classList.contains("dropdown-button")) {
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
				onClick={toggleDropdown}>
				Menu
				<svg
					className="fill-current h-3 w-3 ml-2"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>

			<div
				className={`dropdown-menu ${
					isOpen ? "block" : "hidden"
				} absolute top-0 left-0 w-16 mt-12 ml-1 shadow-lg`}>
				<div className="bg-white shadow-xs">
					<PWLink
						to="/create-story"
						classes={"block pl-2 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-white border border-b-slate-300"}>
						Story
					</PWLink>
					<PWLink
						to="/hero"
						classes={"block pl-2 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-white border border-b-slate-300"}>
						Hero
					</PWLink>
					<PWLink
						to="/detail"
						classes={"block pl-2 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-white border border-b-slate-300"}>
						Detail
					</PWLink>
				</div>
			</div>
		</div>
	);
};

export default NavigationDropdown;
