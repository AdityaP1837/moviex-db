import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";
import SearchBar from "../searchbar/SearchBar";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ type }) => {
	const navigate = useNavigate();
	return (
		<div className="sidebarComp bg-pink mx-1 mt-[10px] rounded-[10px] py-[15px] ">
			{type == "simple" ? (
				<ul className="flex items-center flex-wrap justify-between list-none gap-y-[50px] min-l:flex-col l:gap-y-[25px]">
					<li
						onClick={() => {
							navigate("/");
						}}
						className="text-white text-3xl text-center mx-auto flex flex-col items-center gap-1 cursor-pointer transition-opacity .3s ease-in hover:opacity-70 mid-xl:text-2xl min-l:w-[250px] min-l:border-b-[2px] l:text-xl"
					>
						<FaHome />
						<span className="text-[18px] text-white mid-xl:text-[16px]">
							Home
						</span>
					</li>
					<li
						onClick={() => navigate("/explore/movie")}
						className="text-white text-3xl text-center mx-auto flex flex-col items-center gap-1 cursor-pointer transition-opacity .3s ease-in hover:opacity-70 mid-xl:text-2xl min-l:w-[250px] min-l:border-b-[2px] l:text-xl"
					>
						<BiSolidMoviePlay />
						<span className="text-[18px] text-white mid-xl:text-[16px]">
							Browse Movies
						</span>
					</li>
					<li
						onClick={() => navigate("/explore/tv")}
						className="text-white text-3xl text-center mx-auto flex flex-col items-center gap-1 cursor-pointer transition-opacity .3s ease-in hover:opacity-70 mid-xl:text-2xl min-l:w-[250px] min-l:border-b-[2px] l:text-xl"
					>
						<PiTelevisionBold />
						<span className="text-[18px] text-white mid-xl:text-[16px]">
							Browse Tv Shows
						</span>
					</li>
				</ul>
			) : (
				<div className="mx-[10%] my-5">
					<h3 className="text-2xl mb-2 font-bold xl:text-xl min-l:text-[16px]">
						Search for any movie or series
					</h3>
					<SearchBar />
				</div>
			)}
		</div>
	);
};

export default Sidebar;
