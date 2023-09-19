import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const SearchBar = () => {
	return (
		<div className="search-box bg-blue-dark p-[6px] flex rounded-[10px] w-[400px] items-center justify-between">
			<input
				className="bg-transparent border-none text-blue-sky w-[90%] p-[5px] outline-none text-[0.99rem]"
				type="text"
				placeholder="Search Something....."
			/>
			<button className="bg-[#068FFF] text-center w-[30px] h-[30px] border-none rounded-[50%] cursor-pointer">
				<span>
					<FaSearch className="w-[100%] mx-auto" />
				</span>
			</button>
		</div>
	);
};

export default SearchBar;
