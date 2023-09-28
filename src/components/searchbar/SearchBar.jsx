import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	return (
		<div className="search-box bg-blue-dark p-[6px] flex rounded-[10px] w-full items-center justify-between">
			<input
				className="bg-transparent border-none text-blue-sky w-full p-[5px] outline-none text-[0.99rem]"
				type="text"
				placeholder="Search Something....."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button
				onClick={() => {
					navigate(`/search/${searchQuery}`);
				}}
				className="bg-[#068FFF] text-center w-[30px] h-[30px] border-none rounded-[50%] cursor-pointer"
			>
				<span>
					<FaSearch className="w-[100%] mx-auto" />
				</span>
			</button>
		</div>
	);
};

export default SearchBar;
