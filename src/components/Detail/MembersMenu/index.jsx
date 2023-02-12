import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
					onClick={toggleDropdown}>
					Members
				</button>
				{isOpen && (
					<ul
						className="dropdown-menu absolute bg-white top-0 left-0 mt-2 py-2 w-52 shadow overflow-hidden"
						style={{
							transform: "translateY(-106%)",
						}}>
						<li className="px-2 py-2 truncate cursor-pointer hover:bg-gray-200">
							<span>
								<FontAwesomeIcon icon={faUser} className="mr-3" />
								George Washington
							</span>
						</li>
						<li className="px-2 py-2 truncate cursor-pointer hover:bg-gray-200">
							<span>
								<FontAwesomeIcon icon={faUser} className="mr-3" />
								Abraham Lincoln
							</span>
						</li>
						<li className="px-2 py-2 truncate cursor-pointer hover:bg-gray-200">
							<span>
								<FontAwesomeIcon icon={faUser} className="mr-3" />
								Franklin D. Roosevelt
							</span>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default MembersMenu;
