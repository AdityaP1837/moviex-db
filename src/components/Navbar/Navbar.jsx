import React, { useState } from "react";
import { FaBars, FaHome, FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { images } from "../../assests/images";
import { BiCalendar, BiSolidMoviePlay } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";

const Navbar = ({
	sidebarActive,
	toggleSidebarActive,
	toggleSidebarNotActive,
}) => {
	const navigate = useNavigate();
	return (
		<header className="h-[60px] l:h-[50px] mid-sm:h-[40px]">
			<nav className="flex items-center bg-black-2 p-[10px] justify-between">
				<h1
					onClick={() => navigate("/")}
					className="mid-xl:text-[28px] l:text-[22px] mid-sm:text-[19px] font-[700] text-pink text-[30px] flex items-center gap-[5px] cursor-pointer"
				>
					<img
						className="w-[40px] l:w-[29px] mid-sm:w-[24px]"
						src={images.logo}
						alt=""
					/>
					MovieFlix DB
				</h1>
				<div className="mid-l:hidden search-box bg-blue-dark p-[6px] flex rounded-[10px] w-[400px] items-center justify-between">
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
				<ul className="flex mid-l:hidden items-center list-none">
					<li
						className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer"
						onClick={() => navigate("/")}
					>
						Home
					</li>
					<li
						className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer"
						onClick={() => navigate("/movies")}
					>
						Movies
					</li>
					<li className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer">
						Tv Shows
					</li>
					<li className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer">
						People
					</li>
				</ul>
				<div className="hidden mid-l:flex items-center gap-3">
					<div className="mobileSearch">
						<button className="bg-[#068FFF] text-center w-[30px] h-[30px] border-none rounded-[50%] cursor-pointer">
							<span>
								<FaSearch className="w-[100%] mx-auto" />
							</span>
						</button>
					</div>
					<h2
						onClick={() => {
							!sidebarActive ? toggleSidebarActive() : toggleSidebarNotActive();
						}}
						className={`sidebarm text-[24px] mid-sm:text-[20px] text-pink cursor-pointer ${
							sidebarActive ? "sidebarActive" : ""
						}`}
					>
						{sidebarActive ? <FaTimes /> : <FaBars />}
					</h2>
				</div>
			</nav>
			<div
				className={`${
					sidebarActive ? "fixed" : "hidden"
				} mobileSearchBar w-full z-[1]`}
			>
				<div className="bg-black mx-1 mt-[10px] rounded-[10px] py-[5px]">
					<ul className="flex items-center justify-between list-none gap-y-[50px] ">
						<li className="text-pink text-3xl text-center mx-auto flex flex-col items-center gap-1">
							<FaHome />
							<span className="text-[18px] text-white">Home</span>
						</li>
						<li className="text-pink text-3xl text-center mx-auto flex flex-col items-center gap-1">
							<BiSolidMoviePlay />
							<span className="text-[18px] text-white">Browse Movies</span>
						</li>
						<li className="text-pink text-3xl text-center mx-auto flex flex-col items-center gap-1">
							<PiTelevisionSimpleFill />
							<span className="text-[18px] text-white">Browse Tv Shows</span>
						</li>
						<li className="text-pink text-3xl text-center mx-auto flex flex-col items-center gap-1">
							<BiCalendar />
							<span className="text-[18px] text-white">Upcoming</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
