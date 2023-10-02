import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import SearchBar from "../searchbar/SearchBar";

const Navbar = ({
	sidebarActive,
	toggleSidebarActive,
	toggleSidebarNotActive,
}) => {
	const navigate = useNavigate();
	const [activeSidebar, setActiveSidebar] = useState("");
	return (
		<header className="h-[60px] l:h-[50px] mid-sm:h-[40px]">
			<nav className="flex items-center bg-black-2 p-[10px] justify-between">
				<h1
					onClick={() => navigate("/")}
					className="mid-xl:text-[28px] l:text-[22px] mid-sm:text-[19px] font-[700] text-pink text-[30px] flex items-center gap-[5px] cursor-pointer"
				>
					<img
						className="w-[40px] l:w-[29px] mid-sm:w-[24px]"
						src="/movix-logo.png"
						alt=""
					/>
					MovieFlix DB
				</h1>
				<div className="mid-l:hidden search-box w-[400px]">
					<SearchBar />
				</div>
				<ul className="flex mid-l:hidden items-center list-none">
					<li
						className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer"
						onClick={() => navigate("/")}
					>
						Home
					</li>
					<li
						className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer"
						onClick={() => navigate("/explore/movie")}
					>
						Browse Movies
					</li>
					<li
						onClick={() => navigate("/explore/tv")}
						className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer"
					>
						Browse Tv Shows
					</li>
				</ul>
				<div className="hidden mid-l:flex items-center gap-3">
					<div className="mobileSearch">
						<button
							onClick={() => {
								!sidebarActive
									? toggleSidebarActive()
									: toggleSidebarNotActive();
								setActiveSidebar("search");
							}}
							className="bg-[#068FFF] text-center w-[30px] h-[30px] border-none rounded-[50%] cursor-pointer"
						>
							<span>
								{sidebarActive && activeSidebar == "search" ? (
									<FaTimes className="w-full mx-auto" />
								) : (
									<FaSearch className="w-[100%] mx-auto" />
								)}
							</span>
						</button>
					</div>
					<h2
						onClick={() => {
							!sidebarActive ? toggleSidebarActive() : toggleSidebarNotActive();
							setActiveSidebar("simple");
						}}
						className={`sidebarm text-[24px] mid-sm:text-[20px] text-pink cursor-pointer ${
							sidebarActive ? "sidebarActive" : ""
						}`}
					>
						{sidebarActive && activeSidebar == "simple" ? (
							<FaTimes />
						) : (
							<FaBars />
						)}
					</h2>
				</div>
			</nav>
			<div
				className={`${
					sidebarActive ? "fixed" : "hidden"
				} mobileSearchBar w-full z-[1]`}
			>
				{activeSidebar == "simple" ? (
					<Sidebar type={"simple"} />
				) : (
					<Sidebar type={"search"} />
				)}
			</div>
		</header>
	);
};

export default Navbar;
