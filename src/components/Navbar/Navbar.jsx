import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { images } from "../../assests/images";

const Navbar = () => {
    const navigate = useNavigate();
	return (
		<header className="h-[60px] l:h-[50px] mid-sm:h-[40px]">
			<nav className="flex items-center bg-black-2 p-[10px] justify-between">
				<h1 className="mid-xl:text-[28px] l:text-[22px] mid-sm:text-[19px] font-[700] text-pink text-[30px] flex items-center gap-[5px]">
					<img className="w-[40px] l:w-[29px] mid-sm:w-[24px] " src={images.logo} alt="" />
					MovieFlix DB
				</h1>
				<div className="mid-xl:hidden search-box bg-blue-dark p-[6px] flex rounded-[10px] w-[400px] items-center justify-between">
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
					<li className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer" onClick={() => navigate('/')}>Home</li>
					<li className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer" onClick={() => navigate('/movies')}>Movies</li>
					<li className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer">Tv Shows</li>
					<li className="mx-[15px] font-[600] hover:opacity-[0.8] hover:transition-all .4s ease-linear text-[20px] text-pink cursor-pointer">People</li>
				</ul>
				<div className="hidden mid-l:block">
					<h2 className="text-[24px] mid-sm:text-[20px] text-pink cursor-pointer">
						<FaBars />
					</h2>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
